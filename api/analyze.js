/*
 * AI 학습 코치 서버 함수 (Vercel Serverless Function)
 * 학생 화면은 이 함수만 부르고, 외부 AI API 키는 서버 환경 변수에만 둡니다.
 *
 * 환경 변수 (Vercel → Project → Settings → Environment Variables)
 *   AI_PROVIDER  : openai | anthropic | gemini   (기본 openai)
 *                  openai 는 OpenAI 호환 API 전부(OpenAI, Groq, OpenRouter, Upstage 등)에 쓸 수 있습니다.
 *   AI_API_KEY   : 해당 서비스의 API 키 (필수)
 *   AI_MODEL     : 모델 이름 (예: gpt-4o-mini, claude-sonnet-4-5, gemini-2.5-flash)
 *   AI_BASE_URL  : OpenAI 호환 서버 주소 (선택, 기본 https://api.openai.com/v1)
 *   ACCESS_CODE  : 설정하면 학생이 이 코드를 입력해야 AI 분석을 쓸 수 있습니다 (선택, 권장)
 */

const SYSTEM = [
  '너는 고등학교 1학년 학생의 기말고사 학습 코치다.',
  '학생이 기출문제와 예상문제에서 틀린 문제, 유형별 정답률을 보내면 다음 순서로 한국어로 답한다.',
  '## 진단 요약 (2~3문장, 잘한 점 1가지 포함)',
  '## 틀린 원인 분석 (오답들을 묶어 원인 2~4개: 개념 부족 / 자료·지문 해석 / 조건 놓침 / 계산 실수 / 선지 함정 등, 각 원인마다 근거가 된 문제를 짧게 언급)',
  '## 유형별 학습 방법 (약한 유형마다 구체적인 공부법 2~3개)',
  '## 기말까지 학습 계획 (하루 30~60분 기준 5일 계획, 날짜 대신 1일차~5일차)',
  '## 다시 확인할 핵심 개념 (5개 이내, 한 줄씩)',
  '규칙: 학생에게 다정하지만 구체적으로 말한다. 보낸 자료에 없는 사실을 지어내지 않는다. 시험 범위 밖 내용은 권하지 않는다. 전체 800자~1400자. 마크다운 제목(##)과 글머리표(-)만 쓴다.'
].join('\n');

function clip(v, n) {
  const t = String(v == null ? '' : v).replace(/\s+/g, ' ').trim();
  return t.length > n ? t.slice(0, n) + '…' : t;
}

function buildPrompt(b) {
  const lines = [];
  lines.push('과목: ' + clip(b.subject, 20));
  if (Array.isArray(b.range) && b.range.length) lines.push('기말 예상 범위: ' + b.range.slice(0, 12).map((r) => clip(r, 160)).join(' / '));
  if (b.past) {
    lines.push('최근 작년 기말 기출 점수: ' + Number(b.past.score) + '/' + Number(b.past.total));
    const wu = b.past.wrongUnits || {};
    const keys = Object.keys(wu).slice(0, 15);
    if (keys.length) lines.push('기출에서 틀린 단원(횟수): ' + keys.map((k) => clip(k, 40) + '×' + Number(wu[k])).join(', '));
  }
  if (Array.isArray(b.stats) && b.stats.length) {
    lines.push('예상문제 유형별 정답: ' + b.stats.slice(0, 20).map((x) => clip(x.type, 30) + ' ' + Number(x.right) + '/' + Number(x.total)).join(', '));
  }
  if (Array.isArray(b.weak) && b.weak.length) lines.push('정답률 낮은 유형: ' + b.weak.slice(0, 5).map((x) => clip(x, 30)).join(', '));
  if (Array.isArray(b.wrongs) && b.wrongs.length) {
    lines.push('최근 틀린 문제:');
    b.wrongs.slice(-15).forEach((w, i) => {
      if (w.src === 'past') {
        lines.push((i + 1) + '. [기출 ' + Number(w.no) + '번 · ' + clip(w.type, 40) + '] 내 답 ' + clip(w.my, 10) + ', 정답 ' + clip(w.correct, 10));
      } else {
        lines.push((i + 1) + '. [예상문제 · ' + clip(w.type, 30) + (w.level ? ' · 난도' + Number(w.level) : '') + '] ' + clip(w.stem, 160) +
          ' / 내 답: ' + clip(w.my, 80) + ' / 정답: ' + clip(w.correct, 80) + (w.explain ? ' / 해설: ' + clip(w.explain, 220) : ''));
      }
    });
  }
  return lines.join('\n');
}

async function callAI(prompt) {
  const provider = (process.env.AI_PROVIDER || 'openai').toLowerCase();
  const key = process.env.AI_API_KEY;
  if (!key) throw new Error('서버에 AI_API_KEY가 설정되지 않았어요.');
  if (provider === 'anthropic') {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: process.env.AI_MODEL || 'claude-sonnet-4-5', max_tokens: 1500, system: SYSTEM, messages: [{ role: 'user', content: prompt }] })
    });
    const d = await r.json();
    if (!r.ok) throw new Error((d.error && d.error.message) || 'AI 응답 오류');
    return (d.content || []).map((c) => c.text || '').join('');
  }
  if (provider === 'gemini') {
    const model = process.env.AI_MODEL || 'gemini-2.5-flash';
    const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models/' + encodeURIComponent(model) + ':generateContent', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({ systemInstruction: { parts: [{ text: SYSTEM }] }, contents: [{ role: 'user', parts: [{ text: prompt }] }], generationConfig: { maxOutputTokens: 1500, temperature: 0.5 } })
    });
    const d = await r.json();
    if (!r.ok) throw new Error((d.error && d.error.message) || 'AI 응답 오류');
    const c = d.candidates && d.candidates[0];
    return c && c.content ? c.content.parts.map((p) => p.text || '').join('') : '';
  }
  const base = (process.env.AI_BASE_URL || 'https://api.openai.com/v1').replace(/\/$/, '');
  const r = await fetch(base + '/chat/completions', {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: 'Bearer ' + key },
    body: JSON.stringify({ model: process.env.AI_MODEL || 'gpt-4o-mini', temperature: 0.5, max_tokens: 1500, messages: [{ role: 'system', content: SYSTEM }, { role: 'user', content: prompt }] })
  });
  const d = await r.json();
  if (!r.ok) throw new Error((d.error && d.error.message) || 'AI 응답 오류');
  return d.choices && d.choices[0] && d.choices[0].message ? d.choices[0].message.content : '';
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.status(405).json({ error: 'POST만 지원해요.' }); return; }
  const need = process.env.ACCESS_CODE;
  if (need && req.headers['x-access-code'] !== need) { res.status(401).json({ error: '접근 코드가 필요해요.' }); return; }
  let body = req.body;
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch (e) { body = null; } }
  if (!body || typeof body !== 'object') { res.status(400).json({ error: '요청 형식이 올바르지 않아요.' }); return; }
  if (JSON.stringify(body).length > 30000) { res.status(413).json({ error: '보낸 자료가 너무 커요.' }); return; }
  if ((!body.wrongs || !body.wrongs.length) && (!body.stats || !body.stats.length)) { res.status(400).json({ error: '분석할 풀이 기록이 없어요.' }); return; }
  try {
    const text = await callAI(buildPrompt(body));
    if (!text) throw new Error('AI가 빈 답을 보냈어요.');
    res.status(200).json({ text });
  } catch (e) {
    res.status(502).json({ error: 'AI 분석 중 문제가 생겼어요: ' + clip(e.message, 160) });
  }
};

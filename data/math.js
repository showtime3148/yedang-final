/* 공통수학 - 2학기 기말 범위: 명제 · 함수(합성·역함수) · 유리함수 · 무리함수 */
(function () {
  const { R, pick, shuffle, gcd, num, intChoices } = U;

  const T_PROP = '명제와 조건·부정';
  const T_CONT = '역·대우와 삼단논법';
  const T_NS = '필요조건·충분조건';
  const T_PROOF = '명제의 증명(귀류법·절대부등식)';
  const T_AMGM = '산술평균과 기하평균';
  const T_FUNC = '함수의 뜻·일대일대응';
  const T_COMP = '합성함수';
  const T_INV = '역함수';
  const T_RAT = '유리함수';
  const T_IRR = '무리함수';
  const T_ESSAY = '서술형';

  window.GUIDE.math = {
    summary:
      '작년 2학기 기말은 객관식 20문항 + 서술형 4문항으로, 명제(6~8문항) → 함수·합성함수·역함수(6문항) → 유리함수·무리함수(6문항) 순서로 고르게 나왔습니다. ' +
      '진리집합의 포함 관계로 범위를 구하는 문제, 증명 과정 빈칸 채우기, 구간별로 정의된 함수의 합성·역함수, 그래프를 보고 유리·무리함수 식을 정하는 문제가 고배점(5점)이었습니다. ' +
      '올해 중간고사는 도형의 방정식과 집합까지였으므로 기말은 명제부터 무리함수까지로 예상됩니다.',
    types: [
      { name: T_PROP, tips: '참·거짓을 판별할 수 있어야 명제입니다. "모든 ↔ 어떤", "이고 ↔ 또는", "≤ ↔ >"로 바꾸면 부정이 됩니다. 조건은 진리집합으로 바꿔 생각하세요.', ex: '다음 중 명제인 것은?' },
      { name: T_CONT, tips: '명제와 대우는 참·거짓이 같습니다. p→q, q→r가 참이면 p→r도 참(삼단논법). 주어진 명제의 대우까지 모두 써 놓고 연결해 보세요.', ex: '항상 참인 명제를 보기에서' },
      { name: T_NS, tips: 'p⇒q이면 p는 충분조건, q는 필요조건. 진리집합으로 P⊂Q를 그려 끝점의 등호 포함 여부를 꼭 확인하세요.', ex: 'p가 q이기 위한 충분조건' },
      { name: T_PROOF, tips: '귀류법(결론을 부정해서 모순), 대우를 이용한 증명, 절대부등식(완전제곱식 ≥ 0)의 흐름을 빈칸 위치별로 익혀 두세요. 등호 성립 조건도 자주 묻습니다.', ex: '증명하는 과정이다' },
      { name: T_AMGM, tips: '양수 a, b에 대해 a + b ≥ 2√(ab). 곱이 상수가 되도록 식을 정리(전개·변형)한 뒤 적용하고, 등호 조건을 확인하세요.', ex: 'a+b의 최솟값은?' },
      { name: T_FUNC, tips: '서로 같은 함수는 정의역의 모든 원소에서 함숫값이 같아야 합니다. 역함수가 존재하려면 일대일대응 → 구간별 일차함수는 기울기 부호가 같아야 합니다.', ex: '역함수가 존재하기 위한' },
      { name: T_COMP, tips: '(f∘g)(x) = f(g(x)) — 안쪽부터 계산합니다. 구간별로 정의된 함수는 안쪽 값이 어느 구간에 속하는지 먼저 확인하세요. 그래프 문제는 y=x를 이용해 y값을 x축으로 옮깁니다.', ex: '(f∘f∘f)(d)의 값' },
      { name: T_INV, tips: 'f⁻¹(a) = b ⇔ f(b) = a. (f∘g)⁻¹ = g⁻¹∘f⁻¹. 증가함수와 그 역함수의 교점은 y = x 위에 있습니다.', ex: '(f⁻¹∘f⁻¹)(16)의 값' },
      { name: T_RAT, tips: 'y = k/(x − p) + q 꼴로 고치면 점근선 x = p, y = q, 대칭점 (p, q)가 바로 보입니다. 평행이동·사분면·대칭 직선 문제는 이 표준형에서 출발하세요.', ex: '옳지 않은 것은?' },
      { name: T_IRR, tips: 'y = ±√(a(x − p)) + q 꼴로 고치면 시작점 (p, q)와 뻗는 방향이 정해집니다. 그래프의 시작점과 지나는 점을 대입해 상수를 정하고, 역함수는 정의역 조건을 꼭 붙이세요.', ex: '그래프가 오른쪽 그림과 같을 때' },
      { name: T_ESSAY, tips: '풀이 과정이 채점됩니다. 사용한 성질(산술·기하평균, 대칭점, 역함수 조건)을 문장으로 쓰고 등호 조건·정의역을 빠뜨리지 마세요.', ex: '최솟값을 구하시오.' }
    ]
  };

  /* ---------- 표시 헬퍼 ---------- */
  const P = (n) => (n < 0 ? '(' + num(n) + ')' : String(n)); // 음수 괄호
  // 항 이어 붙이기: [[계수, '문자'], ...] → "3x² − 2x + 1"
  const poly = (terms) => {
    let s = '';
    terms.forEach(([c, v]) => {
      if (c === 0) return;
      const a = Math.abs(c);
      const body = v ? (a === 1 ? '' : a) + v : String(a);
      if (!s) s = (c < 0 ? '−' : '') + body;
      else s += (c < 0 ? ' − ' : ' + ') + body;
    });
    return s || '0';
  };
  const lin = (a, b, v) => poly([[a, v || 'x'], [b, '']]);
  // 기약분수 문자열 (텍스트)
  const fr = (n, d) => {
    if (d < 0) { n = -n; d = -d; }
    const g = gcd(Math.abs(n), d) || 1;
    n /= g; d /= g;
    return d === 1 ? num(n) : (n < 0 ? '−' : '') + Math.abs(n) + '/' + d;
  };
  // 근호 간단히 k√m
  const rad = (n) => {
    if (n === 0) return '0';
    let k = 1, m = n;
    for (let i = 2; i * i <= m; i++) while (m % (i * i) === 0) { m /= i * i; k *= i; }
    if (m === 1) return String(k);
    return (k === 1 ? '' : k) + '√' + m;
  };
  // 조사 (숫자 끝자리 발음 기준)
  const lastB = (n) => { const d = Math.abs(n) % 10; return [0, 1, 3, 6, 7, 8].indexOf(d) >= 0; };
  const eun = (n) => num(n) + (lastB(n) ? '은' : '는');
  const iga = (n) => num(n) + (lastB(n) ? '이' : '가');
  const ro = (n) => num(n) + (lastB(n) && [1, 7, 8].indexOf(Math.abs(n) % 10) < 0 ? '으로' : '로');
  const C = (x, y) => '(' + num(x) + ', ' + num(y) + ')';
  const Cj = (x, y, j) => C(x, y) + (j === '을' ? (lastB(y) ? '을' : '를') : lastB(y) ? '이' : '가'); // 점 좌표 + 조사
  const tail = (c) => (c === 0 ? '' : (c > 0 ? ' + ' : ' − ') + Math.abs(c));
  const xm = (p, v) => poly([[1, v || 'x'], [-p, '']]); // x − p
  const den = (p, v) => (p === 0 ? (v || 'x') : '(' + xm(p, v) + ')');
  const cx = (a, v) => (a === 1 ? '' : a === -1 ? '−' : num(a)) + (v || 'x');
  const fixedNum = (vals, ansVal, fmt) => {
    // 서로 다른 값 5개(정답 포함)를 오름차순 보기로
    const arr = Array.from(new Set([ansVal].concat(vals))).slice(0, 5).sort((a, b) => a - b);
    return { choices: arr.map(fmt || num), ans: arr.indexOf(ansVal) + 1, shuffle: false };
  };

  /* ---------- 간단한 그래프 SVG ---------- */
  // opt: {xr:[a,b], yr:[c,d], fns:[{f, a, b, endDot}], dots:[[x,y]], guides:[[x,y]], asym:{x,y}, ticks:{x:[[v,label]], y:[[v,label]]}}
  function plot(opt) {
    const W = 260, H = 210, pad = 22;
    const [x0, x1] = opt.xr, [y0, y1] = opt.yr;
    const X = (x) => pad + ((x - x0) / (x1 - x0)) * (W - 2 * pad);
    const Y = (y) => H - pad - ((y - y0) / (y1 - y0)) * (H - 2 * pad);
    const f2 = (v) => v.toFixed(1);
    let s = '<svg viewBox="0 0 ' + W + ' ' + H + '" class="fig-svg" role="img" aria-label="함수의 그래프">';
    s += '<g stroke="currentColor" stroke-width="1" fill="none"><path d="M' + f2(X(x0)) + ' ' + f2(Y(0)) + ' H' + f2(X(x1)) + '"/><path d="M' + f2(X(0)) + ' ' + f2(Y(y0)) + ' V' + f2(Y(y1)) + '"/></g>';
    s += '<g fill="currentColor" font-size="12" font-style="italic" font-family="serif"><text x="' + f2(X(x1) - 2) + '" y="' + f2(Y(0) + 14) + '">x</text><text x="' + f2(X(0) + 4) + '" y="' + f2(Y(y1) + 10) + '">y</text><text x="' + f2(X(0) - 12) + '" y="' + f2(Y(0) + 13) + '">O</text></g>';
    if (opt.asym) {
      s += '<g stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" fill="none">';
      if (opt.asym.x !== undefined) s += '<path d="M' + f2(X(opt.asym.x)) + ' ' + f2(Y(y0)) + ' V' + f2(Y(y1)) + '"/>';
      if (opt.asym.y !== undefined) s += '<path d="M' + f2(X(x0)) + ' ' + f2(Y(opt.asym.y)) + ' H' + f2(X(x1)) + '"/>';
      s += '</g>';
    }
    (opt.guides || []).forEach(([gx, gy]) => {
      s += '<path d="M' + f2(X(gx)) + ' ' + f2(Y(0)) + ' V' + f2(Y(gy)) + ' H' + f2(X(0)) + '" stroke="currentColor" stroke-width=".8" stroke-dasharray="2 2" fill="none"/>';
    });
    (opt.lines || []).forEach((ln) => {
      s += '<path d="M' + f2(X(ln[0])) + ' ' + f2(Y(ln[1])) + ' L' + f2(X(ln[2])) + ' ' + f2(Y(ln[3])) + '" stroke="currentColor" stroke-width="1" fill="none"/>';
    });
    (opt.fns || []).forEach((F) => {
      let d = '', pen = false;
      const N = 160;
      for (let i = 0; i <= N; i++) {
        const x = F.a + ((F.b - F.a) * i) / N;
        const y = F.f(x);
        if (!isFinite(y) || y < y0 - 0.5 || y > y1 + 0.5) { pen = false; continue; }
        d += (pen ? ' L' : ' M') + f2(X(x)) + ' ' + f2(Y(y));
        pen = true;
      }
      s += '<path d="' + d + '" stroke="var(--accent)" stroke-width="2.2" fill="none"/>';
    });
    (opt.dots || []).forEach(([dx, dy]) => { s += '<circle cx="' + f2(X(dx)) + '" cy="' + f2(Y(dy)) + '" r="3" fill="var(--accent)"/>'; });
    s += '<g fill="currentColor" font-size="11">';
    ((opt.ticks && opt.ticks.x) || []).filter(([v]) => v !== 0).forEach(([v, l]) => { s += '<text x="' + f2(X(v) - 4) + '" y="' + f2(Y(0) + 13) + '">' + l + '</text>'; });
    ((opt.ticks && opt.ticks.y) || []).filter(([v]) => v !== 0).forEach(([v, l]) => { s += '<text x="' + f2(X(0) - 6 - 6 * String(l).length) + '" y="' + f2(Y(v) + 4) + '">' + l + '</text>'; });
    (opt.labels || []).forEach(([lx, ly, l]) => { s += '<text x="' + f2(X(lx)) + '" y="' + f2(Y(ly)) + '" font-style="italic" font-family="serif">' + l + '</text>'; });
    s += '</g></svg>';
    return s;
  }

  const L = [];

  /* ======================= 생성기 ======================= */

  // G1. 충분·필요조건 → 상수 범위의 최솟값/최댓값
  L.push({
    type: T_NS, pts: 4,
    gen() {
      const al = R(-5, 3), be = al + R(2, 6);
      const quad = 'x² ' + (al + be === 0 ? '' : (-(al + be) < 0 ? '− ' : '+ ') + (Math.abs(al + be) === 1 ? '' : Math.abs(al + be)) + 'x ') + (al * be === 0 ? '' : (al * be < 0 ? '− ' : '+ ') + Math.abs(al * be) + ' ') + '≤ 0';
      const v = R(0, 3);
      let stem, ansV, ex;
      if (v === 0) {
        stem = '실수 x에 대하여 두 조건 p: ' + quad + ', q: x ≤ a 일 때, p가 q이기 위한 충분조건이 되도록 하는 실수 a의 최솟값은?';
        ansV = be; ex = 'P = {x | ' + num(al) + ' ≤ x ≤ ' + num(be) + '}, Q = {x | x ≤ a}. p ⇒ q 이려면 P ⊂ Q 이어야 하므로 a ≥ ' + num(be) + '. 최솟값은 ' + num(be) + '.';
      } else if (v === 1) {
        stem = '실수 x에 대하여 두 조건 p: ' + quad + ', q: x ≥ a 일 때, p가 q이기 위한 충분조건이 되도록 하는 실수 a의 최댓값은?';
        ansV = al; ex = 'P = {x | ' + num(al) + ' ≤ x ≤ ' + num(be) + '}, Q = {x | x ≥ a}. P ⊂ Q 이려면 a ≤ ' + num(al) + '. 최댓값은 ' + num(al) + '.';
      } else if (v === 2) {
        stem = '실수 x에 대하여 두 조건 p: x ≥ a, q: ' + quad + ' 일 때, p가 q이기 위한 필요조건이 되도록 하는 실수 a의 최댓값은?';
        ansV = al; ex = 'p가 q이기 위한 필요조건 ⇔ q ⇒ p ⇔ Q ⊂ P. Q = {x | ' + num(al) + ' ≤ x ≤ ' + num(be) + '} ⊂ {x | x ≥ a} 이려면 a ≤ ' + num(al) + '. 최댓값은 ' + num(al) + '.';
      } else {
        stem = '실수 x에 대하여 두 조건 p: x ≤ a, q: ' + quad + ' 일 때, p가 q이기 위한 필요조건이 되도록 하는 실수 a의 최솟값은?';
        ansV = be; ex = 'q ⇒ p 이어야 하므로 Q ⊂ P. {x | ' + num(al) + ' ≤ x ≤ ' + num(be) + '} ⊂ {x | x ≤ a} 이려면 a ≥ ' + num(be) + '. 최솟값은 ' + num(be) + '.';
      }
      ex = quad.replace(' ≤ 0', '') + ' = (' + poly([[1, 'x'], [-al, '']]) + ')(' + poly([[1, 'x'], [-be, '']]) + ') ≤ 0 이므로 ' + num(al) + ' ≤ x ≤ ' + num(be) + '.\n' + ex + '\n(오답 주의) 충분조건은 P ⊂ Q, 필요조건은 Q ⊂ P 입니다. 방향을 바꾸면 반대쪽 끝값이 나옵니다.';
      const others = [al, be, -al, -be, al + 1, be - 1, al - 1, be + 1, al + be];
      const ch = fixedNum(shuffle(others.filter((x) => x !== ansV)), ansV);
      return { stem, choices: ch.choices, ans: ch.ans, shuffle: false, explain: ex };
    }
  });

  // G2. 대우가 참이 되도록 하는 자연수 a (포함 관계)
  L.push({
    type: T_CONT, pts: 4,
    gen() {
      const c1 = R(1, 3), c2 = R(1, 3), k = R(2, 3);
      const N = R(2, 6);
      // a − c1 ≥ k a − m ⇔ (k−1)a ≤ m − c1 ; N = floor((m−c1)/(k−1))
      const m = c1 + (k - 1) * N + R(0, k - 2);
      const askSum = R(0, 1) === 1;
      const ansV = askSum ? (N * (N + 1)) / 2 : N;
      const ch = intChoices(ansV, { min: 1 });
      return {
        stem: '명제 \'' + lin(1, -c1, 'a') + ' ≤ x ≤ ' + lin(1, c2, 'a') + '이면 x ≥ ' + lin(k, -m, 'a') + '이다.\'의 대우가 참이 되도록 하는 모든 자연수 a의 ' + (askSum ? '값의 합은?' : '개수는?'),
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '대우가 참 ⇔ 원래 명제가 참 ⇔ P = {x | ' + lin(1, -c1, 'a') + ' ≤ x ≤ ' + lin(1, c2, 'a') + '} ⊂ Q = {x | x ≥ ' + lin(k, -m, 'a') + '}.\n따라서 ' + lin(1, -c1, 'a') + ' ≥ ' + lin(k, -m, 'a') + ', 즉 ' + (k - 1 === 1 ? 'a ≤ ' + (m - c1) : (k - 1) + 'a ≤ ' + (m - c1) + ' 이므로 a ≤ ' + fr(m - c1, k - 1)) + '.\n자연수 a = 1, …, ' + N + ' 이므로 ' + (askSum ? '합은 ' + ansV : '개수는 ' + N) + '.'
      };
    }
  });

  // G3. 절댓값 조건 ⊂ 이차부등식 → 정수 a의 개수
  L.push({
    type: T_NS, pts: 4,
    gen() {
      const r = R(1, 3), al = R(-6, 2), be = al + 2 * r + R(1, 6);
      const cnt = be - al - 2 * r + 1;
      const s = al + be, pr = al * be;
      const q = 'x² ' + (s === 0 ? '' : (s > 0 ? '− ' : '+ ') + (Math.abs(s) === 1 ? '' : Math.abs(s)) + 'x ') + (pr === 0 ? '' : (pr > 0 ? '+ ' : '− ') + Math.abs(pr) + ' ') + '≤ 0';
      const ch = intChoices(cnt, { min: 1 });
      return {
        stem: '실수 x에 대하여 두 조건 p: |x − a| ≤ ' + r + ', q: ' + q + ' 가 있다. p가 q이기 위한 충분조건이 되도록 하는 정수 a의 개수는?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: 'P = {x | a − ' + r + ' ≤ x ≤ a + ' + r + '}, Q = {x | ' + num(al) + ' ≤ x ≤ ' + num(be) + '}.\nP ⊂ Q 이려면 a − ' + r + ' ≥ ' + num(al) + ' 이고 a + ' + r + ' ≤ ' + num(be) + ', 즉 ' + num(al + r) + ' ≤ a ≤ ' + num(be - r) + '.\n정수 a의 개수는 ' + num(be - r) + ' − ' + P(al + r) + ' + 1 = ' + cnt + '.'
      };
    }
  });

  // G4. 산술·기하평균 최솟값 (세 가지 꼴)
  L.push({
    type: T_AMGM, pts: 4,
    gen() {
      const v = R(0, 2);
      if (v === 0) {
        // ax + b/x (+c), ab = 제곱수
        const t = R(1, 6), a = pick([1, 2, 3, 4].filter((d) => (t * t) % d === 0)), b = (t * t) / a;
        const c = R(-3, 5);
        const ansV = 2 * t + c;
        const ch = intChoices(ansV);
        return {
          stem: 'x > 0일 때, ' + poly([[a, 'x'], [c, '']]) + ' + ' + b + '/x 의 최솟값은?',
          choices: ch.choices, ans: ch.ans, shuffle: false,
          explain: (a === 1 ? 'x' : a + 'x') + ' > 0, ' + b + '/x > 0 이므로 산술평균과 기하평균의 관계에 의해\n' + (a === 1 ? 'x' : a + 'x') + ' + ' + b + '/x ≥ 2√(' + (a === 1 ? '' : a) + 'x × ' + b + '/x) = 2√' + a * b + ' = ' + 2 * t + '.\n(등호는 ' + (a === 1 ? 'x' : a + 'x') + ' = ' + b + '/x, 즉 x = ' + fr(t, a) + '일 때)\n따라서 최솟값은 ' + 2 * t + (c === 0 ? '' : ' + ' + P(c)) + ' = ' + ansV + '.'
        };
      }
      if (v === 1) {
        // x > p : a x + b/(x−p) = a(x−p) + b/(x−p) + ap
        const p = R(1, 4), t = R(1, 5), a = pick([1, 2, 4].filter((d) => (t * t) % d === 0)), b = (t * t) / a;
        const ansV = 2 * t + a * p;
        const ch = intChoices(ansV);
        return {
          stem: 'x > ' + p + '일 때, ' + (a === 1 ? '' : a) + 'x + ' + b + '/(x − ' + p + ') 의 최솟값은?',
          choices: ch.choices, ans: ch.ans, shuffle: false,
          explain: 'x − ' + p + ' > 0 이므로 식을 ' + (a === 1 ? '' : a) + '(x − ' + p + ') + ' + b + '/(x − ' + p + ') + ' + a * p + ' 로 바꾸면\n' + (a === 1 ? '' : a) + '(x − ' + p + ') + ' + b + '/(x − ' + p + ') ≥ 2√(' + a + ' × ' + b + ') = ' + 2 * t + '.\n따라서 최솟값은 ' + 2 * t + ' + ' + a * p + ' = ' + ansV + '. (등호: x − ' + p + ' = ' + fr(t, a) + ')'
        };
      }
      // (p x + q/y)(r/x + s y) = pr + qs + ps·xy + qr/(xy)
      let p, q, r, s, tt;
      do { p = R(1, 3); q = R(1, 3); r = R(1, 4); s = R(1, 6); tt = Math.sqrt(p * s * q * r); } while (tt !== Math.floor(tt) || (p === 2 && q === 1 && r === 1 && s === 8));
      const ansV = p * r + q * s + 2 * tt;
      const ch = intChoices(ansV, { min: 1 });
      return {
        stem: 'x > 0, y > 0일 때, (' + (p === 1 ? '' : p) + 'x + ' + q + '/y)(' + r + '/x + ' + (s === 1 ? '' : s) + 'y) 의 최솟값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '전개하면 ' + p * r + ' + ' + (p * s === 1 ? '' : p * s) + 'xy + ' + q * r + '/(xy) + ' + q * s + ' = ' + (p * r + q * s) + ' + ' + (p * s === 1 ? '' : p * s) + 'xy + ' + q * r + '/(xy).\nxy > 0 이므로 ' + (p * s === 1 ? '' : p * s) + 'xy + ' + q * r + '/(xy) ≥ 2√(' + p * s + ' × ' + q * r + ') = ' + 2 * tt + '.\n최솟값은 ' + (p * r + q * s) + ' + ' + 2 * tt + ' = ' + ansV + '. (그냥 각 괄호에 산술·기하평균을 따로 쓰면 등호 조건이 동시에 성립하지 않을 수 있으니 전개해서 푸세요.)'
      };
    }
  });

  // G5. 유리함수 위의 점 A(a,b)에서 a+b 최솟값
  L.push({
    type: T_AMGM, pts: 5,
    gen() {
      const p = R(-2, 4), q = R(-3, 3);
      const k = pick([1, 4, 9, 16, 2, 3, 5, 6, 7, 10]);
      const base = p + q;
      const stemF = 'y = ' + k + '/' + den(p) + tail(q);
      const stem = '함수 ' + stemF + '의 그래프 위의 점 A(a, b)에 대하여 a + b의 최솟값은? (단, a > ' + num(p) + ')';
      const am = den(p, 'a');
      const rt = Math.sqrt(k);
      const exHead = 'b = ' + k + '/' + am + tail(q) + ' 이므로 a + b = ' + am + ' + ' + k + '/' + am + tail(base) + '.\n' + xm(p, 'a') + ' > 0 이므로 산술평균과 기하평균의 관계에 의해 ' + am + ' + ' + k + '/' + am + ' ≥ 2√' + k + (rad(4 * k) === '2√' + k ? '' : ' = ' + rad(4 * k)) + '.\n(등호는 ' + xm(p, 'a') + ' = ' + rad(k) + '일 때)\n';
      if (rt === Math.floor(rt)) {
        const ansV = base + 2 * rt;
        const ch = intChoices(ansV);
        return { stem, choices: ch.choices, ans: ch.ans, shuffle: false, explain: exHead + '최솟값은 ' + 2 * rt + ' + ' + P(base) + ' = ' + num(ansV) + '.' };
      }
      const fmt = (c, r) => (c === 0 ? '' : num(c) + ' + ') + r;
      const ansStr = fmt(base, rad(4 * k));
      const alt = [fmt(base + 1, rad(4 * k)), fmt(base - 1, rad(4 * k)), fmt(base, rad(k)), fmt(base + 1, rad(k)), fmt(base, rad(2 * k)), fmt(base + 2, rad(k))];
      const set = Array.from(new Set([ansStr].concat(shuffle(alt)).filter(Boolean))).slice(0, 5);
      const ch = shuffle(set);
      return { stem, choices: ch, ans: ch.indexOf(ansStr) + 1, shuffle: false, explain: exHead + '따라서 최솟값은 ' + ansStr + '.' };
    }
  });

  // G6. 서로 같은 함수
  L.push({
    type: T_FUNC, pts: 3,
    gen() {
      let m = R(-2, 2), n = R(-2, 3);
      while (n === m) n = R(-2, 3);
      if (m > n) [m, n] = [n, m];
      const p = pick([1, 2, 3, -1]), c = R(-3, 6);
      const b = p - m - n, a = c - m * n;
      const askMinus = R(0, 1) === 1;
      const ansV = askMinus ? a - b : a + b;
      const ch = intChoices(ansV);
      const f = lin(p, 0) + ' + a';
      return {
        stem: '정의역이 {' + num(m) + ', ' + num(n) + '}인 두 함수 f(x) = ' + f + ', g(x) = x² + bx' + (c === 0 ? '' : (c > 0 ? ' + ' : ' − ') + Math.abs(c)) + '에 대하여 f = g가 성립할 때, 상수 ' + (askMinus ? 'a − b' : 'a + b') + '의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: 'f = g ⇔ f(' + num(m) + ') = g(' + num(m) + '), f(' + num(n) + ') = g(' + num(n) + ').\n' +
          'x = ' + num(m) + ': ' + poly([[p * m, ''], [1, 'a']]) + ' = ' + poly([[m * m + c, ''], [m, 'b']]) + '\n' +
          'x = ' + num(n) + ': ' + poly([[p * n, ''], [1, 'a']]) + ' = ' + poly([[n * n + c, ''], [n, 'b']]) + '\n' +
          '두 식을 연립하면 a = ' + num(a) + ', b = ' + num(b) + '. 따라서 ' + (askMinus ? 'a − b = ' : 'a + b = ') + num(ansV) + '.\n(다른 풀이) g(x) − f(x) = ' + den(m) + den(n) + '이 되어야 합니다.'
      };
    }
  });

  // G7. 절댓값이 있는 일차함수의 역함수 존재 조건
  L.push({
    type: T_FUNC, pts: 4,
    gen() {
      const k = R(2, 6), m = R(-2, 3), c = R(-3, 4);
      const v = R(0, 1);
      if (v === 0) {
        const ch = intChoices(k + 1, { min: 1 });
        return {
          stem: '함수 f(x) = ax − ' + k + '|x' + (m === 0 ? '' : (m > 0 ? ' − ' : ' + ') + Math.abs(m)) + '|' + (c === 0 ? '' : (c > 0 ? ' + ' : ' − ') + Math.abs(c)) + '의 역함수가 존재하기 위한 자연수 a의 최솟값은?',
          choices: ch.choices, ans: ch.ans, shuffle: false,
          explain: 'x ≥ ' + num(m) + '에서 기울기는 a − ' + k + ', x < ' + num(m) + '에서 기울기는 a + ' + k + '.\n역함수가 존재하려면 일대일대응이어야 하므로 두 기울기의 부호가 같아야 합니다: (a − ' + k + ')(a + ' + k + ') > 0.\n자연수 a이므로 a > ' + k + ', 최솟값은 ' + (k + 1) + '. (a = ' + k + '이면 한쪽이 상수함수가 되어 일대일이 아님)'
        };
      }
      const ansV = 2 * k + 1;
      const ch = intChoices(ansV, { min: 1 });
      return {
        stem: '함수 f(x) = ax + ' + k + '|x' + (m === 0 ? '' : (m > 0 ? ' − ' : ' + ') + Math.abs(m)) + '|' + (c === 0 ? '' : (c > 0 ? ' + ' : ' − ') + Math.abs(c)) + '의 역함수가 존재하지 않도록 하는 정수 a의 개수는?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '구간별 기울기: x ≥ ' + num(m) + '에서 a + ' + k + ', x < ' + num(m) + '에서 a − ' + k + '.\n역함수가 존재 ⇔ 일대일대응 ⇔ 두 기울기의 부호가 같음 ⇔ (a + ' + k + ')(a − ' + k + ') > 0.\n따라서 역함수가 존재하지 않는 경우는 (a + ' + k + ')(a − ' + k + ') ≤ 0, 즉 −' + k + ' ≤ a ≤ ' + k + '. (a = ±' + k + '이면 한 구간에서 상수함수가 되어 일대일이 아님)\n정수 a의 개수는 2 × ' + k + ' + 1 = ' + ansV + '.'
      };
    }
  });

  // G8. 일대일대응 일차함수 결정
  L.push({
    type: T_FUNC, pts: 3,
    gen() {
      const a = R(-2, 2), len = R(2, 4), b = a + len;
      const m = pick([1, 2, 3, -1, -2, -3]), n = R(-4, 4);
      const fa = m * a + n, fb = m * b + n;
      const lo = Math.min(fa, fb), hi = Math.max(fa, fb);
      const askProd = R(0, 1) === 1;
      const ansV = askProd ? m * n : m + n;
      const ch = intChoices(ansV);
      return {
        stem: '두 집합 X = {x | ' + num(a) + ' ≤ x ≤ ' + num(b) + '}, Y = {y | ' + num(lo) + ' ≤ y ≤ ' + num(hi) + '}에 대하여 X에서 Y로의 함수 f(x) = mx + n이 일대일대응일 때, ' + (askProd ? 'mn' : 'm + n') + '의 값은? (단, m, n은 상수이고 m ' + (m > 0 ? '> 0' : '< 0') + ')',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: 'm ' + (m > 0 ? '> 0이면 증가함수이므로 f(' + num(a) + ') = ' + num(lo) + ', f(' + num(b) + ') = ' + num(hi) : '< 0이면 감소함수이므로 f(' + num(a) + ') = ' + num(hi) + ', f(' + num(b) + ') = ' + num(lo)) + '.\n연립하면 m = ' + num(m) + ', n = ' + num(n) + '. 따라서 ' + (askProd ? 'mn = ' : 'm + n = ') + num(ansV) + '.'
      };
    }
  });

  // G9. 합성함수 값 계산
  L.push({
    type: T_COMP, pts: 3,
    gen() {
      const a = pick([2, 3, -2, -1]), b = R(-4, 4), c = R(-3, 3);
      const f = (x) => a * x + b, g = (x) => x * x + c;
      const m = R(-2, 2), n = R(-2, 2);
      const ansV = f(g(m)) + g(f(n));
      const ch = intChoices(ansV);
      return {
        stem: '두 함수 f(x) = ' + lin(a, b) + ', g(x) = ' + poly([[1, 'x²'], [c, '']]) + '에 대하여 (f∘g)(' + num(m) + ') + (g∘f)(' + num(n) + ')의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '(f∘g)(' + num(m) + ') = f(g(' + num(m) + ')) = f(' + num(g(m)) + ') = ' + num(f(g(m))) + '\n(g∘f)(' + num(n) + ') = g(f(' + num(n) + ')) = g(' + num(f(n)) + ') = ' + num(g(f(n))) + '\n합: ' + num(f(g(m))) + ' + ' + P(g(f(n))) + ' = ' + num(ansV) + '.'
      };
    }
  });

  // G10. f∘h = g 를 만족하는 h
  L.push({
    type: T_COMP, pts: 4,
    gen() {
      const a = pick([2, 3, -2, -1, 1]), b = R(-5, 5);
      const u = pick([1, 2, 3, -1, -2]), v = R(-4, 4);
      const k = R(-3, 4);
      const askG = R(0, 1) === 1; // h∘f = g 형
      if (!askG) {
        // f(h(x)) = a(ux+v)+b
        const ansV = u * k + v;
        const ch = intChoices(ansV);
        return {
          stem: '두 함수 f(x) = ' + lin(a, b) + ', g(x) = ' + lin(a * u, a * v + b) + '에 대하여 f∘h = g를 만족시키는 일차함수 h(x)가 있을 때, h(' + num(k) + ')의 값은?',
          choices: ch.choices, ans: ch.ans, shuffle: false,
          explain: 'f(h(x)) = ' + cx(a, 'h(x)') + tail(b) + ' = ' + lin(a * u, a * v + b) + ' 이므로 ' + cx(a, 'h(x)') + ' = ' + lin(a * u, a * v) + ', h(x) = ' + lin(u, v) + '.\n따라서 h(' + num(k) + ') = ' + num(ansV) + '.'
        };
      }
      // h(f(x)) = g(x), h(x) = ux + v → g(x) = u(ax+b)+v ; h(k) asked via f(x0)=k
      const x0 = R(-3, 3), kk = a * x0 + b;
      const gx = (x) => u * (a * x + b) + v;
      const ansV = gx(x0);
      const ch = intChoices(ansV);
      return {
        stem: '두 함수 f(x) = ' + lin(a, b) + ', g(x) = ' + lin(u * a, u * b + v) + '에 대하여 h∘f = g를 만족시키는 함수 h가 있을 때, h(' + num(kk) + ')의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: 'h(f(x)) = g(x)에서 f(x) = ' + num(kk) + '이 되는 x를 찾으면 ' + lin(a, b) + ' = ' + num(kk) + ' → x = ' + num(x0) + '.\n따라서 h(' + num(kk) + ') = h(f(' + num(x0) + ')) = g(' + num(x0) + ') = ' + num(ansV) + '.'
      };
    }
  });

  // G11. 표로 주어진 함수의 반복 합성
  L.push({
    type: T_COMP, pts: 4,
    gen() {
      let perm;
      do { perm = shuffle([1, 2, 3, 4]); } while (perm.some((v, i) => v === i + 1) && R(0, 3) > 0);
      const f = (x) => perm[x - 1];
      const n = R(5, 30), s = R(1, 4);
      let x = s;
      for (let i = 0; i < n; i++) x = f(x);
      const ansV = x;
      const row = '| x | 1 | 2 | 3 | 4 |\n| f(x) | ' + perm.join(' | ') + ' |';
      const seq = [s];
      for (let i = 0; i < 6; i++) seq.push(f(seq[seq.length - 1]));
      return {
        passage: '집합 X = {1, 2, 3, 4}에 대하여 함수 f : X → X가 다음과 같다.\n' + row,
        stem: 'f¹ = f, fⁿ⁺¹ = f∘fⁿ (n은 자연수)으로 정의할 때, f^' + n + '(' + s + ')의 값은?',
        choices: ['1', '2', '3', '4', '알 수 없다'], ans: ansV, shuffle: false,
        explain: s + '부터 f를 계속 적용하면 ' + seq.join(' → ') + ' … 처럼 일정한 주기로 반복됩니다.\n주기를 이용하면 f^' + n + '(' + s + ') = ' + ansV + '.'
      };
    }
  });

  // G12. (g⁻¹∘f)(x) 주어질 때 (f⁻¹∘g)(k)
  L.push({
    type: T_INV, pts: 3,
    gen() {
      const p = pick([2, 3, 4, -2, -3]), x0 = R(-3, 4), q = R(-6, 6);
      const k = p * x0 + q;
      const ch = intChoices(x0);
      const rev = R(0, 1) === 1;
      const A = rev ? 'f⁻¹∘g' : 'g⁻¹∘f', B = rev ? 'g⁻¹∘f' : 'f⁻¹∘g';
      return {
        stem: '실수 전체의 집합에서 정의된 두 일대일대응 f, g에 대하여 (' + A + ')(x) = ' + lin(p, q) + '일 때, (' + B + ')(' + num(k) + ')의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '(' + B + ') = (' + A + ')⁻¹ 입니다. [(f⁻¹∘g)⁻¹ = g⁻¹∘f]\n(' + B + ')(' + num(k) + ') = t 라 하면 (' + A + ')(t) = ' + num(k) + ', 즉 ' + lin(p, q, 't') + ' = ' + num(k) + ' → t = ' + num(x0) + '.'
      };
    }
  });

  // G13. 구간별 함수의 역함수 (f⁻¹∘f⁻¹)(T)
  L.push({
    type: T_INV, pts: 5,
    gen() {
      const k = R(1, 4);
      // f(x) = x² (x ≥ 0), kx (x < 0) — 증가 일대일대응
      const f = (x) => (x >= 0 ? x * x : k * x);
      const opts = [2, 3, -1, -2];
      const ansV = pick(opts);
      const T = f(f(ansV));
      const finv = (y) => (y >= 0 ? Math.sqrt(y) : y / k);
      const mid = finv(T);
      const ch = fixedNum(shuffle([2, 3, -1, -2, 1, 4, -3].filter((v) => v !== ansV)), ansV);
      return {
        stem: '실수 전체의 집합에서 정의된 함수 f(x) = { x² (x ≥ 0), ' + (k === 1 ? '' : k) + 'x (x < 0) }에 대하여 (f⁻¹∘f⁻¹)(' + num(T) + ')의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: 'x ≥ 0이면 f(x) = x² ≥ 0, x < 0이면 f(x) = ' + (k === 1 ? '' : k) + 'x < 0 이므로 f는 일대일대응입니다.\n' +
          'f⁻¹(' + num(T) + ') = a ⇔ f(a) = ' + num(T) + ' → ' + (T >= 0 ? 'a² = ' + T + ' (a ≥ 0), a = ' + mid : (k === 1 ? '' : k) + 'a = ' + num(T) + ', a = ' + num(mid)) + '.\n' +
          'f⁻¹(' + num(mid) + ') = b ⇔ f(b) = ' + num(mid) + ' → ' + (mid >= 0 ? 'b² = ' + mid + ' (b ≥ 0), b = ' + ansV : (k === 1 ? '' : k) + 'b = ' + num(mid) + ', b = ' + num(ansV)) + '.\n답: ' + num(ansV) + '. (함숫값의 부호로 어느 식을 쓸지 먼저 판단!)'
      };
    }
  });

  // G14. f⁻¹ 값 두 개로 f 결정
  L.push({
    type: T_INV, pts: 4,
    gen() {
      const a = pick([2, 3, -2, -1, 1, -3]), b = R(-5, 5);
      const f = (x) => a * x + b;
      const n1 = R(-2, 1), n2 = n1 + R(1, 3), k = R(-3, 3);
      const v = R(0, 1);
      const ansV = v === 0 ? f(k) : f(f(k));
      const ch = intChoices(ansV);
      return {
        stem: '일차함수 f(x) = ax + b에 대하여 f⁻¹(' + num(f(n1)) + ') = ' + num(n1) + ', f⁻¹(' + num(f(n2)) + ') = ' + num(n2) + '일 때, ' + (v === 0 ? 'f(' + num(k) + ')' : '(f∘f)(' + num(k) + ')') + '의 값은? (단, a, b는 상수)',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: 'f⁻¹(p) = q ⇔ f(q) = p 이므로 f(' + num(n1) + ') = ' + num(f(n1)) + ', f(' + num(n2) + ') = ' + num(f(n2)) + '.\n' +
          poly([[n1, 'a'], [1, 'b']]) + ' = ' + num(f(n1)) + ', ' + poly([[n2, 'a'], [1, 'b']]) + ' = ' + num(f(n2)) + '을 연립하면 a = ' + num(a) + ', b = ' + num(b) + '.\n' +
          (v === 0 ? 'f(' + num(k) + ') = ' + num(ansV) : 'f(' + num(k) + ') = ' + num(f(k)) + ', f(' + num(f(k)) + ') = ' + num(ansV)) + '.'
      };
    }
  });

  // G15. 그래프와 y=x를 이용한 합성·역함수 값
  const stairFig = (function () {
    const g = (x) => (x * x) / 6;
    const e = 5, d = g(e), c = g(d), b = g(c), a = g(b);
    const W = 250, H = 250, pad = 24, s = (W - 2 * pad) / 6;
    const X = (x) => pad + x * s, Y = (y) => H - pad - y * s;
    const f2 = (v) => v.toFixed(1);
    let p = '<svg viewBox="0 0 ' + W + ' ' + H + '" class="fig-svg" role="img" aria-label="y=f(x)와 y=x의 그래프">';
    p += '<g stroke="currentColor" fill="none" stroke-width="1"><path d="M' + X(-0.3) + ' ' + Y(0) + ' H' + X(6) + '"/><path d="M' + X(0) + ' ' + Y(-0.3) + ' V' + Y(6.2) + '"/>';
    p += '<path d="M' + X(-0.2) + ' ' + Y(-0.2) + ' L' + X(6) + ' ' + Y(6) + '"/></g>';
    p += '<g stroke="currentColor" stroke-width=".8" stroke-dasharray="2 2" fill="none">';
    [e, d, c, b].forEach((x) => { p += '<path d="M' + f2(X(x)) + ' ' + f2(Y(0)) + ' V' + f2(Y(g(x))) + ' H' + f2(X(0)) + '"/>'; });
    [d, c, b, a].forEach((y) => { p += '<path d="M' + f2(X(y)) + ' ' + f2(Y(0)) + ' V' + f2(Y(y)) + '"/>'; });
    p += '</g>';
    let dd = '';
    for (let i = 0; i <= 60; i++) { const x = (5.7 * i) / 60; dd += (i ? ' L' : 'M') + f2(X(x)) + ' ' + f2(Y(g(x))); }
    p += '<path d="' + dd + '" stroke="var(--accent)" stroke-width="2.2" fill="none"/>';
    p += '<g fill="currentColor" font-size="12" font-style="italic" font-family="serif">';
    [[a, 'a'], [b, 'b'], [c, 'c'], [d, 'd'], [e, 'e']].forEach(([x, l]) => { p += '<text x="' + f2(X(x) - 3) + '" y="' + f2(Y(0) + 14) + '">' + l + '</text>'; });
    p += '<text x="' + X(0) + '" y="' + Y(0) + '" dx="-12" dy="12">O</text><text x="' + X(5.9) + '" y="' + Y(0) + '" dy="14">x</text><text x="' + X(0) + '" y="' + f2(Y(6.1) + 6) + '" dx="5">y</text>';
    p += '<text x="' + f2(X(4.4)) + '" y="' + f2(Y(5.9)) + '">y = x</text><text x="' + f2(X(3.7)) + '" y="' + f2(Y(0.8)) + '" fill="var(--accent)">y = f(x)</text></g></svg>';
    return p;
  })();
  L.push({
    type: T_COMP, pts: 3,
    gen() {
      // f(e)=d, f(d)=c, f(c)=b, f(b)=a  (letters index: a0 b1 c2 d3 e4)
      const Ls = ['a', 'b', 'c', 'd', 'e'];
      const qs = [
        ['(f∘f)(e)', 2, 'f(e) = d, f(d) = c'],
        ['(f∘f∘f)(e)', 1, 'f(e) = d, f(d) = c, f(c) = b'],
        ['(f∘f)(d)', 1, 'f(d) = c, f(c) = b'],
        ['(f∘f∘f)(d)', 0, 'f(d) = c, f(c) = b, f(b) = a'],
        ['f⁻¹(c)', 3, 'f(d) = c 이므로 f⁻¹(c) = d'],
        ['(f⁻¹∘f⁻¹)(b)', 3, 'f(c) = b → f⁻¹(b) = c, f(d) = c → f⁻¹(c) = d'],
        ['(f⁻¹∘f⁻¹)(a)', 2, 'f(b) = a → f⁻¹(a) = b, f(c) = b → f⁻¹(b) = c'],
        ['(f∘f)⁻¹(b)', 3, '(f∘f)(d) = f(c) = b 이므로 (f∘f)⁻¹(b) = d'],
        ['(f⁻¹∘f⁻¹∘f⁻¹)(a)', 3, 'f⁻¹(a) = b, f⁻¹(b) = c, f⁻¹(c) = d']
      ];
      const [expr, idx, why] = pick(qs);
      return {
        fig: stairFig,
        stem: '함수 y = f(x)의 그래프와 직선 y = x가 그림과 같을 때, ' + expr + '의 값은? (단, 점선은 x축 또는 y축에 평행하다.)',
        choices: Ls, ans: idx + 1, shuffle: false,
        explain: '직선 y = x를 이용하면 y축 위의 값을 x축으로 옮길 수 있습니다. 그림에서 f(e) = d, f(d) = c, f(c) = b, f(b) = a.\n' + why + ' → 답은 ' + Ls[idx] + '.'
      };
    }
  });

  // G16. 유리함수 평행이동
  const ratStr = (k, p, q) => {
    // y = k/(x−p) + q = (q x + (k − q p)) / (x − p)
    const num_ = poly([[q, 'x'], [k - q * p, '']]);
    return '(' + num_ + ')/' + den(p);
  };
  const stdStr = (k, p, q) => num(k) + '/' + den(p) + tail(q);
  L.push({
    type: T_RAT, pts: 4,
    gen() {
      let k, p1, q1, m, n;
      do { k = pick([-6, -5, -4, -3, -2, 2, 3, 4, 5, 6]); p1 = R(-4, 3); q1 = pick([-3, -2, -1, 1, 2, 3]); m = R(-4, 5); n = R(-4, 4); } while (m === 0 || n === 0 || q1 + n === 0);
      const p2 = p1 + m, q2 = q1 + n;
      const askProd = R(0, 2) === 0;
      const ansV = askProd ? m * n : m + n;
      const ch = intChoices(ansV);
      return {
        stem: '함수 y = ' + ratStr(k, p1, q1) + '의 그래프를 x축의 방향으로 m만큼, y축의 방향으로 n만큼 평행이동하면 함수 y = ' + ratStr(k, p2, q2) + '의 그래프와 일치한다. 상수 m, n에 대하여 ' + (askProd ? 'mn' : 'm + n') + '의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '두 식을 y = k/(x − p) + q 꼴로 고칩니다.\ny = ' + stdStr(k, p1, q1) + ' → 점근선의 교점 ' + C(p1, q1) + '\ny = ' + stdStr(k, p2, q2) + ' → 점근선의 교점 ' + C(p2, q2) + '\n(k = ' + num(k) + '로 같으므로 평행이동으로 겹칩니다.)\nm = ' + num(p2) + ' − ' + P(p1) + ' = ' + num(m) + ', n = ' + num(q2) + ' − ' + P(q1) + ' = ' + num(n) + '. 따라서 ' + (askProd ? 'mn = ' : 'm + n = ') + num(ansV) + '.'
      };
    }
  });

  // 사분면 계산 (샘플링)
  const quadrants = (f, xs) => {
    const Q = new Set();
    xs.forEach((x) => {
      const y = f(x);
      if (!isFinite(y) || Math.abs(x) < 1e-9 || Math.abs(y) < 1e-9) return;
      Q.add(x > 0 ? (y > 0 ? 1 : 4) : y > 0 ? 2 : 3);
    });
    return Q;
  };
  const sampleAround = (p, side) => {
    const xs = [];
    for (let e = -6; e <= 6; e += 0.01) {
      const d = Math.pow(10, e);
      if (side >= 0) xs.push(p + d);
      if (side <= 0) xs.push(p - d);
    }
    return xs;
  };

  // G17. 유리함수 그래프의 성질 - 옳지 않은 것
  L.push({
    type: T_RAT, pts: 4,
    gen() {
      let k, p, q;
      do { k = pick([-7, -5, -4, -3, -2, 2, 3, 4, 5, 6]); p = pick([-4, -3, -2, -1, 1, 2, 3]); q = pick([-3, -2, -1, 1, 2, 3, 4]); } while (Math.abs(p) === Math.abs(q));
      const f = (x) => k / (x - p) + q;
      const Qs = quadrants(f, sampleAround(p, 0));
      const notQ = [1, 2, 3, 4].filter((i) => !Qs.has(i));
      const yes = [1, 2, 3, 4].filter((i) => Qs.has(i));
      const xp = poly([[1, 'x'], [-p, '']]);
      const fam = [
        { t: '정의역은 {x | x ≠ ' + num(p) + '인 실수}, 치역은 {y | y ≠ ' + num(q) + '인 실수}이다.', f: '정의역은 {x | x ≠ ' + num(-p) + '인 실수}, 치역은 {y | y ≠ ' + num(q) + '인 실수}이다.', w: '분모가 0이 되는 x = ' + num(p) + '만 제외됩니다.' },
        { t: '점근선의 방정식은 x = ' + num(p) + ', y = ' + num(q) + '이다.', f: '점근선의 방정식은 x = ' + num(q) + ', y = ' + num(p) + '이다.', w: '점근선은 x = ' + num(p) + ', y = ' + num(q) + '입니다.' },
        { t: '그래프는 점 ' + C(p, q) + '에 대하여 대칭이다.', f: '그래프는 점 ' + C(-p, q) + '에 대하여 대칭이다.', w: '대칭의 중심은 점근선의 교점 ' + C(p, q) + '입니다.' },
        { t: '그래프는 직선 y = ' + poly([[1, 'x'], [q - p, '']]) + '에 대하여 대칭이다.', f: '그래프는 직선 y = ' + poly([[1, 'x'], [q + p, '']]) + '에 대하여 대칭이다.', w: '대칭축은 점 ' + Cj(p, q, '을') + ' 지나는 기울기 ±1인 직선 y = ' + poly([[1, 'x'], [q - p, '']]) + ', y = ' + poly([[-1, 'x'], [q + p, '']]) + '입니다.' },
        { t: '함수 y = ' + num(k) + '/x의 그래프를 평행이동하여 겹칠 수 있다.', f: '함수 y = ' + num(-k) + '/x의 그래프를 평행이동하여 겹칠 수 있다.', w: 'k = ' + num(k) + '가 같아야 평행이동으로 겹칩니다.' },
        { t: notQ.length ? '그래프는 제' + notQ[0] + '사분면을 지나지 않는다.' : '그래프는 제1, 2, 3, 4사분면을 모두 지난다.', f: '그래프는 제' + pick(yes) + '사분면을 지나지 않는다.', w: '그래프가 지나는 사분면은 제' + yes.join(', ') + '사분면입니다.' },
        { t: 'x > ' + num(p) + '일 때, x의 값이 증가하면 y의 값은 ' + (k > 0 ? '감소' : '증가') + '한다.', f: 'x > ' + num(p) + '일 때, x의 값이 증가하면 y의 값은 ' + (k > 0 ? '증가' : '감소') + '한다.', w: 'k ' + (k > 0 ? '> 0이면 각 구간에서 감소' : '< 0이면 각 구간에서 증가') + '합니다.' }
      ];
      const chosen = shuffle(fam).slice(0, 5);
      const bad = R(0, 4);
      const choices = chosen.map((c, i) => (i === bad ? c.f : c.t));
      return {
        stem: '함수 y = ' + ratStr(k, p, q) + '의 그래프에 대한 설명으로 옳지 않은 것은?',
        choices, ans: bad + 1,
        explain: 'y = ' + ratStr(k, p, q) + ' = ' + stdStr(k, p, q) + ' (k = ' + num(k) + ').\n옳지 않은 것: "' + chosen[bad].f + '" → ' + chosen[bad].w + '\n나머지는 모두 표준형에서 바로 확인됩니다. (x절편·y절편을 구해 그래프를 그려 보면 사분면도 확인 가능)'
      };
    }
  });

  // G18. 대칭점·지나는 점으로 a+b+c
  L.push({
    type: T_RAT, pts: 4,
    gen() {
      let p, q, d, k;
      do { p = R(-3, 3); q = R(-3, 3); d = pick([-2, -1, 1, 2, 3]); k = pick([-6, -4, -3, -2, -1, 1, 2, 3, 4, 6]); } while (k % d !== 0 || p === 0);
      const x0 = p + d, y0 = q + k / d;
      const a = -p, b = k, c = q;
      const ansV = a + b + c;
      const ch = intChoices(ansV);
      return {
        stem: '함수 y = b/(x + a) + c의 그래프가 점 ' + C(p, q) + '에 대하여 대칭이고 점 ' + Cj(x0, y0, '을') + ' 지날 때, 상수 a, b, c에 대하여 a + b + c의 값은? (단, b ≠ 0)',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '대칭의 중심은 점근선의 교점 (−a, c) 이므로 −a = ' + num(p) + ', c = ' + num(q) + ' → a = ' + num(a) + '.\n점 ' + C(x0, y0) + ' 대입: ' + num(y0) + ' = b/' + P(d) + tail(q) + ' → b/' + P(d) + ' = ' + num(k / d) + ' → b = ' + num(b) + '.\na + b + c = ' + num(a) + ' + ' + P(b) + ' + ' + P(c) + ' = ' + num(ansV) + '.'
      };
    }
  });

  // G19. 유리함수 구간에서 최댓값+최솟값
  L.push({
    type: T_RAT, pts: 4,
    gen() {
      let k, p, q, d1, d2;
      do {
        p = R(-3, 3); q = R(-3, 4);
        d1 = R(1, 4); d2 = d1 + R(1, 5);
        k = pick([-12, -6, -4, 4, 6, 12, 8, -8]);
      } while (k % d1 !== 0 || k % d2 !== 0);
      const s = p + d1, t = p + d2;
      const v1 = k / d1 + q, v2 = k / d2 + q;
      const ansV = v1 + v2;
      const ch = intChoices(ansV);
      return {
        stem: num(s) + ' ≤ x ≤ ' + num(t) + '에서 함수 y = ' + ratStr(k, p, q) + '의 최댓값과 최솟값의 합은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: 'y = ' + stdStr(k, p, q) + '. 점근선 x = ' + num(p) + '이 구간 밖에 있고, k ' + (k > 0 ? '> 0이므로 구간에서 감소' : '< 0이므로 구간에서 증가') + '합니다.\nx = ' + num(s) + '일 때 y = ' + num(v1) + ', x = ' + num(t) + '일 때 y = ' + num(v2) + '.\n최댓값과 최솟값의 합: ' + num(v1) + ' + ' + P(v2) + ' = ' + num(ansV) + '.'
      };
    }
  });

  // G20. 유리함수의 역함수
  L.push({
    type: T_RAT, pts: 4,
    gen() {
      let a, b, c;
      do { a = R(-3, 4); b = R(-6, 6); c = R(-4, 4); } while (b - a * c === 0 || a === 0 || c === 0);
      // f(x) = (ax+b)/(x+c) → f⁻¹(x) = (−cx + b)/(x − a)
      const pp = -c, qq = b, rr = -a;
      const ansV = pp + qq + rr;
      const ch = intChoices(ansV);
      return {
        stem: '함수 f(x) = (' + lin(a, b) + ')/(' + lin(1, c) + ')의 역함수가 f⁻¹(x) = (px + q)/(x + r)일 때, 상수 p, q, r에 대하여 p + q + r의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: 'y = (' + lin(a, b) + ')/(' + lin(1, c) + ')에서 y' + den(-c) + ' = ' + lin(a, b) + ' → ' + den(a, 'y') + 'x = ' + lin(-c, b, 'y') + ' → x = (' + lin(-c, b, 'y') + ')/' + den(a, 'y') + '.\nx, y를 바꾸면 f⁻¹(x) = (' + lin(-c, b) + ')/(' + lin(1, -a) + ').\np = ' + num(pp) + ', q = ' + num(qq) + ', r = ' + num(rr) + ' → p + q + r = ' + num(ansV) + '.'
      };
    }
  });

  // G21. 그래프로 무리함수 식 결정
  L.push({
    type: T_IRR, pts: 4,
    gen() {
      // y = sy·√(sx·s(x − e)) + c,  시작점 (e, c), y절편 y0
      const sx = pick([1, -1]);
      let s, e, t;
      do { s = R(1, 4); t = R(1, 3); e = (t * t) / s; } while (e !== Math.floor(e) || e > 6 || e < 1);
      // sx = -1: domain x ≤ e, e>0 ; sx = 1: domain x ≥ -e
      const E = sx < 0 ? e : -e; // endpoint x
      const sy = sx < 0 ? -1 : 1;
      let c = sx < 0 ? R(1, 3) : R(-3, -1);
      const a = sx * s, b = s * e; // ax + b = sx·s(x − E) ⇒ b = −a·E = s·e
      const f = (x) => sy * Math.sqrt(a * x + b) + c;
      const y0 = f(0);
      const j = R(1, 2), x1 = E + sx * s * j * j; // a x1 + b = s²j²
      const ansV = f(x1);
      const xr = sx < 0 ? [Math.min(x1, -2) - 1, e + 2] : [-e - 2, Math.max(x1, 2) + 1];
      const ys = [0, c, y0, ansV];
      const fig = plot({
        xr, yr: [Math.min(...ys) - 1.5, Math.max(...ys) + 1.5],
        fns: [{ f, a: sx < 0 ? xr[0] : E, b: sx < 0 ? E : xr[1] }],
        guides: [[E, c]], dots: [[E, c]],
        ticks: { x: [[E, num(E)]], y: [[c, num(c)], [y0, num(y0)]] }
      });
      const ch = intChoices(ansV);
      return {
        fig,
        stem: '함수 f(x) = ' + (sy < 0 ? '−' : '') + '√(ax + b) + c의 그래프가 그림과 같을 때, f(' + num(x1) + ')의 값은? (단, a, b, c는 상수이고, 그래프는 점 ' + C(E, c) + '에서 시작하며 y축과 점 ' + C(0, y0) + '에서 만난다.)',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '시작점이 ' + C(E, c) + '이므로 c = ' + num(c) + ', 그리고 a·' + P(E) + ' + b = 0.\n' + 'f(0) = ' + (sy < 0 ? '−' : '') + '√b' + tail(c) + ' = ' + num(y0) + ' → √b = ' + t + ', b = ' + b + '.\n' + 'a·' + P(E) + ' + ' + b + ' = 0 → a = ' + num(a) + '. 즉 f(x) = ' + (sy < 0 ? '−' : '') + '√(' + lin(a, b) + ')' + tail(c) + '.\n' +
          'f(' + num(x1) + ') = ' + (sy < 0 ? '−' : '') + '√' + (a * x1 + b) + tail(c) + ' = ' + num(ansV) + '.'
      };
    }
  });

  // G22. 무리함수 그래프의 성질 - 옳지 않은 것
  L.push({
    type: T_IRR, pts: 4,
    gen() {
      let a, p, q, sx, sy;
      do { a = R(1, 4); p = pick([-3, -2, -1, 1, 2, 3]); q = pick([-3, -2, -1, 1, 2, 3, 4]); sx = pick([1, -1]); sy = pick([1, -1]); }
      while (Math.abs(p) === Math.abs(q));
      const f = (x) => { const u = sx * a * (x - p); return u < 0 ? NaN : sy * Math.sqrt(u) + q; };
      const inner = lin(sx * a, -sx * a * p);
      const expr = 'y = ' + (sy < 0 ? '−' : '') + '√(' + inner + ')' + (q > 0 ? ' + ' : ' − ') + Math.abs(q);
      const Qs = quadrants(f, sampleAround(p, sx).concat([p]));
      const notQ = [1, 2, 3, 4].filter((i) => !Qs.has(i));
      const yes = [1, 2, 3, 4].filter((i) => Qs.has(i));
      const dom = sx > 0 ? '{x | x ≥ ' + num(p) + '}' : '{x | x ≤ ' + num(p) + '}';
      const domF = sx > 0 ? '{x | x ≤ ' + num(p) + '}' : '{x | x ≥ ' + num(p) + '}';
      const rng = sy > 0 ? '{y | y ≥ ' + num(q) + '}' : '{y | y ≤ ' + num(q) + '}';
      const rngF = sy > 0 ? '{y | y ≤ ' + num(q) + '}' : '{y | y ≥ ' + num(q) + '}';
      const base = 'y = ' + (sy < 0 ? '−' : '') + '√(' + cx(sx * a) + ')';
      // 역함수: x = sx(y − q)²/a + p,  정의역 x ≥ q (sy>0) / x ≤ q (sy<0)
      const invExpr = (dirOK) => 'y = ' + (sx < 0 ? '−' : '') + (a === 1 ? '' : '(1/' + a + ')') + '(' + poly([[1, 'x'], [-q, '']]) + ')²' + (p > 0 ? ' + ' : ' − ') + Math.abs(p) + ' (x ' + ((sy > 0) === dirOK ? '≥' : '≤') + ' ' + num(q) + ')';
      const fam = [
        { t: '정의역은 ' + dom + '이다.', f: '정의역은 ' + domF + '이다.', w: '근호 안이 0 이상이어야 하므로 정의역은 ' + dom + '.' },
        { t: '치역은 ' + rng + '이다.', f: '치역은 ' + rngF + '이다.', w: '근호 앞 부호가 ' + (sy > 0 ? '+' : '−') + '이므로 치역은 ' + rng + '.' },
        { t: '그래프는 함수 ' + base + '의 그래프를 x축의 방향으로 ' + num(p) + '만큼, y축의 방향으로 ' + num(q) + '만큼 평행이동한 것이다.', f: '그래프는 함수 ' + base + '의 그래프를 x축의 방향으로 ' + num(-p) + '만큼, y축의 방향으로 ' + num(q) + '만큼 평행이동한 것이다.', w: '√ 안을 ' + cx(sx * a, den(p)) + '로 묶으면 x축 방향 이동량은 ' + num(p) + '입니다.' },
        { t: notQ.length ? '그래프는 제' + notQ[0] + '사분면을 지나지 않는다.' : '그래프는 제' + yes.join(', ') + '사분면을 지난다.', f: '그래프는 제' + pick(yes) + '사분면을 지나지 않는다.', w: '시작점 ' + C(p, q) + '에서 출발해 그려 보면 지나는 사분면은 제' + yes.join(', ') + '사분면입니다.' },
        { t: '역함수는 ' + invExpr(true) + '이다.', f: '역함수는 ' + invExpr(false) + '이다.', w: '역함수의 정의역은 원래 함수의 치역 ' + rng.replace(/y/g, 'x') + '입니다.' },
        { t: '그래프는 점 ' + C(p, q) + '에서 시작한다.', f: '그래프는 점 ' + C(q, p) + '에서 시작한다.', w: '시작점은 근호 안이 0이 되는 점 ' + C(p, q) + '입니다.' }
      ];
      const chosen = shuffle(fam).slice(0, 5);
      const bad = R(0, 4);
      return {
        stem: '함수 ' + expr + '에 대한 설명으로 옳지 않은 것은?',
        choices: chosen.map((c, i) => (i === bad ? c.f : c.t)), ans: bad + 1,
        explain: expr + ' = ' + (sy < 0 ? '−' : '') + '√(' + cx(sx * a, den(p)) + ')' + tail(q) + '. 시작점 ' + C(p, q) + '.\n옳지 않은 것: "' + chosen[bad].f + '" → ' + chosen[bad].w
      };
    }
  });

  // G23. 무리함수와 그 역함수의 교점 사이 거리
  L.push({
    type: T_IRR, pts: 5,
    gen() {
      let c, r1, r2, m, n;
      do { c = R(-2, 2); r1 = c + R(0, 3); r2 = r1 + R(1, 4); m = r1 + r2 - 2 * c; n = r1 * r2 - c * c; } while (m <= 0 || n === 0);
      // f(x) = √(m x − n) + c ; 교점은 y = x 위: (x − c)² = m x − n, x ≥ c
      const d = r2 - r1;
      const ansStr = (d === 1 ? '' : d) + '√2';
      const pool = [1, 2, 3, 4, 5, 6].filter((v) => v !== d).map((v) => (v === 1 ? '' : v) + '√2').concat([String(d), String(2 * d)]);
      const ch = shuffle([ansStr].concat(shuffle(pool).slice(0, 4)));
      const askSum = R(0, 1) === 1;
      if (askSum) {
        const ansV = 2 * (r1 + r2);
        const c2 = intChoices(ansV);
        return {
          stem: '함수 f(x) = √(' + lin(m, -n) + ')' + (c === 0 ? '' : (c > 0 ? ' + ' : ' − ') + Math.abs(c)) + '의 그래프와 그 역함수 y = f⁻¹(x)의 그래프가 서로 다른 두 점 (x₁, y₁), (x₂, y₂)에서 만날 때, x₁ + y₁ + x₂ + y₂의 값은?',
          choices: c2.choices, ans: c2.ans, shuffle: false,
          explain: 'f는 증가함수이므로 y = f(x)와 y = f⁻¹(x)의 교점은 y = x 위에 있습니다.\n√(' + lin(m, -n) + ')' + tail(c) + ' = x → ' + lin(m, -n) + ' = ' + den(c) + '² (x ≥ ' + num(c) + ')\n정리: ' + poly([[1, 'x²'], [-(2 * c + m), 'x'], [c * c + n, '']]) + ' = 0 → x = ' + num(r1) + ', ' + num(r2) + ' (모두 x ≥ ' + num(c) + ' 만족).\n교점 ' + C(r1, r1) + ', ' + C(r2, r2) + ' → 합은 2(' + num(r1) + ' + ' + P(r2) + ') = ' + num(ansV) + '.'
        };
      }
      return {
        stem: '함수 f(x) = √(' + lin(m, -n) + ')' + (c === 0 ? '' : (c > 0 ? ' + ' : ' − ') + Math.abs(c)) + '의 그래프와 그 역함수 y = f⁻¹(x)의 그래프가 만나는 두 점 사이의 거리는?',
        choices: ch, ans: ch.indexOf(ansStr) + 1, shuffle: false,
        explain: 'f는 증가함수이므로 두 그래프의 교점은 직선 y = x 위에 있습니다.\n√(' + lin(m, -n) + ') = ' + xm(c) + ' (x ≥ ' + num(c) + ') 의 양변을 제곱: ' + lin(m, -n) + ' = ' + poly([[1, 'x²'], [-2 * c, 'x'], [c * c, '']]) + '\n→ ' + poly([[1, 'x²'], [-(2 * c + m), 'x'], [c * c + n, '']]) + ' = 0 → x = ' + num(r1) + ', ' + num(r2) + '.\n두 점 ' + C(r1, r1) + ', ' + C(r2, r2) + ' 사이의 거리는 √2 × ' + d + ' = ' + ansStr + '.'
      };
    }
  });

  // G24. 무리함수 구간 최대·최소
  L.push({
    type: T_IRR, pts: 3,
    gen() {
      const sy = pick([1, -1]), c = R(-3, 4);
      let a, b, xs;
      do {
        a = pick([1, 2, 3, -1, -2]); b = R(-4, 6);
        const u1 = R(0, 2), u2 = u1 + R(1, 3);
        xs = [u1, u2].map((u) => (u * u - b) / a);
      } while (xs.some((x) => x !== Math.floor(x)));
      const s = Math.min(...xs), t = Math.max(...xs);
      const f = (x) => sy * Math.sqrt(a * x + b) + c;
      const v1 = f(s), v2 = f(t);
      const askSum = R(0, 1) === 1;
      const ansV = askSum ? v1 + v2 : Math.max(v1, v2) - Math.min(v1, v2);
      const ch = intChoices(ansV, askSum ? {} : { min: 1 });
      return {
        stem: num(s) + ' ≤ x ≤ ' + num(t) + '에서 함수 y = ' + (sy < 0 ? '−' : '') + '√(' + lin(a, b) + ')' + (c === 0 ? '' : (c > 0 ? ' + ' : ' − ') + Math.abs(c)) + '의 최댓값을 M, 최솟값을 m이라 할 때, ' + (askSum ? 'M + m' : 'M − m') + '의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '무리함수는 정의역에서 증가 또는 감소하므로 양 끝에서 최대·최소가 됩니다.\nx = ' + num(s) + ': y = ' + (sy < 0 ? '−' : '') + '√' + (a * s + b) + tail(c) + ' = ' + num(v1) + '\nx = ' + num(t) + ': y = ' + (sy < 0 ? '−' : '') + '√' + (a * t + b) + tail(c) + ' = ' + num(v2) + '\nM = ' + num(Math.max(v1, v2)) + ', m = ' + num(Math.min(v1, v2)) + ' → ' + (askSum ? 'M + m = ' : 'M − m = ') + num(ansV) + '.'
      };
    }
  });

  // G25. 진리집합의 원소 개수
  L.push({
    type: T_PROP, pts: 3,
    gen() {
      const N = pick([12, 15, 18, 20, 24, 30]);
      const a = pick([2, 3, 4, 5]);
      const divs = [12, 18, 20, 24, 30].filter((d) => d <= N);
      const b = pick(divs.length ? divs : [N]);
      const U_ = []; for (let i = 1; i <= N; i++) U_.push(i);
      const p = (x) => x % a === 0, q = (x) => b % x === 0;
      const forms = [
        ['p 이고 q', (x) => p(x) && q(x)],
        ['p 또는 q', (x) => p(x) || q(x)],
        ['p 이고 ~q', (x) => p(x) && !q(x)],
        ['~p 이고 q', (x) => !p(x) && q(x)],
        ['~(p 또는 q)', (x) => !p(x) && !q(x)]
      ];
      const [name, fn] = pick(forms);
      const S = U_.filter(fn);
      const ansV = S.length;
      const ch = intChoices(ansV, { min: 0 });
      return {
        stem: '전체집합 U = {x | x는 ' + N + ' 이하의 자연수}에서 두 조건 p: x는 ' + a + '의 배수이다, q: x는 ' + b + '의 약수이다 가 있다. 조건 \'' + name + '\'의 진리집합의 원소의 개수는?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: 'P = {' + U_.filter(p).join(', ') + '}\nQ = {' + U_.filter(q).join(', ') + '}\n\'' + name + '\'의 진리집합 = {' + S.join(', ') + '} → ' + ansV + '개.\n(이고 → 교집합, 또는 → 합집합, ~ → 여집합, ~(p 또는 q) = ~p 이고 ~q)'
      };
    }
  });

  // G26. 모든 실수 x에 대하여 성립 (부등식) → 정수 k 개수
  L.push({
    type: T_PROOF, pts: 4,
    gen() {
      const v = R(0, 2);
      const c = R(2, 20);
      if (v === 0) {
        // x² + kx + c > 0 for all x ⇔ k² < 4c
        let cnt = 0; for (let k = -50; k <= 50; k++) if (k * k < 4 * c) cnt++;
        const ch = intChoices(cnt, { min: 1 });
        return {
          stem: '명제 \'모든 실수 x에 대하여 x² + kx + ' + c + ' > 0이다.\'가 참이 되도록 하는 정수 k의 개수는?',
          choices: ch.choices, ans: ch.ans, shuffle: false,
          explain: '모든 실수 x에 대하여 이차식 > 0 ⇔ 판별식 D < 0.\nD = k² − 4×' + c + ' < 0 → k² < ' + 4 * c + '.\n이를 만족하는 정수 k는 ' + cnt + '개 (|k| ≤ ' + (cnt - 1) / 2 + ').'
        };
      }
      if (v === 1) {
        // 어떤 x에 대하여 x² + kx + c < 0 이 거짓 ⇔ 모든 x에 대하여 ≥ 0 ⇔ k² ≤ 4c
        let cnt = 0; for (let k = -50; k <= 50; k++) if (k * k <= 4 * c) cnt++;
        const ch = intChoices(cnt, { min: 1 });
        return {
          stem: '명제 \'어떤 실수 x에 대하여 x² + kx + ' + c + ' < 0이다.\'가 거짓이 되도록 하는 정수 k의 개수는?',
          choices: ch.choices, ans: ch.ans, shuffle: false,
          explain: '이 명제가 거짓 ⇔ 부정 \'모든 실수 x에 대하여 x² + kx + ' + c + ' ≥ 0\'이 참 ⇔ D ≤ 0.\nk² − ' + 4 * c + ' ≤ 0 → k² ≤ ' + 4 * c + '. 정수 k는 ' + cnt + '개.'
        };
      }
      // 어떤 실수 x에 대하여 x² − 2kx + c ≤ 0 이 참 ⇔ D/4 = k² − c ≥ 0 ; ask: 거짓이 되는 정수 k 개수 = #{k² < c}
      let cnt = 0; for (let k = -50; k <= 50; k++) if (k * k < c) cnt++;
      const ch = intChoices(cnt, { min: 1 });
      return {
        stem: '명제 \'어떤 실수 x에 대하여 x² − 2kx + ' + c + ' ≤ 0이다.\'가 거짓이 되도록 하는 정수 k의 개수는?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '명제가 거짓 ⇔ 모든 실수 x에 대하여 x² − 2kx + ' + c + ' > 0 ⇔ D/4 = k² − ' + c + ' < 0.\nk² < ' + c + '를 만족하는 정수 k는 ' + cnt + '개.'
      };
    }
  });

  /* ======================= 고정 문항 ======================= */

  L.push({
    type: T_PROP, pts: 3,
    stem: '다음 중 명제인 것은?',
    choices: ['2x − 1 > 5', 'x² = 4', '√9는 무리수이다.', 'x는 6의 약수이다.', '12는 큰 수이다.'], ans: 3,
    explain: '참·거짓을 판별할 수 있는 문장이 명제입니다. \'√9는 무리수이다\'는 √9 = 3이므로 거짓인 명제입니다.\n①②④는 x의 값에 따라 참·거짓이 달라지는 조건, ⑤는 기준이 분명하지 않아 명제가 아닙니다.'
  });
  L.push({
    type: T_PROP, pts: 3,
    stem: '명제 \'어떤 실수 x에 대하여 x² ≤ 0이다.\'의 부정은?',
    choices: ['어떤 실수 x에 대하여 x² > 0이다.', '모든 실수 x에 대하여 x² ≤ 0이다.', '모든 실수 x에 대하여 x² > 0이다.', '어떤 실수 x에 대하여 x² ≥ 0이다.', '모든 실수 x에 대하여 x² ≥ 0이다.'], ans: 3,
    explain: '\'어떤\'의 부정은 \'모든\', \'≤\'의 부정은 \'>\'. 따라서 \'모든 실수 x에 대하여 x² > 0이다.\' (원래 명제는 x = 0일 때 참이므로, 부정은 거짓인 명제입니다.)'
  });
  L.push({
    type: T_PROP, pts: 3,
    stem: '명제 \'모든 1학년 학생은 수학 수행평가를 제출했다.\'의 부정은?',
    choices: ['모든 1학년 학생은 수학 수행평가를 제출하지 않았다.', '수학 수행평가를 제출한 1학년 학생은 없다.', '어떤 1학년 학생은 수학 수행평가를 제출했다.', '어떤 1학년 학생은 수학 수행평가를 제출하지 않았다.', '수학 수행평가를 제출하지 않은 1학년 학생은 없다.'], ans: 4,
    explain: '\'모든 ~은 ~이다\'의 부정은 \'어떤 ~은 ~이 아니다\'. ①②는 \'모두 아니다\'로 부정보다 강한 말, ⑤는 원래 명제와 같은 뜻입니다.'
  });
  L.push({
    type: T_PROP, pts: 3,
    stem: '실수 x, y에 대한 조건 \'x ≥ 1 이고 y < 2\'의 부정은?',
    choices: ['x < 1 이고 y ≥ 2', 'x < 1 또는 y ≥ 2', 'x ≤ 1 또는 y > 2', 'x ≥ 1 또는 y < 2', 'x < 1 또는 y > 2'], ans: 2,
    explain: '\'p 이고 q\'의 부정은 \'~p 또는 ~q\'. x ≥ 1의 부정은 x < 1, y < 2의 부정은 y ≥ 2. 따라서 \'x < 1 또는 y ≥ 2\'.'
  });
  L.push({
    type: T_CONT, pts: 4,
    stem: '세 조건 p, q, r에 대하여 두 명제 p → ~q, r → q가 모두 참일 때, 항상 참인 명제만을 〈보기〉에서 있는 대로 고른 것은?',
    bogi: {
      items: ['q → ~p', 'p → ~r', '~q → p', 'r → ~p'],
      truth: [true, true, false, true],
      why: ['p → ~q의 대우입니다.', 'r → q의 대우 ~q → ~r와 p → ~q를 연결(삼단논법)하면 p → ~r.', 'p → ~q의 역이므로 반드시 참이라고 할 수 없습니다.', 'p → ~r의 대우입니다.']
    }
  });
  L.push({
    type: T_CONT, pts: 3,
    stem: '명제 \'x² − 5x + 6 ≠ 0이면 x ≠ a이다.\'가 참이 되도록 하는 모든 실수 a의 값의 합은?',
    choices: ['−5', '−1', '1', '5', '6'], ans: 4, shuffle: false,
    explain: '대우 \'x = a이면 x² − 5x + 6 = 0이다\'가 참이어야 합니다. 즉 a² − 5a + 6 = 0 → a = 2 또는 a = 3. 합은 5.'
  });
  L.push({
    type: T_NS, pts: 4,
    stem: '실수 x에 대한 세 조건 p: x = 1, q: x² = 1, r: x³ = x에 대하여 옳은 것만을 〈보기〉에서 있는 대로 고른 것은?',
    bogi: {
      items: ['p는 q이기 위한 충분조건이다.', 'q는 r이기 위한 충분조건이다.', 'r은 q이기 위한 충분조건이다.'],
      truth: [true, true, false],
      why: ['P = {1} ⊂ Q = {−1, 1}.', 'Q = {−1, 1} ⊂ R = {−1, 0, 1}.', 'x = 0이면 r은 참이지만 q는 거짓이므로 R ⊄ Q.']
    }
  });
  L.push({
    type: T_NS, pts: 5,
    stem: '실수 a, b에 대한 세 조건 p: a = b = 0, q: a² + b² = 0, r: a + b = 0에 대하여 옳은 것만을 〈보기〉에서 있는 대로 고른 것은?',
    bogi: {
      items: ['p는 q이기 위한 필요충분조건이다.', 'r은 p이기 위한 필요조건이다.', '~q는 ~r이기 위한 충분조건이다.'],
      truth: [true, true, false],
      why: ['a² + b² = 0 ⇔ a = b = 0.', 'p ⇒ r (a = b = 0이면 a + b = 0)이므로 r은 p이기 위한 필요조건.', '~q ⇒ ~r는 대우 r ⇒ q와 같은데, a = 1, b = −1이면 r은 참, q는 거짓이므로 성립하지 않습니다.']
    }
  });
  L.push({
    type: T_PROOF, pts: 4,
    passage: '[증명] 명제 \'자연수 n에 대하여 n²이 3의 배수이면 n도 3의 배수이다.\'의 대우 \'n이 3의 배수가 아니면 n²도 3의 배수가 아니다.\'를 증명하자.\nn이 3의 배수가 아니면 n = 3k + 1 또는 n = 3k + 2 (k는 음이 아닌 정수)\n(i) n = 3k + 1일 때, n² = 3( (가) ) + 1\n(ii) n = 3k + 2일 때, n² = 3( (나) ) + 1\n따라서 n²은 3의 배수가 아니다. 대우가 참이므로 주어진 명제도 참이다.',
    stem: '위의 증명에서 (가), (나)에 알맞은 식을 차례로 나열한 것은?',
    choices: ['3k² + 2k, 3k² + 4k + 1', '3k² + k, 3k² + 4k + 1', '3k² + 2k, 3k² + 4k', '9k² + 6k, 9k² + 12k + 3', '3k² + 2k + 1, 3k² + 4k + 1'], ans: 1,
    explain: '(3k + 1)² = 9k² + 6k + 1 = 3(3k² + 2k) + 1\n(3k + 2)² = 9k² + 12k + 4 = 3(3k² + 4k + 1) + 1\n따라서 (가) 3k² + 2k, (나) 3k² + 4k + 1.'
  });
  L.push({
    type: T_PROOF, pts: 4,
    passage: '[증명] √3이 무리수임을 귀류법으로 증명하자.\n√3이 (가)라고 가정하면 √3 = m/n (m, n은 (나)인 자연수)으로 나타낼 수 있다.\n양변을 제곱하면 m² = 3n² 이므로 m²은 3의 배수이고, m도 3의 배수이다.\nm = 3k (k는 자연수)라 하면 9k² = 3n², n² = 3k² 이므로 n도 3의 배수이다.\n이는 m, n이 (나)라는 가정에 모순이다. 따라서 √3은 무리수이다.',
    stem: '위의 증명에서 (가), (나)에 알맞은 것을 차례로 나열한 것은?',
    choices: ['무리수, 서로소', '유리수, 서로소', '유리수, 3의 배수', '정수, 짝수', '무리수, 홀수'], ans: 2,
    explain: '귀류법은 결론을 부정합니다. \'무리수\'의 부정 → (가) 유리수. 유리수는 기약분수 m/n으로 나타내므로 (나) 서로소. m, n이 모두 3의 배수가 되어 서로소라는 가정에 모순이 생깁니다.'
  });
  L.push({
    type: T_PROOF, pts: 4,
    passage: '[증명] 실수 a, b에 대하여 a² + b² ≥ ab 임을 증명하자.\na² − ab + b² = (a − b/2)² + ( (가) )b² ≥ 0\n따라서 a² + b² ≥ ab 이고, 등호는 (나)일 때 성립한다.',
    stem: '위의 증명에서 (가), (나)에 알맞은 것을 차례로 나열한 것은?',
    choices: ['3/4, a = b', '1/4, a = b = 0', '3/4, a = b = 0', '1/2, a = b', '1/2, a = −b'], ans: 3,
    explain: '(a − b/2)² = a² − ab + b²/4 이므로 남는 항은 (3/4)b². → (가) 3/4.\n등호: a − b/2 = 0 이고 b = 0 → a = b = 0. → (나) a = b = 0.'
  });
  L.push({
    type: T_PROOF, pts: 4,
    passage: '[증명] 실수 a, b에 대하여 |a| + |b| ≥ |a − b| 임을 증명하자.\n(|a| + |b|)² − |a − b|² = 2( (가) ) ≥ 0\n|a| + |b| ≥ 0, |a − b| ≥ 0 이므로 |a| + |b| ≥ |a − b|\n등호는 (나)일 때 성립한다.',
    stem: '위의 증명에서 (가), (나)에 알맞은 것을 차례로 나열한 것은?',
    choices: ['|ab| − ab, ab ≥ 0', '|ab| + ab, ab ≤ 0', '|ab| + ab, ab ≥ 0', '|ab| − ab, ab ≤ 0', 'ab − |ab|, ab ≤ 0'], ans: 2,
    explain: '(|a| + |b|)² = a² + 2|ab| + b², |a − b|² = a² − 2ab + b². 차는 2(|ab| + ab) ≥ 0. → (가) |ab| + ab.\n등호: |ab| = −ab ⇔ ab ≤ 0. → (나) ab ≤ 0.\n(기출의 |a + b| 꼴과 부호가 바뀌는 점에 주의!)'
  });
  L.push({
    type: T_AMGM, pts: 4,
    stem: 'x > 0, y > 0이고 2x + 3y = 12일 때, xy의 최댓값은?',
    choices: ['3', '4', '5', '6', '8'], ans: 4, shuffle: false,
    explain: '2x > 0, 3y > 0 이므로 2x + 3y ≥ 2√(6xy) → 12 ≥ 2√(6xy) → √(6xy) ≤ 6 → 6xy ≤ 36 → xy ≤ 6.\n등호는 2x = 3y = 6, 즉 x = 3, y = 2일 때. 최댓값 6.'
  });
  L.push({
    type: T_FUNC, pts: 3,
    stem: '집합 X = {−1, 0, 1}에 대하여 X에서 X로의 함수 중 일대일대응인 것만을 〈보기〉에서 있는 대로 고른 것은?',
    bogi: {
      items: ['f(x) = x³', 'g(x) = |x|', 'h(x) = −x'],
      truth: [true, false, true],
      why: ['f(−1) = −1, f(0) = 0, f(1) = 1 → 일대일대응.', 'g(−1) = g(1) = 1이므로 일대일함수가 아니고, 치역 {0, 1} ≠ X.', 'h(−1) = 1, h(0) = 0, h(1) = −1 → 일대일대응.']
    }
  });
  L.push({
    type: T_FUNC, pts: 4,
    stem: '집합 X = {1, 2, 3, 4}에 대하여 X에서 X로의 일대일대응 f 중 f(1) = 3, f(2) ≠ 2를 만족시키는 함수 f의 개수는?',
    choices: ['1', '2', '3', '4', '5'], ans: 4, shuffle: false,
    explain: 'f(1) = 3으로 고정하면 나머지 2, 3, 4에 {1, 2, 4}를 하나씩 대응시키는 방법은 3! = 6가지.\n이 중 f(2) = 2인 경우는 나머지 3, 4에 {1, 4}를 대응: 2가지.\n따라서 6 − 2 = 4.'
  });
  L.push({
    type: T_COMP, pts: 3,
    stem: '세 함수 f, g, h에 대한 설명으로 옳은 것만을 〈보기〉에서 있는 대로 고른 것은? (단, 합성이 가능하다고 하고, I는 항등함수이다.)',
    bogi: {
      items: ['f∘g = g∘f가 항상 성립한다.', '(f∘g)∘h = f∘(g∘h)', 'f∘I = I∘f = f'],
      truth: [false, true, true],
      why: ['f(x) = x + 1, g(x) = 2x이면 f∘g = 2x + 1, g∘f = 2x + 2로 다릅니다. 교환법칙은 성립하지 않습니다.', '합성함수는 결합법칙이 성립합니다.', '항등함수는 합성해도 함수를 바꾸지 않습니다.']
    }
  });
  L.push({
    type: T_INV, pts: 4,
    stem: '역함수가 존재하는 함수 f에 대한 설명으로 옳은 것만을 〈보기〉에서 있는 대로 고른 것은? (단, g도 역함수가 존재하고 합성이 가능하다.)',
    bogi: {
      items: ['(f⁻¹)⁻¹ = f', '(f∘g)⁻¹ = f⁻¹∘g⁻¹', 'y = f(x)와 y = f⁻¹(x)의 그래프는 직선 y = x에 대하여 대칭이다.', 'y = f(x)와 y = f⁻¹(x)의 그래프의 교점은 항상 직선 y = x 위에 있다.'],
      truth: [true, false, true, false],
      why: ['역함수의 역함수는 자기 자신입니다.', '(f∘g)⁻¹ = g⁻¹∘f⁻¹ (순서가 바뀜).', '역함수의 그래프는 y = x 대칭입니다.', 'f(x) = −x + 1처럼 감소함수이면 f⁻¹ = f이므로 y = x 밖의 점에서도 만납니다. (증가함수일 때만 y = x 위)']
    }
  });
  L.push({
    type: T_RAT, pts: 4,
    fig: plot({ xr: [-5, 4], yr: [-3, 6], asym: { x: -1, y: 2 }, fns: [{ f: (x) => 2 - 2 / (x + 1), a: -5, b: -1.05 }, { f: (x) => 2 - 2 / (x + 1), a: -0.95, b: 4 }], ticks: { x: [[-1, '−1']], y: [[2, '2']] }, dots: [[0, 0]] }),
    stem: '함수 y = (ax + b)/(x + c)의 그래프가 그림과 같이 두 점근선 x = −1, y = 2를 갖고 원점을 지날 때, 상수 a, b, c에 대하여 a + b + c의 값은?',
    choices: ['−1', '0', '1', '2', '3'], ans: 5, shuffle: false,
    explain: '점근선이 x = −1, y = 2이므로 y = k/(x + 1) + 2. 원점을 지나므로 0 = k + 2 → k = −2.\ny = −2/(x + 1) + 2 = 2x/(x + 1) → a = 2, b = 0, c = 1. 합은 3.'
  });
  L.push({
    type: T_RAT, pts: 4,
    stem: '다음 함수 중 그 그래프를 평행이동하여 함수 y = 3/x의 그래프와 겹쳐지게 할 수 있는 것만을 〈보기〉에서 있는 대로 고른 것은?',
    bogi: {
      items: ['y = (x + 5)/(x + 2)', 'y = (2x − 1)/(x − 2)', 'y = (−x + 1)/(x − 2)', 'y = (3x + 3)/x'],
      truth: [true, true, false, true],
      why: ['(x + 5)/(x + 2) = 3/(x + 2) + 1 → k = 3.', '(2x − 1)/(x − 2) = 3/(x − 2) + 2 → k = 3.', '(−x + 1)/(x − 2) = −1/(x − 2) − 1 → k = −1.', '(3x + 3)/x = 3/x + 3 → k = 3.']
    }
  });
  L.push({
    type: T_IRR, pts: 4,
    stem: '다음 함수 중 그 그래프를 평행이동 또는 대칭이동하여 함수 y = √x의 그래프와 겹쳐지게 할 수 있는 것만을 〈보기〉에서 있는 대로 고른 것은?',
    bogi: {
      items: ['y = √(2x + 4)', 'y = −√(−x + 3) + 1', 'y = √(4x − 8)', 'y = √(1 − x)'],
      truth: [false, true, false, true],
      why: ['√(2(x + 2))는 y = √(2x)를 평행이동한 것 → √x와 모양이 다릅니다.', '−√(−(x − 3)) + 1은 y = √x를 원점 대칭 후 평행이동한 것.', '√(4(x − 2)) = 2√(x − 2)는 y = √(4x)를 평행이동한 것 → 다른 모양.', '√(−(x − 1))은 y = √x를 y축 대칭 후 평행이동한 것.']
    }
  });
  L.push({
    type: T_IRR, pts: 3,
    stem: '함수 y = √(2x − 4) + 1의 역함수는?',
    choices: ['y = (1/2)(x − 1)² + 2 (x ≥ 1)', 'y = (1/2)(x − 1)² + 2 (x ≥ 2)', 'y = (1/2)(x + 1)² − 2 (x ≥ 1)', 'y = 2(x − 1)² + 2 (x ≥ 1)', 'y = (1/2)(x − 1)² + 2 (x ≤ 1)'], ans: 1,
    explain: '치역이 {y | y ≥ 1}이므로 역함수의 정의역은 x ≥ 1.\ny − 1 = √(2x − 4) → (y − 1)² = 2x − 4 → x = (1/2)(y − 1)² + 2. x, y를 바꾸면 y = (1/2)(x − 1)² + 2 (x ≥ 1).'
  });
  L.push({
    type: T_IRR, pts: 5,
    stem: '함수 y = √(x − 1)의 그래프와 직선 y = x + k가 서로 다른 두 점에서 만나도록 하는 실수 k의 값의 범위는?',
    choices: ['−1 ≤ k < −3/4', '−1 < k < −3/4', 'k < −3/4', '−1 ≤ k ≤ −3/4', 'k ≥ −1'], ans: 1, shuffle: false,
    explain: '직선이 시작점 (1, 0)을 지날 때 0 = 1 + k → k = −1 (두 점에서 만남, 포함).\n접할 때: √(x − 1) = x + k → x − 1 = (x + k)², x² + (2k − 1)x + k² + 1 = 0의 D = (2k − 1)² − 4(k² + 1) = −4k − 3 = 0 → k = −3/4 (한 점, 제외).\n따라서 −1 ≤ k < −3/4.'
  });

  /* ======================= 서술형 ======================= */
  L.push({
    type: T_ESSAY, kind: 'essay', pts: 4,
    stem: 'x > 0, y > 0일 때, (x + 4/y)(y + 1/x)의 최솟값과 그때의 xy의 값을 구하시오.',
    model: '(x + 4/y)(y + 1/x) = xy + 1 + 4 + 4/(xy) = xy + 4/(xy) + 5.\nxy > 0이므로 산술평균과 기하평균의 관계에 의해 xy + 4/(xy) ≥ 2√(xy × 4/(xy)) = 4.\n따라서 (주어진 식) ≥ 9이고, 등호는 xy = 4/(xy), 즉 xy = 2일 때 성립한다.\n최솟값 9, 이때 xy = 2.',
    rubric: ['식을 전개하여 xy + 4/(xy) + 5로 정리 (1점)', '산술·기하평균 관계를 바르게 적용 (2점)', '최솟값 9와 등호 조건 xy = 2 (1점)']
  });
  L.push({
    type: T_ESSAY, kind: 'essay', pts: 6,
    fig: plot({ xr: [-0.4, 2.5], yr: [-0.4, 2.5], fns: [{ f: (x) => (x <= 1 ? 2 * x : 4 - 2 * x), a: 0, b: 2 }], guides: [[1, 2]], ticks: { x: [[1, '1'], [2, '2']], y: [[2, '2']] }, labels: [[1.2, 2.1, 'y = f(x)']] }),
    stem: '0 ≤ x ≤ 2에서 정의된 함수 y = f(x)의 그래프가 그림과 같고(점 (0, 0), (1, 2), (2, 0)을 잇는 꺾은선), 함수 g(x)는 g(x) = x (0 ≤ x ≤ 1), g(x) = 1 (1 < x ≤ 2)이다. 합성함수 y = (g∘f)(x)의 식을 구간별로 구하고 그래프의 개형을 설명하시오.',
    model: 'f(x) = 2x (0 ≤ x ≤ 1), f(x) = 4 − 2x (1 ≤ x ≤ 2).\ng(f(x))는 f(x) ≤ 1이면 f(x), f(x) > 1이면 1이다.\nf(x) ≤ 1 ⇔ 0 ≤ x ≤ 1/2 또는 3/2 ≤ x ≤ 2.\n따라서 (g∘f)(x) = 2x (0 ≤ x ≤ 1/2), 1 (1/2 < x < 3/2), 4 − 2x (3/2 ≤ x ≤ 2).\n그래프는 (0, 0) → (1/2, 1) → (3/2, 1) → (2, 0)을 잇는 사다리꼴 모양의 꺾은선이다.',
    rubric: ['f(x)를 구간별 식으로 나타냄 (1점)', 'f(x)의 값이 1 이하/초과인 x의 구간을 구함 (2점)', '(g∘f)(x)를 구간별로 바르게 구함 (2점)', '그래프 개형(꼭짓점 좌표) 설명 (1점)']
  });
  L.push({
    type: T_ESSAY, kind: 'essay', pts: 4,
    stem: '유리함수 y = b/(x + a) + c (b ≠ 0)의 그래프는 점 (2, −1)에 대하여 대칭이고 원점을 지난다. 세 상수 a, b, c에 대하여 a + b + c의 값을 구하시오.',
    model: '점근선은 x = −a, y = c이고 그래프는 점근선의 교점 (−a, c)에 대하여 대칭이다.\n−a = 2, c = −1 → a = −2, c = −1.\ny = b/(x − 2) − 1이 원점을 지나므로 0 = b/(−2) − 1 → b = −2.\n따라서 a + b + c = −2 + (−2) + (−1) = −5.',
    rubric: ['대칭점이 점근선의 교점임을 이용해 a, c를 구함 (2점)', '원점 대입으로 b를 구함 (1점)', 'a + b + c = −5 (1점)']
  });
  L.push({
    type: T_ESSAY, kind: 'essay', pts: 5,
    stem: '함수 f(x) = √(x − 2) + 2의 그래프와 그 역함수 y = f⁻¹(x)의 그래프가 만나는 모든 점의 좌표를 구하고, 그 두 점 사이의 거리를 구하시오.',
    model: 'f는 증가함수이므로 y = f(x)와 y = f⁻¹(x)의 교점은 직선 y = x 위에 있다.\n√(x − 2) + 2 = x → √(x − 2) = x − 2 (x ≥ 2). 양변을 제곱하면 x − 2 = (x − 2)², (x − 2)(x − 3) = 0 → x = 2 또는 x = 3 (모두 x ≥ 2 만족).\n교점은 (2, 2), (3, 3)이고 두 점 사이의 거리는 √(1² + 1²) = √2.',
    rubric: ['증가함수이므로 교점이 y = x 위에 있음을 설명 (2점)', '방정식을 풀어 x = 2, 3을 구함 (2점)', '거리 √2 (1점)']
  });
  L.push({
    type: T_ESSAY, kind: 'essay', pts: 5,
    stem: '명제 \'자연수 n에 대하여 n²이 짝수이면 n도 짝수이다.\'가 참임을 대우를 이용하여 증명하시오.',
    model: '주어진 명제의 대우는 \'자연수 n에 대하여 n이 홀수이면 n²도 홀수이다.\'이다.\nn이 홀수이면 n = 2k − 1 (k는 자연수)로 놓을 수 있다.\nn² = (2k − 1)² = 4k² − 4k + 1 = 2(2k² − 2k) + 1 이므로 n²은 홀수이다.\n대우가 참이므로 주어진 명제도 참이다.',
    rubric: ['대우를 바르게 씀 (1점)', 'n = 2k − 1로 놓고 n²을 2(  ) + 1 꼴로 나타냄 (3점)', '대우가 참이므로 명제가 참이라는 결론 (1점)']
  });

  window.addQ('math', L);
})();

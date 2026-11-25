/* 공통수학 - 2학기 기말 예상문제 추가분(2): 명제 · 절대부등식 · 함수 · 합성·역함수 · 유리함수 · 무리함수 */
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

  /* ---------- 표시 헬퍼 ---------- */
  const P = (n) => (n < 0 ? '(' + num(n) + ')' : String(n)); // 음수 괄호
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
  const fr = (n, d) => {
    if (d < 0) { n = -n; d = -d; }
    const g = gcd(Math.abs(n), d) || 1;
    n /= g; d /= g;
    return d === 1 ? num(n) : (n < 0 ? '−' : '') + Math.abs(n) + '/' + d;
  };
  const C = (x, y) => '(' + num(x) + ', ' + num(y) + ')';
  const tail = (c) => (c === 0 ? '' : (c > 0 ? ' + ' : ' − ') + Math.abs(c));
  const xm = (p, v) => poly([[1, v || 'x'], [-p, '']]); // x − p
  const den = (p, v) => (p === 0 ? (v || 'x') : '(' + xm(p, v) + ')');
  const cx = (a, v) => (a === 1 ? '' : a === -1 ? '−' : num(a)) + (v || 'x');
  const fac = (p, v) => (p === 0 ? (v || 'x') : '(' + xm(p, v) + ')'); // 인수 (x − p)
  const quad = (al, be, v) => poly([[1, (v || 'x') + '²'], [-(al + be), v || 'x'], [al * be, '']]);
  const ratStr = (k, p, q) => '(' + poly([[q, 'x'], [k - q * p, '']]) + ')/' + den(p);
  const stdStr = (k, p, q) => num(k) + '/' + den(p) + tail(q);
  const isSq = (n) => n >= 0 && Math.round(Math.sqrt(n)) ** 2 === n;
  // 정수 정답 + 후보 오답 → 서로 다른 5개(오름차순)
  const numCh = (ansV, cands, fmt) => {
    const set = [ansV];
    shuffle(cands).forEach((c) => { if (set.length < 5 && Number.isFinite(c) && set.indexOf(c) < 0) set.push(c); });
    let d = 1;
    while (set.length < 5) {
      [ansV + d, ansV - d].forEach((v) => { if (set.length < 5 && set.indexOf(v) < 0) set.push(v); });
      d++;
    }
    const arr = set.sort((a, b) => a - b);
    return { choices: arr.map(fmt || num), ans: arr.indexOf(ansV) + 1, shuffle: false };
  };
  const levelPts = { 1: 3, 2: 4, 3: 5 };

  /* ---------- 그래프 SVG ---------- */
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
      s += '<path d="M' + f2(X(ln[0])) + ' ' + f2(Y(ln[1])) + ' L' + f2(X(ln[2])) + ' ' + f2(Y(ln[3])) + '" stroke="currentColor" stroke-width="1"' + (ln[4] ? ' stroke-dasharray="4 3"' : '') + ' fill="none"/>';
    });
    (opt.fns || []).forEach((F) => {
      let d = '', pen = false;
      const N = 200;
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
  const add = (q) => { q.pts = q.pts || levelPts[q.level]; L.push(q); };

  /* ======================= 생성기 (31종) ======================= */

  // N1. 명제의 반례 중 정수의 개수 (P ∩ Qᶜ)
  add({
    type: T_PROP, level: 2,
    gen() {
      let al, be, c, r, cex;
      do {
        al = R(-4, 2); be = al + R(3, 7); c = R(al, be); r = R(1, 3); cex = [];
        for (let x = al; x <= be; x++) if (!(Math.abs(x - c) < r)) cex.push(x);
      } while (cex.length < 1 || cex.length === be - al + 1);
      const n = cex.length;
      const ch = intChoices(n, { min: 1 });
      return {
        stem: '실수 x에 대한 두 조건 p: ' + quad(al, be) + ' ≤ 0, q: |' + xm(c) + '| < ' + r + '에 대하여 명제 \'p이면 q이다.\'가 거짓임을 보이는 반례 중 정수인 것의 개수는?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: quad(al, be) + ' = ' + fac(al) + fac(be) + ' ≤ 0 이므로 P = {x | ' + num(al) + ' ≤ x ≤ ' + num(be) + '}.\n|' + xm(c) + '| < ' + r + ' 이므로 Q = {x | ' + num(c - r) + ' < x < ' + num(c + r) + '}.\n반례는 p를 만족하지만 q를 만족하지 않는 x, 즉 P ∩ Qᶜ의 원소입니다.\n정수인 반례: ' + cex.map(num).join(', ') + ' → ' + n + '개.\n(주의) Q의 끝값 ' + num(c - r) + ', ' + num(c + r) + '은 Q에 속하지 않으므로 P에 있으면 반례가 됩니다.'
      };
    }
  });

  // N2. 제한된 범위에서 '모든/어떤' 명제가 참이 되는 정수 a의 최솟값
  add({
    type: T_PROP, level: 1,
    gen() {
      const s = R(-3, 1), t = s + R(2, 5), k = pick([1, 2, 3]);
      const v = R(0, 3);
      const all = v < 2, strict = v % 2 === 0;
      const e = all ? s : t;
      const ansV = -k * e + (strict ? 1 : 0);
      const ex = cx(k) + ' + a';
      const stem = '명제 \'' + num(s) + ' ≤ x ≤ ' + num(t) + '인 ' + (all ? '모든' : '어떤') + ' 실수 x에 대하여 ' + ex + (strict ? ' > 0' : ' ≥ 0') + '이다.\'가 참이 되도록 하는 정수 a의 최솟값은?';
      const explain = 'y = ' + ex + '는 x가 커질수록 증가하므로 ' + num(s) + ' ≤ x ≤ ' + num(t) + '에서 x = ' + num(s) + '일 때 가장 작은 값 ' + num(k * s) + ' + a, x = ' + num(t) + '일 때 가장 큰 값 ' + num(k * t) + ' + a를 가집니다.\n' +
        (all ? '\'모든 x\'에 대하여 성립하려면 가장 작은 값에서도 성립해야 하므로 ' : '\'어떤 x\'에 대하여 성립하려면 가장 큰 값에서 성립하면 되므로 ') +
        num(k * e) + ' + a ' + (strict ? '> 0' : '≥ 0') + ', 즉 a ' + (strict ? '> ' : '≥ ') + num(-k * e) + '.\n정수 a의 최솟값은 ' + num(ansV) + '.';
      const ch = numCh(ansV, [-k * s, -k * s + 1, -k * t, -k * t + 1, -k * s - 1, -k * t - 1]);
      return { stem, choices: ch.choices, ans: ch.ans, shuffle: false, explain };
    }
  });

  // N3. 명제/대우가 참이 되도록 하는 a의 최댓값·최솟값 (해집합이 두 구간)
  add({
    type: T_CONT, level: 1,
    gen() {
      const al = R(-5, 2), be = al + R(2, 6);
      const v = R(0, 3);
      const qs = quad(al, be);
      let stem, ansV, ex;
      const Qd = (strict) => qs + ' = ' + fac(al) + fac(be) + ' 이므로 부등식을 풀면 Q = {x | x ' + (strict ? '< ' : '≤ ') + num(al) + ' 또는 x ' + (strict ? '> ' : '≥ ') + num(be) + '}.';
      if (v === 0) {
        stem = '명제 \'x < a이면 ' + qs + ' > 0이다.\'가 참이 되도록 하는 실수 a의 최댓값은?';
        ansV = al; ex = Qd(true) + '\nP = {x | x < a} ⊂ Q 이어야 하므로 a ≤ ' + num(al) + '. 최댓값은 ' + num(al) + '.';
      } else if (v === 1) {
        stem = '명제 \'x > a이면 ' + qs + ' > 0이다.\'의 대우가 참이 되도록 하는 실수 a의 최솟값은?';
        ansV = be; ex = '대우가 참 ⇔ 원래 명제가 참.\n' + Qd(true) + '\nP = {x | x > a} ⊂ Q 이어야 하므로 a ≥ ' + num(be) + '. 최솟값은 ' + num(be) + '.';
      } else if (v === 2) {
        stem = '명제 \'x ≥ a이면 ' + qs + ' ≥ 0이다.\'의 대우가 참이 되도록 하는 실수 a의 최솟값은?';
        ansV = be; ex = '대우가 참 ⇔ 원래 명제가 참.\n' + Qd(false) + '\nP = {x | x ≥ a} ⊂ Q 이어야 하므로 a ≥ ' + num(be) + '. 최솟값은 ' + num(be) + '.';
      } else {
        stem = '명제 \'x ≤ a이면 ' + qs + ' ≥ 0이다.\'가 참이 되도록 하는 실수 a의 최댓값은?';
        ansV = al; ex = Qd(false) + '\nP = {x | x ≤ a} ⊂ Q 이어야 하므로 a ≤ ' + num(al) + '. 최댓값은 ' + num(al) + '.';
      }
      const ch = numCh(ansV, [al, be, al - 1, be + 1, al + 1, be - 1, -al, -be]);
      return { stem, choices: ch.choices, ans: ch.ans, shuffle: false, explain: ex + '\n(포함 관계 P ⊂ Q 가 "p이면 q" 가 참일 조건입니다.)' };
    }
  });

  // N4. p: x = α 가 q: x² + kx + c = 0 이기 위한 충분조건 → q의 진리집합 원소의 합
  add({
    type: T_NS, level: 1,
    gen() {
      const al = pick([-4, -3, -2, -1, 1, 2, 3, 4]);
      let be; do { be = R(-5, 5); } while (be === al);
      const c = al * be, k = -(al + be);
      const ansV = al + be;
      const ch = numCh(ansV, [-ansV, al, be, c, al - be]);
      return {
        stem: '실수 x에 대한 두 조건 p: x = ' + num(al) + ', q: x² + kx' + tail(c) + ' = 0에 대하여 p가 q이기 위한 충분조건일 때, 조건 q의 진리집합의 모든 원소의 합은? (단, k는 상수이다.)',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: 'p ⇒ q 이므로 x = ' + num(al) + '일 때 q가 성립해야 합니다: ' + P(al) + '² + ' + P(al) + 'k' + tail(c) + ' = 0 → k = ' + num(k) + '.\nq: ' + poly([[1, 'x²'], [k, 'x'], [c, '']]) + ' = ' + fac(al) + fac(be) + ' = 0 → Q = {' + [al, be].sort((a, b) => a - b).map(num).join(', ') + '}.\n모든 원소의 합은 ' + num(ansV) + '.'
      };
    }
  });

  // N5. 필요충분조건: |x − c| ≤ r ⇔ x² + ax + b ≤ 0
  add({
    type: T_NS, level: 1,
    gen() {
      const c = R(-4, 4), r = R(1, 4);
      const a = -2 * c, b = c * c - r * r;
      const v = R(0, 1);
      const ansV = v === 0 ? a + b : b - a;
      const ch = numCh(ansV, [a - b, -a - b, c * c + r * r + a, -2 * c + r * r, 2 * c + b]);
      return {
        stem: '실수 x에 대한 두 조건 p: |' + xm(c) + '| ≤ ' + r + ', q: x² + ax + b ≤ 0에 대하여 p가 q이기 위한 필요충분조건일 때, 상수 a, b에 대하여 ' + (v === 0 ? 'a + b' : 'b − a') + '의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '필요충분조건이면 두 진리집합이 같습니다(P = Q).\n|' + xm(c) + '| ≤ ' + r + ' ⇔ ' + num(c - r) + ' ≤ x ≤ ' + num(c + r) + ' ⇔ (' + xm(c - r) + ')(' + xm(c + r) + ') ≤ 0 ⇔ ' + poly([[1, 'x²'], [a, 'x'], [b, '']]) + ' ≤ 0.\n따라서 a = ' + num(a) + ', b = ' + num(b) + ' 이고 ' + (v === 0 ? 'a + b = ' : 'b − a = ') + num(ansV) + '.'
      };
    }
  });

  // N6. ~q가 ~p이기 위한 충분조건 (끝점 포함 여부)
  add({
    type: T_NS, level: 3,
    gen() {
      const w = R(1, 3), Lo = R(-5, 0), Hi = Lo + w + R(1, 5);
      const cnt = Hi - w - Lo;
      const ch = intChoices(cnt, { min: 1 });
      return {
        stem: '실수 x에 대한 두 조건 p: (x − a)(x − a − ' + w + ') ≤ 0, q: ' + num(Lo) + ' < x ≤ ' + num(Hi) + '에 대하여 ~q가 ~p이기 위한 충분조건이 되도록 하는 정수 a의 개수는?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '~q ⇒ ~p 의 대우는 p ⇒ q 이므로 P ⊂ Q 이어야 합니다.\nP = {x | a ≤ x ≤ a + ' + w + '}, Q = {x | ' + num(Lo) + ' < x ≤ ' + num(Hi) + '}.\n왼쪽 끝: 끝값 x = ' + num(Lo) + '은 Q에 속하지 않으므로 a > ' + num(Lo) + ' (a = ' + num(Lo) + '이면 x = ' + num(Lo) + '이 P에는 있고 Q에는 없음).\n오른쪽 끝: a + ' + w + ' ≤ ' + num(Hi) + ' → a ≤ ' + num(Hi - w) + '.\n따라서 ' + num(Lo) + ' < a ≤ ' + num(Hi - w) + ', 정수 a는 ' + num(Lo + 1) + '부터 ' + num(Hi - w) + '까지 ' + cnt + '개.'
      };
    }
  });

  // N7. 모든 실수 x, y에 대하여 성립하는 이차부등식 (완전제곱식)
  add({
    type: T_PROOF, level: 1,
    gen() {
      let a, b; do { a = R(-4, 4); b = R(-4, 4); } while (a === 0 || b === 0);
      const strict = R(0, 1) === 1;
      const base = a * a + b * b;
      const ansV = base + (strict ? 1 : 0);
      const ex = poly([[1, 'x²'], [1, 'y²'], [-2 * a, 'x'], [-2 * b, 'y']]) + ' + c';
      const ch = numCh(ansV, [base - 1, base + 1, base + 2, Math.abs(a) + Math.abs(b), 2 * base, a * a, b * b]);
      return {
        stem: '모든 실수 x, y에 대하여 부등식 ' + ex + (strict ? ' > 0' : ' ≥ 0') + '이 성립하도록 하는 ' + (strict ? '정수' : '실수') + ' c의 최솟값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '완전제곱식으로 고치면 ' + ex + ' = (' + xm(a) + ')² + (' + xm(b, 'y') + ')² + c − ' + base + '.\n(' + xm(a) + ')² ≥ 0, (' + xm(b, 'y') + ')² ≥ 0 이고 x = ' + num(a) + ', y = ' + num(b) + '일 때 두 제곱식이 모두 0이 되므로, 항상 성립하려면 c − ' + base + (strict ? ' > 0' : ' ≥ 0') + ', 즉 c ' + (strict ? '> ' : '≥ ') + base + '.\n' + (strict ? '정수' : '실수') + ' c의 최솟값은 ' + ansV + '.'
      };
    }
  });

  // N8. 코시-슈바르츠 부등식
  add({
    type: T_PROOF, level: 2,
    gen() {
      const [a0, b0, h] = pick([[3, 4, 5], [4, 3, 5], [5, 12, 13], [12, 5, 13], [6, 8, 10], [8, 6, 10], [8, 15, 17]]);
      const a = a0 * pick([1, -1]), b = b0 * pick([1, -1]);
      const ab = poly([[a, 'x'], [b, 'y']]);
      if (R(0, 1) === 0) {
        const r = R(1, 3), isMax = R(0, 1) === 0;
        const ansV = isMax ? r * h : -r * h;
        const ch = numCh(ansV, [-ansV, r * (a0 + b0) * (isMax ? 1 : -1), r * r * h * (isMax ? 1 : -1), h * (isMax ? 1 : -1), (r * h + r) * (isMax ? 1 : -1)]);
        return {
          stem: '실수 x, y가 x² + y² = ' + r * r + '을 만족시킬 때, ' + ab + '의 ' + (isMax ? '최댓값' : '최솟값') + '은?',
          choices: ch.choices, ans: ch.ans, shuffle: false,
          explain: '코시-슈바르츠 부등식 (a² + b²)(x² + y²) ≥ (ax + by)² 에 의해\n(' + P(a) + '² + ' + P(b) + '²)(x² + y²) ≥ (' + ab + ')² → ' + (a0 * a0 + b0 * b0) + ' × ' + r * r + ' ≥ (' + ab + ')².\n따라서 −' + r * h + ' ≤ ' + ab + ' ≤ ' + r * h + '. (등호는 x : y = ' + num(a) + ' : ' + num(b) + '일 때)\n' + (isMax ? '최댓값' : '최솟값') + '은 ' + num(ansV) + '.'
        };
      }
      const k = R(1, 3) * pick([1, -1]), S = h * k, ansV = k * k;
      const ch = numCh(ansV, [S * S, Math.abs(S), h, Math.abs(k), 2 * k * k, k * k + 1]);
      return {
        stem: '실수 x, y가 ' + ab + ' = ' + num(S) + '을 만족시킬 때, x² + y²의 최솟값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '코시-슈바르츠 부등식에 의해 (' + P(a) + '² + ' + P(b) + '²)(x² + y²) ≥ (' + ab + ')² = ' + S * S + '.\n' + h * h + '(x² + y²) ≥ ' + S * S + ' → x² + y² ≥ ' + ansV + '.\n등호는 x : y = ' + num(a) + ' : ' + num(b) + '일 때 성립하므로 최솟값은 ' + ansV + '.'
      };
    }
  });

  // N9. 울타리(칸막이) 넓이의 최댓값
  add({
    type: T_AMGM, level: 2,
    gen() {
      const n = R(1, 3), m = R(2, 5), wall = R(0, 1) === 1;
      const k = n + 2;
      let Ltot, ansV, stem, ex;
      if (wall) {
        Ltot = 2 * k * m; ansV = k * m * m;
        stem = '길이가 ' + Ltot + ' m인 철망을 모두 사용하여 한쪽 면이 벽인 직사각형 모양의 울타리를 만들고, 벽과 수직인 칸막이 ' + n + '개를 설치하여 ' + (n + 1) + '개의 칸으로 나누려고 한다. 벽에는 철망을 사용하지 않을 때, 울타리 전체 넓이의 최댓값은? (단, 철망의 두께는 무시한다.)';
        ex = '벽과 수직인 변(양 끝 2개 + 칸막이 ' + n + '개)의 길이를 x, 벽과 평행한 변의 길이를 y라 하면 ' + k + 'x + y = ' + Ltot + '.\n산술평균과 기하평균의 관계에 의해 ' + k + 'x + y ≥ 2√(' + k + 'xy) → ' + Ltot + ' ≥ 2√(' + k + 'xy) → ' + k + 'xy ≤ ' + (Ltot * Ltot) / 4 + ' → xy ≤ ' + ansV + '.\n등호는 ' + k + 'x = y = ' + Ltot / 2 + ', 즉 x = ' + m + ', y = ' + k * m + '일 때. 최댓값 ' + ansV + ' m².';
      } else {
        Ltot = 4 * k * m; ansV = 2 * k * m * m;
        stem = '길이가 ' + Ltot + ' m인 철망을 모두 사용하여 직사각형 모양의 울타리를 만들고, 한 변과 평행한 칸막이 ' + n + '개를 설치하여 ' + (n + 1) + '개의 칸으로 나누려고 한다. 울타리 전체 넓이의 최댓값은? (단, 철망의 두께는 무시한다.)';
        ex = '칸막이와 평행한 변(2개 + 칸막이 ' + n + '개)의 길이를 x, 나머지 두 변의 길이를 y라 하면 ' + k + 'x + 2y = ' + Ltot + '.\n산술평균과 기하평균의 관계에 의해 ' + k + 'x + 2y ≥ 2√(' + 2 * k + 'xy) → ' + Ltot + ' ≥ 2√(' + 2 * k + 'xy) → ' + 2 * k + 'xy ≤ ' + (Ltot * Ltot) / 4 + ' → xy ≤ ' + ansV + '.\n등호는 ' + k + 'x = 2y = ' + Ltot / 2 + ', 즉 x = ' + 2 * m + ', y = ' + k * m + '일 때. 최댓값 ' + ansV + ' m².';
      }
      const ch = numCh(ansV, [ansV / 2, 2 * ansV, ansV + k, ansV - k, Math.round((Ltot * Ltot) / 16)].filter((x) => Number.isInteger(x) && x > 0), (v) => v + ' m²');
      return { stem, choices: ch.choices, ans: ch.ans, shuffle: false, explain: ex };
    }
  });

  // N10. 합 고정 → 곱 최대 / 곱 고정 → 합 최소
  add({
    type: T_AMGM, level: 1,
    gen() {
      const p = R(1, 4); let q; do { q = R(1, 4); } while (q === p);
      const sm = poly([[p, 'a'], [q, 'b']]);
      if (R(0, 1) === 0) {
        const t = R(1, 3), S = 2 * p * q * t, ansV = p * q * t * t;
        const ch = numCh(ansV, [2 * ansV, ansV * 4, (S * S) / 4, ansV + p * q]);
        return {
          stem: '양수 a, b에 대하여 ' + sm + ' = ' + S + '일 때, ab의 최댓값은?',
          choices: ch.choices, ans: ch.ans, shuffle: false,
          explain: p + 'a > 0, ' + q + 'b > 0 이므로 ' + sm + ' ≥ 2√(' + p * q + 'ab) → ' + S + ' ≥ 2√(' + p * q + 'ab) → ' + p * q + 'ab ≤ ' + (S * S) / 4 + ' → ab ≤ ' + ansV + '.\n등호는 ' + cx(p, 'a') + ' = ' + cx(q, 'b') + ' = ' + S / 2 + ', 즉 a = ' + q * t + ', b = ' + p * t + '일 때. 최댓값 ' + ansV + '.'
        };
      }
      let K; do { K = R(2, 36); } while (!isSq(p * q * K));
      const ansV = 2 * Math.sqrt(p * q * K);
      const ch = numCh(ansV, [ansV / 2, 2 * Math.sqrt(K), p + q + K, ansV + 2, ansV * 2]);
      return {
        stem: '양수 a, b에 대하여 ab = ' + K + '일 때, ' + sm + '의 최솟값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '산술평균과 기하평균의 관계에 의해 ' + sm + ' ≥ 2√(' + cx(p, 'a') + ' × ' + cx(q, 'b') + ') = 2√(' + p * q + ' × ' + K + ') = 2√' + p * q * K + ' = ' + ansV + '.\n등호는 ' + cx(p, 'a') + ' = ' + cx(q, 'b') + '일 때 성립하므로 최솟값은 ' + ansV + '.'
      };
    }
  });

  // N11. pa + qb = S 일 때 m/a + n/b 의 최솟값 (분수 답)
  const N11set = [];
  [1, 2, 3, 4].forEach((p) => [1, 2, 3, 4].forEach((q) => [1, 2, 3, 4].forEach((m) => [1, 2, 3, 4].forEach((n) => { if (isSq(p * q * m * n) && !(p === q && m === n)) N11set.push([p, q, m, n]); }))));
  add({
    type: T_AMGM, level: 3,
    gen() {
      const [p, q, m, n] = pick(N11set), S = pick([1, 2, 3, 4, 6]);
      const r = Math.sqrt(p * q * m * n), A = p * m + q * n;
      const ansN = A + 2 * r;
      const ch = numCh(ansN, [A, A + r, A + 4 * r, 2 * r, ansN * 2].filter((x) => x > 0), (v) => fr(v, S));
      const term = (c, v) => c + '/' + v;
      return {
        stem: '양수 a, b에 대하여 ' + poly([[p, 'a'], [q, 'b']]) + ' = ' + S + '일 때, ' + term(m, 'a') + ' + ' + term(n, 'b') + '의 최솟값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: (S === 1 ? '' : poly([[p, 'a'], [q, 'b']]) + ' = ' + S + ' 이므로 ') + term(m, 'a') + ' + ' + term(n, 'b') + ' = ' + (S === 1 ? '' : '(1/' + S + ')') + '(' + poly([[p, 'a'], [q, 'b']]) + ')(' + term(m, 'a') + ' + ' + term(n, 'b') + ')\n= ' + (S === 1 ? '' : '(1/' + S + ')') + '{' + A + ' + ' + p * n + 'a/b + ' + q * m + 'b/a}.\n' + p * n + 'a/b > 0, ' + q * m + 'b/a > 0 이므로 산술평균과 기하평균의 관계에 의해 ' + p * n + 'a/b + ' + q * m + 'b/a ≥ 2√' + p * q * m * n + ' = ' + 2 * r + '.\n따라서 최솟값은 (' + A + ' + ' + 2 * r + ')/' + S + ' = ' + fr(ansN, S) + '. (등호는 ' + p * n + 'a/b = ' + q * m + 'b/a 일 때)\n(주의) 곱 ab의 최댓값을 먼저 구해서 대입하면 등호 조건이 달라져 틀립니다.'
      };
    }
  });

  // N12. (x² + ax + b)/(x − p) 의 최솟값 (x > p)
  add({
    type: T_AMGM, level: 3,
    gen() {
      const p = R(-2, 3), u = R(1, 5), a = R(-4, 4);
      const b = u * u - p * p - a * p;
      const ansV = 2 * u + 2 * p + a;
      const ch = numCh(ansV, [u + 2 * p + a, 2 * u + a, 2 * u, 2 * u + p + a, ansV + 2 * u]);
      const t = p === 0 ? 'x' : xm(p);
      return {
        stem: 'x > ' + num(p) + '일 때, (' + poly([[1, 'x²'], [a, 'x'], [b, '']]) + ')/' + den(p) + '의 최솟값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: (p === 0 ? '' : 't = ' + t + ' (t > 0)로 놓으면 x = t' + tail(p) + '.\n') + '분자를 정리하면 ' + (p === 0 ? 'x² ' + (a === 0 ? '' : (a > 0 ? '+ ' : '− ') + Math.abs(a) + 'x ') + '+ ' + u * u : 't² ' + ((2 * p + a) === 0 ? '' : ((2 * p + a) > 0 ? '+ ' : '− ') + Math.abs(2 * p + a) + 't ') + '+ ' + u * u) + ' 이므로\n(주어진 식) = ' + (p === 0 ? 'x + ' + u * u + '/x' : 't + ' + u * u + '/t') + tail(2 * p + a) + '.\n산술평균과 기하평균의 관계에 의해 ' + (p === 0 ? 'x + ' + u * u + '/x' : 't + ' + u * u + '/t') + ' ≥ 2√' + u * u + ' = ' + 2 * u + ' (등호는 ' + (p === 0 ? 'x' : 't') + ' = ' + u + ', 즉 x = ' + (u + p) + '일 때).\n최솟값은 ' + 2 * u + tail(2 * p + a) + ' = ' + num(ansV) + '.'
      };
    }
  });

  // N13. 함수·일대일함수·일대일대응·상수함수의 개수
  add({
    type: T_FUNC, level: 1,
    gen() {
      const m = R(2, 3), n = R(m, 4);
      const X = Array.from({ length: m }, (_, i) => i + 1).join(', ');
      const Y = ['a', 'b', 'c', 'd'].slice(0, n).join(', ');
      const fact = (k) => (k <= 1 ? 1 : k * fact(k - 1));
      const perm = fact(n) / fact(n - m), comb = perm / fact(m);
      const opts = [['함수', n ** m, 'Y의 원소 ' + n + '개 중 하나씩을 X의 원소 ' + m + '개에 대응시키므로 ' + n + '^' + m + ' = ' + n ** m + '.'], ['일대일함수', perm, '서로 다른 원소에 서로 다른 값을 대응시키므로 ' + n + (m >= 2 ? ' × ' + (n - 1) : '') + (m >= 3 ? ' × ' + (n - 2) : '') + ' = ' + perm + '.'], ['상수함수', n, '모든 원소를 Y의 한 원소에 대응시키므로 ' + n + '.']];
      if (m === n) opts.push(['일대일대응', fact(n), '일대일대응은 X와 Y의 원소를 하나씩 짝짓는 것이므로 ' + n + '! = ' + fact(n) + '.']);
      const [nm, ansV, why] = pick(opts);
      const ch = numCh(ansV, [n ** m, m ** n, perm, comb, n * m, n, fact(n), n ** m - n].filter((x) => x > 0));
      return {
        stem: '두 집합 X = {' + X + '}, Y = {' + Y + '}에 대하여 X에서 Y로의 ' + nm + '의 개수는?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: why + '\n(참고) 함수 ' + n ** m + '개, 일대일함수 ' + perm + '개, 상수함수 ' + n + '개' + (m === n ? ', 일대일대응 ' + fact(n) + '개' : ' (X, Y의 원소 개수가 다르므로 일대일대응은 없음)') + '.'
      };
    }
  });

  // N14. 항등함수·상수함수·일대일대응 조건
  add({
    type: T_FUNC, level: 2,
    gen() {
      const c = R(1, 3);
      const ord = shuffle([1, 2, 3]);
      const [p, q, r] = ord;
      const rest = [1, 2, 3].filter((v) => v !== c).sort((a, b) => a - b);
      const h = {}; h[p] = c; h[q] = rest[0]; h[r] = rest[1];
      const j1 = R(1, 3), j2 = R(1, 3), j3 = R(1, 3);
      const ansV = j1 + c + h[j3];
      const ch = intChoices(ansV, { min: 1 });
      return {
        stem: '집합 X = {1, 2, 3}에 대하여 X에서 X로의 세 함수 f, g, h가 다음 조건을 만족시킬 때, f(' + j1 + ') + g(' + j2 + ') + h(' + j3 + ')의 값은?',
        box: '(가) f는 항등함수, g는 상수함수, h는 일대일대응이다.\n(나) g(1) = f(' + c + '), h(' + p + ') = g(' + (c === 3 ? 2 : 3) + ')\n(다) h(' + q + ') < h(' + r + ')',
        boxTitle: '조 건',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: 'f는 항등함수이므로 f(x) = x. g(1) = f(' + c + ') = ' + c + '이고 g는 상수함수이므로 g(x) = ' + c + '.\nh(' + p + ') = g(…) = ' + c + '. h는 일대일대응이므로 h(' + q + '), h(' + r + ')는 나머지 ' + rest.join(', ') + '이고, h(' + q + ') < h(' + r + ')이므로 h(' + q + ') = ' + rest[0] + ', h(' + r + ') = ' + rest[1] + '.\n따라서 f(' + j1 + ') + g(' + j2 + ') + h(' + j3 + ') = ' + j1 + ' + ' + c + ' + ' + h[j3] + ' = ' + ansV + '.'
      };
    }
  });

  // N15. X = {x | x ≥ k} 에서 X로의 이차함수가 일대일대응
  add({
    type: T_FUNC, level: 3,
    gen() {
      const p = R(-1, 2), k = p + R(0, 3);
      const m = k - k * k + 2 * p * k;
      const ch = numCh(m, [m + k, m - k, -m, k * k - 2 * p * k, m + 1, m - 1]);
      return {
        stem: '집합 X = {x | x ≥ ' + num(k) + '}에 대하여 X에서 X로의 함수 f(x) = ' + poly([[1, 'x²'], [-2 * p, 'x']]) + ' + m이 일대일대응이 되도록 하는 상수 m의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: 'f(x) = (' + xm(p) + ')² + m − ' + P(p * p) + '의 축은 x = ' + num(p) + '이고 ' + num(p) + ' ≤ ' + num(k) + '이므로 x ≥ ' + num(k) + '에서 f는 증가합니다.\n따라서 치역은 {y | y ≥ f(' + num(k) + ')}이고, 일대일대응이려면 치역 = 공역 X, 즉 f(' + num(k) + ') = ' + num(k) + '.\n' + P(k) + '² − ' + P(2 * p) + ' × ' + P(k) + ' + m = ' + num(k) + ' → m = ' + num(m) + '.'
      };
    }
  });

  // N16. f∘f 가 주어질 때 일차함수 f 결정
  add({
    type: T_COMP, level: 1,
    gen() {
      const a = pick([2, 3, -2, -3]);
      let b; do { b = R(-5, 5); } while (b === 0);
      const k = R(-3, 3);
      const ansV = a * k + b;
      const ch = numCh(ansV, [-a * k + b, a * k - b, a * a * k + (a + 1) * b, -a * k - b, (a + 1) * b]);
      return {
        stem: '일차함수 f(x) = ax + b (a ' + (a > 0 ? '> 0' : '< 0') + ')에 대하여 (f∘f)(x) = ' + lin(a * a, (a + 1) * b) + '일 때, f(' + num(k) + ')의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '(f∘f)(x) = a(ax + b) + b = a²x + ab + b.\n계수를 비교하면 a² = ' + a * a + ', a ' + (a > 0 ? '> 0' : '< 0') + ' 이므로 a = ' + num(a) + '.\n(a + 1)b = ' + num((a + 1) * b) + ' → ' + cx(a + 1, 'b') + ' = ' + num((a + 1) * b) + ' → b = ' + num(b) + '.\nf(x) = ' + lin(a, b) + ' 이므로 f(' + num(k) + ') = ' + num(ansV) + '.'
      };
    }
  });

  // N17. f∘g = g∘f (교환)이 성립할 조건
  add({
    type: T_COMP, level: 2,
    gen() {
      const a = pick([2, 3, -1, -2]);
      let c; do { c = pick([2, 3, 4, -1, -2]); } while (c === a);
      let t; do { t = R(-3, 3); } while (t === 0);
      const b = (a - 1) * t, d = (c - 1) * t;
      const k = R(-3, 3), ansV = c * k + d;
      const ch = numCh(ansV, [c * k - d, c * k + b, c * k, a * k + d, ansV + c]);
      return {
        stem: '두 함수 f(x) = ' + lin(a, b) + ', g(x) = ' + cx(c) + ' + d에 대하여 f∘g = g∘f가 성립할 때, g(' + num(k) + ')의 값은? (단, d는 상수이다.)',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '(f∘g)(x) = ' + (a === -1 ? '−' : num(a)) + '(' + cx(c) + ' + d)' + tail(b) + ' = ' + poly([[a * c, 'x'], [a, 'd'], [b, '']]) + '\n(g∘f)(x) = ' + num(c) + '(' + lin(a, b) + ') + d = ' + cx(a * c) + tail(c * b) + ' + d\n상수항 비교: ' + poly([[a, 'd'], [b, '']]) + ' = ' + num(c * b) + ' + d → ' + (a - 1 === 1 ? '' : cx(a - 1, 'd') + ' = ' + num((c - 1) * b) + ' → ') + 'd = ' + num(d) + '.\ng(x) = ' + lin(c, d) + ' 이므로 g(' + num(k) + ') = ' + num(ansV) + '.'
      };
    }
  });

  // N18. (g∘f)(x)가 이차식일 때 g(k)
  add({
    type: T_COMP, level: 2,
    gen() {
      const a = pick([2, 3, -1, -2]), b = R(-4, 4);
      const x0 = R(-3, 3), k = a * x0 + b;
      const u = R(-4, 4), v = R(-5, 5);
      const Q = (x) => x * x + u * x + v;
      const ansV = Q(x0);
      const ch = numCh(ansV, [Q(k), Q(-x0), Q(x0 + 1), Q(x0) + a, a * Q(x0) + b]);
      return {
        stem: '두 함수 f(x) = ' + lin(a, b) + ', g(x)에 대하여 (g∘f)(x) = ' + poly([[1, 'x²'], [u, 'x'], [v, '']]) + '일 때, g(' + num(k) + ')의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: 'g(' + num(k) + ')를 구하려면 f(x) = ' + num(k) + '인 x를 찾습니다: ' + lin(a, b) + ' = ' + num(k) + ' → x = ' + num(x0) + '.\n따라서 g(' + num(k) + ') = g(f(' + num(x0) + ')) = (g∘f)(' + num(x0) + ') = ' + P(x0) + '² ' + (u < 0 ? '− ' + -u : '+ ' + u) + ' × ' + P(x0) + ' ' + (v < 0 ? '− ' + -v : '+ ' + v) + ' = ' + num(ansV) + '.\n(주의) (g∘f)(' + num(k) + ')를 계산하면 틀립니다.'
      };
    }
  });

  // N19. 꺾은선 그래프에서 합성함수 값
  add({
    type: T_COMP, level: 1,
    gen() {
      let v;
      do { v = [0, 1, 2, 3, 4].map(() => R(0, 4)); } while (new Set(v).size < 3);
      const f = (x) => v[x];
      const i = R(0, 4), j = R(0, 4);
      const ansV = f(f(i)) + f(f(f(j)));
      const lin2 = (x) => { const a = Math.floor(Math.min(x, 3.9999)); return v[a] + (v[a + 1] - v[a]) * (x - a); };
      const fig = plot({ xr: [-0.6, 4.7], yr: [-0.6, 4.7], fns: [{ f: lin2, a: 0, b: 4 }], dots: v.map((y, x) => [x, y]), guides: v.map((y, x) => [x, y]).filter(([x, y]) => x > 0 && y > 0), ticks: { x: [[1, '1'], [2, '2'], [3, '3'], [4, '4']], y: [[1, '1'], [2, '2'], [3, '3'], [4, '4']] } });
      const ch = intChoices(ansV, { min: 0 });
      return {
        fig,
        stem: '0 ≤ x ≤ 4에서 정의된 함수 y = f(x)의 그래프가 그림과 같이 다섯 점 ' + v.map((y, x) => C(x, y)).join(', ') + '을 차례로 이은 꺾은선일 때, (f∘f)(' + i + ') + (f∘f∘f)(' + j + ')의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '안쪽부터 차례로 그래프에서 읽습니다.\n(f∘f)(' + i + ') = f(f(' + i + ')) = f(' + f(i) + ') = ' + f(f(i)) + '\n(f∘f∘f)(' + j + ') = f(f(f(' + j + '))) = f(f(' + f(j) + ')) = f(' + f(f(j)) + ') = ' + f(f(f(j))) + '\n합: ' + f(f(i)) + ' + ' + f(f(f(j))) + ' = ' + ansV + '.'
      };
    }
  });

  // N20. g(x) = f(px + q) 의 역함수 값
  add({
    type: T_INV, level: 2,
    gen() {
      const p = pick([2, 3, -1, -2]), q = R(-4, 4), x0 = R(-3, 3);
      const r = p * x0 + q, k = R(-5, 5);
      const v = R(0, 1);
      const ch = numCh(x0, [r, p * r + q, r - q, k, (k - q) / p].filter((x) => Number.isInteger(x)));
      return {
        stem: '실수 전체의 집합에서 역함수가 존재하는 함수 f에 대하여 ' + (v === 0 ? 'f⁻¹(' + num(k) + ') = ' + num(r) : 'f(' + num(r) + ') = ' + num(k)) + '이다. 함수 g(x) = f(' + lin(p, q) + ')일 때, g⁻¹(' + num(k) + ')의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: (v === 0 ? 'f⁻¹(' + num(k) + ') = ' + num(r) + ' ⇔ f(' + num(r) + ') = ' + num(k) + '.\n' : '') + 'g⁻¹(' + num(k) + ') = t라 하면 g(t) = ' + num(k) + ', 즉 f(' + lin(p, q, 't') + ') = ' + num(k) + '.\nf는 일대일대응이고 f(' + num(r) + ') = ' + num(k) + '이므로 ' + lin(p, q, 't') + ' = ' + num(r) + ' → t = ' + num(x0) + '.\n따라서 g⁻¹(' + num(k) + ') = ' + num(x0) + '.'
      };
    }
  });

  // N21. (f⁻¹∘g)⁻¹(k), (g∘f⁻¹)⁻¹(k)
  add({
    type: T_INV, level: 1,
    gen() {
      const a = pick([2, 3, -1, -2, 1]), b = R(-4, 4), c = pick([2, 3, -1, -2, 4]);
      const y0 = R(-3, 3);
      if (R(0, 1) === 0) {
        const k = R(-3, 3), d = a * k + b - c * y0;
        const ch = numCh(y0, [a * k + b, c * k + d, (c * k + d - b) / a, k, -y0].filter((x) => Number.isInteger(x)));
        return {
          stem: '두 함수 f(x) = ' + lin(a, b) + ', g(x) = ' + lin(c, d) + '에 대하여 (f⁻¹∘g)⁻¹(' + num(k) + ')의 값은?',
          choices: ch.choices, ans: ch.ans, shuffle: false,
          explain: '(f⁻¹∘g)⁻¹ = g⁻¹∘(f⁻¹)⁻¹ = g⁻¹∘f 이므로 (f⁻¹∘g)⁻¹(' + num(k) + ') = g⁻¹(f(' + num(k) + ')).\nf(' + num(k) + ') = ' + num(a * k + b) + '. g⁻¹(' + num(a * k + b) + ') = t라 하면 g(t) = ' + num(a * k + b) + ' → ' + lin(c, d, 't') + ' = ' + num(a * k + b) + ' → t = ' + num(y0) + '.'
        };
      }
      const d = R(-4, 4), k = c * y0 + d, ansV = a * y0 + b;
      const ch = numCh(ansV, [y0, (k - b) / a, a * k + b, c * (a * y0 + b) + d, -ansV].filter((x) => Number.isInteger(x)));
      return {
        stem: '두 함수 f(x) = ' + lin(a, b) + ', g(x) = ' + lin(c, d) + '에 대하여 (g∘f⁻¹)⁻¹(' + num(k) + ')의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '(g∘f⁻¹)⁻¹ = (f⁻¹)⁻¹∘g⁻¹ = f∘g⁻¹ 이므로 (g∘f⁻¹)⁻¹(' + num(k) + ') = f(g⁻¹(' + num(k) + ')).\ng⁻¹(' + num(k) + ') = t라 하면 ' + lin(c, d, 't') + ' = ' + num(k) + ' → t = ' + num(y0) + '.\nf(' + num(y0) + ') = ' + num(ansV) + '.'
      };
    }
  });

  // N22. 유리함수 그래프 위의 격자점(정수 좌표) 개수
  add({
    type: T_RAT, level: 2,
    gen() {
      const k = pick([2, 3, 4, 5, 6, 8, 9, 10, 12, -4, -6, -8]) , p = R(-3, 3), q = R(-3, 3);
      const ak = Math.abs(k), divs = [];
      for (let d = 1; d <= ak; d++) if (ak % d === 0) divs.push(d);
      const ansV = 2 * divs.length;
      const ch = intChoices(ansV, { min: 1 });
      return {
        stem: '함수 y = ' + ratStr(k, p, q) + '의 그래프 위의 점 중에서 x좌표와 y좌표가 모두 정수인 점의 개수는?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: 'y = ' + stdStr(k, p, q) + ' 이므로 x, y가 모두 정수이려면 ' + xm(p) + '가 ' + ak + '의 약수이거나 약수에 − 부호를 붙인 수이어야 합니다.\n' + ak + '의 양의 약수: ' + divs.join(', ') + ' (' + divs.length + '개) → ' + xm(p) + ' = ±' + divs.join(', ±') + '.\n따라서 점의 개수는 ' + divs.length + ' × 2 = ' + ansV + '.'
      };
    }
  });

  // N23. 유리함수 그래프의 대칭축(직선)
  add({
    type: T_RAT, level: 1,
    gen() {
      const k = pick([1, 2, 3, 4, 5, -1, -2, -3, -5]), p = R(-4, 4), q = R(-4, 4);
      const a = q - p, b = p + q;
      const v = R(0, 2);
      const ansV = v === 0 ? a + b : v === 1 ? b - a : a * b;
      const nm = v === 0 ? 'a + b' : v === 1 ? 'b − a' : 'ab';
      const ch = numCh(ansV, [2 * p, 2 * q, -2 * p, -2 * q, -(a * b), a - b, (p - q) * (p + q)]);
      return {
        stem: '함수 y = ' + ratStr(k, p, q) + '의 그래프가 두 직선 y = x + a, y = −x + b에 대하여 각각 대칭일 때, 상수 a, b에 대하여 ' + nm + '의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: 'y = ' + stdStr(k, p, q) + ' 이므로 점근선의 교점은 ' + C(p, q) + '.\n유리함수의 그래프는 점근선의 교점을 지나고 기울기가 ±1인 두 직선에 대하여 대칭입니다.\ny = x + a가 ' + C(p, q) + '를 지나므로 a = ' + num(q) + ' − ' + P(p) + ' = ' + num(a) + ', y = −x + b가 지나므로 b = ' + num(q) + ' + ' + P(p) + ' = ' + num(b) + '.\n따라서 ' + nm + ' = ' + num(ansV) + '.'
      };
    }
  });

  // N24. f = f⁻¹ 인 유리함수 (y = x 대칭)
  add({
    type: T_RAT, level: 2,
    gen() {
      const p = R(-3, 3);
      let x0, y0; do { x0 = R(-3, 4); y0 = R(-4, 4); } while (x0 === p || y0 === p);
      const a = p, b = y0 * (x0 - p) - p * x0;
      const ansV = a + b;
      const ch = numCh(ansV, [b - a, -a + b === ansV ? b + 2 : -a + b, b, ansV + 2 * p || ansV + 3, -ansV]);
      return {
        stem: '함수 f(x) = (ax + b)/' + den(p) + '에 대하여 f⁻¹(x) = f(x)이고 f(' + num(x0) + ') = ' + num(y0) + '일 때, 상수 a, b에 대하여 a + b의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: 'f(x) = (ax + b)/' + den(p) + '의 점근선은 x = ' + num(p) + ', y = a 이므로 점근선의 교점은 (' + num(p) + ', a).\nf = f⁻¹이면 그래프가 직선 y = x에 대하여 대칭이므로 점근선의 교점이 y = x 위에 있어야 합니다 → a = ' + num(p) + '.\nf(' + num(x0) + ') = (' + P(p) + ' × ' + P(x0) + ' + b)/' + P(x0 - p) + ' = ' + num(y0) + ' → ' + num(p * x0) + ' + b = ' + num(y0 * (x0 - p)) + ' → b = ' + num(b) + '.\n따라서 a + b = ' + num(ansV) + '.'
      };
    }
  });

  // N25. 유리함수와 직선 y = −x + n 이 만나지 않는 정수 n의 개수
  add({
    type: T_RAT, level: 3,
    gen() {
      const k = R(1, 8), p = R(-3, 3), q = R(-3, 3);
      const ns = [];
      for (let n = p + q - 10; n <= p + q + 10; n++) if ((n - p - q) ** 2 < 4 * k) ns.push(n);
      const ansV = ns.length;
      const ch = intChoices(ansV, { min: 1 });
      return {
        stem: '함수 y = ' + stdStr(k, p, q) + '의 그래프와 직선 y = −x + n이 만나지 않도록 하는 정수 n의 개수는?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: stdStr(k, p, q) + ' = −x + n 에서 t = ' + xm(p) + '로 놓으면 ' + k + '/t' + tail(q) + ' = −t' + tail(-p) + ' + n.\n양변에 t를 곱해 정리하면 t² ' + '+ (' + (p + q === 0 ? '' : num(p + q) + ' ') + '− n)t + ' + k + ' = 0. (t = 0은 해가 아니므로 곱해도 됩니다.)\n만나지 않으려면 판별식 D = (n' + tail(-(p + q)) + ')² − ' + 4 * k + ' < 0 → (n' + tail(-(p + q)) + ')² < ' + 4 * k + '.\n이를 만족하는 정수 n: ' + ns.map(num).join(', ') + ' → ' + ansV + '개.' + (isSq(k) ? '\n(주의) (n' + tail(-(p + q)) + ')² = ' + 4 * k + '이면 접하므로(한 점에서 만남) 제외합니다.' : '')
      };
    }
  });

  // N26. 정의역·치역과 지나는 점으로 무리함수 결정
  add({
    type: T_IRR, level: 2,
    gen() {
      const a = pick([1, 2, 3, -1, -2, -3]), s = R(-4, 4), c = R(-4, 4), sg = pick([1, -1]), u = R(1, 2);
      const x1 = s + a * u * u, y1 = c + sg * Math.abs(a) * u;
      const b = -a * s, ansV = a + b + c;
      const ch = numCh(ansV, [-a + b + c, a - b + c, a + b - c, -a - b + c, ansV + 2 * a]);
      return {
        stem: '함수 y = ' + (sg < 0 ? '−' : '') + '√(ax + b) + c의 정의역이 {x | x ' + (a > 0 ? '≥ ' : '≤ ') + num(s) + '}, 치역이 {y | y ' + (sg > 0 ? '≥ ' : '≤ ') + num(c) + '}이고 그래프가 점 ' + C(x1, y1) + '을 지날 때, 상수 a, b, c에 대하여 a + b + c의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '정의역이 {x | x ' + (a > 0 ? '≥ ' : '≤ ') + num(s) + '}이므로 y = ' + (sg < 0 ? '−' : '') + '√(a' + fac(s) + ') + c 꼴이고 a ' + (a > 0 ? '> 0' : '< 0') + ', 치역에서 c = ' + num(c) + '.\n점 ' + C(x1, y1) + '을 대입: ' + num(y1) + ' = ' + (sg < 0 ? '−' : '') + '√(a × ' + P(x1 - s) + ')' + tail(c) + ' → √(' + cx(x1 - s, 'a') + ') = ' + Math.abs(a) * u + ' → a = ' + num(a) + '.\nb = −a × ' + P(s) + ' = ' + num(b) + ' 이므로 a + b + c = ' + num(ansV) + '.'
      };
    }
  });

  // N27. 무리함수와 직선 y = x + k 가 두 점에서 만나는 범위
  add({
    type: T_IRR, level: 3,
    gen() {
      const a = pick([1, 2, 4, 8]), p = R(-3, 3), q = R(-3, 3);
      const al4 = 4 * (q - p), be4 = 4 * (q - p) + a; // ×4
      const v = R(0, 1);
      const ansN = v === 0 ? al4 + be4 : be4;
      const ch = numCh(ansN, v === 0 ? [al4 + be4 + a, al4 + be4 - a, 2 * al4, 2 * be4, al4 + be4 + 4] : [al4, be4 + 4, be4 - 4 * a + a, al4 + 2 * a, be4 + a], (x) => fr(x, 4));
      const fx = 'y = √(' + lin(a, -a * p) + ')' + tail(q);
      return {
        stem: '함수 ' + fx + '의 그래프와 직선 y = x + k가 ' + (v === 0 ? '서로 다른 두 점에서 만나도록 하는 실수 k의 값의 범위가 α ≤ k < β일 때, α + β의 값은?' : '접할 때, 실수 k의 값은?'),
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: fx + ' = √(' + (a === 1 ? '' : a) + '(' + xm(p) + '))' + tail(q) + '는 점 ' + C(p, q) + '에서 시작합니다.\n① 직선이 시작점을 지날 때: ' + num(q) + ' = ' + num(p) + ' + k → k = ' + num(q - p) + ' (두 점에서 만나기 시작).\n② 접할 때: X = ' + xm(p) + ', Y = y' + tail(-q) + '로 놓으면 Y = √(' + (a === 1 ? '' : a) + 'X), Y = X + K (K = k' + tail(p - q) + '). ' + (a === 1 ? '' : a) + 'X = (X + K)² → X² + (2K − ' + a + ')X + K² = 0, D = (2K − ' + a + ')² − 4K² = ' + a * a + ' − ' + 4 * a + 'K = 0 → K = ' + fr(a, 4) + ', 즉 k = ' + fr(be4, 4) + '.\n' + (v === 0 ? '따라서 ' + fr(al4, 4) + ' ≤ k < ' + fr(be4, 4) + '이고 α + β = ' + fr(ansN, 4) + '.' : '따라서 접할 때 k = ' + fr(ansN, 4) + '.')
      };
    }
  });

  // N28. 무리함수의 평행이동과 대칭이동
  add({
    type: T_IRR, level: 1,
    gen() {
      const a = pick([1, 2, 3, -1, -2, -3]);
      let m, n; do { m = R(-4, 4); n = R(-4, 4); } while (m === 0 || n === 0);
      const sym = R(0, 2);
      let s, c, d, e;
      if (sym === 0) { s = -1; c = a; d = -a * m; e = -n; }
      else if (sym === 1) { s = 1; c = -a; d = -a * m; e = n; }
      else { s = -1; c = -a; d = -a * m; e = -n; }
      const nm = ['x축', 'y축', '원점'][sym];
      const ansV = c + d + e;
      const ch = numCh(ansV, [-c + d + e, c - d + e, c + d - e, a + d + n, a - a * m + n].filter((x) => x !== ansV));
      const shifted = 'y = √(' + lin(a, -a * m) + ')' + tail(n);
      const rule = ['y 대신 −y', 'x 대신 −x', 'x 대신 −x, y 대신 −y'][sym];
      return {
        stem: '함수 y = √(' + cx(a) + ')의 그래프를 x축의 방향으로 ' + num(m) + '만큼, y축의 방향으로 ' + num(n) + '만큼 평행이동한 후 ' + nm + '에 대하여 대칭이동한 그래프가 함수 y = ' + (s < 0 ? '−' : '') + '√(cx + d) + e의 그래프와 일치할 때, 상수 c, d, e에 대하여 c + d + e의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: '평행이동: x 대신 x − ' + P(m) + ', y 대신 y − ' + P(n) + ' → ' + shifted + '.\n' + nm + ' 대칭: ' + rule + ' → y = ' + (s < 0 ? '−' : '') + '√(' + lin(c, d) + ')' + tail(e) + '.\n따라서 c = ' + num(c) + ', d = ' + num(d) + ', e = ' + num(e) + ' 이고 c + d + e = ' + num(ansV) + '.'
      };
    }
  });

  // N29. 무리함수의 역함수 값
  add({
    type: T_IRR, level: 1,
    gen() {
      const a = pick([1, 2, 3, -1, -2]), c = R(-3, 3), u = R(0, 4), x0 = R(-4, 4);
      const b = u * u - a * x0, k = c + u;
      const f = (x) => (a * x + b >= 0 ? Math.sqrt(a * x + b) + c : NaN);
      const fk = f(k);
      const ch = numCh(x0, [Number.isInteger(fk) ? fk : x0 + 3, -x0, u, k, x0 + a].filter((x) => x !== x0));
      return {
        stem: '함수 f(x) = √(' + lin(a, b) + ')' + tail(c) + '에 대하여 f⁻¹(' + num(k) + ')의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: 'f⁻¹(' + num(k) + ') = t라 하면 f(t) = ' + num(k) + '.\n√(' + lin(a, b, 't') + ')' + tail(c) + ' = ' + num(k) + ' → √(' + lin(a, b, 't') + ') = ' + u + ' → ' + lin(a, b, 't') + ' = ' + u * u + ' → t = ' + num(x0) + '.\n따라서 f⁻¹(' + num(k) + ') = ' + num(x0) + '. (역함수의 식을 직접 구하지 않아도 됩니다.)'
      };
    }
  });

  // N30. 무리함수 그래프가 지나는 사분면
  add({
    type: T_IRR, level: 2,
    gen() {
      let a, p, c, s, set, f;
      do {
        a = pick([1, 2, 3, -1, -2, -3]); p = R(-4, 4); c = R(-4, 4); s = pick([1, -1]);
        f = (x) => s * Math.sqrt(a * (x - p)) + c;
        set = new Set();
        const ds = [0];
        for (let i = -60; i <= 60; i++) ds.push(Math.pow(10, i / 10));
        for (let i = 1; i <= 400; i++) ds.push(i * 0.125);
        ds.forEach((d) => {
          const x = p + Math.sign(a) * d, y = f(x);
          if (Math.abs(x) < 1e-12 || Math.abs(y) < 1e-12) return;
          set.add(x > 0 ? (y > 0 ? 1 : 4) : (y > 0 ? 2 : 3));
        });
      } while (set.size === 0);
      const fmtQ = (arr) => '제' + arr.slice().sort().join(', ') + '사분면';
      const ansA = Array.from(set).sort();
      const all = [];
      for (let mk = 1; mk < 16; mk++) { const arr = [1, 2, 3, 4].filter((_, i) => mk & (1 << i)); if (arr.length <= 3) all.push(arr); }
      const others = shuffle(all.filter((x) => x.join() !== ansA.join())).slice(0, 4);
      const ch = shuffle([ansA].concat(others));
      const b = -a * p;
      const y0 = (0 - p) * a >= 0 ? f(0) : null;
      const xint = s * c < 0 ? p + (c * c) / a : null;
      const fxs = 'y = ' + (s < 0 ? '−' : '') + '√(' + lin(a, b) + ')' + tail(c);
      return {
        stem: '함수 ' + fxs + '의 그래프가 지나는 사분면을 모두 고른 것은?',
        choices: ch.map(fmtQ), ans: ch.findIndex((x) => x.join() === ansA.join()) + 1, shuffle: false,
        explain: fxs.replace('y = ', 'y = ') + ' = ' + (s < 0 ? '−' : '') + '√(' + (a === 1 ? '' : a === -1 ? '−' : num(a)) + (p === 0 ? 'x' : '(' + xm(p) + ')') + ')' + tail(c) + '\n→ 시작점 ' + C(p, c) + ', 정의역 {x | x ' + (a > 0 ? '≥ ' : '≤ ') + num(p) + '}, x가 ' + (a > 0 ? '커질' : '작아질') + '수록 y가 ' + (s > 0 ? '증가' : '감소') + '합니다.\n' +
          (y0 !== null ? 'y절편: x = 0일 때 y = ' + (Number.isInteger(y0) ? num(y0) : (s < 0 ? '−' : '') + '√' + a * (0 - p) + tail(c)) + '. ' : 'x = 0은 정의역에 없으므로 y축과 만나지 않습니다. ') +
          (xint !== null ? 'x절편: y = 0일 때 x = ' + fr(p * a + c * c, a) + '.' : 'y = 0이 되는 점이 없으므로 x축과 만나지 않습니다(시작점 제외).') +
          '\n따라서 그래프가 지나는 사분면은 ' + fmtQ(ansA) + '입니다.'
      };
    }
  });

  // N31. 유리함수의 역함수 값
  add({
    type: T_INV, level: 1,
    gen() {
      const a = pick([1, 2, 3, -1, -2]), c = R(-4, 4);
      let x0, k; do { x0 = R(-4, 4); k = R(-5, 5); } while (x0 === -c || k === a);
      const b = k * (x0 + c) - a * x0;
      const fk = k + c !== 0 ? (a * k + b) / (k + c) : NaN;
      const ch = numCh(x0, [Number.isInteger(fk) ? fk : x0 - 2, -x0, k, -c, a].filter((x) => x !== x0));
      return {
        stem: '함수 f(x) = (' + lin(a, b) + ')/' + den(-c) + '에 대하여 f⁻¹(' + num(k) + ')의 값은?',
        choices: ch.choices, ans: ch.ans, shuffle: false,
        explain: 'f⁻¹(' + num(k) + ') = t라 하면 f(t) = ' + num(k) + '.\n(' + lin(a, b, 't') + ')/' + den(-c, 't') + ' = ' + num(k) + ' → ' + lin(a, b, 't') + ' = ' + num(k) + '(' + lin(1, c, 't') + ') → ' + P(a - k) + 't = ' + num(k * c - b) + ' → t = ' + num(x0) + '.\n따라서 f⁻¹(' + num(k) + ') = ' + num(x0) + '.'
      };
    }
  });

  /* ======================= 고정 문항 ======================= */

  // --- 명제와 조건·부정 ---
  add({
    type: T_PROP, level: 1,
    stem: '다음 중 거짓인 명제는?',
    choices: ['2는 소수이다.', '모든 실수 x에 대하여 x² + 1 > 0이다.', '어떤 자연수 n에 대하여 n² = n이다.', '모든 소수는 홀수이다.', '√2 + (−√2)는 유리수이다.'], ans: 4,
    explain: '2는 짝수인 소수이므로 \'모든 소수는 홀수이다\'는 거짓입니다(반례 2).\n② x² ≥ 0이므로 x² + 1 > 0은 항상 참. ③ n = 1이면 1² = 1이므로 참. ⑤ √2 + (−√2) = 0은 유리수이므로 참.'
  });
  add({
    type: T_PROP, level: 1,
    fig: U.venn(['A_', '_B', '__']),
    stem: '전체집합 U에서 두 조건 p, q의 진리집합을 각각 A, B라 할 때, 그림의 색칠한 부분을 진리집합으로 하는 조건은?',
    choices: ['p 이고 ~q', '~p 이고 ~q', '~p 또는 ~q', 'p 또는 q', '~p 또는 q'], ans: 3,
    explain: '색칠한 부분은 A ∩ B를 뺀 나머지 전체, 즉 (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ입니다.\nAᶜ는 ~p, Bᶜ는 ~q의 진리집합이므로 조건은 \'~p 또는 ~q\' (= \'p 이고 q\'의 부정).\n① A − B, ② (A ∪ B)ᶜ, ④ A ∪ B, ⑤ Aᶜ ∪ B 입니다.'
  });
  add({
    type: T_PROP, level: 2,
    stem: '명제 \'어떤 학생은 모든 과목에서 A를 받았다.\'의 부정은?',
    choices: ['어떤 학생은 모든 과목에서 A를 받지 못했다.', '모든 학생은 어느 과목에서도 A를 받지 못했다.', '모든 학생은 어떤 과목에서 A를 받지 못했다.', '어떤 학생은 어떤 과목에서 A를 받지 못했다.', '모든 학생은 모든 과목에서 A를 받았다.'], ans: 3,
    explain: '\'어떤\' ↔ \'모든\'을 모두 바꾸고 마지막 서술어를 부정합니다.\n어떤 학생 → 모든 학생, 모든 과목 → 어떤 과목, 받았다 → 받지 못했다.\n따라서 \'모든 학생은 어떤 과목에서 A를 받지 못했다.\' (모든 학생이 적어도 한 과목은 A가 아니라는 뜻)\n②는 부정보다 훨씬 강한 말입니다.'
  });
  add({
    type: T_PROP, level: 1,
    stem: '실수 a, b에 대한 조건 \'a, b 중 적어도 하나는 양수이다.\'의 부정은?',
    choices: ['a ≤ 0 이고 b ≤ 0', 'a < 0 이고 b < 0', 'a ≤ 0 또는 b ≤ 0', 'a, b 중 적어도 하나는 음수이다.', 'a, b는 모두 양수이다.'], ans: 1,
    explain: '\'적어도 하나는 양수\'는 \'a > 0 또는 b > 0\'입니다.\n부정: \'a ≤ 0 이고 b ≤ 0\' (\'또는\' ↔ \'이고\', \'>\' ↔ \'≤\').\n②는 0인 경우를 빠뜨렸고, ③은 \'또는\'을 바꾸지 않았습니다.'
  });
  add({
    type: T_PROP, level: 1,
    stem: '전체집합 U에서 두 조건 p, q의 진리집합을 각각 P, Q라 할 때, 명제 \'p이면 q이다.\'가 거짓임을 보이는 반례가 속하는 집합은?',
    choices: ['P ∩ Q', 'P ∩ Qᶜ', 'Pᶜ ∩ Q', 'Pᶜ ∩ Qᶜ', 'P ∪ Q'], ans: 2,
    explain: '반례는 가정 p는 만족하지만 결론 q는 만족하지 않는 원소이므로 P에 속하고 Q에 속하지 않습니다 → P ∩ Qᶜ (= P − Q).\nP ∩ Qᶜ = ∅이면 P ⊂ Q가 되어 명제는 참입니다.'
  });

  // --- 역·대우와 삼단논법 ---
  add({
    type: T_CONT, level: 1,
    stem: '명제 \'x > 1이면 x² > 1이다.\'에 대한 설명으로 옳은 것만을 〈보기〉에서 있는 대로 고른 것은? (단, x는 실수이다.)',
    bogi: {
      items: ['역 \'x² > 1이면 x > 1이다.\'는 참이다.', '대우 \'x² ≤ 1이면 x ≤ 1이다.\'는 참이다.', '이 \'x ≤ 1이면 x² ≤ 1이다.\'는 참이다.'],
      truth: [false, true, false],
      why: ['x = −2이면 x² = 4 > 1이지만 x > 1이 아닙니다(반례).', '원래 명제가 참이므로 대우도 참입니다. (실제로 x² ≤ 1 ⇔ −1 ≤ x ≤ 1)', '이는 역의 대우이므로 역과 참·거짓이 같습니다. x = −2가 반례.']
    }
  });
  add({
    type: T_CONT, level: 2,
    stem: '어느 학교 학생들에 대하여 다음 두 명제가 참이다.\n· 수학을 좋아하는 학생은 과학을 좋아한다.\n· 운동을 좋아하지 않는 학생은 과학을 좋아하지 않는다.\n이때 항상 참인 명제만을 〈보기〉에서 있는 대로 고른 것은?',
    bogi: {
      items: ['수학을 좋아하는 학생은 운동을 좋아한다.', '운동을 좋아하지 않는 학생은 수학을 좋아하지 않는다.', '과학을 좋아하는 학생은 수학을 좋아한다.', '운동을 좋아하는 학생은 과학을 좋아한다.'],
      truth: [true, true, false, false],
      why: ['p: 수학, q: 과학, r: 운동이라 하면 p → q, ~r → ~q (대우 q → r). 삼단논법으로 p → r.', 'p → r의 대우 ~r → ~p.', 'p → q의 역이므로 반드시 참이라고 할 수 없습니다.', 'q → r의 역이므로 반드시 참이라고 할 수 없습니다.']
    }
  });
  add({
    type: T_CONT, level: 2,
    stem: '전체집합 U에서 세 조건 p, q, r의 진리집합을 각각 P, Q, R이라 하자. P ∩ Q = P, Q ∩ R = ∅일 때, 항상 참인 명제만을 〈보기〉에서 있는 대로 고른 것은?',
    bogi: {
      items: ['p → ~r', 'r → ~q', '~r → q', '~q → ~p'],
      truth: [true, true, false, true],
      why: ['P ∩ Q = P이면 P ⊂ Q, Q ∩ R = ∅이면 Q ⊂ Rᶜ. 따라서 P ⊂ Rᶜ.', 'Q ∩ R = ∅이면 R ⊂ Qᶜ.', 'Rᶜ ⊂ Q는 보장되지 않습니다(Rᶜ에는 Q 밖의 원소가 있을 수 있음).', 'p → q (P ⊂ Q)의 대우입니다.']
    }
  });

  // --- 필요조건·충분조건 ---
  add({
    type: T_NS, level: 2,
    stem: '다음 중 p가 q이기 위한 필요조건이지만 충분조건이 아닌 것은? (단, x, y는 실수이다.)',
    choices: ['p: x = 1, q: x² = 1', 'p: xy = 0, q: x = 0', 'p: x > 2, q: x > 1', 'p: |x| = |y|, q: x² = y²', 'p: x > 0 이고 y > 0, q: xy > 0'], ans: 2,
    explain: '필요조건이지만 충분조건이 아니다 ⇔ q ⇒ p 이고 p ⇏ q.\n② x = 0이면 xy = 0 (q ⇒ p), xy = 0이어도 x = 1, y = 0처럼 x ≠ 0일 수 있음 (p ⇏ q). ✔\n① ③ ⑤는 p ⇒ q (충분조건), ④는 p ⇔ q (필요충분조건)입니다.'
  });
  add({
    type: T_NS, level: 3,
    stem: '실수 x, y에 대한 두 조건 p, q에 대하여 옳은 것만을 〈보기〉에서 있는 대로 고른 것은?',
    bogi: {
      items: ['p: x > 0 이고 y > 0, q: x + y > 0 이고 xy > 0 → p는 q이기 위한 필요충분조건이다.', 'p: x² + y² = 0, q: |x| + |y| = 0 → p는 q이기 위한 필요충분조건이다.', 'p: x > y, q: x² > y² → p는 q이기 위한 충분조건이다.', 'p: xy > 0, q: |x + y| = |x| + |y| → p는 q이기 위한 충분조건이다.'],
      truth: [true, true, false, true],
      why: ['xy > 0이면 x, y의 부호가 같고, x + y > 0이므로 둘 다 양수. 역도 성립.', '두 조건 모두 x = y = 0과 같습니다.', 'x = 1, y = −2이면 x > y이지만 x² < y² (반례).', 'xy > 0이면 부호가 같아 |x + y| = |x| + |y|. (역은 xy = 0일 때도 성립하므로 충분조건이지만 필요조건은 아님)']
    }
  });
  add({
    type: T_NS, level: 2,
    stem: '실수 x에 대한 세 조건 p: −1 ≤ x ≤ 3, q: x ≤ a, r: x ≥ b에 대하여 p는 q이기 위한 충분조건이고, r은 p이기 위한 필요조건이다. 실수 a의 최솟값을 M, 실수 b의 최댓값을 m이라 할 때, M − m의 값은?',
    choices: ['2', '3', '4', '5', '6'], ans: 3, shuffle: false,
    explain: 'p는 q이기 위한 충분조건 → p ⇒ q → P ⊂ Q → a ≥ 3, M = 3.\nr은 p이기 위한 필요조건 → p ⇒ r → P ⊂ R → b ≤ −1, m = −1.\nM − m = 3 − (−1) = 4.'
  });

  // --- 명제의 증명(귀류법·절대부등식) ---
  add({
    type: T_PROOF, level: 2,
    passage: '[증명] 유리수 a, b에 대하여 \'a + b√2 = 0이면 a = b = 0이다.\'를 증명하자.\n(가)라고 가정하면 √2 = −a/b 이다.\n이때 a, b가 유리수이므로 −a/b는 (나)이고, 이는 √2가 무리수라는 사실에 모순이다.\n따라서 b = 0이고, 이를 a + b√2 = 0에 대입하면 a = 0이다.',
    stem: '위의 증명에서 (가), (나)에 알맞은 것을 차례로 나열한 것은?',
    choices: ['b ≠ 0, 유리수', 'b = 0, 유리수', 'b ≠ 0, 무리수', 'a ≠ 0, 무리수', 'a = 0, 정수'], ans: 1,
    explain: '귀류법: 보이고 싶은 b = 0을 부정하여 (가) b ≠ 0이라 가정합니다(그래야 b로 나눌 수 있음).\n유리수끼리의 나눗셈 결과는 (나) 유리수이므로 √2가 유리수가 되어 모순.'
  });
  add({
    type: T_PROOF, level: 2,
    passage: '[증명] 자연수 m, n에 대하여 명제 \'mn이 짝수이면 m 또는 n이 짝수이다.\'의 대우 \'(가)이면 mn은 홀수이다.\'를 증명하자.\nm = 2a − 1, n = 2b − 1 (a, b는 자연수)이라 하면\nmn = (2a − 1)(2b − 1) = 2( (나) ) + 1\n이므로 mn은 홀수이다. 대우가 참이므로 주어진 명제도 참이다.',
    stem: '위의 증명에서 (가), (나)에 알맞은 것을 차례로 나열한 것은?',
    choices: ['m과 n이 모두 홀수, 2ab − a − b', 'm 또는 n이 홀수, 2ab − a − b', 'm과 n이 모두 홀수, 2ab + a + b', 'm과 n이 모두 짝수, 2ab − a − b', 'm과 n이 모두 홀수, 4ab − 2a − 2b'], ans: 1,
    explain: '\'m 또는 n이 짝수\'의 부정은 \'m과 n이 모두 홀수\' → (가).\n(2a − 1)(2b − 1) = 4ab − 2a − 2b + 1 = 2(2ab − a − b) + 1 → (나) 2ab − a − b.\n⑤의 4ab − 2a − 2b는 2를 묶지 않은 식입니다.'
  });
  add({
    type: T_PROOF, level: 2,
    passage: '[증명] a > 0, b > 0일 때, √(ab) ≥ 2ab/(a + b) 임을 증명하자.\n√(ab) − 2ab/(a + b) = √(ab){(a + b) − 2√(ab)}/(a + b) = √(ab) × ( (가) )/(a + b) ≥ 0\n따라서 √(ab) ≥ 2ab/(a + b)이고, 등호는 (나)일 때 성립한다.',
    stem: '위의 증명에서 (가), (나)에 알맞은 것을 차례로 나열한 것은?',
    choices: ['(√a − √b)², a = b', '(√a + √b)², a = b', '(a − b)², a = b', '(√a − √b)², a = b = 1', '(√a − √b)², ab = 1'], ans: 1,
    explain: 'a + b − 2√(ab) = (√a)² − 2√a√b + (√b)² = (√a − √b)² → (가).\n√(ab) > 0, a + b > 0이므로 전체는 0 이상이고, 등호는 √a = √b, 즉 (나) a = b일 때 성립합니다.\n(참고) 이 결과와 산술·기하평균 관계를 합치면 (a + b)/2 ≥ √(ab) ≥ 2ab/(a + b).'
  });
  add({
    type: T_PROOF, level: 1,
    stem: '명제의 증명에 대한 설명으로 옳은 것만을 〈보기〉에서 있는 대로 고른 것은?',
    bogi: {
      items: ['귀류법은 결론을 부정하여 모순이 생김을 보이는 증명 방법이다.', '어떤 명제가 참이면 그 역도 항상 참이다.', '명제 p → q를 증명하는 대신 ~q → ~p를 증명해도 된다.', '절대부등식은 특정한 실수에 대해서만 성립하는 부등식이다.'],
      truth: [true, false, true, false],
      why: ['귀류법의 정의입니다.', '역은 참·거짓이 원래 명제와 다를 수 있습니다(예: x = 1 → x² = 1은 참, 역은 거짓).', '명제와 그 대우는 참·거짓이 같습니다.', '절대부등식은 문자에 어떤 실수를 대입해도 항상 성립하는 부등식입니다.']
    }
  });
  add({
    type: T_PROOF, level: 3,
    stem: '실수 a, b에 대하여 항상 성립하는 부등식만을 〈보기〉에서 있는 대로 고른 것은? (단, ㄷ에서 a ≠ 0이다.)',
    bogi: {
      items: ['a² + b² ≥ 2ab', '|a + b| ≤ |a| + |b|', 'a + 1/a ≥ 2', 'a² + b² + 1 ≥ ab + a + b'],
      truth: [true, true, false, true],
      why: ['a² + b² − 2ab = (a − b)² ≥ 0.', '(|a| + |b|)² − |a + b|² = 2(|ab| − ab) ≥ 0이고 양변이 0 이상이므로 성립.', 'a = −1이면 −2 < 2. (a > 0일 때만 성립)', '2(a² + b² + 1 − ab − a − b) = (a − b)² + (a − 1)² + (b − 1)² ≥ 0. 등호는 a = b = 1.']
    }
  });

  // --- 산술평균과 기하평균 ---
  add({
    type: T_AMGM, level: 3,
    passage: '[학생의 풀이] x > 0일 때, (x + 1/x)(x + 4/x)의 최솟값을 구하자.\nx + 1/x ≥ 2√(x × 1/x) = 2 … ①\nx + 4/x ≥ 2√(x × 4/x) = 4 … ②\n따라서 (x + 1/x)(x + 4/x) ≥ 2 × 4 = 8이므로 최솟값은 8이다.',
    stem: '위 풀이에는 잘못된 점이 있다. 바르게 구한 (x + 1/x)(x + 4/x)의 최솟값은?',
    choices: ['6', '7', '8', '9', '10'], ans: 4, shuffle: false,
    explain: '①의 등호는 x = 1, ②의 등호는 x = 2일 때 성립하므로 두 등호가 동시에 성립하지 않아 8은 될 수 없습니다.\n바른 풀이: 전개하면 x² + 4 + 1 + 4/x² = x² + 4/x² + 5.\nx² + 4/x² ≥ 2√4 = 4 (등호는 x² = 2, 즉 x = √2일 때) → 최솟값 9.'
  });
  add({
    type: T_AMGM, level: 2,
    stem: '대각선의 길이가 10인 직사각형의 넓이의 최댓값은?',
    choices: ['25', '40', '48', '50', '100'], ans: 4, shuffle: false,
    explain: '가로, 세로를 x, y라 하면 x² + y² = 100.\nx², y² > 0이므로 x² + y² ≥ 2√(x²y²) = 2xy → 100 ≥ 2xy → xy ≤ 50.\n등호는 x = y = 5√2 (정사각형)일 때. 최댓값 50.'
  });
  add({
    type: T_AMGM, level: 1,
    stem: '양수 a, b에 대하여 ab = 16일 때, a + 4b의 최솟값과 그때의 a의 값을 차례로 나열한 것은?',
    choices: ['8, 4', '16, 8', '16, 2', '16, 4', '20, 8'], ans: 2,
    explain: 'a + 4b ≥ 2√(4ab) = 2√64 = 16.\n등호는 a = 4b일 때: 4b × b = 16 → b = 2, a = 8.\n따라서 최솟값 16, 그때 a = 8.'
  });
  add({
    type: T_AMGM, level: 2,
    fig: plot({ xr: [-0.8, 9.5], yr: [-0.8, 9.5], fns: [{ f: (x) => 9 / x, a: 0.9, b: 9.5 }], lines: [[3, 0, 3, 3, 1], [0, 3, 3, 3, 1]], dots: [[3, 3]], labels: [[3.2, 3.5, 'P'], [3.1, -0.7, 'Q'], [-0.7, 3.2, 'R'], [6.2, 2.1, 'y = 9/x']] }),
    stem: '그림과 같이 곡선 y = 9/x (x > 0) 위의 점 P에서 x축, y축에 내린 수선의 발을 각각 Q, R라 하자. 원점 O에 대하여 사각형 OQPR의 둘레의 길이의 최솟값은?',
    choices: ['6', '9', '12', '18', '36'], ans: 3, shuffle: false,
    explain: 'P(a, 9/a) (a > 0)라 하면 OQ = a, OR = 9/a.\n둘레 = 2(a + 9/a) ≥ 2 × 2√9 = 12.\n등호는 a = 9/a, 즉 a = 3일 때 (P(3, 3)). 최솟값 12.\n(넓이는 항상 9로 일정하다는 점도 함께 기억하세요.)'
  });

  // --- 함수의 뜻·일대일대응 ---
  add({
    type: T_FUNC, level: 1,
    stem: '두 집합 X = {1, 2, 3}, Y = {a, b, c}에 대하여 다음 대응 중 X에서 Y로의 함수인 것은?',
    choices: ['1 → a, 2 → a, 3 → a', '1 → a, 1 → b, 2 → c, 3 → c', '1 → a, 2 → b', '1 → b, 2 → c, 3 → d', '1 → a, 2 → b, 3 → b, 3 → c'], ans: 1,
    explain: '함수: X의 각 원소에 Y의 원소가 오직 하나씩 대응.\n① 모든 원소가 a 하나에 대응 → 함수(상수함수).\n②⑤ 한 원소에 두 개가 대응, ③ 3에 대응하는 원소가 없음, ④ d는 Y의 원소가 아님.'
  });
  add({
    type: T_FUNC, level: 2,
    stem: '실수 전체의 집합에서 실수 전체의 집합으로의 함수 중 일대일대응인 것만을 〈보기〉에서 있는 대로 고른 것은?',
    bogi: {
      items: ['y = 2x − 1', 'y = x²', 'y = |x − 1|', 'y = x|x|'],
      truth: [true, false, false, true],
      why: ['기울기가 0이 아닌 일차함수는 일대일대응입니다.', 'x = 1, −1에서 함숫값이 같고, 치역이 {y | y ≥ 0}입니다.', 'x = 0, 2에서 함숫값이 1로 같습니다.', 'x ≥ 0이면 x², x < 0이면 −x²으로 실수 전체에서 증가하고 치역도 실수 전체입니다.']
    }
  });
  add({
    type: T_FUNC, level: 1,
    stem: '정의역이 X = {−1, 0, 1}인 두 함수 f, g에 대하여 f = g인 것만을 〈보기〉에서 있는 대로 고른 것은?',
    bogi: {
      items: ['f(x) = x, g(x) = x³', 'f(x) = x², g(x) = |x|', 'f(x) = |x|, g(x) = x'],
      truth: [true, true, false],
      why: ['x = −1, 0, 1에서 함숫값이 −1, 0, 1로 같습니다.', '두 함수 모두 함숫값이 1, 0, 1입니다.', 'x = −1에서 f(−1) = 1, g(−1) = −1로 다릅니다.']
    }
  });
  add({
    type: T_FUNC, level: 2,
    stem: '집합 X = {1, 2, 3, 4}에 대하여 X에서 X로의 일대일대응 f 중 f(1) + f(2) = 5를 만족시키는 함수 f의 개수는?',
    choices: ['2', '4', '6', '8', '10'], ans: 4, shuffle: false,
    explain: 'f(1) + f(2) = 5인 순서쌍 (f(1), f(2)): (1, 4), (4, 1), (2, 3), (3, 2) → 4가지.\n남은 두 값을 f(3), f(4)에 대응시키는 방법 2가지.\n4 × 2 = 8.'
  });

  // --- 합성함수 ---
  add({
    type: T_COMP, level: 1,
    passage: '| x | 1 | 2 | 3 | 4 |\n| f(x) | 3 | 4 | 2 | 1 |\n| g(x) | 2 | 1 | 4 | 3 |',
    stem: '집합 X = {1, 2, 3, 4}에서 X로의 두 함수 f, g가 위의 표와 같을 때, (f∘g)(2) + (g∘f)⁻¹(1)의 값은?',
    choices: ['2', '3', '4', '5', '6'], ans: 5, shuffle: false,
    explain: '(f∘g)(2) = f(g(2)) = f(1) = 3.\n(g∘f)⁻¹(1) = t라 하면 g(f(t)) = 1. g(2) = 1이므로 f(t) = 2 → t = 3.\n합: 3 + 3 = 6.'
  });
  add({
    type: T_COMP, level: 3,
    fig: plot({ xr: [-0.6, 4.7], yr: [-0.6, 4.7], fns: [{ f: (x) => (x <= 2 ? 2 * x : 8 - 2 * x), a: 0, b: 4 }], lines: [[0, 2, 4.4, 2, 1]], guides: [[2, 4]], ticks: { x: [[1, '1'], [2, '2'], [3, '3'], [4, '4']], y: [[2, '2'], [4, '4']] }, labels: [[2.9, 3.4, 'y = f(x)']] }),
    stem: '0 ≤ x ≤ 4에서 정의된 함수 y = f(x)의 그래프가 그림과 같이 세 점 (0, 0), (2, 4), (4, 0)을 이은 꺾은선일 때, 방정식 (f∘f)(x) = 2의 서로 다른 실근의 개수는?',
    choices: ['2', '3', '4', '6', '8'], ans: 3, shuffle: false,
    explain: 'f(x) = t로 놓으면 f(t) = 2 → 그래프에서 t = 1 또는 t = 3.\n(i) f(x) = 1: 직선 y = 1과 두 점에서 만남 (x = 1/2, 7/2).\n(ii) f(x) = 3: 직선 y = 3과 두 점에서 만남 (x = 3/2, 5/2).\n따라서 실근은 모두 4개.'
  });
  add({
    type: T_COMP, level: 1,
    stem: '두 함수 f(x) = x + 1, g(x) = x²에 대하여 (f∘g)(x) − (g∘f)(x)를 간단히 하면?',
    choices: ['−2x', '2x', '0', '−2x − 2', '2x + 2'], ans: 1,
    explain: '(f∘g)(x) = f(x²) = x² + 1, (g∘f)(x) = g(x + 1) = (x + 1)² = x² + 2x + 1.\n차: (x² + 1) − (x² + 2x + 1) = −2x.\n(합성의 순서를 바꾸면 결과가 달라집니다: 교환법칙 불성립)'
  });
  add({
    type: T_COMP, level: 3,
    stem: '함수에 대한 설명으로 옳은 것만을 〈보기〉에서 있는 대로 고른 것은? (단, 합성이 가능하다.)',
    bogi: {
      items: ['f(x) = −x + 3이면 f∘f는 항등함수이다.', 'f, g가 모두 일대일대응이면 f∘g도 일대일대응이다.', 'f∘g = f∘h이면 항상 g = h이다.', 'f∘f = f를 만족시키는 함수 f는 항등함수뿐이다.'],
      truth: [true, true, false, false],
      why: ['f(f(x)) = −(−x + 3) + 3 = x.', '일대일대응끼리 합성하면 일대일대응이고, (f∘g)⁻¹ = g⁻¹∘f⁻¹가 존재합니다.', 'f가 상수함수이면 g ≠ h라도 f∘g = f∘h입니다.', '상수함수 f(x) = c도 f(f(x)) = c = f(x)를 만족합니다.']
    }
  });

  // --- 역함수 ---
  add({
    type: T_INV, level: 2,
    stem: '함수 f(x) = (1/4)x² (x ≥ 0)의 그래프와 그 역함수 y = f⁻¹(x)의 그래프가 만나는 두 점 사이의 거리는?',
    choices: ['2√2', '4', '4√2', '8', '8√2'], ans: 3, shuffle: false,
    explain: 'x ≥ 0에서 f는 증가함수이므로 y = f(x)와 y = f⁻¹(x)의 교점은 y = x 위에 있습니다.\n(1/4)x² = x → x(x − 4) = 0 → x = 0, 4. 교점 (0, 0), (4, 4).\n거리 √(4² + 4²) = 4√2.'
  });
  add({
    type: T_INV, level: 1,
    stem: '일차함수 f에 대하여 f(2x − 1) = 4x + 3일 때, f⁻¹(5)의 값은?',
    choices: ['−1', '0', '1/2', '1', '2'], ans: 2, shuffle: false,
    explain: 'f⁻¹(5) = t ⇔ f(t) = 5.\n4x + 3 = 5 → x = 1/2이고 이때 2x − 1 = 0이므로 f(0) = 5.\n따라서 f⁻¹(5) = 0. (③ 1/2은 x의 값일 뿐 f⁻¹(5)가 아닙니다.)'
  });
  add({
    type: T_INV, level: 3,
    stem: '실수 전체의 집합에서 정의된 함수 f(x) = { x² + 2x + a (x ≥ 0), bx + 3 (x < 0) }의 역함수가 존재하기 위한 조건은?',
    choices: ['a = 3, b > 0', 'a = 3, b < 0', 'a = 3, b ≥ 0', 'a ≥ 3, b > 0', 'a = −3, b > 0'], ans: 1,
    explain: '역함수가 존재하려면 f가 실수 전체에서 실수 전체로의 일대일대응이어야 합니다.\nx ≥ 0에서 x² + 2x + a = (x + 1)² + a − 1은 증가하고 치역은 {y | y ≥ a}.\n따라서 x < 0에서도 증가해야 하므로 b > 0이고, 이때 치역은 {y | y < 3}.\n두 치역이 겹치지도 비지도 않아야 하므로 a = 3.\n(b < 0이면 x < 0에서 치역이 {y | y > 3}이 되어 겹침, b = 0이면 상수)'
  });

  // --- 유리함수 ---
  add({
    type: T_RAT, level: 1,
    fig: plot({ xr: [-3, 7], yr: [-5, 5], asym: { x: 2, y: -1 }, fns: [{ f: (x) => 2 / (x - 2) - 1, a: -3, b: 1.85 }, { f: (x) => 2 / (x - 2) - 1, a: 2.15, b: 7 }], dots: [[3, 1]], ticks: { x: [[2, '2'], [3, '3']], y: [[-1, '−1'], [1, '1']] } }),
    stem: '함수 y = (ax + b)/(x + c)의 그래프가 그림과 같이 두 직선 x = 2, y = −1을 점근선으로 하고 점 (3, 1)을 지날 때, 상수 a, b, c에 대하여 abc의 값은?',
    choices: ['−8', '−4', '4', '6', '8'], ans: 5, shuffle: false,
    explain: '점근선이 x = 2, y = −1이므로 y = k/(x − 2) − 1.\n점 (3, 1)을 대입: 1 = k − 1 → k = 2.\ny = 2/(x − 2) − 1 = (−x + 4)/(x − 2) → a = −1, b = 4, c = −2.\nabc = (−1) × 4 × (−2) = 8.'
  });
  add({
    type: T_RAT, level: 2,
    stem: '함수 y = (2x + 1)/(x − 1)의 그래프에 대한 설명으로 옳은 것만을 〈보기〉에서 있는 대로 고른 것은?',
    bogi: {
      items: ['점 (1, 2)에 대하여 대칭이다.', '제3사분면을 지난다.', '정의역이 {x | x ≥ 2}일 때 최솟값은 2이다.', '직선 y = x + 1에 대하여 대칭이다.'],
      truth: [true, true, false, true],
      why: ['y = 3/(x − 1) + 2이므로 점근선의 교점 (1, 2)에 대하여 대칭.', 'x절편 −1/2, y절편 −1이므로 −1/2 < x < 0에서 y < 0 → 제3사분면을 지남.', 'x ≥ 2에서 감소하며 2에 한없이 가까워지지만 2가 되지 않으므로 최솟값은 없습니다(최댓값 5).', '(1, 2)를 지나고 기울기가 1인 직선 y = x + 1에 대하여 대칭.']
    }
  });
  add({
    type: T_RAT, level: 1,
    stem: '함수 y = (3x − 1)/(x + 2)의 그래프의 점근선의 방정식은?',
    choices: ['x = −2, y = 3', 'x = 2, y = 3', 'x = −2, y = −1/2', 'x = 3, y = −2', 'x = −2, y = 1/3'], ans: 1,
    explain: '(3x − 1)/(x + 2) = {3(x + 2) − 7}/(x + 2) = −7/(x + 2) + 3.\n점근선: x = −2, y = 3. (y = (ax + b)/(cx + d)의 가로 점근선은 y = a/c)'
  });
  add({
    type: T_RAT, level: 3,
    stem: '함수 y = 2/(x − 1) + 1의 그래프와 직선 y = m(x − 1) + 1이 만나지 않도록 하는 실수 m의 값의 범위는?',
    choices: ['m < 0', 'm ≤ 0', 'm > 0', 'm ≥ 0', 'm ≤ 1'], ans: 2, shuffle: false,
    explain: '직선 y = m(x − 1) + 1은 m에 관계없이 점근선의 교점 (1, 1)을 지납니다.\n2/(x − 1) + 1 = m(x − 1) + 1 → 2 = m(x − 1)² 이므로 m > 0일 때만 해가 있습니다.\nm = 0이면 직선 y = 1은 점근선이므로 만나지 않습니다. 따라서 m ≤ 0.\n(그래프가 제1·3사분면 방향(점근선 기준)에 있으므로 기울기가 양수인 직선만 만납니다.)'
  });

  // --- 무리함수 ---
  add({
    type: T_IRR, level: 1,
    stem: '함수 y = √(6 − 2x) + 1의 정의역과 치역을 차례로 나열한 것은?',
    choices: ['{x | x ≤ 3}, {y | y ≥ 1}', '{x | x ≥ 3}, {y | y ≥ 1}', '{x | x ≤ 3}, {y | y ≤ 1}', '{x | x ≤ 6}, {y | y ≥ 1}', '{x | x ≥ −3}, {y | y ≥ 1}'], ans: 1,
    explain: '근호 안이 0 이상: 6 − 2x ≥ 0 → x ≤ 3.\n√(6 − 2x) ≥ 0이므로 y ≥ 1.\n(y = √(−2(x − 3)) + 1: 시작점 (3, 1)에서 왼쪽 위로 뻗는 그래프)'
  });
  add({
    type: T_IRR, level: 2,
    fig: plot({ xr: [-3, 5], yr: [-3, 3], fns: [{ f: (x) => -Math.sqrt(x + 2) + 1, a: -2, b: 5 }], dots: [[-2, 1], [2, -1]], guides: [[2, -1]], ticks: { x: [[-2, '−2'], [2, '2']], y: [[1, '1'], [-1, '−1']] } }),
    stem: '그림은 점 (−2, 1)에서 시작하여 점 (2, −1)을 지나는 무리함수의 그래프이다. 이 그래프를 나타내는 함수의 식은?',
    choices: ['y = −√(x + 2) + 1', 'y = −√(2x + 4) + 1', 'y = −√(x − 2) + 1', 'y = √(x + 2) − 1', 'y = −√(x + 2) − 1'], ans: 1,
    explain: '시작점 (−2, 1), 오른쪽 아래로 뻗으므로 y = −√(a(x + 2)) + 1 (a > 0).\n(2, −1) 대입: −1 = −√(4a) + 1 → √(4a) = 2 → a = 1.\n따라서 y = −√(x + 2) + 1.\n② y = −√(2x + 4) + 1은 x = 2일 때 1 − 2√2이므로 점 (2, −1)을 지나지 않습니다.'
  });
  add({
    type: T_IRR, level: 2,
    stem: '함수 y = √(4 − 2x) − 1에 대한 설명으로 옳은 것만을 〈보기〉에서 있는 대로 고른 것은?',
    bogi: {
      items: ['정의역은 {x | x ≤ 2}이다.', '그래프는 제3사분면을 지나지 않는다.', '그래프는 y = √(−2x)의 그래프를 평행이동한 것이다.', '역함수는 y = −(1/2)(x + 1)² + 2 (x ≤ −1)이다.'],
      truth: [true, true, true, false],
      why: ['4 − 2x ≥ 0 → x ≤ 2.', 'x < 0이면 4 − 2x > 4이므로 y > 2 − 1 = 1 > 0. 제3사분면을 지나지 않습니다.', 'y = √(−2(x − 2)) − 1이므로 x축으로 2, y축으로 −1만큼 평행이동.', '역함수의 정의역은 원래 함수의 치역 {y | y ≥ −1}이므로 x ≥ −1이어야 합니다.']
    }
  });
  add({
    type: T_IRR, level: 3,
    stem: '함수 f(x) = √(x − k)의 그래프와 그 역함수 y = f⁻¹(x)의 그래프가 서로 다른 두 점에서 만나도록 하는 실수 k의 값의 범위는?',
    choices: ['0 ≤ k < 1/4', '0 < k < 1/4', 'k < 1/4', '0 ≤ k ≤ 1/4', 'k ≥ 1/4'], ans: 1, shuffle: false,
    explain: 'f는 증가함수이므로 두 그래프의 교점은 y = x 위에 있습니다. → √(x − k) = x (x ≥ 0).\n양변을 제곱: x² − x + k = 0이 0 이상인 서로 다른 두 실근을 가져야 합니다.\n① D = 1 − 4k > 0 → k < 1/4\n② 두 근의 곱 k ≥ 0 (두 근의 합 1 > 0)\n따라서 0 ≤ k < 1/4. (k = 0이면 교점 (0, 0), (1, 1)로 두 점)'
  });

  /* ======================= 서술형 ======================= */
  add({
    type: T_ESSAY, kind: 'essay', pts: 5,
    stem: '√2가 무리수임을 이용하여 1 + √2가 무리수임을 귀류법으로 증명하시오.',
    model: '1 + √2가 무리수가 아니라고, 즉 유리수라고 가정하자.\n1 + √2 = r (r은 유리수)라 하면 √2 = r − 1이다.\n유리수에서 유리수를 뺀 r − 1은 유리수이므로 √2가 유리수가 되어, √2가 무리수라는 사실에 모순이다.\n따라서 1 + √2는 무리수이다.',
    rubric: ['결론을 부정하여 1 + √2가 유리수라고 가정 (1점)', '√2 = r − 1로 변형하고 r − 1이 유리수임을 설명 (2점)', '모순을 지적하고 결론을 맺음 (2점)']
  });
  add({
    type: T_ESSAY, kind: 'essay', pts: 5,
    stem: '양수 a, b가 2a + b = 4를 만족시킬 때, 1/a + 2/b의 최솟값과 그때의 a, b의 값을 구하시오.',
    model: '(2a + b)(1/a + 2/b) = 2 + 4a/b + b/a + 2 = 4 + 4a/b + b/a.\n4a/b > 0, b/a > 0이므로 산술평균과 기하평균의 관계에 의해 4a/b + b/a ≥ 2√4 = 4.\n따라서 4(1/a + 2/b) ≥ 8, 즉 1/a + 2/b ≥ 2.\n등호는 4a/b = b/a, 즉 b = 2a일 때 성립하고, 2a + 2a = 4에서 a = 1, b = 2.\n최솟값 2 (a = 1, b = 2).',
    rubric: ['(2a + b)(1/a + 2/b)를 전개 (1점)', '산술·기하평균 관계를 바르게 적용 (2점)', '최솟값 2 (1점)', '등호 조건으로 a = 1, b = 2 (1점)']
  });
  add({
    type: T_ESSAY, kind: 'essay', pts: 5,
    stem: '함수 f(x) = (2x + 5)/(x + 1)에 대하여 그래프의 점근선의 방정식과 역함수 f⁻¹(x)를 구하고, f⁻¹(4)의 값을 구하시오.',
    model: 'f(x) = {2(x + 1) + 3}/(x + 1) = 3/(x + 1) + 2 이므로 점근선은 x = −1, y = 2.\ny = (2x + 5)/(x + 1)에서 y(x + 1) = 2x + 5 → (y − 2)x = 5 − y → x = (−y + 5)/(y − 2).\nx와 y를 바꾸면 f⁻¹(x) = (−x + 5)/(x − 2).\nf⁻¹(4) = (−4 + 5)/(4 − 2) = 1/2. (확인: f(1/2) = 6/(3/2) = 4)',
    rubric: ['점근선 x = −1, y = 2 (1점)', '역함수 f⁻¹(x) = (−x + 5)/(x − 2) (3점)', 'f⁻¹(4) = 1/2 (1점)']
  });
  add({
    type: T_ESSAY, kind: 'essay', pts: 6,
    stem: '함수 y = √(x + 4)의 그래프와 직선 y = x + k의 교점의 개수가 실수 k의 값에 따라 어떻게 달라지는지 구하시오.',
    model: '그래프는 점 (−4, 0)에서 시작하여 오른쪽 위로 뻗는다.\n① 직선이 (−4, 0)을 지날 때: 0 = −4 + k → k = 4.\n② 접할 때: x + 4 = (x + k)² → x² + (2k − 1)x + k² − 4 = 0, D = (2k − 1)² − 4(k² − 4) = −4k + 17 = 0 → k = 17/4.\n따라서 k > 17/4이면 0개, k = 17/4이면 1개(접점), 4 ≤ k < 17/4이면 2개, k < 4이면 1개.',
    rubric: ['시작점을 지날 때 k = 4 (1점)', '접할 때 판별식으로 k = 17/4 (2점)', '경우를 나누어 교점 개수를 바르게 정리 (3점)']
  });
  add({
    type: T_ESSAY, kind: 'essay', pts: 5,
    stem: '집합 X = {x | x ≥ 2}에 대하여 X에서 X로의 함수 f(x) = x² − 2x + a가 일대일대응일 때, 상수 a의 값과 f⁻¹(10)의 값을 구하시오.',
    model: 'f(x) = (x − 1)² + a − 1의 축은 x = 1이므로 x ≥ 2에서 f는 증가한다.\n치역은 {y | y ≥ f(2)} = {y | y ≥ a}이고, 일대일대응이려면 치역이 X와 같아야 하므로 a = 2.\nf(x) = x² − 2x + 2 = 10 → x² − 2x − 8 = 0 → (x − 4)(x + 2) = 0, x ≥ 2이므로 x = 4.\n따라서 a = 2, f⁻¹(10) = 4.',
    rubric: ['x ≥ 2에서 f가 증가함을 설명 (1점)', '치역 = 공역 조건으로 a = 2 (2점)', 'f(x) = 10을 풀어 정의역 조건으로 f⁻¹(10) = 4 (2점)']
  });

  window.addQ('math', L);
})();

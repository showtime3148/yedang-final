# 예당고 1학년 2학기 기말고사 대비

작년(2025) 2학기 기말 시험지 풀이 → 올해 기말 범위 예상문제 → 틀린 문제 분석(학습 진단·AI 학습 코치) 순서로 공부하는 정적 웹앱입니다.

## 구성
- `index.html`, `app.js`, `core.js`, `style.css` : 화면과 동작
- `data/<과목>.js`, `data/<과목>2.js` : 예상문제 은행 (국어 kor, 영어 eng, 수학 math, 통합사회 soc, 통합과학 sci, 한국사 his)
- `data/past.js`, `data/pastmap.js` : 작년 기말 시험지 이미지와 풀이로 정한 정답
- `config.js` : AI 분석 서버 주소 (기본 `/api/analyze`)
- `api/analyze.js` : AI 학습 코치 서버 함수 (Vercel)

## AI 학습 코치 설정 (Vercel)
학생 화면은 `/api/analyze`만 부르고, 외부 AI API 키는 서버에만 둡니다.

Vercel → 프로젝트 → Settings → Environment Variables 에 다음을 넣고 다시 배포하세요.

| 이름 | 값 | 예 |
|---|---|---|
| `AI_PROVIDER` | `openai`(OpenAI 호환 전부) / `anthropic` / `gemini` / `auto`(중계 서버 방식을 모를 때) | `auto` |
| `AI_API_KEY` | 쓰려는 서비스의 API 키 | |
| `AI_MODEL` | 모델 이름 | `gemini-2.5-flash`, `gpt-4o-mini` |
| `AI_BASE_URL` | (OpenAI 호환 서버일 때만) 주소 | `https://api.groq.com/openai/v1` |
| `ACCESS_CODE` | (권장) 학생이 입력할 접근 코드 | `yedang2026` |

`ACCESS_CODE`를 정하면 처음 AI 분석을 누를 때 학생이 코드를 한 번 입력합니다. 키가 외부로 새어 남용되는 것을 막아 줍니다.

다른 서버(예: 학교 자체 서버)를 쓰려면 `config.js`의 `endpoint`를 그 주소로 바꾸면 됩니다. 요청은 JSON(POST)이고, 응답은 `{ "text": "분석 결과" }` 형식이면 됩니다.

/* 공통영어 - 2학기 기말 예상 범위: (추정) 교과서 '한국 문화 속 호랑이'·'자연에서 찾은 환경 해법' + 외부 지문(모의고사·부교재형) */
(function () {
  const T_TOPIC = '주제·제목';
  const T_BLANK = '빈칸 추론';
  const T_GRAM = '어법';
  const T_VOCAB = '어휘(낱말의 쓰임)';
  const T_ORDER = '글의 순서';
  const T_INS = '문장 삽입';
  const T_SUM = '요약문 완성';
  const T_MEAN = '밑줄 의미 추론';
  const T_INFO = '내용 일치·불일치';
  const T_IRR = '무관한 문장';
  const T_ESSAY = '서술형';
  const P = ['①', '②', '③', '④', '⑤'];

  window.GUIDE.eng = {
    summary: '작년 기말은 객관식 25문항(80점) + 서술형 4문항(20점)이었습니다. 1~11번은 교과서 두 단원(한국 문화 속 호랑이, 자연에서 찾은 환경 해법), 12~25번은 모의고사·부교재형 외부 지문이었고, 외부 지문 쪽 배점이 3.2~3.6점으로 더 높았습니다. 요약문 완성·밑줄 의미·빈칸처럼 글 전체를 이해해야 하는 유형이 많았고, 서술형은 4문항 모두 〈보기〉 단어를 조건에 맞게 배열해 영작하는 문제였습니다.',
    types: [
      { name: T_TOPIC, tips: '첫 문장과 마지막 문장, 그리고 However·Therefore 뒤의 문장에서 글쓴이의 주장을 찾으세요. 보기가 너무 좁거나(예시 하나만 다룸) 너무 넓으면 오답입니다.', ex: '다음 글의 주제/제목으로 가장 적절한 것은?' },
      { name: T_BLANK, tips: '빈칸 앞뒤 문장이 바꿔 말하는(restate) 내용을 찾으세요. 빈칸이 글의 결론 자리라면 글 전체의 요지와 같은 방향의 보기를 고릅니다.', ex: 'cultural meaning of tigers ____' },
      { name: T_GRAM, tips: '자동사의 수동태(have been appeared), 분사의 능동·수동(making/made), 주어-동사 수 일치, 관계사 which/전치사+which, 대동사 do/are를 꼭 확인하세요.', ex: 'have been appeared' },
      { name: T_VOCAB, tips: '밑줄 낱말을 반대말로 바꿨을 때 문맥이 더 자연스러워지면 그것이 정답입니다. 앞뒤 문장의 원인·결과 관계를 따져 보세요.', ex: 'honorable characters / infinite' },
      { name: T_ORDER, tips: '(A)(B)(C) 첫머리의 연결어(However, This, These)와 지시어가 가리키는 대상을 찾아 앞 문단과 이어 보세요.', ex: '(C)-(A)-(B)' },
      { name: T_INS, tips: '주어진 문장에 있는 연결어·대명사가 무엇을 받는지 찾고, 글에서 흐름이 끊기는(논리가 갑자기 바뀌는) 곳을 찾으세요.', ex: 'Traditional foods that don\'t fit…' },
      { name: T_SUM, tips: '요약문의 (A)(B)를 지문의 핵심어와 짝지어 보세요. 지문의 단어를 그대로 쓰기보다 같은 뜻의 다른 말(paraphrase)이 정답인 경우가 많습니다.', ex: 'diminished / recovered' },
      { name: T_MEAN, tips: '밑줄 친 표현은 비유적입니다. 글 전체의 주제를 한 문장으로 정리한 뒤 그와 같은 뜻의 보기를 고르세요.', ex: 'trick-punishments' },
      { name: T_INFO, tips: '선택지 순서는 대체로 글의 순서와 같습니다. 숫자·비교(more/less)·부정어를 지문과 하나씩 대조하세요.', ex: '커피 소비를 막으면…' },
      { name: T_IRR, tips: '글의 중심 소재는 같지만 주제에서 벗어난 문장(역사·잡지식 등)을 찾으세요. 그 문장을 빼도 흐름이 자연스러워야 합니다.', ex: '시금치 철분 신화' },
      { name: T_ESSAY, tips: '〈보기〉 단어를 모두 쓰고 〈조건〉(의미상 주어 for, with+명사+분사 등)을 지켰는지 확인하세요. 대소문자·마침표·수 일치까지 채점됩니다.', ex: '의미상의 주어를 반드시 표시할 것' }
    ]
  };

  const L = [];

  /* =========================================================
     교과서 단원 ① 한국 문화 속 호랑이 (지문 창작)
     ========================================================= */
  L.push({
    type: T_TOPIC, pts: 3,
    passage: `For centuries, Koreans have told stories, painted pictures, and even sung songs about tigers. In old folk paintings called minhwa, tigers often appear with magpies, looking more funny than fearsome. People hung such paintings on their doors at the start of a new year, hoping the tiger would keep bad luck away. At the same time, tigers were real dangers in the mountains, so people respected and feared them at once. Today, the tiger still shows up as a sports team symbol, a character in cartoons, and a mascot for international events. In this way, the tiger has remained a familiar part of Korean identity.`,
    stem: '다음 글의 주제로 가장 적절한 것은?',
    choices: [
      'the lasting role of the tiger as a symbol in Korean culture',
      'the scientific reasons tigers disappeared from Korea',
      'the difference between Korean and Chinese folk paintings',
      'ways to protect people from wild animals in the mountains',
      'the history of sports team mascots around the world'
    ], ans: 1,
    explain: '민화, 새해 그림, 스포츠 상징, 만화, 국제 행사 마스코트 등 과거부터 오늘날까지 호랑이가 한국 문화의 상징으로 계속 등장한다는 내용이므로 ①이 주제이다. ②는 멸종 이유를 다루지 않았고, ③ 중국 민화와의 비교, ④ 야생동물로부터의 보호 방법, ⑤ 세계 마스코트의 역사는 글에 없다.'
  });

  L.push({
    type: T_GRAM, pts: 3, posChoices: true,
    passage: `Long ago, Korea was home to so many tigers ①[that] people called it the "Land of Tigers." Tigers ②[were believed] to guard villages from evil spirits. Many old stories describe tigers ③[who act] like humans: they talk, get tricked, and even feel thankful. In one tale, a tiger ④[rewarding] a woodcutter who once ⑤[saved] its life by bringing him food every day. Such stories show how closely tigers were connected to everyday life.`,
    stem: '다음 글의 밑줄 친 부분([ ]) 중, 어법상 틀린 것은?',
    choices: P.slice(), ans: 4,
    explain: '④ 문장의 주어 a tiger 뒤에 본동사가 없으므로 rewarding을 rewards(또는 rewarded)로 고쳐야 한다. ① so ~ that 구문, ② 호랑이가 "믿어진" 것이므로 수동태, ③ 사람처럼 행동하는 호랑이를 꾸미는 관계절(의인화되어 who도 가능), ⑤ 과거의 일이므로 saved는 옳다.'
  });

  L.push({
    type: T_VOCAB, pts: 2.8, posChoices: true,
    passage: `In the folktale about the dried persimmon, a tiger overhears a mother calming her crying child. When the child keeps crying even after the mother warns that a tiger is coming, the tiger is ①[surprised] that the child is not afraid of it. But when the mother offers a dried persimmon and the crying ②[stops], the tiger concludes that the persimmon must be a creature even ③[weaker] than itself. Terrified, it ④[flees] into the forest. The story makes the powerful tiger look ⑤[foolish], which may have helped people feel less afraid of a real danger.`,
    stem: '다음 글의 밑줄 친 부분([ ]) 중, 문맥상 낱말의 쓰임이 적절하지 않은 것은?',
    choices: P.slice(), ans: 3,
    explain: '호랑이는 곶감이 자기보다 무서운 존재라고 생각해 겁에 질려(Terrified) 달아난다. 따라서 ③ weaker(더 약한)가 아니라 stronger(더 강한)가 되어야 한다. ①은 호랑이 이야기에도 울음을 그치지 않는 아이에 대한 놀라움, ②는 곶감을 주자 울음이 그침, ④는 겁에 질려 달아남, ⑤는 힘센 호랑이를 어리석게 그려 두려움을 덜었다는 흐름으로 모두 자연스럽다.'
  });

  L.push({
    type: T_BLANK, pts: 3,
    passage: `When Korea hosted the 1988 Seoul Olympics, it chose Hodori, a friendly tiger cub, as its mascot. Thirty years later, Soohorang, a white tiger, welcomed athletes to PyeongChang. The organizers could have picked any animal, but they chose the tiger again because ______________. For many Koreans, the tiger stands for courage and protection, and white tigers in particular have long been seen as sacred guardians. A mascot that carries such meaning can introduce a nation's culture to the world in a single image.`,
    stem: '다음 글의 빈칸에 들어갈 말로 가장 적절한 것은?',
    choices: [
      'tigers were easy for cartoonists to draw',
      'it already held deep symbolic meaning for Korean people',
      'it was the most common animal living in Korean cities',
      'foreign visitors were afraid of other animals',
      'the Olympic committee required an endangered species'
    ], ans: 2,
    explain: '빈칸 뒤에서 호랑이는 한국인에게 용기와 보호를 상징하고, 백호는 신성한 수호자로 여겨졌다고 설명한다. 즉, 호랑이를 다시 고른 이유는 이미 깊은 상징적 의미를 지녔기 때문이다(②). ① 그리기 쉬움, ③ 도시에 흔함, ④ 외국인의 두려움, ⑤ 멸종위기종 규정은 근거가 없다.'
  });

  L.push({
    type: T_SUM, pts: 3.2,
    passage: `Tigers in Korean folktales are not always the same. In some stories, a tiger repays a kindness or protects a loyal son on a mountain path. In others, a tiger is tricked by a rabbit or runs away from a dried persimmon. Storytellers seem to have admired the tiger's strength while also wanting to laugh at it. Turning a fearsome animal into a silly character may have been a way to make it less frightening.`,
    box: `Korean folktales portray tigers in (A) __________ ways, which reflects people's (B) __________ feelings of respect and fear toward them.`,
    boxTitle: '요약문',
    stem: '다음 글의 내용을 한 문장으로 요약하고자 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?',
    choices: [
      'identical — simple',
      'frightening — joyful',
      'contrasting — mixed',
      'realistic — scientific',
      'contrasting — indifferent'
    ], ans: 3,
    explain: '민담 속 호랑이는 은혜를 갚거나 효자를 지키는 모습과, 토끼에게 속거나 곶감에 달아나는 우스운 모습으로 대조적으로(contrasting) 그려진다. 이는 호랑이의 힘을 존경하면서도 두려워한 사람들의 복합적인(mixed) 감정을 반영한다. ⑤ indifferent(무관심한)는 존경과 두려움이라는 감정과 맞지 않는다.'
  });

  L.push({
    type: T_INFO, pts: 2.8,
    passage: `Scientists estimate that tigers lived on the Korean Peninsula for at least 100,000 years. Rock carvings from the Bronze Age include images of tigers among the animals people hunted. During the Joseon Dynasty, tigers were hunted because they attacked people and livestock, and their numbers decreased. Under Japanese colonial rule, large-scale hunting pushed them close to extinction. Today, the few Siberian tigers living in South Korea are kept in protected spaces such as zoos and a large forest enclosure in an arboretum.`,
    stem: '다음 글의 내용과 일치하지 않는 것은?',
    choices: [
      '호랑이는 최소 10만 년 동안 한반도에 살았던 것으로 추정된다.',
      '청동기 시대 바위그림에 사냥 대상인 동물로 호랑이가 등장한다.',
      '조선 시대에는 사람과 가축을 공격해 호랑이가 사냥 대상이 되었다.',
      '일제강점기의 대규모 사냥으로 호랑이의 수가 늘어났다.',
      '오늘날 남한의 시베리아 호랑이는 동물원이나 수목원 같은 보호 공간에서 지낸다.'
    ], ans: 4,
    explain: '일제강점기의 대규모 사냥은 호랑이를 멸종 직전까지(close to extinction) 몰아넣었다고 했으므로 ④ "수가 늘어났다"는 일치하지 않는다. 나머지는 각각 at least 100,000 years, rock carvings from the Bronze Age, attacked people and livestock, protected spaces 부분과 일치한다.'
  });

  L.push({
    type: T_ORDER, pts: 3.2,
    passage: `Before 1988, many people around the world knew little about Korea.\n\n(A) Its smiling face and the long ribbon on its traditional hat became famous, and many visitors bought Hodori dolls as souvenirs.\n(B) To change this, the organizers of the Seoul Olympics created a mascot named Hodori, a young tiger wearing a traditional Korean hat.\n(C) Through this small tiger, people across the globe came to see Korea as a warm and lively country, not just a nation recovering from war.`,
    stem: '주어진 글 다음에 이어질 글의 순서로 가장 적절한 것은?',
    order: ['B', 'A', 'C'],
    explain: '세계가 한국을 잘 몰랐다 → (B) 이를 바꾸기 위해(To change this) 호돌이를 만듦 → (A) 그(Its) 웃는 얼굴과 상모가 유명해짐 → (C) 이 작은 호랑이(this small tiger)를 통해 한국의 이미지가 바뀜. 따라서 (B)-(A)-(C)이다.'
  });

  L.push({
    type: T_INS, pts: 3.4, posChoices: true,
    box: `However, their symbolism did not disappear completely.`,
    boxTitle: '주어진 문장',
    passage: `Tigers once roamed nearly every mountain in Korea. ( ① ) Hunting during the Joseon period and the colonial era, however, drove them almost to extinction. ( ② ) As the animals vanished from the forests, people saw them less and less in daily life. ( ③ ) It lived on in paintings, stories, and the old name "Land of Tigers." ( ④ ) Then, in 1988 and again in 2018, tiger mascots brought the symbol back to the center of national events. ( ⑤ ) Today, the tiger is once again one of the best-known images of Korea.`,
    stem: '글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳은?',
    choices: P.slice(), ans: 3,
    explain: '③ 뒤 문장의 It은 단수이며 "그림, 이야기, 옛 이름 속에 살아남았다"는 내용이므로, 주어진 문장의 their symbolism(호랑이의 상징성)을 받는다. 또한 "실제 호랑이는 사라졌다 → 그러나 상징성은 사라지지 않았다"로 흐름이 전환되는 곳이 ③이다.'
  });

  L.push({
    type: T_IRR, pts: 3, posChoices: true,
    passage: `In 2020, a band mixed pansori, a traditional Korean singing style, with modern pop rhythms in a song about a tiger coming down from the mountain. ① Pansori performances can last several hours, and singers train their voices for many years. ② The lyrics come from Sugungga, a pansori story in which a turtle and a rabbit try to trick each other. ③ A video of dancers performing to the song was watched millions of times online. ④ Viewers from many countries began searching for information about Korean traditional music. ⑤ The success of the song showed that an old tiger image could still feel fresh to modern audiences.`,
    stem: '다음 글에서 전체 흐름과 관계없는 문장은?',
    choices: P.slice(), ans: 1,
    explain: '글은 판소리와 팝을 섞은 호랑이 노래가 세계적 인기를 얻어 오래된 호랑이 이미지가 새롭게 받아들여졌다는 내용이다. ① 판소리 공연 시간과 소리꾼의 훈련 기간은 이 흐름과 관계가 없다.'
  });

  L.push({
    type: T_MEAN, pts: 3.4,
    passage: `In many Korean folk paintings, the tiger does not look dangerous at all. It has round eyes and a goofy grin, and sometimes it even smokes a long pipe while a rabbit serves it. Painters knew very well that real tigers were deadly. Yet by drawing them this way, they turned a source of terror into a friendly neighbor. In other words, the tiger was given a smile so that ordinary people could live with their fear.`,
    stem: '밑줄 친 "the tiger was given a smile"이 다음 글에서 의미하는 바로 가장 적절한 것은?',
    choices: [
      'Painters lacked the skill to draw tigers realistically.',
      'Tigers in Korea were naturally gentle animals.',
      'People wanted to make tigers more frightening to children.',
      'People changed the image of a feared animal to make it easier to face.',
      'Folk paintings were used to teach hunting skills.'
    ], ans: 4,
    explain: '화가들은 실제 호랑이가 위험하다는 것을 알면서도 우스꽝스럽게 그려 공포의 대상을 친근한 이웃으로 바꾸었다. 즉, 두려운 동물의 이미지를 바꿔 마주하기 쉽게 만들었다는 뜻이다(④). ① 그림 실력 부족, ② 실제로 온순함은 글과 반대이다.'
  });

  L.push({
    type: T_GRAM, pts: 3.2, posChoices: true,
    passage: `Soohorang, the mascot of the 2018 PyeongChang Winter Olympics, ①[was modeled] on a white tiger. Its name combines "sooho," ②[meaning] protection, with "horang," a Korean word for tiger. White tigers have long been regarded as guardians ③[that] watch over people. The designers hoped the mascot would make athletes and visitors ④[feel] safe. Many fans said that the mascot was so cute ⑤[which] they wanted to take one home.`,
    stem: '다음 글의 밑줄 친 부분([ ]) 중, 어법상 틀린 것은?',
    choices: P.slice(), ans: 5,
    explain: '⑤ "너무 ~해서 …하다"는 so ~ that 구문이므로 which를 that으로 고쳐야 한다. ① 마스코트가 백호를 "본떠 만들어진" 것이므로 수동태, ② "보호를 의미하는"이라는 능동의 현재분사, ③ guardians를 꾸미는 주격 관계대명사, ④ 사역동사 make + 목적어 + 동사원형은 옳다.'
  });

  /* =========================================================
     교과서 단원 ② 자연에서 찾은 환경 해법 (지문 창작)
     ========================================================= */
  L.push({
    type: T_TOPIC, pts: 3,
    passage: `When we think of solving environmental problems, we often imagine huge machines and expensive technology. Yet some of the most promising answers are found in nature itself. Tiny insects can digest plastic, trees can pull poisons out of the ground, and microscopic algae can turn waste into fuel. These natural helpers work slowly, but they cost little and rarely create new pollution. Scientists are now studying how to make the most of them.`,
    stem: '다음 글의 제목으로 가장 적절한 것은?',
    choices: [
      'Machines: The Only Way to Fix Pollution',
      'Insects That Cause Plastic Pollution',
      'Why Algae Is Dangerous to Marine Life',
      'Nature\'s Own Low-Cost Answers to Pollution',
      'Expensive Technology Always Works Faster'
    ], ans: 4,
    explain: '비싼 기술 대신 곤충, 나무, 조류 같은 자연 속 생물이 저렴하고 새로운 오염 없이 환경 문제를 해결할 수 있다는 내용이므로 ④가 제목으로 적절하다. ① 기계만이 해법, ⑤ 비싼 기술이 항상 빠르다는 글과 반대이다.'
  });

  L.push({
    type: T_BLANK, pts: 3.4,
    passage: `Mealworms are the larvae of a type of beetle. When researchers fed them only plastic foam, the worms not only survived but also stayed healthy for weeks. The secret lies in bacteria in their guts, which break the plastic down into simpler substances. This discovery suggests that ______________. If scientists can grow these bacteria in large quantities, plastic waste could one day be broken down without being burned or buried.`,
    stem: '다음 글의 빈칸에 들어갈 말로 가장 적절한 것은?',
    choices: [
      'plastic foam is a healthy food for all insects',
      'beetles are responsible for producing plastic',
      'burning plastic is the safest method of disposal',
      'bacteria cannot survive inside insects',
      'living creatures may help us deal with plastic waste'
    ], ans: 5,
    explain: '밀웜의 장 속 박테리아가 플라스틱을 분해하며, 이 박테리아를 대량으로 키우면 태우거나 묻지 않고도 플라스틱을 분해할 수 있다는 흐름이므로 "생물이 플라스틱 쓰레기 처리에 도움이 될 수 있다"(⑤)가 알맞다. ① 모든 곤충에게 건강한 먹이라는 일반화는 근거가 없고, ③ 소각은 오히려 피하려는 방법이다.'
  });

  L.push({
    type: T_GRAM, pts: 3, posChoices: true,
    passage: `Every year, millions of tons of plastic ①[end up] in the ocean. Much of it comes from single-use items ②[that is] thrown away after only one use. Sea animals often mistake small pieces of plastic for food, ③[which] can make them sick. Recycling is helpful, but less than ten percent of all plastic waste ④[has been recycled] so far. This is why we need to reduce the amount of plastic ⑤[we use] in the first place.`,
    stem: '다음 글의 밑줄 친 부분([ ]) 중, 어법상 틀린 것은?',
    choices: P.slice(), ans: 2,
    explain: '② 관계대명사 that의 선행사는 복수 명사 single-use items이므로 is를 are로 고쳐야 한다. ① 주어 millions of tons of plastic에 맞는 동사, ③ 앞 절 전체를 받는 계속적 용법 which, ④ 주어 plastic waste(불가산)에 맞는 단수 has been recycled, ⑤ 목적격 관계대명사가 생략된 the amount of plastic (that) we use는 옳다.'
  });

  L.push({
    type: T_VOCAB, pts: 3.2, posChoices: true,
    passage: `Soil polluted by heavy metals is difficult to clean. Digging it up and moving it is ①[expensive], and it only shifts the problem to another place. Willow trees offer a ②[cheaper] option. Their deep and wide roots ③[absorb] harmful substances from the soil. They also grow ④[slowly], so they can be planted and harvested many times within a few years. Because some willow species clean soil better than others, scientists are trying to ⑤[identify] the most effective ones.`,
    stem: '다음 글의 밑줄 친 부분([ ]) 중, 문맥상 낱말의 쓰임이 적절하지 않은 것은?',
    choices: P.slice(), ans: 4,
    explain: '몇 년 안에 여러 번 심고 수확할 수 있다고 했으므로 버드나무는 빨리 자란다. 따라서 ④ slowly를 quickly로 바꿔야 한다. ① 흙을 파서 옮기는 것은 비쌈, ② 더 저렴한 대안, ③ 뿌리가 해로운 물질을 흡수, ⑤ 효과적인 종을 찾아냄은 모두 자연스럽다.'
  });

  L.push({
    type: T_ORDER, pts: 3.2,
    passage: `Billions of cups of coffee are drunk around the world every day.\n\n(A) Researchers have found a better use for them: growing algae. Algae grown on coffee grounds need no extra nutrients and can be turned into high-quality biofuel.\n(B) Each cup leaves behind used coffee grounds, and most of them are sent to landfills.\n(C) There, the grounds rot and release methane, a greenhouse gas far more powerful than carbon dioxide.`,
    stem: '주어진 글 다음에 이어질 글의 순서로 가장 적절한 것은?',
    order: ['B', 'C', 'A'],
    explain: '매일 수십억 잔의 커피 → (B) 커피 찌꺼기가 매립지로 감 → (C) 그곳(There=landfills)에서 메탄을 배출 → (A) 그것들(them=coffee grounds)의 더 나은 활용법: 조류 재배와 바이오연료. 따라서 (B)-(C)-(A)이다.'
  });

  L.push({
    type: T_INFO, pts: 2.8,
    passage: `A team of researchers grew algae on used coffee grounds without adding any other nutrients. They found that the algae grew best when exposed to light for twenty hours and darkness for four hours each day. Under these conditions, the algae produced oil that could be made into biofuel. Unlike fossil fuels, this fuel is renewable and releases only a small amount of emissions. The researchers believe the method could reduce both waste and greenhouse gases.`,
    stem: '다음 글의 내용과 일치하는 것은?',
    choices: [
      '연구진은 추가 영양분을 넣어 조류를 키웠다.',
      '조류는 하루 20시간 동안 어둠 속에 있을 때 가장 잘 자랐다.',
      '조류가 만든 기름은 바이오연료로 만들 수 있다.',
      '이 연료는 화석 연료처럼 재생 불가능하다.',
      '연구진은 이 방법이 쓰레기는 줄이지만 온실가스는 줄이지 못한다고 본다.'
    ], ans: 3,
    explain: 'the algae produced oil that could be made into biofuel과 ③이 일치한다. ① 추가 영양분 없이(without adding any other nutrients), ② 빛 20시간·어둠 4시간, ④ 재생 가능(renewable), ⑤ 쓰레기와 온실가스 둘 다 줄일 수 있다고 했다.'
  });

  L.push({
    type: T_SUM, pts: 3.4,
    passage: `Polluted soil is usually dug up and transported to landfills, but this process is costly and simply moves the problem elsewhere. Planting willow trees offers another way. Their extensive roots draw harmful metals out of the ground, and the trees can later be harvested and safely processed. Although this takes several years, it costs far less and leaves the land usable.`,
    box: `Compared with (A) __________ polluted soil, planting willows is a slower but more (B) __________ way of cleaning the land.`,
    boxTitle: '요약문',
    stem: '다음 글의 내용을 한 문장으로 요약하고자 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?',
    choices: [
      'ignoring — dangerous',
      'removing — expensive',
      'protecting — harmful',
      'burning — complicated',
      'removing — affordable'
    ], ans: 5,
    explain: '오염된 흙을 파내 옮기는(removing) 방법에 비해 버드나무 심기는 몇 년이 걸리지만 훨씬 비용이 적게 드는(affordable) 방법이다. ② expensive는 costs far less와 반대이다.'
  });

  L.push({
    type: T_INS, pts: 3.4, posChoices: true,
    box: `The answer lay not in the worms themselves but in what lived inside them.`,
    boxTitle: '주어진 문장',
    passage: `Scientists noticed that mealworms could chew through plastic foam. ( ① ) At first, they thought the worms were simply breaking the plastic into tiny pieces. ( ② ) However, further tests showed that the plastic was actually being digested. ( ③ ) Special bacteria in the worms' guts break the plastic down into harmless substances. ( ④ ) Now researchers hope to grow these bacteria outside the worms and speed up the process. ( ⑤ ) If they succeed, landfills may one day be free of plastic.`,
    stem: '글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳은?',
    choices: P.slice(), ans: 3,
    explain: '플라스틱이 실제로 소화되고 있었다는 사실(의문 제기) 다음에 "답은 벌레 자체가 아니라 그 안에 사는 것에 있었다"가 오고, 이어서 그 정체인 장 속 박테리아가 구체적으로 소개되는 흐름이므로 ③이 적절하다.'
  });

  L.push({
    type: T_MEAN, pts: 3.2,
    passage: `Used coffee grounds, plastic-eating worms, and soil-cleaning trees all show the same thing: solutions to our environmental problems may already exist around us. Nature has suffered greatly from human activity, yet it continues to offer us ways to repair the damage. It seems that Mother Nature has given us one more chance. Whether we take it depends on how seriously we look for and use these gifts.`,
    stem: '밑줄 친 "Mother Nature has given us one more chance"가 다음 글에서 의미하는 바로 가장 적절한 것은?',
    choices: [
      'Nature still provides solutions we can use if we make the effort.',
      'Nature will fix every environmental problem by itself.',
      'Humans have already solved most environmental issues.',
      'Nature will punish humans for their past mistakes.',
      'People should stop drinking coffee to protect the planet.'
    ], ans: 1,
    explain: '자연은 인간 때문에 피해를 입었지만 여전히 회복 방법을 주고 있으며, 그것을 활용할지는 우리의 노력에 달려 있다고 했다. 따라서 ①이 적절하다. ②는 마지막 문장(우리가 찾아 쓰는 것에 달림)과 맞지 않는다.'
  });

  L.push({
    type: T_IRR, pts: 3, posChoices: true,
    passage: `Plastic is light, strong, and cheap, which is why it is used almost everywhere. ① Many early plastics were made from plant materials such as cotton and wood. ② However, the same qualities that make plastic useful also make it a serious problem once it is thrown away. ③ Because it is light, plastic waste is easily carried by wind and rivers into the sea. ④ Because it is strong, it can remain in the environment for hundreds of years. ⑤ And because it is cheap, people use it once and throw it away without a second thought.`,
    stem: '다음 글에서 전체 흐름과 관계없는 문장은?',
    choices: P.slice(), ans: 1,
    explain: '플라스틱의 장점(가볍고, 강하고, 싸다)이 버려진 후에는 그대로 문제가 된다는 글이다. ① 초기 플라스틱의 원료에 관한 역사 정보는 흐름과 관계없다.'
  });

  L.push({
    type: T_BLANK, pts: 3.2,
    passage: `Every year, huge amounts of plastic foam are used to protect products during shipping. Some companies have developed an alternative made from mycelium, the root-like part of mushrooms. Farm waste such as corn stalks is mixed with mycelium and placed in a mold. In about a week, the mycelium grows through the waste and binds it into a solid shape. When the packaging is no longer needed, it can be broken up and added to a garden, where it ______________ within a few weeks.`,
    stem: '다음 글의 빈칸에 들어갈 말로 가장 적절한 것은?',
    choices: [
      'turns back into plastic foam',
      'breaks down naturally',
      'grows into a large tree',
      'releases toxic chemicals',
      'becomes stronger over time'
    ], ans: 2,
    explain: '플라스틱 폼의 대안인 버섯 균사체 포장재는 정원에 넣으면 몇 주 안에 자연적으로 분해된다(②)는 것이 핵심 장점이다. ④ 독성 물질 배출, ⑤ 시간이 지날수록 단단해짐은 친환경 대안의 설명과 반대이다.'
  });

  L.push({
    type: T_GRAM, pts: 3.2, posChoices: true,
    passage: `Oysters are small, but they do a big job. A single adult oyster can filter dozens of liters of water a day, ①[removes] dirt and extra nutrients. In the past, oyster reefs ②[covered] large parts of New York Harbor, but pollution and overharvesting destroyed most of them. Now a project is trying to bring them back by ③[placing] young oysters on old shells. Volunteers hope that the reefs will not only clean the water but also ④[protect] the shore from storm waves. If the project succeeds, the harbor may become a place ⑤[where] fish and birds can live again.`,
    stem: '다음 글의 밑줄 친 부분([ ]) 중, 어법상 틀린 것은?',
    choices: P.slice(), ans: 1,
    explain: '① 앞 문장에 이미 본동사 can filter가 있으므로 "~하면서 제거한다"는 분사구문 removing이 되어야 한다. ② 과거의 사실이므로 covered, ③ 전치사 by 뒤 동명사, ④ will not only clean ~ but also protect로 동사원형 병렬, ⑤ 장소 a place를 꾸미는 관계부사 where는 옳다.'
  });

  L.push({
    type: T_VOCAB, pts: 3, posChoices: true,
    passage: `Mangrove forests grow along tropical coasts where land meets sea. Their tangled roots ①[slow] down waves and protect villages from storms. They also ②[loosen] the mud, keeping the coastline from washing away. In addition, mangroves store a ③[large] amount of carbon, helping to fight climate change. Unfortunately, many mangrove forests have been ④[cleared] to make room for shrimp farms. Protecting the remaining mangroves is therefore ⑤[essential].`,
    stem: '다음 글의 밑줄 친 부분([ ]) 중, 문맥상 낱말의 쓰임이 적절하지 않은 것은?',
    choices: P.slice(), ans: 2,
    explain: '해안선이 씻겨 나가지 않게 하려면 뿌리가 진흙을 붙잡아야(trap/hold) 한다. ② loosen(느슨하게 하다)은 문맥과 반대이다. ① 파도를 늦춤, ③ 많은 탄소 저장, ④ 새우 양식장을 위해 숲이 개간됨, ⑤ 남은 숲 보호가 필수적임은 자연스럽다.'
  });

  L.push({
    type: T_TOPIC, pts: 3,
    passage: `Recycling is often presented as the answer to plastic pollution. Yet less than ten percent of the world's plastic has ever been recycled. Many types of plastic cannot be recycled at all, and recycled plastic is often of lower quality, so it can be reused only once or twice. Meanwhile, the amount of new plastic being produced keeps growing. To truly solve the problem, we must reduce how much plastic we make and use, not just how much we throw away.`,
    stem: '다음 글의 제목으로 가장 적절한 것은?',
    choices: [
      'Recycling: The Perfect Solution to Plastic',
      'How to Produce Higher-Quality Plastic',
      'Why Recycling Alone Is Not Enough',
      'The Rising Demand for Recycled Goods',
      'Plastic: A Material That Lasts Forever'
    ], ans: 3,
    explain: '재활용률이 10% 미만이고 재활용 플라스틱은 품질이 낮아 한두 번밖에 못 쓰므로, 생산과 사용 자체를 줄여야 한다는 내용이다. 따라서 "재활용만으로는 충분하지 않은 이유"(③)가 제목이다. ①은 글과 반대이다.'
  });

  /* =========================================================
     외부 지문(모의고사·부교재형) — 창작 지문
     ========================================================= */
  L.push({
    type: T_BLANK, pts: 3.6,
    passage: `Humans are deeply social animals. For most of our history, being accepted by a group meant food, protection, and help in hard times, while being rejected could mean death. It is no surprise, then, that our brains became highly sensitive to what others think of us. Even today, a small sign of disapproval, such as a frown or an ignored message, can hurt surprisingly much. This sensitivity is not a weakness but a leftover tool for survival: it pushes us to ______________.`,
    stem: '다음 글의 빈칸에 들어갈 말로 가장 적절한 것은?',
    choices: [
      'avoid all contact with strangers',
      'ignore the opinions of people around us',
      'compete with our closest friends',
      'behave in ways that keep us connected to others',
      'live alone in order to stay safe'
    ], ans: 4,
    explain: '집단에 받아들여지는 것이 생존과 직결되었기 때문에 우리는 타인의 평가에 민감해졌고, 그 민감성은 우리가 타인과 연결된 상태를 유지하도록 행동하게 만든다(④). ②·⑤는 글의 논리와 반대이다.'
  });

  L.push({
    type: T_MEAN, pts: 3.4,
    passage: `A teacher noticed that one student often shouted out jokes during class. Each time, she stopped the lesson to scold him, and the whole class turned to look. The shouting did not decrease; it increased. For this student, the scolding was not a punishment at all. It was a spotlight. The more the teacher reacted, the more she was feeding the very behavior she wanted to stop. When she began ignoring the jokes and praising him whenever he raised his hand, the shouting gradually disappeared.`,
    stem: '밑줄 친 "It was a spotlight."가 다음 글에서 의미하는 바로 가장 적절한 것은?',
    choices: [
      'The teacher wanted to embarrass the student in public.',
      'The scolding gave the student the attention he wanted.',
      'The student was afraid of being noticed by classmates.',
      'The classroom lights were too bright for students to focus.',
      'The student wanted to become a professional comedian.'
    ], ans: 2,
    explain: '꾸중할 때마다 반 전체가 학생을 쳐다보았고 행동이 오히려 늘었다. 꾸중이 처벌이 아니라 학생이 원하던 관심(스포트라이트)이 되었다는 뜻이므로 ②가 적절하다.'
  });

  L.push({
    type: T_ORDER, pts: 3.4,
    passage: `Many people try to change a habit by relying on willpower alone.\n\n(A) When the temptation is out of sight, you no longer need to fight it, and the good habit becomes the easy choice.\n(B) A better approach is to change your environment. If you want to eat less junk food, for instance, simply do not keep it at home.\n(C) Unfortunately, willpower is like a battery that runs low by the end of a long day. That is why people often give in to temptation in the evening.`,
    stem: '주어진 글 다음에 이어질 글의 순서로 가장 적절한 것은?',
    order: ['C', 'B', 'A'],
    explain: '의지력에만 의존함 → (C) 그러나 의지력은 저녁이면 닳는 배터리 같음 → (B) 더 나은 방법은 환경을 바꾸는 것(정크푸드를 집에 두지 않기) → (A) 유혹이 눈앞에 없으면 싸울 필요가 없음. 따라서 (C)-(B)-(A)이다.'
  });

  L.push({
    type: T_INS, pts: 3.4, posChoices: true,
    box: `In other words, sleep is not a break from learning but a part of it.`,
    boxTitle: '주어진 문장',
    passage: `Students often stay up late before an exam, believing that more study time means better results. ( ① ) However, research shows that sleep plays a key role in memory. ( ② ) While we sleep, the brain replays the day's lessons and stores them in long-term memory. ( ③ ) Without enough sleep, this process is cut short, and much of what we studied may be lost. ( ④ ) So the next time you have an exam, remember that a good night's rest may be your best study tool. ( ⑤ )`,
    stem: '글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳은?',
    choices: P.slice(), ans: 4,
    explain: '③ 뒤 문장의 this process는 ② 뒤 문장의 "뇌가 낮에 배운 것을 재생·저장하는 과정"을 받으므로 둘 사이에 다른 문장이 들어갈 수 없다. 수면 중 기억 저장과 수면 부족 시 손실을 설명한 뒤 "즉, 잠은 학습의 휴식이 아니라 일부"라고 정리하고, So로 결론을 내리는 ④가 적절하다.'
  });

  L.push({
    type: T_SUM, pts: 3.6,
    passage: `When animals compare quantities, they rarely count exactly. Instead, they rely on a rough sense of "more" or "less." Fish, for example, prefer to join the larger of two groups, and they can easily choose between groups of two and four. But when the groups are twelve and fourteen, they choose almost randomly. What matters is not the difference in number itself but the ratio between the two quantities: the closer the ratio is to one, the harder the choice becomes.`,
    box: `Animals judge quantities (A) __________ rather than exactly, and their judgments become less reliable as the two quantities become more (B) __________.`,
    boxTitle: '요약문',
    stem: '다음 글의 내용을 한 문장으로 요약하고자 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?',
    choices: [
      'precisely — different',
      'approximately — different',
      'randomly — numerous',
      'slowly — similar',
      'approximately — similar'
    ], ans: 5,
    explain: '동물은 정확히 세지 않고 대략적으로(approximately) 판단하며, 두 수의 비율이 1에 가까울수록, 즉 두 양이 비슷할수록(similar) 선택이 어려워진다. 2와 4는 쉽고 12와 14는 어렵다는 예가 근거이다.'
  });

  L.push({
    type: T_GRAM, pts: 3.4, posChoices: true,
    passage: `Many people worry that artificial intelligence will one day ①[replaces] human workers. However, history shows that new technologies often create as many jobs as they ②[destroy]. When cash machines appeared, people expected bank tellers ③[to disappear]. Instead, banks opened more branches, and tellers spent more time ④[helping] customers with complex problems. The lesson is that technology often changes the kind of work ⑤[that] we do rather than ending the need for work itself.`,
    stem: '다음 글의 밑줄 친 부분([ ]) 중, 어법상 틀린 것은?',
    choices: P.slice(), ans: 1,
    explain: '① 조동사 will 뒤에는 동사원형이 와야 하므로 replaces를 replace로 고쳐야 한다. ② as many jobs as they destroy(파괴하는 만큼), ③ expect + 목적어 + to부정사, ④ spend + 시간 + -ing, ⑤ 목적격 관계대명사 that은 옳다.'
  });

  L.push({
    type: T_VOCAB, pts: 3.6, posChoices: true,
    passage: `Stores sometimes add a product that ①[few] people will buy. For example, a café offers a small coffee for $3, a large one for $5, and a medium one for $4.80. Hardly anyone chooses the medium, but its presence makes the large look like a ②[bargain]. Compared with the medium, the large seems to offer much more for only a little more money. As a result, sales of the large size ③[increase]. This strategy shows that our choices are ④[influenced] by the options around them. We rarely judge a price on its own; we judge it ⑤[apart from] the other options.`,
    stem: '다음 글의 밑줄 친 부분([ ]) 중, 문맥상 낱말의 쓰임이 적절하지 않은 것은?',
    choices: P.slice(), ans: 5,
    explain: '가격을 따로 판단하지 않는다(rarely judge a price on its own)고 했으므로 다른 선택지와 "비교하여(in comparison with)" 판단한다고 해야 한다. ⑤ apart from(~와 떨어져서)은 문맥과 반대이다. ③ 미끼 상품 때문에 큰 사이즈 판매가 늘어나는 것이 맞다.'
  });

  L.push({
    type: T_BLANK, pts: 3.6,
    passage: `Smartphone companies release new models every year, each with a slightly better camera or a thinner body. Most older phones still work perfectly well, yet millions of people replace them anyway. Advertising plays a large part: it repeatedly shows the newest model in the hands of happy, stylish people. Gradually, owners begin to feel that their phones are not broken but ______________. What drives the purchase is not need but the feeling of falling behind.`,
    stem: '다음 글의 빈칸에 들어갈 말로 가장 적절한 것은?',
    choices: [
      'out of date',
      'too expensive to repair',
      'easier to use than before',
      'more valuable than new ones',
      'dangerous to their health'
    ], ans: 1,
    explain: '오래된 휴대폰은 잘 작동하지만 광고 때문에 사람들은 "고장 난 것이 아니라 유행에 뒤처졌다"고 느끼게 된다. 마지막 문장 the feeling of falling behind가 근거이므로 ①이 알맞다. ② 수리비는 언급되지 않았다.'
  });

  L.push({
    type: T_IRR, pts: 3, posChoices: true,
    passage: `The idea that we use only ten percent of our brains is one of the most popular myths about the human body. ① Brain scans show that even simple tasks activate many different areas of the brain. ② Even during sleep, large parts of the brain remain active. ③ Some of the most popular brain-training apps charge users a monthly fee. ④ Moreover, damage to almost any area of the brain causes some loss of ability, which would not happen if ninety percent of it were unused. ⑤ Still, the myth survives, perhaps because it suggests that we have hidden powers waiting to be unlocked.`,
    stem: '다음 글에서 전체 흐름과 관계없는 문장은?',
    choices: P.slice(), ans: 3,
    explain: '"뇌의 10%만 쓴다"는 통념이 틀렸다는 근거(뇌 영상, 수면 중 활동, 뇌 손상)와 그 통념이 살아남는 이유를 다룬 글이다. ③ 두뇌 훈련 앱의 요금은 흐름과 관계없다.'
  });

  L.push({
    type: T_INFO, pts: 2.8,
    passage: `Cities are often several degrees warmer than the surrounding countryside, a phenomenon known as the urban heat island effect. Dark roofs and roads absorb sunlight during the day and release heat at night. One simple solution is to cover roofs with plants. Green roofs keep buildings cooler in summer, reducing the need for air conditioning. They also absorb rainwater, which lowers the risk of flooding. However, green roofs are expensive to install and require regular care, so they are still rare in many cities.`,
    stem: '다음 글의 내용과 일치하지 않는 것은?',
    choices: [
      '도시는 주변 시골보다 기온이 몇 도 더 높은 경우가 많다.',
      '어두운 지붕과 도로는 낮에 햇빛을 흡수해 밤에 열을 방출한다.',
      '옥상 녹화는 여름철 냉방의 필요를 줄여 준다.',
      '옥상 녹화는 빗물을 흡수해 홍수 위험을 낮춘다.',
      '옥상 녹화는 설치비가 저렴해 많은 도시에서 흔히 볼 수 있다.'
    ], ans: 5,
    explain: '옥상 녹화는 설치비가 비싸고(expensive to install) 관리가 필요해 많은 도시에서 아직 드물다(still rare)고 했으므로 ⑤가 일치하지 않는다.'
  });

  L.push({
    type: T_SUM, pts: 3.4,
    passage: `Traditional zoos kept animals in small cages where visitors could see them easily. Today, many zoos are redesigning their spaces around what each species needs. Elephants are given room to walk long distances, and apes are offered puzzles that challenge their minds. The goal is no longer simply to display animals but to let them behave as they would in the wild.`,
    box: `Modern zoos are shifting their focus from (A) __________ animals to meeting each species' (B) __________ needs.`,
    boxTitle: '요약문',
    stem: '다음 글의 내용을 한 문장으로 요약하고자 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?',
    choices: [
      'protecting — artificial',
      'exhibiting — natural',
      'training — financial',
      'exhibiting — commercial',
      'feeding — medical'
    ], ans: 2,
    explain: '과거 동물원은 동물을 보여주는(display = exhibiting) 데 초점을 두었지만, 이제는 야생에서처럼 행동하게 하는, 즉 각 종의 자연스러운(natural) 욕구를 채우는 방향으로 바뀌고 있다.'
  });

  L.push({
    type: T_MEAN, pts: 3.6,
    passage: `Many students study vocabulary by memorizing long lists of words and their translations. This method feels efficient, but the words are often forgotten within days. Our minds do not store words in isolation. A word like "hot" is connected to "cold," "summer," "spicy," and countless personal memories. The more connections a word has, the easier it is to recall. In this sense, words are not labels on a list but knots in a net.`,
    stem: '밑줄 친 "words are not labels on a list but knots in a net"가 다음 글에서 의미하는 바로 가장 적절한 것은?',
    choices: [
      'Words should be memorized in alphabetical order.',
      'Each word has only one fixed meaning.',
      'Words are remembered better when linked to other words and experiences.',
      'Learning vocabulary is more like fishing than studying.',
      'Translations are the best way to remember new words.'
    ], ans: 3,
    explain: '단어는 목록 속 따로 떨어진 이름표가 아니라 다른 단어·기억과 그물처럼 연결된 매듭이며, 연결이 많을수록 기억하기 쉽다는 뜻이므로 ③이 적절하다. ⑤는 글쓴이가 비판한 방식이다.'
  });

  L.push({
    type: T_ORDER, pts: 3.4,
    passage: `Wolves are famous for hunting in packs.\n\n(A) By working together, they can bring down animals much larger than themselves, such as elk and bison.\n(B) Humans, by contrast, often share food even with strangers, and this willingness to cooperate beyond close relatives may be one key to our success as a species.\n(C) Yet such cooperation has limits. When food is scarce, wolves may fight fiercely over a kill, even within the same pack.`,
    stem: '주어진 글 다음에 이어질 글의 순서로 가장 적절한 것은?',
    order: ['A', 'C', 'B'],
    explain: '늑대는 무리 사냥으로 유명 → (A) 협력으로 큰 동물을 잡음 → (C) 그러나 그런 협력(such cooperation)에는 한계가 있음 → (B) 대조적으로(by contrast) 인간은 낯선 이와도 음식을 나눔. 따라서 (A)-(C)-(B)이다.'
  });

  L.push({
    type: T_BLANK, pts: 3.6,
    passage: `In the 1840s, many farmers in Ireland depended on a single variety of potato. When a plant disease arrived, it spread rapidly because every plant was equally vulnerable. The result was a terrible famine. In contrast, farmers in the Andes traditionally grew dozens of potato varieties in the same field. If a disease struck one variety, others survived. The lesson is clear: ______________.`,
    stem: '다음 글의 빈칸에 들어갈 말로 가장 적절한 것은?',
    choices: [
      'potatoes should not be grown in cold regions',
      'a single strong variety is the safest choice',
      'plant diseases cannot be prevented by farmers',
      'diversity protects a system against sudden disasters',
      'large fields produce more food than small ones'
    ], ans: 4,
    explain: '한 품종에만 의존한 아일랜드는 병 하나로 기근을 겪었고, 여러 품종을 함께 기른 안데스는 일부가 살아남았다. 다양성이 갑작스러운 재난으로부터 체계를 보호한다(④)는 교훈이다. ②는 글과 반대이다.'
  });

  L.push({
    type: T_GRAM, pts: 3.2, posChoices: true,
    passage: `Melatonin is a hormone ①[that] tells the body when it is time to sleep. Its level rises in the evening as it gets dark and ②[falls] in the morning. Bright light from screens can delay this rise, ③[making] it harder to fall asleep. Experts therefore recommend ④[turning] off phones and tablets at least an hour before bed. Keeping a regular sleep schedule, even on weekends, ⑤[help] the body maintain its natural rhythm.`,
    stem: '다음 글의 밑줄 친 부분([ ]) 중, 어법상 틀린 것은?',
    choices: P.slice(), ans: 5,
    explain: '⑤ 주어는 동명사구 Keeping a regular sleep schedule(단수)이므로 help를 helps로 고쳐야 한다. ① 주격 관계대명사, ② rises와 병렬인 falls, ③ 결과를 나타내는 분사구문, ④ recommend는 동명사를 목적어로 취하므로 turning은 옳다.'
  });

  L.push({
    type: T_VOCAB, pts: 3.4, posChoices: true,
    passage: `Plans are useful, but they can also become a trap. When we ①[cling] too tightly to a plan, we may fail to notice that circumstances have changed. Successful explorers, for example, prepare ②[carefully] but stay ready to change their route when the weather turns. Their strength lies not in the plan itself but in their ③[flexibility]. In contrast, people who treat their plans as ④[unchangeable] often keep going in the wrong direction simply because they have already started. The goal of planning, then, is not to control the future perfectly but to prepare the mind to ⑤[ignore] whatever happens.`,
    stem: '다음 글의 밑줄 친 부분([ ]) 중, 문맥상 낱말의 쓰임이 적절하지 않은 것은?',
    choices: P.slice(), ans: 5,
    explain: '계획의 목적은 미래를 완벽히 통제하는 것이 아니라 어떤 일이 생겨도 "대응할(respond to / handle)" 준비를 하는 것이다. ⑤ ignore(무시하다)는 유연성을 강조한 글의 흐름과 반대이다.'
  });

  L.push({
    type: T_TOPIC, pts: 3,
    passage: `Positive thinking is often promoted as a key to success. However, studies show that simply imagining a desired outcome can actually reduce motivation. When people vividly picture themselves achieving a goal, their minds partly experience the reward in advance, and they put in less effort. A more effective approach is to imagine both the goal and the obstacles that stand in the way, and then plan how to overcome them.`,
    stem: '다음 글의 요지로 가장 적절한 것은?',
    choices: [
      'Positive thinking alone guarantees success.',
      'Imagining obstacles makes people give up on their goals.',
      'Picturing obstacles along with goals works better than positive fantasies alone.',
      'People should avoid setting goals that are too difficult.',
      'Rewards should be given before a goal is achieved.'
    ], ans: 3,
    explain: '목표 달성만 상상하면 보상을 미리 경험해 노력이 줄어들므로, 목표와 장애물을 함께 떠올리고 극복 계획을 세우는 것이 더 효과적이라는 것이 요지이다(③). ①은 However 이후 내용과 반대이다.'
  });

  L.push({
    type: T_BLANK, pts: 3.4,
    passage: `Boredom has a bad reputation. Yet in one study, people who first spent time on a dull task, such as copying numbers from a phone book, later came up with more creative uses for an ordinary object than those who skipped the task. When the mind has nothing interesting to focus on, it begins to wander, and this wandering can lead to unexpected connections. So rather than always reaching for a phone, we might sometimes ______________.`,
    stem: '다음 글의 빈칸에 들어갈 말로 가장 적절한 것은?',
    choices: [
      'fill every free moment with entertainment',
      'let ourselves be bored for a while',
      'copy phone numbers to improve our memory',
      'avoid creative tasks when we are tired',
      'focus only on dull and simple tasks'
    ], ans: 2,
    explain: '지루한 과제를 먼저 한 사람들이 더 창의적이었으며, 지루할 때 마음이 방황하며 새로운 연결이 생긴다고 했다. 그러니 늘 휴대폰을 찾기보다 잠시 지루함을 허용하자(②)는 결론이 알맞다. ③은 실험의 수단일 뿐 결론이 아니다.'
  });

  L.push({
    type: T_SUM, pts: 3.6,
    passage: `Chess masters can remember the positions of pieces on a board after looking at it for just a few seconds, but only when the positions come from real games. When the pieces are placed randomly, the masters' memory is no better than that of beginners. Their advantage comes not from a better memory in general but from years of experience that allow them to see meaningful patterns.`,
    box: `Experts' superior memory depends on recognizing (A) __________ patterns, so it (B) __________ when information is arranged randomly.`,
    boxTitle: '요약문',
    stem: '다음 글의 내용을 한 문장으로 요약하고자 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?',
    choices: [
      'familiar — disappears',
      'random — improves',
      'familiar — improves',
      'unusual — disappears',
      'simple — continues'
    ], ans: 1,
    explain: '체스 고수의 기억력은 경험으로 익숙해진(familiar) 의미 있는 패턴을 알아보는 데서 나오므로, 말이 무작위로 놓이면 그 우위가 사라진다(disappears). ④ unusual은 경험으로 익힌 패턴과 맞지 않는다.'
  });

  L.push({
    type: T_INS, pts: 3.4, posChoices: true,
    box: `Yet the myth refuses to die.`,
    boxTitle: '주어진 문장',
    passage: `Many people believe that goldfish have a memory span of only three seconds. ( ① ) Scientists have tested this claim many times and found it to be false. ( ② ) In some experiments, goldfish learned to push a lever to get food and remembered how to do it for months. ( ③ ) Others were trained to respond to a particular sound at feeding time. ( ④ ) It is still repeated in movies, jokes, and casual conversation, perhaps because it makes a small fish seem simple and easy to understand. ( ⑤ )`,
    stem: '글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳은?',
    choices: P.slice(), ans: 4,
    explain: '①~③ 뒤는 금붕어 기억력이 길다는 실험 근거이고, ④ 뒤에서 "그것(It)은 여전히 영화·농담에서 반복된다"로 바뀐다. 근거에도 불구하고 "그런데도 그 통념은 사라지지 않는다"가 ④에 들어가야 뒤의 It(=the myth)이 자연스럽게 이어진다.'
  });

  L.push({
    type: T_IRR, pts: 3, posChoices: true,
    passage: `Owning a pet can have real benefits for mental health. ① Walking a dog every day gives owners regular exercise and a reason to go outside. ② The first dogs were probably wolves that lived near human camps thousands of years ago. ③ Pets also offer comfort, as stroking an animal can lower stress levels. ④ Many people talk to their pets and feel understood, even though the animals cannot answer in words. ⑤ For people who live alone, a pet can make the house feel less empty.`,
    stem: '다음 글에서 전체 흐름과 관계없는 문장은?',
    choices: P.slice(), ans: 2,
    explain: '반려동물이 정신 건강에 주는 이점(운동, 스트레스 감소, 정서적 위안, 외로움 완화)을 다룬 글이다. ② 개의 기원(늑대)은 흐름과 관계없다.'
  });

  L.push({
    type: T_MEAN, pts: 3.4,
    passage: `Thirty years ago, a phone that could translate speech in real time or a car that drove itself belonged only in science fiction. Writers imagined such devices as distant dreams. Today, many of them are available in ordinary stores or are being tested on real roads. Writers who want to amaze readers now struggle to invent technologies that are not already being developed somewhere. For them, the future keeps arriving before the story can be finished.`,
    stem: '밑줄 친 "the future keeps arriving before the story can be finished"가 다음 글에서 의미하는 바로 가장 적절한 것은?',
    choices: [
      'Writers take too long to publish their novels.',
      'Readers are no longer interested in science fiction.',
      'Most imagined technologies will never be developed.',
      'Future stories should be written about the past.',
      'Technology develops so fast that imagined inventions quickly become real.'
    ], ans: 5,
    explain: '과거 공상과학 속 기술이 이미 현실이 되어, 작가가 상상한 기술이 이야기를 완성하기도 전에 실제로 개발된다는 뜻이다(⑤). ①은 문자 그대로의 해석이고, ③은 글과 반대이다.'
  });

  L.push({
    type: T_GRAM, pts: 3.4, posChoices: true,
    passage: `Unlike humans, octopuses ①[have] no bones, which allows them to squeeze through tiny openings. They are also remarkably intelligent. Octopuses in aquariums have been seen ②[open] jars and escaping from their tanks at night. Some researchers argue that we should judge animal intelligence not by how similar it is to ours but by how well it ③[suits] each animal's way of life. An octopus does not need to solve math problems; it needs to hunt, hide, and ④[escape] from predators. Seen this way, intelligence ⑤[takes] many different forms.`,
    stem: '다음 글의 밑줄 친 부분([ ]) 중, 어법상 틀린 것은?',
    choices: P.slice(), ans: 2,
    explain: '② 지각동사 see가 수동태(have been seen)가 되면 목적격 보어 동사원형은 to부정사나 현재분사로 바뀐다. 뒤의 escaping과 병렬이므로 opening으로 고쳐야 한다. ④는 hunt, hide와 병렬인 동사원형 escape로 옳다.'
  });

  L.push({
    type: T_TOPIC, pts: 3,
    passage: `A waiter can remember dozens of orders until the bill is paid, and then forget them almost immediately. A psychologist noticed this in the 1920s and found in experiments that people recall unfinished tasks better than finished ones. An incomplete task seems to keep the mind slightly tense, as if it were reminding us to return to it. Once the task is done, the tension disappears, and so does the memory.`,
    stem: '다음 글의 제목으로 가장 적절한 것은?',
    choices: [
      'How Waiters Earn Bigger Tips',
      'The Best Ways to Finish Tasks Quickly',
      'Why Stress Destroys Our Memory',
      'The History of Restaurant Service',
      'Why Unfinished Tasks Stay in Our Minds'
    ], ans: 5,
    explain: '끝나지 않은 일은 마음에 약간의 긴장을 유지해 더 잘 기억되고, 끝나면 긴장과 함께 기억도 사라진다는 내용이므로 ⑤가 제목이다. ③은 스트레스가 기억을 파괴한다는 반대 내용이다.'
  });

  L.push({
    type: T_INFO, pts: 2.8,
    passage: `A folk museum once published a book that collected hundreds of tiger stories from across the country. The editors found that tigers appeared in more folktales than any other wild animal. In about half of the stories, the tiger helped or rewarded humans, while in the others it was tricked or punished. The book also included old drawings and photographs of tiger-shaped objects, such as pillows and roof tiles. The museum hoped readers would notice how often tigers still appear in their everyday surroundings.`,
    stem: '다음 글의 내용과 일치하는 것은?',
    choices: [
      '그 책은 한 지역의 호랑이 이야기만 모았다.',
      '편집자들은 호랑이보다 다른 야생동물이 민담에 더 많이 나온다고 보았다.',
      '모든 이야기에서 호랑이는 인간을 돕거나 보상했다.',
      '책에는 호랑이 모양 물건의 옛 그림과 사진도 실렸다.',
      '박물관은 독자들이 호랑이를 동물원에서 직접 보기를 바랐다.'
    ], ans: 4,
    explain: 'The book also included old drawings and photographs of tiger-shaped objects와 ④가 일치한다. ① 전국(across the country), ② 호랑이가 가장 많이 등장, ③ 약 절반만 돕거나 보상, ⑤ 일상 주변에서 호랑이를 발견하기를 바랐다.'
  });

  /* =========================================================
     서술형 (조건 영작)
     ========================================================= */
  L.push({
    type: T_ESSAY, kind: 'essay', pts: 5,
    stem: '우리말 해석을 보고 〈보기〉의 단어와 〈조건〉을 활용하여 영작하시오.\n〈조건〉 의미상의 주어를 반드시 표시할 것 / 단어 추가·변형 불가\n〈보기〉 too / for / children / approach / frightening / to / was / the tiger\n⇒ 그 호랑이는 너무 무서워서 아이들이 다가갈 수 없었다.',
    model: 'The tiger was too frightening for children to approach.',
    rubric: ['too + 형용사 + for + 의미상 주어 + to부정사 구조를 정확히 씀 (3점)', '〈보기〉 단어를 모두 빠짐없이 사용 (1점)', '대문자·마침표 등 형식 오류 없음 (1점)', '※ approach 뒤에 it을 덧붙이면 감점(주어와 목적어가 같으므로 불필요)']
  });

  L.push({
    type: T_ESSAY, kind: 'essay', pts: 5,
    stem: '우리말 해석을 보고 〈보기〉의 단어와 〈조건〉을 활용하여 영작하시오.\n〈조건〉 with + 명사 + 분사 구문과 현재진행형을 활용할 것 / 단어 중복 허용\n〈보기〉 global temperatures / rising / forest fires / becoming / are / more frequent / with\n⇒ 지구 기온이 상승하면서 산불이 더 잦아지고 있다.',
    model: 'With global temperatures rising, forest fires are becoming more frequent.',
    rubric: ['With + 명사(global temperatures) + 현재분사(rising) 구조 (2점)', '주절을 현재진행형 are becoming으로 씀 (2점)', '어순·철자·구두점 정확 (1점)']
  });

  L.push({
    type: T_ESSAY, kind: 'essay', pts: 5,
    stem: '우리말 해석을 보고 〈보기〉의 단어를 활용하여 영작하시오.\n〈조건〉 단어 중복 허용 / 필요시 어형 변화 없음\n〈보기〉 the convenience / comes / at the cost of / single-use plastic / of / the environment\n⇒ 일회용 플라스틱의 편리함은 환경을 희생하여 얻어진다.',
    model: 'The convenience of single-use plastic comes at the cost of the environment.',
    rubric: ['주어 The convenience of single-use plastic을 바르게 구성 (2점)', 'comes at the cost of + 목적어 구조 (2점)', '주어-동사 수 일치(comes) 및 형식 정확 (1점)']
  });

  L.push({
    type: T_ESSAY, kind: 'essay', pts: 5,
    stem: '우리말 해석을 보고 〈보기〉의 단어를 활용하여 영작하시오.\n〈조건〉 단어 중복 허용 / 간접의문문(의문사+주어+동사)을 주어로 쓸 것\n〈보기〉 how / we / interpret / events / determines / the emotions / feel\n⇒ 우리가 사건을 해석하는 방식이 우리가 느끼는 감정을 결정한다.',
    model: 'How we interpret events determines the emotions we feel.',
    rubric: ['How we interpret events(간접의문문 명사절)를 주어로 씀 (2점)', '명사절 주어를 단수 취급하여 determines (1점)', 'the emotions (that) we feel 관계절 구성 (1점)', '형식(대문자·마침표) 정확 (1점)']
  });

  L.push({
    type: T_ESSAY, kind: 'essay', pts: 5,
    stem: '다음 글의 주제를 〈조건〉에 맞게 영어로 쓰시오.\n〈조건〉 nature, solution(s) 두 단어를 반드시 포함 / 10단어 이내의 완전한 문장 / 철자·어법 오류 없을 것\n\n[지문] Plastic-eating mealworms, soil-cleaning willow trees, and algae that turn coffee waste into fuel all show that the answers to our environmental problems may already exist in nature. These natural helpers are cheap and rarely create new pollution.',
    model: 'Nature offers low-cost solutions to environmental problems. (7단어)',
    rubric: ['nature와 solution(s)를 모두 포함 (1점)', '"자연이 환경 문제의 해법을 제공한다"는 주제를 정확히 담음 (2점)', '10단어 이내의 완전한 문장(주어+동사) (1점)', '철자·어법 오류 없음 (1점)']
  });

  L.push({
    type: T_ESSAY, kind: 'essay', pts: 5,
    stem: '우리말 해석을 보고 〈보기〉의 단어를 활용하여 영작하시오.\n〈조건〉 접속사 Because로 시작할 것 / 단어 추가·변형 불가\n〈보기〉 because / willow trees / have / deep roots / they / can absorb / harmful materials / from the soil\n⇒ 버드나무는 뿌리가 깊기 때문에 흙에서 해로운 물질을 흡수할 수 있다.',
    model: 'Because willow trees have deep roots, they can absorb harmful materials from the soil.',
    rubric: ['Because + 주어 + 동사 부사절을 바르게 구성 (2점)', '주절 they can absorb harmful materials from the soil (2점)', '쉼표·대문자·마침표 정확 (1점)']
  });

  window.addQ('eng', L);
})();

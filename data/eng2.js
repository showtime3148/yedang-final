/* 공통영어 - 기말 예상문제 추가분(2): (추정) 교과서 '한국 문화 속 호랑이'·'자연에서 찾은 환경 해법' + 외부 지문(모의고사·부교재형). 지문은 모두 창작 */
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
  const S_GRAM = '다음 글의 밑줄 친 부분([ ]) 중, 어법상 틀린 것은?';
  const S_VOCAB = '다음 글의 밑줄 친 부분([ ]) 중, 문맥상 낱말의 쓰임이 적절하지 않은 것은?';
  const S_INS = '글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳은?';
  const S_IRR = '다음 글에서 전체 흐름과 관계없는 문장은?';
  const S_ORDER = '주어진 글 다음에 이어질 글의 순서로 가장 적절한 것은?';
  const S_SUM = '다음 글의 내용을 한 문장으로 요약하고자 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?';
  const S_BLANK = '다음 글의 빈칸에 들어갈 말로 가장 적절한 것은?';

  const L = [];

  /* =========================================================
     교과서 단원 ① 한국 문화 속 호랑이 — 새 각도(단군 신화, 해님 달님, 작호도 풍자, 산신, 지도, 속담 등)
     ========================================================= */
  L.push({
    type: T_TOPIC, pts: 2.8, level: 1,
    passage: `According to the founding myth of Gojoseon, a bear and a tiger once prayed to Hwanung, the son of the king of heaven, to become human. He gave them a bundle of mugwort and twenty cloves of garlic and told them to stay out of the sunlight for one hundred days. The bear endured the dark cave and the bitter food, and it became a woman. The tiger, however, could not bear the hunger and ran out of the cave. Interestingly, failing this test did not turn the tiger into a villain in Korean culture. Instead, it went on to appear in countless stories as a powerful, proud, and sometimes funny figure. The bear became an ancestor, but the tiger became something else: a lasting companion in the Korean imagination.`,
    stem: '다음 글의 제목으로 가장 적절한 것은?',
    choices: [
      `How Garlic and Mugwort Became Korean Foods`,
      `The Bear: The Only Animal Respected in Korea`,
      `The Tiger Who Lost the Test but Stayed in Korean Stories`,
      `Hwanung's Journey from Heaven to Earth`,
      `Tigers and Bears: Natural Enemies in the Wild`
    ], ans: 3,
    explain: `단군 신화에서 호랑이는 시험에 실패했지만 악당이 되지 않고 이후 수많은 이야기 속에서 한국인의 상상 속 동반자로 남았다는 것이 글의 핵심이므로 ③이 제목으로 적절하다. ① 쑥과 마늘의 음식화, ② 곰만 존중받았다는 내용, ④ 환웅의 여정, ⑤ 야생에서의 천적 관계는 글의 중심이 아니다.`
  });

  L.push({
    type: T_GRAM, pts: 2.8, level: 1, posChoices: true,
    passage: `In the folktale of the sun and the moon, a hungry tiger meets a mother ①[who is returning] home with rice cakes. The tiger keeps ②[to ask] for rice cakes until she has none left, and then it eats her. Disguised as the mother, the tiger goes to the house ③[where] her son and daughter are waiting. The children notice its rough, hairy hand and escape by ④[climbing] a tall tree. When they pray to heaven, a strong rope comes down, and they ⑤[are lifted] into the sky to become the sun and the moon.`,
    stem: S_GRAM,
    choices: P.slice(), ans: 2,
    explain: `keep은 동명사를 목적어로 취하므로 ② to ask를 asking으로 고쳐야 한다(keep -ing: 계속 ~하다). ① a mother를 꾸미는 관계절의 진행형, ③ 장소 선행사 the house를 받는 관계부사 where, ④ 전치사 by 뒤의 동명사, ⑤ 아이들이 하늘로 "들어 올려지는" 것이므로 수동태로 모두 옳다.`
  });

  L.push({
    type: T_VOCAB, pts: 3.2, level: 2, posChoices: true,
    passage: `In a type of folk painting called jakhodo, a tiger sits under a pine tree while a magpie perches on a branch above it. Each animal carries a ①[meaning]. The magpie was believed to bring good news, and the tiger was thought to ②[drive away] evil spirits. Together, they made the painting a popular New Year's gift. Some scholars also see a hidden joke in it: the tiger, often drawn with a ③[silly] face, may stand for powerful officials, while the small magpie stands for ordinary people. In this reading, the painting allowed common people to ④[praise] those in power without saying a word. Such humor made the paintings even more ⑤[beloved].`,
    stem: S_VOCAB,
    choices: P.slice(), ans: 4,
    explain: `우스꽝스러운 얼굴의 호랑이가 권력자를, 작은 까치가 서민을 상징한다는 "숨은 농담(hidden joke)" 해석이므로, 그림은 서민들이 말없이 권력자를 "놀리게(mock, laugh at)" 해 주었다는 흐름이 되어야 한다. 따라서 ④ praise(칭찬하다)는 적절하지 않다. ① 각 동물의 의미, ② 악귀를 쫓아냄, ③ 우스꽝스러운 얼굴, ⑤ 유머 덕분에 더 사랑받음은 모두 자연스럽다.`
  });

  L.push({
    type: T_BLANK, pts: 2.8, level: 1,
    passage: `Many Korean folktales begin with the phrase "Long, long ago, when tigers smoked pipes." Of course, no one ever believed that tigers really smoked. The phrase works as a signal to the listener: what follows is ______________. Just as English stories begin with "Once upon a time," this opening tells children to relax, put aside the rules of the real world, and enter a place where animals talk and ropes fall from the sky. In just a few words, the storyteller moves the audience from everyday life into a world of imagination.`,
    stem: S_BLANK,
    choices: [
      `a true account of how tigers once lived`,
      `a warning about the dangers of smoking`,
      `a lesson about respecting older people`,
      `a description of an ancient hunting custom`,
      `a story set in an imaginary time long past`
    ], ans: 5,
    explain: `"호랑이 담배 피우던 시절"이라는 첫머리는 영어의 "Once upon a time"처럼 현실의 규칙을 내려놓고 동물이 말하는 상상의 세계로 들어가라는 신호이다. 따라서 뒤따르는 것은 "아주 먼 옛날 상상 속 시간을 배경으로 한 이야기"(⑤)이다. ①은 아무도 실제로 믿지 않았다는 내용과 반대이고, ②③④는 글에 근거가 없다.`
  });

  L.push({
    type: T_INFO, pts: 2.8, level: 1,
    passage: `2026 Minhwa Tiger Workshop\nJoin us to paint your own lucky tiger in the traditional Korean folk painting style!\n• Date: Saturday, December 12, 10:00 a.m. – 1:00 p.m.\n• Place: Riverside Community Arts Center, Room 2\n• Who: Students aged 13 to 18 (no painting experience needed)\n• Fee: 10,000 won (all materials included)\n• Program: A 30-minute talk on the meaning of tigers in folk paintings, followed by painting practice\n• Registration: Online only, by December 5. Space is limited to 20 participants.\n※ Finished paintings will be displayed in the center's lobby for two weeks.`,
    stem: '다음 안내문의 내용과 일치하지 않는 것은?',
    choices: [
      '토요일 오전 10시부터 오후 1시까지 진행된다.',
      '그림을 그려 본 경험이 없어도 참가할 수 있다.',
      '참가비에 재료비가 포함되어 있다.',
      '행사 당일 현장에서도 참가 신청을 할 수 있다.',
      '완성된 작품은 2주 동안 센터 로비에 전시된다.'
    ], ans: 4,
    explain: `신청은 12월 5일까지 온라인으로만(Online only) 받는다고 했으므로 ④는 일치하지 않는다. ①은 Date, ②는 no painting experience needed, ③은 all materials included, ⑤는 displayed in the center's lobby for two weeks와 일치한다.`
  });

  L.push({
    type: T_ORDER, pts: 3.2, level: 2,
    passage: `In the early 1900s, a Japanese geologist described the shape of the Korean Peninsula as a rabbit standing on its hind legs.\n\n(A) His powerful tiger quickly spread through maps and posters, and it is still used today in many images that express national pride.\n(B) In response, the Korean writer Choe Nam-seon drew a very different picture. To him, the peninsula looked like a fierce tiger rising up and leaping toward the Asian mainland.\n(C) This image suggested that Korea was small and timid, an idea that fit well with Japan's plan to rule the country.`,
    stem: S_ORDER,
    order: ['C', 'B', 'A'],
    explain: `한반도를 토끼에 비유한 일본 지질학자 → (C) 이 이미지(This image)는 한국이 작고 겁이 많다는 인상을 주어 식민 지배 의도에 들어맞음 → (B) 이에 대응하여(In response) 최남선이 대륙을 향해 뛰어오르는 호랑이로 그림 → (A) 그의(His) 힘찬 호랑이 그림이 널리 퍼져 지금도 쓰임. 따라서 (C)-(B)-(A)이다.`
  });

  L.push({
    type: T_INS, pts: 3.2, level: 2, posChoices: true,
    box: `Beside him, there is almost always a tiger.`,
    boxTitle: '주어진 문장',
    passage: `If you visit a Buddhist temple in Korea, you may find a small shrine behind the main hall. ( ① ) Inside hangs a painting of an old man with a long white beard, known as the mountain spirit. ( ② ) The animal is not a threat to the old man; it is his loyal messenger and guardian. ( ③ ) This unusual pairing shows how Buddhism blended with older Korean beliefs that honored mountains. ( ④ ) Long before Buddhism arrived, people believed that each mountain had its own spirit and that tigers served it. ( ⑤ ) By welcoming this spirit into the temple, Buddhism made itself feel familiar to local people.`,
    stem: S_INS,
    choices: P.slice(), ans: 2,
    explain: `주어진 문장의 him은 ① 뒤 문장의 an old man(산신)을 가리키고, ② 뒤 문장의 The animal은 주어진 문장의 a tiger를 받는다. 따라서 산신 그림 소개와 "그 동물은 위협이 아니라 충실한 심부름꾼"이라는 설명 사이인 ②가 적절하다.`
  });

  L.push({
    type: T_IRR, pts: 2.8, level: 1, posChoices: true,
    passage: `Korean has many proverbs about tigers, and they reveal how people thought about the animal. ① Tigers are excellent swimmers, and unlike most cats, they often seem to enjoy being in water. ② "Even a tiger comes when you talk about it" warns people to be careful when speaking about someone who is not present. ③ "You must enter the tiger's den to catch a tiger cub" teaches that great rewards require great risks. ④ "Even if a tiger carries you off, you can survive if you keep your wits" encourages people to stay calm in a crisis. ⑤ Together, these sayings show that the tiger was both a symbol of danger and a teacher of practical wisdom.`,
    stem: S_IRR,
    choices: P.slice(), ans: 1,
    explain: `글은 호랑이 속담들을 통해 사람들이 호랑이를 어떻게 생각했는지(위험의 상징이자 삶의 지혜) 보여 준다. ① 호랑이가 수영을 잘한다는 생물학적 사실은 속담과 관계가 없다.`
  });

  L.push({
    type: T_MEAN, pts: 3, level: 1,
    passage: `For centuries, the tiger lived in Korea's mountains and in the stories told about them. Grandmothers used it to scare children into bed, and painters hung it on doors to block bad luck. Today, you are more likely to meet a tiger on a soccer jersey, in a webtoon, or on the packaging of a snack. The animal itself no longer roams the forests of South Korea, but its image is busier than ever, selling products, cheering on athletes, and starring in animated films watched around the world. It is as if the tiger has finally come down from the mountain and moved into the city.`,
    stem: '밑줄 친 "the tiger has finally come down from the mountain and moved into the city"가 다음 글에서 의미하는 바로 가장 적절한 것은?',
    choices: [
      `Wild tigers have started to appear in Korean cities.`,
      `The tiger's image has moved from traditional settings into modern everyday culture.`,
      `People have stopped telling folktales about tigers.`,
      `Tigers are now protected in city zoos instead of forests.`,
      `Modern Koreans fear tigers more than their ancestors did.`
    ], ans: 2,
    explain: `옛날에는 산과 옛이야기·문 위의 그림 속에 있던 호랑이가 오늘날에는 유니폼, 웹툰, 과자 포장, 애니메이션 등 현대 일상 문화 속에서 활발히 쓰인다는 뜻이므로 ②가 적절하다. ①④는 실제 호랑이에 대한 이야기로 글의 비유를 잘못 이해한 것이다(실제 호랑이는 더 이상 숲을 돌아다니지 않는다).`
  });

  L.push({
    type: T_SUM, pts: 3.2, level: 2,
    passage: `In the past, people living near Korea's mountains rarely called a tiger by its ordinary name. Instead, they used respectful titles such as "the mountain lord" or "the old man of the mountain." They feared that speaking its name aloud might invite the animal into their village, so they chose words that showed honor instead of hostility. This habit reveals something important about how language and fear are connected. When people face a danger they cannot control, they often try to manage their relationship with it through words, treating the threat almost like a powerful neighbor whose goodwill must be kept.\n\n→ Villagers avoided the tiger's name and used ___(A)___ titles, showing that people may use language to ___(B)___ a danger that is beyond their control.`,
    stem: S_SUM,
    choices: [
      `funny — ignore`,
      `respectful — eliminate`,
      `frightening — celebrate`,
      `scientific — cope with`,
      `respectful — cope with`
    ], ans: 5,
    explain: `마을 사람들은 "산군", "산신령" 같은 존경의 호칭(respectful titles)을 썼고, 통제할 수 없는 위험과의 관계를 말로 다스리려 했다. 즉 언어로 위험에 "대처한다(cope with)"는 뜻이므로 ⑤가 정답이다. ② eliminate(없애다)는 위험을 제거하는 것이 아니라 관계를 관리한다는 글의 내용과 맞지 않는다.`
  });

  L.push({
    type: T_GRAM, pts: 3, level: 1, posChoices: true,
    passage: `The Korean national football team ①[is often called] the "Taeguk Warriors," but the emblem on its uniform shows a tiger. The animal was chosen because it ②[represents] courage and strength. On match days, thousands of fans ③[wearing] tiger-print scarves fill the stadium, and the sound of their cheering ④[travel] far beyond it. For the players, the tiger on their chest is a reminder of the people ⑤[who] support them.`,
    stem: S_GRAM,
    choices: P.slice(), ans: 4,
    explain: `④의 주어는 the sound(단수)이고 of their cheering은 수식어이므로 travel을 travels로 고쳐야 한다. ① 팀이 "불리는" 것이므로 수동태, ② 주어 it(단수)에 맞는 represents, ③ fans를 꾸미는 현재분사(스카프를 "두른"), ⑤ 사람 선행사 the people을 받는 주격 관계대명사로 모두 옳다.`
  });

  L.push({
    type: T_INFO, pts: 2.8, level: 1,
    passage: `Oh Bok-soon, a storyteller from a small village in Gangwon-do, has been telling tiger tales for more than fifty years. She learned most of her stories from her grandmother, who could not read but remembered hundreds of tales by heart. Oh began performing in public only after she turned sixty, when a local library invited her to tell stories to children. Since then, she has visited over three hundred schools. She never uses a book or slides; instead, she changes her voice for each character and lets the children roar like tigers. In 2024, a collection of her stories was recorded and released as a free audiobook so that the tales would not be lost.`,
    stem: '다음 글의 내용과 일치하는 것은?',
    choices: [
      '할머니에게서 글을 배워 이야기를 기록했다.',
      '젊은 시절부터 대중 앞에서 공연했다.',
      '300곳이 넘는 학교를 방문했다.',
      '공연할 때 책과 슬라이드를 활용한다.',
      '2024년에 그녀의 이야기 모음이 유료 오디오북으로 출시되었다.'
    ], ans: 3,
    explain: `she has visited over three hundred schools와 일치하므로 ③이 정답이다. ① 할머니는 글을 읽지 못했고, ② 60세가 넘어서야 공개 공연을 시작했으며, ④ 책이나 슬라이드를 쓰지 않고, ⑤ 무료(free) 오디오북으로 공개되었다.`
  });

  /* =========================================================
     교과서 단원 ② 자연에서 찾은 환경 해법 — 새 각도(생체모방, 왁스웜, 해바라기, 균사체, 흰개미, 연잎, 비버, 해초, 플라스틱 분해 세균 등)
     ========================================================= */
  L.push({
    type: T_TOPIC, pts: 2.8, level: 1,
    passage: `In 1941, a Swiss engineer named George de Mestral came home from a walk in the mountains and noticed that tiny seed heads called burrs were stuck to his clothes and his dog's fur. Curious, he looked at them under a microscope and saw hundreds of tiny hooks that caught on loops of thread and hair. This simple observation led him to invent Velcro, a fastener now used on shoes, bags, and even spacesuits. His story is one example of biomimicry, the practice of solving human problems by copying designs found in nature. Plants and animals have had millions of years to test their designs, so studying them can save us a great deal of trial and error.`,
    stem: '다음 글의 주제로 가장 적절한 것은?',
    choices: [
      `the dangers of plant seeds to pets`,
      `how copying nature's designs can lead to useful inventions`,
      `the history of space exploration technology`,
      `why engineers should spend more time in the mountains`,
      `the difficulty of using microscopes in the 1940s`
    ], ans: 2,
    explain: `우엉 씨앗(burr)의 갈고리 구조를 보고 벨크로를 발명한 사례를 통해, 자연의 설계를 모방해 문제를 해결하는 생체모방(biomimicry)의 가치를 설명하므로 ②가 주제이다. ③ 우주복은 벨크로가 쓰이는 예일 뿐이고, ④는 지엽적인 소재를 잘못 일반화한 것이다.`
  });

  L.push({
    type: T_BLANK, pts: 3.2, level: 2,
    passage: `When Japan's high-speed bullet trains first raced into tunnels, they pushed a wall of air ahead of them. As the trains came out the other side, this air burst out with a loud boom that disturbed people living nearby. An engineer who was also a bird watcher found the answer in the kingfisher. This bird dives from the air into water to catch fish, yet it barely makes a splash. Its long, narrow beak lets it ______________. When the train's nose was redesigned to look like the kingfisher's beak, the boom disappeared, and the train also used less electricity while running faster.`,
    stem: S_BLANK,
    choices: [
      `catch more fish than other birds`,
      `warn other birds of approaching danger`,
      `stay warm in cold river water`,
      `pass smoothly from air into denser water`,
      `make loud calls that travel far`
    ], ans: 4,
    explain: `문제는 열차가 공기(좁은 터널)를 밀어내며 생기는 굉음이었고, 물총새는 물보라를 거의 일으키지 않고 공기에서 물속으로 들어간다. 따라서 부리 덕분에 "공기에서 밀도가 높은 물속으로 매끄럽게 지나갈 수 있다"(④)가 들어가야 열차 앞부분 설계와 연결된다. ① 물고기를 더 많이 잡는 능력은 소음 문제 해결과 관계가 없다.`
  });

  L.push({
    type: T_GRAM, pts: 3.2, level: 2, posChoices: true,
    passage: `In 2017, a scientist who keeps bees as a hobby ①[made] a surprising discovery. While cleaning her beehives, she removed some wax worms, the larvae of a moth ②[that] feeds on beeswax, and put them in a plastic shopping bag. A short time later, she found the bag ③[covering] with holes. Further research showed that the worms ④[could break] down polyethylene, one of the most common plastics. Scientists now hope that substances found in the worms' saliva can ⑤[be used] to develop new ways of recycling plastic.`,
    stem: S_GRAM,
    choices: P.slice(), ans: 3,
    explain: `find + 목적어 + 목적격 보어에서 가방(the bag)은 구멍으로 "뒤덮인" 상태이므로 ③ covering을 과거분사 covered로 고쳐야 한다(be covered with). ① 과거의 일이므로 made, ② a moth를 받는 주격 관계대명사 that(feeds와 수 일치), ④ 조동사 + 동사원형, ⑤ 물질이 "사용되는" 것이므로 수동태 be used로 모두 옳다.`
  });

  L.push({
    type: T_VOCAB, pts: 3.2, level: 2, posChoices: true,
    passage: `After the 1986 nuclear accident at Chernobyl, scientists needed a way to clean radioactive substances from nearby ponds. Using machines would have been ①[cheap] and dangerous for workers, so they tried a natural method instead. They floated rafts of sunflowers on the water. The plants' roots ②[absorbed] radioactive elements such as cesium and strontium along with the water. Within weeks, the level of these substances in the pond had dropped ③[sharply]. The sunflowers were later removed and ④[disposed of] safely, carrying the pollution with them. This method, called phytoremediation, shows that plants can ⑤[collect] harmful substances that people find hard to handle.`,
    stem: S_VOCAB,
    choices: P.slice(), ans: 1,
    explain: `기계를 쓰는 방법이 "비싸고(costly, expensive)" 작업자에게 위험했기 때문에 대신(instead) 자연적인 방법을 택했다는 흐름이므로 ① cheap(값싼)은 적절하지 않다. ② 뿌리가 방사성 물질을 흡수, ③ 수치가 급격히 떨어짐, ④ 해바라기를 안전하게 처리, ⑤ 식물이 유해 물질을 모음은 모두 자연스럽다.`
  });

  L.push({
    type: T_ORDER, pts: 3, level: 1,
    passage: `Plastic foam is used to protect everything from TVs to wine bottles during shipping, but it can take hundreds of years to break down.\n\n(A) The result is a light, strong packaging material that looks a little like foam. After use, it can simply be broken up and added to a garden, where it breaks down within about two months.\n(B) Some companies have found a surprising replacement: mushrooms. More precisely, they use mycelium, the network of thin, root-like threads that mushrooms grow underground.\n(C) Farm waste such as corn stalks is placed in a mold, and the mycelium is allowed to grow through it, binding the pieces together. The mold is then heated to stop the growth.`,
    stem: S_ORDER,
    order: ['B', 'C', 'A'],
    explain: `플라스틱 폼은 분해에 수백 년이 걸린다 → (B) 놀라운 대체물: 버섯의 균사체 → (C) 농업 폐기물을 틀에 넣고 균사체를 자라게 해 조각들을 묶은 뒤 가열해 성장을 멈춤 → (A) 그 결과물(The result)은 가볍고 튼튼한 포장재이며 정원에서 분해됨. 따라서 (B)-(C)-(A)이다.`
  });

  L.push({
    type: T_INS, pts: 3.6, level: 3, posChoices: true,
    box: `Yet the temperature inside the mound stays almost the same all day.`,
    boxTitle: '주어진 문장',
    passage: `In parts of Africa, termites build mounds that can rise several meters high. ( ① ) The mounds are made of soil mixed with the termites' saliva, which makes them surprisingly hard. ( ② ) The termites grow a fungus inside for food, and the fungus can survive only within a narrow range of temperatures. ( ③ ) Outside the mound, however, the air can heat up to over 40°C at noon and cool down sharply at night. ( ④ ) The secret lies in a network of tunnels that lets hot air rise and escape through the top while cooler air is drawn in from below. ( ⑤ ) An architect borrowed this idea when he designed an office building in Zimbabwe. Without traditional air-conditioning, it stays comfortable and uses far less energy than similar buildings.`,
    stem: S_INS,
    choices: P.slice(), ans: 4,
    explain: `주어진 문장은 Yet으로 시작해 "바깥 기온은 크게 오르내리지만 내부 온도는 거의 일정하다"는 대조를 나타낸다. 따라서 바깥의 큰 일교차를 말한 문장 뒤, 그리고 그 비밀(The secret)을 설명하는 문장 앞인 ④가 적절하다. The secret은 "온도가 일정하게 유지되는 비밀"이므로 주어진 문장이 먼저 나와야 한다.`
  });

  L.push({
    type: T_IRR, pts: 3, level: 1, posChoices: true,
    passage: `The leaves of the lotus plant stay clean even though the plant grows in muddy water. ① Under a microscope, the surface of a lotus leaf is covered with tiny bumps coated in wax. ② Because of these bumps, water drops cannot spread out; instead, they form round beads and roll off. ③ As they roll, the drops pick up dust and dirt, cleaning the leaf as they go. ④ Inspired by this, scientists have created self-cleaning paints and glass that need far less washing with water and chemicals. ⑤ In many Asian countries, the lotus is also a popular symbol in religious art and poetry.`,
    stem: S_IRR,
    choices: P.slice(), ans: 5,
    explain: `글은 연잎 표면의 미세 돌기가 물방울을 굴려 스스로 깨끗해지는 원리와 이를 모방한 자가 세정 기술을 설명한다. ⑤ 연꽃이 종교 예술과 시의 상징이라는 내용은 이 흐름과 관계가 없다.`
  });

  L.push({
    type: T_MEAN, pts: 3.2, level: 2,
    passage: `For years, a village in England suffered from floods every time heavy rain fell on the hills above it. Engineers proposed building expensive concrete walls. Instead, a family of beavers was released into a fenced area upstream. Within a few years, the beavers had built a series of dams that held back water and released it slowly, and the floods downstream became smaller. The beavers also created ponds where frogs, insects, and birds returned. The lesson is not that animals can replace engineers in every case. It is that sometimes the best solution is already alive and waiting: we do not always need to build it — we need to stop standing in its way.`,
    stem: '밑줄 친 "we need to stop standing in its way"가 다음 글에서 의미하는 바로 가장 적절한 것은?',
    choices: [
      `We should remove natural barriers that slow down rivers.`,
      `We should keep wild animals away from human towns.`,
      `We should let engineers make all decisions about floods.`,
      `We should build higher walls to stop rising water.`,
      `We should give natural processes room to work instead of blocking them.`
    ], ans: 5,
    explain: `비버가 만든 댐이 홍수를 줄이고 생태계를 되살렸듯, 해결책이 이미 자연 속에 있으므로 우리가 그것을 방해하지 말고 자연이 일할 여지를 주어야 한다는 뜻이다(⑤). ① 비버 댐처럼 물을 늦추는 자연적 장벽은 오히려 해결책이었고, ④는 글에서 대안으로 제시된 콘크리트 벽과 같은 방식이다.`
  });

  L.push({
    type: T_SUM, pts: 3.2, level: 2,
    passage: `Seagrass meadows cover only a tiny portion of the ocean floor, yet they are among the most powerful carbon stores on Earth. Like forests on land, seagrasses take in carbon dioxide as they grow. But unlike trees, which release much of their stored carbon when they die and decay, seagrasses trap carbon in the muddy seabed, where low oxygen levels keep it from breaking down for centuries. Unfortunately, these meadows are disappearing because of coastal development and polluted water. When they are destroyed, the carbon locked in the mud can escape back into the water and air. Protecting seagrass, therefore, is not only about saving sea life; it is also a cheap and effective way to fight climate change.\n\n→ Although seagrass meadows are ___(A)___ in area, they lock away carbon for a long time, so ___(B)___ them can be an effective climate strategy.`,
    stem: S_SUM,
    choices: [
      `small — preserving`,
      `huge — preserving`,
      `small — harvesting`,
      `limited — draining`,
      `enormous — replacing`
    ], ans: 1,
    explain: `해초지는 해저의 아주 작은 부분(a tiny portion)만 차지하지만(small) 탄소를 수백 년 동안 가두므로, 해초지를 보호하는 것(preserving)이 기후 대응 전략이 된다. 따라서 ①이다. ③ harvesting(수확), ④ draining(물을 빼냄)은 해초지를 파괴해 탄소를 다시 내보내는 행동이다.`
  });

  L.push({
    type: T_INFO, pts: 2.8, level: 1,
    passage: `Green Grounds Campaign\nDon't throw away your used coffee grounds! Our school environment club is collecting them to make natural fertilizer for the school garden.\n• Period: November 30 – December 18\n• Collection boxes: In front of the library and the cafeteria\n• How to participate: Dry the grounds completely before bringing them, and put them in a paper bag. Plastic bags will not be accepted.\n• Reward: Students who bring five bags or more will receive a small pot of herbs grown in our garden.\n• Note: Teachers and parents are also welcome to join.\nFor more information, visit the environment club room (Room 305) during lunch.`,
    stem: '다음 안내문의 내용과 일치하는 것은?',
    choices: [
      '수거함은 도서관 앞과 강당 앞에 있다.',
      '커피 찌꺼기는 젖은 상태로 가져와도 된다.',
      '커피 찌꺼기는 비닐봉지에 담아 가져와야 한다.',
      '다섯 봉지 이상 가져온 학생은 허브 화분을 받는다.',
      '학생만 캠페인에 참여할 수 있다.'
    ], ans: 4,
    explain: `Students who bring five bags or more will receive a small pot of herbs와 일치하므로 ④가 정답이다. ① 수거함은 도서관과 급식실(cafeteria) 앞, ② 완전히 말려서(Dry ~ completely) 가져와야 하고, ③ 종이봉투에 담아야 하며 비닐봉지는 받지 않고, ⑤ 교사와 학부모도 참여할 수 있다.`
  });

  L.push({
    type: T_ORDER, pts: 3.2, level: 2,
    passage: `In 2016, a group of Japanese scientists collected samples of soil and sludge outside a plastic bottle recycling plant.\n\n(A) Among the many microbes they found, one kind of bacteria stood out. It was living on bits of PET, the plastic used to make drink bottles, and slowly breaking it down to use as food.\n(B) This bacterium works too slowly to solve the plastic problem on its own. However, scientists have since improved the enzymes it produces, hoping to turn old bottles back into material for new ones.\n(C) Their idea was simple: if any living thing had learned to feed on plastic, it would most likely be found in a place full of plastic waste.`,
    stem: S_ORDER,
    order: ['C', 'A', 'B'],
    explain: `재활용 공장 밖에서 시료를 채취함 → (C) 그들의(Their) 생각: 플라스틱을 먹는 생물이 있다면 플라스틱 쓰레기가 많은 곳에 있을 것 → (A) 많은 미생물 중 PET를 분해해 먹는 세균 하나가 눈에 띔 → (B) 이 세균(This bacterium)은 너무 느리지만 과학자들이 효소를 개량함. 따라서 (C)-(A)-(B)이다.`
  });

  L.push({
    type: T_BLANK, pts: 3.6, level: 3,
    passage: `In 1935, sugarcane farmers in Australia faced a serious pest: beetles that destroyed their crops. Hoping for a natural solution, they brought in about a hundred cane toads from abroad, believing the toads would eat the beetles. The plan failed badly. The beetles lived high on the cane stalks, out of the toads' reach, so the toads ate almost everything else instead. With few natural enemies and a poison that killed animals that tried to eat them, the toads spread across a huge area of the country, and today they number in the millions. The story is a warning that a solution taken from nature is not automatically safe: ______________.`,
    stem: S_BLANK,
    choices: [
      `natural solutions always work better than chemical ones`,
      `farmers should never grow sugarcane in hot regions`,
      `pests can be removed only by bringing in more animals`,
      `toads are more dangerous than any other animal`,
      `its effects in a new environment must be studied carefully first`
    ], ans: 5,
    explain: `해충을 없애려고 들여온 수수두꺼비가 정작 딱정벌레는 먹지 못하고 생태계를 교란한 사례이다. "자연에서 가져온 해결책도 자동으로 안전한 것은 아니다"에 이어질 말은 "새로운 환경에서의 영향을 먼저 신중히 연구해야 한다"(⑤)이다. ①은 글의 경고와 반대이고, ③은 실패한 방식을 반복하는 것이며, ④는 지나친 일반화이다.`
  });

  L.push({
    type: T_TOPIC, pts: 3.2, level: 2,
    passage: `For most of history, people looked at nature and asked, "What can we take?" We cut down trees for wood, dug up the ground for fuel, and caught fish until some seas were nearly empty. Today, a growing number of scientists are asking a different question: "What can we learn?" A spider makes silk that is, for its weight, stronger than steel, and it does so at room temperature using only water and the insects it eats. A leaf turns sunlight into energy without producing any harmful waste. If we could understand how these things work, we might make materials and energy far more cleanly than we do now. Nature, in this view, is not a warehouse of resources but a library of ideas.`,
    stem: '다음 글의 제목으로 가장 적절한 것은?',
    choices: [
      `Why Spiders Are Dangerous to Insects`,
      `The End of Fishing in the Modern World`,
      `How to Build Stronger Steel Bridges`,
      `Nature: From a Storehouse to a School`,
      `Taking More from Nature to Grow Faster`
    ], ans: 4,
    explain: `자연을 "무엇을 가져갈까"의 대상(자원 창고)에서 "무엇을 배울까"의 대상(아이디어의 도서관)으로 보는 관점의 전환이 핵심이므로 ④가 제목으로 적절하다. ⑤는 글쓴이가 넘어서자고 한 과거의 관점이고, ①②③은 예시의 일부만 다룬다.`
  });

  L.push({
    type: T_GRAM, pts: 3.6, level: 3, posChoices: true,
    passage: `Each year, billions of plastic spoons and forks ①[are thrown] away after being used for only a few minutes. To reduce this waste, some companies now make cutlery ②[that] people can eat after their meal. These spoons are made from flour, rice, and other grains, and they stay firm long enough ③[to finish] a bowl of hot soup. What ④[makes] them especially attractive is that even if they are thrown away, they break down within days. However, the number of people who actually use them ⑤[remain] small because they cost more than plastic ones.`,
    stem: S_GRAM,
    choices: P.slice(), ans: 5,
    explain: `"the number of + 복수 명사"는 "~의 수"라는 뜻으로 단수 취급하므로 ⑤ remain을 remains로 고쳐야 한다(a number of + 복수 명사는 복수 취급). ① 숟가락이 "버려지는" 것이므로 수동태, ② cutlery를 받는 목적격 관계대명사, ③ 형용사 + enough + to부정사, ④ 관계대명사 What이 이끄는 절은 단수 취급하므로 makes로 모두 옳다.`
  });

  /* =========================================================
     외부 지문(모의고사·부교재형) — 심리·사회·과학·환경·윤리 소재 (창작)
     ========================================================= */
  L.push({
    type: T_TOPIC, pts: 2.8, level: 1,
    passage: `Why do people value a bookshelf they put together themselves more than an identical one that came already built? Researchers call this the IKEA effect. In one experiment, people who folded paper cranes and frogs were willing to pay almost as much for their own clumsy creations as for ones made by experts, while other people saw the amateur work as nearly worthless. The effort we put into something seems to make it more meaningful to us. However, this effect has a limit: when people failed to complete the task, the extra value disappeared. Effort makes us love what we make, but only when that effort leads to success.`,
    stem: '다음 글의 주제로 가장 적절한 것은?',
    choices: [
      `why we value things more when we successfully make them ourselves`,
      `the reasons experts make better products than amateurs`,
      `the growing popularity of furniture that comes unassembled`,
      `how paper folding improves concentration`,
      `the importance of buying products at fair prices`
    ], ans: 1,
    explain: `직접 만든 물건을 더 가치 있게 여기는 "이케아 효과"와, 그 효과가 과제를 완성했을 때만 나타난다는 한계를 설명하므로 ①이 주제이다. ②는 전문가 작품이 더 낫다는 내용으로 글의 초점이 아니고, ③④⑤는 글에 근거가 없다.`
  });

  L.push({
    type: T_TOPIC, pts: 3.2, level: 2,
    passage: `Many students take notes on laptops because they can type almost as fast as the teacher speaks. That speed, however, may be a disadvantage. In one well-known study, students who typed their notes tended to copy the lecture word for word, while students who wrote by hand could not keep up and had to choose what was important and put it in their own words. When tested later on the ideas of the lecture, the handwriting group often did better. The slower process forced them to think while they wrote. Taking notes, in other words, is valuable not because it records everything but because it makes us decide what matters.`,
    stem: '다음 글의 요지로 가장 적절한 것은?',
    choices: [
      '노트북으로 필기하면 수업 내용을 더 많이 기억할 수 있다.',
      '손글씨는 타자보다 빠르므로 수업 시간에 더 효율적이다.',
      '필기의 가치는 모든 것을 기록하는 데 있지 않고 무엇이 중요한지 판단하며 생각하게 하는 데 있다.',
      '교사는 학생들이 필기를 따라올 수 있도록 말하는 속도를 늦춰야 한다.',
      '시험 성적은 필기 도구보다 학생의 타고난 능력에 달려 있다.'
    ], ans: 3,
    explain: `손으로 필기한 학생들은 속도가 느려 중요한 것을 골라 자기 말로 바꿔 써야 했고, 그 과정에서 생각을 하게 되어 개념 이해 시험에서 더 잘했다. 마지막 문장(in other words)이 요지로, ③과 같다. ①은 글과 반대, ② 손글씨는 오히려 더 느리다.`
  });

  L.push({
    type: T_TOPIC, pts: 3.2, level: 2,
    passage: `At a grocery store, researchers set up a table offering free samples of jam. On some days, the table displayed twenty-four flavors; on others, only six. The larger display attracted more visitors, but when it came to actually buying, the result was reversed: shoppers who saw six flavors were about ten times more likely to buy a jar. Having many options feels attractive, yet comparing them takes mental effort, and the fear of making the wrong choice grows with every extra option. As a result, people often walk away without choosing at all. More choice, it seems, can leave us not freer but more stuck.`,
    stem: '다음 글의 제목으로 가장 적절한 것은?',
    choices: [
      `Free Samples: The Secret to Higher Sales`,
      `Why Shoppers Prefer Sweet Flavors`,
      `The Pleasure of Comparing Products`,
      `How Stores Decide Which Jams to Sell`,
      `When More Options Lead to Fewer Decisions`
    ], ans: 5,
    explain: `선택지가 24가지일 때 더 많은 사람이 모였지만 실제 구매는 6가지일 때 훨씬 많았다. 선택지가 많으면 비교 부담과 잘못 고를까 하는 두려움 때문에 아예 선택하지 않게 된다는 내용이므로 ⑤가 제목이다. ① 무료 시식은 실험 장치일 뿐이고, ③은 비교가 정신적 노력을 요구한다는 글의 내용과 반대이다.`
  });

  L.push({
    type: T_BLANK, pts: 3.6, level: 3,
    passage: `When students prepare for a test, many of them reread their textbooks and highlight key sentences. These methods feel productive because the material starts to look familiar. But familiarity is not the same as knowledge. Recognizing an answer when you see it is much easier than producing it from memory, which is what a test actually demands. Research shows that students who close the book and try to recall what they have learned remember far more a week later, even though this practice feels harder and they make more mistakes along the way. In learning, the struggle to remember is not a sign that something is going wrong; it is ______________.`,
    stem: S_BLANK,
    choices: [
      `a signal that you should switch to easier material`,
      `the very thing that strengthens what you learn`,
      `evidence that rereading is the best strategy`,
      `a problem that only weaker students experience`,
      `proof that tests measure the wrong skills`
    ], ans: 2,
    explain: `책을 덮고 기억해 내려는 연습은 더 어렵고 실수도 많지만 일주일 뒤 훨씬 더 많이 기억하게 한다. 따라서 기억하려 애쓰는 과정은 잘못되고 있다는 신호가 아니라 "배운 것을 강화하는 바로 그것"(②)이다. ①은 not a sign that something is going wrong과 반대이고, ③ 다시 읽기는 글이 비판한 방법이다.`
  });

  L.push({
    type: T_BLANK, pts: 2.8, level: 1,
    passage: `The first time you hear a new song, you may not like it very much. But after hearing it on the radio a few more times, you might find yourself humming along and even enjoying it. Psychologists have found that this happens with faces, words, and images too: the more often we are exposed to something, the more we tend to like it, even if we do not remember seeing it before. One explanation is that familiar things are easier for the brain to process, and this ease feels pleasant. We then mistake that comfortable feeling for real liking. In other words, we often like things simply because ______________.`,
    stem: S_BLANK,
    choices: [
      `they are rare and hard to find`,
      `experts recommend them to us`,
      `we have met them many times before`,
      `they challenge the way we think`,
      `other people dislike them`
    ], ans: 3,
    explain: `자주 접할수록 더 좋아하게 되는 "단순 노출 효과"를 설명하는 글이다. 익숙한 것은 처리하기 쉬워 편안하게 느껴지고, 그것을 좋아함으로 착각한다. 따라서 "여러 번 접해 보았기 때문에"(③)가 적절하다. ① 드물고 찾기 어려운 것은 반대 개념이다.`
  });

  L.push({
    type: T_BLANK, pts: 3.6, level: 3,
    passage: `Imagine you paid for a concert ticket weeks ago, but on the day of the concert you feel sick and the weather is terrible. Many people would still go, saying, "I already paid for it." Yet the money is gone whether you go or not. The only real question is whether going will make your evening better or worse from now on. Economists call money, time, or effort that has already been spent and cannot be recovered a "sunk cost." Wise decisions look forward, not backward. Letting past investments control present choices means ______________.`,
    stem: S_BLANK,
    choices: [
      `adding a fresh loss on top of one that cannot be undone`,
      `making the most of what you have already paid for`,
      `respecting the effort of the people who sold the ticket`,
      `planning carefully for future concerts`,
      `saving money that you would otherwise waste`
    ], ans: 1,
    explain: `이미 쓴 돈(매몰 비용)은 가든 안 가든 돌아오지 않는다. 그런데도 아픈 몸으로 궂은 날씨에 공연에 가면 저녁 시간까지 망치게 되므로, 과거의 투자에 끌려다니는 것은 "되돌릴 수 없는 손실 위에 새로운 손실을 더하는 것"(①)이다. ②는 "본전을 뽑는다"는 사람들의 착각을 그대로 옮긴 오답이다.`
  });

  L.push({
    type: T_GRAM, pts: 3.6, level: 3, posChoices: true,
    passage: `In an emergency, you might expect that the more people ①[are] present, the more likely someone is to help. Surprisingly, the opposite is often true. When many people are watching, each person feels less responsible, ②[assumed] that someone else will act. People also watch one another to judge ③[whether] the situation is really serious. If everyone else seems calm, each person concludes that nothing is wrong, and no one ④[does] anything. So if you ever need help in a crowd, point to one specific person and ask that person ⑤[directly] for help.`,
    stem: S_GRAM,
    choices: P.slice(), ans: 2,
    explain: `②는 분사구문으로, 생략된 주어 each person이 "가정하는" 능동의 관계이므로 assumed를 현재분사 assuming으로 고쳐야 한다. ① the 비교급 ~, the 비교급 구문에서 주어 people(복수)에 맞는 are, ③ "~인지 아닌지"를 뜻하는 명사절 접속사 whether, ④ no one은 단수 취급하므로 does, ⑤ 동사 ask를 꾸미는 부사 directly로 모두 옳다.`
  });

  L.push({
    type: T_GRAM, pts: 3.2, level: 2, posChoices: true,
    passage: `New Caledonian crows are famous for their ability ①[making] tools. In the wild, they shape twigs into hooks to pull insects out of holes in trees. In a well-known experiment, a crow named Betty was given a straight piece of wire and a small bucket of food ②[placed] at the bottom of a tube. After ③[failing] to reach the food with the straight wire, she bent it into a hook and lifted the bucket out. What surprised the researchers most ④[was] that no one had ever taught her this. Such behavior suggests that some birds are far more intelligent than people once ⑤[thought].`,
    stem: S_GRAM,
    choices: P.slice(), ans: 1,
    explain: `ability는 to부정사의 수식을 받아 "~할 능력"을 나타내므로 ① making을 to make로 고쳐야 한다. ② 음식이 "놓인" 것이므로 과거분사 placed, ③ 전치사 After 뒤의 동명사, ④ What이 이끄는 명사절 주어는 단수 취급, ⑤ 과거의 생각이므로 thought로 모두 옳다.`
  });

  L.push({
    type: T_VOCAB, pts: 3.2, level: 2, posChoices: true,
    passage: `Imagine you are offered a coin toss: heads, you win $110; tails, you lose $100. Mathematically, this bet is ①[favorable], yet most people refuse it. The reason is that losses feel about twice as ②[weak] as gains of the same size. Psychologists call this tendency loss aversion. It explains why people often hold on to falling stocks, hoping to avoid ③[accepting] a loss, and why "Don't miss out!" is such an ④[effective] advertising message. Understanding this bias can help us notice when the fear of losing is ⑤[distorting] our judgment.`,
    stem: S_VOCAB,
    choices: P.slice(), ans: 2,
    explain: `수학적으로 유리한(favorable) 내기인데도 대부분이 거절하는 이유는 손실이 같은 크기의 이득보다 약 두 배 "강하게(powerful, strong)" 느껴지기 때문이다. 따라서 ② weak는 적절하지 않다. ③ 손실을 받아들이기를 피함, ④ "놓치지 마세요!"가 효과적인 광고 문구, ⑤ 두려움이 판단을 왜곡함은 모두 자연스럽다.`
  });

  L.push({
    type: T_VOCAB, pts: 3.6, level: 3, posChoices: true,
    passage: `Modern life constantly demands our attention. Reading emails, crossing busy streets, and ignoring nearby conversations all require focused, ①[effortful] attention, which gets tired with use. According to one theory, natural settings help this kind of attention ②[recover]. Trees, clouds, and flowing water hold our interest ③[gently], without forcing us to concentrate. While we look at them, the mental systems responsible for focus can ④[rest]. In one study, people who walked in a park performed better on an attention and memory test afterward than those who walked along a busy city street. It seems that the ⑤[noisier] and more demanding our surroundings are, the more refreshed our minds become.`,
    stem: S_VOCAB,
    choices: P.slice(), ans: 5,
    explain: `자연 환경은 억지로 집중하게 하지 않아 지친 주의력이 회복된다는 내용이다. 따라서 마지막 문장은 "환경이 더 조용하고(quieter) 덜 요구적일수록 마음이 더 상쾌해진다"가 되어야 하므로 ⑤ noisier는 적절하지 않다. 공원 산책 집단이 번잡한 도시 거리 산책 집단보다 시험을 더 잘 본 결과와도 반대이다.`
  });

  L.push({
    type: T_VOCAB, pts: 2.8, level: 1, posChoices: true,
    passage: `Many people believe they are good at multitasking, but the brain cannot truly focus on two demanding tasks at once. Instead, it ①[switches] rapidly between them. Each switch costs a little time and energy, and these costs ②[add up]. As a result, people who try to do several things at once usually work ③[faster] and make more mistakes than those who do one thing at a time. Interestingly, people who multitask the most are often the ④[worst] at filtering out distractions. The best way to get more done may be to do ⑤[less] at a time.`,
    stem: S_VOCAB,
    choices: P.slice(), ans: 3,
    explain: `작업 전환마다 시간과 에너지가 들고 그 비용이 쌓이므로(add up), 멀티태스킹을 하는 사람은 "더 느리게(more slowly)" 일하고 실수도 더 많이 한다. 따라서 ③ faster는 적절하지 않다. ⑤ 한 번에 더 적은 일을 하라는 결론은 자연스럽다.`
  });

  L.push({
    type: T_ORDER, pts: 3, level: 1,
    passage: `In medical research, new drugs are usually tested against a placebo, a pill that looks real but contains no active ingredient.\n\n(A) This happens because patients' expectations can trigger real changes in the body, such as the release of natural painkillers in the brain.\n(B) Surprisingly, many patients who take the placebo report feeling better, sometimes almost as much as those who receive the real drug.\n(C) For this reason, a new drug is considered effective only if it works clearly better than the placebo, not simply better than doing nothing.`,
    stem: S_ORDER,
    order: ['B', 'A', 'C'],
    explain: `신약은 위약(placebo)과 비교해 시험한다 → (B) 위약을 먹은 환자도 상당히 나아졌다고 보고함 → (A) 이런 일이 일어나는(This happens) 이유는 기대가 몸에 실제 변화를 일으키기 때문 → (C) 이런 이유로(For this reason) 신약은 위약보다 분명히 효과가 좋아야 인정됨. 따라서 (B)-(A)-(C)이다.`
  });

  L.push({
    type: T_ORDER, pts: 3.6, level: 3,
    passage: `On coral reefs, small fish called cleaner wrasses run what look like cleaning stations.\n\n(A) Large fish line up at these stations and open their mouths and gills, allowing the cleaners to eat the parasites living there. The big fish get healthier, and the cleaners get a meal.\n(B) When this happens, the client jerks away or chases the cleaner, and other fish watching nearby may swim off to a different station. To keep their customers, cleaners must control their urge to cheat.\n(C) But the relationship is not always perfectly honest. Cleaners actually prefer the protective mucus on their clients' skin to parasites, and sometimes they take a bite of it.`,
    stem: S_ORDER,
    order: ['A', 'C', 'B'],
    explain: `청소놀래기가 청소 정거장을 운영한다 → (A) 큰 물고기가 줄을 서서 기생충을 먹게 해 주는 상호 이익 관계 → (C) 하지만(But) 관계가 늘 정직하지는 않아 청소놀래기가 점액을 몰래 뜯어 먹기도 함 → (B) 이런 일이 일어나면(When this happens) 손님이 쫓아가거나 다른 물고기들이 떠나므로 속임수를 참아야 함. 따라서 (A)-(C)-(B)이다.`
  });

  L.push({
    type: T_ORDER, pts: 3, level: 1,
    passage: `For millions of years, newly hatched sea turtles have found their way to the ocean by heading toward the brightest horizon.\n\n(A) On a natural beach at night, that horizon is almost always over the water, where the sea reflects the light of the moon and stars.\n(B) Today, however, hotels, streetlights, and houses along many beaches shine far more brightly than the sea. Confused by these lights, many hatchlings crawl inland, where they die from exhaustion or are hit by cars.\n(C) To protect them, some coastal towns now require lights near nesting beaches to be turned off or covered during the hatching season.`,
    stem: S_ORDER,
    order: ['A', 'B', 'C'],
    explain: `새끼 바다거북은 가장 밝은 수평선을 향해 바다로 간다 → (A) 자연 해변에서는 그 수평선(that horizon)이 바다 위에 있음 → (B) 그러나(however) 오늘날 인공 조명이 더 밝아 새끼들이 육지 쪽으로 기어감 → (C) 이들을(them) 보호하기 위해 산란 해변 근처 조명을 끄도록 함. 따라서 (A)-(B)-(C)이다.`
  });

  L.push({
    type: T_INS, pts: 3.2, level: 2, posChoices: true,
    box: `In reality, however, we tend to notice and remember only the information that supports what we already think.`,
    boxTitle: '주어진 문장',
    passage: `We like to believe that we form our opinions by carefully weighing all the evidence. ( ① ) If a person believes that full moons make people behave strangely, every odd event on a full-moon night will seem to prove the point. ( ② ) Meanwhile, the many full-moon nights when nothing unusual happens are quickly forgotten. ( ③ ) This tendency, known as confirmation bias, can make even false beliefs feel stronger over time. ( ④ ) It is especially strong when a belief is tied to our identity or emotions. ( ⑤ ) One way to fight it is to actively search for evidence that could prove us wrong.`,
    stem: S_INS,
    choices: P.slice(), ans: 1,
    explain: `"우리는 모든 증거를 신중히 따져 의견을 만든다고 믿고 싶어 한다"는 첫 문장과 "그러나 실제로는 이미 생각하는 바를 뒷받침하는 정보만 주목한다"는 주어진 문장이 대조를 이룬다. 그 뒤에 보름달 예시가 구체적 사례로 이어지므로 ①이 적절하다.`
  });

  L.push({
    type: T_INS, pts: 3.6, level: 3, posChoices: true,
    box: `As a result, they also became much better at recognizing the errors in their earlier answers.`,
    boxTitle: '주어진 문장',
    passage: `In one series of studies, people who scored lowest on tests of grammar and logic greatly overestimated their performance. ( ① ) Those in the bottom quarter, for example, believed they had done better than most of the other participants. ( ② ) The researchers explained that the skills needed to do a task well are often the same skills needed to judge how well it has been done. ( ③ ) Someone who does not know the rules of grammar cannot recognize their own grammar mistakes. ( ④ ) Later, some of the low scorers were given a short lesson on the rules of logic. ( ⑤ ) Learning, it seems, not only makes us more capable but also more honest about our limits.`,
    stem: S_INS,
    choices: P.slice(), ans: 5,
    explain: `주어진 문장의 As a result는 원인이 되는 사건 뒤에 와야 하고, they는 "논리 규칙 수업을 받은 하위 점수자들"을 가리킨다. 따라서 짧은 수업을 받았다는 문장 뒤, "배움은 우리를 한계에 더 정직하게 만든다"는 결론 앞인 ⑤가 적절하다.`
  });

  L.push({
    type: T_INS, pts: 3.2, level: 2, posChoices: true,
    box: `Even reading about yawning, as you are doing now, can be enough to make some people yawn.`,
    boxTitle: '주어진 문장',
    passage: `Yawning is one of the most contagious behaviors we know. ( ① ) When one person in a room yawns, others often begin to yawn within minutes. ( ② ) Interestingly, contagious yawning seems to be linked to social closeness. ( ③ ) People are more likely to catch a yawn from family members and friends than from strangers. ( ④ ) Young children under about four or five rarely catch yawns at all, perhaps because their social skills are still developing. ( ⑤ ) Dogs, too, sometimes yawn after watching their owners do so, which suggests the behavior is tied to emotional bonds.`,
    stem: S_INS,
    choices: P.slice(), ans: 2,
    explain: `주어진 문장의 Even은 "다른 사람의 하품을 보는 것"보다 한 단계 더 나아가 "하품에 관한 글을 읽는 것만으로도"라는 뜻이다. 따라서 한 사람이 하품하면 다른 사람들도 따라 한다는 문장 뒤, 사회적 친밀감이라는 새 화제(Interestingly)가 시작되기 전인 ②가 적절하다.`
  });

  L.push({
    type: T_INS, pts: 2.8, level: 1, posChoices: true,
    box: `After ten weeks, the differences between the groups were clear.`,
    boxTitle: '주어진 문장',
    passage: `In one study, researchers divided participants into three groups. ( ① ) The first group wrote down a few things they were grateful for each week. ( ② ) The second group wrote about things that had annoyed them, and the third simply listed events that had happened. ( ③ ) Those who had focused on gratitude felt more optimistic about their lives and even reported exercising more. ( ④ ) They also visited the doctor less often than those in the other two groups. ( ⑤ ) The simple act of noticing good things, it seems, can gradually change how we see our whole lives.`,
    stem: S_INS,
    choices: P.slice(), ans: 3,
    explain: `세 집단의 활동 설명이 끝난 뒤 "10주 후 집단 간 차이가 분명했다"는 문장이 와야 하고, 그 뒤에 감사 집단이 더 낙관적이었다는 구체적 차이가 이어진다. 따라서 ③이 적절하다.`
  });

  L.push({
    type: T_SUM, pts: 3.6, level: 3,
    passage: `In one experiment, people were asked to write down the last two digits of their ID number and then say how much they would pay for items such as wine and computer equipment. Those whose digits were high, such as 80 or 90, were willing to pay far more than those whose digits were low, such as 10 or 20 — sometimes more than twice as much. The numbers had nothing to do with the value of the products, and participants insisted that they had not been influenced by them. Yet the first number they saw acted as a starting point that pulled their later estimates toward it.\n\n→ A(n) ___(A)___ number that people see first can ___(B)___ their later judgments of value, even when they believe it has no effect.`,
    stem: S_SUM,
    choices: [
      `accurate — influence`,
      `random — improve`,
      `official — confirm`,
      `random — influence`,
      `meaningful — weaken`
    ], ans: 4,
    explain: `신분 번호 끝 두 자리는 상품 가치와 아무 관련이 없는(random, 무작위의) 숫자인데도 이후 가격 판단을 그쪽으로 끌어당겼다(influence). 따라서 ④이다. ② improve(향상시키다)는 판단이 왜곡되었다는 내용과 맞지 않고, ①⑤ accurate·meaningful은 "아무 관련이 없다"는 내용과 반대이다.`
  });

  L.push({
    type: T_SUM, pts: 3, level: 1,
    passage: `Researchers gave participants an envelope containing either $5 or $20 in the morning. Half were told to spend the money on themselves, such as paying a bill or buying a treat. The other half were told to spend it on someone else, such as buying a gift for a friend or giving it to charity. In the evening, those who had spent the money on others reported feeling happier than those who had spent it on themselves. Surprisingly, the amount of money made no real difference; what mattered was how it was spent.\n\n→ People felt happier when they used money ___(A)___ rather than for themselves, and this effect depended less on the ___(B)___ than on the way it was used.`,
    stem: S_SUM,
    choices: [
      `carefully — timing`,
      `for others — amount`,
      `for others — purpose`,
      `wisely — amount`,
      `quickly — place`
    ], ans: 2,
    explain: `다른 사람을 위해(for others) 돈을 쓴 사람들이 더 행복했고, 금액(amount)은 별 차이를 만들지 않았다. 따라서 ②이다. ③ purpose(목적)는 오히려 "어떻게 쓰였는가"에 해당하므로 행복에 영향을 준 쪽이다.`
  });

  L.push({
    type: T_SUM, pts: 3.2, level: 2,
    passage: `In a series of studies, children solved a set of puzzles and were then praised in one of two ways. Some were told, "You must be smart at this." Others were told, "You must have worked hard at this." When later offered a choice between an easy task and a challenging one, most children praised for intelligence chose the easy task, wanting to keep looking smart. Most of those praised for effort chose the challenge. After a round of very difficult puzzles, the "smart" group also enjoyed the work less and performed worse on the final set than the effort group did.\n\n→ Praising children's ___(A)___ rather than their ability made them more willing to ___(B)___ difficult tasks.`,
    stem: S_SUM,
    choices: [
      `talent — avoid`,
      `effort — avoid`,
      `effort — take on`,
      `intelligence — take on`,
      `results — finish`
    ], ans: 3,
    explain: `노력(effort)을 칭찬받은 아이들은 어려운 과제를 선택했고, 지능을 칭찬받은 아이들은 똑똑해 보이려고 쉬운 과제를 골랐다. 따라서 노력을 칭찬하면 어려운 과제에 기꺼이 도전하게(take on) 된다는 ③이 정답이다. ②는 결과와 반대이고, ④ intelligence는 ability와 같은 뜻이라 rather than their ability와 모순된다.`
  });

  L.push({
    type: T_MEAN, pts: 3, level: 1,
    passage: `Scrolling through social media, you see a friend's beach vacation, another's new puppy, and a classmate's award. Meanwhile, you are sitting at home in old clothes, worried about tomorrow's test. It is easy to conclude that everyone else's life is more exciting than yours. But people usually post only their best moments, carefully chosen and often edited. No one shares the hours of boredom, the arguments, or the failed attempts. When we feel bad after scrolling, it is often because we are comparing our behind-the-scenes with everyone else's highlight reel.`,
    stem: '밑줄 친 "comparing our behind-the-scenes with everyone else\'s highlight reel"이 다음 글에서 의미하는 바로 가장 적절한 것은?',
    choices: [
      `making videos of our daily lives to share with friends`,
      `watching movies instead of spending time with people`,
      `admiring people who are honest about their failures`,
      `hiding our achievements so that others will not feel jealous`,
      `judging our whole ordinary lives against others' selected best moments`
    ], ans: 5,
    explain: `behind-the-scenes(무대 뒤)는 지루함·실패까지 포함한 우리의 평범한 일상 전체, highlight reel(하이라이트 영상)은 다른 사람들이 골라서 편집해 올린 최고의 순간을 뜻한다. 따라서 ⑤가 적절하다. ①②는 영상이라는 단어만 문자 그대로 받아들인 오답이다.`
  });

  L.push({
    type: T_MEAN, pts: 3.6, level: 3,
    passage: `A school cafeteria wanted students to eat more fruit, but posters and lectures had little effect. Then the staff tried something simpler: they moved the fruit from a dark corner to a bright basket next to the cash register and put the desserts on a lower shelf. Fruit sales rose sharply, even though no choice had been taken away. The experiment revealed something that designers have long known. There is no way to display food without arranging it somehow, and whatever is placed at eye level will be chosen more often. In that sense, the cafeteria is never neutral, and the people who design it are already shaping decisions, whether they intend to or not.`,
    stem: '밑줄 친 "the cafeteria is never neutral"이 다음 글에서 의미하는 바로 가장 적절한 것은?',
    choices: [
      `Any way of arranging food inevitably influences what people choose.`,
      `Students always prefer desserts to healthy food.`,
      `School staff should not interfere with students' meals.`,
      `Cafeterias should offer fewer choices to students.`,
      `Posters are more effective than changing the layout.`
    ], ans: 1,
    explain: `음식은 어떤 식으로든 배치될 수밖에 없고, 눈높이에 놓인 것이 더 자주 선택되므로 배치 자체가 이미 선택에 영향을 준다는 뜻이다(①). ③은 "의도와 상관없이 이미 결정을 형성하고 있다"는 내용과 맞지 않고, ④ 선택권은 하나도 빼앗지 않았으며, ⑤ 포스터는 효과가 거의 없었다.`
  });

  L.push({
    type: T_MEAN, pts: 3.2, level: 2,
    passage: `When a scientist runs an experiment that does not work, it can feel like a waste of months. Yet failed experiments are an essential part of how science moves forward. Each one tells researchers where the answer is not, narrowing the space in which it might be found. Unfortunately, many failed results are never published, because journals prefer exciting discoveries. As a result, other scientists may unknowingly repeat the same failed experiments, wasting time and money. If science is a journey through unknown land, every dead end is a line on the map — but only if someone writes it down.`,
    stem: '밑줄 친 "every dead end is a line on the map"이 다음 글에서 의미하는 바로 가장 적절한 것은?',
    choices: [
      `Unsuccessful experiments are useless unless they become famous.`,
      `Scientists should stop exploring when they meet a failure.`,
      `Maps are important tools for scientists who study geography.`,
      `Each failure provides useful information that guides future research.`,
      `Only experiments with exciting results deserve to be published.`
    ], ans: 4,
    explain: `실패한 실험은 답이 "어디에 없는지" 알려 주어 탐색 범위를 좁혀 준다. 즉 막다른 길(실패)도 지도의 한 줄처럼 이후 연구를 안내하는 유용한 정보라는 뜻이다(④). ⑤는 글쓴이가 문제로 지적한 학술지의 태도이고, ③은 map을 문자 그대로 해석한 오답이다.`
  });

  L.push({
    type: T_INFO, pts: 2.8, level: 1,
    passage: `Rachel Carson was born in 1907 in a small town in Pennsylvania. As a child, she loved both nature and writing, and she published her first story in a children's magazine while she was still in elementary school. In college, she first studied English but later switched to biology. After earning a master's degree in zoology, she worked for a U.S. government fisheries agency, where she wrote radio programs about sea life. Her book The Sea Around Us became a bestseller in 1951, which allowed her to leave her job and write full-time. In 1962, she published Silent Spring, which warned about the dangers of chemical pesticides. Although chemical companies strongly attacked the book, it helped lead to new laws protecting the environment. She died in 1964, two years after the book came out.`,
    stem: '다음 글의 내용과 일치하지 않는 것은?',
    choices: [
      '어린 시절 자연과 글쓰기를 모두 좋아했다.',
      '대학에서 처음에는 영어를 공부했다.',
      '정부 기관에서 바다 생물에 관한 라디오 프로그램 원고를 썼다.',
      'The Sea Around Us가 성공한 뒤에도 정부 기관에서 계속 일했다.',
      'Silent Spring은 화학 회사들의 강한 공격을 받았다.'
    ], ans: 4,
    explain: `The Sea Around Us가 베스트셀러가 되어 직장을 그만두고(leave her job) 전업 작가가 될 수 있었다고 했으므로 ④는 일치하지 않는다. ①은 loved both nature and writing, ②는 first studied English, ③은 wrote radio programs about sea life, ⑤는 chemical companies strongly attacked the book과 일치한다.`
  });

  L.push({
    type: T_INFO, pts: 3.2, level: 2,
    passage: `The table below shows how students at a high school traveled to school in 2026.\n| Method | Grade 1 (%) | Grade 2 (%) | Grade 3 (%) |\n| School bus | 42 | 38 | 35 |\n| Walking | 25 | 22 | 18 |\n| Bicycle | 12 | 15 | 10 |\n| Parents' car | 15 | 18 | 27 |\n| Public bus | 6 | 7 | 10 |`,
    stem: '다음 표의 내용과 일치하지 않는 것은?',
    choices: [
      `In all three grades, the school bus was the most common way of getting to school.`,
      `The percentage of students who walked to school decreased as the grade went up.`,
      `The percentage of bicycle riders was higher in Grade 2 than in Grade 1.`,
      `In Grade 3, the percentage of students who came by parents' car was more than twice that of public bus users.`,
      `The percentage of public bus users in Grade 3 was the same as that of bicycle riders in Grade 2.`
    ], ans: 5,
    explain: `3학년 대중교통(Public bus) 이용 비율은 10%, 2학년 자전거 이용 비율은 15%로 같지 않으므로 ⑤가 일치하지 않는다. ① 스쿨버스 42·38·35%로 모든 학년에서 1위, ② 도보 25→22→18%로 감소, ③ 자전거 12%→15%, ④ 3학년 부모님 차 27%는 대중교통 10%의 두 배(20%)보다 크다.`
  });

  L.push({
    type: T_INFO, pts: 2.8, level: 1,
    passage: `The axolotl is a type of salamander found naturally in only one place: the lakes and canals around Mexico City. Unlike most salamanders, it never fully grows up. Even as an adult, it keeps the feathery gills it had as a baby and spends its entire life in water. The axolotl is famous for another ability as well. If it loses a leg, it can grow a complete new one, including bones and muscles, and it can even repair parts of its heart and spinal cord. Sadly, while large numbers of axolotls live in aquariums and laboratories around the world, they are critically endangered in the wild because of pollution and the growth of the city.`,
    stem: '다음 글의 내용과 일치하는 것은?',
    choices: [
      '세계 여러 지역의 호수에 자연적으로 서식한다.',
      '잃어버린 다리를 뼈와 근육까지 다시 만들 수 있다.',
      '다 자라면 아가미가 사라지고 육지로 올라온다.',
      '심장은 손상되면 전혀 회복하지 못한다.',
      '야생 개체 수가 수족관과 실험실의 개체 수보다 많다.'
    ], ans: 2,
    explain: `it can grow a complete new one, including bones and muscles와 일치하므로 ②가 정답이다. ① 멕시코시티 주변 한 곳에만 자연 서식, ③ 성체가 되어도 아가미를 유지하고 평생 물속에서 살며, ④ 심장 일부도 회복할 수 있고, ⑤ 야생에서는 심각한 멸종 위기이다.`
  });

  L.push({
    type: T_IRR, pts: 3.2, level: 2, posChoices: true,
    passage: `Many great thinkers, from ancient philosophers to modern inventors, were known for taking long walks. Research now suggests they may have been onto something. ① In one study, people came up with far more creative uses for everyday objects while walking than while sitting. ② The effect appeared whether they walked outdoors or on a treadmill facing a blank wall. ③ Walking regularly also strengthens the heart and helps control body weight. ④ Even after they sat down again, the walkers continued to produce more creative ideas for a while. ⑤ So the next time you are stuck on a problem, it may help to get up and move.`,
    stem: S_IRR,
    choices: P.slice(), ans: 3,
    explain: `글의 주제는 "걷기가 창의적 사고를 돕는다"이다. ③ 걷기가 심장을 튼튼하게 하고 체중 조절에 도움이 된다는 건강상의 이점은 같은 소재(걷기)이지만 창의성이라는 주제에서 벗어난다.`
  });

  L.push({
    type: T_IRR, pts: 3.6, level: 3, posChoices: true,
    passage: `You have probably heard that everyone should drink eight glasses of water a day. Surprisingly, there is little scientific evidence behind this rule. ① Much of the water our bodies need already comes from food, especially fruits and vegetables, and from other drinks such as milk and tea. ② Bottled water companies spend huge amounts of money on advertising every year to compete with soft drink brands. ③ The amount each person needs also varies greatly depending on body size, activity, and climate. ④ For most healthy people, simply drinking when thirsty is enough to stay properly hydrated. ⑤ Rather than counting glasses, then, it makes more sense to listen to your body.`,
    stem: S_IRR,
    choices: P.slice(), ans: 2,
    explain: `글은 "하루 여덟 잔" 규칙에 과학적 근거가 부족하며 필요한 수분량은 음식·개인차에 따라 다르므로 몸의 신호에 따르자는 내용이다. ② 생수 회사가 청량음료 브랜드와 경쟁하려고 광고비를 쓴다는 내용은 물이라는 소재만 같을 뿐 흐름과 관계가 없다.`
  });

  L.push({
    type: T_IRR, pts: 2.8, level: 1, posChoices: true,
    passage: `When a honeybee finds a rich patch of flowers, it returns to the hive and performs a special movement called the waggle dance. ① The bee runs in a straight line while shaking its body, then circles back and repeats the movement. ② The direction of the straight run shows where the flowers are in relation to the sun. ③ The length of the waggle tells the other bees how far away the food is. ④ Pots of honey have been found in ancient Egyptian tombs, and the honey had not spoiled after thousands of years. ⑤ Using this information, other bees can fly directly to flowers they have never seen before.`,
    stem: S_IRR,
    choices: P.slice(), ans: 4,
    explain: `글은 꿀벌이 8자 춤(waggle dance)으로 꽃의 방향과 거리를 동료에게 알리는 방법을 설명한다. ④ 고대 이집트 무덤의 꿀이 상하지 않았다는 내용은 흐름과 관계가 없다.`
  });

  /* =========================================================
     서술형 (〈보기〉 단어 배열 영작)
     ========================================================= */
  L.push({
    type: T_ESSAY, kind: 'essay', pts: 5,
    stem: '우리말 해석을 보고 〈보기〉의 단어와 〈조건〉을 활용하여 영작하시오.\n〈조건〉 "the + 비교급, the + 비교급" 구문을 사용할 것 / 단어 추가·변형 불가\n〈보기〉 the more / we / nature / observe / the more / solutions / can find / we\n⇒ 우리가 자연을 더 많이 관찰할수록, 우리는 더 많은 해결책을 찾을 수 있다.',
    model: 'The more we observe nature, the more solutions we can find.',
    rubric: ['The more + 주어 + 동사, the more + 명사 + 주어 + 동사 어순을 정확히 씀 (3점)', '두 번째 절에서 the more solutions를 붙여 앞에 둠 (1점)', '대문자·쉼표·마침표 등 형식 오류 없음 (1점)', '※ "we can find the more solutions"처럼 비교급을 뒤에 두면 2점 감점']
  });

  L.push({
    type: T_ESSAY, kind: 'essay', pts: 5,
    stem: '우리말 해석을 보고 〈보기〉의 단어와 〈조건〉을 활용하여 영작하시오.\n〈조건〉 It ~ that 강조 구문을 사용할 것 / 단어 추가·변형 불가\n〈보기〉 it / was / people\'s stories / that / made / the tiger / a symbol of Korea\n⇒ 호랑이를 한국의 상징으로 만든 것은 바로 사람들의 이야기였다.',
    model: 'It was people\'s stories that made the tiger a symbol of Korea.',
    rubric: ['It was + 강조어(people\'s stories) + that ~ 구조 (2점)', 'made + 목적어(the tiger) + 목적격 보어(a symbol of Korea) 5형식 어순 (2점)', '철자·대문자·마침표 정확 (1점)']
  });

  L.push({
    type: T_ESSAY, kind: 'essay', pts: 5,
    stem: '우리말 해석을 보고 〈보기〉의 단어와 〈조건〉을 활용하여 영작하시오.\n〈조건〉 "keep A from -ing" 구문을 사용할 것 / 필요시 어형을 바꿀 것 / 현재 시제\n〈보기〉 willow roots / keep / pollutants / from / spread / into / groundwater\n⇒ 버드나무 뿌리는 오염 물질이 지하수로 퍼지는 것을 막는다.',
    model: 'Willow roots keep pollutants from spreading into groundwater.',
    rubric: ['keep + 목적어(pollutants) + from + 동명사 구조 (2점)', 'spread를 동명사 spreading으로 바꿈 (2점)', '주어(복수)에 맞는 동사 keep, 대문자·마침표 정확 (1점)']
  });

  L.push({
    type: T_ESSAY, kind: 'essay', pts: 5,
    stem: '우리말 해석을 보고 〈보기〉의 단어와 〈조건〉을 활용하여 영작하시오.\n〈조건〉 관계대명사 what을 두 번 사용할 것 / 필요시 어형을 바꿀 것 / 현재 시제\n〈보기〉 what / we / already / believe / affect / what / we / see\n⇒ 우리가 이미 믿고 있는 것은 우리가 보는 것에 영향을 미친다.',
    model: 'What we already believe affects what we see.',
    rubric: ['주어 자리의 명사절 What we already believe를 바르게 씀 (빈도부사 already는 일반동사 앞) (2점)', 'What절 주어는 단수 취급 → affect를 affects로 바꿈 (2점)', '목적어 what we see, 대문자·마침표 정확 (1점)']
  });

  L.push({
    type: T_ESSAY, kind: 'essay', pts: 5,
    stem: '우리말 해석을 보고 〈보기〉의 단어와 〈조건〉을 활용하여 영작하시오.\n〈조건〉 부정 분사구문으로 시작할 것 / 필요시 어형을 바꿀 것 / 과거 시제\n〈보기〉 not / realize / their own mistakes / they / overestimate / their abilities\n⇒ 자신의 실수를 깨닫지 못해서, 그들은 자신의 능력을 과대평가했다.',
    model: 'Not realizing their own mistakes, they overestimated their abilities.',
    rubric: ['분사구문의 부정어 not을 분사 앞에 둠(Not realizing) (2점)', '주절 동사를 과거형 overestimated로 바꿈 (2점)', '쉼표·대문자·마침표 정확 (1점)', '※ Because they did not realize ~ 처럼 접속사절로 쓰면 조건 위반으로 2점 감점']
  });

  window.addQ('eng', L);
})();

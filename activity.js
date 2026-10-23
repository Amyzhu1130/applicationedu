const stories = {
  sociology: {
    number: '01', year: '2026', image: 'sociology', previous: null, next: 'ipv',
    en: {
      category: 'Foundation / Sociology', title: 'Learning to see the structures',
      lead: 'A course notebook became a way to look beyond individual choices and ask what shapes them.',
      role: 'Columbia Pre-College · Exploring Sociology',
      question: 'How do institutions and social expectations enter everyday life?',
      action: 'I studied culture, inequality and research methods, then used a family example to trace how expectations can be learned early.',
      insight: 'A small routine can reveal a much larger social pattern.',
      steps: ['An everyday routine', 'A shared expectation', 'A wider structure'],
      diagram: 'The course notes move from a familiar household task to the social norms that may give it meaning.',
      materialNote: 'The available source is a course notebook. The final paper is not included because its file has not been located.',
      artworkAlt: 'Illustrated girl at a library window considering paper figures connected across a city.',
      vignetteAlt: 'The girl studies a miniature paper city and paths linking homes, schools and public places.'
    },
    zh: {
      category: '理论基础 / 社会学', title: '看见制度的形状',
      lead: '一本课程笔记，让我从个人选择继续追问：选择背后的环境是什么？',
      role: '哥伦比亚大学大学预科 · 社会学课程',
      question: '制度和社会期待怎样进入我们的日常生活？',
      action: '我学习文化、不平等与研究方法，并从家庭分工的例子出发，思考期待如何在成长中形成。',
      insight: '一个细小的日常习惯，也可能映出更大的社会模式。',
      steps: ['日常行为', '共同期待', '社会结构'],
      diagram: '课程笔记从熟悉的家务分工，延伸到赋予它意义的社会规范。',
      materialNote: '目前可展示的是课程笔记；尚未找到期末论文文件，因此这里没有论文预览或下载。',
      artworkAlt: '绘本插画：女孩站在图书馆窗前，观察城市与相连的纸片人物。',
      vignetteAlt: '女孩观察纸艺小城，以及连接家庭、学校和公共空间的路径。'
    },
    materials: [
      { tag: 'NOTEBOOK / P. 4', enTitle: 'A research question in the margins', zhTitle: '笔记里的研究问题', enQuote: '“gendered chores in families”', zhQuote: '“家庭中带有性别区分的家务”', enSource: 'Personal course notes, p. 4 · research-question exercise', zhSource: '个人课程笔记，第 4 页 · 研究问题练习', enDetail: 'The notes connect an ordinary family routine to gender roles.', zhDetail: '笔记把日常家务与性别角色联系起来。' },
      { tag: 'NOTEBOOK / P. 4', enTitle: 'Following the pattern', zhTitle: '顺着线索继续追问', enQuote: '“bias formed by society ... reinforces gender roles”', zhQuote: '“社会形成的偏见……又会强化性别角色”', enSource: 'Edited excerpt from personal course notes, p. 4', zhSource: '个人课程笔记第 4 页节选，略作删节', enDetail: 'A working observation from class, presented as a question to investigate.', zhDetail: '这是课堂中的初步观察，仍需要进一步研究。' }
    ]
  },
  ipv: {
    number: '02', year: '2025', image: 'ipv', previous: 'sociology', next: 'trpi',
    en: {
      category: 'Research / Health systems', title: 'From rights to real support',
      lead: 'Reading and research raised a practical question: can someone seeking safety reach the help that exists on paper?',
      role: 'University of Hong Kong · Volunteer research assistant',
      question: 'Where can a path to support become difficult to follow?',
      action: 'I read and synthesized research on intimate partner violence, and considered how professional preparation and institutions affect responses.',
      insight: 'Availability is only one part of support; knowledge, trust and access also matter.',
      steps: ['A need for help', 'A professional response', 'Safe, usable support'],
      diagram: 'The illustrated pathway represents a research question, not a real participant or interview.',
      materialNote: 'These two excerpts come from Sophie’s writing and reading notes. The IEPQ summary below is drawn only from her written report; no interview material or third-party article is reproduced.',
      artworkAlt: 'Illustrated girl reviewing anonymous papers as a branching path leads toward a softly lit doorway.',
      vignetteAlt: 'A symbolic paper pathway through a quiet study room leads toward an open door.'
    },
    zh: {
      category: '研究 / 医疗与支持系统', title: '从权利走向真正的支持',
      lead: '阅读与研究让我追问：当一个人需要安全的帮助时，纸面上的支持是否真的能够抵达？',
      role: '香港大学 · 志愿研究助理',
      question: '通往支持的路径会在哪些地方变得难走？',
      action: '我阅读、整理亲密关系暴力相关研究，并思考专业人员的准备和机构运作如何影响回应。',
      insight: '有服务只是第一步；知识、信任和实际可及性同样重要。',
      steps: ['产生求助需要', '得到专业回应', '安全而可用的支持'],
      diagram: '画面中的路径用于说明研究问题，不对应任何真实受访者或访谈。',
      materialNote: '上面两段节选来自 Sophie 的写作与阅读笔记。下方的 IEPQ 补充内容只根据她的书面论文整理；不展示访谈资料或第三方论文全文。',
      artworkAlt: '绘本插画：女孩整理匿名纸片，分岔的小路通向一扇亮着灯的门。',
      vignetteAlt: '安静的书房里，一条象征性的纸片路径通向敞开的门。'
    },
    materials: [
      { tag: 'WRITING SAMPLE / P. 1', enTitle: 'A question about institutions', zhTitle: '关于制度的一段思考', enQuote: '“legal frameworks and professional systems shape biases and beliefs”', zhQuote: '“法律框架与专业系统会塑造偏见和观念”', enSource: "Sophie's HW2 writing sample, p. 1", zhSource: 'Sophie 的 HW2 作业，第 1 页', enDetail: 'A short excerpt from her own coursework, shown without the surrounding personal examples.', zhDetail: '节选自本人课程作业；周围涉及个人举例的内容未展示。' },
      { tag: 'READING NOTES / P. 3', enTitle: 'From evidence to practice', zhTitle: '从文献走向实践', enQuote: '“nurses’ knowledge and preparedness to respond to IPV was very low”', zhQuote: '“护士回应亲密关系暴力的知识与准备程度仍然很低”', enSource: "Sophie's literature reading notes, p. 3 · summary of a published study", zhSource: 'Sophie 的文献阅读笔记，第 3 页 · 对已发表研究的概述', enDetail: 'This is a reading-note synthesis, not an original study finding.', zhDetail: '这是阅读笔记中的文献概述，并非 Sophie 独立得出的研究结果。' }
    ]
  },
  trpi: {
    number: '03', year: '2026', image: 'trpi', previous: 'ipv', next: 'fifa',
    en: {
      category: 'Policy / Menstrual equity', title: 'A door and a request',
      lead: 'At The Red Poppy Initiative, I began asking what it really takes for a student to reach the supplies their school says it provides.',
      role: 'The Red Poppy Initiative · Policy brief co-author',
      question: 'When is a product or a lesson genuinely accessible?',
      action: 'With Emily Wang and Laura Zou, I co-authored recommendations on menstrual education and product access in New York State schools.',
      insight: 'Practical details such as privacy, location and classroom culture shape whether a policy works.',
      steps: ['A policy promise', 'A school routine', 'A student’s usable access'],
      diagram: 'The brief considers education and supplies together because both affect day-to-day access.',
      materialNote: 'The complete co-authored brief is available below with all three authors credited and correspondence addresses removed.',
      artworkAlt: 'Illustrated girl walking through a sunny school corridor near a small supply cabinet and red poppies.',
      vignetteAlt: 'The girl studies a paper model of a school with a classroom and an accessible supply shelf.'
    },
    zh: {
      category: '政策 / 月经公平', title: '那扇门和一次开口',
      lead: '在 The Red Poppy Initiative，我开始追问：学校说有月经用品，学生怎样才能真正拿到？',
      role: 'The Red Poppy Initiative · 政策简报共同作者',
      question: '什么情况下，一件用品或一堂课才算真正可及？',
      action: '我与 Emily Wang、Laura Zou 共同撰写纽约州学校月经教育及用品获取的政策建议。',
      insight: '隐私、摆放位置和课堂氛围等细节，会影响政策是否真正有效。',
      steps: ['政策承诺', '学校日常执行', '学生实际可用'],
      diagram: '简报同时讨论教育和用品，因为两者都影响学生每天能否获得支持。',
      materialNote: '下方提供保留三位作者署名、移除通信邮箱的合著简报全文。',
      artworkAlt: '绘本插画：女孩走过阳光下的学校走廊，旁边有用品柜和红色花朵。',
      vignetteAlt: '女孩观察纸艺学校模型，模型中有教室和便于取用的用品架。'
    },
    materials: [
      { tag: 'POLICY BRIEF / COVER', enTitle: 'Policy Recommendations for Safe Menstrual Practices in the New York State Education System', zhTitle: '纽约州教育系统安全月经实践政策建议', enQuote: 'Emily Wang · Sophie Bu · Laura Zou', zhQuote: 'Emily Wang · Sophie Bu · Laura Zou', enSource: 'The Red Poppy Initiative · July 2026 · co-authored cover', zhSource: 'The Red Poppy Initiative · 2026 年 7 月 · 合著封面', enDetail: 'The authors are shown in source order; correspondence details are omitted.', zhDetail: '作者按原件顺序列出；通信信息已省去。' },
      { tag: 'POLICY BRIEF / PP. 9–10', enTitle: 'Two practical recommendations', zhTitle: '两项可操作的建议', enQuote: '“work towards destigmatizing such topics” · “convenient access prevents unnecessary interruptions to learning”', zhQuote: '“减少相关话题的污名” · “便利获取可避免不必要的学习中断”', enSource: 'Edited excerpts from sections 4.3 and 5 of the co-authored brief', zhSource: '合著简报第 4.3 节与第 5 节节选', enDetail: 'The brief joins classroom conversation with practical product access.', zhDetail: '简报将课堂讨论与用品的实际获取放在一起考虑。' }
    ]
  },
  fifa: {
    number: '04', year: '2026', image: 'fifa', previous: 'trpi', next: 'face-painting',
    en: {
      category: 'Experience / FIFA', title: 'A day inside the game',
      lead: 'Being close to the field let me see a shared moment from a new angle.',
      role: '2026 FIFA · Flag bearer experience',
      question: 'What makes a large public moment feel personal?',
      action: 'I took part in a FIFA flag bearer experience and kept photographs of the stadium and the occasion.',
      insight: 'The energy of the crowd and the care behind the scene are both part of the memory.',
      materialNote: '',
      artworkAlt: 'Illustrated football stadium surrounded by flowers and flags.'
    },
    zh: {
      category: '个人经历 / FIFA', title: '走近球场的一天',
      lead: '站在球场附近，让我从另一个角度感受了一次共同的盛会。',
      role: '2026 FIFA · 旗手经历',
      question: '为什么一场盛大的活动，会成为很个人的记忆？',
      action: '我参与了 FIFA 旗手活动，也用照片记录了球场和当天的场景。',
      insight: '观众的热情和场内每个细节，都留在了我的记忆里。',
      materialNote: '',
      artworkAlt: '花朵与旗帜环绕的足球场插画。'
    },
    materials: []
  },
  'face-painting': {
    number: '05', year: '', image: 'face-painting', previous: 'fifa', next: 'arts',
    en: {
      category: 'Creativity / Community', title: 'A little story in every face',
      lead: 'For me, face painting is a conversation that begins with a color or a character.',
      role: 'Face painting · Personal reflection',
      question: 'What happens when a child can help shape a story?',
      action: 'I prepared simple animal, star and little monster designs, then invited children to choose details and change the story as I painted.',
      insight: 'The most interesting moment is often when a child names a character or adds an unexpected idea.',
      materialNote: '',
      artworkAlt: 'Illustrated face painting table with colorful palettes and character cards.'
    },
    zh: {
      category: '创作 / 社区互动', title: '画在脸上的小故事',
      lead: '对我来说，面部彩绘是一段从颜色或角色开始的对话。',
      role: '面部彩绘 · 个人反思',
      question: '当孩子能参与决定故事，接下来会发生什么？',
      action: '我准备动物、星星和小怪兽等简单图案，在绘画时邀请孩子选择细节，也让他们改写角色的故事。',
      insight: '最有意思的时刻，常常是孩子给角色取名字，或提出我没想到的新点子。',
      materialNote: '',
      artworkAlt: '放着彩绘颜料和角色卡片的插画桌面。'
    },
    materials: []
  },
  arts: {
    number: '06', year: '', image: 'arts', previous: 'face-painting', next: null,
    en: {
      category: 'Personal / Arts', title: 'The joy of making pictures',
      lead: 'I love painting. Colors, landscapes and imagined places give me another way to notice the world.',
      role: 'A selection from my paintings',
      question: 'What can a picture hold that words cannot?',
      action: 'I return to paper and color to try out a mood, a place or an idea. This gallery gathers a few of my pieces.',
      insight: 'Making art gives me room to be curious without having every answer first.',
      materialNote: '',
      artworkAlt: 'Illustrated easel with a landscape painting among flowers and brushes.'
    },
    zh: {
      category: '个人 / 绘画', title: '画画时的快乐',
      lead: '我很喜欢画画。颜色、风景和想象中的地方，让我用另一种方式观察世界。',
      role: '我的部分绘画作品',
      question: '一幅画能留下哪些文字说不出的东西？',
      action: '我常用纸和颜色尝试表达一种心情、一个地方或一个念头。这里选了几幅作品。',
      insight: '画画让我可以带着好奇开始，而不必先想好所有答案。',
      materialNote: '',
      artworkAlt: '花丛中的画架，上面是一幅风景画，旁边放着画笔。'
    },
    materials: []
  }

};

const researchVisuals = {
  sociology: [{
    type: 'flow',
    en: { title: 'From a household routine to a sociological question', source: 'Adapted from Sophie’s personal course notes, p. 4. This is a question for inquiry, not a research finding.' },
    zh: { title: '从日常家务到社会学问题', source: '根据 Sophie 个人课程笔记第 4 页改编。这是研究问题，而非已证实的结论。' },
    items: [
      { en: ['Everyday routine', 'Who is expected to do particular chores at home?'], zh: ['日常行为', '家中哪些家务被期待由谁承担？'] },
      { en: ['Shared expectation', 'How might a family learn and repeat gender roles?'], zh: ['共同期待', '家庭中的性别角色如何被学习、重复？'] },
      { en: ['Structural question', 'What wider social norms shape that expectation?'], zh: ['结构性提问', '更广泛的社会规范怎样形成这种期待？'] }
    ]
  }],
  ipv: [{
    type: 'flow',
    en: { title: 'A path to usable support', source: 'Conceptual diagram adapted from Sophie’s HW2, p. 1, and literature reading notes, p. 3. It does not portray a participant.' },
    zh: { title: '通向可用支持的路径', source: '根据 Sophie 的 HW2 第 1 页与文献阅读笔记第 3 页制作的概念图；不对应真实受访者。' },
    items: [
      { en: ['Need for safety', 'A person has to be able to seek help safely.'], zh: ['安全求助', '求助者需要能够安全地提出需求。'] },
      { en: ['Prepared response', 'Professional knowledge and institutional coordination shape the response.'], zh: ['有准备的回应', '专业知识与机构协作影响回应方式。'] },
      { en: ['Usable support', 'Trust, information and access determine whether help can be reached.'], zh: ['真正可用的支持', '信任、信息与可及性决定帮助能否抵达。'] }
    ]
  }],
  trpi: [{
    type: 'flow',
    en: { title: 'What makes school access real?', source: 'Adapted from the co-authored policy brief, sections 4.3 and 5. Emily Wang · Sophie Bu · Laura Zou.' },
    zh: { title: '怎样让校园支持真正可及？', source: '根据合著政策简报第 4.3 节和第 5 节改编。作者：Emily Wang · Sophie Bu · Laura Zou。' },
    items: [
      { en: ['Available supplies', 'Products need to be stocked and replenished.'], zh: ['用品供应', '用品需要持续供应、及时补充。'] },
      { en: ['Private access', 'Location and privacy affect whether students can use them.'], zh: ['私密获取', '摆放位置和隐私影响学生能否使用。'] },
      { en: ['Education', 'Classroom discussion can reduce stigma and improve awareness.'], zh: ['健康教育', '课堂讨论能帮助减少污名、提高知晓度。'] }
    ]
  }],
  fifa: [{ type: 'flow', en: { title: 'A moment to remember', source: 'A personal reflection on the photographed stadium experience.' }, zh: { title: '一次值得记住的现场经历', source: '根据球场照片写下的个人回忆。' }, items: [
    { en: ['Arriving', 'Seeing the scale of the stadium up close.'], zh: ['走进现场', '近距离感受球场的规模。'] },
    { en: ['Taking part', 'Carrying a flag as part of the event.'], zh: ['参与其中', '作为旗手参与活动。'] },
    { en: ['Remembering', 'Keeping the atmosphere and the small details in photographs.'], zh: ['留下记忆', '用照片记录现场气氛和细节。'] }
  ] }],
  'face-painting': [{ type: 'flow', en: { title: 'How a design becomes a story', source: 'Adapted from Sophie’s personal face painting reflection.' }, zh: { title: '一个图案怎样变成故事', source: '根据 Sophie 的面部彩绘反思整理。' }, items: [
    { en: ['A familiar design', 'An animal, a star or a little monster gives us a place to begin.'], zh: ['熟悉的图案', '从动物、星星或小怪兽开始。'] },
    { en: ['A question', 'The child chooses a detail or imagines what happens next.'], zh: ['提出问题', '请孩子选择细节，想象下一步会发生什么。'] },
    { en: ['A shared story', 'We adjust the picture as the child names or changes the character.'], zh: ['一起创作', '孩子命名或改写角色，我们也随之调整画面。'] }
  ] }],
  arts: [{ type: 'flow', en: { title: 'A small painting practice', source: 'A personal description of the artworks in this gallery.' }, zh: { title: '我的绘画习惯', source: '根据本页所选作品写下的个人介绍。' }, items: [
    { en: ['Notice', 'A color or place catches my eye.'], zh: ['观察', '留意吸引我的颜色或风景。'] },
    { en: ['Try', 'I explore the idea with paint and composition.'], zh: ['尝试', '用颜料和构图慢慢试出来。'] },
    { en: ['Keep looking', 'The finished piece often suggests another question.'], zh: ['继续看', '完成一幅画，又会冒出新的想法。'] }
  ] }]

};

const downloads = {
  trpi: { file: '../downloads/red-poppy-menstrual-policy-brief.pdf', en: 'Co-authored policy brief · PDF', zh: '合著政策简报 · PDF', enNote: 'All three authors credited; correspondence addresses removed.', zhNote: '保留三位作者署名，已移除通信邮箱。' },
};

const ui = {
  en: { skip: 'Skip to content', home: 'Home', work: 'Work', about: 'About', contact: 'Contact', motionOn: 'Reduce motion', motionOff: 'Enable motion', back: 'All selected chapters', read: 'Explore the chapter', chapter: 'CHAPTER', question: 'The question', action: 'What I did', insight: 'What stayed with me', pathEyebrow: 'A SMALL MAP OF THE IDEA', path: 'The idea in three steps', archiveEyebrow: 'DOCUMENTS / NOTES', archive: 'From the archive', archiveLead: 'Small, source-backed windows into the work.', excerpt: 'Selected excerpt', illustrationEyebrow: 'ILLUSTRATED THOUGHT', illustration: 'An illustrated way of seeing it', next: 'Next chapter', previous: 'Previous chapter', footer: 'Selected work · Sophie Bu' },
  zh: { skip: '跳转到正文', home: '首页', work: '活动', about: '关于', contact: '联系', motionOn: '减少动效', motionOff: '开启动效', back: '返回精选活动', read: '阅读本篇', chapter: '篇章', question: '我想追问', action: '我做了什么', insight: '留下的认识', pathEyebrow: '思路图解', path: '用三步理解这个问题', archiveEyebrow: '文件 / 笔记', archive: '材料摘录', archiveLead: '从现有材料中选出的几个片段。', excerpt: '精选节选', illustrationEyebrow: '画面中的思考', illustration: '用画面理解这个问题', next: '下一篇', previous: '上一篇', footer: '精选作品 · Sophie Bu' }
};

Object.assign(ui.en, { visualsEyebrow: 'FOLLOW THE IDEA', visualsTitle: 'A closer look', visualsLead: 'Three small steps through this chapter.', downloadEyebrow: 'READ THE FULL WORK', downloadTitle: 'Download the paper', downloadButton: 'Download PDF' });
Object.assign(ui.zh, { visualsEyebrow: '沿着想法看', visualsTitle: '进一步了解', visualsLead: '用三个小片段继续读这个篇章。', downloadEyebrow: '阅读完整文件', downloadTitle: '下载原文', downloadButton: '下载 PDF' });

const heroAlts = {
  sociology: { en: 'Sophie and her two ragdoll cats explore a paper city.', zh: 'Sophie 和两只布偶猫探索纸艺城市。' },
  ipv: { en: 'Sophie and her cats follow a symbolic path from reading toward an open door.', zh: 'Sophie 和两只布偶猫沿象征性的研究路径走向敞开的门。' },
  trpi: { en: 'Sophie visits a school corridor with menstrual supplies while her two cats look on.', zh: 'Sophie 走过设有月经用品取用点的学校走廊，两只布偶猫在旁边。' },
  fifa: { en: 'A football stadium surrounded by flowers and flags.', zh: '花朵与旗帜环绕的足球场。' },
  'face-painting': { en: 'Colorful face painting table with brushes and design cards.', zh: '放着颜料、画笔和图案卡片的彩绘桌。' },
  arts: { en: 'An easel and landscape painting in a flower-filled garden.', zh: '花园里的画架与风景画。' }
};

const zhTags = {
  'NOTEBOOK / P. 4': '课程笔记 / 第 4 页',
  'WRITING SAMPLE / P. 1': '写作样本 / 第 1 页',
  'READING NOTES / P. 3': '阅读笔记 / 第 3 页',
  'POLICY BRIEF / COVER': '政策简报 / 封面',
  'POLICY BRIEF / PP. 9–10': '政策简报 / 第 9–10 页',
};

const story = stories[document.body.dataset.activity];
let language = localStorage.getItem('sophie-language') === 'zh' ? 'zh' : 'en';
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
document.documentElement.dataset.motion = localStorage.getItem('sophie-motion') === 'off' ? 'off' : 'on';

function visualMarkup(visual) {
  const details = visual[language];
  const body = visual.type === 'compare'
    ? `<div class="visual-comparison">${visual.items.map((row) => {
        const cells = row[language];
        return `<div class="comparison-row"><h4>${escapeHtml(cells[0])}</h4><div><strong>${escapeHtml(details.headers[0])}</strong><p>${escapeHtml(cells[1])}</p></div><div><strong>${escapeHtml(details.headers[1])}</strong><p>${escapeHtml(cells[2])}</p></div></div>`;
      }).join('')}</div>`
    : `<ol class="visual-flow">${visual.items.map((row, i) => {
        const item = row[language];
        return `<li><span>0${i + 1}</span><h4>${escapeHtml(item[0])}</h4><p>${escapeHtml(item[1])}</p></li>`;
      }).join('')}</ol>`;
  return `<figure class="research-figure"><h3>${escapeHtml(details.title)}</h3>${body}<figcaption>${escapeHtml(details.source)}</figcaption></figure>`;
}

function render() {
  const p = story[language], t = ui[language];
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.title = `${p.title} | Sophie Bu`;
  document.querySelector('meta[name="description"]').content = p.lead;
  document.querySelectorAll('[data-ui]').forEach((node) => { node.textContent = t[node.dataset.ui]; });
  document.querySelectorAll('[data-lang]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
  document.querySelectorAll('[data-field]').forEach((node) => { node.textContent = p[node.dataset.field]; });
  document.getElementById('chapter-number').textContent = story.number;
  document.getElementById('chapter-year').textContent = story.year;
  document.getElementById('hero-art').src = `../assets/${story.image}-hero-v2.webp`;
  document.getElementById('hero-art').alt = heroAlts[story.image][language];
  const visualContainer = document.getElementById('research-visuals');
  if (visualContainer) visualContainer.innerHTML = (researchVisuals[story.image] || []).map(visualMarkup).join('');
  const download = downloads[story.image];
  const downloadPanel = document.getElementById('download-panel');
  downloadPanel.hidden = !download;
  if (download) {
    document.getElementById('download-name').textContent = download[language];
    document.getElementById('download-note').textContent = download[language === 'zh' ? 'zhNote' : 'enNote'];
    const link = document.getElementById('download-link');
    link.href = download.file;
    link.setAttribute('aria-label', `${t.downloadButton}: ${download[language]}`);
  }
  const materialsContainer = document.getElementById('materials');
  if (materialsContainer) materialsContainer.innerHTML = story.materials.map((item) => `<article class="material-card"><div class="material-top"><span>${escapeHtml(language === 'zh' ? zhTags[item.tag] : item.tag)}</span><span aria-hidden="true">✳</span></div><h3>${escapeHtml(item[language === 'zh' ? 'zhTitle' : 'enTitle'])}</h3><p class="material-source">${escapeHtml(item[language === 'zh' ? 'zhSource' : 'enSource'])}</p><p class="material-excerpt-label">${escapeHtml(t.excerpt)}</p><blockquote>${escapeHtml(item[language === 'zh' ? 'zhQuote' : 'enQuote'])}</blockquote><p class="material-detail">${escapeHtml(item[language === 'zh' ? 'zhDetail' : 'enDetail'])}</p></article>`).join('');
  document.querySelectorAll('[data-caption-en]').forEach((node) => { node.textContent = node.dataset[language === 'zh' ? 'captionZh' : 'captionEn']; });
  document.querySelectorAll('[data-alt-en]').forEach((node) => { node.alt = node.dataset[language === 'zh' ? 'altZh' : 'altEn']; });
  for (const [direction, id] of [['previous', story.previous], ['next', story.next]]) {
    const link = document.getElementById(`${direction}-link`);
    link.hidden = !id;
    if (!id) continue;
    link.href = `${id}.html`;
    link.querySelector('span').textContent = stories[id][language].title;
  }
  const off = document.documentElement.dataset.motion === 'off';
  document.querySelectorAll('.motion-toggle, .motion-toggle-mobile').forEach((button) => { button.textContent = t[off ? 'motionOff' : 'motionOn']; button.setAttribute('aria-pressed', String(off)); });
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-lang]');
  if (button) { language = button.dataset.lang; localStorage.setItem('sophie-language', language); render(); }
  if (event.target.closest('.motion-toggle, .motion-toggle-mobile')) {
    document.documentElement.dataset.motion = document.documentElement.dataset.motion === 'off' ? 'on' : 'off';
    localStorage.setItem('sophie-motion', document.documentElement.dataset.motion);
    render();
  }
});
render();

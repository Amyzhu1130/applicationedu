const homeCopy = {
  en: {
    skip: 'Skip to content', eyebrow: 'A personal atlas', hello: 'Hello, I’m Sophie.',
    intro: 'I’m curious about people, the systems around them, and the stories we make together. I explore those questions through research, community work, and painting.',
    sociology: 'Sociology', ipv: 'IPV research', trpi: 'Red Poppy', fifa: 'FIFA', facePainting: 'Face Painting', arts: 'Arts',
    sociologyHook: 'Gender roles in everyday life', ipvHook: 'HKU research: rights to support',
    trpiHook: 'Co-authored school policy brief', fifaHook: 'On the field as a flag bearer',
    facePaintingHook: 'Painting stories with children', artsHook: 'Original paintings & collages',
    workEyebrow: 'Six chapters at a glance',
    swipe: 'Swipe the picture to explore all six chapters →',
    contactTitle: 'Let’s stay curious.', contactLead: 'A note, a question, a conversation — I’d be glad to hear from you.'
  },
  zh: {
    skip: '跳转到正文', eyebrow: '我的探索地图', hello: '你好，我是 Sophie。',
    intro: '我喜欢观察人、人与人之间的故事，也关心影响生活的制度。我通过研究、社区活动和画画，慢慢探索这些问题。',
    sociology: '社会学', ipv: '亲密关系暴力研究', trpi: '红罂粟项目', fifa: 'FIFA', facePainting: '面部彩绘', arts: '绘画作品',
    sociologyHook: '从日常家务看性别角色', ipvHook: '港大研究：从权利到支持',
    trpiHook: '合写校园政策建议书', fifaHook: '以旗手身份走进球场',
    facePaintingHook: '和孩子一起画出故事', artsHook: '原创绘画与拼贴',
    workEyebrow: '六个篇章，一眼看懂',
    swipe: '左右滑动图片，探索六个篇章 →',
    contactTitle: '保持好奇，保持联系。', contactLead: '一封信、一个问题、一次交流，欢迎写信给我。'
  }
};

function setLanguage(language) {
  const lang = language === 'zh' ? 'zh' : 'en';
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.title = lang === 'zh' ? 'Sophie Bu｜我的探索地图' : 'Sophie Bu | A Personal Atlas';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = homeCopy[lang][element.dataset.i18n];
  });
  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  });
  document.querySelectorAll('[data-project]').forEach((link) => {
    const label = homeCopy[lang][link.dataset.project];
    const hook = homeCopy[lang][`${link.dataset.project}Hook`];
    link.setAttribute('aria-label', lang === 'zh' ? `查看${label}项目：${hook}` : `Explore ${label}: ${hook}`);
  });
  try { localStorage.setItem('sophie-language', lang); } catch (_) { /* Storage may be unavailable. */ }
}

document.querySelectorAll('[data-lang]').forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.lang));
});
let savedLanguage = 'en';
try { savedLanguage = localStorage.getItem('sophie-language') || 'en'; } catch (_) { /* Use English. */ }
setLanguage(savedLanguage);

// 目標語言的角色翻譯表（用於 Chat 問候句的 {role} 佔位符）
const ROLE_TARGET_NAMES: Record<string, Record<string, string>> = {
  // business
  'it':            { 'ja': 'IT',        'en': 'IT',             'ko': 'IT',           'zh-CN': 'IT' },
  'sales':         { 'ja': '営業',       'en': 'Sales',          'ko': '영업',          'zh-CN': '销售' },
  'hr':            { 'ja': '人事',       'en': 'HR',             'ko': '인사',          'zh-CN': '人力资源' },
  'legal':         { 'ja': '法務',       'en': 'Legal',          'ko': '법무',          'zh-CN': '法务' },
  'finance':       { 'ja': '財務',       'en': 'Finance',        'ko': '재무',          'zh-CN': '财务' },
  // academic
  'courses':       { 'ja': '授業',       'en': 'Courses',        'ko': '강의',          'zh-CN': '课程' },
  'clubs':         { 'ja': 'サークル',    'en': 'Clubs',          'ko': '동아리',         'zh-CN': '社团' },
  'applications':  { 'ja': '出願',       'en': 'Applications',   'ko': '지원',          'zh-CN': '升学申请' },
  'thesis':        { 'ja': '論文',       'en': 'Thesis',         'ko': '논문',          'zh-CN': '学术论文' },
  // lifestyle
  'home':          { 'ja': '家庭',       'en': 'Home',           'ko': '가정',          'zh-CN': '居家' },
  'shopping':      { 'ja': '買い物',     'en': 'Shopping',       'ko': '쇼핑',          'zh-CN': '购物' },
  'dining':        { 'ja': '食事',       'en': 'Dining',         'ko': '식사',          'zh-CN': '美食' },
  'pets':          { 'ja': 'ペット',     'en': 'Pets',           'ko': '반려동물',       'zh-CN': '宠物' },
  'healthcare':    { 'ja': '医療',       'en': 'Healthcare',     'ko': '의료',          'zh-CN': '医疗' },
  // social
  'travel':        { 'ja': '旅行',       'en': 'Travel',         'ko': '여행',          'zh-CN': '旅游' },
  'dating':        { 'ja': 'デート',     'en': 'Dating',         'ko': '데이트',         'zh-CN': '约会' },
  'festivals':     { 'ja': 'お祭り',     'en': 'Festivals',      'ko': '축제',          'zh-CN': '节庆' },
  'socializing':   { 'ja': '交流会',     'en': 'Socializing',    'ko': '모임',          'zh-CN': '聚会' },
  'sports':        { 'ja': 'スポーツ',   'en': 'Sports',         'ko': '스포츠',        'zh-CN': '运动' },
  // trends
  'global-news':   { 'ja': '国際ニュース', 'en': 'Global News',  'ko': '국제 뉴스',      'zh-CN': '国际新闻' },
  'pop-culture':   { 'ja': 'ポップカルチャー', 'en': 'Pop Culture', 'ko': '팝 컬처',     'zh-CN': '流行文化' },
  'tech-trends':   { 'ja': 'テクノロジートレンド', 'en': 'Tech Trends', 'ko': '기술 트렌드', 'zh-CN': '科技新知' },
};

/** 取得角色在目標語言中的名稱 */
export function getRoleTargetName(roleId: string, targetLang: string): string {
  return ROLE_TARGET_NAMES[roleId]?.[targetLang] || roleId;
}

export const categoryData = {
  categories: [
    { id: 'business', label: '商務商貿 (Business)' },
    { id: 'academic', label: '校園留學 (Academic)' },
    { id: 'lifestyle', label: '居家日常 (Lifestyle)' },
    { id: 'social', label: '社交休閒 (Social & Travel)' },
    { id: 'trends', label: '時事趨勢 (Trends)' }
  ],
  roles: {
    business: [
      { id: 'it', label: '資訊科技 (IT)' },
      { id: 'sales', label: '業務銷售 (Sales)' },
      { id: 'hr', label: '人力資源 (HR)' },
      { id: 'legal', label: '法務 (Legal)' },
      { id: 'finance', label: '財務 (Finance)' }
    ],
    academic: [
      { id: 'courses', label: '課程 (Courses)' },
      { id: 'clubs', label: '社團 (Clubs)' },
      { id: 'applications', label: '升學申請 (Applications)' },
      { id: 'thesis', label: '學術論文 (Thesis)' }
    ],
    lifestyle: [
      { id: 'home', label: '居家 (Home)' },
      { id: 'shopping', label: '購物 (Shopping)' },
      { id: 'dining', label: '美食 (Dining)' },
      { id: 'pets', label: '寵物 (Pets)' },
      { id: 'healthcare', label: '醫療 (Healthcare)' }
    ],
    social: [
      { id: 'travel', label: '旅遊 (Travel)' },
      { id: 'dating', label: '約會 (Dating)' },
      { id: 'festivals', label: '節慶 (Festivals)' },
      { id: 'socializing', label: '聚會 (Socializing)' },
      { id: 'sports', label: '運動 (Sports)' }
    ],
    trends: [
      { id: 'global-news', label: '國際新聞 (Global News)' },
      { id: 'pop-culture', label: '流行文化 (Pop Culture)' },
      { id: 'tech-trends', label: '科技新知 (Tech Trends)' }
    ]
  },
  levels: [
    { id: 'beginner', label: '初級', desc: '基礎單字與簡短句型' },
    { id: 'pre-intermediate', label: '初中級', desc: '簡單生活對話，避免複雜語法' },
    { id: 'intermediate', label: '中級', desc: '一般日常與職場溝通' },
    { id: 'upper-intermediate', label: '中高級', desc: '專業用語、長句與道地說法' },
    { id: 'advanced', label: '高級', desc: '高階詞彙與深度談判演繹' }
  ]
};

export const getDefaultRole = (categoryId) => {
  return categoryData.roles[categoryId]?.[0]?.id || 'it';
};

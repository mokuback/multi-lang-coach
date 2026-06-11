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

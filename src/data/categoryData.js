export const categoryData = {
  categories: [
    { id: 'workplace', label: '職場專業' },
    { id: 'campus', label: '校園生活' },
    { id: 'daily', label: '家庭與日常' }
  ],
  roles: {
    workplace: [
      { id: 'it', label: '資訊科技 (IT)' },
      { id: 'sales', label: '業務銷售 (Sales)' },
      { id: 'procurement', label: '採購後勤 (Procurement)' },
      { id: 'management', label: '企業管理 (Management)' },
      { id: 'accounting', label: '財務會計 (Accounting)' }
    ],
    campus: [
      { id: 'academic', label: '課業學術' },
      { id: 'social', label: '人際交流' },
      { id: 'dating', label: '約會交友' },
      { id: 'clubs', label: '社團聚餐' }
    ],
    daily: [
      { id: 'family', label: '家族聚會' },
      { id: 'holidays', label: '節慶慶祝' },
      { id: 'travel', label: '休閒旅遊' }
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

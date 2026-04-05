export const scenariosData = {
  it: [
    { id: 'it-1', title: "匯報 IT 專案進度", desc: "向您的長官匯報目前 ERP 系統的轉移進度與阻礙。", difficulty: "中等" },
    { id: 'it-2', title: "與外國團隊視訊會議", desc: "視訊討論新的系統驗證功能需求與規格。", difficulty: "困難" },
    { id: 'it-3', title: "撰寫軟體需求信件", desc: "寫信給開發團隊，說明儀表板更新的具體軟體規格與修改需求。", difficulty: "簡單" }
  ],
  sales: [
    { id: 'sales-1', title: "產品推廣演說", desc: "向潛在客戶介紹公司最新推出的雲端服務方案。", difficulty: "困難" },
    { id: 'sales-2', title: "回覆客戶議價", desc: "回覆客戶對於報價偏高的疑慮，並強調產品價值。", difficulty: "中等" }
  ],
  travel: [
    { id: 'travel-1', title: "飯店登記入住", desc: "您已預訂了雙人房，並希望詢問是否能延遲退房。", difficulty: "簡單" },
    { id: 'travel-2', title: "餐廳點餐", desc: "向服務生詢問菜單推薦，並告知您對海鮮過敏。", difficulty: "簡單" }
  ],
  academic: [
    { id: 'acad-1', title: "與教授討論報告", desc: "在 Office Hour 時向教授請教期末報告的研究方向。", difficulty: "中等" },
    { id: 'acad-2', title: "分組作業討論", desc: "與同學討論下週要上台的簡報分工。", difficulty: "簡單" }
  ],
  family: [
    { id: 'fam-1', title: "感恩節家庭聚餐", desc: "與親戚閒話家常，問候彼此近況與工作。", difficulty: "簡單" }
  ],
  default: [
    { id: 'def-1', title: "隨意日常交談", desc: "不限主題的自由對話。您可以聊聊近況，或是最新的趨勢。", difficulty: "不限" },
    { id: 'def-2', title: "簡單自我介紹", desc: "向初次見面的人介紹自己的名字、工作以及興趣。", difficulty: "簡單" }
  ]
};

export const getScenariosByRole = (roleId) => {
  return scenariosData[roleId] || scenariosData.default;
};

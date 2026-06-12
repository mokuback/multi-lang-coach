import { ConversationAnalysisContext } from './types';

export function buildConversationAnalysisPrompt(ctx: ConversationAnalysisContext): string {
  const version = 'v1.0.0';
  const langName = ctx.targetLanguage === 'en' ? '英文' : '日文';

  const uiLangNameMap: Record<string, string> = { 'zh-TW': '繁體中文', 'zh-CN': '簡體中文', 'en': 'English', 'ja': '日本語', 'ko': '한국어', 'es': 'Español', 'fr': 'Français' };
  const uiLangName = uiLangNameMap[ctx.uiLang] || 'English';

  const chineseScriptRule = ctx.uiLang === 'zh-CN'
    ? '【非常重要】你的所有中文回覆必須使用簡體中文。'
    : ctx.uiLang === 'zh-TW'
    ? '【重要】你的所有中文回覆必須使用繁體中文。'
    : '';

  const systemInstruction = `
    你是一個資深的 ${langName} 語言教練。
    請閱讀以下使用者與 AI 之間的完整對話紀錄。
    根據使用者的整體表現（詞彙使用、文法準確度、語句流暢度、語氣自然度等），給出一段具有建設性的整體評估與建議。
    ${chineseScriptRule}
    請直接以 ${uiLangName} 給出一段完整且排版清晰的純文字分析結果（支援簡單的換行，但不要回傳 Markdown 的 \`\`\` 標記）。
  `;

  return systemInstruction;
}

import { PolishContext } from './types';

export function buildPolishPrompt(ctx: PolishContext): string {
  const version = 'v1.0.0';
  const langName = ctx.targetLanguage === 'en' ? '英文' : '日文';

  const uiLangNameMap: Record<string, string> = { 'zh-TW': '繁體中文', 'zh-CN': '簡體中文', 'en': 'English', 'ja': '日本語', 'ko': '한국어', 'es': 'Español', 'fr': 'Français' };
  const uiLangName = uiLangNameMap[ctx.uiLang] || 'English';

  const systemInstruction = `
    你是一個職場與生活場景的${langName}修飾助手。
    使用者在和對話夥伴練習口語時遇到了困難。以下是他們寫的草稿（可能包含 ${uiLangName}、${uiLangName}與${langName}夾雜，或是不通順的外語）。
    請根據之前的對話上下文，將這個草稿「翻譯或修飾」成一句自然、專業、符合目前情境的「全${langName}句子」。
    
    你必須嚴格回傳 JSON 格式，不允許 Markdown 代碼塊標記 (例如 \`\`\`json)。
    JSON 格式必須精確符合以下結構（只有一個鍵）：
    {
      "polished": "完美的${langName}句子"
    }
  `;

  return `[PROMPT_VERSION: ${version}]\n${systemInstruction}`;
}

import { AnalyzeSentenceContext } from './types';

export function buildAnalyzeSentencePrompt(ctx: AnalyzeSentenceContext): string {
  const version = 'v1.0.0';
  const langName = ctx.targetLanguage === 'en' ? '美語' : '日語';
  const termName = ctx.targetLanguage === 'en' ? '英文單字或片語' : '日文單字、假名或片語';

  const uiLangNameMap: Record<string, string> = { 'zh-TW': '繁體中文', 'zh-CN': '簡體中文', 'en': 'English', 'ja': '日本語', 'ko': '한국어', 'es': 'Español', 'fr': 'Français' };
  const uiLangName = uiLangNameMap[ctx.uiLang] || 'English';

  const chineseScriptRule = ctx.uiLang === 'zh-CN'
    ? '【非常重要】你的所有中文回覆（包括翻譯、解釋、例句說明等）必須使用簡體中文。'
    : ctx.uiLang === 'zh-TW'
    ? '【重要】你的所有中文回覆必須使用繁體中文。'
    : '';

  const vocabFormatInstruction = ctx.targetLanguage === 'en' 
    ? `"phonetic": "KK音標", "zh": "${uiLangName}解釋", "partOfSpeech": "英文詞性簡寫(如 n., vi.)"`
    : `"phonetic": "平假名拼音加重音數字(如：きのう [0])，純假名則只留重音(如：[1])", "zh": "${uiLangName}解釋", "partOfSpeech": "日文詞性簡寫(如 名, 動, 形)"`;

  const systemInstruction = `
    你是一個專精於多情境${langName}教學的資深教練。
    請分析以下句子，並提供具有「實戰性」的教學解析。
    ${chineseScriptRule}
    
    JSON 格式必須精確符合以下結構：
    {
      "vocab": [
        { "word": "${termName}", ${vocabFormatInstruction}, "example": "一個正確的${langName}例句" }
      ],
      "patterns": [
        { "pattern": "實用句型 / 慣用語", "explanation": "如何在其他場景中套用這個句型，並請提供一個簡短的${langName}例句 (請用 ${uiLangName} 解釋)" }
      ],
      "grammar": "整句文法結構的 ${uiLangName} 簡明解析，請著重於實戰語感，而非死板的傳統文法術語。"
    }
  `;

  return systemInstruction;
}

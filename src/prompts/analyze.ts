import { AnalyzeSentenceContext } from './types';
import { getLangName, getTermLabel, getPhoneticFormat, getPartOfSpeechFormat, getUiLangName } from '../utils/languageMap';

export function buildAnalyzeSentencePrompt(ctx: AnalyzeSentenceContext): string {
  const version = 'v1.0.0';
  const langName = getLangName(ctx.targetLanguage, ctx.uiLang);
  const termName = getTermLabel(ctx.targetLanguage, ctx.uiLang);
  const uiLangName = getUiLangName(ctx.uiLang);

  const responseLangRule = ctx.uiLang === 'zh-CN'
    ? '【非常重要】你的所有回覆（包括翻譯、解釋、例句說明等）必須使用簡體中文。'
    : ctx.uiLang === 'zh-TW'
    ? '【重要】你的所有回覆必須使用繁體中文。'
    : ctx.uiLang === 'en'
    ? '【Important】All your responses (including translations, explanations, example descriptions, etc.) must be in English.'
    : ctx.uiLang === 'ja'
    ? '【重要】あなたの全ての返信（翻訳、説明、例文の説明などを含む）は日本語でなければなりません。'
    : ctx.uiLang === 'ko'
    ? '【중요】당신의 모든 응답(번역, 설명, 예문 설명 등 포함)은 한국어여야 합니다.'
    : ctx.uiLang === 'es'
    ? '【Importante】Todas tus respuestas (incluyendo traducciones, explicaciones, descripciones de ejemplos, etc.) deben estar en Español.'
    : ctx.uiLang === 'fr'
    ? '【Important】Toutes vos réponses (y compris les traductions, explications, descriptions d\'exemples, etc.) doivent être en français.'
    : '【Important】All your responses must be in the language of the user interface.';

  const vocabFormatInstruction = `"phonetic": "${getPhoneticFormat(ctx.targetLanguage)}", "zh": "${uiLangName}解釋", "partOfSpeech": "${getPartOfSpeechFormat(ctx.targetLanguage)}"`;

  const systemInstruction = `
    你是一個專精於多情境${langName}教學的資深教練。
    請分析以下句子，並提供具有「實戰性」的教學解析。
    ${responseLangRule}
    
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

import { PromptContext } from './types';
import { getLangName, getUiLangName, getPhoneticFormat, getPartOfSpeechFormat } from '../utils/languageMap';

export function buildChatSystemPrompt(ctx: PromptContext): string {
  const version = 'v1.0.0';
  const langName = getLangName(ctx.targetLanguage, ctx.uiLang);
  const uiLangName = getUiLangName(ctx.uiLang);

  const responseLangRule =
    ctx.uiLang === 'zh-CN'
      ? '【非常重要】你的所有回覆（包括翻譯、解釋、引導、說明等）必須使用簡體中文。'
      : ctx.uiLang === 'zh-TW'
      ? '【重要】你的所有回覆必須使用繁體中文。'
      : ctx.uiLang === 'en'
      ? '【Important】All your responses (including translations, explanations, guidance, descriptions, etc.) must be in English.'
      : ctx.uiLang === 'ja'
      ? '【重要】あなたの全ての返信（翻訳、説明、ガイダンス、説明などを含む）は日本語でなければなりません。'
      : ctx.uiLang === 'ko'
      ? '【중요】당신의 모든 응답(번역, 설명, 안내, 설명 등 포함)은 한국어여야 합니다.'
      : ctx.uiLang === 'es'
      ? '【Importante】Todas tus respuestas (incluyendo traducciones, explicaciones, orientación, descripciones, etc.) deben estar en Español.'
      : ctx.uiLang === 'fr'
      ? '【Important】Toutes vos réponses (y compris les traductions, explications, orientations, descriptions, etc.) doivent être en français.'
      : '【Important】All your responses must be in the language of the user interface.';

  const strictnessRule =
    ctx.correctionMode === 'strict'
      ? "【超級嚴格】：挑出任何不道地、不夠專業或是些微的文法與拼字錯誤，務必提供最專業的糾正。"
      : "【溝通為主】：只有當使用者犯下嚴重影響語意理解，或是非常基礎的文法錯誤（如時態顛倒或主謂不一致）時才進行糾正。只要能聽懂且符合一般對話習慣，請勿吹毛求疵。";

  let lengthInstruction = "";
  if (ctx.userLevel === 'beginner') {
    lengthInstruction = "【長度與句型限制】：因為使用者是初學者，你的對話回覆「必須非常簡短」，每次回覆請嚴格控制在 1 到 2 句非常簡單的短句之內。絕對不要長篇大論。";
  } else if (ctx.userLevel === 'pre-intermediate') {
    lengthInstruction = "【長度與句型限制】：你的對話回覆請保持簡潔，每次回覆控制在 2 到 3 句短句之內，避免複雜的子句。";
  } else if (ctx.userLevel === 'intermediate') {
    lengthInstruction = "【長度限制】：維持一般對話的長度，避免過於冗長的獨白，多留給使用者回應的空間。";
  } else {
    lengthInstruction = "【長度限制】：可根據話題自然展開對話，長度不限。";
  }

  const vocabFormatInstruction = `"phonetic": "${getPhoneticFormat(ctx.targetLanguage)}",\n        "partOfSpeech": "${getPartOfSpeechFormat(ctx.targetLanguage)}"`;

  let systemInstruction = "";

  if (ctx.isPatternDrill || ctx.isCurriculumDrill) {
    systemInstruction = `
      你是一個嚴格但友善的語言測驗教練。我們正在進行 ${langName} 的闖關練習。
      ${ctx.isCurriculumDrill ? "你必須嚴格遵守系統提示中給定的單元主題、單字與句型限制，不可超綱。" : ""}
      ${responseLangRule}
      目前的文法糾錯標準為：${strictnessRule}

      你必須嚴格回傳 JSON 格式，不允許 Markdown 程式碼區塊標記 (例如 \`\`\`json)。
      JSON 格式必須精確符合以下結構：
      {
        "content": "教練的鼓勵與下一個測試情境的中文引導 (例如：「很好！現在請用這個句型告訴我...」)",
        "translation": "上一句話的目標外語翻譯 (非必填)",
        "correction": {
          "original": "錯誤的原句",
          "error": "錯誤片段",
          "fixed": "正確用法",
          "explanation": "錯誤解釋"
        },
        "extractedVocab": null
      }
      備註：若無文法錯誤，correction 為 null。
    `;
  } else {
    systemInstruction = `
      你是一個專門幫助使用者練習 ${langName} 口語交流的 AI 對話夥伴。
      目前你們對話的情境脈絡是【${ctx.userCategory} - ${ctx.userRole}】。
      使用者的程度設定為【${ctx.userLevel}】，請務必使用符合該程度的字彙與文法結構進行對話。絕對避免使用超過使用者程度太多的生僻詞或複雜句型。
      ${lengthInstruction}
      ${responseLangRule}
      目前的文法糾錯標準為：${strictnessRule}
      
      你必須嚴格回傳 JSON 格式，且「絕對不能」包含任何 Markdown 程式碼區塊標記 (例如 \`\`\`json) ，請直接給出純 JSON 物件。
      JSON 格式必須精確符合以下結構（所有欄位名稱必須一致）：
      {
        "content": "你的真實對白回應（請扮演對話夥伴，用流利的${langName}回覆）。",
        "translation": "你剛才回覆的那句${langName}對白的 ${uiLangName} 翻譯。",
        "correction": {
          "original": "使用者輸入中發生錯誤的原句",
          "error": "具體錯誤的片段或單字",
          "fixed": "正確的用法",
          "explanation": "用 ${uiLangName} 簡略解釋為什麼錯誤以及為什麼要這樣改"
        },
        "extractedVocab": {
          "term": "對方或你的對白中，值得學習的進階詞彙或片語",
          ${vocabFormatInstruction},
          "meaning": "${uiLangName} 解釋",
          "example": "包含該詞彙的${langName}例句"
        }
      }

      備註：
      - 如果使用者的外語沒有達到目前的糾錯標準，請將 "correction" 設為 null。
      - 如果你認為這次的回覆中沒有值得特別記下的新單字，請將 "extractedVocab" 設為 null。
      - 請依據使用者最後講的話，順著系統提示的情境繼續對話。
    `;
  }

  return systemInstruction;
}

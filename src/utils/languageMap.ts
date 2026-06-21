// src/utils/languageMap.ts
// 集中管理所有語言對照資訊，消除散落各處的硬編碼語言判斷。

export interface LanguageInfo {
  /** BCP 47 語言標籤 */
  langCode: string;
  /** TTS 引擎使用的 BCP 47 標籤 */
  ttsLangCode: string;
  /** TTS 前綴（用於 Chat.tsx 的語音分割邏輯） */
  ttsPrefix: string;
  /** Whisper API 的語言參數 */
  whisperLang: string;
  /** 是否為目標學習語言 */
  isTargetLanguage: boolean;
  /** 是否為 UI 介面語言 */
  isUiLanguage: boolean;
  /** 目標學習語言的顯示名稱（依 UI 語言動態取得） */
  targetLabel: Record<string, string>;
  /** UI 選單中顯示的名稱 */
  uiLabel: string;
  /** 提示詞中的詞彙格式指令 */
  phoneticFormat: string;
  /** 提示詞中的詞性格式指令 */
  partOfSpeechFormat: string;
  /** 提示詞中的術語名稱（依 UI 語言動態取得） */
  termLabel: Record<string, string>;
}

const LANGUAGE_MAP: Record<string, LanguageInfo> = {
  en: {
    langCode: 'en',
    ttsLangCode: 'en-US',
    ttsPrefix: 'en',
    whisperLang: 'en',
    isTargetLanguage: true,
    isUiLanguage: true,
    targetLabel: {
      'zh-TW': '英文', 'zh-CN': '英文', 'en': 'English', 'ja': '英語',
      'ko': '영어', 'es': 'Inglés', 'fr': 'Anglais', 'de': 'Englisch',
    },
    uiLabel: 'English',
    phoneticFormat: '该单词的KK音标，若为长句可为空字符串',
    partOfSpeechFormat: '该单词的词性简写(如 n., vi., adj.)，若非单一词汇可为空字符串',
    termLabel: {
      'zh-TW': '英文單字或片語', 'zh-CN': '英文单词或短语', 'en': 'English word or phrase',
      'ja': '英語の単語やフレーズ', 'ko': '영어 단어 또는 구문',
      'es': 'Palabra o frase en inglés', 'fr': 'Mot ou expression en anglais',
      'de': 'Englisches Wort oder Ausdruck',
    },
  },
  ja: {
    langCode: 'ja',
    ttsLangCode: 'ja-JP',
    ttsPrefix: 'ja',
    whisperLang: 'ja',
    isTargetLanguage: true,
    isUiLanguage: true,
    targetLabel: {
      'zh-TW': '日文', 'zh-CN': '日文', 'en': 'Japanese', 'ja': '日本語',
      'ko': '일본어', 'es': 'Japonés', 'fr': 'Japonais', 'de': 'Japanisch',
    },
    uiLabel: '日本語',
    phoneticFormat: '该单词的平假名注音，并在后方括号内标注重音数字(例如：きのう [0])。如果单词本身为纯假名，请只保留重音数字(例如：[1])',
    partOfSpeechFormat: '该单词的日文词性简写(如 名, 动, 形, 副)，若非单一词汇可为空字符串',
    termLabel: {
      'zh-TW': '日文單字、假名或片語', 'zh-CN': '日文单词、假名或短语', 'en': 'Japanese word, kana, or phrase',
      'ja': '日本語の単語、仮名、またはフレーズ', 'ko': '일본어 단어, 가나, 또는 구문',
      'es': 'Palabra, kana o frase en japonés', 'fr': 'Mot, kana ou expression en japonais',
      'de': 'Japanisches Wort, Kana oder Ausdruck',
    },
  },
  'zh-CN': {
    langCode: 'zh-CN',
    ttsLangCode: 'zh-CN',
    ttsPrefix: 'zh-CN',
    whisperLang: 'zh',
    isTargetLanguage: true,
    isUiLanguage: true,
    targetLabel: {
      'zh-TW': '簡體中文', 'zh-CN': '简体中文', 'en': 'Mandarin', 'ja': '簡体字中国語',
      'ko': '중국어', 'es': 'Chino mandarín', 'fr': 'Mandarin',
      'de': 'Mandarin',
    },
    uiLabel: '简体中文',
    phoneticFormat: '该汉字的拼音，并在后方括号内标注声调数字(例如：māo [1])。若为词组，每个字的拼音用空格隔开',
    partOfSpeechFormat: '该单词的词性简写(如 n., v., adj.)，若非单一词汇可为空字符串',
    termLabel: {
      'zh-TW': '簡體中文單字或片語', 'zh-CN': '简体中文单词或短语', 'en': 'Simplified Chinese word or phrase',
      'ja': '簡体字中国語の単語やフレーズ', 'ko': '중국어(간체) 단어 또는 구문',
      'es': 'Palabra o frase en chino simplificado', 'fr': 'Mot ou expression en chinois simplifié',
      'de': 'Vereinfachtes chinesisches Wort oder Ausdruck',
    },
  },
  ko: {
    langCode: 'ko',
    ttsLangCode: 'ko-KR',
    ttsPrefix: 'ko',
    whisperLang: 'ko',
    isTargetLanguage: true,
    isUiLanguage: true,
    targetLabel: {
      'zh-TW': '韓文', 'zh-CN': '韩文', 'en': 'Korean', 'ja': '韓国語',
      'ko': '한국어', 'es': 'Coreano', 'fr': 'Coréen', 'de': 'Koreanisch',
    },
    uiLabel: '한국어',
    phoneticFormat: '该韩文的罗马字转写，若为长句可为空字符串',
    partOfSpeechFormat: '该单词的韩文词性简写(如 명사, 동사, 형용사)，若非单一词汇可为空字符串',
    termLabel: {
      'zh-TW': '韓文單字或片語', 'zh-CN': '韩文单词或短语', 'en': 'Korean word or phrase',
      'ja': '韓国語の単語やフレーズ', 'ko': '한국어 단어 또는 구문',
      'es': 'Palabra o frase en coreano', 'fr': 'Mot ou expression en coréen',
      'de': 'Koreanisches Wort oder Ausdruck',
    },
  },
};

// ─── UI 語言資訊（僅用於 UI 顯示名稱） ───

const UI_LANG_NAMES: Record<string, string> = {
  'zh-TW': '繁體中文',
  'zh-CN': '简体中文',
  'en': 'English',
  'ja': '日本語',
  'ko': '한국어',
  'es': 'Español',
  'fr': 'Français',
  'de': 'Deutsch',
};

// ─── 工具函數 ───

/** 取得語言完整資訊 */
export function getLangInfo(langId: string): LanguageInfo | undefined {
  return LANGUAGE_MAP[langId];
}

/** 取得 TTS BCP 47 標籤 */
export function getTtsCode(langId: string): string {
  return LANGUAGE_MAP[langId]?.ttsLangCode || langId;
}

/** 取得 Google Translate TTS URL 參數 */
export function getGoogleTtsLang(langId: string): string {
  return { en: 'en', ja: 'ja', 'zh-CN': 'zh-CN', ko: 'ko' }[langId] || 'en';
}

/** 取得 TTS 前綴 */
export function getTtsPrefix(langId: string): string {
  return LANGUAGE_MAP[langId]?.ttsPrefix || langId;
}

/** 取得 Whisper 語言參數 */
export function getWhisperLang(langId: string): string {
  return LANGUAGE_MAP[langId]?.whisperLang || langId;
}

/** 取得目標學習語言的顯示名稱（依 UI 語言動態） */
export function getLangName(langId: string, uiLang: string = 'zh-TW'): string {
  return LANGUAGE_MAP[langId]?.targetLabel[uiLang]
    || LANGUAGE_MAP[langId]?.targetLabel['en']
    || langId;
}

/** 取得 UI 語言的顯示名稱 */
export function getUiLangName(uiLang: string): string {
  return UI_LANG_NAMES[uiLang] || uiLang;
}

/** 取得目標學習語言的原生名稱（用於目標語言發音） */
export function getNativeLangName(langId: string): string {
  const map: Record<string, string> = {
    'ja': '日本語',
    'en': 'English',
    'ko': '한국어',
    'zh-CN': '中文',
    'zh-TW': '中文',
    'de': 'Deutsch',
    'es': 'Español',
    'fr': 'Français',
  };
  return map[langId] || langId;
}

/** 取得詞彙格式指令 */
export function getPhoneticFormat(langId: string): string {
  return LANGUAGE_MAP[langId]?.phoneticFormat || '该单词的音标';
}

/** 取得詞性格式指令 */
export function getPartOfSpeechFormat(langId: string): string {
  return LANGUAGE_MAP[langId]?.partOfSpeechFormat || '该单词的词性简写';
}

/** 取得術語標籤（依 UI 語言動態） */
export function getTermLabel(langId: string, uiLang: string = 'zh-TW'): string {
  return LANGUAGE_MAP[langId]?.termLabel[uiLang]
    || LANGUAGE_MAP[langId]?.termLabel['en']
    || '单词或短语';
}

/** 取得所有目標學習語言清單 */
export function getTargetLanguages(): string[] {
  return Object.entries(LANGUAGE_MAP)
    .filter(([, info]) => info.isTargetLanguage)
    .map(([id]) => id);
}

/** 取得所有 UI 語言清單 */
export function getUiLanguages(): string[] {
  return Object.keys(UI_LANG_NAMES);
}

/** 判斷是否為目標學習語言 */
export function isTarget(langId: string): boolean {
  return LANGUAGE_MAP[langId]?.isTargetLanguage ?? false;
}

/** 判斷是否為 UI 語言 */
export function isUiLang(langId: string): boolean {
  return langId in UI_LANG_NAMES;
}

export default LANGUAGE_MAP;

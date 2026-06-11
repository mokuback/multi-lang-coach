export interface PromptContext {
  targetLanguage: string;
  userLevel: string;
  userCategory: string;
  userRole: string;
  correctionMode: string;
  uiLang: string;
  isPatternDrill?: boolean;
  isCurriculumDrill?: boolean;
}

export interface AnalyzeSentenceContext {
  targetLanguage: string;
  uiLang: string;
}

export interface PolishContext {
  targetLanguage: string;
  uiLang: string;
  chatHistory: any[];
  draftText: string;
}

export interface ConversationAnalysisContext {
  targetLanguage: string;
  uiLang: string;
  chatHistory: any[];
}

export const PROMPT_VERSION = '1.0.0';

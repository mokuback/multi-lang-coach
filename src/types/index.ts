export interface VocabularyItem {
  id?: string;
  term: string;
  meaning: string;
  example?: string;
  phonetic?: string;
  partOfSpeech?: string;
  lang?: string;
}

export interface PatternItem {
  id?: string;
  pattern: string;
  explanation?: string;
  example?: string;
  lang?: string;
}

export interface Scenario {
  id: string;
  title: string;
  desc: string;
  difficulty: string;
}

export interface UserSettings {
  apiProvider: string;
  apiModel: string;
  apiKey: string;
  androidSmartSpeech: boolean;
  correctionMode: string;
  speechRate: number;
  autoRead: boolean;
  uiTheme: string;
  targetLanguage: string;
  patternVersion: string;
  userCategory: string;
  userRole: string;
  userLevel: string;
  hasSeenWelcome: boolean;
}

export interface LearningProgress {
  streak: number;
  completedScenarios: number;
  lastDate: string | null;
}

export interface ChatMessage {
  role: 'user' | 'system' | 'assistant' | 'model'; // 'model' is used by Gemini
  content: string;
}

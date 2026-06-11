import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getScenariosByRole } from '../data/scenariosData';
import { categoryData } from '../data/categoryData';
import { useVocabulary } from '../hooks/useVocabulary';
import { usePatterns } from '../hooks/usePatterns';
import { useProgress } from '../hooks/useProgress';

// 临时类型定义（后续优化）
interface AppState {
  // User settings
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
  
  // User context
  userCategory: string;
  userRole: string;
  userLevel: string;
  
  // Vocabulary & Patterns
  vocabulary: any[];
  savedPatterns: any[];
  
  // UI state
  hasSeenWelcome: boolean;
  
  // Learning progress
  progress: {
    streak: number;
    completedScenarios: number;
    lastDate: string | null;
  };
  
  // Current scenario (for Chat page)
  currentScenario: any;
}

// Default scenario for initialization
const DEFAULT_SCENARIO = null;

interface AppStateContextType {
  state: AppState;
  setState: React.Dispatch<React.SetStateAction<AppState>>;
  // Progress
  updateProgress: () => void;
  
  // Convenience setters
  setApiProvider: (value: string) => void;
  setApiModel: (value: string) => void;
  setApiKey: (value: string) => void;
  setTargetLanguage: (value: string) => void;
  setUserCategory: (value: string) => void;
  setUserRole: (value: string) => void;
  setUserLevel: (value: string) => void;
  setUiTheme: (value: string) => void;
  setSpeechRate: (value: number) => void;
  setAutoRead: (value: boolean) => void;
  setPatternVersion: (value: string) => void;
  setAndroidSmartSpeech: (value: boolean) => void;
  setHasSeenWelcome: (value: boolean) => void;
  
  // Vocabulary & Patterns - support both direct value and functional update
  setVocabulary: (value: any[] | ((prev: any[]) => any[])) => void;
  setSavedPatterns: (value: any[] | ((prev: any[]) => any[])) => void;
  
  // Direct state accessors (for convenience)
  uiTheme: string;
  userRole: string;
  userLevel: string;
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  // Hooks for vocabulary, patterns, and progress
  const { vocabulary, setVocabulary } = useVocabulary();
  const { savedPatterns, setSavedPatterns } = usePatterns();
  const { progress, updateProgress } = useProgress();

  // 从 localStorage 初始化状态（简化版，后续优化）
  const [state, setState] = useState<AppState>(() => ({
    apiProvider: localStorage.getItem('APP_API_PROVIDER') || 'gemini',
    apiModel: (() => {
      const saved = localStorage.getItem('APP_API_MODEL');
      if (saved === 'llama3-8b-8192') return 'llama-3.1-8b-instant';
      return saved || 'llama-3.1-8b-instant';
    })(),
    apiKey: localStorage.getItem('APP_GEMINI_API_KEY') || '',
    androidSmartSpeech: localStorage.getItem('APP_ANDROID_SMART_SPEECH') !== 'false',
    correctionMode: 'communicative',
    speechRate: parseInt(localStorage.getItem('APP_SPEECH_RATE') || '5', 10),
    autoRead: localStorage.getItem('APP_AUTO_READ') === 'true',
    uiTheme: localStorage.getItem('APP_UI_THEME') || 'glass',
    targetLanguage: localStorage.getItem('IT_APP_TARGET_LANG') || 'en',
    patternVersion: localStorage.getItem('APP_PATTERN_VERSION') || '02',
    userCategory: (() => {
      const saved = localStorage.getItem('APP_USER_CAT');
      return ['business', 'academic', 'social', 'daily', 'it'].some(c => c === saved) ? saved : 'business';
    })(),
    userRole: (() => {
      const savedRole = localStorage.getItem('APP_USER_ROLE');
      const tempCat = ['business', 'academic', 'social', 'daily', 'it'].some(c => c === localStorage.getItem('APP_USER_CAT')) 
        ? localStorage.getItem('APP_USER_CAT') 
        : 'business';
      // 简化：直接返回 savedRole 或 'it'
      return savedRole || 'it';
    })(),
    userLevel: localStorage.getItem('APP_USER_LEVEL') || 'pre-intermediate',
    vocabulary: [], // Will be synced from hook
    savedPatterns: [], // Will be synced from hook
    hasSeenWelcome: localStorage.getItem('APP_HAS_SEEN_WELCOME') === 'true',
    currentScenario: null,
    progress: { streak: 0, completedScenarios: 0, lastDate: null } // Will be synced from hook
  }));

  // Sync hook states to state
  useEffect(() => {
    setState(prev => ({ ...prev, vocabulary }));
  }, [vocabulary]);

  useEffect(() => {
    setState(prev => ({ ...prev, savedPatterns }));
  }, [savedPatterns]);

  useEffect(() => {
    setState(prev => ({ ...prev, progress }));
  }, [progress]);

  // 持久化到 localStorage（简化版）
  useEffect(() => {
    localStorage.setItem('APP_API_PROVIDER', state.apiProvider);
  }, [state.apiProvider]);

  useEffect(() => {
    localStorage.setItem('APP_API_MODEL', state.apiModel);
  }, [state.apiModel]);

  useEffect(() => {
    localStorage.setItem('APP_GEMINI_API_KEY', state.apiKey);
  }, [state.apiKey]);

  useEffect(() => {
    localStorage.setItem('IT_APP_TARGET_LANG', state.targetLanguage);
  }, [state.targetLanguage]);

  useEffect(() => {
    localStorage.setItem('APP_USER_CAT', state.userCategory);
  }, [state.userCategory]);

  useEffect(() => {
    localStorage.setItem('APP_USER_ROLE', state.userRole);
  }, [state.userRole]);

  useEffect(() => {
    localStorage.setItem('APP_USER_LEVEL', state.userLevel);
  }, [state.userLevel]);

  useEffect(() => {
    localStorage.setItem('APP_UI_THEME', state.uiTheme);
  }, [state.uiTheme]);

  useEffect(() => {
    localStorage.setItem('APP_SPEECH_RATE', state.speechRate.toString());
  }, [state.speechRate]);

  useEffect(() => {
    localStorage.setItem('APP_AUTO_READ', state.autoRead.toString());
  }, [state.autoRead]);

  useEffect(() => {
    localStorage.setItem('APP_PATTERN_VERSION', state.patternVersion);
  }, [state.patternVersion]);

  useEffect(() => {
    localStorage.setItem('APP_ANDROID_SMART_SPEECH', state.androidSmartSpeech.toString());
  }, [state.androidSmartSpeech]);

  useEffect(() => {
    localStorage.setItem('APP_HAS_SEEN_WELCOME', state.hasSeenWelcome.toString());
  }, [state.hasSeenWelcome]);

  // Convenience setters
  const setApiProvider = useCallback((value: string) => {
    setState(prev => ({ ...prev, apiProvider: value }));
  }, []);

  const setApiModel = useCallback((value: string) => {
    setState(prev => ({ ...prev, apiModel: value }));
  }, []);

  const setApiKey = useCallback((value: string) => {
    setState(prev => ({ ...prev, apiKey: value }));
  }, []);

  const setTargetLanguage = useCallback((value: string) => {
    setState(prev => ({ ...prev, targetLanguage: value }));
  }, []);

  const setUserCategory = useCallback((value: string) => {
    setState(prev => ({ ...prev, userCategory: value }));
  }, []);

  const setUserRole = useCallback((value: string) => {
    setState(prev => ({ ...prev, userRole: value }));
  }, []);

  const setUserLevel = useCallback((value: string) => {
    setState(prev => ({ ...prev, userLevel: value }));
  }, []);

  const setUiTheme = useCallback((value: string) => {
    setState(prev => ({ ...prev, uiTheme: value }));
  }, []);

  const setSpeechRate = useCallback((value: number) => {
    setState(prev => ({ ...prev, speechRate: value }));
  }, []);

  const setAutoRead = useCallback((value: boolean) => {
    setState(prev => ({ ...prev, autoRead: value }));
  }, []);

  const setPatternVersion = useCallback((value: string) => {
    setState(prev => ({ ...prev, patternVersion: value }));
  }, []);

  const setAndroidSmartSpeech = useCallback((value: boolean) => {
    setState(prev => ({ ...prev, androidSmartSpeech: value }));
  }, []);

  const setHasSeenWelcome = useCallback((value: boolean) => {
    setState(prev => ({ ...prev, hasSeenWelcome: value }));
  }, []);

  return (
    <AppStateContext.Provider
      value={{
        state,
        setState,
        setApiProvider,
        setApiModel,
        setApiKey,
        setTargetLanguage,
        setUserCategory,
        setUserRole,
        setUserLevel,
        setUiTheme,
        setSpeechRate,
        setAutoRead,
        setPatternVersion,
        setAndroidSmartSpeech,
        setHasSeenWelcome,
        updateProgress,
        setVocabulary,
        setSavedPatterns,
        // Direct state accessors
        uiTheme: state.uiTheme,
        userRole: state.userRole,
        userLevel: state.userLevel
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
}

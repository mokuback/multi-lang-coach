import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserSettings } from '../types';

interface SettingsState extends UserSettings {
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
  setCorrectionMode: (value: string) => void;
  setAndroidSmartSpeech: (value: boolean) => void;
  setHasSeenWelcome: (value: boolean) => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      apiProvider: 'gemini',
      apiModel: 'llama-3.1-8b-instant', // Default model
      apiKey: '',
      androidSmartSpeech: true,
      correctionMode: 'communicative',
      speechRate: 5,
      autoRead: false,
      uiTheme: 'glass',
      targetLanguage: 'en',
      patternVersion: '02',
      userCategory: 'business',
      userRole: 'it',
      userLevel: 'pre-intermediate',
      hasSeenWelcome: false,

      setApiProvider: (value) => set({ apiProvider: value }),
      setApiModel: (value) => set({ apiModel: value }),
      setApiKey: (value) => set({ apiKey: value }),
      setTargetLanguage: (value) => set({ targetLanguage: value }),
      setUserCategory: (value) => set({ userCategory: value }),
      setUserRole: (value) => set({ userRole: value }),
      setUserLevel: (value) => set({ userLevel: value }),
      setUiTheme: (value) => {
        document.documentElement.setAttribute('data-theme', value);
        set({ uiTheme: value });
      },
      setSpeechRate: (value) => set({ speechRate: value }),
      setAutoRead: (value) => set({ autoRead: value }),
      setPatternVersion: (value) => set({ patternVersion: value }),
      setCorrectionMode: (value) => set({ correctionMode: value }),
      setAndroidSmartSpeech: (value) => set({ androidSmartSpeech: value }),
      setHasSeenWelcome: (value) => set({ hasSeenWelcome: value }),
    }),
    {
      name: 'app-settings-storage', // name of item in the storage (must be unique)
      // Only keep primitive settings in local storage
    }
  )
);

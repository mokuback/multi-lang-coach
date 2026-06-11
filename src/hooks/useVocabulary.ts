import { useState, useEffect, useCallback } from 'react';

const VOCABULARY_KEY = 'IT_ENGLISH_APP_VOCABULARY';

export interface VocabularyItem {
  id: string;
  term: string;
  meaning: string;
  example?: string;
  phonetic?: string;
  partOfSpeech?: string;
}

export function useVocabulary() {
  const [vocabulary, setVocabulary] = useState<VocabularyItem[]>(() => {
    const saved = localStorage.getItem(VOCABULARY_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem(VOCABULARY_KEY, JSON.stringify(vocabulary));
  }, [vocabulary]);

  return { vocabulary, setVocabulary };
}

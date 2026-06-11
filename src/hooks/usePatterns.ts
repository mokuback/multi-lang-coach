import { useState, useEffect, useCallback } from 'react';

const PATTERNS_KEY = 'IT_ENGLISH_APP_PATTERNS';

export interface PatternItem {
  id: string;
  pattern: string;
  explanation?: string;
  example?: string;
}

export function usePatterns() {
  const [savedPatterns, setSavedPatterns] = useState<PatternItem[]>(() => {
    const saved = localStorage.getItem(PATTERNS_KEY);
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
    localStorage.setItem(PATTERNS_KEY, JSON.stringify(savedPatterns));
  }, [savedPatterns]);

  return { savedPatterns, setSavedPatterns };
}

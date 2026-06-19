import { useState, useEffect, useCallback } from 'react';
import { idbGet, idbSet } from '../utils/idbStorage';

const STORE: import('../utils/idbStorage').IDBStoreName = 'vocabulary';
const KEY = 'vocabulary';

import { VocabularyItem } from '../types';

export function useVocabulary() {
  const [vocabulary, setVocabulary] = useState<VocabularyItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Async load from IDB on mount
  useEffect(() => {
    idbGet<VocabularyItem[]>(STORE, KEY).then(data => {
      setVocabulary(data ?? []);
      setLoaded(true);
    });
  }, []);

  // Persist to IDB on change (skip initial empty write before load)
  useEffect(() => {
    if (!loaded) return;
    idbSet(STORE, KEY, vocabulary);
  }, [vocabulary, loaded]);

  return { vocabulary, setVocabulary };
}
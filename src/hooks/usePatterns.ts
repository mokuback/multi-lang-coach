import { useState, useEffect, useCallback } from 'react';
import { idbGet, idbSet } from '../utils/idbStorage';

const STORE: import('../utils/idbStorage').IDBStoreName = 'patterns';
const KEY = 'patterns';

import { PatternItem } from '../types';

export function usePatterns() {
  const [savedPatterns, setSavedPatterns] = useState<PatternItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Async load from IDB on mount
  useEffect(() => {
    idbGet<PatternItem[]>(STORE, KEY).then(data => {
      setSavedPatterns(data ?? []);
      setLoaded(true);
    });
  }, []);

  // Persist to IDB on change
  useEffect(() => {
    if (!loaded) return;
    idbSet(STORE, KEY, savedPatterns);
  }, [savedPatterns, loaded]);

  return { savedPatterns, setSavedPatterns };
}
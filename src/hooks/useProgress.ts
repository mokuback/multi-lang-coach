import { useState, useEffect, useCallback } from 'react';
import { idbGet, idbSet } from '../utils/idbStorage';

const STORE: import('../utils/idbStorage').IDBStoreName = 'progress';
const KEY = 'progress';

export interface Progress {
  streak: number;
  completedScenarios: number;
  lastDate: string | null;
}

const DEFAULT: Progress = { streak: 0, completedScenarios: 0, lastDate: null };

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(DEFAULT);
  const [loaded, setLoaded] = useState(false);

  // Async load from IDB on mount
  useEffect(() => {
    idbGet<Progress>(STORE, KEY).then(data => {
      setProgress(data ?? DEFAULT);
      setLoaded(true);
    });
  }, []);

  // Persist to IDB on change
  useEffect(() => {
    if (!loaded) return;
    idbSet(STORE, KEY, progress);
  }, [progress, loaded]);

  const updateProgress = useCallback(() => {
    setProgress(prev => {
      const today = new Date().toDateString();
      let { streak, completedScenarios, lastDate } = prev;
      completedScenarios += 1;

      if (lastDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastDate === yesterday.toDateString()) {
          streak += 1;
        } else {
          streak = 1;
        }
        lastDate = today;
      }

      return { streak, completedScenarios, lastDate };
    });
  }, []);

  return { progress, updateProgress };
}
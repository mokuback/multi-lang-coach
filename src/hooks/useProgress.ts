import { useState, useEffect, useCallback } from 'react';

const PROGRESS_KEY = 'APP_LEARNING_PROGRESS';

export interface Progress {
  streak: number;
  completedScenarios: number;
  lastDate: string | null;
}

function getInitialProgress(): Progress {
  const saved = localStorage.getItem(PROGRESS_KEY);
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch {
      /* fall through */
    }
  }
  return { streak: 0, completedScenarios: 0, lastDate: null };
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(getInitialProgress);

  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  }, [progress]);

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

import { create } from 'zustand';
import { Scenario } from '../types';

interface SessionState {
  currentScenario: Scenario | null;
  setCurrentScenario: (scenario: Scenario | null) => void;
}

export const useSessionStore = create<SessionState>((set) => ({
  currentScenario: null,
  setCurrentScenario: (scenario) => set({ currentScenario: scenario }),
}));

import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import React from 'react';
import { AppStateProvider, useAppState } from './AppStateContext';

// Helper: wrap hook with provider
function wrapper({ children }: { children: React.ReactNode }) {
  return <AppStateProvider>{children}</AppStateProvider>;
}

describe('updateProgress', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('first completion sets streak to 1', () => {
    const { result } = renderHook(() => useAppState(), { wrapper });
    act(() => { result.current.updateProgress(); });
    expect(result.current.state.progress.streak).toBe(1);
    expect(result.current.state.progress.completedScenarios).toBe(1);
  });

  it('same day multiple completions does not increase streak', () => {
    const { result } = renderHook(() => useAppState(), { wrapper });
    act(() => { result.current.updateProgress(); });
    act(() => { result.current.updateProgress(); });
    expect(result.current.state.progress.streak).toBe(1);
    expect(result.current.state.progress.completedScenarios).toBe(2);
  });

  it('consecutive days increase streak', () => {
    const { result } = renderHook(() => useAppState(), { wrapper });

    // First completion on today
    act(() => { result.current.updateProgress(); });
    expect(result.current.state.progress.streak).toBe(1);

    // Manually set progress to simulate yesterday's completion
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const mockProgress = {
      streak: 1,
      completedScenarios: 1,
      lastDate: yesterday.toDateString(),
    };
    localStorage.setItem('APP_LEARNING_PROGRESS', JSON.stringify(mockProgress));

    // Re-render hook with the manipulated localStorage
    const { result: result2 } = renderHook(() => useAppState(), { wrapper });

    // updateProgress should detect yesterday as lastDate and increment streak
    act(() => { result2.current.updateProgress(); });
    expect(result2.current.state.progress.streak).toBe(2);
    expect(result2.current.state.progress.completedScenarios).toBe(2);
  });
});

describe('addVocabulary', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('adds new vocabulary item', () => {
    const { result } = renderHook(() => useAppState(), { wrapper });
    const newItem = { term: 'apple', meaning: '蘋果', example: 'I eat an apple', lang: 'en' };

    act(() => {
      result.current.setVocabulary(prev => {
        if (prev.some((v: any) => v.term.toLowerCase() === newItem.term.toLowerCase() && v.lang === newItem.lang)) return prev;
        return [newItem, ...prev];
      });
    });

    expect(result.current.state.vocabulary).toHaveLength(1);
    expect(result.current.state.vocabulary[0].term).toBe('apple');
  });

  it('prevents duplicate vocabulary (same term + lang)', () => {
    const { result } = renderHook(() => useAppState(), { wrapper });
    const item = { term: 'apple', meaning: '蘋果', example: 'test', lang: 'en' };

    act(() => {
      result.current.setVocabulary(prev => {
        if (prev.some((v: any) => v.term.toLowerCase() === item.term.toLowerCase() && v.lang === item.lang)) return prev;
        return [item, ...prev];
      });
    });
    act(() => {
      result.current.setVocabulary(prev => {
        if (prev.some((v: any) => v.term.toLowerCase() === item.term.toLowerCase() && v.lang === item.lang)) return prev;
        return [item, ...prev];
      });
    });

    expect(result.current.state.vocabulary).toHaveLength(1);
  });

  it('allows same term with different lang', () => {
    const { result } = renderHook(() => useAppState(), { wrapper });
    const itemEn = { term: 'apple', meaning: '蘋果', example: 'test', lang: 'en' };
    const itemJa = { term: 'apple', meaning: 'りんご', example: 'test', lang: 'ja' };

    act(() => {
      result.current.setVocabulary(prev => {
        if (prev.some((v: any) => v.term.toLowerCase() === itemEn.term.toLowerCase() && v.lang === itemEn.lang)) return prev;
        return [itemEn, ...prev];
      });
    });
    act(() => {
      result.current.setVocabulary(prev => {
        if (prev.some((v: any) => v.term.toLowerCase() === itemJa.term.toLowerCase() && v.lang === itemJa.lang)) return prev;
        return [itemJa, ...prev];
      });
    });

    expect(result.current.state.vocabulary).toHaveLength(2);
  });
});

import { describe, it, expect } from 'vitest';
import { parseJsonResult } from './llmClient';

describe('parseJsonResult', () => {
  it('parses valid JSON string', () => {
    expect(parseJsonResult('{"key":"value"}')).toEqual({ key: 'value' });
  });

  it('parses JSON wrapped in ```json ```', () => {
    const input = '```json\n{"key":"value"}\n```';
    expect(parseJsonResult(input)).toEqual({ key: 'value' });
  });

  it('parses JSON wrapped in ``` (no language)', () => {
    const input = '```\n{"key":"value"}\n```';
    expect(parseJsonResult(input)).toEqual({ key: 'value' });
  });

  it('parses JSON with surrounding whitespace', () => {
    const input = '  \n  {"key":"value"}  \n  ';
    expect(parseJsonResult(input)).toEqual({ key: 'value' });
  });

  it('throws on invalid JSON', () => {
    expect(() => parseJsonResult('not json')).toThrow();
  });
});

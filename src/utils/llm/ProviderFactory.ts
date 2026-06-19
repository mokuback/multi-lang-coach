import { LLMProvider } from './BaseProvider';
import { GeminiProvider } from './GeminiProvider';
import { GroqProvider } from './GroqProvider';

export class ProviderFactory {
  static getProvider(providerName: string): LLMProvider {
    if (providerName === 'groq') {
      return new GroqProvider();
    }
    // Default to Gemini
    return new GeminiProvider();
  }
}

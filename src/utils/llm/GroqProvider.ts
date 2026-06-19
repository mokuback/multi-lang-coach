import { LLMProvider } from './BaseProvider';
import { getWhisperLang } from '../languageMap';

export class GroqProvider implements LLMProvider {
  async generateContent(systemInstruction: string, chatHistory: any[], model: string, key: string, temperature = 0.7, requireJson = true): Promise<string> {
    const url = 'https://api.groq.com/openai/v1/chat/completions';
    
    const messages: any[] = [];
    if (systemInstruction) {
      messages.push({ role: 'system', content: systemInstruction });
    }
    
    chatHistory.forEach(msg => {
      messages.push({
        role: msg.role === 'assistant' ? 'assistant' : 'user',
        content: msg.role === 'system' ? `[Context]: ${msg.content}` : msg.content
      });
    });

    const payload: any = {
      model: model || 'llama-3.1-8b-instant',
      messages: messages,
      temperature: temperature
    };
    
    if (requireJson) {
      payload.response_format = { type: "json_object" };
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || response.statusText);
    }

    const data = await response.json();
    const textOutput = data.choices?.[0]?.message?.content;
    
    if (!textOutput) throw new Error('Groq 回傳了無效的格式');
    return textOutput;
  }

  async transcribeAudio(base64Audio: string, audioBlob: Blob, key: string, targetLanguage: string, uiLang: string): Promise<string> {
    const url = 'https://api.groq.com/openai/v1/audio/transcriptions';
    const formData = new FormData();
    formData.append('file', audioBlob, 'audio.webm');
    formData.append('model', 'whisper-large-v3');
    formData.append('response_format', 'text');
    formData.append('language', getWhisperLang(targetLanguage));

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`
      },
      body: formData
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || response.statusText);
    }

    const textOutput = await response.text();
    return textOutput.trim();
  }
}

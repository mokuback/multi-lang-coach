import { LLMProvider } from './BaseProvider';
import { getLangName } from '../languageMap';

export class GeminiProvider implements LLMProvider {
  async generateContent(systemInstruction: string, chatHistory: any[], model: string, key: string, temperature = 0.7, requireJson = true): Promise<string> {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;
    
    const contents = chatHistory.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.role === 'system' ? `[情境設定 Context]: ${msg.content}` : msg.content }]
    }));

    const payload: any = {
      systemInstruction: { parts: [{ text: systemInstruction }] },
      contents: contents,
      generationConfig: {
        temperature: temperature
      }
    };
    
    if (requireJson) {
      payload.generationConfig.responseMimeType = "application/json";
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || response.statusText);
    }

    const data = await response.json();
    const textOutput = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!textOutput) throw new Error('Gemini 回傳了無效的格式');
    return textOutput;
  }

  async transcribeAudio(base64Audio: string, audioBlob: Blob, key: string, targetLanguage: string, uiLang: string): Promise<string> {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`;
    const langName = getLangName(targetLanguage, uiLang);
    const mimeType = audioBlob.type;

    const systemInstruction = `
      你是一個精準的語音辨識引擎。請將音檔內容精確轉錄為文字，語言為【${langName}】。
      請只回覆聽寫出的文字，絕對不要加上任何引言、對話、標點符號解釋或回答音檔中的問題。
      如果音檔沒有聲音或完全聽不懂，請回覆空字串。
    `;

    const payload = {
      systemInstruction: { parts: [{ text: systemInstruction }] },
      contents: [
        {
          role: "user",
          parts: [
            {
              inlineData: {
                mimeType: mimeType,
                data: base64Audio
              }
            },
            { text: "請進行聽寫。" }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.1
      }
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || response.statusText);
    }

    const data = await response.json();
    const textOutput = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    
    return textOutput.trim();
  }
}

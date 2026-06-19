export interface LLMProvider {
  generateContent(
    systemInstruction: string, 
    chatHistory: any[], 
    model: string, 
    key: string, 
    temperature?: number,
    requireJson?: boolean
  ): Promise<string>;
  
  transcribeAudio(
    base64Audio: string, 
    audioBlob: Blob, 
    key: string, 
    targetLanguage: string, 
    uiLang: string
  ): Promise<string>;
}

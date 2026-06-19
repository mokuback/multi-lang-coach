import { buildChatSystemPrompt, buildAnalyzeSentencePrompt, buildPolishPrompt, buildConversationAnalysisPrompt } from '../prompts';
import { getLangName } from './languageMap';
import { ProviderFactory } from './llm/ProviderFactory';

export const parseJsonResult = (textOutput: string) => {
  try {
    return JSON.parse(textOutput);
  } catch {
    const cleaned = textOutput.replace(/```json/gi, '').replace(/```/g, '').trim();
    return JSON.parse(cleaned);
  }
};

export const callLLMAPI = async (chatHistory: any[], apiProvider: string, apiModel: string, apiKey: string, correctionMode: string, targetLanguage = 'en', userCategory = 'workplace', userRole = 'it', userLevel = 'pre-intermediate', uiLang = 'zh-TW') => {
  const systemInstruction = buildChatSystemPrompt({
    targetLanguage,
    userLevel,
    userCategory,
    userRole,
    correctionMode,
    uiLang,
    isPatternDrill: chatHistory[0]?.content?.includes("語詞代換練習"),
    isCurriculumDrill: chatHistory[0]?.content?.includes("[CURRICULUM_DRILL]")
  });

  const provider = ProviderFactory.getProvider(apiProvider);
  
  try {
    const textOutput = await provider.generateContent(systemInstruction, chatHistory, apiModel, apiKey, 0.7, true);
    return parseJsonResult(textOutput);
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const analyzeSentenceAPI = async (sentence: string, apiProvider: string, apiModel: string, apiKey: string, targetLanguage = 'en', uiLang = 'zh-TW') => {
  const systemInstruction = buildAnalyzeSentencePrompt({ targetLanguage, uiLang });
  const chatHistory = [{ role: 'user', content: `請解析這句外語: "${sentence}"` }];
  
  const provider = ProviderFactory.getProvider(apiProvider);

  try {
    const textOutput = await provider.generateContent(systemInstruction, chatHistory, apiModel, apiKey, 0.3, true);
    return parseJsonResult(textOutput);
  } catch (error) {
    console.error("Analysis API Error:", error);
    throw error;
  }
};

export const polishSentenceAPI = async (draftText: string, chatHistory: any[], apiProvider: string, apiModel: string, apiKey: string, targetLanguage = 'en', uiLang = 'zh-TW') => {
  const systemInstruction = buildPolishPrompt({ targetLanguage, uiLang, chatHistory, draftText });
  const langName = getLangName(targetLanguage, uiLang);

  const contextText = chatHistory
    .filter(msg => msg.role !== 'system')
    .slice(-4)
    .map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
    .join('\n');

  const formattedHistory = [{ role: 'user', content: `[近期對話紀錄]\n${contextText}\n\n[使用者想要表達的草稿]\n${draftText}\n\n請幫我修飾這段草稿或翻譯成正統${langName}。` }];
  
  const provider = ProviderFactory.getProvider(apiProvider);

  try {
    const textOutput = await provider.generateContent(systemInstruction, formattedHistory, apiModel, apiKey, 0.3, true);
    return parseJsonResult(textOutput);
  } catch (error) {
    console.error("Polish API Error:", error);
    throw error;
  }
};

export const analyzeConversationAPI = async (chatHistory: any[], apiProvider: string, apiModel: string, apiKey: string, targetLanguage = 'en', uiLang = 'zh-TW') => {
  const systemInstruction = buildConversationAnalysisPrompt({ targetLanguage, uiLang, chatHistory });

  const conversationText = chatHistory
    .filter(msg => msg.role !== 'system')
    .map(msg => `${msg.role === 'user' ? '使用者 (User)' : 'AI (Assistant)'}: ${msg.content}`)
    .join('\n\n');

  const formattedHistory = [{ role: 'user', content: `[完整對話紀錄]\n${conversationText}\n\n請根據以上對話，給予總結性的評估與建議。` }];
  
  const provider = ProviderFactory.getProvider(apiProvider);

  try {
    const requireJson = apiProvider !== 'groq'; 
    const textOutput = await provider.generateContent(systemInstruction, formattedHistory, apiModel, apiKey, 0.5, requireJson);
    return textOutput;
  } catch (error) {
    console.error("Conversation Analysis API Error:", error);
    throw error;
  }
};

export const transcribeAudio = async (apiProvider: string, apiKey: string, base64Audio: string, audioBlob: Blob, targetLanguage = 'en', uiLang: string = 'zh-TW') => {
  const provider = ProviderFactory.getProvider(apiProvider);
  
  try {
    return await provider.transcribeAudio(base64Audio, audioBlob, apiKey, targetLanguage, uiLang);
  } catch (error) {
    console.error("Transcription API Error:", error);
    throw error;
  }
};

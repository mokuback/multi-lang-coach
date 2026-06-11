import { buildChatSystemPrompt, buildAnalyzeSentencePrompt, buildPolishPrompt, buildConversationAnalysisPrompt } from '../prompts';

const getProviderConfig = (provider, model, key) => {
  if (provider === 'groq') {
    return {
      url: 'https://api.groq.com/openai/v1/chat/completions',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}`
      }
    };
  }
  // Default to Gemini
  return {
    url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`,
    headers: { 'Content-Type': 'application/json' }
  };
};

const formatPayload = (provider, model, systemInstruction, chatHistory = [], temperature = 0.7) => {
  if (provider === 'groq') {
    const messages = [];
    if (systemInstruction) {
      messages.push({ role: 'system', content: systemInstruction });
    }
    chatHistory.forEach(msg => {
      messages.push({
        role: msg.role === 'assistant' ? 'assistant' : 'user',
        content: msg.role === 'system' ? `[Context]: ${msg.content}` : msg.content
      });
    });

    return {
      model: model || 'llama-3.1-8b-instant',
      messages: messages,
      temperature: temperature,
      response_format: { type: "json_object" }
    };
  }

  // Default to Gemini
  const contents = chatHistory.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.role === 'system' ? `[情境設定 Context]: ${msg.content}` : msg.content }]
  }));

  return {
    systemInstruction: { parts: [{ text: systemInstruction }] },
    contents: contents,
    generationConfig: {
      responseMimeType: "application/json",
      temperature: temperature
    }
  };
};

const executeRequest = async (provider, url, headers, payload) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error?.message || response.statusText);
  }

  const data = await response.json();
  let textOutput = '';
  
  if (provider === 'groq') {
    textOutput = data.choices?.[0]?.message?.content;
  } else {
    textOutput = data.candidates?.[0]?.content?.parts?.[0]?.text;
  }
  
  if (!textOutput) throw new Error(`${provider} 回傳了無效的格式`);
  return textOutput;
};

export const parseJsonResult = (textOutput) => {
  try {
    return JSON.parse(textOutput);
  } catch {
    const cleaned = textOutput.replace(/\`\`\`json/gi, '').replace(/\`\`\`/g, '').trim();
    return JSON.parse(cleaned);
  }
};

export const callLLMAPI = async (chatHistory, apiProvider, apiModel, apiKey, correctionMode, targetLanguage = 'en', userCategory = 'workplace', userRole = 'it', userLevel = 'pre-intermediate', uiLang = 'zh-TW') => {
  const systemInstruction = buildChatSystemPrompt({
    targetLanguage,
    userLevel,
    userCategory,
    userRole,
    correctionMode,
    uiLang,
    isPatternDrill: chatHistory[0]?.content?.includes("語詞代換練習"),
    isCurriculumDrill: chatHistory[0]?.content?.includes("[CURRICULUM_DRILL]")
  })

  const { url, headers } = getProviderConfig(apiProvider, apiModel, apiKey);
  const payload = formatPayload(apiProvider, apiModel, systemInstruction, chatHistory, 0.7);

  try {
    const textOutput = await executeRequest(apiProvider, url, headers, payload);
    return parseJsonResult(textOutput);
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const analyzeSentenceAPI = async (sentence, apiProvider, apiModel, apiKey, targetLanguage = 'en', uiLang = 'zh-TW') => {
  const systemInstruction = buildAnalyzeSentencePrompt({ targetLanguage, uiLang });

  const chatHistory = [{ role: 'user', content: `請解析這句外語: "${sentence}"` }];
  const { url, headers } = getProviderConfig(apiProvider, apiModel, apiKey);
  const payload = formatPayload(apiProvider, apiModel, systemInstruction, chatHistory, 0.3);

  try {
    const textOutput = await executeRequest(apiProvider, url, headers, payload);
    return parseJsonResult(textOutput);
  } catch (error) {
    console.error("Analysis API Error:", error);
    throw error;
  }
};

export const polishSentenceAPI = async (draftText, chatHistory, apiProvider, apiModel, apiKey, targetLanguage = 'en', uiLang = 'zh-TW') => {
  const systemInstruction = buildPolishPrompt({ targetLanguage, uiLang, chatHistory, draftText });
  const langName = targetLanguage === 'en' ? '英文' : '日文';

  const contextText = chatHistory
    .filter(msg => msg.role !== 'system')
    .slice(-4)
    .map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
    .join('\
');

  const formattedHistory = [{ role: 'user', content: `[近期對話紀錄]\
${contextText}\
\
[使用者想要表達的草稿]\
${draftText}\
\
請幫我修飾這段草稿或翻譯成正統${langName}。` }];
  const { url, headers } = getProviderConfig(apiProvider, apiModel, apiKey);
  const payload = formatPayload(apiProvider, apiModel, systemInstruction, formattedHistory, 0.3);

  try {
    const textOutput = await executeRequest(apiProvider, url, headers, payload);
    return parseJsonResult(textOutput);
  } catch (error) {
    console.error("Polish API Error:", error);
    throw error;
  }
};

export const analyzeConversationAPI = async (chatHistory, apiProvider, apiModel, apiKey, targetLanguage = 'en', uiLang = 'zh-TW') => {
  const systemInstruction = buildConversationAnalysisPrompt({ targetLanguage, uiLang, chatHistory });

  const conversationText = chatHistory
    .filter(msg => msg.role !== 'system')
    .map(msg => `${msg.role === 'user' ? '使用者 (User)' : 'AI (Assistant)'}: ${msg.content}`)
    .join('\
\
');

  const formattedHistory = [{ role: 'user', content: `[完整對話紀錄]\
${conversationText}\
\
請根據以上對話，給予總結性的評估與建議。` }];
  const { url, headers } = getProviderConfig(apiProvider, apiModel, apiKey);
  const payload = formatPayload(apiProvider, apiModel, systemInstruction, formattedHistory, 0.5);

  // Since this doesn't strictly require JSON format, we might want to override Groq's response_format
  if (apiProvider === 'groq') {
    delete payload.response_format;
  }

  try {
    return await executeRequest(apiProvider, url, headers, payload);
  } catch (error) {
    console.error("Conversation Analysis API Error:", error);
    throw error;
  }
};

export const transcribeAudio = async (apiProvider, apiKey, base64Audio, audioBlob, targetLanguage = 'en') => {
  if (apiProvider === 'groq') {
    const url = 'https://api.groq.com/openai/v1/audio/transcriptions';
    const formData = new FormData();
    // Groq requires a file object with a name
    formData.append('file', audioBlob, 'audio.webm');
    formData.append('model', 'whisper-large-v3');
    formData.append('response_format', 'text');
    if (targetLanguage === 'en') {
      formData.append('language', 'en');
    } else if (targetLanguage === 'ja') {
      formData.append('language', 'ja');
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`
        },
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || response.statusText);
      }

      const textOutput = await response.text();
      return textOutput.trim();
    } catch (error) {
      console.error("Groq Transcription API Error:", error);
      throw error;
    }
  }

  // Gemini implementation
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  const langName = targetLanguage === 'en' ? '英文' : '日文';
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

  try {
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
  } catch (error) {
    console.error("Gemini Transcription API Error:", error);
    throw error;
  }
};

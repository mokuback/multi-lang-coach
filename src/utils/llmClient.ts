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

const parseJsonResult = (textOutput) => {
  try {
    return JSON.parse(textOutput);
  } catch {
    const cleaned = textOutput.replace(/\`\`\`json/gi, '').replace(/\`\`\`/g, '').trim();
    return JSON.parse(cleaned);
  }
};

export const callLLMAPI = async (chatHistory, apiProvider, apiModel, apiKey, correctionMode, targetLanguage = 'en', userCategory = 'workplace', userRole = 'it', userLevel = 'pre-intermediate', uiLang = 'zh-TW') => {
  const langName = targetLanguage === 'en' ? '英文' : '日文';
  const uiLangNameMap = { 'zh-TW': '繁體中文', 'zh-CN': '簡體中文', 'en': 'English', 'ja': '日本語', 'ko': '한국어', 'es': 'Español', 'fr': 'Français' };
  const uiLangName = uiLangNameMap[uiLang] || 'English';

  const strictnessRule =
    correctionMode === 'strict'
      ? "【超級嚴格】：挑出任何不道地、不夠專業或是些微的文法與拼字錯誤，務必提供最專業的糾正。"
      : "【溝通為主】：只有當使用者犯下嚴重影響語意理解，或是非常基礎的文法錯誤（如時態顛倒或主謂不一致）時才進行糾正。只要能聽懂且符合一般對話習慣，請勿吹毛求疵。";

  let lengthInstruction = "";
  if (userLevel === 'beginner') {
    lengthInstruction = "【長度與句型限制】：因為使用者是初學者，你的對話回覆「必須非常簡短」，每次回覆請嚴格控制在 1 到 2 句非常簡單的短句之內。絕對不要長篇大論。";
  } else if (userLevel === 'pre-intermediate') {
    lengthInstruction = "【長度與句型限制】：你的對話回覆請保持簡潔，每次回覆控制在 2 到 3 句短句之內，避免複雜的子句。";
  } else if (userLevel === 'intermediate') {
    lengthInstruction = "【長度限制】：維持一般對話的長度，避免過於冗長的獨白，多留給使用者回應的空間。";
  } else {
    lengthInstruction = "【長度限制】：可根據話題自然展開對話，長度不限。";
  }

  const vocabFormatInstruction = targetLanguage === 'en' 
    ? `"phonetic": "該單字的KK音標，若為長句可為空字串",
        "partOfSpeech": "該單字的詞性簡寫(如 n., vi., adj.)，若非單一字彙則可為空字串"`
    : `"phonetic": "該單字的平假名拼音，並在後方括號內標註重音數字(例如：きのう [0])。如果單字本身為純假名，請只保留重音數字(例如：[1])",
        "partOfSpeech": "該單字的日文詞性簡寫(如 名, 動, 形, 副)，若非單一字彙則可為空字串"`;

  const isPatternDrill = chatHistory[0]?.content?.includes("語詞代換練習");
  const isCurriculumDrill = chatHistory[0]?.content?.includes("[CURRICULUM_DRILL]");
  
  let systemInstruction = "";

  if (isPatternDrill || isCurriculumDrill) {
    systemInstruction = `
      你是一個嚴格但友善的語言測驗教練。我們正在進行 ${langName} 的闖關練習。
      ${isCurriculumDrill ? "你必須嚴格遵守系統提示中給定的單元主題、單字與句型限制，不可超綱。" : ""}
      目前的文法糾錯標準為：${strictnessRule}

      你必須嚴格回傳 JSON 格式，不允許 Markdown 代碼塊標記 (例如 \`\`\`json)。
      JSON 格式必須精確符合以下結構：
      {
        "content": "教練的鼓勵與下一個測試情境的中文引導 (例如：「很好！現在請用這個句型告訴我...」)",
        "translation": "上一句話的目標外語翻譯 (非必填)",
        "correction": {
          "original": "錯誤的原句",
          "error": "錯誤片段",
          "fixed": "正確用法",
          "explanation": "錯誤解釋"
        },
        "extractedVocab": null
      }
      備註：若無文法錯誤，correction 為 null。
    `;
  } else {
    systemInstruction = `
      你是一個專門幫助使用者練習 ${langName} 口語交流的 AI 對話夥伴。
      目前你們對話的情境脈絡是【${userCategory} - ${userRole}】。
      使用者的程度設定為【${userLevel}】，請務必使用符合該程度的字彙與文法結構進行對話。絕對避免使用超過使用者程度太多的生僻詞或複雜句型。
      ${lengthInstruction}
      目前的文法糾錯標準為：${strictnessRule}
      
      你必須嚴格回傳 JSON 格式，且「絕對不能」包含任何 Markdown 代碼塊標記 (例如 \`\`\`json) ，請直接給出純 JSON 物件。
      JSON 格式必須精確符合以下結構（所有欄位名稱必須一致）：
      {
        "content": "你的真實對白回應（請扮演對話夥伴，用流利的${langName}回覆）。",
        "translation": "你剛才回覆的那句${langName}對白的 ${uiLangName} 翻譯。",
        "correction": {
          "original": "使用者輸入中發生錯誤的原句",
          "error": "具體錯誤的片段或單字",
          "fixed": "正確的用法",
          "explanation": "用 ${uiLangName} 簡略解釋為什麼錯誤以及為什麼要這樣改"
        },
        "extractedVocab": {
          "term": "對方或你的對白中，值得學習的進階詞彙或片語",
          ${vocabFormatInstruction},
          "meaning": "${uiLangName} 解釋",
          "example": "包含該詞彙的${langName}例句"
        }
      }

      備註：
      - 如果使用者的外語沒有達到目前的糾錯標準，請將 "correction" 設為 null。
      - 如果你認為這次的回覆中沒有值得特別記下的新單字，請將 "extractedVocab" 設為 null。
      - 請依據使用者最後講的話，順著系統提示的情境繼續對話。
    `;
  }

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
  const langName = targetLanguage === 'en' ? '美語' : '日語';
  const termName = targetLanguage === 'en' ? '英文單字或片語' : '日文單字、假名或片語';
  const uiLangNameMap = { 'zh-TW': '繁體中文', 'zh-CN': '簡體中文', 'en': 'English', 'ja': '日本語', 'ko': '한국어', 'es': 'Español', 'fr': 'Français' };
  const uiLangName = uiLangNameMap[uiLang] || 'English';

  const vocabFormatInstruction = targetLanguage === 'en' 
    ? `"phonetic": "KK音標", "zh": "${uiLangName}解釋", "partOfSpeech": "英文詞性簡寫(如 n., vi.)"`
    : `"phonetic": "平假名拼音加重音數字(如：きのう [0])，純假名則只留重音(如：[1])", "zh": "${uiLangName}解釋", "partOfSpeech": "日文詞性簡寫(如 名, 動, 形)"`;

  const systemInstruction = `
    你是一個專精於多情境${langName}教學的資深教練。
    請分析以下句子，並提供具有「實戰性」的教學解析。
    
    JSON 格式必須精確符合以下結構：
    {
      "vocab": [
        { "word": "${termName}", ${vocabFormatInstruction}, "example": "一個正確的${langName}例句" }
      ],
      "patterns": [
        { "pattern": "實用句型 / 慣用語", "explanation": "如何在其他場景中套用這個句型，並請提供一個簡短的${langName}例句 (請用 ${uiLangName} 解釋)" }
      ],
      "grammar": "整句文法結構的 ${uiLangName} 簡明解析，請著重於實戰語感，而非死板的傳統文法術語。"
    }
  `;

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
  const langName = targetLanguage === 'en' ? '英文' : '日文';
  const uiLangNameMap = { 'zh-TW': '繁體中文', 'zh-CN': '簡體中文', 'en': 'English', 'ja': '日本語', 'ko': '한국어', 'es': 'Español', 'fr': 'Français' };
  const uiLangName = uiLangNameMap[uiLang] || 'English';

  const systemInstruction = `
    你是一個職場與生活場景的${langName}修飾助手。
    使用者在和對話夥伴練習口語時遇到了困難。以下是他們寫的草稿（可能包含 ${uiLangName}、${uiLangName}與${langName}夾雜，或是不通順的外語）。
    請根據之前的對話上下文，將這個草稿「翻譯或修飾」成一句自然、專業、符合目前情境的「全${langName}句子」。
    
    你必須嚴格回傳 JSON 格式，不允許 Markdown 代碼塊標記 (例如 \`\`\`json)。
    JSON 格式必須精確符合以下結構（只有一個鍵）：
    {
      "polished": "完美的${langName}句子"
    }
  `;

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
  const langName = targetLanguage === 'en' ? '英文' : '日文';
  const uiLangNameMap = { 'zh-TW': '繁體中文', 'zh-CN': '簡體中文', 'en': 'English', 'ja': '日本語', 'ko': '한국어', 'es': 'Español', 'fr': 'Français' };
  const uiLangName = uiLangNameMap[uiLang] || 'English';

  const systemInstruction = `
    你是一個資深的 ${langName} 語言教練。
    請閱讀以下使用者與 AI 之間的完整對話紀錄。
    根據使用者的整體表現（詞彙使用、文法準確度、語句流暢度、語氣自然度等），給出一段具有建設性的整體評估與建議。
    請直接以 ${uiLangName} 給出一段完整且排版清晰的純文字分析結果（支援簡單的換行，但不要回傳 Markdown 的 \`\`\` 標記）。
  `;

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

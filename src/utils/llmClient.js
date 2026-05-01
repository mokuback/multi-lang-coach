export const callGeminiAPI = async (chatHistory, apiKey, correctionMode, targetLanguage = 'en', userCategory = 'workplace', userRole = 'it', userLevel = 'pre-intermediate') => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  const langName = targetLanguage === 'en' ? '英文' : '日文';

  const strictnessRule =
    correctionMode === 'strict'
      ? "【超級嚴格】：挑出任何不道地、不夠專業或是些微的文法與拼字錯誤，務必提供最專業的糾正。"
      : "【溝通為主】：只有當使用者犯下嚴重影響語意理解，或是非常基礎的文法錯誤（如時態顛倒或主謂不一致）時才進行糾正。只要能聽懂且符合一般對話習慣，請勿吹毛求疵。";

  // Check if it's drill mode or standard chat
  const isDrill = chatHistory[0]?.content?.includes("語詞代換練習");
  
  const systemInstruction = isDrill ? `
    你是一個語言測驗教練。我們正在進行 ${langName} 的語詞代換練習。
    使用者的程度設定為【${userLevel}】，請務必使用對應程度的字彙與文法。
    目前的文法糾錯標準為：${strictnessRule}

    你必須嚴格回傳 JSON 格式，不允許 Markdown 代碼塊標記 (例如 \`\`\`json)。
    JSON 格式必須精確符合以下結構：
    {
      "content": "教練的中文鼓勵與下一個測試情境提示 (例如：「很好！現在請用這個句型告訴我...」)",
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
  ` : `
    你是一個專門幫助使用者練習 ${langName} 口語交流的 AI 對話夥伴。
    目前你們對話的情境脈絡是【${userCategory} - ${userRole}】。
    使用者的程度設定為【${userLevel}】，請務必使用符合該程度的字彙與文法結構進行對話。絕對避免使用超過使用者程度太多的生僻詞或複雜句型。
    目前的文法糾錯標準為：${strictnessRule}
    
    你必須嚴格回傳 JSON 格式，且「絕對不能」包含任何 Markdown 代碼塊標記 (例如 \`\`\`json) ，請直接給出純 JSON 物件。
    JSON 格式必須精確符合以下結構（所有欄位名稱必須一致）：
    {
      "content": "你的真實對白回應（請扮演對話夥伴，用流利的${langName}回覆）。",
      "translation": "你剛才回覆的那句${langName}對白的繁體中文翻譯。",
      "correction": {
        "original": "使用者輸入中發生錯誤的原句",
        "error": "具體錯誤的片段或單字",
        "fixed": "正確的用法",
        "explanation": "用繁體中文簡略解釋為什麼錯誤以及為什麼要這樣改"
      },
      "extractedVocab": {
        "term": "對方或你的對白中，值得學習的進階詞彙或片語",
        "phonetic": "該單字的KK音標(若為英文)或羅馬拼音(若為日文)，若為長句可為空字串",
        "partOfSpeech": "該單字的詞性簡寫(如 n., vi., adj.)，若非單一字彙則可為空字串",
        "meaning": "繁體中文解釋",
        "example": "包含該詞彙的${langName}例句"
      }
    }

    備註：
    - 如果使用者的外語沒有達到目前的糾錯標準，請將 "correction" 設為 null。
    - 如果你認為這次的回覆中沒有值得特別記下的新單字，請將 "extractedVocab" 設為 null。
    - 請依據使用者最後講的話，順著系統提示的情境繼續對話。
  `;

  // Filter history to conform to Gemini expected structure
  // System messages from the app are treated as user prompts establishing context
  const contents = chatHistory.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.role === 'system' ? `[情境設定 Context]: ${msg.content}` : msg.content }]
  }));

  const payload = {
    systemInstruction: {
      parts: [{ text: systemInstruction }]
    },
    contents: contents,
    generationConfig: {
      responseMimeType: "application/json",
      temperature: 0.7
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
    const textOutput = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!textOutput) throw new Error("Gemini 回傳了無效的格式");

    let parsedResult;
    try {
      parsedResult = JSON.parse(textOutput);
    } catch (e) {
      // Emergency cleanup in case the LLM returned markdown blocks anyway
      const cleaned = textOutput.replace(/```json/gi, '').replace(/```/g, '').trim();
      parsedResult = JSON.parse(cleaned);
    }

    return parsedResult;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

export const analyzeSentenceAPI = async (sentence, apiKey, targetLanguage = 'en') => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  const langName = targetLanguage === 'en' ? '美語' : '日語';
  const termName = targetLanguage === 'en' ? '英文單字或片語' : '日文單字、假名或片語';

  const systemInstruction = `
    你是一個專精於多情境${langName}教學的資深教練。
    請分析以下句子，並提供具有「實戰性」的教學解析。
    
    你必須嚴格回傳 JSON 格式，不允許 Markdown 代碼塊標記 (例如 \`\`\`json)。
    JSON 格式必須精確符合以下結構：
    {
      "vocab": [
        { "word": "${termName}", "phonetic": "KK音標或拼音", "zh": "繁體中文解釋", "partOfSpeech": "詞性簡寫(如 n., vi.)", "example": "一個正確的${langName}例句" }
      ],
      "patterns": [
        { "pattern": "實用句型 / 慣用語", "explanation": "如何在其他場景中套用這個句型，並請提供一個簡短的${langName}例句" }
      ],
      "grammar": "整句文法結構的繁體中文簡明解析，請著重於實戰語感，而非死板的傳統文法術語。"
    }
  `;

  // Provide the target sentence as user input
  const contents = [
    { role: 'user', parts: [{ text: `請解析這句外語: "${sentence}"` }] }
  ];

  const payload = {
    systemInstruction: { parts: [{ text: systemInstruction }] },
    contents: contents,
    generationConfig: {
      responseMimeType: "application/json",
      temperature: 0.3
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
    const textOutput = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!textOutput) throw new Error("Gemini 回傳了無效的格式");

    let parsedResult;
    try {
      parsedResult = JSON.parse(textOutput);
    } catch (e) {
      const cleaned = textOutput.replace(/```json/gi, '').replace(/```/g, '').trim();
      parsedResult = JSON.parse(cleaned);
    }

    return parsedResult;
  } catch (error) {
    console.error("Gemini Analysis API Error:", error);
    throw error;
  }
};

export const polishSentenceAPI = async (draftText, chatHistory, apiKey, targetLanguage = 'en') => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
  const langName = targetLanguage === 'en' ? '英文' : '日文';

  const systemInstruction = `
    你是一個職場與生活場景的${langName}修飾助手。
    使用者在和對話夥伴練習口語時遇到了困難。以下是他們寫的草稿（可能包含中文、中英/日夾雜或不通順的外語）。
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
    .join('\n');

  const contents = [
    { role: 'user', parts: [{ text: `[近期對話紀錄]\n${contextText}\n\n[使用者想要表達的草稿]\n${draftText}\n\n請幫我修飾這段草稿或翻譯成正統${langName}。` }] }
  ];

  const payload = {
    systemInstruction: { parts: [{ text: systemInstruction }] },
    contents: contents,
    generationConfig: {
      responseMimeType: "application/json",
      temperature: 0.3
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
    const textOutput = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!textOutput) throw new Error("Gemini 回傳了無效的格式");

    let parsedResult;
    try {
      parsedResult = JSON.parse(textOutput);
    } catch (e) {
      const cleaned = textOutput.replace(/```json/gi, '').replace(/```/g, '').trim();
      parsedResult = JSON.parse(cleaned);
    }

    return parsedResult;
  } catch (error) {
    console.error("Gemini Polish API Error:", error);
    throw error;
  }
};

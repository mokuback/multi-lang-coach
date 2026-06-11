import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Chat from './Chat';
import { useAppState } from '../contexts/AppStateContext';
import { useI18n } from '../contexts/I18nContext';
import { categoryData } from '../data/categoryData';

const ChatWrapper = () => {
  const { t, uiLang } = useI18n();
  const { state: { 
    targetLanguage, 
    userLevel
  } } = useAppState();

  const location = useLocation();

  // Get scenario from navigation state, or use default
  const scenario = location.state?.scenario || { 
    id: 'free-mode', 
    title: 'Free Mode', 
    desc: 'Free conversation',
    difficulty: 'N/A'
  };

  // Local state for chatHistory
  const [chatHistory, setChatHistory] = useState([]);
  const initializedRef = useRef(false);

  // Initialize chat history when scenario changes
  useEffect(() => {
    // Reset on scenario change
    initializedRef.current = false;
  }, [scenario.id, scenario.patternItem?.pattern, scenario.unit?.id]);

  // Auto-initialize for special scenario types
  useEffect(() => {
    if (initializedRef.current) return;

    const langName = targetLanguage === 'en' ? '英文' : '日文';
    const levelLabel = categoryData.levels.find(l => l.id === userLevel)?.label || userLevel;

    // Pattern drill initialization
    if (scenario.id === 'pattern-drill' && scenario.patternItem) {
      const patternItem = scenario.patternItem;
      const aiGreeting = targetLanguage === 'en'
        ? `Let's drill this pattern: "${patternItem.pattern}". I will give you a scenario in Chinese, and you reply using this pattern.`
        : `このパターンの練習をしましょう: "${patternItem.pattern}". 中国語で状況を説明するので、あなたはこのパターンを使って答えてください。`;
      const aiTranslation = targetLanguage === 'en'
        ? t(`我們來練習這個句型：「${patternItem.pattern}」。我會給你一個中文情境，請你使用這個句型回覆。`)
        : t(`我們來練習這個句型：「${patternItem.pattern}」。我會給你一個中文情境，請你使用這個句型回答。`);

      setChatHistory([
        { role: 'system', content: t(`我們正在進行語詞代換練習。目標句型是：【${patternItem.pattern}】。請你根據【${levelLabel}】難度，給出一個中文情境提示，讓使用者試著將合適的${langName}詞彙填入代換位置。使用者回答後，請確認是否正確，並接著給出下一個不同的情境。後續解說與翻譯請全程使用【${uiLang === 'zh-CN' ? '簡體中文' : '繁體中文'}】。`) },
        {
          role: 'assistant',
          content: aiGreeting,
          translation: aiTranslation
        }
      ]);
      initializedRef.current = true;
      return;
    }

    // Curriculum drill initialization
    if (scenario.id === 'curriculum-drill' && scenario.unit) {
      const unit = scenario.unit;
      const vocabList = unit.vocab ? unit.vocab.map(v => v.word).join(', ') : '';
      const patternList = unit.patterns ? unit.patterns.map(p => p.pattern).join(', ') : '';

      const systemPrompt = t(`我們正在進行【${unit.title}】的零基礎基礎訓練。
目標語言：${langName}。
本課重點單字：${vocabList}。
本課核心句型：${patternList}。

請扮演嚴格但有耐心的 AI 語言教練。你的任務是：
1. 先用中文簡單說明本課的目標，並出一個與上述單字或句型相關的簡單情境考題，請使用者用${langName}回答。
2. 根據使用者的回答進行糾錯，確認理解後，再出下一題。
3. 題目應循序漸進，從單字翻譯到句子代換，最後是簡單的情境對話。
4. 全程使用【${uiLang === 'zh-CN' ? '簡體中文' : '繁體中文'}】進行解說與引導。`);

      const aiGreeting = targetLanguage === 'en'
        ? `Welcome to the unit: "${unit.title}". I am your AI coach. Let's start the training!`
        : `ユニット「${unit.title}」へようこそ。私はあなたのAIコーチです。特訓を始めましょう！`;

      const aiTranslation = t(`歡迎來到「${unit.title}」單元。我是你的 AI 教練，我們開始特訓吧！請準備好，我會出一個中文情境考你。`);

      setChatHistory([
        { role: 'system', content: systemPrompt },
        {
          role: 'assistant',
          content: aiGreeting,
          translation: aiTranslation
        }
      ]);
      initializedRef.current = true;
      return;
    }

    // Free mode initialization
    if (scenario.id === 'free-mode') {
      const aiGreeting = targetLanguage === 'en'
        ? `Hello! Let's start a free conversation. You can talk about anything!`
        : `こんにちは！会話を始めましょう。何について話してもいいですよ！`;
      const aiTranslation = t(`您好！我們開始自由對話吧，您可以聊任何話題！`);

      setChatHistory([
        { role: 'system', content: t(`這是一場不限主題的自由對話。請扮演導師或友善的對話對象，使用符合【${levelLabel}】程度規格的${langName}與我進行自然的對話交流。後續解說與翻譯請全程使用【${uiLang === 'zh-CN' ? '簡體中文' : '繁體中文'}】。`) },
        {
          role: 'assistant',
          content: aiGreeting,
          translation: aiTranslation
        }
      ]);
      initializedRef.current = true;
      return;
    }
  }, [scenario, t, targetLanguage, userLevel, uiLang]);

  return (
    <Chat
      key={scenario.id + '-' + (scenario.patternItem?.pattern || '') + '-' + (scenario.unit?.id || '')}
      scenario={scenario}
      chatHistory={chatHistory}
      setChatHistory={setChatHistory}
    />
  );
};

export default ChatWrapper;

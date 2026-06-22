import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Chat from './Chat';
import { useSettingsStore } from '../store/useSettingsStore';
import { useSessionStore } from '../store/useSessionStore';
import { useVocabulary } from '../hooks/useVocabulary';
import { usePatterns } from '../hooks/usePatterns';
import { useProgress } from '../hooks/useProgress';
import { useI18n } from '../contexts/I18nContext';
import { categoryData, getRoleTargetName } from '../data/categoryData';
import { getLangName, getUiLangName, getNativeLangName } from '../utils/languageMap';
import greetings from '../data/chatGreetings.json';

const ChatWrapper = () => {
  const { t, uiLang, getLocalizedContent } = useI18n();
  const targetLanguage = useSettingsStore(s => s.targetLanguage);
  const userLevel = useSettingsStore(s => s.userLevel);
  const userCategory = useSettingsStore(s => s.userCategory);
  const userRole = useSettingsStore(s => s.userRole);

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
  }, [scenario.id, scenario.patternItem, scenario.unit?.id]);

  // Auto-initialize for special scenario types
  useEffect(() => {
    if (initializedRef.current) return;

    const langName = getLangName(targetLanguage, uiLang);
    const uiLangName = getUiLangName(uiLang);
    const levelLabel = categoryData.levels.find(l => l.id === userLevel)?.label || userLevel;

    // Pattern drill initialization
    if (scenario.id === 'pattern-drill' && scenario.patternItem) {
      const patternItem = scenario.patternItem;
      // Support both scenarioPatterns (translations[targetLanguage]) and curriculumData (pattern field)
      const pattern = patternItem.translations?.[targetLanguage] || patternItem.pattern || '';
      
      // Get greeting template for target language, fallback to zh-TW
      const greetingTpl = greetings.patternDrill.aiGreeting[targetLanguage] || greetings.patternDrill.aiGreeting['zh-TW'];
      const translationTpl = greetings.patternDrill.aiTranslation[targetLanguage] || greetings.patternDrill.aiTranslation['zh-TW'];
      
      const aiGreeting = greetingTpl
        .replace('{pattern}', pattern)
        .replace('{uiLangName}', uiLangName);
      const aiTranslation = translationTpl
        .replace('{pattern}', pattern)
        .replace('{uiLangName}', uiLangName);

      setChatHistory([
        { role: 'system', content: t(`我們正在進行語詞代換練習。目標句型是：【${pattern}】。請你根據【${levelLabel}】難度，給出一個${uiLangName}情境提示，讓使用者試著將合適的${langName}詞彙填入代換位置。使用者回答後，請確認是否正確，並接著給出下一個不同的情境。`) },
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
      const unitTitle = getLocalizedContent(unit.title);

      const systemPrompt = t(`我們正在進行【${unitTitle}】的零基礎基礎訓練。
目標語言：${langName}。
本課重點單字：${vocabList}。
本課核心句型：${patternList}。

請扮演嚴格但有耐心的 AI 語言教練。你的任務是：
1. 先用${uiLangName}簡單說明本課的目標，並出一個與上述單字或句型相關的簡單情境考題，請使用者用${langName}回答。
2. 根據使用者的回答進行糾錯，確認理解後，再出下一題。
3. 題目應循序漸進，從單字翻譯到句子代換，最後是簡單的情境對話。`);

      // Get greeting template for target language, fallback to zh-TW
      const greetingTpl = greetings.curriculumDrill.aiGreeting[targetLanguage] || greetings.curriculumDrill.aiGreeting['zh-TW'];
      const translationTpl = greetings.curriculumDrill.aiTranslation[targetLanguage] || greetings.curriculumDrill.aiTranslation['zh-TW'];
      
      // unitTitle：優先使用 UI 語言顯示與發音
      const localizedTitle = typeof scenario.title === 'string'
        ? scenario.title
        : getLocalizedContent(scenario.title) || scenario.title;

      const aiGreeting = greetingTpl
        .replace('{unitTitle}', localizedTitle)
        .replace('{uiLangName}', uiLangName);
      const aiTranslation = translationTpl
        .replace('{unitTitle}', localizedTitle)
        .replace('{uiLangName}', uiLangName);

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
      // Get greeting template for target language, fallback to zh-TW
      const greetingTpl = greetings.freeMode.aiGreeting[targetLanguage] || greetings.freeMode.aiGreeting['zh-TW'];
      const aiGreeting = greetingTpl;
      const aiTranslation = greetingTpl; // Same as greeting for free mode

      setChatHistory([
        { role: 'system', content: t(`這是一場不限主題的自由對話。請扮演導師或友善的對話對象，使用符合【${levelLabel}】程度規格的${langName}與我進行自然的對話交流。`) },
        {
          role: 'assistant',
          content: aiGreeting,
          translation: aiTranslation
        }
      ]);
      initializedRef.current = true;
      return;
    }

    // General scenario initialization (for scenarios from Dashboard)
    if (scenario.id && scenario.title && scenario.desc) {
      const category = categoryData.categories.find(c => c.id === userCategory);
      const role = categoryData.roles[userCategory]?.find(r => r.id === userRole);
      const categoryLabel = getLocalizedContent(category?.label) || userCategory;
      const roleLabel = getLocalizedContent(role?.label) || userRole;
      // role 用目標語言顯示
      const roleTarget = getRoleTargetName(userRole, targetLanguage);
      const langName = getLangName(targetLanguage, uiLang);
      // langName 用目標語言原生名稱
      const nativeLangName = getNativeLangName(targetLanguage);

      const greetingTpl = greetings.scenario.aiGreeting[targetLanguage] || greetings.scenario.aiGreeting['zh-TW'];
      const translationTpl = greetings.scenario.aiTranslation[targetLanguage] || greetings.scenario.aiTranslation['zh-TW'];
      
      const aiGreeting = greetingTpl
        .replace('{title}', scenario.title)
        .replace('{desc}', scenario.desc)
        .replace('{category}', categoryLabel)
        .replace('{role}', roleTarget)
        .replace('{langName}', nativeLangName);
      const aiTranslation = translationTpl
        .replace('{title}', scenario.title)
        .replace('{desc}', scenario.desc)
        .replace('{category}', categoryLabel)
        .replace('{role}', roleTarget)
        .replace('{langName}', nativeLangName);

      // uiSegments: 只有 title 和 desc 是 UI 語言，role 和 langName 現在是目標語言
      const uiSegments = [scenario.title, scenario.desc].filter(Boolean);

      setChatHistory([
        { role: 'system', content: t(`我們正在進行情境對話練習。情境主題是：【${scenario.title}】。情境描述：${scenario.desc}。請扮演對話對象，使用符合【${levelLabel}】程度規格的${langName}與我進行自然的對話練習。對話開始時，請先用${langName}主動開啟話題。`) },
        {
          role: 'assistant',
          content: aiGreeting,
          translation: aiTranslation,
          uiSegments
        }
      ]);
      initializedRef.current = true;
      return;
    }
  }, [scenario, t, targetLanguage, userLevel, uiLang, userCategory, userRole]);

  return (
    <Chat
      key={scenario.id + '-' + (scenario.patternItem || '') + '-' + (scenario.unit?.id || '')}
      scenario={scenario}
      chatHistory={chatHistory}
      setChatHistory={setChatHistory}
    />
  );
};

export default ChatWrapper;

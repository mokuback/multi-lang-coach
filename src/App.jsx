import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Chat from './components/Chat';
import Notebook from './components/Notebook';
import PatternNotebook from './components/PatternNotebook';
import Patterns from './components/Patterns';
import Guide from './components/Guide';

import { categoryData, getDefaultRole } from './data/categoryData';
import { getScenariosByRole } from './data/scenariosData';

// Mock initial data
const initialVocabulary = [
  { term: "Rollout", meaning: "推出 / 上線", example: "We are planning the rollout of the new system next month.", lang: 'en' }
];

const VOCAB_STORAGE_KEY = 'IT_ENGLISH_APP_VOCABULARY';
const PATTERNS_STORAGE_KEY = 'IT_ENGLISH_APP_PATTERNS';
const LANG_STORAGE_KEY = 'IT_APP_TARGET_LANG';
const CAT_STORAGE_KEY = 'APP_USER_CAT';
const ROLE_STORAGE_KEY = 'APP_USER_ROLE';
const LEVEL_STORAGE_KEY = 'APP_USER_LEVEL';
const RATE_STORAGE_KEY = 'APP_SPEECH_RATE';
const AUTO_READ_STORAGE_KEY = 'APP_AUTO_READ';
const PROGRESS_STORAGE_KEY = 'APP_LEARNING_PROGRESS';
const PATTERN_VERSION_STORAGE_KEY = 'APP_PATTERN_VERSION';
const TAB_STORAGE_KEY = 'APP_ACTIVE_TAB';
const WELCOME_STORAGE_KEY = 'APP_HAS_SEEN_WELCOME';
const API_KEY_STORAGE_KEY = 'APP_GEMINI_API_KEY';

function App() {
  const [hasSeenWelcome, setHasSeenWelcome] = useState(() => {
    return localStorage.getItem(WELCOME_STORAGE_KEY) === 'true';
  });

  const [activeTab, setActiveTab] = useState(() => {
    if (localStorage.getItem(WELCOME_STORAGE_KEY) !== 'true') return 'guide';
    return localStorage.getItem(TAB_STORAGE_KEY) || 'dashboard';
  });
  const [apiKey, setApiKey] = useState(() => localStorage.getItem(API_KEY_STORAGE_KEY) || '');
  const [correctionMode, setCorrectionMode] = useState('communicative');
  
  const [speechRate, setSpeechRate] = useState(() => parseInt(localStorage.getItem(RATE_STORAGE_KEY) || '5', 10));
  const [autoRead, setAutoRead] = useState(() => localStorage.getItem(AUTO_READ_STORAGE_KEY) === 'true');

  
  // New target language state
  const [targetLanguage, setTargetLanguage] = useState(() => {
    return localStorage.getItem(LANG_STORAGE_KEY) || 'en';
  });

  const [patternVersion, setPatternVersion] = useState(() => {
    return localStorage.getItem(PATTERN_VERSION_STORAGE_KEY) || '02';
  });

  // User context states
  const [userCategory, setUserCategory] = useState(() => {
    const saved = localStorage.getItem(CAT_STORAGE_KEY);
    return categoryData.categories.some(c => c.id === saved) ? saved : 'business';
  });
  const [userRole, setUserRole] = useState(() => {
    const savedRole = localStorage.getItem(ROLE_STORAGE_KEY);
    // if saved role exists in the active category, keep it, otherwise reset
    const tempCat = categoryData.categories.some(c => c.id === localStorage.getItem(CAT_STORAGE_KEY)) ? localStorage.getItem(CAT_STORAGE_KEY) : 'business';
    const rolesForCat = categoryData.roles[tempCat] || [];
    return rolesForCat.some(r => r.id === savedRole) ? savedRole : (rolesForCat[0]?.id || 'it');
  });
  const [userLevel, setUserLevel] = useState(() => localStorage.getItem(LEVEL_STORAGE_KEY) || 'pre-intermediate');

  const [vocabulary, setVocabulary] = useState(() => {
    const saved = localStorage.getItem(VOCAB_STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return initialVocabulary;
  });

  const [savedPatterns, setSavedPatterns] = useState(() => {
    const saved = localStorage.getItem(PATTERNS_STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [];
  });

  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return { streak: 0, completedScenarios: 0, lastDate: null };
  });

  useEffect(() => localStorage.setItem(VOCAB_STORAGE_KEY, JSON.stringify(vocabulary)), [vocabulary]);
  useEffect(() => localStorage.setItem(PATTERNS_STORAGE_KEY, JSON.stringify(savedPatterns)), [savedPatterns]);
  useEffect(() => localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress)), [progress]);
  useEffect(() => localStorage.setItem(LANG_STORAGE_KEY, targetLanguage), [targetLanguage]);
  useEffect(() => localStorage.setItem(PATTERN_VERSION_STORAGE_KEY, patternVersion), [patternVersion]);
  useEffect(() => localStorage.setItem(TAB_STORAGE_KEY, activeTab), [activeTab]);
  useEffect(() => localStorage.setItem(API_KEY_STORAGE_KEY, apiKey), [apiKey]);
  useEffect(() => localStorage.setItem(RATE_STORAGE_KEY, speechRate.toString()), [speechRate]);
  useEffect(() => localStorage.setItem(AUTO_READ_STORAGE_KEY, autoRead.toString()), [autoRead]);
  useEffect(() => {
    localStorage.setItem(CAT_STORAGE_KEY, userCategory);
    localStorage.setItem(ROLE_STORAGE_KEY, userRole);
    localStorage.setItem(LEVEL_STORAGE_KEY, userLevel);
  }, [userCategory, userRole, userLevel]);

  // Derived scenarios based on userRole
  const scenarios = getScenariosByRole(userRole);
  const [activeScenario, setActiveScenario] = useState(null);
  
  const [chatHistory, setChatHistory] = useState([]);

  const updateProgress = () => {
    const today = new Date().toDateString();
    setProgress(prev => {
      let { streak, completedScenarios, lastDate } = prev;
      completedScenarios += 1;
      
      if (lastDate !== today) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastDate === yesterday.toDateString()) {
          streak += 1;
        } else {
          streak = 1;
        }
        lastDate = today;
      }
      
      return { streak, completedScenarios, lastDate };
    });
  };

  const handleStartScenario = (scenario) => {
    setActiveScenario(scenario);
    updateProgress();
    
    const langName = targetLanguage === 'en' ? '英文' : '日文';
    
    // Look up category and role labels for prompt
    const catLabel = categoryData.categories.find(c => c.id === userCategory)?.label || userCategory;
    const roleLabel = categoryData.roles[userCategory]?.find(r => r.id === userRole)?.label || userRole || 'Unknown';
    const levelLabel = categoryData.levels.find(l => l.id === userLevel)?.label || userLevel;

    const aiGreeting = targetLanguage === 'en' 
      ? (scenario.id === 'free-mode' ? `Hello! Let's start our conversation. You can talk about anything!` : `Hello! Let's practice this scenario: "${scenario.title}". Are you ready?`)
      : (scenario.id === 'free-mode' ? `こんにちは！会話を始めましょう。何について話してもいいですよ！` : `こんにちは！このシチュエーション：「${scenario.title}」を練習しましょう。準備はいいですか？`);
    const aiTranslation = targetLanguage === 'en'
      ? (scenario.id === 'free-mode' ? `您好！我們開始自由對話吧，您可以聊任何話題！` : `您好！我們來練習這個情境：「${scenario.title}」。您準備好了嗎？`)
      : (scenario.id === 'free-mode' ? `你好！我們開始自由對話吧，隨便聊聊！` : `你好！我們來練習這個情境：「${scenario.title}」。準備好了嗎？`);

    const systemPrompt = scenario.id === 'free-mode'
      ? `這是一場不限主題的自由對話。請扮演導師或友善的對話對象，使用符合【${levelLabel}】程度規格的${langName}與我進行自然的對話交流。請根據我聊到的話題給予有趣的回應，並適時提出問題來引導對話繼續。`
      : `目前情境處於【${catLabel} - ${roleLabel}】的脈絡下。情境設定: ${scenario.title}. ${scenario.desc}. 請扮演導師或對話對象，使用符合【${levelLabel}】程度規格的${langName}與我進行對話。`;

    setChatHistory([
      { role: 'system', content: systemPrompt },
      { 
        role: 'assistant', 
        content: aiGreeting,
        translation: aiTranslation
      }
    ]);
    setActiveTab('chat');
  };

  const handleStartPatternDrill = (patternItem) => {
    setActiveScenario({ title: "句型代換練習", desc: "教練給予情境，使用者填入代換詞彙" });
    updateProgress();
    
    const langName = targetLanguage === 'en' ? '英文' : '日文';
    const levelLabel = categoryData.levels.find(l => l.id === userLevel)?.label || userLevel;

    const aiGreeting = targetLanguage === 'en' 
      ? `Let's drill this pattern: "${patternItem.pattern}". I will give you a scenario in Chinese, and you reply using this pattern.`
      : `このパターンの練習をしましょう: "${patternItem.pattern}". 中国語で状況を説明するので、あなたはこのパターンを使って答えてください。`;
    const aiTranslation = targetLanguage === 'en'
      ? `我們來練習這個句型：「${patternItem.pattern}」。我會給你一個中文情境，請你使用這個句型回覆。`
      : `我們來練習這個句型：「${patternItem.pattern}」。我會給你一個中文情境，請你使用這個句型回答。`;

    setChatHistory([
      { role: 'system', content: `我們正在進行語詞代換練習。目標句型是：【${patternItem.pattern}】。請你根據【${levelLabel}】難度，給出一個中文情境提示，讓使用者試著將合適的${langName}詞彙填入代換位置。使用者回答後，請確認是否正確，並接著給出下一個不同的情境。` },
      { 
        role: 'assistant', 
        content: aiGreeting,
        translation: aiTranslation
      }
    ]);
    setActiveTab('chat');
  };

  const addVocabulary = (term, meaning, example, phonetic = '', partOfSpeech = '', lang = targetLanguage) => {
    setVocabulary(prev => [{ term, meaning, example, phonetic, partOfSpeech, lang }, ...prev]);
  };

  const removeVocabulary = (termToRemove, langToRemove) => {
    setVocabulary(prev => prev.filter(v => !(v.term === termToRemove && v.lang === langToRemove)));
  };

  const addPattern = (pattern, explanation, lang = targetLanguage) => {
    setSavedPatterns(prev => {
      // Prevent duplicates
      if (prev.some(p => p.pattern === pattern && p.lang === lang)) return prev;
      return [{ pattern, explanation, lang }, ...prev];
    });
  };

  const removePattern = (patternToRemove, langToRemove) => {
    setSavedPatterns(prev => prev.filter(p => !(p.pattern === patternToRemove && p.lang === langToRemove)));
  };

  const handleCategoryChange = (e) => {
    const newCat = e.target.value;
    setUserCategory(newCat);
    setUserRole(getDefaultRole(newCat));
  };

  const closeWelcomeModal = () => {
    setHasSeenWelcome(true);
    localStorage.setItem(WELCOME_STORAGE_KEY, 'true');
  };

  return (
    <>
      {!hasSeenWelcome && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.85)', zIndex: 9999,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          backdropFilter: 'blur(10px)'
        }}>
          <div className="glass-panel animate-slide-in" style={{
            maxWidth: '500px', width: '90%', padding: '40px',
            textAlign: 'center', borderRadius: '24px',
            border: '1px solid var(--accent-color)',
            boxShadow: '0 0 40px rgba(0, 240, 255, 0.2)'
          }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
              🎉 歡迎來到 Multi-Lang Coach！
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '32px' }}>
              這是一個由大數據驅動的智能外語對話教練。為了讓您體驗完整的 AI 糾錯與推薦功能，我們強烈建議您花 <strong className="text-accent">1 分鐘</strong>閱讀背景的這份使用說明，並免費取得專屬的 API 金鑰！
            </p>
            <button 
              className="glass-button active" 
              onClick={closeWelcomeModal}
              style={{ width: '100%', padding: '16px', fontSize: '1.2rem', fontWeight: 'bold' }}
            >
              好的，帶我去看說明書！
            </button>
          </div>
        </div>
      )}

      <div className="app-container">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        targetLanguage={targetLanguage} 
        userRole={userRole}
        userLevel={userLevel}
      />
      
      <main className="main-content">
        {activeTab === 'guide' && (
          <Guide />
        )}

        {activeTab === 'dashboard' && (
          <Dashboard 
            scenarios={scenarios} 
            onStart={handleStartScenario} 
            targetLanguage={targetLanguage}
            userRole={userRole}
            progress={progress}
            vocabCount={vocabulary.length}
          />
        )}
        
        {activeTab === 'chat' && (
          <Chat 
            scenario={activeScenario}
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            apiKey={apiKey}
            addVocabulary={addVocabulary}
            addPattern={addPattern}
            correctionMode={correctionMode}
            targetLanguage={targetLanguage}
            userCategory={userCategory}
            userRole={userRole}
            userLevel={userLevel}
            speechRate={speechRate}
            autoRead={autoRead}
            patternVersion={patternVersion}
          />
        )}
        
        {activeTab === 'notebook' && (
          <Notebook vocabulary={vocabulary} removeVocabulary={removeVocabulary} targetLanguage={targetLanguage} speechRate={speechRate} />
        )}

        {activeTab === 'pattern-notebook' && (
          <PatternNotebook patterns={savedPatterns} removePattern={removePattern} targetLanguage={targetLanguage} speechRate={speechRate} />
        )}

        {activeTab === 'patterns' && (
          <Patterns 
            activeScenario={activeScenario} 
            targetLanguage={targetLanguage} 
            handleStartPatternDrill={handleStartPatternDrill}
            version={patternVersion}
            setVersion={setPatternVersion}
          />
        )}
        
        {activeTab === 'settings' && (
          <div className="animate-fade-in glass-panel" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto', marginTop: '50px' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>設定與 API</h2>
            
            <div className="form-group-mobile" style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>主類別</label>
                <select className="glass-input" value={userCategory} onChange={handleCategoryChange} style={{ appearance: 'auto', backgroundColor: 'rgba(0,0,0,0.8)' }}>
                  {categoryData.categories.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>主題與職務</label>
                <select className="glass-input" value={userRole} onChange={(e) => setUserRole(e.target.value)} style={{ appearance: 'auto', backgroundColor: 'rgba(0,0,0,0.8)' }}>
                  {categoryData.roles[userCategory]?.map(r => <option key={r.id} value={r.id}>{r.label}</option>)}
                </select>
              </div>
            </div>

            <div className="form-group-mobile" style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>學習語言目標</label>
                <select className="glass-input" value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)} style={{ appearance: 'auto', backgroundColor: 'rgba(0,0,0,0.8)' }}>
                  <option value="en">英語 (English)</option>
                  <option value="ja">日語 (日本語)</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>語言程度</label>
                <select className="glass-input" value={userLevel} onChange={(e) => setUserLevel(e.target.value)} style={{ appearance: 'auto', backgroundColor: 'rgba(0,0,0,0.8)' }}>
                  {categoryData.levels.map(l => <option key={l.id} value={l.id}>{l.label}</option>)}
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>文法糾錯嚴格度</label>
              <select className="glass-input" value={correctionMode} onChange={(e) => setCorrectionMode(e.target.value)} style={{ appearance: 'auto', backgroundColor: 'rgba(0,0,0,0.8)' }}>
                <option value="communicative">溝通為主（僅糾正重大基礎錯誤，鼓勵開口）</option>
                <option value="strict">超級嚴格（抓出所有不道地、些微的文法瑕疵）</option>
              </select>
            </div>

            <div className="form-group-mobile" style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>朗讀語速 (1-10)</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <input 
                    type="range" 
                    min="1" max="10" step="1" 
                    value={speechRate} 
                    onChange={(e) => setSpeechRate(parseInt(e.target.value, 10))}
                    style={{ flex: 1 }}
                  />
                  <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{speechRate}</span>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>自動朗讀 (對話練習)</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                  <input 
                    type="checkbox" 
                    id="autoReadToggle"
                    checked={autoRead} 
                    onChange={(e) => setAutoRead(e.target.checked)}
                    style={{ width: '1.2rem', height: '1.2rem', cursor: 'pointer' }}
                  />
                  <label htmlFor="autoReadToggle" style={{ cursor: 'pointer', color: 'var(--text-primary)' }}>
                    {autoRead ? '開啟' : '關閉'}
                  </label>
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Gemini API 金鑰</label>
              <input type="password" className="glass-input" placeholder="AIzaSy..." value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
              <p style={{ marginTop: '0.8rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {apiKey ? <span className="text-success">已輸入金鑰，真實 AI 模式啟動中。</span> : <span>目前以 <span className="text-accent">模擬對話體驗模式 (Mock Mode)</span> 執行中。</span>}
              </p>
            </div>
            
            <button className="glass-button active" style={{ padding: '10px 20px', display: 'inline-block', marginTop: '1rem' }} onClick={() => setActiveTab('dashboard')}>
              儲存設定並返回
            </button>
          </div>
        )}
      </main>
    </div>
    </>
  );
}

export default App;

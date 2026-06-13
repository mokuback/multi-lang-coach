import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings as SettingsIcon } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';
import { useAppState } from '../contexts/AppStateContext';
import { categoryData, getDefaultRole } from '../data/categoryData';

// Vite injects these at build time
declare const __APP_VERSION__: string;
declare const __BUILD_DATE__: string;

  // Language options with native names and flags
  const LANGUAGES = [
    { value: 'zh-TW', label: '繁體中文', flag: '🇹🇼' },
    { value: 'zh-CN', label: '簡體中文', flag: '🇨🇳' },
    { value: 'en',    label: 'English',    flag: '🇬🇧' },
    { value: 'ja',    label: '日本語',    flag: '🇯🇵' },
    { value: 'ko',    label: '한국어',    flag: '🇰🇷' },
    { value: 'es',    label: 'Español',    flag: '🇪🇸' },
    { value: 'fr',    label: 'Français',   flag: '🇫🇷' },
  ];

  const [langOpen, setLangOpen] = useState(false);
  const langDropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langDropRef.current && !langDropRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const currentLang = LANGUAGES.find(l => l.value === uiLang) || LANGUAGES[0];

  const Settings = () => {
  const { t, uiLang, setUiLang } = useI18n();
  const navigate = useNavigate();

  const { 
    state: {
      apiProvider, apiModel, apiKey, androidSmartSpeech,
      correctionMode, speechRate, autoRead, uiTheme,
      targetLanguage, patternVersion, userCategory, userRole, userLevel
    },
    setApiProvider, setApiModel, setApiKey, setAndroidSmartSpeech,
    setSpeechRate, setAutoRead, setUiTheme,
    setTargetLanguage, setPatternVersion, setUserCategory, setUserRole, setUserLevel
  } = useAppState();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCat = e.target.value;
    setUserCategory(newCat);
    setUserRole(getDefaultRole(newCat));
  };

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '24px', maxWidth: '600px', margin: '0 auto', marginTop: '50px' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>{t('學習設定')}</h2>

      <div className="form-group-mobile" style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('介面與母語語言')}</label>
          <div ref={langDropRef} style={{ position: 'relative' }}>
            <button
              type="button"
              onClick={() => setLangOpen(o => !o)}
              className="glass-button"
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.5rem 0.75rem',
                gap: '0.5rem',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '0.5rem',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                fontSize: '0.95rem',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.2rem' }}>{currentLang.flag}</span>
                <span>{currentLang.label}</span>
              </span>
              <span style={{
                transition: 'transform 0.2s',
                transform: langOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                display: 'flex',
                alignItems: 'center',
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
            {langOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 4px)',
                left: 0,
                right: 0,
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '0.5rem',
                backdropFilter: 'blur(20px)',
                zIndex: 1000,
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}>
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.value}
                    type="button"
                    onClick={() => { setUiLang(lang.value); setLangOpen(false); }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      padding: '0.6rem 0.75rem',
                      background: lang.value === uiLang ? 'rgba(255,255,255,0.12)' : 'transparent',
                      border: 'none',
                      color: 'var(--text-primary)',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      textAlign: 'left',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                    onMouseLeave={e => (e.currentTarget.style.background = lang.value === uiLang ? 'rgba(255,255,255,0.12)' : 'transparent')}
                  >
                    <span style={{ fontSize: '1.1rem' }}>{lang.flag}</span>
                    <span>{lang.label}</span>
                    {lang.value === uiLang && (
                      <span style={{ marginLeft: 'auto', color: 'var(--accent-color)' }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                          <path d="M2 7l3.5 3.5L12 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('介面風格 (UI Theme)')}</label>
          <select className="glass-input" value={uiTheme} onChange={(e) => setUiTheme(e.target.value)} style={{ appearance: 'auto' }}>
            <option value="glass">{t('科技玻璃風 (Glassmorphism)')}</option>
            <option value="saas-dark">{t('商業深色風 (SaaS Dark)')}</option>
            <option value="saas-light">{t('商業淺色風 (SaaS Light)')}</option>
          </select>
        </div>
      </div>

      <div className="form-group-mobile" style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('主類別')}</label>
          <select className="glass-input" value={userCategory} onChange={handleCategoryChange} style={{ appearance: 'auto' }}>
            {categoryData.categories.map((c: any) => <option key={c.id} value={c.id}>{t(c.label)}</option>)}
          </select>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('主題與職務')}</label>
          <select className="glass-input" value={userRole} onChange={(e) => setUserRole(e.target.value)} style={{ appearance: 'auto' }}>
            {(categoryData.roles as any)[userCategory]?.map((r: any) => <option key={r.id} value={r.id}>{t(r.label)}</option>)}
          </select>
        </div>
      </div>

      <div className="form-group-mobile" style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('學習語言目標')}</label>
          <select className="glass-input" value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)} style={{ appearance: 'auto' }}>
            <option value="en">{t('英語 (English)')}</option>
            <option value="ja">{t('日語 (日本語)')}</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('語言程度')}</label>
          <select className="glass-input" value={userLevel} onChange={(e) => setUserLevel(e.target.value)} style={{ appearance: 'auto' }}>
            {categoryData.levels.map((l: any) => <option key={l.id} value={l.id}>{t(l.label)}</option>)}
          </select>
        </div>
      </div>

      <div className="form-group-mobile" style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('文法糾錯嚴格度')}</label>
          <select className="glass-input" value={correctionMode} onChange={(e) => {/* persisted in state */}} style={{ appearance: 'auto' }}>
            <option value="communicative">{t('溝通為主（僅糾正重大基礎錯誤，鼓勵開口）')}</option>
            <option value="strict">{t('超級嚴格（抓出所有不道地、些微的文法瑕疵）')}</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('句型資料庫版本')}</label>
          <select className="glass-input" value={patternVersion} onChange={(e) => setPatternVersion(e.target.value)} style={{ appearance: 'auto' }}>
            <option value="01">{t('基礎教科書版 (適合初學)')}</option>
            <option value="02">{t('進階商務版 (母語者思維)')}</option>
          </select>
        </div>
      </div>

      <div className="form-group-mobile" style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('朗讀語速 (1-10)')}</label>
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
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('自動朗讀 (對話練習)')}</label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
            <input
              type="checkbox"
              id="autoReadToggle"
              checked={autoRead}
              onChange={(e) => setAutoRead(e.target.checked)}
              style={{ width: '1.2rem', height: '1.2rem', cursor: 'pointer' }}
            />
            <label htmlFor="autoReadToggle" style={{ cursor: 'pointer', color: 'var(--text-primary)' }}>
              {autoRead ? t('開啟') : t('關閉')}
            </label>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <div className="form-group-mobile" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('AI 服務商')}</label>
            <select className="glass-input" value={apiProvider} onChange={(e) => setApiProvider(e.target.value)} style={{ appearance: 'auto' }}>
              <option value="gemini">{t('Google Gemini')}</option>
              <option value="groq">{t('Groq (高速 Llama 等開源模型)')}</option>
            </select>
          </div>
          {apiProvider !== 'gemini' && (
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('模型名稱 (Model ID)')}</label>
              <input type="text" className="glass-input" placeholder="例如: llama-3.1-8b-instant" value={apiModel} onChange={(e) => setApiModel(e.target.value)} />
            </div>
          )}
        </div>

        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{apiProvider === 'gemini' ? t('Gemini API 金鑰') : t('Groq API 金鑰')}</label>
        <input type="password" className="glass-input" placeholder="API Key..." value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
        <p style={{ marginTop: '0.8rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          {apiKey ? <span className="text-success">{t('已輸入金鑰，真實 AI 模式啟動中。')}</span> : <span>{t('目前以')} <span className="text-accent">{t('模擬對話體驗模式 (Mock Mode)')}</span> {t('執行中。')}</span>}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}>
          <input
            type="checkbox"
            id="androidSpeechToggle"
            checked={androidSmartSpeech}
            onChange={(e) => setAndroidSmartSpeech(e.target.checked)}
            style={{ width: '1.2rem', height: '1.2rem', cursor: 'pointer' }}
          />
          <label htmlFor="androidSpeechToggle" style={{ cursor: 'pointer', color: 'var(--text-primary)' }}>
            {t('Android 手機啟用智慧語音辨識 (解決原生語音疊字問題)')}
          </label>
        </div>
      </div>

      <button className="glass-button active" style={{ padding: '10px 20px', display: 'inline-block', marginTop: '1rem' }} onClick={() => navigate('/dashboard')}>
        {t('儲存設定並返回')}
      </button>

      <div style={{ marginTop: '3rem', textAlign: 'center', fontSize: '0.8rem', color: 'var(--text-secondary)', opacity: 0.6 }}>
        v{__APP_VERSION__} ({__BUILD_DATE__})
      </div>
    </div>
  );
};

export default Settings;

import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings as SettingsIcon } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';
import { useAppState } from '../contexts/AppStateContext';
import { categoryData, getDefaultRole } from '../data/categoryData';
import GlassSelect from './GlassSelect';

// Vite injects these at build time
declare const __APP_VERSION__: string;
declare const __BUILD_DATE__: string;

// Language options with SVG flags (reliable cross-platform rendering)
const LANG_OPTIONS = [
  { value: 'zh-TW', label: '繁體中文', flag: '🇭🇹' },
  { value: 'zh-CN', label: '简体中文', flag: '🇨🇳' },
  { value: 'en',    label: 'English',    flag: '🇬🇧' },
  { value: 'ja',    label: '日本語',    flag: '🇯🇵' },
  { value: 'ko',    label: '한국어',    flag: '🇰🇷' },
  { value: 'es',    label: 'Español',    flag: '🇪🇸' },
  { value: 'fr',    label: 'Français',   flag: '🇫🇷' },
];

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
    setCorrectionMode,
    setSpeechRate, setAutoRead, setUiTheme,
    setTargetLanguage, setPatternVersion, setUserCategory, setUserRole, setUserLevel
  } = useAppState();

  const handleCategoryChange = (v: string) => {
    setUserCategory(v);
    setUserRole(getDefaultRole(v));
  };

  const themeOptions = [
    { value: 'glass',     label: t('科技玻璃風 (Glassmorphism)') },
    { value: 'saas-dark', label: t('商業深色風 (SaaS Dark)') },
    { value: 'saas-light', label: t('商業淺色風 (SaaS Light)') },
  ];

  const categoryOptions = categoryData.categories.map((c: any) => ({
    value: c.id,
    label: t(c.label),
  }));

  const roleOptions = ((categoryData.roles as any)[userCategory] || []).map((r: any) => ({
    value: r.id,
    label: t(r.label),
  }));

  const targetLangOptions = [
    { value: 'en', label: t('英語 (English)') },
    { value: 'ja', label: t('日語 (日本語)') },
  ];

  const levelOptions = categoryData.levels.map((l: any) => ({
    value: l.id,
    label: t(l.label),
  }));

  const correctionModeOptions = [
    { value: 'communicative', label: t('溝通為主（僅糾正重大基礎錯誤，鼓勵開口）') },
    { value: 'strict',        label: t('超級嚴格（抓出所有不道地、些微的文法瑕疵）') },
  ];

  const patternVersionOptions = [
    { value: '01', label: t('基礎教科書版 (適合初學)') },
    { value: '02', label: t('進階商務版 (母語者思維)') },
  ];

  const providerOptions = [
    { value: 'gemini', label: t('Google Gemini') },
    { value: 'groq',   label: t('Groq (高速 Llama 等開源模型)') },
  ];

  return (
    <div className="glass-panel animate-fade-in" style={{ padding: '24px', maxWidth: '600px', margin: '0 auto', marginTop: '50px' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>{t('學習設定')}</h2>

      {/* Row 1: Language + Theme */}
      <div style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('介面與母語語言')}</label>
          <GlassSelect
            value={uiLang}
            onChange={setUiLang}
            options={LANG_OPTIONS.map(l => ({ value: l.value, label: l.label, icon: l.flag }))}
            style={{ fontSize: '1.2rem', fontFamily: '"Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif' } as React.CSSProperties}
            theme={uiTheme}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('介面風格 (UI Theme)')}</label>
          <GlassSelect value={uiTheme} onChange={setUiTheme} options={themeOptions} theme={uiTheme} />
        </div>
      </div>

      {/* Row 2: Category + Role */}
      <div style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('主類別')}</label>
          <GlassSelect value={userCategory} onChange={handleCategoryChange} options={categoryOptions} theme={uiTheme} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('主題與職務')}</label>
          <GlassSelect value={userRole} onChange={setUserRole} options={roleOptions} theme={uiTheme} />
        </div>
      </div>

      {/* Row 3: Target Language + Level */}
      <div style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('學習語言目標')}</label>
          <GlassSelect value={targetLanguage} onChange={setTargetLanguage} options={targetLangOptions} theme={uiTheme} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('語言程度')}</label>
          <GlassSelect value={userLevel} onChange={setUserLevel} options={levelOptions} theme={uiTheme} />
        </div>
      </div>

      {/* Row 4: Correction Mode + Pattern Version */}
      <div style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('文法糾錯嚴格度')}</label>
          <GlassSelect value={correctionMode} onChange={setCorrectionMode} options={correctionModeOptions} theme={uiTheme} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('句型資料庫版本')}</label>
          <GlassSelect value={patternVersion} onChange={setPatternVersion} options={patternVersionOptions} theme={uiTheme} />
        </div>
      </div>

      {/* Row 5: Speech Rate + Auto-Read */}
      <div style={{ marginBottom: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
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

      {/* Row 6: API Provider + Model */}
      <div style={{ marginBottom: '1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>{t('AI 服務商')}</label>
            <GlassSelect value={apiProvider} onChange={setApiProvider} options={providerOptions} theme={uiTheme} />
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

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings as SettingsIcon } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';
import { useAppState } from '../contexts/AppStateContext';
import { categoryData, getDefaultRole } from '../data/categoryData';

// Vite injects these at build time
declare const __APP_VERSION__: string;
declare const __BUILD_DATE__: string;

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
          <select className="glass-input" value={uiLang} onChange={(e) => setUiLang(e.target.value)} style={{ appearance: 'auto' }}>
            <option value="zh-TW">{t('繁體中文')}</option>
            <option value="zh-CN">{t('簡體中文')}</option>
            <option value="en">{t('英文 (English)')}</option>
            <option value="ja">{t('日文 (日本語)')}</option>
            <option value="ko">{t('韓文 (한국어)')}</option>
            <option value="es">{t('西班牙文 (Español)')}</option>
            <option value="fr">{t('法文 (Français)')}</option>
          </select>
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

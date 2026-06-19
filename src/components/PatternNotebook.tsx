import React from 'react';
import { Trash2, Volume2, Download } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';
import { useSettingsStore } from '../store/useSettingsStore';
import { useSessionStore } from '../store/useSessionStore';
import { useVocabulary } from '../hooks/useVocabulary';
import { usePatterns } from '../hooks/usePatterns';
import { useProgress } from '../hooks/useProgress';
import { exportToPDF } from '../utils/pdfExporter';
import { getTtsCode, getGoogleTtsLang } from '../utils/languageMap';

const PatternNotebook = () => {
  const { t, uiLang } = useI18n();
  const { savedPatterns, setSavedPatterns } = usePatterns();
  const targetLanguage = useSettingsStore(s => s.targetLanguage);
  const speechRate = useSettingsStore(s => s.speechRate);
  
  const filteredPatterns = savedPatterns.filter(item => !item.lang || item.lang === targetLanguage);

  const handleSpeak = (text) => {
    let cleanText = text.replace(/\[.*?\]/g, ' ').replace(/【.*?】/g, ' ').replace(/[+\-=\/~*]/g, ' ');
    
    // 如果目標語言不包含漢字（非日文/中文），則徹底過濾掉所有中文字元
    const isAsianTarget = targetLanguage === 'ja' || targetLanguage === 'zh-TW' || targetLanguage === 'zh-CN';
    if (!isAsianTarget) {
      cleanText = cleanText.replace(/[\u4e00-\u9fa5]/g, ' ');
    }
    
    // 清除多餘的連續句點（例如 .. 或 ...）以及多餘的空白
    cleanText = cleanText.replace(/\.{2,}/g, ' ').replace(/\s+/g, ' ').trim();
    // 動態取得 TTS 語言代碼（支援所有目標語言）
    const googleLang = getGoogleTtsLang(targetLanguage);
    const bcpLang = getTtsCode(targetLanguage);
    
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${googleLang}&q=${encodeURIComponent(cleanText)}`;
    const audio = new Audio(url);
    audio.play().catch(() => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = bcpLang;
        const voices = window.speechSynthesis.getVoices();
        const langPrefix = googleLang.split('-')[0];
        const naturalVoice = voices.find(v => 
          v.lang.startsWith(langPrefix) &&
          (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Premium'))
        ) || voices.find(v => v.lang.startsWith(langPrefix));
        if (naturalVoice) utterance.voice = naturalVoice;
        utterance.rate = speechRate / 5;
        window.speechSynthesis.speak(utterance);
      }
    });
  };

  const removePattern = (id) => {
    setSavedPatterns(savedPatterns.filter(item => item.id !== id));
  };

  // 匯出為 PDF
  const handleExport = () => {
    const title = `${t('句型庫')} - ${new Date().toLocaleDateString()}`;
    exportToPDF('pattern', filteredPatterns, title);
  };

  if (filteredPatterns.length === 0) {
    return (
      <div className="animate-fade-in" style={{ padding: '20px 0', maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            📖 {t('句型庫')}
          </h2>
        </header>
        <div className="glass-panel" style={{ padding: '60px 20px', textAlign: 'center', borderRadius: '16px' }}>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>{t('您的句型庫是空的')}。</p>
          <p className="text-muted" style={{ marginTop: '8px' }}>{t('在對話練習中，AI 會自動幫您記錄實用句型')}。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ padding: '20px 0', maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          📖 {t('句型庫')}
          <span style={{ 
            background: 'var(--panel-bg-light)', 
            padding: '4px 12px', 
            borderRadius: '16px',
            fontSize: '0.9rem',
            color: 'var(--text-muted)'
          }}>
            {filteredPatterns.length} {t('個句型')}
          </span>
        </h2>
        <button
          className="glass-button"
          onClick={handleExport}
          style={{ 
            padding: '8px 16px', 
            borderRadius: '8px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '6px',
            fontSize: '0.9rem'
          }}
          title={t('匯出句型庫')}
        >
          <Download size={16} /> {t('匯出')}
        </button>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filteredPatterns.map((item) => (
          <div key={item.id} className="glass-panel" style={{ 
            padding: '20px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'var(--accent-color)' }}>{item.pattern}</h4>
              <p style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>{item.explanation}</p>
              {item.example && (
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontStyle: 'italic' }}>"{item.example}"</p>
              )}
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                className="glass-button"
                onClick={() => handleSpeak(item.pattern)}
                style={{ padding: '8px', borderRadius: '8px' }}
                title={t('播放發音')}
              >
                <Volume2 size={16} />
              </button>
              <button
                className="glass-button"
                onClick={() => removePattern(item.id)}
                style={{ padding: '8px', borderRadius: '8px', color: 'var(--danger-color, #ef4444)' }}
                title={t('刪除')}
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatternNotebook;

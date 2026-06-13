import React from 'react';
import { Trash2, Volume2, Download } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';
import { useAppState } from '../contexts/AppStateContext';
import { exportToPDF } from '../utils/pdfExporter';

const Notebook = () => {
  const { t, uiLang } = useI18n();
  const { state: { vocabulary, targetLanguage, speechRate }, setVocabulary } = useAppState();

  const handleSpeak = (text) => {
    const isJa = targetLanguage === 'ja';
    const langCode = isJa ? 'ja' : 'en-US';
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${langCode}&q=${encodeURIComponent(text)}`;
    const audio = new Audio(url);
    audio.play().catch(() => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = isJa ? 'ja-JP' : 'en-US';
        utterance.rate = speechRate / 5;
        window.speechSynthesis.speak(utterance);
      }
    });
  };

  const removeVocabulary = (id) => {
    setVocabulary(vocabulary.filter(item => item.id !== id));
  };

  // 匯出為 PDF
  const handleExport = () => {
    const title = `${t('生詞筆記')} - ${new Date().toLocaleDateString()}`;
    exportToPDF('vocabulary', vocabulary, title);
  };

  if (vocabulary.length === 0) {
    return (
      <div className="animate-fade-in" style={{ padding: '20px 0', maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            📚 {t('生詞筆記')}
          </h2>
        </header>
        <div className="glass-panel" style={{ padding: '60px 20px', textAlign: 'center', borderRadius: '16px' }}>
          <p className="text-muted" style={{ fontSize: '1.1rem' }}>{t('您的生詞筆記是空的')}。</p>
          <p className="text-muted" style={{ marginTop: '8px' }}>{t('在對話練習中，AI 會自動幫您記錄生詞')}。</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ padding: '20px 0', maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          📚 {t('生詞筆記')}
          <span style={{ 
            background: 'var(--panel-bg-light)', 
            padding: '4px 12px', 
            borderRadius: '16px',
            fontSize: '0.9rem',
            color: 'var(--text-muted)'
          }}>
            {vocabulary.length} {t('個生詞')}
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
          title={t('匯出生詞筆記')}
        >
          <Download size={16} /> {t('匯出')}
        </button>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {vocabulary.map((item) => (
          <div key={item.id} className="glass-panel" style={{ 
            padding: '20px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '4px', color: 'var(--accent-color)' }}>{item.term}</h4>
              <p style={{ color: 'var(--text-primary)', marginBottom: '4px' }}>{item.meaning}</p>
              {item.example && (
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontStyle: 'italic' }}>"{item.example}"</p>
              )}
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                className="glass-button"
                onClick={() => handleSpeak(item.term)}
                style={{ padding: '8px', borderRadius: '8px' }}
                title={t('播放發音')}
              >
                <Volume2 size={16} />
              </button>
              <button
                className="glass-button"
                onClick={() => removeVocabulary(item.id)}
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

export default Notebook;

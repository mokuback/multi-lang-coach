import React, { useState } from 'react';
import { BookOpen, Play, Volume2, ArrowRight, X, Sparkles } from 'lucide-react';
import { curriculumData } from '../data/curriculumData';
import { useI18n } from '../contexts/I18nContext';

const Curriculum = ({ targetLanguage, speechRate = 5, onStartDrill }) => {
  const { t } = useI18n();
  const [selectedUnit, setSelectedUnit] = useState(null);

  const units = curriculumData[targetLanguage] || [];

  const handleSpeak = (text, lang = targetLanguage) => {
    const isJa = lang === 'ja';
    const langCode = isJa ? 'ja' : 'en-US';
    
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${langCode}&q=${encodeURIComponent(text)}`;
    const audio = new Audio(url);
    
    audio.play().catch((error) => {
      console.warn("Google TTS 連結被瀏覽器安全機制阻擋，改用高品質內建語音:", error);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = isJa ? 'ja-JP' : 'en-US';
        const voices = window.speechSynthesis.getVoices();
        const langPrefix = isJa ? 'ja' : 'en';
        const naturalVoice = voices.find(v => 
          v.lang.startsWith(langPrefix) && 
          (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Premium'))
        ) || voices.find(v => v.lang.startsWith(langPrefix));
        
        if (naturalVoice) utterance.voice = naturalVoice;
        utterance.rate = 0.5 + (speechRate * 0.1);
        window.speechSynthesis.speak(utterance);
      }
    });
  };

  return (
    <div className="animate-fade-in" style={{ padding: '20px 0', maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <BookOpen className="text-accent" size={32} />
          {t('零基礎基礎訓練')}
        </h2>
        <p className="text-muted" style={{ marginBottom: '16px' }}>{t('循序漸進，從基礎單字到核心句型，配合 AI 教練一對一對話特訓。')}</p>
        <div style={{ 
          background: 'rgba(0, 240, 255, 0.05)', 
          borderLeft: '4px solid var(--accent-color)', 
          padding: '12px 16px', 
          borderRadius: '0 8px 8px 0', 
          fontSize: '0.95rem', 
          color: 'var(--text-secondary)',
          lineHeight: '1.6'
        }}>
          <strong style={{ color: 'var(--accent-color)', display: 'block', marginBottom: '4px' }}>💡 {t('教練的學習建議')}</strong>
          {t('各單元提供的單字與句型僅是拋磚引玉的起點。在與 AI 對話實戰時，它會根據您的回答給予更豐富的道地用法建議。請務必善用「收錄至筆記本」功能，將那些對您有幫助的新字彙與句型存下來，建立專屬於您的個人語言庫！')}
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {units.map((unit, index) => (
          <div 
            key={unit.id}
            className="glass-panel"
            style={{ 
              padding: '24px', 
              cursor: 'pointer',
              transition: 'all 0.3s',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              borderTop: `4px solid var(--accent-color)`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 240, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => setSelectedUnit(unit)}
          >
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 600 }}>
              UNIT {index + 1}
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{t(unit.title)}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', flex: 1 }}>{t(unit.description)}</p>
            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 600, gap: '4px', marginTop: '12px' }}>
              {t('開始學習')} <ArrowRight size={16} />
            </div>
          </div>
        ))}
      </div>

      {/* Study Modal */}
      {selectedUnit && (
        <div className="animate-fade-in" style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000, padding: '20px'
        }}>
          <div className="glass-panel animate-slide-in" style={{
            width: '100%', maxWidth: '700px', maxHeight: '85vh', overflowY: 'auto',
            padding: '32px', position: 'relative',
            background: 'rgba(15, 23, 42, 0.95)',
            boxShadow: '0 20px 40px rgba(0, 240, 255, 0.15)'
          }}>
            <button 
              onClick={() => setSelectedUnit(null)}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '8px' }}
            >
              <X size={24} />
            </button>
            
            <div style={{ marginBottom: '24px' }}>
              <span style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '1rem' }}>UNIT {units.findIndex(u => u.id === selectedUnit.id) + 1}</span>
              <h3 style={{ fontSize: '1.8rem', marginTop: '8px' }}>{t(selectedUnit.title)}</h3>
              <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>{t(selectedUnit.description)}</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              
              {/* Vocab Section */}
              {selectedUnit.vocab && selectedUnit.vocab.length > 0 && (
                <div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontSize: '1.2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '8px' }}>🎯 {t('本課單字')}</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '12px' }}>
                    {selectedUnit.vocab.map((v, i) => (
                      <div key={i} style={{ background: 'var(--panel-bg-light)', padding: '12px 16px', borderRadius: '8px', borderLeft: '3px solid var(--accent-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                            <span style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '1.1rem' }}>{v.word}</span>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{v.phonetic}</span>
                          </div>
                          <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '4px' }}>{t(v.zh)}</div>
                        </div>
                        <button 
                          className="glass-button" 
                          style={{ padding: '8px', borderRadius: '50%', background: 'transparent', border: '1px solid var(--glass-border)' }} 
                          onClick={() => handleSpeak(v.word)}
                        >
                          <Volume2 size={16} className="text-accent" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pattern Section */}
              {selectedUnit.patterns && selectedUnit.patterns.length > 0 && (
                <div>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontSize: '1.2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '8px' }}>✨ {t('核心句型')}</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {selectedUnit.patterns.map((p, i) => (
                      <div key={i} style={{ background: 'var(--panel-bg-light)', padding: '16px', borderRadius: '8px' }}>
                        <div style={{ color: 'var(--accent-color)', fontWeight: 600, marginBottom: '8px', fontSize: '1.05rem' }}>{p.pattern}</div>
                        <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{t(p.explanation)}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            <div style={{ marginTop: '32px', paddingTop: '20px', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={() => {
                  onStartDrill(selectedUnit);
                  setSelectedUnit(null);
                }}
                className="glass-button active"
                style={{ padding: '14px 28px', fontSize: '1.1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Sparkles size={20} /> {t('開始 AI 基礎訓練')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Curriculum;

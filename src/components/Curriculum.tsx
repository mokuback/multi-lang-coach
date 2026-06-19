import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Play, Volume2, ArrowRight, Sparkles } from 'lucide-react';
import { curriculumData } from '../data/curriculumData';
import { useI18n } from '../contexts/I18nContext';
import { useSettingsStore } from '../store/useSettingsStore';
import { useSessionStore } from '../store/useSessionStore';
import { useVocabulary } from '../hooks/useVocabulary';
import { usePatterns } from '../hooks/usePatterns';
import { useProgress } from '../hooks/useProgress';
import { getGoogleTtsLang, getTtsCode } from '../utils/languageMap';

const Curriculum = () => {
  const { t, getLocalizedContent } = useI18n();
  const targetLanguage = useSettingsStore(s => s.targetLanguage);
  const speechRate = useSettingsStore(s => s.speechRate);
  const navigate = useNavigate();
  const [selectedUnit, setSelectedUnit] = useState(null);

  const units = curriculumData[targetLanguage] || [];

  const handleSpeak = (text, lang = targetLanguage) => {
    const googleLang = getGoogleTtsLang(lang);
    const bcpLang = getTtsCode(lang);
    const langPrefix = googleLang;

    const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${googleLang}&q=${encodeURIComponent(text)}`;
    const audio = new Audio(url);


    audio.play().catch(() => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = bcpLang;
        const voices = window.speechSynthesis.getVoices();
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

  const handleStartDrill = (unit, type, item) => {
    if (type === 'pattern' && item) {
      // 句型代換練習 - 與 Patterns 頁面的行為一致
      navigate('/chat', {
        state: {
          scenario: {
            id: 'pattern-drill',
            title: t('句型代換練習'),
            desc: t('教練給予情境，使用者填入代換詞彙'),
            patternItem: item
          }
        }
      });
    } else {
      // 其他練習類型（單字、完整單元）
      const localizedTitle = getLocalizedContent(unit.title);
      const localizedDesc = getLocalizedContent(unit.description);
      navigate('/chat', {
        state: {
          scenario: {
            id: 'curriculum-drill',
            title: localizedTitle,
            desc: localizedDesc,
            unit: { ...unit, drillType: type, drillItem: item }
          }
        }
      });
    }
  };

  if (!selectedUnit) {
    return (
      <div className="animate-fade-in" style={{ padding: '20px 0', maxWidth: '900px', margin: '0 auto' }}>
        <header style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <BookOpen className="text-accent" size={32} />
            {t('基礎訓練')}
          </h2>
          <p className="text-muted">{t('選擇一個單元開始您的學習之旅。')}</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {units.length === 0 && (
            <p style={{ color: 'var(--text-secondary)', gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0' }}>
              {t('目前沒有可用的課程，請先在設定中選擇學習語言。')}
            </p>
          )}
          {units.map((unit, index) => (
            <div key={unit.id} className="glass-panel hover-card" style={{ 
              padding: '24px',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
            }}
            onClick={() => setSelectedUnit(unit)}
            onMouseEnter={(e) => { 
              e.currentTarget.style.transform = 'translateY(-5px)'; 
              e.currentTarget.style.borderColor = 'var(--accent-color)';
            }}
            onMouseLeave={(e) => { 
              e.currentTarget.style.transform = 'translateY(0)'; 
              e.currentTarget.style.borderColor = 'var(--glass-border)';
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h3 style={{ fontSize: '1.25rem' }}>{getLocalizedContent(unit.title)}</h3>
                <span style={{ 
                  background: 'var(--panel-bg-light)', 
                  padding: '4px 12px', 
                  borderRadius: '16px',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)'
                }}>
                  {unit.vocab?.length || 0} {t('單字')} · {unit.patterns?.length || 0} {t('句型')}
                </span>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{getLocalizedContent(unit.description)}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const unit = selectedUnit;

  return (
    <div className="animate-fade-in" style={{ padding: '20px 0', maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button 
          className="glass-button"
          onClick={() => setSelectedUnit(null)}
          style={{ padding: '8px', borderRadius: '8px' }}
        >
          <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
        </button>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '4px' }}>{getLocalizedContent(unit.title)}</h2>
          <p className="text-muted">{getLocalizedContent(unit.description)}</p>
        </div>
      </header>

      {/* 詞彙列表 */}
      {unit.vocab && unit.vocab.length > 0 && (
        <section style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '16px', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={20} />
            {t('重點單字')}
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '12px' }}>
            {(unit.vocab || []).map((item, idx) => (
              <div key={`vocab-${idx}`} className="glass-panel" style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{item.word}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{getLocalizedContent(item.meanings)} {item.phonetic ? `(${item.phonetic})` : ''}</div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="glass-button" onClick={() => handleSpeak(item.word)} style={{ padding: '6px', borderRadius: '6px' }}>
                    <Volume2 size={16} />
                  </button>
                  <button className="glass-button active" onClick={() => handleStartDrill(unit, 'vocab', item)} style={{ padding: '6px', borderRadius: '6px' }}>
                    <Play size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 句型列表 */}
      {unit.patterns && unit.patterns.length > 0 && (
        <section style={{ marginBottom: '32px' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '16px', color: 'var(--accent-color)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen size={20} />
            {t('核心句型')}
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {(unit.patterns || []).map((item, idx) => (
              <div key={`pattern-${idx}`} className="glass-panel" style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--accent-color)', marginBottom: '4px' }}>{t(item.pattern)}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{getLocalizedContent(item.explanations) || item.explanation}</div>
                </div>
                <button
                  className="glass-button active"
                  onClick={() => handleStartDrill(unit, 'pattern', item)}
                  style={{ padding: '10px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}
                >
                  <Play size={18} />
                  {t('開始練習')}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 整單元綜合練習 */}
      <div style={{ textAlign: 'center', marginTop: '24px' }}>
        <button
          className="glass-button active"
          onClick={() => handleStartDrill(unit, 'full', null)}
          style={{ padding: '14px 32px', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1.05rem' }}
        >
          <Play size={20} />
          {t('開始本單元綜合特訓')}
        </button>
      </div>
    </div>
  );
};

export default Curriculum;


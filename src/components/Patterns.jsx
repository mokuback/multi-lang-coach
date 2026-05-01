import React from 'react';
import { BookMarked, Play, Info, Layers } from 'lucide-react';
import scenarioPatterns01 from '../data/scenarioPatterns_01.json';
import scenarioPatterns02 from '../data/scenarioPatterns_02.json';
import { useI18n } from '../contexts/I18nContext';

const Patterns = ({ activeScenario, targetLanguage, handleStartPatternDrill, version, setVersion }) => {
  const { t } = useI18n();

  const currentPatterns = version === '01' ? scenarioPatterns01 : scenarioPatterns02;
  const scenarioId = activeScenario?.id || 'default';
  const scenarioData = currentPatterns[scenarioId] || currentPatterns['default'];
  const patterns = scenarioData ? (scenarioData[targetLanguage] || scenarioData['en'] || []) : [];

  return (
    <div className="animate-fade-in" style={{ padding: '20px 0', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <BookMarked className="text-accent" size={32} />
          {t('常用句型 (Patterns)')}
        </h2>
        <p className="text-muted">{t('根據您當前的每日任務，為您精選最關鍵的母語人士常用句型。點擊進入代換練習模式！')}</p>
      </header>

      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', padding: '12px 20px', borderRadius: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
        <Layers size={20} className="text-accent" />
        <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{t('句型資料庫版本：')}</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button 
            className={`glass-button ${version === '01' ? 'active' : ''}`}
            style={{ padding: '6px 16px', background: version === '01' ? 'var(--accent-color)' : 'transparent', color: version === '01' ? '#fff' : 'var(--text-primary)', borderColor: version === '01' ? 'var(--accent-color)' : 'var(--glass-border)' }}
            onClick={() => setVersion('01')}
          >
            {t('基礎教科書版 (適合初學)')}
          </button>
          <button 
            className={`glass-button ${version === '02' ? 'active' : ''}`}
            style={{ padding: '6px 16px', background: version === '02' ? 'var(--accent-color)' : 'transparent', color: version === '02' ? '#fff' : 'var(--text-primary)', borderColor: version === '02' ? 'var(--accent-color)' : 'var(--glass-border)' }}
            onClick={() => setVersion('02')}
          >
            {t('進階商務版 (母語者思維)')}
          </button>
        </div>
      </div>

      {patterns && patterns.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }}>
          {patterns.map((item, index) => (
            <div 
              key={`${activeScenario}-${index}`} 
              className="glass-panel hover-card" 
              style={{ padding: '20px', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              onClick={() => handleStartPatternDrill(item)}
            >
              <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '8px' }}>
                {item.pattern}
              </h3>
              <p style={{ color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 500 }}>
                {t(item.translation)}
              </p>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', flex: 1, marginTop: '8px', borderTop: '1px solid var(--glass-border)', paddingTop: '12px' }}>
                <Info size={16} className="text-muted" style={{ marginTop: '2px' }} />
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {t(item.explanation)}
                </p>
              </div>
              <button 
                className="glass-button" 
                style={{ width: '100%', marginTop: '16px', padding: '10px' }}
              >
                <Play size={16} /> {t('代換練習')}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
          <p>{t('此任務目前沒有相對應的句型，或是大數據尚未生成完畢。請執行句型生成腳本！')}</p>
        </div>
      )}
    </div>
  );
};

export default Patterns;

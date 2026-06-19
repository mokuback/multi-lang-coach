import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookMarked, Play, Info, Filter } from 'lucide-react';
import { getScenarioPatterns } from '../data/scenarioPatterns/index.js';
import { useI18n } from '../contexts/I18nContext';
import { useSettingsStore } from '../store/useSettingsStore';
import { useSessionStore } from '../store/useSessionStore';
import { useVocabulary } from '../hooks/useVocabulary';
import { usePatterns } from '../hooks/usePatterns';
import { useProgress } from '../hooks/useProgress';
import { categoryData, getDefaultRole } from '../data/categoryData';
import { getScenariosByRole } from '../data/scenariosData';
import GlassSelect from './GlassSelect';

const Patterns = () => {
  const { t, getLocalizedContent } = useI18n();
  const targetLanguage = useSettingsStore(s => s.targetLanguage);
  const patternVersion = useSettingsStore(s => s.patternVersion);
  const userCategory = useSettingsStore(s => s.userCategory);
  const userRole = useSettingsStore(s => s.userRole);
  const uiTheme = useSettingsStore(s => s.uiTheme);
  const navigate = useNavigate();

  const [allPatternsData, setAllPatternsData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // 獨立的分類狀態，預設值帶入使用者目前的設定
  const [selectedCategory, setSelectedCategory] = useState(userCategory || 'business');
  const [selectedRole, setSelectedRole] = useState(userRole || 'it');

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSelectedRole(getDefaultRole(value));
  };

  useEffect(() => {
    let isMounted = true;
    const loadPatterns = async () => {
      setIsLoading(true);
      const data = await getScenarioPatterns(patternVersion);
      if (isMounted) {
        if (data) {
          setAllPatternsData(data);
        } else {
          setAllPatternsData({});
        }
        setIsLoading(false);
      }
    };
    loadPatterns();
    return () => { isMounted = false; };
  }, [targetLanguage, patternVersion]);

  // 取得當下職務所對應的所有情境
  const scenariosForRole = getScenariosByRole(selectedRole) || [];
  // 過濾出「真的有句型資料」的情境
  const availableScenarios = scenariosForRole.filter(s => allPatternsData[s.id] && allPatternsData[s.id].length > 0);

  const handleStartPatternDrill = (patternItem) => {
    navigate('/chat', {
      state: {
        scenario: {
          id: 'pattern-drill',
          title: t("句型代換練習"),
          desc: t("教練給予情境，使用者填入代換詞彙"),
          patternItem
        }
      }
    });
  };

  const renderPatternCards = (patternsList, sid) => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px', marginBottom: '40px' }}>
      {patternsList.map((item, index) => (
        <div 
          key={`${sid}-${index}`} 
          className="glass-panel hover-card animate-fade-in" 
          style={{ padding: '20px', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
          onClick={() => handleStartPatternDrill(item)}
        >
          <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '8px', lineHeight: '1.4' }}>
            {item.translations?.[targetLanguage] || item.pattern || ''}
          </h3>
          <p style={{ color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 500, fontSize: '1.05rem' }}>
            {getLocalizedContent(item.translations || { 'zh-TW': item.translation || '' })}
          </p>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', flex: 1, marginTop: '8px', borderTop: '1px solid var(--glass-border)', paddingTop: '12px' }}>
            <Info size={16} className="text-muted" style={{ marginTop: '2px', minWidth: '16px' }} />
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {getLocalizedContent(item.explanations || { 'zh-TW': item.explanation || '' })}
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
  );

  return (
    <div className="animate-fade-in" style={{ padding: '20px 0', maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <BookMarked className="text-accent" size={32} />
          {t('常用句型 (Patterns)')}
        </h2>
        <p className="text-muted">{t('為您精選最關鍵的母語人士常用句型。點擊進入代換練習模式！')}</p>
      </header>

      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px', marginBottom: '30px', padding: '16px 20px', borderRadius: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', width: '100%' }}>
          <Filter size={20} className="text-accent" style={{ flexShrink: 0 }} />
          <span style={{ fontWeight: 500, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>{t('情境篩選：')}</span>
          <GlassSelect
            value={selectedCategory}
            onChange={handleCategoryChange}
            options={categoryData.categories.map(c => ({ value: c.id, label: t(c.label) }))}
            theme={uiTheme}
            style={{ flex: '1 1 auto', minWidth: '150px' }}
          />
          <GlassSelect 
            value={selectedRole} 
            onChange={setSelectedRole}
            options={(categoryData.roles[selectedCategory] || []).map(r => ({ value: r.id, label: t(r.label) }))}
            theme={uiTheme}
            style={{ flex: '1 1 auto', minWidth: '150px' }}
          />
        </div>
      </div>

      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
          <div className="animate-spin" style={{ margin: '0 auto 16px', width: '32px', height: '32px', border: '3px solid var(--glass-border)', borderTopColor: 'var(--accent-color)', borderRadius: '50%' }} />
          <p>{t('載入句型中...')}</p>
        </div>
      ) : availableScenarios.length > 0 ? (
        <div>
          {availableScenarios.map(scenario => (
            <section key={scenario.id}>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '16px', paddingBottom: '8px', borderBottom: '1px solid var(--glass-border)' }}>
                📝 {t(scenario.title)}
              </h3>
              {renderPatternCards(allPatternsData[scenario.id], scenario.id)}
            </section>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
          <p>{t('這個主題分類下目前尚未生成任何句型資料庫。')}</p>
        </div>
      )}
    </div>
  );
};

export default Patterns;

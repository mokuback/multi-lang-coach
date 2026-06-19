import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Play, TrendingUp, Calendar, Zap, MessageSquare } from 'lucide-react';
import { getScenariosByRole } from '../data/scenariosData';
import { categoryData } from '../data/categoryData';
import { useI18n } from '../contexts/I18nContext';
import { useSettingsStore } from '../store/useSettingsStore';
import { useSessionStore } from '../store/useSessionStore';
import { useVocabulary } from '../hooks/useVocabulary';
import { usePatterns } from '../hooks/usePatterns';
import { useProgress } from '../hooks/useProgress';
import { getLangName } from '../utils/languageMap';
import Footer from './Footer';

const Dashboard = () => {
  const { t, uiLang } = useI18n();
  const targetLanguage = useSettingsStore(s => s.targetLanguage);
  const userRole = useSettingsStore(s => s.userRole);
  const userCategory = useSettingsStore(s => s.userCategory);
  const { vocabulary } = useVocabulary();
  const { progress, updateProgress } = useProgress();
  const navigate = useNavigate();

  const [scenarios, setScenarios] = useState([]);
  // Load scenarios based on user role and target language
  useEffect(() => {
    const loadedScenarios = getScenariosByRole(userRole);
    setScenarios(loadedScenarios || []);
  }, [userRole, targetLanguage]);

  const roleLabel = Object.values(categoryData.roles).flat().find(r => r.id === userRole)?.label || userRole;

  const categoryImages = {
    business: '/scenario_business.png',
    academic: '/scenario_academic.png',
    lifestyle: '/scenario_lifestyle.png',
    social: '/scenario_social.png',
    trends: '/scenario_trends.png'
  };

  const bannerImg = categoryImages[userCategory] || '/scenario_business.png';

  const handleStart = (scenario) => {
    updateProgress();
    navigate('/chat', { state: {
      scenario: {
        ...scenario,
        title: t(scenario.title),
        desc: t(scenario.desc),
        difficulty: t(scenario.difficulty)
      }
    }});
  };

  return (
    <div className="animate-fade-in" style={{ padding: '20px 0', maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>{t('歡迎回來！')}</h2>
          <p className="text-muted">{t('這是專為您')}（{t(roleLabel)}）{t('量身打造的每日')}{getLangName(targetLanguage, uiLang)}{t('口語挑戰。')}</p>
        </div>
        <button 
          className="glass-button active" 
          onClick={() => handleStart({ id: 'free-mode', title: t("自由對話模式"), desc: t("不限主題，隨心所欲地與 AI 進行自然交流，訓練臨場反應。"), difficulty: t("不限") })}
          style={{ padding: '12px 20px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', border: '1px solid var(--accent-color)' }}
        >
          <MessageSquare size={18} />
          ✨ {t('自由對話模式 (Free Mode)')}
        </button>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        {scenarios.map((scenario) => (
          <div key={scenario.id} className="glass-panel hover-card" style={{ 
            padding: '0px', 
            overflow: 'hidden',
            transition: 'transform 0.3s ease, border-color 0.3s ease',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column'
          }}
          onMouseEnter={(e) => { 
            e.currentTarget.style.transform = 'translateY(-5px)'; 
            e.currentTarget.style.borderColor = 'var(--accent-color)';
            const img = e.currentTarget.querySelector('.scenario-card-image') as HTMLElement;
            if (img) img.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => { 
            e.currentTarget.style.transform = 'translateY(0)'; 
            e.currentTarget.style.borderColor = 'var(--glass-border)';
            const img = e.currentTarget.querySelector('.scenario-card-image') as HTMLElement;
            if (img) img.style.transform = 'scale(1)';
          }}>
            
            <div style={{ width: '100%', height: '140px', overflow: 'hidden', position: 'relative' }}>
              <img 
                src={bannerImg} 
                alt={t(scenario.title)} 
                className="scenario-card-image"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }} 
              />
              <div style={{ 
                position: 'absolute', 
                top: '12px', 
                left: '12px', 
                background: 'rgba(0, 0, 0, 0.65)', 
                backdropFilter: 'blur(4px)',
                color: 'var(--accent-color)', 
                padding: '4px 12px', 
                borderRadius: '16px',
                fontSize: '0.8rem',
                fontWeight: 600,
                border: '1px solid rgba(255, 255, 255, 0.15)'
              }}>
                {t(scenario.difficulty)}
              </div>
            </div>

            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{t(scenario.title)}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px', flex: 1 }}>
                {t(scenario.desc)}
              </p>

              <button 
                className="glass-button" 
                onClick={() => handleStart(scenario)}
                style={{ width: '100%', padding: '12px', borderRadius: '8px' }}
              >
                <Play size={18} />
                {t('開始練習')}
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="glass-panel" style={{ padding: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <TrendingUp className="text-accent" />
          <h3 style={{ fontSize: '1.2rem' }}>{t('學習進度')}</h3>
        </div>
        
        <div style={{ display: 'flex', gap: '40px' }}>
          <div>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>{t('連續練習天數')}</p>
            <p style={{ fontSize: '2rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              {progress.streak} <Zap size={24} className="text-accent" fill="var(--accent-color)" />
            </p>
          </div>
          <div>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>{t('完成情境數')}</p>
            <p style={{ fontSize: '2rem', fontWeight: 700 }}>{progress.completedScenarios}</p>
          </div>
          <div>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>{t('學習生詞數')}</p>
            <p style={{ fontSize: '2rem', fontWeight: 700 }}>{vocabulary.length}</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dashboard;

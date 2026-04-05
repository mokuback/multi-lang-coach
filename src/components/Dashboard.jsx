import React from 'react';
import { Play, TrendingUp, Calendar, Zap } from 'lucide-react';

import { categoryData } from '../data/categoryData';

const Dashboard = ({ scenarios, onStart, targetLanguage = 'en', userRole = 'it' }) => {
  const roleLabel = Object.values(categoryData.roles).flat().find(r => r.id === userRole)?.label || userRole;
  return (
    <div className="animate-fade-in" style={{ padding: '20px 0', maxWidth: '900px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>歡迎回來！</h2>
        <p className="text-muted">這是專為您（{roleLabel}）量身打造的每日{targetLanguage === 'en' ? '英語' : '日語'}口語挑戰。</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        {scenarios.map((scenario) => (
          <div key={scenario.id} className="glass-panel hover-card" style={{ 
            padding: '24px', 
            transition: 'transform 0.3s ease, border-color 0.3s ease',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'var(--accent-color)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--glass-border)'; }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ 
                background: 'rgba(0, 240, 255, 0.1)', 
                color: 'var(--accent-color)', 
                padding: '4px 12px', 
                borderRadius: '16px',
                fontSize: '0.8rem',
                fontWeight: 600
              }}>
                {scenario.difficulty}
              </span>
              <Calendar size={18} className="text-muted" />
            </div>

            <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{scenario.title}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '24px', flex: 1 }}>
              {scenario.desc}
            </p>

            <button 
              className="glass-button" 
              onClick={() => onStart(scenario)}
              style={{ width: '100%', padding: '12px', borderRadius: '8px' }}
            >
              <Play size={18} />
              開始練習
            </button>
          </div>
        ))}
      </div>

      <section className="glass-panel" style={{ padding: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <TrendingUp className="text-accent" />
          <h3 style={{ fontSize: '1.2rem' }}>學習進度</h3>
        </div>
        
        <div style={{ display: 'flex', gap: '40px' }}>
          <div>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>連續練習天數</p>
            <p style={{ fontSize: '2rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              5 <Zap size={24} className="text-accent" fill="var(--accent-color)" />
            </p>
          </div>
          <div>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>完成情境數</p>
            <p style={{ fontSize: '2rem', fontWeight: 700 }}>12</p>
          </div>
          <div>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>學習生詞數</p>
            <p style={{ fontSize: '2rem', fontWeight: 700 }}>34</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import { BookMarked, Play, Info } from 'lucide-react';
import { getPatterns } from '../data/patternsData';

const Patterns = ({ userRole, userLevel, targetLanguage, handleStartPatternDrill }) => {
  const patterns = getPatterns(targetLanguage, userRole, userLevel);

  return (
    <div className="animate-fade-in" style={{ padding: '20px 0', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <BookMarked className="text-accent" size={32} />
          常用句型 (Patterns)
        </h2>
        <p className="text-muted">根據您的情境與程度，為您精選最關鍵的母語人士常用句型。點擊進入代換練習模式！</p>
      </header>

      {patterns && patterns.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px' }}>
          {patterns.map((item) => (
            <div 
              key={item.id} 
              className="glass-panel hover-card" 
              style={{ padding: '20px', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              onClick={() => handleStartPatternDrill(item)}
            >
              <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-color)', marginBottom: '8px' }}>
                {item.pattern}
              </h3>
              <p style={{ color: 'var(--text-primary)', marginBottom: '8px', fontWeight: 500 }}>
                {item.translation}
              </p>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', flex: 1, marginTop: '8px', borderTop: '1px solid var(--glass-border)', paddingTop: '12px' }}>
                <Info size={16} className="text-muted" style={{ marginTop: '2px' }} />
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  {item.explanation}
                </p>
              </div>
              <button 
                className="glass-button" 
                style={{ width: '100%', marginTop: '16px', padding: '10px' }}
              >
                <Play size={16} /> 代換練習
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
          <p>此主題與難度目前沒有相對應的句型。我們會持續擴充！</p>
        </div>
      )}
    </div>
  );
};

export default Patterns;

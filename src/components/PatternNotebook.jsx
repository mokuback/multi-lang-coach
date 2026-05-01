import React, { useState } from 'react';
import { BookMarked, Volume2, Search, Trash2, Download } from 'lucide-react';
import { exportToPDF } from '../utils/pdfExporter';

const PatternNotebook = ({ patterns, removePattern, targetLanguage, speechRate = 5 }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPatterns = patterns.filter(p => {
    if (p.lang !== targetLanguage) return false;
    if (!searchTerm) return true;
    const lowerSearch = searchTerm.toLowerCase();
    return p.pattern.toLowerCase().includes(lowerSearch) || p.explanation.toLowerCase().includes(lowerSearch);
  });

  const handleSpeak = (text, lang = 'en') => {
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
          (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Premium') || v.name.includes('Nanami') || v.name.includes('Keita') || v.name.includes('Microsoft'))
        ) || voices.find(v => v.lang.startsWith(langPrefix));
        
        if (naturalVoice) {
          utterance.voice = naturalVoice;
        }
        utterance.rate = 0.5 + (speechRate * 0.1);
        
        window.speechSynthesis.speak(utterance);
      }
    });
  };

  const handleDelete = (pattern, lang) => {
    if (window.confirm(`確定要將句型「${pattern}」從筆記中永久移除嗎？`)) {
      if (removePattern) {
        removePattern(pattern, lang);
      }
    }
  };

  const handleExportPDF = () => {
    exportToPDF('pattern', filteredPatterns, '句型筆記本');
  };

  return (
    <div className="animate-fade-in" style={{ padding: '20px 0', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <BookMarked className="text-accent" size={32} />
            句型筆記本
          </h2>
          <p className="text-muted">在這裡複習您在口語對話練習中解析收藏的實用句型。</p>
        </div>
        
        <div className="no-export" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '250px' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '14px', color: 'var(--text-secondary)' }} />
            <input 
              type="text" 
              placeholder="搜尋句型..." 
              className="glass-input" 
              style={{ paddingLeft: '40px' }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            className="glass-button"
            onClick={handleExportPDF}
            title="匯出成 PDF"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', whiteSpace: 'nowrap' }}
          >
            <Download size={18} />
            匯出
          </button>
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filteredPatterns.map((p, index) => (
          <div key={`${p.lang}-${p.pattern}-${index}`} className="glass-panel animate-slide-in" style={{ 
            padding: '24px', 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            animationDelay: `${index * 0.1}s`
          }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '12px' }}>
                {p.pattern}
              </h3>
              
              <div style={{ 
                borderLeft: '2px solid var(--glass-border)', 
                paddingLeft: '16px' 
              }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6' }}>
                  {p.explanation}
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginLeft: '16px' }}>
              <button 
                className="glass-button" 
                style={{ padding: '10px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)' }} 
                title="聆聽發音"
                onClick={() => handleSpeak(p.pattern, p.lang)}
              >
                <Volume2 size={20} className="text-accent" />
              </button>
              
              <button 
                className="glass-button" 
                style={{ 
                  padding: '10px', 
                  borderRadius: '50%', 
                  background: 'rgba(255, 71, 87, 0.05)',
                  border: '1px solid rgba(255, 71, 87, 0.2)'
                }} 
                title="移除句型"
                onClick={() => handleDelete(p.pattern, p.lang)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 71, 87, 0.2)';
                  e.currentTarget.querySelector('svg').style.color = '#ff4757';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 71, 87, 0.05)';
                  e.currentTarget.querySelector('svg').style.color = 'var(--text-muted)';
                }}
              >
                <Trash2 size={18} className="text-muted" style={{ transition: 'color 0.2s' }} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredPatterns.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
          <BookMarked size={48} style={{ margin: '0 auto 16px', opacity: 0.5 }} />
          <p>您的句型筆記本目前是空的。去對話練習中使用「當句解析」來收集實用句型吧！</p>
        </div>
      )}
    </div>
  );
};

export default PatternNotebook;

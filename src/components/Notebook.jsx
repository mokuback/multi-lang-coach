import React, { useState } from 'react';
import { BookOpen, Volume2, Search, Trash2 } from 'lucide-react';

const Notebook = ({ vocabulary, removeVocabulary, targetLanguage, speechRate = 5 }) => {
  const filteredVocabulary = vocabulary.filter(v => v.lang === targetLanguage);
  const handleSpeak = (text, lang = 'en') => {
    const isJa = lang === 'ja';
    const langCode = isJa ? 'ja' : 'en-US';
    
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=${langCode}&q=${encodeURIComponent(text)}`;
    const audio = new Audio(url);
    
    // audio.play() 是一個 Promise，如果是 CORS 阻擋會在這裡拋出錯誤
    audio.play().catch((error) => {
      console.warn("Google TTS 連結被瀏覽器安全機制阻擋，改用高品質內建語音:", error);
      
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = isJa ? 'ja-JP' : 'en-US';
        
        // 嘗試尋找電腦內建的高品質/自然語音
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

  const handleDelete = (term, lang) => {
    if (window.confirm(`確定要將單字「${term}」從生詞本中永久移除嗎？`)) {
      if (removeVocabulary) {
        removeVocabulary(term, lang);
      }
    }
  };

  return (
    <div className="animate-fade-in" style={{ padding: '20px 0', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <BookOpen className="text-accent" size={32} />
            生詞筆記本
          </h2>
          <p className="text-muted">在這裡複習您在口語對話練習中收集到的實用單字與句型。</p>
        </div>
        
        <div style={{ position: 'relative', width: '250px' }}>
          <Search size={18} style={{ position: 'absolute', left: '12px', top: '14px', color: 'var(--text-secondary)' }} />
          <input 
            type="text" 
            placeholder="搜尋單字..." 
            className="glass-input" 
            style={{ paddingLeft: '40px' }}
          />
        </div>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filteredVocabulary.map((vocab, index) => (
          <div key={`${vocab.lang}-${vocab.term}-${index}`} className="glass-panel animate-slide-in" style={{ 
            padding: '24px', 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            animationDelay: `${index * 0.1}s`
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '8px' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)' }}>{vocab.term}</h3>
                <span style={{ 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  padding: '4px 12px', 
                  borderRadius: '12px',
                  color: 'var(--accent-color)',
                  fontSize: '0.9rem'
                }}>
                  {vocab.meaning}
                </span>
              </div>
              
              <div style={{ 
                marginTop: '16px', 
                borderLeft: '2px solid var(--glass-border)', 
                paddingLeft: '16px' 
              }}>
                <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '1rem' }}>
                  "{vocab.example}"
                </p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button 
                className="glass-button" 
                style={{ padding: '10px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.05)' }} 
                title="聆聽發音"
                onClick={() => handleSpeak(vocab.term, vocab.lang)}
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
                title="移除生詞"
                onClick={() => handleDelete(vocab.term, vocab.lang)}
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
      
      {filteredVocabulary.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
          <BookOpen size={48} style={{ margin: '0 auto 16px', opacity: 0.5 }} />
          <p>您的筆記本目前是空的。去對話練習中收集更多單字吧！</p>
        </div>
      )}
    </div>
  );
};

export default Notebook;

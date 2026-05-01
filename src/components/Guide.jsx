/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { BookOpen } from 'lucide-react';
import userGuideMd from '../data/user_guide.md?raw';
import { useI18n } from '../contexts/I18nContext';

const Guide = () => {
  const { t } = useI18n();
  const [error, setError] = useState(null);

  if (error) {
    return <div style={{ color: 'red', padding: '20px' }}>Render Error: {error.message}</div>;
  }
  return (
    <div className="animate-fade-in" style={{ padding: '20px 0', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <BookOpen className="text-accent" size={32} />
            {t('使用說明')}
          </h2>
          <p className="text-muted">{t('了解如何發揮 Multi-Lang Coach 的最大學習效益。')}</p>
        </div>
      </header>

      <div className="glass-panel" style={{ padding: '32px', borderRadius: '16px' }}>
        <div className="markdown-content" style={{
          color: 'var(--text-primary)',
          lineHeight: '1.8',
          fontSize: '1.05rem'
        }}>
          {(() => {
            try {
              return (
                <ReactMarkdown
                  components={{
                    h1: (props) => { const {node, ...rest} = props; return <h1 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '24px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '12px' }} {...rest} />; },
                    h2: (props) => { const {node, ...rest} = props; return <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }} {...rest} />; },
                    h3: (props) => { const {node, ...rest} = props; return <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px' }} {...rest} />; },
                    p: (props) => { const {node, ...rest} = props; return <p style={{ marginBottom: '16px', color: 'var(--text-secondary)' }} {...rest} />; },
                    ul: (props) => { const {node, ...rest} = props; return <ul style={{ marginBottom: '16px', paddingLeft: '24px', color: 'var(--text-secondary)' }} {...rest} />; },
                    ol: (props) => { const {node, ...rest} = props; return <ol style={{ marginBottom: '16px', paddingLeft: '24px', color: 'var(--text-secondary)' }} {...rest} />; },
                    li: (props) => { const {node, ...rest} = props; return <li style={{ marginBottom: '8px' }} {...rest} />; },
                    strong: (props) => { const {node, ...rest} = props; return <strong style={{ color: 'var(--text-primary)', fontWeight: 'bold' }} {...rest} />; },
                    a: (props) => { const {node, ...rest} = props; return <a style={{ color: 'var(--accent-color)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" {...rest} />; },
                    hr: (props) => { const {node, ...rest} = props; return <hr style={{ border: 'none', borderTop: '1px solid var(--glass-border)', margin: '32px 0' }} {...rest} />; },
                    blockquote: (props) => { const {node, ...rest} = props; return <blockquote style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '16px', margin: '24px 0', color: 'var(--text-muted)', fontStyle: 'italic', background: 'rgba(0,0,0,0.2)', padding: '16px' }} {...rest} />; },
                    code: (props) => { const {node, inline, ...rest} = props; return inline 
                      ? <code style={{ color: '#FFD700', background: 'rgba(255, 215, 0, 0.1)', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' }} {...rest} />
                      : <code {...rest} />; }
                  }}
                >
                  {t(userGuideMd || '')}
                </ReactMarkdown>
              );
            } catch (e) {
              setTimeout(() => setError(e), 0);
              return null;
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default Guide;

import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { BookOpen } from 'lucide-react';
import userGuideMd from '../data/user_guide.md?raw';

const Guide = () => {
  return (
    <div className="animate-fade-in" style={{ padding: '20px 0', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '2rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <BookOpen className="text-accent" size={32} />
            使用說明
          </h2>
          <p className="text-muted">了解如何發揮 Multi-Lang Coach 的最大學習效益。</p>
        </div>
      </header>

      <div className="glass-panel" style={{ padding: '32px', borderRadius: '16px' }}>
        <div className="markdown-content" style={{
          color: 'var(--text-primary)',
          lineHeight: '1.8',
          fontSize: '1.05rem'
        }}>
          <ReactMarkdown
            components={{
              h1: ({node, ...props}) => <h1 style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '24px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '12px' }} {...props} />,
              h2: ({node, ...props}) => <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }} {...props} />,
              h3: ({node, ...props}) => <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginTop: '24px', marginBottom: '12px' }} {...props} />,
              p: ({node, ...props}) => <p style={{ marginBottom: '16px', color: 'var(--text-secondary)' }} {...props} />,
              ul: ({node, ...props}) => <ul style={{ marginBottom: '16px', paddingLeft: '24px', color: 'var(--text-secondary)' }} {...props} />,
              ol: ({node, ...props}) => <ol style={{ marginBottom: '16px', paddingLeft: '24px', color: 'var(--text-secondary)' }} {...props} />,
              li: ({node, ...props}) => <li style={{ marginBottom: '8px' }} {...props} />,
              strong: ({node, ...props}) => <strong style={{ color: 'var(--text-primary)', fontWeight: 'bold' }} {...props} />,
              a: ({node, ...props}) => <a style={{ color: 'var(--accent-color)', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer" {...props} />,
              hr: ({node, ...props}) => <hr style={{ border: 'none', borderTop: '1px solid var(--glass-border)', margin: '32px 0' }} {...props} />,
              blockquote: ({node, ...props}) => <blockquote style={{ borderLeft: '4px solid var(--accent-color)', paddingLeft: '16px', margin: '24px 0', color: 'var(--text-muted)', fontStyle: 'italic', background: 'rgba(0,0,0,0.2)', padding: '16px' }} {...props} />
            }}
          >
            {userGuideMd}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Guide;

import React from 'react';
import { useI18n } from '../../contexts/I18nContext';
import { Mail } from 'lucide-react';

const ContactUs = () => {
  const { t } = useI18n();

  return (
    <div className="animate-fade-in" style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          width: '64px',
          height: '64px',
          borderRadius: '16px',
          background: 'rgba(0, 240, 255, 0.1)',
          color: 'var(--accent-color)',
          marginBottom: '24px'
        }}>
          <Mail size={32} />
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
          {t('聯絡我們')}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          {t('我們隨時準備好聆聽您的聲音')}
        </p>
      </header>

      <section className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', lineHeight: '1.8', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px' }}>
          {t('無論您是遇到了技術問題、有新的功能建議，或是希望與我們進行商務合作，我們都非常歡迎您的來信。')}
        </p>

        <div style={{ 
          marginTop: '20px',
          padding: '24px 40px', 
          background: 'var(--panel-bg-light)', 
          border: '1px solid var(--glass-border)', 
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px'
        }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{t('官方客服信箱')}</span>
          <a 
            href="mailto:infomoku@gmail.com" 
            style={{ 
              fontSize: '1.5rem', 
              color: 'var(--accent-color)', 
              fontWeight: '600',
              textDecoration: 'none',
              letterSpacing: '1px'
            }}
          >
            infomoku@gmail.com
          </a>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '16px' }}>
          {t('一般情況下，我們的團隊會在 1-3 個工作天內回覆您的來信。謝謝您的支持！')}
        </p>
      </section>
    </div>
  );
};

export default ContactUs;

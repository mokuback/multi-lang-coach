import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../contexts/I18nContext';

const Footer = () => {
  const { t } = useI18n();
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer style={{
      marginTop: '60px',
      padding: '40px 20px',
      borderTop: '1px solid var(--glass-border)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      color: 'var(--text-muted)'
    }}>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button 
          onClick={() => navigate('/about')}
          style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.9rem', transition: 'color 0.2s' }}
          onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}
        >
          {t('關於我們')}
        </button>
        <button 
          onClick={() => navigate('/privacy')}
          style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.9rem', transition: 'color 0.2s' }}
          onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}
        >
          {t('隱私權政策')}
        </button>
        <button 
          onClick={() => navigate('/contact')}
          style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.9rem', transition: 'color 0.2s' }}
          onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-secondary)'}
        >
          {t('聯絡我們')}
        </button>
      </div>
      <p style={{ fontSize: '0.85rem' }}>
        &copy; {year} Multi-Lang Coach. {t('版權所有')}
      </p>
    </footer>
  );
};

export default Footer;

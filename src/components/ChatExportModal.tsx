import React from 'react';
import { createPortal } from 'react-dom';
import { Loader2, X, Wand2, Download } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';

interface Props {
  onClose: () => void;
  onExportWithAI: () => void;
  onExportRaw: () => void;
  isExporting: boolean;
}

const ChatExportModal = ({ onClose, onExportWithAI, onExportRaw, isExporting }: Props) => {
  const { t } = useI18n();

  return createPortal(
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.85)', zIndex: 9999,
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="glass-panel animate-slide-in" style={{
        maxWidth: '400px', width: '90%', padding: '30px',
        textAlign: 'center', borderRadius: '24px',
        border: '1px solid var(--glass-border)',
        boxShadow: '0 0 40px rgba(0, 0, 0, 0.5)'
      }}>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
          {t('匯出對話紀錄')}
        </h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem', lineHeight: '1.5' }}>
          {t('您可以直接匯出對話紀錄，或是讓 AI 先針對您整場的表現進行總評估，再一併匯出成 PDF。')}
        </p>

        {isExporting ? (
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <Loader2 size={36} className="text-accent" style={{ animation: 'spin 2s linear infinite' }} />
            <span className="text-accent" style={{ fontWeight: '500' }}>{t('AI 正在仔細分析您的對話表現，請稍候...')}</span>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button
              className="glass-button"
              onClick={onExportWithAI}
              style={{ width: '100%', padding: '12px', fontSize: '1.05rem', fontWeight: 'bold', border: '1px solid var(--accent-color)', color: 'var(--accent-color)' }}
            >
              <Wand2 size={18} /> {t('匯出並請 AI 解析')}
            </button>
            <button
              className="glass-button"
              onClick={onExportRaw}
              style={{ width: '100%', padding: '12px', fontSize: '1.05rem' }}
            >
              <Download size={18} /> {t('僅匯出對話紀錄')}
            </button>
            <button
              className="glass-button"
              onClick={onClose}
              style={{ width: '100%', padding: '12px', fontSize: '1.05rem', marginTop: '8px', background: 'var(--panel-bg-light)' }}
            >
              {t('取消')}
            </button>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default ChatExportModal;

import React from 'react';
import { useI18n } from '../../contexts/I18nContext';
import { ShieldCheck } from 'lucide-react';

const PrivacyPolicy = () => {
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
          <ShieldCheck size={32} />
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
          {t('隱私權政策')}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          {t('保護您的個人資料與隱私是我們的首要任務')}
        </p>
      </header>

      <section className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px', lineHeight: '1.8' }}>
        <div>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--text-primary)' }}>1. {t('資料收集與使用')}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            {t('我們僅收集您在使用本服務時所需的最低限度資料。您的語音輸入與對話紀錄僅用於提供即時的 AI 語言糾正與反饋服務，我們不會將這些個人對話紀錄出售給任何第三方。相關的學習進度（如單字本、句型紀錄）皆會安全地儲存，以確保您可以跨裝置延續學習體驗。')}
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--text-primary)' }}>2. Cookie {t('與追蹤技術')}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            {t('本網站使用 Cookies 及類似追蹤技術來維持您的登入狀態、記住您的偏好設定（例如深淺色主題、學習語言），並協助我們分析網站流量以改善使用者體驗。您可以隨時透過瀏覽器設定拒絕 Cookies，但這可能會導致網站部分功能無法正常運作。')}
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--text-primary)' }}>3. Google AdSense {t('廣告聲明')}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            {t('本網站為了維持營運，可能有使用 Google AdSense 來放送廣告。Google 及第三方廠商會使用 Cookies 來根據您過去造訪本網站或其他網站的紀錄放送關聯性廣告。使用者可前往 Google 的「廣告設定」停用個人化廣告。我們遵守 Google AdSense 的相關政策，確保不會透過不當手段點擊廣告或提供違規內容。')}
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--text-primary)' }}>4. {t('政策更新')}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>
            {t('我們保留隨時修改本隱私權政策的權利。重大變更將會透過網站公告通知使用者。繼續使用本服務即代表您同意最新版本的隱私權政策。')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

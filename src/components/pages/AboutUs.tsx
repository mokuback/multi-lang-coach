import React from 'react';
import { useI18n } from '../../contexts/I18nContext';
import { Users, Sparkles, Globe } from 'lucide-react';

const AboutUs = () => {
  const { t } = useI18n();

  return (
    <div className="animate-fade-in" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
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
          <Users size={32} />
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
          {t('關於我們')}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          {t('一群喜愛外語學習的科技人')}
        </p>
      </header>

      <section className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '32px', lineHeight: '1.8' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Globe className="text-accent" size={24} />
            {t('我們的初衷：打破傳統語言學習的框架')}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '12px' }}>
            {t('學習一門外語，最困難的往往不是背誦成千上萬的單字，或是熟記繁雜的文法規則，而是缺乏一個「真實、沉浸且無壓力的對話環境」。')}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            {t('我們是一群熱愛語言學習與鑽研最新科技的開發者。在過去的學習經驗中，我們深刻體會到，亞洲學生普遍在讀寫方面表現優異，但在需要開口進行口說交流時，卻經常面臨「害怕犯錯」、「找不到對象練習」或「高昂的家教費用」等痛點。這些阻礙使得許多人停留在「啞巴外語」的階段，無法將多年所學轉化為實際的溝通能力。因此，Multi-Lang Coach 應運而生。')}
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles className="text-accent" size={24} />
            {t('AI 驅動的學習革命：專屬您的 24 小時教練')}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '12px' }}>
            {t('透過最新一代的生成式 AI 技術與大數據語料庫，我們打造了這個 24 小時隨時待命的智能語音教練。它不僅能模擬從「高階商務談判」、「學術論文研討」到「日常出遊點餐」的各種真實情境，更能以極高的耐心與專業度，即時聽寫並糾正您的發音與文法。')}
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            {t('在傳統的家教課程中，學生往往會因為頻繁被糾正而感到氣餒；但在這裡，您面對的是一位不會帶有批判眼光、永遠耐心指導的虛擬教練。它可以根據您的職務需求（例如：IT 工程師、業務銷售員）客製化專屬的對話劇本，並提供最道地、最符合當地文化習慣的用詞建議，讓您的學習效率成倍提升。')}
          </p>
        </div>

        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Users className="text-accent" size={24} />
            {t('未來的願景：讓語言不再是溝通的障礙')}
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            {t('語言是探索世界、理解不同文化的橋樑。我們的團隊致力於持續優化 AI 語言模型的推論能力，並不斷擴充學習情境庫。我們希望透過科技的力量，打破地域與資源的限制，讓每個人—無論身處何地、無論學習預算多少—都能擁有無壓力、高互動性的沉浸式語言練習體驗。我們相信，當您有自信開口說的那一刻，整個世界的機會都將為您敞開。')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

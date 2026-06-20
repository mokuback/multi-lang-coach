import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../contexts/I18nContext';
import { Globe, Mic, Bot, Sparkles, BookOpen, LayoutDashboard, MessageSquare, BookMarked, FileText, ArrowRight } from 'lucide-react';

const Home = () => {
  const { t } = useI18n();
  const navigate = useNavigate();

  const features = [
    {
      id: 'curriculum',
      title: t('基礎訓練'),
      desc: t('按部就班學習基本單字與核心句型，穩固您的外語基礎。'),
      icon: BookOpen,
      path: '/curriculum',
      color: 'var(--accent-color)'
    },
    {
      id: 'dashboard',
      title: t('每日任務'),
      desc: t('完成每天的專屬任務，追蹤您的學習進度與經驗值。'),
      icon: LayoutDashboard,
      path: '/dashboard',
      color: '#2ed573'
    },
    {
      id: 'chat',
      title: t('對話練習'),
      desc: t('與 AI 教練進行即時語音對話，體驗最真實的沉浸式學習。'),
      icon: MessageSquare,
      path: '/chat',
      color: '#1e90ff'
    },
    {
      id: 'patterns',
      title: t('常用句型'),
      desc: t('收錄各類情境的實用句型庫，隨時查閱與學習。'),
      icon: BookMarked,
      path: '/patterns',
      color: '#ffa502'
    },
    {
      id: 'notebooks',
      title: t('專屬筆記'),
      desc: t('管理您的生詞與句型筆記，AI 會針對這些內容為您特訓。'),
      icon: FileText,
      path: '/notebook',
      color: 'var(--magic-color, #d946ef)'
    }
  ];

  return (
    <div className="animate-fade-in custom-scrollbar" style={{ padding: '20px 0', maxWidth: '1000px', margin: '0 auto', height: '100%', overflowY: 'auto' }}>
      
      {/* 上半部：圖文說明區 (Hero Section) */}
      <section style={{
        textAlign: 'center',
        padding: '60px 20px',
        marginBottom: '40px',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, transparent 100%)',
        borderRadius: '24px',
        border: '1px solid var(--glass-border)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '24px' }}>
          <div className="glass-panel" style={{ padding: '16px', borderRadius: '50%', background: 'rgba(0,240,255,0.1)' }}>
            <Globe size={40} color="var(--accent-color)" />
          </div>
          <div className="glass-panel" style={{ padding: '16px', borderRadius: '50%', background: 'rgba(217,70,239,0.1)' }}>
            <Bot size={40} color="var(--magic-color, #d946ef)" />
          </div>
          <div className="glass-panel" style={{ padding: '16px', borderRadius: '50%', background: 'rgba(46,213,115,0.1)' }}>
            <Mic size={40} color="#2ed573" />
          </div>
        </div>
        
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          Multi-Lang Coach
          <Sparkles className="spin-slow" size={32} color="#ffa502" />
        </h1>
        
        <h2 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: '500', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
          {t('由大數據與先進 AI 驅動的智能外語教練。')}
          <br/>
          {t('透過沉浸式語音對話、即時糾錯與客製化特訓，讓您自信開口說外語。')}
        </h2>
      </section>

      {/* 下半部：功能導航卡片區 (Feature Grid) */}
      <section>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--text-primary)', paddingLeft: '8px', borderLeft: '4px solid var(--accent-color)' }}>
          {t('開始您的學習之旅')}
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          paddingBottom: '40px'
        }}>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.id}
                className="glass-panel hover-card"
                onClick={() => navigate(feature.path)}
                style={{
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  borderTop: `2px solid ${feature.color}`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = `0 10px 24px ${feature.color}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ padding: '10px', borderRadius: '12px', background: `${feature.color}15`, color: feature.color }}>
                      <Icon size={24} />
                    </div>
                    <h4 style={{ fontSize: '1.25rem', fontWeight: '600', margin: 0 }}>{feature.title}</h4>
                  </div>
                  <ArrowRight size={20} color="var(--text-muted)" />
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0, flex: 1 }}>
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};

export default Home;

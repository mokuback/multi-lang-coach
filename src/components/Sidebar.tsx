import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, MessageSquare, BookOpen, Settings, BookMarked, FileText, Palette, GraduationCap, Menu, X } from 'lucide-react';
import { categoryData } from '../data/categoryData';
import { useI18n } from '../contexts/I18nContext';
import { useSettingsStore } from '../store/useSettingsStore';

const Sidebar = () => {
  const { t } = useI18n();
  const uiTheme = useSettingsStore(s => s.uiTheme);
  const setUiTheme = useSettingsStore(s => s.setUiTheme);
  const userRole = useSettingsStore(s => s.userRole);
  const userLevel = useSettingsStore(s => s.userLevel);
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // 當路由改變時，自動關閉手機版選單
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // 加入手機版側滑手勢 (Swipe Gestures)
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e: TouchEvent) => {
      touchEndX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      if (!touchStartX || !touchEndX) return;
      
      const distance = touchStartX - touchEndX;
      const isLeftSwipe = distance > 50;
      const isRightSwipe = distance < -50;
      
      // 向左滑動關閉選單
      if (isLeftSwipe) {
        setIsMobileOpen(false);
      }
      
      // 從螢幕最左邊界向右滑動開啟選單 (避免與中間內容的操作衝突)
      if (isRightSwipe && touchStartX < 40) {
        setIsMobileOpen(true);
      }
      
      touchStartX = 0;
      touchEndX = 0;
    };

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  // Determine active tab from URL path
  const getActiveTabFromPath = (path: string) => {
    if (path === '/') return 'guide';
    return path.split('/')[1] || 'guide';
  };

  const activeTab = getActiveTabFromPath(location.pathname);

  const levelLabel = categoryData.levels.find(l => l.id === userLevel)?.label || userLevel;
  const roleLabel = Object.values(categoryData.roles).flat().find(r => r.id === userRole)?.label || userRole;

  const navItems = [
    { id: 'guide', label: t('使用說明'), icon: BookOpen, path: '/guide' },
    { id: 'curriculum', label: t('基礎訓練'), icon: GraduationCap, path: '/curriculum' },
    { id: 'dashboard', label: t('每日任務'), icon: LayoutDashboard, path: '/dashboard' },
    { id: 'chat', label: t('對話練習'), icon: MessageSquare, path: '/chat' },
    { id: 'patterns', label: t('常用句型'), icon: BookMarked, path: '/patterns' },
    { id: 'notebook', label: t('生詞筆記'), icon: BookOpen, path: '/notebook', isPersonal: true },
    { id: 'pattern-notebook', label: t('句型筆記'), icon: FileText, path: '/pattern-notebook', isPersonal: true },
    { id: 'settings', label: t('設定與 API'), icon: Settings, path: '/settings', isSystem: true }
  ];

  const cycleTheme = () => {
    if (uiTheme === 'glass') setUiTheme('saas-dark');
    else if (uiTheme === 'saas-dark') setUiTheme('saas-light');
    else setUiTheme('glass');
  };

  return (
    <>
      {/* 手機版頂部導覽列 */}
      <div className="mobile-topbar glass-panel">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
          >
            {isMobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '32px', height: '32px', borderRadius: '8px',
              background: 'linear-gradient(135deg, var(--accent-color), var(--magic-color, #d946ef))',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="22"></line>
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0, lineHeight: '1.2' }}>
                Multi-Lang
              </h1>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', letterSpacing: '0.5px' }}>
                {t('大數據語音教練')}
              </span>
            </div>
          </div>
        </div>

        <button 
          onClick={cycleTheme}
          title={t("切換介面風格")}
          style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Palette size={20} />
        </button>
      </div>

      {/* 手機版半透明遮罩 */}
      {isMobileOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* 側邊欄本體 */}
      <aside className={`glass-panel sidebar-container ${isMobileOpen ? 'open' : ''}`} style={{ 
        width: '260px', 
        margin: '16px', 
        display: 'flex', 
        flexDirection: 'column',
        padding: '24px 16px',
        position: 'relative',
        height: 'calc(100vh - 32px)', // 確保側邊欄不會超過螢幕高度
        overflow: 'hidden', // 防止整個側邊欄產生外部捲動
        flexShrink: 0
      }}>
        {/* 手機版專用關閉按鈕 */}
        <button 
          className="mobile-close-btn"
          onClick={() => setIsMobileOpen(false)}
        >
          <X size={20} />
        </button>

        <div className="sidebar-header" style={{ marginBottom: '40px', padding: '0 10px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--accent-color), var(--magic-color, #d946ef))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="22"></line>
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', margin: 0, lineHeight: '1.2' }}>
                Multi-Lang
              </h1>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', letterSpacing: '0.5px' }}>
                {t('大數據語音教練')}
              </span>
            </div>
          </div>
        </div>
        <button 
          className="desktop-theme-toggle"
          onClick={cycleTheme}
          title={t("切換介面風格")}
          style={{
            background: 'var(--panel-bg-light)',
            border: '1px solid var(--glass-border)',
            color: 'var(--text-secondary)',
            padding: '8px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--text-primary)';
            e.currentTarget.style.background = 'var(--button-bg-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.background = 'var(--panel-bg-light)';
          }}
        >
          <Palette size={16} />
        </button>
      </div>

      <nav className="sidebar-nav custom-scrollbar" style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '8px',
        overflowY: 'auto', // 允許選單內容獨立捲動
        paddingRight: '4px', // 避免捲軸擋住內容
        marginBottom: '16px'
      }}>
        {navItems.map((item, index) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          const isPersonal = item.isPersonal;
          const isSystem = item.isSystem;
          
          return (
            <React.Fragment key={item.id}>
              {(isPersonal && !navItems[index - 1]?.isPersonal) || (isSystem && !navItems[index - 1]?.isSystem) ? (
                <div style={{ height: '1px', background: 'var(--glass-border)', margin: '8px 4px' }} />
              ) : null}
              <button
                onClick={() => navigate(item.path)}
                className={`glass-button ${isActive ? 'active' : ''}`}
                style={{
                  justifyContent: 'flex-start',
                  padding: '12px 16px',
                  border: isActive 
                    ? (isPersonal ? '1px solid var(--magic-color, #d946ef)' : (isSystem ? '1px solid var(--text-muted)' : '1px solid var(--accent-color)')) 
                    : '1px solid transparent',
                  borderRadius: '8px',
                  background: isActive 
                    ? (isPersonal ? 'rgba(217, 70, 239, 0.1)' : (isSystem ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 240, 255, 0.1)')) 
                    : 'transparent',
                  color: isActive 
                    ? (isPersonal ? 'var(--magic-color, #d946ef)' : (isSystem ? 'var(--text-primary)' : 'var(--accent-color)')) 
                    : (isPersonal ? 'var(--magic-color, #d946ef)' : (isSystem ? 'var(--text-muted)' : 'var(--text-secondary)')),
                  opacity: (!isActive && isPersonal) ? 0.85 : 1
                }}
              >
                <Icon 
                  size={20} 
                  strokeWidth={isActive ? 2.5 : 2} 
                  style={{ 
                    color: !isActive && isPersonal ? 'var(--magic-color, #d946ef)' : undefined 
                  }} 
                />
                <span style={{ fontWeight: isActive ? 600 : 500 }}>{item.label}</span>
              </button>
            </React.Fragment>
          );
        })}
      </nav>

      <div className="sidebar-footer" style={{ padding: '0 10px', marginTop: 'auto' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
          {t('程度')}：{t(levelLabel)}<br/>
          {t('主題')}：{t(roleLabel)}
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '8px', 
          fontSize: '0.75rem', 
          color: 'var(--text-muted)',
          borderTop: '1px solid var(--glass-border)',
          paddingTop: '16px'
        }}>
          <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--text-primary)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-muted)'} onClick={() => navigate('/about')}>{t('關於我們')}</span> | 
          <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--text-primary)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-muted)'} onClick={() => navigate('/privacy')}>{t('隱私權政策')}</span> | 
          <span style={{ cursor: 'pointer', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.target as HTMLElement).style.color = 'var(--text-primary)'} onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-muted)'} onClick={() => navigate('/contact')}>{t('聯絡我們')}</span>
        </div>
      </div>
    </aside>
  </>
  );
};

export default Sidebar;

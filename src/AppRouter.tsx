import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ChatWrapper from './components/ChatWrapper';
import Notebook from './components/Notebook';
import PatternNotebook from './components/PatternNotebook';
import Patterns from './components/Patterns';
import Guide from './components/Guide';
import Curriculum from './components/Curriculum';
import Settings from './components/Settings';
import AboutUs from './components/pages/AboutUs';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import ContactUs from './components/pages/ContactUs';
import { I18nProvider, useI18n } from './contexts/I18nContext';
import { useSettingsStore } from './store/useSettingsStore';
import './App.css';
import './index.css';

const TAB_STORAGE_KEY = 'APP_ACTIVE_TAB';

/** Tracks route changes and persists the last visited page */
function RouteTracker() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname !== '/' && location.pathname !== '/chat') {
      localStorage.setItem(TAB_STORAGE_KEY, location.pathname.replace(/^\//, ''));
    }
  }, [location]);

  return null;
}

/** Performs the initial redirect after mount (avoiding render-phase navigation conflicts) */
function InitialRedirect() {
  const navigate = useNavigate();
  const hasSeenWelcome = useSettingsStore(s => s.hasSeenWelcome);
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    done.current = true;

    const lastRoute = localStorage.getItem(TAB_STORAGE_KEY);
    const target = lastRoute ? `/${lastRoute.replace(/^\//, '')}` : '/guide';
    
    // Only redirect if we're at the root
    if (window.location.pathname === '/' || window.location.pathname === '') {
      navigate(target, { replace: true });
    }
  }, [navigate]);

  return null;
}

function WelcomeModal() {
  const { t } = useI18n();
  const navigate = useNavigate();
  const setHasSeenWelcome = useSettingsStore(s => s.setHasSeenWelcome);

  const handleDismiss = () => {
    setHasSeenWelcome(true);
    navigate('/guide', { replace: true });
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.85)', zIndex: 9999,
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="glass-panel animate-slide-in" style={{
        maxWidth: '500px', width: '90%', padding: '40px',
        textAlign: 'center', borderRadius: '24px',
        border: '1px solid var(--accent-color)',
        boxShadow: '0 0 40px rgba(0, 240, 255, 0.2)'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
          🎉 {t('歡迎來到 Multi-Lang Coach！')}
        </h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '32px' }}>
          {t('這是一個由大數據驅動的智能外語對話教練。為了讓您體驗完整的 AI 糾錯與推薦功能，我們強烈建議您花')} <strong className="text-accent">1 {t('分鐘')}</strong>{t('閱讀背景的這份使用說明，並免費取得專屬的 API 金鑰！')}
        </p>
        <button
          className="glass-button active"
          onClick={handleDismiss}
          style={{ width: '100%', padding: '16px', fontSize: '1.2rem', fontWeight: 'bold' }}
        >
          {t('好的，帶我去看說明書！')}
        </button>
      </div>
    </div>
  );
}

function AppLayout() {
  const hasSeenWelcome = useSettingsStore(s => s.hasSeenWelcome);

  return (
    <div className="app-container">
      {!hasSeenWelcome && <WelcomeModal />}
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={null} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat" element={<ChatWrapper />} />
          <Route path="/notebook" element={<Notebook />} />
          <Route path="/pattern-notebook" element={<PatternNotebook />} />
          <Route path="/patterns" element={<Patterns />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </main>
    </div>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <>
          <RouteTracker />
          <InitialRedirect />
          <AppLayout />
        </>
      </I18nProvider>
    </BrowserRouter>
  );
}

export default AppRouter;

/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

// Eagerly preload all locale modules so dict is available synchronously on first render
const allLocales = import.meta.glob('../locales/*.json', { eager: true, import: 'default' });

function loadLocaleSync(lang) {
  const key = `../locales/${lang}.json`;
  const mod = allLocales[key];
  return (mod && typeof mod === 'object') ? mod : {};
}

interface I18nContextType {
  uiLang: string;
  setUiLang: (lang: string) => void;
  t: (text: string) => string;
  getLocalizedContent: (contentObj: any) => string;
}

const I18nContext = createContext<I18nContextType>({
  uiLang: 'en',
  setUiLang: () => {},
  t: (text: string) => text,
  getLocalizedContent: (contentObj: any) => contentObj,
});

const UI_LANG_STORAGE_KEY = 'APP_UI_LANG';

export const I18nProvider = ({ children }) => {
  const [uiLang, setUiLangState] = useState(() => {
    const stored = localStorage.getItem(UI_LANG_STORAGE_KEY);
    if (stored) return stored;

    if (typeof navigator !== 'undefined' && navigator.language) {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('zh')) {
        if (browserLang.includes('cn') || browserLang.includes('sg') || browserLang.includes('hans')) {
          return 'zh-CN';
        }
        return 'zh-TW';
      }
      if (browserLang.includes('ja')) return 'ja';
      if (browserLang.includes('ko')) return 'ko';
      if (browserLang.includes('es')) return 'es';
      if (browserLang.includes('fr')) return 'fr';
      if (browserLang.includes('de')) return 'de';
    }
    
    return 'en';
  });

  const [activeLang, setActiveLang] = useState(uiLang);
  const [dict, setDict] = useState(() => loadLocaleSync(uiLang));
  const [enDict, setEnDict] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const langRef = useRef(uiLang);
  const versionRef = useRef(0);

  // Locale switch: synchronous lookup from eager-loaded modules
  useEffect(() => {
    const myVersion = ++versionRef.current;
    langRef.current = uiLang;

    if (uiLang !== activeLang) {
      setIsLoading(true);
    }

    const timer = setTimeout(() => {
      if (versionRef.current !== myVersion) return;
      if (langRef.current !== uiLang) return;

      const key = `../locales/${uiLang}.json`;
      const loadedDict = allLocales[key];

      if (loadedDict && typeof loadedDict === 'object') {
        setDict(loadedDict);
      } else {
        console.error(`Locale ${uiLang} not found in eager-loaded modules`);
      }

      // Load enDict if needed (for fallback translations)
      if (uiLang !== 'en' && uiLang !== 'zh-TW' && uiLang !== 'zh-CN' && Object.keys(enDict).length === 0) {
        const enKey = '../locales/en.json';
        const loadedEnDict = allLocales[enKey];
        if (loadedEnDict && typeof loadedEnDict === 'object') {
          setEnDict(loadedEnDict);
        }
      }

      setActiveLang(uiLang);
      localStorage.setItem(UI_LANG_STORAGE_KEY, uiLang);
      setIsLoading(false);
    }, 0);

    return () => {
      clearTimeout(timer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uiLang]);

  const setUiLang = (lang) => {
    if (lang !== uiLang) {
      setUiLangState(lang);
    }
  };

  const t = (text) => {
    if (typeof text !== 'string' || !text) return text;

    if (dict[text]) {
      return dict[text];
    }
    if (activeLang !== 'en' && enDict[text]) {
      return enDict[text];
    }

    return text;
  };

  const getLocalizedContent = (contentObj) => {
    if (!contentObj) return '';
    if (typeof contentObj === 'string') return contentObj;
    if (contentObj[activeLang]) return contentObj[activeLang];
    
    const prefix = activeLang.split('-')[0];
    if (contentObj[prefix]) return contentObj[prefix];
    
    if (activeLang === 'zh-CN' && contentObj['zh-CN']) {
      return contentObj['zh-CN'];
    }
    if (activeLang === 'zh-CN' && contentObj['zh-TW']) {
      return contentObj['zh-TW'];
    }
    
    if (contentObj['en']) return contentObj['en'];
    
    return Object.values(contentObj)[0] || '';
  };

  return (
    <I18nContext.Provider value={{ uiLang: activeLang, setUiLang, t, getLocalizedContent }}>
      {isLoading && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.5)', zIndex: 99999,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          backdropFilter: 'blur(5px)', color: '#fff', fontSize: '1.2rem',
          flexDirection: 'column', gap: '16px'
        }}>
          <style>
            {`
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            `}
          </style>
          <div style={{ 
            width: '40px', height: '40px', 
            border: '4px solid rgba(255,255,255,0.3)', 
            borderTopColor: '#fff', borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }} />
          <p>Switching language...</p>
        </div>
      )}
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = (): I18nContextType => useContext(I18nContext);

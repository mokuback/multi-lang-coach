/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, useMemo, useRef } from 'react';

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
  const [dict, setDict] = useState({});
  const [enDict, setEnDict] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const loadTranslations = async () => {
      // 只有在真的改變語系才需要顯示 loading
      if (uiLang !== activeLang) {
        setIsLoading(true);
      }
      try {
        let loadedDict = {};
        if (uiLang !== 'zh-TW' && uiLang !== 'zh-CN') {
          const module = await import(`../locales/${uiLang}.json`);
          loadedDict = module.default || module;
        }
        
        let loadedEnDict = enDict;
        if (uiLang !== 'en' && uiLang !== 'zh-TW' && uiLang !== 'zh-CN' && Object.keys(enDict).length === 0) {
          const enModule = await import(`../locales/en.json`);
          loadedEnDict = enModule.default || enModule;
          if (isMounted) setEnDict(loadedEnDict);
        }

        if (isMounted) {
          setDict(loadedDict);
          setActiveLang(uiLang);
          localStorage.setItem(UI_LANG_STORAGE_KEY, uiLang);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(`Failed to load translations for ${uiLang}:`, error);
        if (isMounted) {
          setActiveLang(uiLang);
          localStorage.setItem(UI_LANG_STORAGE_KEY, uiLang);
          setIsLoading(false);
        }
      }
    };

    loadTranslations();
    
    return () => {
      isMounted = false;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uiLang]);

  const setUiLang = (lang) => {
    if (lang !== uiLang) {
      setUiLangState(lang);
    }
  };

  const [converter, setConverter] = useState<((text: string) => string) | null>(null);
  const converterLoadedRef = useRef(false);

  useEffect(() => {
    if (activeLang === 'zh-CN' && !converterLoadedRef.current) {
      converterLoadedRef.current = true;
      import('opencc-js').then((OpenCC) => {
        try {
          setConverter(() => OpenCC.Converter({ from: 'tw', to: 'cn' }));
        } catch (e) {
          console.error("OpenCC initialization failed:", e);
          setConverter(() => (text: string) => text);
        }
      }).catch((e) => {
        console.error("OpenCC load failed:", e);
        setConverter(() => (text: string) => text);
      });
    } else if (activeLang !== 'zh-CN') {
      setConverter(null);
      converterLoadedRef.current = false;
    }
  }, [activeLang]);

  const t = (text) => {
    if (typeof text !== 'string' || !text) return text;
    
    if (activeLang === 'zh-CN' && converter) {
      return converter(text);
    }
    
    if (activeLang !== 'zh-TW' && activeLang !== 'zh-CN') {
      if (dict[text]) {
        return dict[text];
      }
      if (activeLang !== 'en' && enDict[text]) {
        return enDict[text];
      }
    }
    
    return text;
  };

  const getLocalizedContent = (contentObj) => {
    if (!contentObj) return '';
    if (typeof contentObj === 'string') return contentObj;
    if (contentObj[activeLang]) return contentObj[activeLang];
    
    const prefix = activeLang.split('-')[0];
    if (contentObj[prefix]) return contentObj[prefix];
    
    if (activeLang === 'zh-CN' && contentObj['zh-TW'] && converter) {
      return converter(contentObj['zh-TW']);
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

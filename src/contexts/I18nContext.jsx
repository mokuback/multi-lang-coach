import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import * as OpenCC from 'opencc-js';

const I18nContext = createContext();

const UI_LANG_STORAGE_KEY = 'APP_UI_LANG';

export const I18nProvider = ({ children }) => {
  const [uiLang, setUiLang] = useState(() => {
    return localStorage.getItem(UI_LANG_STORAGE_KEY) || 'zh-TW';
  });

  useEffect(() => {
    localStorage.setItem(UI_LANG_STORAGE_KEY, uiLang);
  }, [uiLang]);

  const converter = useMemo(() => {
    if (uiLang === 'zh-CN') {
      try {
        return OpenCC.Converter({ from: 'tw', to: 'cn' });
      } catch (e) {
        console.error("OpenCC initialization failed:", e);
        return (text) => text;
      }
    }
    return null;
  }, [uiLang]);

  const t = (text) => {
    if (typeof text !== 'string' || !text) return text;
    if (uiLang === 'zh-CN' && converter) {
      return converter(text);
    }
    return text;
  };

  return (
    <I18nContext.Provider value={{ uiLang, setUiLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => useContext(I18nContext);

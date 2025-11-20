import React, { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext(null);

const LANGS = [
  { id: 'fa', label: 'FA', name: 'فارسی', dir: 'rtl', locale: 'fa-IR' },
  { id: 'en', label: 'EN', name: 'English', dir: 'ltr', locale: 'en-US' },
];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-lang') || 'fa';
    }
    return 'fa';
  });

  useEffect(() => {
    const current = LANGS.find((l) => l.id === lang) || LANGS[0];
    const root = document.documentElement;

    root.lang = current.locale;
    root.dir = current.dir;

    localStorage.setItem('portfolio-lang', lang);
  }, [lang]);

  const value = {
    lang,
    setLang,
    languages: LANGS,
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider');
  return ctx;
}

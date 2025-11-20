import React, { createContext, useContext, useEffect, useState } from "react";
import fa from "../i18n/fa";
import en from "../i18n/en";

const langs = { fa, en };

const LanguageContext = createContext({
  langId: "en",
  lang: en,
  switchLanguage: () => {},
});

export const LanguageProvider = ({ children }) => {
  const getInitialLang = () => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem("lang");
    if (saved && (saved === "fa" || saved === "en")) return saved;
    return "en";
  };

  const [langId, setLangId] = useState(getInitialLang);

  const lang = langs[langId] || en;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;

    root.setAttribute("dir", lang.direction || "ltr");
    root.setAttribute("lang", lang.id || "en");

    window.localStorage.setItem("lang", langId);
  }, [langId, lang]);

  const value = {
    langId,
    lang,
    switchLanguage: (id) => {
      if (!id || !langs[id]) return;
      setLangId(id);
    },
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

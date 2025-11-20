import React from 'react';
import { useLang } from '../../LanguageContext.jsx';

export default function LanguageSwitcher() {
  const { lang, setLang, languages } = useLang();

  return (
    <div className="flex items-center gap-1 rounded-full bg-surface/60 border border-border/60 px-1 py-1 backdrop-blur">
      {languages.map((l) => (
        <button
          key={l.id}
          onClick={() => setLang(l.id)}
          className={`px-2.5 py-1 text-[0.7rem] rounded-full transition-all ${
            l.id === lang
              ? 'bg-accent-soft/90 text-bg shadow-soft'
              : 'text-muted hover:text-text hover:bg-surface/80'
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}

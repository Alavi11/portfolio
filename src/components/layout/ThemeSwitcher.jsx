import React from 'react';
import { useTheme } from '../../ThemeContext.jsx';

export default function ThemeSwitcher() {
  const { themeId, themes, setThemeId } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted/80 hidden sm:inline">Theme</span>
      <div className="flex gap-1 rounded-full bg-surface/60 border border-border/60 px-1 py-1 backdrop-blur">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setThemeId(t.id)}
            className={`relative px-3 py-1.5 text-xs sm:text-[0.7rem] rounded-full transition-all duration-300
             ${
               t.id === themeId
                 ? 'bg-accent-soft/90 text-bg shadow-soft shadow-accent-soft/30'
                 : 'text-muted hover:text-text hover:bg-surface/80'
             }`}
          >
            {t.name}
          </button>
        ))}
      </div>
    </div>
  );
}

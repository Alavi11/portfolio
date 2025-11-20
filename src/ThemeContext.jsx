import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

const THEMES = [
  { id: 'default', name: 'Neon Night', className: '' },
  { id: 'sunset', name: 'Sunset Glow', className: 'theme-sunset' },
  { id: 'ocean', name: 'Deep Ocean', className: 'theme-ocean' },
  { id: 'forest', name: 'Digital Forest', className: 'theme-forest' },
];

export function ThemeProvider({ children }) {
  const [themeId, setThemeId] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-theme') || 'default';
    }
    return 'default';
  });

  useEffect(() => {
    const root = document.documentElement;
    THEMES.forEach((t) => {
      if (t.className) root.classList.remove(t.className);
    });
    const current = THEMES.find((t) => t.id === themeId) || THEMES[0];
    if (current.className) {
      root.classList.add(current.className);
    }
    localStorage.setItem('portfolio-theme', themeId);
  }, [themeId]);

  const value = {
    themeId,
    themes: THEMES,
    setThemeId,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}

import React, { createContext, useContext, useEffect, useState } from "react";

const themes = [
  { id: "ocean", label: "Ocean", className: "theme-ocean" },
  { id: "purple", label: "Purple", className: "theme-purple" },
  { id: "emerald", label: "Emerald", className: "theme-emerald" },
  { id: "sunset", label: "Sunset", className: "theme-sunset" },
];

const ThemeContext = createContext({
  themeId: "sunset",
  theme: themes[0],
  themes,
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const getInitialTheme = () => {
    if (typeof window === "undefined") return "sunset";
    const saved = window.localStorage.getItem("theme");
    const exists = themes.find((t) => t.id === saved);
    return exists ? exists.id : "sunset";
  };

  const [themeId, setThemeId] = useState(getInitialTheme);
  const theme = themes.find((t) => t.id === themeId) || themes[0];

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.documentElement;

    themes.forEach((t) => root.classList.remove(t.className));
    root.classList.add(theme.className);

    window.localStorage.setItem("theme", themeId);
  }, [themeId, theme]);

  const value = {
    themeId,
    theme,
    themes,
    setTheme: (id) => {
      const exists = themes.find((t) => t.id === id);
      if (!exists) return;
      setThemeId(id);
    },
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

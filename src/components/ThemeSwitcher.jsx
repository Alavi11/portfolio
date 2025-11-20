import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";

const ThemeSwitcher = () => {
  const { themes, themeId, setTheme } = useTheme();
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);

  const current = themes.find((t) => t.id === themeId) || themes[0];

  const handleSelect = (id) => {
    setTheme(id);
    setOpen(false);
  };

  return (
    <div className="relative text-xs">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border-subtle)] bg-[color:var(--panel-soft)]/70 px-3 py-1.5 hover:bg-[color:var(--panel-soft)]/90 transition"
      >
        <span className="inline-flex w-2.5 h-2.5 rounded-full bg-[color:var(--accent)] shadow" />
        <span className="font-medium">{lang.ui?.theme || "Theme"}</span>
        <span className="text-[11px] opacity-80">{current.label}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 min-w-[160px] rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--panel)]/95 shadow-xl backdrop-blur-md z-[2000]">
          <div className="py-1">
            {themes.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => handleSelect(t.id)}
                className={`flex w-full items-center justify-between px-3 py-1.5 text-[11px] ${
                  t.id === themeId
                    ? "bg-[color:var(--accent)]/15 text-[color:var(--accent)]"
                    : "hover:bg-white/5 text-[color:var(--muted)]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex w-3 h-3 rounded-full bg-[color:var(--accent)] opacity-80" />
                  <span className="font-medium">{t.label}</span>
                </div>
                {t.id === themeId && <span>●</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;

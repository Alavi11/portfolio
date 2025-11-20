import React, { useState } from "react";
import { useLanguage } from "../hooks/useLanguage";

const LanguageSwitcher = () => {
  const { langId, lang, switchLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  const langs = [
    { id: "fa", label: "FA", name: "فارسی" },
    { id: "en", label: "EN", name: "English" },
  ];

  const current = langs.find((l) => l.id === langId) || langs[1];

  const handleSelect = (id) => {
    switchLanguage(id);
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
        <span className="font-medium">{lang.ui?.language || "Language"}</span>
        <span className="text-[11px] opacity-80">{current.label}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 min-w-[140px] rounded-xl border border-[color:var(--border-subtle)] bg-[color:var(--panel)]/95 shadow-xl backdrop-blur-md z-[2000]">
          <div className="py-1">
            {langs.map((l) => (
              <button
                key={l.id}
                type="button"
                onClick={() => handleSelect(l.id)}
                className={`flex w-full items-center justify-between px-3 py-1.5 text-[11px] ${
                  l.id === langId
                    ? "bg-[color:var(--accent)]/15 text-[color:var(--accent)]"
                    : "hover:bg-white/5 text-[color:var(--muted)]"
                }`}
              >
                <span>{l.name}</span>
                <span className="font-semibold">{l.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

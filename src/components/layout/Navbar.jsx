import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeSwitcher from './ThemeSwitcher.jsx';
import LanguageSwitcher from './LanguageSwitcher.jsx';
import { useLang } from '../../LanguageContext.jsx';
import { getT } from '../../i18n';

const fadeItem = {
  hidden: { opacity: 0, y: 10 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08 },
  }),
};

export default function Navbar() {
  const { lang } = useLang();
  const { nav } = getT(lang);
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-bg/80 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2"
        >
          <div className="h-8 w-8 rounded-2xl bg-accent/10 border border-accent-soft/50 flex items-center justify-center">
            <span className="text-accent text-lg font-semibold">N</span>
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold">{nav.name}</p>
            <p className="text-[0.7rem] text-muted">{nav.role}</p>
          </div>
        </motion.div>

        <div className="flex items-center gap-3">
          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6 text-xs">
            {nav.items.map((item, idx) => (
              <motion.button
                key={item.id}
                custom={idx}
                variants={fadeItem}
                initial="hidden"
                animate="visible"
                onClick={() => scrollTo(item.id)}
                className="relative text-muted hover:text-text transition-colors duration-200"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Desktop controls */}
          <div className="hidden lg:flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>

          {/* Mobile + tablet hamburger */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center rounded-full border border-border/70 bg-surface/80 p-2 text-muted hover:text-text hover:border-accent-soft/80 transition-all"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              {isOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M8 17h12" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile / tablet dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-border/60 bg-bg/95 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 space-y-4">
            <nav className="flex flex-col gap-2 text-sm">
              {nav.items.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="w-full text-start rounded-xl px-3 py-2 text-muted hover:text-text hover:bg-surface/80 transition-all"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <LanguageSwitcher />
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

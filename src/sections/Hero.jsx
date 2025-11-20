import React from 'react';
import { motion } from 'framer-motion';
import TechPill from '../components/common/TechPill.jsx';
import { useLang } from '../LanguageContext.jsx';
import { getT } from '../i18n';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const { lang } = useLang();
  const { hero } = getT(lang);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-20 md:pt-16">
      <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-10 md:gap-16 items-center">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-surface/70 border border-border/60 px-3 py-1 text-xs text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            {hero.badge}
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              {hero.title1}{' '}
              <span className="text-accent-soft">{hero.title2}</span>
              {lang === 'fa' ? ' و ' : ' & '}
              <span className="text-accent-soft">{hero.title3}</span>{' '}
              {hero.title4}
            </h1>
            <p className="text-sm md:text-base text-muted max-w-xl">
              {hero.desc}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-5 py-2.5 text-sm font-medium text-bg shadow-soft hover:scale-[1.02] active:scale-[0.98] transition-transform"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs md:text-sm text-muted hover:text-text hover:border-accent-soft/80 hover:bg-surface/60 transition-all"
            >
              {hero.secondaryCta}
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-[0.7rem] text-muted">
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full bg-gradient-to-tr from-accent/60 to-accent-soft/90 flex items-center justify-center text-[0.6rem] text-bg">
                ⚡
              </span>
              <span>{hero.tag1}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full bg-surface/90 border border-border flex items-center justify-center text-[0.6rem]">
                🎨
              </span>
              <span>{hero.tag2}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="relative rounded-[1.75rem] bg-surface/80 border border-border/70 p-5 shadow-soft backdrop-blur-xl overflow-hidden">
            <div className="absolute -top-16 -right-12 h-40 w-40 rounded-full bg-accent-soft/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-12 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted">{hero.highlightedStack}</p>
                <span className="rounded-full bg-bg/70 px-3 py-1 text-[0.65rem] text-muted border border-border/70">
                  {hero.badgeRole}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs">
                <TechPill
                  label="React"
                  level={lang === 'fa' ? 'حرفه‌ای' : 'Expert'}
                />
                <TechPill
                  label="TypeScript"
                  level={lang === 'fa' ? 'پیشرفته' : 'Advanced'}
                />
                <TechPill
                  label="Tailwind"
                  level={lang === 'fa' ? 'پیشرفته' : 'Advanced'}
                />
                <TechPill
                  label="Vite"
                  level={lang === 'fa' ? 'پیشرفته' : 'Advanced'}
                />
                <TechPill
                  label="Framer Motion"
                  level={lang === 'fa' ? 'متوسط' : 'Intermediate'}
                />
                <TechPill
                  label={lang === 'fa' ? 'انیمیشن UI' : 'UI Animation'}
                  level={lang === 'fa' ? 'متوسط' : 'Intermediate'}
                />
              </div>

              <div className="mt-4 rounded-2xl bg-bg/40 border border-border/60 p-3 text-[0.7rem] text-muted space-y-2">
                <p className="text-[0.75rem] text-text/90">
                  {hero.highlightTitle}
                </p>
                <p>{hero.highlightDesc}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

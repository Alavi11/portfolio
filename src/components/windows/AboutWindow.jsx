import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { motion } from "framer-motion";

const AboutWindow = () => {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-col gap-4 text-[color:var(--text)]">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--accent-strong)] flex items-center justify-center text-3xl shadow-xl border border-white/20 overflow-hidden"
        >
          <img src="/images/profile.png"/>
        </motion.div>
        <div className="flex-1 space-y-1">
          <h1 className="text-xl sm:text-2xl font-semibold">
            {lang.about.title}
          </h1>
          <p className="text-sm text-[color:var(--muted)]">
            {lang.about.subtitle}
          </p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.08, duration: 0.25 }}
        className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--panel-soft)]/70 p-4 text-sm leading-relaxed whitespace-pre-line"
      >
        {lang.about.body}
      </motion.div>
    </div>
  );
};

export default AboutWindow;

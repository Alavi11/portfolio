import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { motion } from "framer-motion";

const ContactWindow = () => {
  const { lang } = useLanguage();

  return (
    <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-4 text-[color:var(--text)]">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--panel-soft)]/80 p-4"
      >
        <h2 className="text-lg font-semibold mb-1">{lang.contact.title}</h2>
        <p className="text-[11px] text-[color:var(--muted)] mb-3">
          {lang.contact.subtitle}
        </p>
        <form className="space-y-2.5 text-[11px]">
          <div className="flex flex-col gap-1">
            <label className="text-[color:var(--muted)]">
              {lang.contact.fields.name}
            </label>
            <input
              className="rounded-xl bg-black/20 border border-[color:var(--border-subtle)] px-3 py-1.5 outline-none text-[color:var(--text)] text-[11px] focus:border-[color:var(--accent)]"
              placeholder={lang.contact.fields.name}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[color:var(--muted)]">
              {lang.contact.fields.email}
            </label>
            <input
              className="rounded-xl bg-black/20 border border-[color:var(--border-subtle)] px-3 py-1.5 outline-none text-[color:var(--text)] text-[11px] focus:border-[color:var(--accent)]"
              placeholder="you@example.com"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[color:var(--muted)]">
              {lang.contact.fields.message}
            </label>
            <textarea
              rows={4}
              className="rounded-xl bg-black/20 border border-[color:var(--border-subtle)] px-3 py-1.5 outline-none text-[color:var(--text)] text-[11px] resize-none focus:border-[color:var(--accent)]"
              placeholder={lang.contact.fields.message}
            />
          </div>
          <div className="flex justify-end pt-1">
            <button
              type="button"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[color:var(--accent)] text-[10px] font-medium text-white shadow-lg hover:brightness-110 transition"
            >
              {lang.contact.fields.send}
            </button>
          </div>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.25 }}
        className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--panel-soft)]/80 p-4 flex flex-col justify-between gap-3"
      >
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">Info</h3>
          <div className="space-y-1 text-[11px] text-[color:var(--muted)]">
            <div className="flex items-center justify-between gap-2">
              <span>{lang.contact.info.emailLabel}</span>
              <span className="text-[color:var(--text)]/90">
                your.email@dev.com
              </span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span>{lang.contact.info.locationLabel}</span>
              <span className="text-[color:var(--text)]/90">
                {lang.contact.info.locationValue}
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px]">
          <span className="px-2.5 py-1 rounded-full bg.white/5 border border-[color:var(--border-subtle)]">
            GitHub
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/5 border border-[color:var(--border-subtle)]">
            LinkedIn
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/5 border border-[color:var(--border-subtle)]">
            Portfolio
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactWindow;

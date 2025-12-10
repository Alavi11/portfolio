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
        transition={{ delay: 0.1, duration: 0.25 }}
        className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--panel-soft)]/80 p-4 flex flex-col justify-between gap-3"
      >
        <div className="space-y-2">
          <h3 className="text-sm font-semibold">{lang.contact.info.title}</h3>
          <div className="space-y-1 text-[11px] text-[color:var(--muted)]">
            <div className="flex items-center justify-between gap-2">
              <span>{lang.contact.info.phone}</span>
              <span className="text-[color:var(--text)]/90">
                09934156323
              </span>
            </div>
            <div className="flex items-center justify-between gap-2">
              <span>{lang.contact.info.emailLabel}</span>
              <span className="text-[color:var(--text)]/90">
                e.alavi1380@gmail.com
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
            <a href="https://github.com/Alavi11">Github</a>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactWindow;

import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { motion } from "framer-motion";

const SkillsWindow = () => {
  const { lang } = useLanguage();

  return (
    <div className="flex flex-col gap-4 text-[color:var(--text)]">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-xl font-semibold">{lang.skills.title}</h2>
        <span className="text-[10px] px-2 py-1 rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
          Frontend · Tooling
        </span>
      </div>

      <div className="flex gap-4">
        {lang.skills.categories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * idx, duration: 0.25 }}
            className="w-[350px] rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--panel-soft)]/80 p-3.5 shadow-md"
          >
            <h3 className="text-sm font-semibold mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--accent)]" />
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-[12px] px-2 py-1 rounded-full bg-white/10 shadow-md text-[#dfdfdf] border border-[color:var(--border-subtle)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsWindow;

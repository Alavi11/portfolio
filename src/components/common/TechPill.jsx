import React from 'react';

export default function TechPill({ label, level }) {
  return (
    <div className="group rounded-2xl border border-border/60 bg-bg/50 px-3 py-2 flex flex-col gap-1 hover:border-accent-soft/70 hover:-translate-y-0.5 transition-all duration-300">
      <span className="text-[0.7rem] text-text">{label}</span>
      <span className="text-[0.62rem] text-muted group-hover:text-accent-soft">
        {level}
      </span>
    </div>
  );
}

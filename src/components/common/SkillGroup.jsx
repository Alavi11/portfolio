import React from 'react';

export default function SkillGroup({ title, items, highlight }) {
  return (
    <div
      className={
        'rounded-2xl border p-4 space-y-3 ' +
        (highlight
          ? 'border-accent-soft/70 bg-bg/60 shadow-soft'
          : 'border-border/60 bg-bg/40')
      }
    >
      <p className="text-xs text-muted">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="text-[0.7rem] rounded-full px-3 py-1 bg-surface/90 border border-border/70 text-text/90 hover:border-accent-soft/80 hover:text-accent-soft transition-all duration-200"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

import React from 'react';

export default function SkillStat({ label, value }) {
  return (
    <div className="rounded-xl bg-bg/60 border border-border/60 px-3 py-2 flex flex-col gap-1">
      <span className="text-[0.65rem] text-muted">{label}</span>
      <span className="text-sm font-medium text-text">{value}</span>
    </div>
  );
}

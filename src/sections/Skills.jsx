import React from 'react';
import Section from '../components/layout/Section.jsx';
import SkillGroup from '../components/common/SkillGroup.jsx';
import SkillStat from '../components/common/SkillStat.jsx';
import { useLang } from '../LanguageContext.jsx';
import { getT } from '../i18n';

export default function Skills() {
  const { lang } = useLang();
  const { skills } = getT(lang);

  const mainSkills = [
    'Next',
    'React',
    'TypeScript',
    'JavaScript (ESNext)',
    'Tailwind CSS',
    'Vite',
    'Framer Motion',
  ];
  const secondary = [
    'Responsive Design',
    'Design Systems',
    'Component Architecture',
    'REST / JSON',
    'Git / GitHub',
    'Performance Optimization',
  ];

  return (
    <Section id="skills" title={skills.title} eyebrow={skills.eyebrow}>
      <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-8">
        <div className="space-y-4">
          <p className="text-sm text-muted max-w-xl">{skills.desc}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <SkillGroup title={skills.core} items={mainSkills} highlight />
            <SkillGroup title={skills.product} items={secondary} />
          </div>
        </div>

        <div className="space-y-3 rounded-2xl bg-surface/70 border border-border/60 p-4 backdrop-blur">
          <p className="text-xs text-muted uppercase tracking-[0.18em]">
            {skills.snapshot}
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs">
            <SkillStat label={skills.stat1} value="3+" />
            <SkillStat label={skills.stat2} value="20+" />
            <SkillStat label={skills.stat3} value="12+" />
            <SkillStat label={skills.stat4} value="100%" />
          </div>
          <p className="text-[0.7rem] text-muted">{skills.foot}</p>
        </div>
      </div>
    </Section>
  );
}

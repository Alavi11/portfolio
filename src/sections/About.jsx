import React from 'react';
import Section from '../components/layout/Section.jsx';
import { useLang } from '../LanguageContext.jsx';
import { getT } from '../i18n';

export default function About() {
  const { lang } = useLang();
  const { about } = getT(lang);

  return (
    <Section id="about" title={about.title} eyebrow={about.eyebrow}>
      <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-8 items-start">
        <div className="space-y-4 text-sm text-muted">
          <p>{about.p1}</p>
          <p>{about.p2}</p>
          <p>{about.p3}</p>
        </div>
        <div className="space-y-4 rounded-2xl bg-surface/80 border border-border/60 p-4 backdrop-blur">
          <p className="text-xs text-muted uppercase tracking-[0.18em]">
            {about.how}
          </p>
          <ul className="space-y-2 text-[0.8rem] text-muted">
            <li>{about.li1}</li>
            <li>{about.li2}</li>
            <li>{about.li3}</li>
            <li>{about.li4}</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}

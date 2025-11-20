import React from 'react';
import Section from '../components/layout/Section.jsx';
import ProjectCard from '../components/common/ProjectCard.jsx';
import { projects } from '../data/projects.js';
import { useLang } from '../LanguageContext.jsx';
import { getT } from '../i18n';

export default function Projects() {
  const { lang } = useLang();
  const { projects: tProjects } = getT(lang);

  return (
    <Section
      id="projects"
      title={tProjects.title}
      eyebrow={tProjects.eyebrow}
    >
      <p className="text-sm text-muted mb-4 max-w-xl">{tProjects.desc}</p>

      <div className="space-y-6">
        {projects.map((project, idx) => (
          <ProjectCard key={project.id} project={project} index={idx} />
        ))}
      </div>
    </Section>
  );
}

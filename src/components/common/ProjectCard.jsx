import React from 'react';
import { motion } from 'framer-motion';
import { useLang } from '../../LanguageContext.jsx';
import { getT } from '../../i18n';

export default function ProjectCard({ project, index }) {
  const { lang } = useLang();
  const { projects } = getT(lang);
  const labels = projects.labels;

  const title = lang === 'fa' ? project.titleFa : project.titleEn;
  const role = lang === 'fa' ? project.roleFa : project.roleEn;
  const desc =
    lang === 'fa' ? project.shortDescriptionFa : project.shortDescriptionEn;

  return (
    <motion.article
      custom={index}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: { duration: 0.4, delay: i * 0.08 },
        }),
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-120px' }}
      className="rounded-2xl border border-border/70 bg-surface/80 backdrop-blur shadow-soft overflow-hidden hover:border-accent-soft/80 hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="grid md:grid-cols-[1.25fr,0.9fr] gap-0">
        <div className="relative overflow-hidden">
          <div className="flex snap-x snap-mandatory overflow-x-auto no-scrollbar">
            {project.images.map((src, i) => (
              <div
                key={i}
                className="min-w-full h-52 sm:h-64 md:h-full snap-center relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />
                <img
                  src={src}
                  alt={`${title} – screenshot ${i + 1}`}
                  className="w-full h-full object-cover scale-[1.03] group-hover:scale-100 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
            {project.images.map((_, i) => (
              <span
                key={i}
                className={
                  'h-1.5 w-4 rounded-full ' +
                  (i === 0 ? 'bg-accent-soft' : 'bg-bg/60')
                }
              />
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-5 flex flex-col justify-between gap-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-sm md:text-base font-semibold">{title}</h3>
              <span className="text-[0.7rem] rounded-full border border-border/60 px-2 py-1 text-muted">
                {role}
              </span>
            </div>
            <p className="text-xs md:text-sm text-muted">{desc}</p>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <p className="text-[0.7rem] text-muted uppercase tracking-[0.2em]">
                {labels.technologies}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[0.65rem] rounded-full bg-bg/70 border border-border/60 px-2.5 py-1 text-muted hover:border-accent-soft/80 hover:text-accent-soft transition-all"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-[0.75rem]">
              {project.link && (
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1 rounded-full bg-accent-soft/90 px-3 py-1.5 text-bg hover:bg-accent-soft"
                >
                  {labels.liveDemo}
                  <span>↗</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-muted hover:text-text hover:border-accent-soft/80"
                >
                  {labels.sourceCode}
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

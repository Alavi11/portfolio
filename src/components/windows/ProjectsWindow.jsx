import React, { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { motion } from "framer-motion";
import ProjectSlider from "../common/ProjectSlider";
import ImageViewerWindow from "./ImageViewerWindow";

const ProjectsWindow = () => {
  const { lang } = useLanguage();
  const projects = lang.projects.items;

  const [viewer, setViewer] = useState(null);
  // viewer = { images, index, title } | null

  const openViewer = (project, startIndex) => {
    setViewer({
      images: project.images,
      index: startIndex,
      title: project.name,
    });
  };

  const closeViewer = () => setViewer(null);

  return (
    <>
      <div className="flex flex-col gap-4 text-[color:var(--text)]">
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold">{lang.projects.title}</h2>
            <p className="text-[11px] text-[color:var(--muted)] mt-1">
              {lang.projects.hint}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {projects.map((p, idx) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.06 * idx, duration: 0.25 }}
              className="rounded-2xl border border-[color:var(--border-subtle)] bg-[color:var(--panel-soft)]/80 p-3.5 flex flex-col gap-3"
            >
              <ProjectSlider
                images={p.images}
                projectName={p.name}
                onOpenViewer={(startIndex) => openViewer(p, startIndex)}
              />

              <div className="space-y-1">
                <h3 className="text-sm font-semibold">{p.name}</h3>
                <p className="text-[11px] text-[color:var(--muted)] leading-relaxed">
                  {p.shortDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1 border-t border-[color:var(--border-subtle)]/60 mt-1">
                {p.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] px-2 py-1 mt-1 rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent)] border border-[color:var(--accent-strong)]/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {viewer && (
        <ImageViewerWindow
          images={viewer.images}
          initialIndex={viewer.index}
          title={viewer.title}
          open={!!viewer}
          onClose={closeViewer}
        />
      )}
    </>
  );
};

export default ProjectsWindow;

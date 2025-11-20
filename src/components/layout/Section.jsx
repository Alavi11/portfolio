import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          {eyebrow && (
            <p className="text-xs text-accent-soft/80 font-medium uppercase tracking-[0.18em]">
              {eyebrow}
            </p>
          )}
          <h2 className="text-xl md:text-2xl font-semibold">{title}</h2>
        </div>
        {children}
      </motion.div>
    </section>
  );
}

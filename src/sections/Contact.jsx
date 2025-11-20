import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/layout/Section.jsx';
import { useLang } from '../LanguageContext.jsx';
import { getT } from '../i18n';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const { lang } = useLang();
  const { contact } = getT(lang);

  return (
    <Section id="contact" title={contact.title} eyebrow={contact.eyebrow}>
      <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-8 items-start">
        <div className="space-y-4 text-sm text-muted">
          <p>{contact.p1}</p>
          <p className="text-[0.8rem]">{contact.p2}</p>
          <ul className="text-[0.8rem] space-y-1">
            <li>{contact.li1}</li>
            <li>{contact.li2}</li>
            <li>{contact.li3}</li>
          </ul>
        </div>

        <motion.form
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.5 }}
          className="space-y-4 rounded-2xl bg-surface/80 border border-border/60 p-4 sm:p-5 backdrop-blur"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-3 text-xs sm:text-sm">
            <label className="space-y-1">
              <span className="text-muted">{contact.name}</span>
              <input
                type="text"
                placeholder={contact.namePlaceholder}
                className="w-full rounded-xl bg-bg/80 border border-border/60 px-3 py-2 outline-none focus:border-accent-soft/80 focus:ring-2 focus:ring-accent-soft/20 transition-all"
              />
            </label>
            <label className="space-y-1">
              <span className="text-muted">{contact.email}</span>
              <input
                type="email"
                placeholder={contact.emailPlaceholder}
                className="w-full rounded-xl bg-bg/80 border border-border/60 px-3 py-2 outline-none focus:border-accent-soft/80 focus:ring-2 focus:ring-accent-soft/20 transition-all"
              />
            </label>
            <label className="space-y-1">
              <span className="text-muted">{contact.projectType}</span>
              <select className="w-full rounded-xl bg-bg/80 border border-border/60 px-3 py-2 outline-none focus:border-accent-soft/80 focus:ring-2 focus:ring-accent-soft/20 transition-all">
                <option>{contact.opt1}</option>
                <option>{contact.opt2}</option>
                <option>{contact.opt3}</option>
                <option>{contact.opt4}</option>
                <option>{contact.opt5}</option>
              </select>
            </label>
            <label className="space-y-1">
              <span className="text-muted">{contact.descLabel}</span>
              <textarea
                rows="4"
                placeholder={contact.descPlaceholder}
                className="w-full rounded-xl bg-bg/80 border border-border/60 px-3 py-2 outline-none focus:border-accent-soft/80 focus:ring-2 focus:ring-accent-soft/20 transition-all resize-none"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-accent-soft/90 text-bg text-sm font-medium py-2.5 hover:bg-accent-soft shadow-soft hover:shadow-accent-soft/30 active:scale-[0.99] transition-all"
          >
            {contact.submit}
          </button>

          <p className="text-[0.7rem] text-muted text-center">
            {contact.direct}{' '}
            <span className="text-accent-soft">yourmail@example.com</span>{' '}
            {contact.direct2}
          </p>
        </motion.form>
      </div>
    </Section>
  );
}

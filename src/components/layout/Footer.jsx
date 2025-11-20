import React from 'react';
import { useLang } from '../../LanguageContext.jsx';
import { getT } from '../../i18n';

export default function Footer() {
  const { lang } = useLang();
  const { footer } = getT(lang);

  return (
    <footer className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-[0.7rem] text-muted flex flex-col sm:flex-row items-center justify-between gap-2 border-t border-border/60 mt-8">
      <span>
        © {new Date().getFullYear()} Nopomo. {footer.rights}
      </span>
      <span className="text-[0.7rem]">{footer.madeWith}</span>
    </footer>
  );
}

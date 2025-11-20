import fa from './fa';
import en from './en';

export const translations = {
  fa,
  en,
};

export function getT(langId) {
  return translations[langId] || translations.fa;
}

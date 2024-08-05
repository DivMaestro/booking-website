import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/layout.json';
import es from './locales/es/layout.json';
import bg from './locales/bg/layout.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
      bg: {translation: bg},
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
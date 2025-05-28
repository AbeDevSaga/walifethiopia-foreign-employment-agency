// app/lib/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'am', 'ar'],
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { common: require('@/public/locales/en/common.json') },
      am: { common: require('@/public/locales/am/common.json') },
      ar: { common: require('@/public/locales/ar/common.json') },
    }
  });

export default i18n;
// app/lib/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enCommon from "@/public/locales/en/common.json";
import amCommon from "@/public/locales/am/common.json";
import arCommon from "@/public/locales/ar/common.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  supportedLngs: ["en", "am", "ar"],
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { common: enCommon },
    am: { common: amCommon },
    ar: { common: arCommon },
  },
});

export default i18n;

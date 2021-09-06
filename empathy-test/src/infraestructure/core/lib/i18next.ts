import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import es from "../helpers/locale/es.json";
import en from "../helpers/locale/en.json";

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
  },
  lng: "en",
  fallbackLng: "empty",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;

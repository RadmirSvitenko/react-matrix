import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          matrixTitle: "MATRIX - Online Computer Store",
          matrixSubtitle:
            "Fall Sale: Discounts - 5% | 10% | 15% on the best appliances.",
        },
      },

      ru: {
        translation: {
          matrixTitle: "MATRIX - Интернет магазин компьютерной техники",
          matrixSubtitle:
            "Осенняя распродажа: Скидки - 5% | 10% | 15% на лучшую технику",
        },
      },
    },

    lng: "en",
    fallbackLng: "en",
  });

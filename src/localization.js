import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          matrixTitle: "MATRIX - Online Computer Store",
          matrixSlogan: "MATRIX - Quality, Guarantee, Performance",
          titleNewProducts: "New Products",
          titleTopSales: "Top Sales",
          matrixSubtitle:
            "Fall Sale: Discounts - 5% | 10% | 15% on the best appliances.",
        },
        buttonViewAll: "View All",
        buttonViewClose: "Close",
      },

      ru: {
        translation: {
          matrixTitle: "MATRIX - Интернет магазин компьютерной техники",
          matrixSlogan: "MATRIX - Качество, Гарантия, Производительность",
          titleNewProducts: "Новые продукты",
          titleTopSales: "Лучшие продажи",
          matrixSubtitle:
            "Осенняя распродажа: Скидки - 5% | 10% | 15% на лучшую технику",
        },
        buttonViewAll: "Показать всё",
        buttonViewClose: "Закрыть",
      },
    },

    lng: "en",
    fallbackLng: "en",
  });

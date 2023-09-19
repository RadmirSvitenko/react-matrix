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
          titleCatalog: "CATALOG",
          matrixSubtitle:
            "Fall Sale: Discounts - 5% | 10% | 15% on the best appliances.",
          buttonViewAll: "View All",
          buttonViewClose: "Close",
          filterGameTitle: "Best gaming solutions",
          filterWorkTitle: "Optimal performance for work solutions",
          filterBuisnessTitle: "Speed and mobility in your hands",
          ourOffers: "Our offers",
          interestingReviews: "Interesting reviews",
          authTitle: "Autorization",
          regTitle: "Registration",
          authLogin: "Login",
          authPassword: "Password",
          regLogin: "Enter login",
          regPassword: "Enter password",
          regPasswordRepeat: "Repeat password",
          buttonAuth: "LOG IN",
          buttonReg: "REGISTER",
          tabTitleCatalog: "CATALOG",
          tabTitleCategory: "CATEGORY",
          labelCatalogSearch: "Search notebooks...",
        },
      },

      ru: {
        translation: {
          matrixTitle: "MATRIX - Интернет магазин компьютерной техники",
          matrixSlogan: "MATRIX - Качество, Гарантия, Производительность",
          titleNewProducts: "Новые продукты",
          titleTopSales: "Лучшие продажи",
          titleCatalog: "Каталог продуктов",
          matrixSubtitle:
            "Осенняя распродажа: Скидки - 5% | 10% | 15% на лучшую технику",
          buttonViewAll: "Показать всё",
          buttonViewClose: "Закрыть",
          filterGameTitle: "Лучшие игровые решения",
          filterWorkTitle: "Оптимальная производительность для рабочих решений",
          filterBuisnessTitle: "Скорость и мобильность в ваших руках",
          ourOffers: "Наши предложения",
          interestingReviews: "Интересные обзоры",
          authTitle: "Авторизация",
          regTitle: "Регистрация",
          authLogin: "Логин",
          authPassword: "Пароль",
          regLogin: "Введите логин",
          regPassword: "Введите пароль",
          regPasswordRepeat: "Повторите пароль",
          buttonAuth: "Войти",
          buttonReg: "Зарегистрироваться",
          tabTitleCatalog: "КАТАЛОГ",
          tabTitleCategory: "КАТЕГОРИИ",
          labelCatalogSearch: "Найти ноутбуки...",
        },
      },
    },

    lng: "en",
    fallbackLng: "en",
  });

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
          titleProductDetailsReviews: "Reviews",
          textareaLeaveReviewField: "Leave a comment",
          submitReview: "Submit review",
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
          regMail: "Enter your E-Mail",
          buttonAuth: "LOG IN",
          buttonReg: "REGISTER",
          tabTitleCatalog: "CATALOG",
          tabTitleCategory: "CATEGORY",
          labelCatalogSearch: "Search notebooks...",
          catalogFilterBrandsTitle: "Brands",
          catalogFilterCategoryTitle: "Category",
          catalogFilterPriceTitle: "Price",
          catalogFilterBrandApple: "Apple",
          catalogFilterBrandAsus: "Asus",
          catalogFilterBrandAcer: "Acer",
          catalogFilterBrandLenovo: "Lenovo",
          catalogFilterBrandHP: "HP",
          catalogFilterBrandMsi: "Msi",
          catalogFilterCategoryForWork: "FOR WORK",
          catalogFilterCategoryForStudy: "FOR STUDY",
          catalogFilterCategoryForGaming: "FOR GAMING",
          cardDetailsTabAboutProduct: "About product",
          cardDetailsTabCharacteristics: "Characteristics",
          cardDetailsTabReviews: "Reviews",
          productDetailsID: "ID",
          productDetailsdescription: "Description",
          productDetailsStock: "Stock",
          productDetailsPrice: "Price",
          productDetailsBrand: "Brand",
          productDetailsModel: "Model",
          productDetailsDiagonal: "Diagonal",
          productDetailsUpdateFrequency: "Update frequency",
          productDetailsScreenResolution: "Screen resolution",
          productDetailsScreenMatrix: "Screen matrix",
          productDetailsScreenBrightness: "Screen brightness",
          productDetailsScreenSurface: "Screen surface",
          productDetailsMatrixType: "Matrix type",
          productDetailsAspectRatio: "Aspect ratio",
          productDetailsNTSCColorGamut: "NTSC color gamut",
          productDetailsRAM: "RAM",
          productDetailsBaseOperatinSystem: "Base operating system",
          productDetailsCPUType: "CPU type",
          productDetailsCPUName: "CPU name",
          productDetailsCPUCore: "CPU core",
          productDetailsCPUFrequency: "CPU frequency",
          productDetailsNumberOfCoresProcessor: "Number of cores processor",
          productDetailsMaximumNumberOfThreads: "Maximum number of threads",
          productDetailsWiFiVersion: "WI-FI version",
          productDetailsBluetoothVersion: "Bluetooth version",
          productDetailsUSBVersionTwoZero: "USB version two-zero",
          productDetailsUSBVersionThreeZero: "USB version three-zero",
          productDetailsWebCam: "Web-cam",
          productDetailsMicrophone: "Microphone",
          productDetailsGuarantee: "Guarantee",
          productDetailsEnergyIntensityBatteries: "Energy intensity batteries",
          productDetailsMaterialCorps: "Material corps",
          productDetailsColorCorps: "Color corps",
          productDetailsShockproofCorps: "Shockproof corps",
          productDetailsItemWeight: "Item weight",
          productDetailsVolumeDisk: "Volume disk",
          productDetailsDiskConfiguration: "Disk configuration",
          productDetailsKeyboardLanguage: "Keyboard language",
          productDetailsTitleMainCharacteristics: "Main characteristics",
          productDetailsTitleDisplayCharacteristics: "Display",
          productDetailsTitleEquipmentCharacteristics: "Equipment",
          productDetailsTitleCommunicationsCharacteristics: "Communications",
          productDetailsTitleStorageCharacteristics: "Storage",
          productDetailsTitleCorpusCharacteristics: "Corpus",
          productDetailsTitleDocumentsCharacteristics: "Documents",
          addToCart: "ADD TO CART",
          paymentStepOneTitle: "Enter contact information",
          paymentStepTwoTitle: "Select a payment method",
          paymentStepThreeTitle: "Confirm the transaction",
          paymentButtonNext: "Next step",
          paymentButtonBack: "Back",
          paymentButtonFinish: "Finish",
          paymentButtonReset: "Reset to start",
        },
      },

      ru: {
        translation: {
          matrixTitle: "MATRIX - Интернет магазин компьютерной техники",
          matrixSlogan: "MATRIX - Качество, Гарантия, Производительность",
          titleNewProducts: "Новые продукты",
          titleTopSales: "Лучшие продажи",
          titleCatalog: "Каталог продуктов",
          titleProductDetailsReviews: "Отзывы",
          textareaLeaveReviewField: "Оставить отзыв",
          submitReview: "Отправить отзыв",
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
          regMail: "Введите вашу почту",
          buttonAuth: "Войти",
          buttonReg: "Зарегистрироваться",
          tabTitleCatalog: "КАТАЛОГ",
          tabTitleCategory: "КАТЕГОРИИ",
          labelCatalogSearch: "Найти ноутбуки...",
          catalogFilterBrandsTitle: "Бренды",
          catalogFilterCategoryTitle: "Категории",
          catalogFilterPriceTitle: "Цена",
          catalogFilterCategoryForWork: "ДЛЯ РАБОТЫ",
          catalogFilterCategoryForStudy: "ДЛЯ УЧЁБЫ",
          catalogFilterCategoryForGaming: "ДЛЯ ИГР",
          cardDetailsTabAboutProduct: "О товаре",
          cardDetailsTabCharacteristics: "Характеристики",
          cardDetailsTabReviews: "Отзывы",
          productDetailsID: "Идентификатор",
          productDetailsdescription: "Описание",
          productDetailsStock: "Остаток",
          productDetailsPrice: "Цена",
          productDetailsBrand: "Бренд",
          productDetailsModel: "Модель",
          productDetailsDiagonal: "Диагональ",
          productDetailsUpdateFrequency: "Частота обновления экрана",
          productDetailsScreenResolution: "Разрешение экрана",
          productDetailsScreenMatrix: "Матрица экрана",
          productDetailsScreenBrightness: "Яркость экрана",
          productDetailsScreenSurface: "Поверхность экрана",
          productDetailsMatrixType: "Тип матрицы",
          productDetailsAspectRatio: "Соотношение сторон",
          productDetailsNTSCColorGamut: "Цветовая гамма NTSC",
          productDetailsRAM: "Оперативная память",
          productDetailsBaseOperatinSystem: "Операционная система",
          productDetailsCPUType: "Тип процессора",
          productDetailsCPUName: "Имя процессора",
          productDetailsCPUCore: "Ядро процессора",
          productDetailsCPUFrequency: "Частота процессора",
          productDetailsNumberOfCoresProcessor: "Количество ядер процессора",
          productDetailsMaximumNumberOfThreads:
            "Максимальное количество потоков",
          productDetailsWiFiVersion: "Версия WI-FI",
          productDetailsBluetoothVersion: "Версия Bluetooth",
          productDetailsUSBVersionTwoZero: "USB Version 2.0",
          productDetailsUSBVersionThreeZero: "USB Version 3.0",
          productDetailsWebCam: "Веб-камера",
          productDetailsMicrophone: "Микрофон",
          productDetailsGuarantee: "Гарантия",
          productDetailsEnergyIntensityBatteries: "Энергоёмкость батареи",
          productDetailsMaterialCorps: "Материал корпуса",
          productDetailsColorCorps: "Цвет корпуса",
          productDetailsShockproofCorps: "Ударопрочный корпус",
          productDetailsItemWeight: "Вес ноутбука",
          productDetailsVolumeDisk: "Накопитель",
          productDetailsDiskConfiguration: "Конфигурация диска",
          productDetailsKeyboardLanguage: "Язык клавиатуры",
          productDetailsTitleMainCharacteristics: "Основные характеристики",
          productDetailsTitleDisplayCharacteristics: "Экран",
          productDetailsTitleEquipmentCharacteristics: "Оборудование",
          productDetailsTitleCommunicationsCharacteristics: "Коммунникации",
          productDetailsTitleStorageCharacteristics: "Хранилище",
          productDetailsTitleCorpusCharacteristics: "Корпус",
          productDetailsTitleDocumentsCharacteristics: "Документы",
          addToCart: "ДОБАВИТЬ В КОРЗИНУ",
          paymentStepOneTitle: "Введите контактные данные",
          paymentStepTwoTitle: "Выберите способ платежа",
          paymentStepThreeTitle: "Подтвердите операцию",
          paymentButtonNext: "Следующий шаг",
          paymentButtonBack: "Назад",
          paymentButtonFinish: "Завершить",
          paymentButtonReset: "Вернутся к началу",
        },
      },
    },

    lng: "en",
    fallbackLng: "en",
  });

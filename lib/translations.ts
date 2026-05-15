export type Lang = 'ka' | 'en' | 'ru';

export const translations = {
  langButton: {
    ka: 'ქარ',
    en: 'EN',
    ru: 'RU',
  },
  storesLabel: {
    ka: 'სად შეიძლება შეძენა',
    en: 'Where to buy',
    ru: 'Где купить',
  },
  cardTitle: {
    ka: 'მალე გამოჩნდება',
    en: 'Coming Soon',
    ru: 'Скоро появится',
  },
  cardTextLine1: {
    ka: 'ჩვენი ღვინის შეძენის ადგილების სია',
    en: 'The list of stores where you can purchase',
    ru: 'Список магазинов, где можно приобрести',
  },
  cardTextLine2: {
    ka: 'მალე გამოჩნდება',
    en: 'our wine will be published very soon',
    ru: 'наше вино, скоро будет опубликован',
  },
} as const;

export const LANGUAGES: Lang[] = ['ka', 'en', 'ru'];

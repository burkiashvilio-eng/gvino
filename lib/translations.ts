export type Lang = 'ka' | 'en' | 'ru';

export const LANGUAGES: Lang[] = ['ka', 'en', 'ru'];

export const translations = {
  langButton: {
    ka: 'ქარ',
    en: 'EN',
    ru: 'RU',
  },
  brand: {
    ka: 'ბურკიაშვილი ღვინის მარანი',
    en: 'Burkiashvili Wine Cellar',
    ru: 'Винный погреб Буркиашвили',
  },
  eyebrow: {
    ka: 'ქვევრის ღვინო · კახეთი',
    en: 'Qvevri wine · Kakheti',
    ru: 'Вино квеври · Кахетия',
  },
  heroTitle: {
    ka: 'ქვევრის ღვინო კახეთიდან. უკვე თბილისში.',
    en: 'Qvevri wine from Kakheti. Now in Tbilisi.',
    ru: 'Вино квеври из Кахетии. Уже в Тбилиси.',
  },
  heroText: {
    ka: 'ჩვენი პირველი ღვინო, ქისი ქვევრი 2024, უკვე იყიდება თბილისის ღვინის მაღაზიებში და ისხმება რესტორნებში.',
    en: 'Our first release, Kisi Qvevri 2024, is on the shelves of wine shops and poured at restaurants across the city.',
    ru: 'Наше первое вино, Киси Квеври 2024, уже продаётся в винных магазинах Тбилиси и подаётся в ресторанах.',
  },
  heroImageAlt: {
    ka: 'ქალის ნახატი, რომელიც თეთრ ღვინოს აგემოვნებს',
    en: 'Line drawing of a woman tasting a glass of white wine',
    ru: 'Рисунок женщины, пробующей бокал белого вина',
  },
  storesLabel: {
    ka: 'სად შეიძლება შეძენა',
    en: 'Where to buy',
    ru: 'Где купить',
  },
  restaurantsLabel: {
    ka: 'რესტორნები',
    en: 'Restaurants',
    ru: 'Рестораны',
  },
  viewOnMap: {
    ka: 'ნახე რუქაზე →',
    en: 'View on map →',
    ru: 'Смотреть на карте →',
  },
  mapAria: {
    ka: 'გახსენი {name} Google Maps-ში',
    en: 'Open {name} in Google Maps',
    ru: 'Открыть {name} в Google Maps',
  },
  askFor: {
    ka: 'მოითხოვეთ',
    en: 'Ask for',
    ru: 'Спрашивайте',
  },
  wineName: {
    ka: 'ქისი ქვევრი 2024',
    en: 'Kisi Qvevri 2024',
    ru: 'Киси Квеври 2024',
  },
  wineDescription: {
    ka: 'თეთრი მშრალი · პირველი გამოშვება',
    en: 'White dry wine · first release',
    ru: 'Белое сухое · первый релиз',
  },
  labelAlt: {
    ka: 'ქისი ქვევრი 2024 — ეტიკეტი',
    en: 'Kisi Qvevri 2024 label',
    ru: 'Этикетка Киси Квеври 2024',
  },
  footer: {
    ka: 'ბურკიაშვილი ღვინის მარანი · კახეთი, საქართველო',
    en: 'Burkiashvili Wine Cellar · Kakheti, Georgia',
    ru: 'Винный погреб Буркиашвили · Кахетия, Грузия',
  },
} as const;

/** "5 wine shops" / "2 restaurants" with per-language plural handling. */
export function countLabel(n: number, kind: 'shops' | 'restaurants', lang: Lang): string {
  if (lang === 'ka') return `${n} ${kind === 'shops' ? 'მაღაზია' : 'რესტორანი'}`;
  if (lang === 'en') {
    const word = kind === 'shops' ? 'wine shop' : 'restaurant';
    return `${n} ${word}${n === 1 ? '' : 's'}`;
  }
  // Russian plural forms
  const mod10 = n % 10;
  const mod100 = n % 100;
  const form = mod10 === 1 && mod100 !== 11 ? 0 : mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14) ? 1 : 2;
  const words = kind === 'shops' ? ['магазин', 'магазина', 'магазинов'] : ['ресторан', 'ресторана', 'ресторанов'];
  return `${n} ${words[form]}`;
}

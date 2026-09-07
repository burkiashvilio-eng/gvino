import Link from 'next/link';
import { Lang, translations } from '@/lib/translations';

interface Props {
  lang: Lang;
}

interface Place {
  name: string;
  address: { en: string; ka: string; ru: string };
  lat: number;
  lng: number;
  googleMapsUrl: string;
}

const wineShops: Place[] = [
  {
    name: "Dionysus Wine Bar & Shop",
    address: {
      en: "25 Aleksandr Pushkin St, Tbilisi",
      ka: "ალექსანდრე პუშკინის ქ. 25, თბილისი",
      ru: "ул. Пушкина 25, Тбилиси",
    },
    lat: 41.695547,
    lng: 44.802638,
    googleMapsUrl: "https://www.google.com/maps?q=Dionysus+Wine+Bar+%26+Shop&ftid=0x40440cef9d3f5125:0x1258e6cd7ecf7930",
  },
  {
    name: "Wine Not?",
    address: {
      en: "6 Vasil Petriashvili St, Tbilisi",
      ka: "ვასილ პეტრიაშვილის ქ. 6, თბილისი",
      ru: "ул. В. Петриашвили 6, Тбилиси",
    },
    lat: 41.708030,
    lng: 44.781162,
    googleMapsUrl: "https://www.google.com/maps?q=Wine+Not%3F&ftid=0x40440dd8d70b3e3f:0xca94d8137380e801",
  },
  {
    name: "Wine Tower",
    address: {
      en: "1 Jan Shardeni St, Tbilisi",
      ka: "იან შარდენის ქ. 1, თბილისი",
      ru: "ул. Жანა Шардена 1, Тбилиси",
    },
    lat: 41.690604,
    lng: 44.807874,
    googleMapsUrl: "https://www.google.com/maps?q=Wine+Tower&ftid=0x40440dc67c32393b:0xf099d8419b60cadd",
  },
  {
    name: "Wine Effect • ღვინის ეფექტი",
    address: {
      en: "16 Irakli Abashidze St, Tbilisi",
      ka: "ირაკლი აბაშიძის ქ. 16, თბილისი",
      ru: "ул. Ираклия Абашидзе 16, Тбилиси",
    },
    lat: 41.707061,
    lng: 44.770958,
    googleMapsUrl: "https://www.google.com/maps?q=Wine+Effect&ftid=0x40440d1abe5b9fe5:0xd2fd9af1db8f7256",
  },
  {
    name: "Wine Bridge",
    address: {
      en: "Tbilisi, Georgia",
      ka: "თბილისი, საქართველო",
      ru: "Тбилиси, Грузия",
    },
    lat: 41.7001436,
    lng: 44.8026606,
    googleMapsUrl: "https://www.google.com/maps/place/Wine+bridge/@41.7001436,44.8000857,849m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40440d51beef6bef:0x37482a16aa235da2!8m2!3d41.7001436!4d44.8026606!16s%2Fg%2F11k56qzt2m",
  },
];

const restaurants: Place[] = [
  {
    name: "Veriko",
    address: {
      en: "1 Vasil Petriashvili St, Tbilisi",
      ka: "ვასილ პეტრიაშვილის ქ. 1, თბილისი",
      ru: "ул. В. Петриашвили 1, Тбилиси",
    },
    lat: 41.708848,
    lng: 44.781603,
    googleMapsUrl: "https://www.google.com/maps/place/veriko/data=!4m2!3m1!1s0x40440d419b6ce127:0xd044613fc6697643",
  },
  {
    name: "Lazy",
    address: {
      en: "64 Ilia Chavchavadze Ave, Tbilisi",
      ka: "ილია ჭავჭავაძის გამზ. 64, თბილისი",
      ru: "пр. Илии Чавчавадзе 64, Тбилиси",
    },
    lat: 41.7106514,
    lng: 44.7587682,
    googleMapsUrl: "https://www.google.com/maps/place/Lazy/@41.7106514,44.7561933,650m/data=!3m2!1e3!4b1!4m6!3m5!1s0x40447376e3dc8d1b:0x55be1486ed13613c!8m2!3d41.7106514!4d44.7587682!16s%2Fg%2F11vbj9ql11",
  },
];

/* Reusable card list component */
function PlacesList({ items, label, lang }: { items: Place[]; label: string; lang: Lang }) {
  return (
    <div className="section-container">
      <div className="section-label">{label}</div>
      <div className="places-list">
        {items.map((item, i) => (
          <div key={i} className="place-card">
            <div className="place-card-info">
              <div className="place-card-name">{item.name}</div>
              <div className="place-card-address">
                <svg width="11" height="14" viewBox="0 0 12 15" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M6 1C3.79 1 2 2.79 2 5c0 3.5 4 9 4 9s4-5.5 4-9c0-2.21-1.79-4-4-4z" />
                  <circle cx="6" cy="5" r="1.5" />
                </svg>
                <span>{item.address[lang] ?? item.address.en}</span>
              </div>
            </div>
            <Link
              href={item.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="place-map-wrap"
              aria-label={`Open ${item.name} in Google Maps`}
            >
              <iframe
                src={`https://maps.google.com/maps?q=${item.lat},${item.lng}&z=16&output=embed`}
                className="place-map-iframe"
                loading="lazy"
                title={item.name}
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="place-map-overlay">
                <span className="place-map-label">{translations.viewOnMap[lang]}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Individual exported components */
export function StoresSection({ lang }: Props) {
  return <PlacesList items={wineShops} label={translations.storesLabel[lang]} lang={lang} />;
}

export function RestaurantsSection({ lang }: Props) {
  return <PlacesList items={restaurants} label={translations.restaurantsLabel?.[lang] ?? "Restaurants"} lang={lang} />;
}

/* Combined Page Component */
export default function Page({ lang }: Props) {
  return (
    <div className="page">
      <StoresSection lang={lang} />
      <div className="divider">
        <span className="dl" />
        <span className="dl r" />
      </div>
      <RestaurantsSection lang={lang} />
    </div>
  );
}

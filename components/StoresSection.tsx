import Link from 'next/link';
import { Lang, translations } from '@/lib/translations';

interface Props {
  lang: Lang;
}

interface WineShop {
  name: string;
  address: { en: string; ka: string; ru: string };
  lat: number;
  lng: number;
  googleMapsUrl: string;
}

const wineShops: WineShop[] = [
  {
    name: "Dionysus Wine Bar & Shop",
    address: {
      en: "25 Aleksandr Pushkin St, Tbilisi",
      ka: "ალექსანდრე პუშკინის ქ. 25, თბილისი",
      ru: "ул. Пушкина 25, Тбилиси",
    },
    lat: 41.695547,
    lng: 44.802638,
    googleMapsUrl: "https://maps.google.com/?q=41.695547,44.802638",
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
    googleMapsUrl: "https://maps.google.com/?q=41.708030,44.781162",
  },
  {
    name: "Wine Tower",
    address: {
      en: "1 Jan Shardeni St, Tbilisi",
      ka: "იან შარდენის ქ. 1, თბილისი",
      ru: "ул. Жана Шардена 1, Тбилиси",
    },
    lat: 41.690604,
    lng: 44.807874,
    googleMapsUrl: "https://maps.google.com/?q=41.690604,44.807874",
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
    googleMapsUrl: "https://google.com/maps/place/wine+effect+tbilisi/data=!4m2!3m1!1s0x40440d1abe5b9fe5:0xd2fd9af1db8f7256?sa=X&ved=1t:242&ictx=111",
  },
];

export default function StoresSection({ lang }: Props) {
  return (
    <div className="stores-section">
      <div className="stores-label">{translations.storesLabel[lang]}</div>
      <div className="shop-list">
        {wineShops.map((shop, i) => (
          <div key={i} className="shop-card">
            {/* Info — left side */}
            <div className="shop-card-info">
              <div className="shop-card-name">{shop.name}</div>
              <div className="shop-card-address">
                <svg width="11" height="14" viewBox="0 0 12 15" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M6 1C3.79 1 2 2.79 2 5c0 3.5 4 9 4 9s4-5.5 4-9c0-2.21-1.79-4-4-4z" />
                  <circle cx="6" cy="5" r="1.5" />
                </svg>
                <span>{shop.address[lang] ?? shop.address.en}</span>
              </div>
            </div>
            {/* Map thumbnail — right side, whole area is a link */}
            <Link
              href={shop.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shop-map-wrap"
              aria-label={`Open ${shop.name} in Google Maps`}
            >
              <iframe
                src={`https://maps.google.com/maps?q=${shop.lat},${shop.lng}&z=16&output=embed`}
                className="shop-map-iframe"
                loading="lazy"
                title={shop.name}
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="shop-map-overlay">
                <span className="shop-map-label">{translations.viewOnMap[lang]}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

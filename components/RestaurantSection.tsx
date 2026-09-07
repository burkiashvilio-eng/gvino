import Link from 'next/link';
import { Lang, translations } from '@/lib/translations';

interface Props {
  lang: Lang;
}

interface Restaurant {
  name: string;
  address: { en: string; ka: string; ru: string };
  lat: number;
  lng: number;
  googleMapsUrl: string;
}

const restaurants: Restaurant[] = [
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

export default function RestaurantsSection({ lang }: Props) {
  return (
    <div className="stores-section">
      <div className="stores-label">{translations.restaurantsLabel?.[lang] ?? "Restaurants"}</div>
      <div className="shop-list">
        {restaurants.map((restaurant, i) => (
          <div key={i} className="shop-card">
            {/* Info — left side */}
            <div className="shop-card-info">
              <div className="shop-card-name">{restaurant.name}</div>
              <div className="shop-card-address">
                <svg width="11" height="14" viewBox="0 0 12 15" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M6 1C3.79 1 2 2.79 2 5c0 3.5 4 9 4 9s4-5.5 4-9c0-2.21-1.79-4-4-4z" />
                  <circle cx="6" cy="5" r="1.5" />
                </svg>
                <span>{restaurant.address[lang] ?? restaurant.address.en}</span>
              </div>
            </div>
            {/* Map thumbnail — right side, whole area is a link */}
            <Link
              href={restaurant.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shop-map-wrap"
              aria-label={`Open ${restaurant.name} in Google Maps`}
            >
              <iframe
                src={`https://maps.google.com/maps?q=${restaurant.lat},${restaurant.lng}&z=16&output=embed`}
                className="shop-map-iframe"
                loading="lazy"
                title={restaurant.name}
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

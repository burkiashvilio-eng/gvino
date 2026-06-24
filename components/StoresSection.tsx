import Link from 'next/link';
import { Lang, translations } from '@/lib/translations';

interface Props {
  lang: Lang;
}

interface WineShop {
  name: string;
  googleMapsUrl: string;
  appleMapsUrl: string;
  // If the address changes per language, you can make this an object like your translations
  address: {
    en: string;
    ka?: string; // Add keys based on what your Lang type supports (e.g., 'ka', 'ru')
    [key: string]: string | undefined;
  };
}

const wineShops: WineShop[] = [
  {
    name: "Dionysus Wine Bar & Shop",
    address: {
      en: "25 Aleksandr Pushkin St, Tbilisi",
      ka: "ალექსანდრე პუშკინის ქ. 25, თბილისი"
    },
    googleMapsUrl: "https://www.google.com/maps/place/Dionysus+Wine+Bar+%26+Shop/@41.6955364,44.802613,17z",
    appleMapsUrl: "https://maps.apple.com/?q=41.695547,44.802638"
  },
  {
    name: "Wine Not?",
    address: {
      en: "6 Vasil Petriashvili St, Tbilisi",
      ka: "ვასილ პეტრიაშვილის ქ. 6, თბილისი"
    },
    googleMapsUrl: "https://www.google.com/maps/place/Wine+Not%3F/@41.7080649,44.7811463,17z",
    appleMapsUrl: "https://maps.apple.com/?q=41.708030,44.781162"
  }
];

export default function StoresSection({ lang }: Props) {
  return (
    <div className="stores-section">
      <div className="stores-label">{translations.storesLabel[lang]}</div>
      
      {/* Grid container to display both shop cards cleanly side-by-side or stacked on mobile */}
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        {wineShops.map((shop, index) => (
          <div key={index} className="card flex flex-col justify-between p-6">
            <div>
              <div className="card-title text-xl font-semibold mb-2">{shop.name}</div>
              <p className="card-text text-neutral-600 text-sm mb-6">
                {shop.address[lang] || shop.address.en}
              </p>
            </div>
            
            {/* Map Interaction Buttons */}
            <div className="flex gap-3 mt-auto">
              <Link
                href={shop.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors"
              >
                Google Maps
              </Link>
              <Link
                href={shop.appleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-neutral-900 hover:bg-neutral-800 text-white font-medium py-2 px-4 rounded-lg text-sm transition-colors"
              >
                Apple Maps
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import type { ReactNode } from 'react';
import { Lang, translations } from '@/lib/translations';
import type { Place } from '@/lib/places';

interface Props {
  id?: string;
  lang: Lang;
  title: string;
  aside?: string;
  items: Place[];
  /** Optional extra cell rendered after the places (e.g. the featured wine). */
  footer?: ReactNode;
}

function PinIcon() {
  return (
    <svg width="11" height="14" viewBox="0 0 12 15" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M6 1C3.79 1 2 2.79 2 5c0 3.5 4 9 4 9s4-5.5 4-9c0-2.21-1.79-4-4-4z" />
      <circle cx="6" cy="5" r="1.5" />
    </svg>
  );
}

export default function PlacesSection({ id, lang, title, aside, items, footer }: Props) {
  return (
    <section className="section" id={id}>
      <div className="section-head">
        <h2 className="section-title">{title}</h2>
        {aside && <span className="eyebrow">{aside}</span>}
      </div>
      <div className="places">
        {items.map((place) => (
          <article key={place.name} className="place">
            <div className="place-info">
              <h3 className="place-name">{place.name}</h3>
              <p className="place-address">
                <PinIcon />
                <span>{place.address[lang]}</span>
              </p>
            </div>
            <a
              href={place.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="place-map"
              aria-label={translations.mapAria[lang].replace('{name}', place.name)}
            >
              <iframe
                src={`https://maps.google.com/maps?q=${place.lat},${place.lng}&z=16&output=embed`}
                loading="lazy"
                title={place.name}
                tabIndex={-1}
                aria-hidden="true"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <span className="place-map-label">{translations.viewOnMap[lang]}</span>
            </a>
          </article>
        ))}
        {footer}
      </div>
    </section>
  );
}

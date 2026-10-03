'use client';

import { useEffect, useState } from 'react';
import { Lang, translations, countLabel } from '@/lib/translations';
import { wineShops, restaurants } from '@/lib/places';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PlacesSection from '@/components/PlacesSection';
import FeaturedWine from '@/components/FeaturedWine';
import Footer from '@/components/Footer';

export default function Home() {
  const [lang, setLang] = useState<Lang>('ka');

  // Keep the document language in sync for screen readers and hyphenation.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="site">
      <div className="container">
        <Header lang={lang} onLangChange={setLang} />
        <Hero lang={lang} />
        <PlacesSection
          id="buy"
          lang={lang}
          title={translations.storesLabel[lang]}
          aside={countLabel(wineShops.length, 'shops', lang)}
          items={wineShops}
          footer={<FeaturedWine lang={lang} />}
        />
        <PlacesSection
          lang={lang}
          title={translations.restaurantsLabel[lang]}
          aside={countLabel(restaurants.length, 'restaurants', lang)}
          items={restaurants}
        />
        <Footer lang={lang} />
      </div>
    </div>
  );
}

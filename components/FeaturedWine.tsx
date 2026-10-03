import Image from 'next/image';
import { Lang, translations } from '@/lib/translations';
import label from '@/public/label-kisi.jpg';

interface Props {
  lang: Lang;
}

export default function FeaturedWine({ lang }: Props) {
  return (
    <div className="featured">
      <Image src={label} alt={translations.labelAlt[lang]} width={72} height={96} sizes="72px" />
      <div className="featured-body">
        <span className="eyebrow">{translations.askFor[lang]}</span>
        <span className="place-name">{translations.wineName[lang]}</span>
        <span className="featured-note">{translations.wineDescription[lang]}</span>
      </div>
    </div>
  );
}

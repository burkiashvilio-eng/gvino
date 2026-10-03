import Image from 'next/image';
import { Lang, translations } from '@/lib/translations';
import logo from '@/public/Logo.jpeg';
import InstagramIcon from './InstagramIcon';

interface Props {
  lang: Lang;
}

export default function Hero({ lang }: Props) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow">{translations.eyebrow[lang]}</span>
        <h1 className="hero-title">{translations.heroTitle[lang]}</h1>
        <p className="hero-text">{translations.heroText[lang]}</p>
        <div className="hero-actions">
          <a className="btn" href="#buy">
            {translations.storesLabel[lang]}
          </a>
          <a
            className="link-ghost"
            href="https://www.instagram.com/burkiashvili_wine_cellar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon size={16} />
            Instagram
          </a>
        </div>
      </div>
      <div className="hero-art">
        <Image src={logo} alt={translations.heroImageAlt[lang]} sizes="(min-width: 760px) 460px, 100vw" preload />
      </div>
    </section>
  );
}

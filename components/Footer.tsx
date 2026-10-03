import { Lang, translations } from '@/lib/translations';
import InstagramIcon from './InstagramIcon';

interface Props {
  lang: Lang;
}

export default function Footer({ lang }: Props) {
  return (
    <footer className="footer">
      <p>{translations.footer[lang]}</p>
      <a href="https://www.instagram.com/burkiashvili_wine_cellar/" target="_blank" rel="noopener noreferrer">
        <InstagramIcon size={14} />
        @burkiashvili_wine_cellar
      </a>
    </footer>
  );
}

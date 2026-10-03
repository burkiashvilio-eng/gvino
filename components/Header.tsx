import Image from 'next/image';
import { Lang, translations } from '@/lib/translations';
import LanguageBar from './LanguageBar';
import logo from '@/public/Logo.jpeg';

interface Props {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}

export default function Header({ lang, onLangChange }: Props) {
  return (
    <header className="header">
      <a href="#" className="brand" aria-label={translations.brand[lang]}>
        <Image src={logo} alt="" className="brand-logo" width={40} height={40} preload />
        <span className="brand-name">{translations.brand[lang]}</span>
      </a>
      <LanguageBar current={lang} onChange={onLangChange} />
    </header>
  );
}

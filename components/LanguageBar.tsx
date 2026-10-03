'use client';

import { Lang, LANGUAGES, translations } from '@/lib/translations';

interface Props {
  current: Lang;
  onChange: (lang: Lang) => void;
}

const LANG_NAMES: Record<Lang, string> = {
  ka: 'ქართული',
  en: 'English',
  ru: 'Русский',
};

export default function LanguageBar({ current, onChange }: Props) {
  return (
    <nav className="lang-bar" aria-label="Language">
      {LANGUAGES.map((lang) => (
        <button
          key={lang}
          type="button"
          lang={lang}
          className="lang-btn"
          aria-pressed={current === lang}
          aria-label={LANG_NAMES[lang]}
          onClick={() => onChange(lang)}
        >
          {translations.langButton[lang]}
        </button>
      ))}
    </nav>
  );
}

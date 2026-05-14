'use client';

import { Lang, LANGUAGES, translations } from '@/lib/translations';

interface Props {
  current: Lang;
  onChange: (lang: Lang) => void;
}

export default function LanguageBar({ current, onChange }: Props) {
  return (
    <div className="lang-bar">
      {LANGUAGES.map((lang) => (
        <button
          key={lang}
          className={`lang-btn${current === lang ? ' active' : ''}`}
          onClick={() => onChange(lang)}
        >
          {translations.langButton[lang]}
        </button>
      ))}
    </div>
  );
}

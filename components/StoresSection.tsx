import { Lang, translations } from '@/lib/translations';

interface Props {
  lang: Lang;
}

export default function StoresSection({ lang }: Props) {
  return (
    <div className="stores-section">
      <div className="stores-label">{translations.storesLabel[lang]}</div>
      <div className="card">
        <div className="card-title">{translations.cardTitle[lang]}</div>
        <p className="card-text">
          {translations.cardTextLine1[lang]}
          <br />
          {translations.cardTextLine2[lang]}
        </p>
      </div>
    </div>
  );
}

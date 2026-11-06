import { LANGS, useLang } from '../i18n/LanguageContext.jsx';

const NAMES = { en: 'English', es: 'Español' };

export default function LanguageToggle({ className = '' }) {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language / Idioma"
      className={`inline-flex items-center rounded-full bg-white/10 p-1 ring-1 ring-white/25 backdrop-blur ${className}`}
    >
      {LANGS.map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            title={NAMES[code]}
            aria-pressed={active}
            onClick={() => setLang(code)}
            className={`min-w-[2.5rem] rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition ${
              active ? 'bg-white text-forest-950 shadow' : 'text-white/80 hover:text-white'
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}

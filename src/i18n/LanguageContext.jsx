import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { en } from './en.js';
import { es } from './es.js';

// Supported languages. English is the base: any key missing in another
// dictionary falls back to English automatically.
export const LANGS = ['en', 'es'];
const STORAGE_KEY = 'ubira-lang';

const isPlainObject = (v) => v && typeof v === 'object' && !Array.isArray(v);

function deepMerge(base, override) {
  const out = { ...base };
  for (const [key, value] of Object.entries(override)) {
    out[key] = isPlainObject(value) && isPlainObject(base[key])
      ? deepMerge(base[key], value)
      : value;
  }
  return out;
}

const DICTS = { en, es: deepMerge(en, es) };

// Priority: ?lang= in the URL (useful for ads) > visitor's saved choice > browser language.
function detectInitialLang() {
  if (typeof window === 'undefined') return 'en';
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (LANGS.includes(fromUrl)) return fromUrl;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(stored)) return stored;
  } catch {
    /* storage unavailable (private mode etc.) */
  }
  const browser = (navigator.languages?.[0] || navigator.language || '').toLowerCase();
  return browser.startsWith('es') ? 'es' : 'en';
}

// Default value lets components render in English even outside a provider.
const LanguageContext = createContext({ lang: 'en', setLang: () => {}, t: DICTS.en });

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang);

  const setLang = useCallback((next) => {
    if (!LANGS.includes(next)) return;
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    // Keep a ?lang= param in sync so a refresh doesn't flip the language back.
    const url = new URL(window.location.href);
    if (url.searchParams.has('lang')) {
      url.searchParams.set('lang', next);
      window.history.replaceState(null, '', url);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang, t: DICTS[lang] }), [lang, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLang = () => useContext(LanguageContext);

// Merge translated texts over a service from data/services.js (prices, images and ids stay shared).
export const localizeService = (service, t) => ({ ...service, ...(t.services?.[service.id] ?? {}) });

export function setMetaDescription(text) {
  const el = document.querySelector('meta[name="description"]');
  if (el) el.setAttribute('content', text);
}

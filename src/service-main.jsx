import React from 'react';
import { createRoot } from 'react-dom/client';
import { services } from './data/services.js';
import ServicePage from './ServicePage.jsx';
import { LanguageProvider, useLang } from './i18n/LanguageContext.jsx';
import './index.css';

const pathname = window.location.pathname.replace(/^\//, '').replace(/\/$/, '');
const slug = pathname && pathname !== 'service'
  ? pathname
  : new URLSearchParams(window.location.search).get('slug') ?? '';
const service = services.find((s) => s.id === slug);

function NotFound() {
  const { t } = useLang();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-sand-50 text-forest-950">
      <p className="text-lg font-semibold">{t.servicePage.notFound}</p>
      <a href="/" className="btn-primary">{t.servicePage.backHome}</a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      {service ? <ServicePage service={service} /> : <NotFound />}
    </LanguageProvider>
  </React.StrictMode>
);

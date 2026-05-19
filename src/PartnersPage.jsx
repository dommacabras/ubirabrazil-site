import { lazy, Suspense } from 'react';
import { ArrowLeft } from 'lucide-react';
import Partners from './components/Partners.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import { SITE } from './config/site.js';

const Footer = lazy(() => import('./components/Footer.jsx'));
const SectionFallback = () => <div className="h-40" aria-hidden />;

export default function PartnersPage() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 bg-forest-950/85 backdrop-blur-md shadow-lg">
        <nav className="container-app flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-white">
            <img src="/favicon.svg" alt="" className="h-8 w-8" />
            <span className="font-display text-lg font-bold tracking-wide">
              {SITE.brand}
            </span>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao site
          </a>
        </nav>
      </header>
      <main className="pt-16">
        <Partners />
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      <WhatsAppFloat />
    </>
  );
}

import { lazy, Suspense, useEffect, useState } from 'react';
import { useLang, setMetaDescription } from './i18n/LanguageContext.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';
import CustomizeModal from './components/CustomizeModal.jsx';

// Below-the-fold sections are code-split for a faster initial paint.
const Gallery = lazy(() => import('./components/Gallery.jsx'));
const Testimonials = lazy(() => import('./components/Testimonials.jsx'));
const CryptoSection = lazy(() => import('./components/CryptoSection.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

const SectionFallback = () => <div className="h-40" aria-hidden />;

export default function App() {
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    document.title = t.meta.homeTitle;
    setMetaDescription(t.meta.homeDescription);
  }, [t]);

  return (
    <>
      <Navbar />
      <main>
        <Hero onOpenCustomize={() => setCustomizeOpen(true)} />
        <About />
        <Services onOpenCustomize={() => setCustomizeOpen(true)} />
        <Suspense fallback={<SectionFallback />}>
          <Gallery />
          <Testimonials />
          <CryptoSection />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
      <WhatsAppFloat />
      <CustomizeModal open={customizeOpen} onClose={() => setCustomizeOpen(false)} />
    </>
  );
}

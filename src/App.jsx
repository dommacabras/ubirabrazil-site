import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';

// Below-the-fold sections are code-split for a faster initial paint.
const Gallery = lazy(() => import('./components/Gallery.jsx'));
const Testimonials = lazy(() => import('./components/Testimonials.jsx'));
const CryptoSection = lazy(() => import('./components/CryptoSection.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));

const SectionFallback = () => <div className="h-40" aria-hidden />;

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
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
    </>
  );
}

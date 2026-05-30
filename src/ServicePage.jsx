import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Users, Check, MessageCircle, Bitcoin } from 'lucide-react';
import { SITE, waLink, trackContact } from './config/site.js';
import Footer from './components/Footer.jsx';
import WhatsAppFloat from './components/WhatsAppFloat.jsx';

export default function ServicePage({ service }) {
  useEffect(() => {
    document.title = `${service.title} — ${SITE.brand}`;
    const setMeta = (prop, val) => {
      const el = document.querySelector(`meta[property="${prop}"]`);
      if (el) el.setAttribute('content', val);
    };
    setMeta('og:title', `${service.title} — ${SITE.brand}`);
    setMeta('og:description', service.longDescription);
    setMeta('og:image', `https://ubirabrazil.com${service.image}`);
  }, [service]);

  return (
    <div className="flex min-h-screen flex-col bg-sand-50">
      {/* Slim navbar */}
      <header className="sticky top-0 z-40 bg-forest-950/90 backdrop-blur-md">
        <div className="container-app flex h-16 items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-white/75 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">All Experiences</span>
          </a>
          <a href="/" className="flex items-center gap-2 text-white">
            <img src="/favicon.svg" alt="" className="h-7 w-7" />
            <span className="font-display text-base font-bold">{SITE.brand}</span>
          </a>
          <a
            href={waLink(service.name)}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackContact(service.id)}
            className="btn-primary hidden py-2 text-sm sm:inline-flex"
          >
            Book Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[300px] sm:h-[60vh]">
        <img
          src={service.image}
          alt={service.name}
          fetchpriority="high"
          className={`h-full w-full object-cover ${service.imagePosition ?? ''}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/30 to-forest-950/10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 container-app p-6 sm:p-10"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            {service.price || service.priceRange}
          </p>
          <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-5xl">
            {service.title}
          </h1>
        </motion.div>
      </div>

      {/* Content */}
      <main className="container-app flex-1 py-10 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="mx-auto max-w-2xl"
        >
          {/* Info pills */}
          <div className="mb-8 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-2xl border border-black/8 bg-white px-4 py-2.5 text-sm shadow-sm">
              <Clock className="h-4 w-4 text-ocean-700" />
              <span className="text-forest-800">{service.duration}</span>
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-black/8 bg-white px-4 py-2.5 text-sm shadow-sm">
              <Users className="h-4 w-4 text-ocean-700" />
              <span className="text-forest-800">{service.groupSize}</span>
            </div>
          </div>

          {/* Description */}
          <p className="mb-10 text-base leading-relaxed text-forest-800 sm:text-lg">
            {service.longDescription}
          </p>

          {/* What's included */}
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-ocean-700">
            What's included
          </h2>
          <ul className="mb-12 space-y-3">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-forest-800">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-forest-100">
                  <Check className="h-3 w-3 text-forest-700" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          {/* Mobile CTAs */}
          <div className="flex flex-col gap-3 sm:hidden">
            <a
              href={waLink(service.name)}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackContact(service.id)}
              className="btn-primary bg-[#25D366] shadow-emerald-700/30 hover:bg-[#1eb558]"
            >
              <MessageCircle className="h-4 w-4" />
              Book via WhatsApp
            </a>
            <a
              href={SITE.coinbaseCheckoutUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <Bitcoin className="h-4 w-4" />
              Pay with Crypto
            </a>
          </div>
        </motion.div>
      </main>

      {/* Sticky CTA bar — desktop */}
      <div className="sticky bottom-0 z-30 hidden border-t border-black/8 bg-white/95 py-4 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur-sm sm:block">
        <div className="container-app flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-forest-600">
              {service.name}
            </p>
            <p className="font-display text-lg font-bold text-forest-950">
              {service.price || service.priceRange}
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href={waLink(service.name)}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackContact(service.id)}
              className="btn-primary bg-[#25D366] shadow-emerald-700/30 hover:bg-[#1eb558]"
            >
              <MessageCircle className="h-4 w-4" />
              Book via WhatsApp
            </a>
            <a
              href={SITE.coinbaseCheckoutUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <Bitcoin className="h-4 w-4" />
              Pay with Crypto
            </a>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

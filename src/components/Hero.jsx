import { motion } from 'framer-motion';
import { ChevronDown, Bitcoin, Sliders } from 'lucide-react';
import { waLink, trackContact } from '../config/site.js';
import { useLang } from '../i18n/LanguageContext.jsx';

export default function Hero({ onOpenCustomize }) {
  const { t } = useLang();
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden text-white">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero.jpg"
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/50 via-forest-950/40 to-forest-950/85" />
      </div>

      <div className="container-app flex min-h-[100svh] flex-col justify-end pb-20 pt-32 sm:justify-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur"
        >
          <Bitcoin className="h-3.5 w-3.5 text-ocean-300" />
          {t.hero.badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          {t.hero.titleBefore}<span className="text-ocean-300">{t.hero.titleHighlight}</span>{t.hero.titleAfter}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base font-bold text-white/85 sm:text-lg"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
        >
          <a href="#services" className="btn-primary text-base">
            {t.hero.explore}
          </a>
          <button
            onClick={onOpenCustomize}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
          >
            <Sliders className="h-4 w-4" />
            {t.common.personalizeTrip}
          </button>
          <a
            href={waLink(t.wa.tailoredTrip, t.wa.greeting)}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackContact('hero-concierge')}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            {t.hero.concierge}
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80"
          aria-label={t.hero.scrollDown}
        >
          <ChevronDown className="h-7 w-7 animate-float" />
        </motion.a>
      </div>
    </section>
  );
}

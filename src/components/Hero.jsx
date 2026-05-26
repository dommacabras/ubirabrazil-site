import { motion } from 'framer-motion';
import { ChevronDown, Bitcoin } from 'lucide-react';
import { SITE, waLink, trackContact } from '../config/site.js';

export default function Hero() {
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
          Pay in BRL · USD · Crypto
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          The island, <span className="text-ocean-300">curated</span> for you.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-2xl text-base font-bold text-white/85 sm:text-lg"
        >
          Premium adventures across Santa Catarina — kayak, surf, hiking,
          private boat charters and more. Handpicked guides, seamless booking,
          payment in any currency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row"
        >
          <a href="#services" className="btn-primary text-base">
            Explore Experiences
          </a>
          <a
            href={waLink('a tailored Floripa trip')}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackContact('hero-concierge')}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Talk to a Concierge
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-7 w-7 animate-float" />
        </motion.a>
      </div>
    </section>
  );
}

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SITE } from '../config/site.js';
import { useLang } from '../i18n/LanguageContext.jsx';
import LanguageToggle from './LanguageToggle.jsx';

const NAV_LINKS = [
  { href: '#about', key: 'about' },
  { href: '#services', key: 'services' },
  { href: '#gallery', key: 'gallery' },
  { href: '#testimonials', key: 'reviews' },
  { href: '#crypto', key: 'crypto' },
  { href: '/parceiros', key: 'partners', newTab: true },
  { href: '#contact', key: 'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-forest-950/85 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-app flex h-16 items-center justify-between">
        <a href="#top" className="flex shrink-0 items-center gap-2 text-white">
          <img src="/favicon.svg" alt="" className="h-8 w-8" />
          <span className="whitespace-nowrap font-display text-lg font-bold tracking-wide">{SITE.brand}</span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="btn-ghost"
                {...(l.newTab && { target: '_blank', rel: 'noreferrer' })}
              >
                {t.nav[l.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />

          <a href="#services" className="hidden whitespace-nowrap btn-primary md:inline-flex">
            {t.common.bookNow}
          </a>

          <button
            onClick={() => setOpen(true)}
            className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
            aria-label={t.nav.openMenu}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-forest-950/95 backdrop-blur-md xl:hidden"
          >
            <div className="flex items-center justify-between px-5 h-16">
              <span className="font-display text-lg font-bold text-white">{SITE.brand}</span>
              <div className="flex items-center gap-2">
                <LanguageToggle />
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
                  aria-label={t.nav.closeMenu}
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
              }}
              className="flex flex-col items-center gap-3 pt-8"
            >
              {NAV_LINKS.map((l) => (
                <motion.li
                  key={l.href}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl font-display font-semibold text-white"
                    {...(l.newTab && { target: '_blank', rel: 'noreferrer' })}
                  >
                    {t.nav[l.key]}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-6"
              >
                <a
                  href="#services"
                  onClick={() => setOpen(false)}
                  className="btn-primary text-base"
                >
                  {t.common.bookNow}
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

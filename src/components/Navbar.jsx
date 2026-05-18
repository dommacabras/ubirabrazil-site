import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SITE } from '../config/site.js';

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#crypto', label: 'Crypto' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

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
        <a href="#top" className="flex items-center gap-2 text-white">
          <img src="/favicon.svg" alt="" className="h-8 w-8" />
          <span className="font-display text-lg font-bold tracking-wide">{SITE.brand}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="btn-ghost">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#services" className="hidden btn-primary md:inline-flex">
          Book Now
        </a>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-forest-950/95 backdrop-blur-md md:hidden"
          >
            <div className="flex items-center justify-between px-5 h-16">
              <span className="font-display text-lg font-bold text-white">{SITE.brand}</span>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
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
                  >
                    {l.label}
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
                  Book Now
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

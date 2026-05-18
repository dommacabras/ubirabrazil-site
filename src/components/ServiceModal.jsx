import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Clock, Users, MessageCircle, Bitcoin } from 'lucide-react';
import { SITE, waLink } from '../config/site.js';

export default function ServiceModal({ service, onClose }) {
  // Lock body scroll while modal is open and close on Esc
  useEffect(() => {
    if (!service) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-end justify-center bg-forest-950/70 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={service.name}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 240, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
          >
            <div className="relative h-56 sm:h-72">
              <img
                src={service.image}
                alt={service.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/95 text-forest-900 shadow hover:bg-white"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-4 left-5 right-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  {service.price || service.priceRange}
                </p>
                <h3 className="font-display text-2xl font-bold sm:text-3xl">
                  {service.title}
                </h3>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-6 sm:p-7">
              <p className="text-forest-800">{service.longDescription}</p>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 rounded-2xl bg-sand-50 p-3">
                  <Clock className="h-4 w-4 text-ocean-700" /> {service.duration}
                </div>
                <div className="flex items-center gap-2 rounded-2xl bg-sand-50 p-3">
                  <Users className="h-4 w-4 text-ocean-700" /> {service.groupSize}
                </div>
              </div>

              <h4 className="mt-6 mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ocean-700">
                What’s included
              </h4>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-forest-800">
                    <Check className="mt-0.5 h-4 w-4 text-forest-600" /> {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sticky bottom-0 border-t border-black/5 bg-white/95 p-4 backdrop-blur sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={waLink(service.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary flex-1 bg-[#25D366] shadow-emerald-700/30 hover:bg-[#1eb558]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Book via WhatsApp
                </a>
                <a
                  href={SITE.coinbaseCheckoutUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary flex-1"
                >
                  <Bitcoin className="h-4 w-4" />
                  Pay with Crypto
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

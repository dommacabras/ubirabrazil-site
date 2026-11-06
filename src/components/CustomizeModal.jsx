import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Users, MessageCircle, Bitcoin, Calendar } from 'lucide-react';
import { services } from '../data/services.js';
import { SITE, trackContact } from '../config/site.js';
import { useLang, localizeService } from '../i18n/LanguageContext.jsx';

function Counter({ value, onChange, min = 1, max = 30 }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="grid h-8 w-8 place-items-center rounded-full border border-forest-200 text-forest-700 transition hover:bg-sand-100 disabled:opacity-30"
      >
        <Minus className="h-3.5 w-3.5" />
      </button>
      <span className="w-7 text-center text-base font-semibold text-forest-900">{value}</span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="grid h-8 w-8 place-items-center rounded-full border border-forest-200 text-forest-700 transition hover:bg-sand-100 disabled:opacity-30"
      >
        <Plus className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

function lineTotal(service, people, bikeDays, nights) {
  const usd = service.priceUSD;
  if (usd == null) return null;
  if (service.id === 'motorcycle') return usd * bikeDays;
  if (service.id === 'stay') return usd * people * nights;
  return usd * people;
}

function priceLabel(service, c) {
  if (service.priceUSD == null) return '—';
  if (service.id === 'motorcycle') return `US$ ${service.priceUSD}${c.unitDay}`;
  if (service.id === 'stay') return `US$ ${service.priceUSD}${c.unitPersonNight}`;
  return `US$ ${service.priceUSD}${c.unitPerson}`;
}

// `m` = t.customize.waMessage from the active language dictionary.
function buildWaUrl(selected, people, bikeDays, nights, whatsappNumber, m) {
  const lines = selected.map((s) => {
    const t = lineTotal(s, people, bikeDays, nights);
    if (s.id === 'motorcycle') return m.bikeLine(s.name, bikeDays, s.priceUSD, t);
    if (s.id === 'stay') return m.stayLine(s.name, people, nights, s.priceUSD, t);
    if (t == null) return m.quoteLine(s.name);
    return m.peopleLine(s.name, people, s.priceUSD, t);
  });

  const total = selected.reduce((acc, s) => {
    const t = lineTotal(s, people, bikeDays, nights);
    return t != null ? acc + t : acc;
  }, 0);

  const msg = [
    m.intro,
    ...lines,
    m.group(people),
    total > 0 ? m.total(total) : '',
    m.outro,
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
}

export default function CustomizeModal({ open, onClose }) {
  const [selected, setSelected] = useState(new Set());
  const [people, setPeople] = useState(2);
  const [bikeDays, setBikeDays] = useState(3);
  const [nights, setNights] = useState(2);
  const { t: tr } = useLang();
  const c = tr.customize;
  const localServices = services.map((s) => localizeService(s, tr));

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  const toggle = (id) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const selectedServices = localServices.filter((s) => selected.has(s.id));
  const hasBike = selected.has('motorcycle');
  const hasStay = selected.has('stay');

  const total = selectedServices.reduce((acc, s) => {
    const t = lineTotal(s, people, bikeDays, nights);
    return t != null ? acc + t : acc;
  }, 0);

  const hasQuoteItem = selectedServices.some((s) => s.priceUSD == null);

  return (
    <AnimatePresence>
      {open && (
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
            aria-label={c.aria}
            initial={{ y: 64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 64, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 240, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-3xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-black/5 px-6 py-4">
              <div>
                <h2 className="font-display text-xl font-bold text-forest-900">
                  {c.title}
                </h2>
                <p className="text-xs text-forest-500">{c.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                aria-label={tr.common.close}
                className="grid h-9 w-9 place-items-center rounded-full bg-sand-100 text-forest-700 transition hover:bg-sand-200"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-black/5 bg-sand-50/60 px-6 py-3">
              <div className="flex items-center gap-3">
                <Users className="h-4 w-4 text-ocean-700" />
                <span className="text-sm font-medium text-forest-700">{c.people}</span>
                <Counter value={people} onChange={setPeople} min={1} max={20} />
              </div>
              {hasBike && (
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-ocean-700" />
                  <span className="text-sm font-medium text-forest-700">{c.bikeDays}</span>
                  <Counter value={bikeDays} onChange={setBikeDays} min={3} max={30} />
                </div>
              )}
              {hasStay && (
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-ocean-700" />
                  <span className="text-sm font-medium text-forest-700">{c.nights}</span>
                  <Counter value={nights} onChange={setNights} min={1} max={30} />
                </div>
              )}
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto">
              {/* Service checklist */}
              <div className="px-6 pt-5 pb-4">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ocean-700">
                  {c.selectExperiences}
                </p>
                <div className="space-y-2">
                  {localServices.map((s) => {
                    const checked = selected.has(s.id);
                    return (
                      <label
                        key={s.id}
                        className={`flex cursor-pointer select-none items-center gap-3 rounded-xl border px-4 py-3 transition ${
                          checked
                            ? 'border-ocean-400 bg-ocean-50'
                            : 'border-forest-100 hover:border-forest-200 hover:bg-sand-50/80'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggle(s.id)}
                          className="h-4 w-4 accent-ocean-600"
                        />
                        <span className="flex-1 text-sm font-medium text-forest-900">{s.name}</span>
                        <span className="text-xs font-medium text-forest-500">{priceLabel(s, c)}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Price table */}
              {selectedServices.length > 0 && (
                <div className="border-t border-black/5 px-6 pt-4 pb-6">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ocean-700">
                    {c.yourPackage}
                  </p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-black/8 text-left">
                        <th className="pb-2 text-xs font-medium text-forest-500">{c.colExperience}</th>
                        <th className="pb-2 text-xs font-medium text-forest-500">{c.colBreakdown}</th>
                        <th className="pb-2 text-right text-xs font-medium text-forest-500">{c.colTotal}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedServices.map((s) => {
                        const t = lineTotal(s, people, bikeDays, nights);
                        let breakdown = '—';
                        if (s.id === 'motorcycle') breakdown = `${bikeDays}${c.abbrDays} × US$${s.priceUSD}`;
                        else if (s.id === 'stay') breakdown = `${people}${c.abbrPeople} × ${nights}${c.abbrNights} × US$${s.priceUSD}`;
                        else if (s.priceUSD != null) breakdown = `${people} × US$${s.priceUSD}`;

                        return (
                          <tr key={s.id} className="border-b border-black/5">
                            <td className="py-2.5 font-medium text-forest-900">{s.name}</td>
                            <td className="py-2.5 text-forest-500">{breakdown}</td>
                            <td className="py-2.5 text-right font-semibold text-forest-900">
                              {t != null ? (
                                `US$ ${t}`
                              ) : (
                                <span className="text-xs italic text-forest-400">{c.quote}</span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={2} className="pt-3 font-bold text-forest-900">
                          {c.estimatedTotal}
                        </td>
                        <td className="pt-3 text-right text-base font-bold text-ocean-700">
                          US$ {total}
                          {hasQuoteItem && (
                            <span className="ml-1 text-xs font-normal text-forest-400">{c.extras}</span>
                          )}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              )}
            </div>

            {/* Footer CTA */}
            <div className="border-t border-black/5 bg-white/95 p-4 backdrop-blur sm:p-5">
              {selectedServices.length === 0 ? (
                <p className="text-center text-sm text-forest-400">
                  {c.emptyHint}
                </p>
              ) : (
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={buildWaUrl(selectedServices, people, bikeDays, nights, SITE.whatsappNumber, c.waMessage)}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => trackContact('customize-modal')}
                    className="btn-primary flex-1 bg-[#25D366] shadow-emerald-700/30 hover:bg-[#1eb558]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {c.sendToWhatsApp}
                  </a>
                  <a
                    href={SITE.coinbaseCheckoutUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary flex-1"
                  >
                    <Bitcoin className="h-4 w-4" />
                    {tr.common.payWithCrypto}
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

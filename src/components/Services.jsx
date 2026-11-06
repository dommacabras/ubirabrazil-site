import { motion } from 'framer-motion';
import { Sliders } from 'lucide-react';
import { services } from '../data/services.js';
import ServiceCard from './ServiceCard.jsx';
import { useLang, localizeService } from '../i18n/LanguageContext.jsx';

export default function Services({ onOpenCustomize }) {
  const { t } = useLang();
  return (
    <section id="services" className="bg-sand-100/70 py-20 sm:py-28">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-eyebrow">{t.servicesSection.eyebrow}</span>
          <h2 className="section-title">{t.servicesSection.title}</h2>
          <p className="mt-4 text-forest-700">{t.servicesSection.text}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={localizeService(s, t)} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={onOpenCustomize}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-forest-700 px-8 py-3 text-sm font-semibold text-forest-700 transition hover:bg-forest-700/10"
          >
            <Sliders className="h-4 w-4" />
            {t.common.personalizeTrip}
          </button>
        </div>
      </div>
    </section>
  );
}

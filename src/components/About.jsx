import { motion } from 'framer-motion';
import { Globe2, Shield, Sparkles } from 'lucide-react';
import { useLang } from '../i18n/LanguageContext.jsx';

// Texts for each pillar live in the i18n dictionaries (t.about.pillars), same order.
const PILLAR_ICONS = [Globe2, Shield, Sparkles];

export default function About() {
  const { t } = useLang();
  const PILLARS = t.about.pillars.map((p, i) => ({ ...p, icon: PILLAR_ICONS[i] }));

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-app grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t.about.eyebrow}</span>
          <h2 className="section-title">
            {t.about.titleLine1}<br />{t.about.titleLine2}
          </h2>
          <p className="mt-5 max-w-xl text-lg font-bold leading-relaxed text-forest-800">
            {t.about.body}
          </p>
          <a href="#services" className="btn-secondary mt-8">
            {t.about.cta}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-4"
        >
          {PILLARS.map((p) => (
            <div key={p.title} className="card flex items-start gap-4 p-5 sm:p-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ocean-100 text-ocean-700">
                <p.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-forest-900">{p.title}</h3>
                <p className="mt-1 text-sm text-forest-700">{p.text}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

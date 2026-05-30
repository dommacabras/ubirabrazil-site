import { motion } from 'framer-motion';
import { services } from '../data/services.js';
import ServiceCard from './ServiceCard.jsx';

export default function Services() {
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
          <span className="section-eyebrow">Our Experiences</span>
          <h2 className="section-title">Ten ways to fall for the island.</h2>
          <p className="mt-4 text-forest-700">
            Click any card to see full details, pricing and booking — WhatsApp or
            crypto, your call.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ service, index = 0 }) {
  const Icon = Icons[service.icon] || Icons.Compass;

  return (
    <motion.a
      href={`/${service.id}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group card overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-ocean-500"
      aria-label={`View details for ${service.name}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${service.imagePosition ?? ''}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-forest-950/10 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-forest-900 backdrop-blur">
          <Icon className="h-3.5 w-3.5 text-ocean-700" /> {service.price || service.priceRange}
        </div>
        <div className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-forest-900 transition group-hover:bg-ocean-600 group-hover:text-white">
          <ArrowUpRight className="h-4 w-4" />
        </div>
        <h3 className="absolute bottom-4 left-4 right-4 font-display text-xl font-bold text-white drop-shadow">
          {service.name}
        </h3>
      </div>
      <div className="p-5">
        <p className="text-sm text-forest-700">{service.description}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ocean-700">
          {service.cta} <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </motion.a>
  );
}

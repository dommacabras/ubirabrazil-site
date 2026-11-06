import { motion } from 'framer-motion';
import { gallery } from '../data/gallery.js';
import { useLang } from '../i18n/LanguageContext.jsx';

export default function Gallery() {
  const { t } = useLang();
  return (
    <section id="gallery" className="py-20 sm:py-28">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-eyebrow">{t.gallery.eyebrow}</span>
          <h2 className="section-title">{t.gallery.title}</h2>
        </motion.div>

        <div className="mt-12 columns-2 gap-4 sm:columns-3 lg:columns-4 [column-fill:_balance]">
          {gallery.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              className="mb-4 overflow-hidden rounded-2xl break-inside-avoid"
            >
              <img
                src={img.src}
                alt={t.gallery.alts[img.src] ?? img.alt}
                loading="lazy"
                className="block w-full object-cover transition duration-700 hover:scale-[1.03]"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

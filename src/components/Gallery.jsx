import { motion } from 'framer-motion';
import { gallery } from '../data/gallery.js';

export default function Gallery() {
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
          <span className="section-eyebrow">Gallery</span>
          <h2 className="section-title">Moments from the island.</h2>
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
                alt={img.alt}
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

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials.js';

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  // Auto-advance every 6s; pause on hover/focus handled via mouse handlers below
  useEffect(() => {
    timer.current = setInterval(next, 6000);
    return () => clearInterval(timer.current);
  }, []);

  const pause = () => clearInterval(timer.current);
  const resume = () => {
    clearInterval(timer.current);
    timer.current = setInterval(next, 6000);
  };

  const t = testimonials[idx];

  return (
    <section
      id="testimonials"
      className="bg-forest-950 py-20 text-white sm:py-28"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="container-app text-center">
        <span className="section-eyebrow !text-ocean-300">Travelers</span>
        <h2 className="section-title !text-white">What our guests say.</h2>

        <div className="relative mx-auto mt-12 max-w-2xl">
          <Quote className="mx-auto h-8 w-8 text-ocean-300/60" />

          <AnimatePresence mode="wait">
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="mt-5"
            >
              <p className="text-lg leading-relaxed text-white/90 sm:text-xl">
                “{t.text}”
              </p>
              <div className="mt-6 flex items-center justify-center gap-1 text-amber-300">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 font-semibold">{t.name}</p>
              <p className="text-sm text-white/60">{t.country}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === idx ? 'w-6 bg-ocean-300' : 'w-2 bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

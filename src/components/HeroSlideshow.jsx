import { useEffect, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

const INTERVAL_MS = 5000;

// Background slideshow for the service-page hero.
// - fit="cover" (default): photo fills the hero and is cropped to fit — the original
//   single-image behavior, kept for services without `heroImages`.
// - fit="contain": the whole photo is shown, never cropped or stretched; the leftover
//   space is filled with a blurred, darkened copy of the same photo.
// `images` items are either a path string or { src, position } (position = CSS
// object-position, only used with fit="cover").
export default function HeroSlideshow({ images: rawImages, alt, fit = 'cover', positionClass = '' }) {
  const images = rawImages.map((img) => (typeof img === 'string' ? { src: img } : img));
  const [index, setIndex] = useState(0);
  // How many slides are mounted: starts with the current + next, grows as the show advances,
  // so the page only downloads photos shortly before they appear.
  const [mounted, setMounted] = useState(Math.min(2, images.length));
  const reduceMotion = useReducedMotion();
  const multi = images.length > 1;

  useEffect(() => {
    if (!multi || reduceMotion) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), INTERVAL_MS);
    return () => clearInterval(id);
  }, [multi, reduceMotion, images.length]);

  useEffect(() => {
    setMounted((m) => Math.max(m, Math.min(index + 2, images.length)));
  }, [index, images.length]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-forest-950">
      {images.slice(0, mounted).map(({ src, position }, i) => (
        <div
          key={src}
          aria-hidden={i === 0 ? undefined : true}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {fit === 'contain' && (
            <img
              src={src}
              alt=""
              aria-hidden="true"
              decoding="async"
              className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl brightness-[0.55]"
            />
          )}
          <img
            src={src}
            alt={i === 0 ? alt : ''}
            fetchpriority={i === 0 ? 'high' : 'low'}
            decoding="async"
            style={fit === 'cover' && position ? { objectPosition: position } : undefined}
            className={`absolute inset-0 h-full w-full ${
              fit === 'contain' ? 'object-contain' : `object-cover ${positionClass}`
            }`}
          />
        </div>
      ))}
    </div>
  );
}

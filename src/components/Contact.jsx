import { motion } from 'framer-motion';
import { MessageCircle, Mail, Instagram, MapPin } from 'lucide-react';
import { SITE, waLink } from '../config/site.js';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="section-eyebrow">Contact</span>
          <h2 className="section-title">Ready when you are.</h2>
          <p className="mt-4 text-forest-700">
            WhatsApp is the fastest way — we typically reply in under an hour.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          <a
            href={waLink('a custom itinerary')}
            target="_blank"
            rel="noreferrer"
            className="card group flex items-center gap-4 p-6 hover:-translate-y-1"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#25D366]/10 text-[#1eb558]">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-forest-600">
                WhatsApp
              </p>
              <p className="font-semibold text-forest-900">Chat with us</p>
            </div>
          </a>

          <a
            href={`mailto:${SITE.email}`}
            className="card group flex items-center gap-4 p-6 hover:-translate-y-1"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ocean-100 text-ocean-700">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-forest-600">
                Email
              </p>
              <p className="font-semibold text-forest-900">{SITE.email}</p>
            </div>
          </a>

          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="card group flex items-center gap-4 p-6 hover:-translate-y-1"
          >
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-sand-100 text-sand-700">
              <Instagram className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-forest-600">
                Instagram
              </p>
              <p className="font-semibold text-forest-900">Follow the journey</p>
            </div>
          </a>

          <div className="card flex items-center gap-4 p-6">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-100 text-forest-700">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-forest-600">
                Based in
              </p>
              <p className="font-semibold text-forest-900">{SITE.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

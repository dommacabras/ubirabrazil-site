import { Instagram, Mail, MapPin } from 'lucide-react';
import { SITE } from '../config/site.js';

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-sand-100">
      <div className="container-app grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <img src="/favicon.svg" alt="" className="h-8 w-8" />
            <span className="font-display text-lg font-bold">{SITE.brand}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-sand-200/80">{SITE.tagline}</p>
        </div>

        <div className="text-sm">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ocean-300">
            Contact
          </h4>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-ocean-300" /> {SITE.location}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-ocean-300" />
              <a href={`mailto:${SITE.email}`} className="hover:underline">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <Instagram className="mt-0.5 h-4 w-4 text-ocean-300" />
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ocean-300">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#gallery" className="hover:underline">Gallery</a></li>
            <li><a href="#crypto" className="hover:underline">Pay with Crypto</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-sand-200/60">
        © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
      </div>
    </footer>
  );
}

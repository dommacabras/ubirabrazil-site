import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { waLink, trackContact } from '../config/site.js';

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink('your services')}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackContact('whatsapp-float')}
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 200, damping: 18 }}
      className="fixed bottom-5 right-5 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-900/30 ring-4 ring-white/40 hover:scale-105 transition"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={2.2} />
      <span className="sr-only">WhatsApp</span>
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" aria-hidden />
    </motion.a>
  );
}

import { motion } from 'framer-motion';
import { Globe2, Shield, Sparkles } from 'lucide-react';

const PILLARS = [
  {
    icon: Globe2,
    title: 'International first',
    text: 'For explorers who crave more than a trip — a story to tell from Florianópolis, Brazil.',
  },
  {
    icon: Shield,
    title: 'Curated & vetted',
    text: 'Every guide, villa and operator is hand-picked. No tourist traps.',
  },
  {
    icon: Sparkles,
    title: 'Crypto-native',
    text: 'BTC, ETH, USDT accepted. Fixed-price checkout, no FX surprises.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-app grid gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">About us</span>
          <h2 className="section-title">
            We don’t sell tours.<br />We reveal the Floripa that few know.
          </h2>
          <p className="mt-5 max-w-xl text-lg font-bold leading-relaxed text-forest-800">
            We’re a small team of locals obsessed with two things: the wild
            beauty of Santa Catarina and making it effortless for international
            travelers to experience it. Pick from our nine signature
            experiences — or let us build the whole week for you.
          </p>
          <a href="#services" className="btn-secondary mt-8">
            See what we do
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

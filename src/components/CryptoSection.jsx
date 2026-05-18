import { motion } from 'framer-motion';
import { Bitcoin, ShieldCheck, Zap, Globe } from 'lucide-react';
import { SITE } from '../config/site.js';

const PERKS = [
  {
    icon: Zap,
    title: 'Instant checkout',
    text: 'Pay in seconds — no bank hours, no FX form, no IOF surprises.',
  },
  {
    icon: ShieldCheck,
    title: 'Price locked in',
    text: 'Quoted in USD/EUR. Converted automatically on settlement.',
  },
  {
    icon: Globe,
    title: 'Global by design',
    text: 'Built for nomads and crypto-native travelers. Pay from anywhere.',
  },
];

export default function CryptoSection() {
  return (
    <section
      id="crypto"
      className="relative overflow-hidden bg-gradient-to-br from-ocean-950 via-ocean-900 to-forest-950 py-20 text-white sm:py-28"
    >
      {/* Decorative grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-app relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-eyebrow !text-ocean-300">Payment</span>
            <h2 className="section-title !text-white">
              Pay in Bitcoin, Ethereum or USDT.
            </h2>
            <p className="mt-5 max-w-xl text-lg font-bold text-white/85">
              We were the first operator in Santa Catarina to accept crypto
              natively. We believe in freedom. Powered by Coinbase Commerce —
              secure, regulated, and instantly settled.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {SITE.acceptedCryptos.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold ring-1 ring-white/20"
                >
                  <Bitcoin className="h-3.5 w-3.5 text-ocean-300" /> {c}
                </span>
              ))}
            </div>

            <a
              href={SITE.coinbaseCheckoutUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-8 bg-white text-forest-950 shadow-white/20 hover:bg-sand-100"
            >
              <Bitcoin className="h-4 w-4" />
              Pay with Crypto
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-4"
          >
            {PERKS.map((p) => (
              <li
                key={p.title}
                className="flex items-start gap-4 rounded-3xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ocean-500/20 text-ocean-200">
                  <p.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{p.text}</p>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

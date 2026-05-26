import { motion } from 'framer-motion';
import {
  Handshake,
  QrCode,
  Wallet,
  Headphones,
  ArrowRight,
} from 'lucide-react';
import { SITE, trackContact } from '../config/site.js';

const PARTNER_WA_TEXT = encodeURIComponent(
  'Olá! Quero entrar no programa de parceiros Ubira Brazil. Meu perfil é:'
);
const partnerWaLink = `https://wa.me/${SITE.whatsappNumber}?text=${PARTNER_WA_TEXT}`;

const HOW_IT_WORKS = [
  {
    icon: Handshake,
    title: '1. Você se cadastra',
    text: 'Conta pra gente quem você é (hotel, motorista, escola, agência, criador). Em 24h ativamos seu acesso.',
  },
  {
    icon: QrCode,
    title: '2. Recebe seu kit',
    text: 'QR code único, link de afiliado, PDF dos passeios em PT/EN/ES e cards físicos para distribuir.',
  },
  {
    icon: Wallet,
    title: '3. Indica e recebe',
    text: 'Cada reserva fechada gera comissão automática. Pagamos todo dia 10 via Pix, transferência ou cripto.',
  },
];

const PERKS = [
  {
    icon: Wallet,
    title: 'Pagamento mensal sem atraso',
    text: 'Todo dia 10. Pix, transferência ou cripto (BTC, ETH, USDT). Sem letra miúda.',
  },
  {
    icon: QrCode,
    title: 'Kit pronto para usar',
    text: 'QR code, cards impressos A6/A7, PDF dos passeios e copy pronta para Instagram em 3 idiomas.',
  },
  {
    icon: Headphones,
    title: 'Suporte direto no WhatsApp',
    text: 'Você manda o cliente, a gente atende. Resposta em menos de 1 hora em horário comercial.',
  },
];

const FAQ = [
  {
    q: 'Preciso ter CNPJ ou MEI?',
    a: 'Não para o programa de afiliados (concierge, motorista, criador) — pagamos via Pix CPF. Para o modelo revendedor B2B (agências), sim, exigimos CNPJ para emissão de nota.',
  },
  {
    q: 'Tem mínimo de vendas por mês?',
    a: 'Não. Você indica quando quiser, recebe pelo que vender. Não cobramos mensalidade nem taxa de adesão.',
  },
  {
    q: 'Como funciona o tracking? E se o cliente não usar o QR?',
    a: 'Usamos o sistema de afiliados da Bokun (nossa plataforma de reservas). O QR aponta para um link com seu código. Se o cliente vier por outro caminho mas mencionar seu nome, contabilizamos manualmente — confiança é a base.',
  },
  {
    q: 'Quando recebo a comissão?',
    a: 'Todo dia 10 do mês seguinte à reserva, desde que a experiência já tenha sido prestada (regra da Bokun para evitar comissão sobre cancelamento).',
  },
  {
    q: 'Posso indicar para mercado nacional também?',
    a: 'Pode, mas a comissão padrão é desenhada para o ticket internacional (US$ 800–3.500+). Para vendas BRL conversamos caso a caso.',
  },
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-gradient-to-b from-sand-50 via-white to-sand-50 py-20 sm:py-28"
    >
      <div className="container-app">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="section-eyebrow">Programa de parceiros</span>
          <h2 className="section-title">
            Indique a Ubira Brazil.<br />Ganhe até 25% por reserva.
          </h2>
          <p className="mt-5 text-lg font-bold leading-relaxed text-forest-800">
            Turistas internacionais gastam de US$ 800 a US$ 3.500 por
            experiência na nossa curadoria. Você indica, nós operamos, e a
            comissão cai na sua conta todo mês.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={partnerWaLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackContact('partner-program-top')}
              className="btn-primary"
            >
              Quero ser parceiro
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#partners-how" className="btn-secondary">
              Como funciona
            </a>
          </div>
        </motion.div>

        {/* How it works */}
        <div id="partners-how" className="mt-20 grid gap-5 md:grid-cols-3">
          {HOW_IT_WORKS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ocean-100 text-ocean-700">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-forest-900">
                {step.title}
              </h3>
              <p className="mt-2 text-forest-700">{step.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Perks */}
        <div className="mt-24 rounded-3xl bg-forest-950 p-8 text-white sm:p-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="section-eyebrow !text-ocean-300">
              Por que indicar a gente
            </span>
            <h3 className="font-display text-3xl font-bold sm:text-4xl">
              Programa feito pra parceiro lembrar de você.
            </h3>
          </motion.div>

          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {PERKS.map((perk, i) => (
              <motion.li
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ocean-500/20 text-ocean-200">
                  <perk.icon className="h-6 w-6" />
                </div>
                <h4 className="mt-4 font-semibold">{perk.title}</h4>
                <p className="mt-2 text-sm text-white/75">{perk.text}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="section-eyebrow">Perguntas frequentes</span>
            <h3 className="font-display text-3xl font-bold text-forest-900 sm:text-4xl">
              Dúvidas que você provavelmente tem
            </h3>
          </motion.div>

          <div className="mx-auto mt-10 max-w-3xl divide-y divide-forest-100 rounded-3xl bg-white ring-1 ring-forest-100">
            {FAQ.map((item) => (
              <details key={item.q} className="group p-6">
                <summary className="flex cursor-pointer items-center justify-between text-left font-semibold text-forest-900 marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="ml-4 text-2xl leading-none text-forest-400 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-forest-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-20 max-w-2xl rounded-3xl bg-gradient-to-br from-ocean-600 to-ocean-700 p-10 text-center text-white shadow-xl"
        >
          <h3 className="font-display text-3xl font-bold sm:text-4xl">
            Bora começar?
          </h3>
          <p className="mt-3 text-white/85">
            Manda um “oi” no WhatsApp. Em 5 minutos a gente entende seu perfil
            e ativa seu kit.
          </p>
          <a
            href={partnerWaLink}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackContact('partner-program-bottom')}
            className="btn-primary mt-6 bg-white text-ocean-700 shadow-white/20 hover:bg-sand-100"
          >
            Falar com a Ubira
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

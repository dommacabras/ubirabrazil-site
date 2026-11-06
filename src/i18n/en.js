// English — base dictionary. Service texts live in src/data/services.js.
export const en = {
  meta: {
    homeTitle: 'Ubira Brazil — Adventure Tourism in Santa Catarina',
    homeDescription:
      'Premium adventure tourism in Santa Catarina, Brazil. Kayak, surf, hiking, boat tours and more. Pay in BRL, USD or crypto.',
  },

  site: {
    tagline: 'Curated adventures in Santa Catarina — pay in BRL, USD or crypto.',
    location: 'Florianópolis, Santa Catarina, Brazil',
  },

  // Pre-filled WhatsApp messages
  wa: {
    greeting: (subject) => `Hi, I'm interested in ${subject}`,
    yourServices: 'your services',
    tailoredTrip: 'a tailored Floripa trip',
    customItinerary: 'a custom itinerary',
  },

  common: {
    bookNow: 'Book Now',
    bookViaWhatsApp: 'Book via WhatsApp',
    payWithCrypto: 'Pay with Crypto',
    personalizeTrip: 'Personalize Your Trip',
    close: 'Close',
    whatsIncluded: 'What’s included',
  },

  nav: {
    about: 'About',
    services: 'Services',
    gallery: 'Gallery',
    reviews: 'Reviews',
    crypto: 'Crypto',
    partners: 'Partners',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  hero: {
    badge: 'Pay in BRL · USD · Crypto',
    titleBefore: 'The island, ',
    titleHighlight: 'curated',
    titleAfter: ' for you.',
    subtitle: 'For explorers who crave more than a trip — a story to tell from Florianópolis, Brazil.',
    explore: 'Explore Experiences',
    concierge: 'Talk to a Concierge',
    scrollDown: 'Scroll down',
  },

  about: {
    eyebrow: 'About us',
    titleLine1: 'We don’t sell tours.',
    titleLine2: 'We reveal the Floripa that few know.',
    body:
      'We’re a small team of locals obsessed with two things: the wild beauty of Santa Catarina and making it effortless for international travelers to experience it. Pick from our nine signature experiences — or let us build the whole week for you.',
    cta: 'See what we do',
    pillars: [
      {
        title: 'International first',
        text: 'For explorers who crave more than a trip — a story to tell from Florianópolis, Brazil.',
      },
      {
        title: 'Curated & vetted',
        text: 'Every guide, villa and operator is hand-picked. No tourist traps.',
      },
      {
        title: 'Crypto-native',
        text: 'BTC, ETH, USDT accepted. Fixed-price checkout, no FX surprises.',
      },
    ],
  },

  servicesSection: {
    eyebrow: 'Our Experiences',
    title: 'Ten ways to fall for the island.',
    text: 'Click any card to see full details, pricing and booking — WhatsApp or crypto, your call.',
    viewDetails: (name) => `View details for ${name}`,
  },

  gallery: {
    eyebrow: 'Gallery',
    title: 'Moments from the island.',
    alts: {}, // English alts live in src/data/gallery.js
  },

  testimonials: {
    eyebrow: 'Travelers',
    title: 'What our guests say.',
    previous: 'Previous testimonial',
    next: 'Next testimonial',
    goTo: (n) => `Go to testimonial ${n}`,
    countries: {}, // English country names live in src/data/testimonials.js
  },

  crypto: {
    eyebrow: 'Payment',
    title: 'Pay in Bitcoin, Ethereum or USDT.',
    body:
      'We were the first operator in Santa Catarina to accept crypto natively. We believe in freedom. Powered by Coinbase Commerce — secure, regulated, and instantly settled.',
    perks: [
      {
        title: 'Instant checkout',
        text: 'Pay in seconds — no bank hours, no FX form, no IOF surprises.',
      },
      {
        title: 'Price locked in',
        text: 'Quoted in USD/EUR. Converted automatically on settlement.',
      },
      {
        title: 'Global by design',
        text: 'Built for nomads and crypto-native travelers. Pay from anywhere.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Ready when you are.',
    text: 'WhatsApp is the fastest way — we typically reply in under an hour.',
    chatWithUs: 'Chat with us',
    emailLabel: 'Email',
    followJourney: 'Follow the journey',
    basedIn: 'Based in',
  },

  footer: {
    contact: 'Contact',
    quickLinks: 'Quick Links',
    services: 'Services',
    gallery: 'Gallery',
    payWithCrypto: 'Pay with Crypto',
    rights: 'All rights reserved.',
  },

  whatsappFloat: {
    aria: 'Chat on WhatsApp',
  },

  customize: {
    aria: 'Customize your experience',
    title: 'Build Your Package',
    subtitle: 'Select experiences · set group size · get instant price',
    people: 'People',
    bikeDays: 'Bike days',
    nights: 'Nights',
    selectExperiences: 'Select experiences',
    yourPackage: 'Your package',
    colExperience: 'Experience',
    colBreakdown: 'Breakdown',
    colTotal: 'Total',
    quote: 'quote',
    estimatedTotal: 'Estimated total',
    extras: '+ extras',
    emptyHint: 'Select at least one experience above to see your price.',
    sendToWhatsApp: 'Send to WhatsApp',
    unitDay: '/day',
    unitPersonNight: '/p·night',
    unitPerson: '/person',
    abbrDays: 'd',
    abbrPeople: 'p',
    abbrNights: 'n',
    waMessage: {
      intro: "Hi! I'd like to build a custom package:\n",
      bikeLine: (name, days, price, total) => `• ${name} — ${days} days × US$${price} = US$${total}`,
      stayLine: (name, people, nights, price, total) =>
        `• ${name} — ${people}p × ${nights} nights × US$${price} = US$${total}`,
      quoteLine: (name) => `• ${name} — contact for pricing`,
      peopleLine: (name, people, price, total) => `• ${name} — ${people} people × US$${price} = US$${total}`,
      group: (people) => `\nGroup: ${people} people`,
      total: (total) => `Estimated total: US$ ${total}`,
      outro: '\nCan you help me plan the details?',
    },
  },

  servicePage: {
    allExperiences: 'All Experiences',
    whatsIncluded: "What's included",
    photoAlt: (name, n) => `${name} photo ${n}`,
    notFound: 'Experience not found.',
    backHome: '← Back to home',
  },
};

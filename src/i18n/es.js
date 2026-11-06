// Español (neutro latinoamericano, tratamiento "tú").
// Lo que falte aquí se muestra automáticamente en inglés.
export const es = {
  meta: {
    homeTitle: 'Ubira Brazil — Turismo de aventura en Santa Catarina',
    homeDescription:
      'Turismo de aventura premium en Santa Catarina, Brasil. Kayak, surf, senderismo, paseos en barco y más. Paga en BRL, USD o cripto.',
  },

  site: {
    tagline: 'Aventuras seleccionadas en Santa Catarina: paga en BRL, USD o cripto.',
    location: 'Florianópolis, Santa Catarina, Brasil',
  },

  wa: {
    greeting: (subject) => `Hola, me interesa ${subject}`,
    yourServices: 'conocer sus servicios',
    tailoredTrip: 'un viaje a medida por Floripa',
    customItinerary: 'un itinerario personalizado',
  },

  common: {
    bookNow: 'Reserva ya',
    bookViaWhatsApp: 'Reserva por WhatsApp',
    payWithCrypto: 'Paga con cripto',
    personalizeTrip: 'Personaliza tu viaje',
    close: 'Cerrar',
    whatsIncluded: 'Qué incluye',
  },

  nav: {
    about: 'Nosotros',
    services: 'Experiencias',
    gallery: 'Galería',
    reviews: 'Opiniones',
    crypto: 'Cripto',
    partners: 'Socios',
    contact: 'Contacto',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
  },

  hero: {
    badge: 'Paga en BRL · USD · Cripto',
    titleBefore: 'La isla, ',
    titleHighlight: 'a tu medida',
    titleAfter: '.',
    subtitle:
      'Para exploradores que buscan más que un viaje: una historia para contar desde Florianópolis, Brasil.',
    explore: 'Ver experiencias',
    concierge: 'Habla con un concierge',
    scrollDown: 'Desplázate hacia abajo',
  },

  about: {
    eyebrow: 'Quiénes somos',
    titleLine1: 'No vendemos tours.',
    titleLine2: 'Te mostramos la Floripa que pocos conocen.',
    body:
      'Somos un pequeño equipo local obsesionado con dos cosas: la belleza salvaje de Santa Catarina y que vivirla sea fácil para viajeros de todo el mundo. Elige entre nuestras nueve experiencias exclusivas, o deja que armemos toda tu semana.',
    cta: 'Mira lo que hacemos',
    pillars: [
      {
        title: 'Pensado para viajeros internacionales',
        text: 'Para exploradores que buscan más que un viaje: una historia para contar desde Florianópolis, Brasil.',
      },
      {
        title: 'Seleccionado y verificado',
        text: 'Cada guía, villa y operador es elegido a mano. Sin trampas para turistas.',
      },
      {
        title: 'Nativos en cripto',
        text: 'Aceptamos BTC, ETH y USDT. Precio fijo al pagar, sin sorpresas con el tipo de cambio.',
      },
    ],
  },

  servicesSection: {
    eyebrow: 'Nuestras experiencias',
    title: 'Diez formas de enamorarte de la isla.',
    text: 'Toca cualquier tarjeta para ver detalles, precios y reservas: por WhatsApp o en cripto, tú eliges.',
    viewDetails: (name) => `Ver detalles de ${name}`,
  },

  // Textos de cada experiencia (precios, fotos e ids vienen de src/data/services.js)
  services: {
    kayak: {
      name: 'Tours en kayak',
      title: 'Aventuras en kayak',
      description: 'Explora canales escondidos y aguas cristalinas.',
      longDescription:
        'Rema entre manglares, lagunas escondidas y playas secretas a las que solo se llega en kayak. Nuestros guías certificados conocen cada rincón, y cada cala tranquila para parar a nadar.',
      features: ['Equipo incluido', 'Guías certificados', 'Opciones al amanecer o al atardecer'],
      duration: '2 – 4 horas',
      groupSize: '1 – 8 personas',
      cta: 'Reserva por WhatsApp',
    },
    surf: {
      name: 'Clases de surf',
      title: 'Coaching profesional de surf',
      description: 'Aprende a tomar tu primera ola o mejora tu técnica.',
      longDescription:
        'Desde tu primer take-off hasta perfeccionar tu bottom turn: nuestros instructores adaptan cada sesión a tu nivel y eligen la playa ideal según las condiciones del día.',
      features: ['Tablas para todos los niveles', 'Trajes de neopreno incluidos', 'Paquete de fotos disponible'],
      duration: '1,5 – 2 horas',
      groupSize: '1 – 4 personas',
      cta: 'Atrapa tu ola',
    },
    horseback: {
      name: 'Cabalgatas',
      title: 'Senderos costeros a caballo',
      description: 'Un recorrido sereno entre dunas y playas.',
      longDescription:
        'Cabalga entre dunas, lagunas de agua dulce y playas tranquilas en el extremo sur de la isla. Caballos mansos y bien entrenados, ideales para principiantes y jinetes con experiencia.',
      features: ['Caballos mansos para principiantes', 'Paradas para fotos panorámicas', 'Cabalgatas al atardecer'],
      duration: '1,5 – 3 horas',
      groupSize: '1 – 6 personas',
      cta: 'Reserva tu cabalgata',
    },
    boat: {
      name: 'Paseos en barco y moto de agua',
      title: 'Velocidad y lujo en el agua',
      description: 'Barcos privados y paseos emocionantes en moto de agua.',
      longDescription:
        'Alquila un barco privado para recorrer la bahía durante el día, o siente la adrenalina de un paseo en moto de agua por los puntos más icónicos de la isla. Incluye paradas para hacer snorkel.',
      features: [
        'Capitán incluido en los barcos',
        'Instrucción de seguridad para motos de agua',
        'Equipo de snorkel',
      ],
      duration: '2 – 8 horas',
      groupSize: '1 – 12 personas',
      cta: 'Alquila ahora',
    },
    diving: {
      name: 'Buceo',
      title: 'Buceo en la Isla Xavier',
      description: 'Salida de buceo de 4 horas a la Isla Xavier, con equipo, clases y almuerzo incluidos.',
      longDescription:
        'Salimos hacia la Isla Xavier en una excursión de 4 horas. Todo el equipo está incluido, además de una clase teórica y una práctica antes de entrar al agua. Snack a bordo, 30 minutos de buceo guiado con un instructor certificado y luego hasta 2 horas de snorkel sobre el arrecife.',
      features: [
        'Todo el equipo incluido',
        'Clase teórica + práctica',
        '30 min de buceo guiado con instructor',
        '2 horas de snorkel después del buceo',
        'Snack a bordo',
      ],
      duration: '4 horas',
      groupSize: '1 – 8 personas',
      cta: 'Bucea con nosotros',
    },
    buggy: {
      name: 'Paseos en buggy',
      title: 'Aventuras en buggy por las dunas',
      description: 'Paseo de 6 horas en buggy por la costa este de Floripa, con paradas para nadar y relajarte.',
      longDescription:
        'Una aventura de 6 horas en buggy con paradas para nadar y descansar en el camino. Pasamos por la Lagoa da Conceição, las Dunas de Joaquina, la playa Joaquina, el Mirador de Praia Mole, la playa Moçambique, el Parque Florestal do Rio Vermelho y Barra da Lagoa.',
      features: [
        'Lagoa da Conceição',
        'Dunas de Joaquina',
        'Playa Joaquina',
        'Mirador de Praia Mole',
        'Playa Moçambique',
        'Parque Florestal do Rio Vermelho',
        'Barra da Lagoa',
      ],
      duration: '6 horas',
      groupSize: '1 – 4 personas',
      cta: '¡A las dunas!',
    },
    motorcycle: {
      name: 'Alquiler de motos',
      title: 'Recorre la isla sobre dos ruedas',
      description: 'Elige tu moto y recorre la isla a tu propio ritmo.',
      longDescription:
        'Alquiler mínimo de 3 días al precio indicado. Incluye seguro completo y 2 cascos. Se requiere un depósito de garantía reembolsable de R$ 500 / US$ 99 / € 86, que se devuelve al entregar la moto en las mismas condiciones. Es necesaria una licencia de conducir de moto vigente.',
      features: ['Seguro completo incluido', '2 cascos', 'Depósito de garantía reembolsable'],
      duration: 'Mínimo 3 días',
      groupSize: '1 conductor',
      cta: 'Reserva una moto',
    },
    hiking: {
      name: 'Senderismo',
      title: 'Caminatas de inmersión en la naturaleza',
      description: 'Caminatas guiadas por bosques tropicales hasta miradores secretos.',
      longDescription:
        'Desde caminatas cortas de playa en playa hasta subidas de medio día que terminan en miradores panorámicos: nuestros guías locales te acercan a la ecología de la Mata Atlántica.',
      features: ['Guías locales expertos', 'Distintos niveles de dificultad', 'Educación ambiental'],
      duration: '2 – 6 horas',
      groupSize: '1 – 10 personas',
      cta: 'Empieza a explorar',
    },
    stay: {
      name: 'Alojamiento',
      title: 'Hospédate en el paraíso',
      description: 'Villas y cabañas de playa elegidas a mano para tu comodidad.',
      longDescription:
        'Una selección de villas frente al mar, posadas boutique y cabañas de diseño: visitamos y verificamos cada alojamiento en persona. Incluye soporte de concierge.',
      features: ['Vista al mar', 'Wi-Fi de alta velocidad', 'Desayuno incluido'],
      duration: 'Desde 1 noche',
      groupSize: '1 – 8 huéspedes',
      cta: 'Consulta disponibilidad',
    },
    gastronomic: {
      name: 'Experiencias gastronómicas',
      title: 'Sabores locales y tours culinarios',
      description: 'Prueba los mejores mariscos y platos típicos de la región.',
      longDescription:
        'Cenas de degustación guiadas por chefs, maridajes de vino al atardecer y mañanas "de la granja a la mesa" con los productores detrás de los mejores ingredientes de Santa Catarina.',
      features: ['Cenas guiadas por chefs', 'Degustación de vinos', 'Tours de la granja a la mesa'],
      duration: '3 – 5 horas',
      groupSize: '2 – 12 personas',
      cta: 'Disfruta el momento',
    },
  },

  gallery: {
    eyebrow: 'Galería',
    title: 'Momentos de la isla.',
    alts: {
      '/images/gallery/praia-joaquina.webp': 'Olas para surfear en la playa Joaquina',
      '/images/gallery/piscinas-naturais-barra-lagoa.webp': 'Piscinas naturales de Barra da Lagoa',
      '/images/gallery/floripa-landscape.png': 'Vista panorámica de la costa de Florianópolis',
      '/images/gallery/floripa-scene.jpg': 'Paisaje de la isla',
      '/images/gallery/floripa-coast.jpg': 'Costa atlántica',
      '/images/gallery/campfire.jpg': 'Fogata junto a la playa',
      '/images/gallery/jardim-01.jpg': 'Jardín tropical',
      '/images/gallery/mirante.jpg': 'Vista desde un mirador sobre el acantilado',
      '/images/gallery/prainha.jpg': 'Pequeña playa escondida',
      '/images/gallery/nossolounge.jpg': 'Nuestro lounge, espacio de encuentro para huéspedes',
    },
  },

  testimonials: {
    eyebrow: 'Viajeros',
    title: 'Lo que dicen nuestros huéspedes.',
    previous: 'Testimonio anterior',
    next: 'Siguiente testimonio',
    goTo: (n) => `Ir al testimonio ${n}`,
    countries: {
      Germany: 'Alemania',
      'United States': 'Estados Unidos',
      France: 'Francia',
      Netherlands: 'Países Bajos',
      Spain: 'España',
    },
  },

  crypto: {
    eyebrow: 'Pagos',
    title: 'Paga con Bitcoin, Ethereum o USDT.',
    body:
      'Fuimos el primer operador de Santa Catarina en aceptar cripto de forma nativa. Creemos en la libertad. Con tecnología de Coinbase Commerce: seguro, regulado y con liquidación instantánea.',
    perks: [
      {
        title: 'Pago instantáneo',
        text: 'Paga en segundos: sin horarios bancarios, sin trámites de cambio, sin sorpresas de IOF.',
      },
      {
        title: 'Precio garantizado',
        text: 'Cotizado en USD/EUR. Se convierte automáticamente al liquidar.',
      },
      {
        title: 'Global por naturaleza',
        text: 'Pensado para nómadas y viajeros cripto. Paga desde donde estés.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Listos cuando tú lo estés.',
    text: 'WhatsApp es la vía más rápida: normalmente respondemos en menos de una hora.',
    chatWithUs: 'Escríbenos',
    emailLabel: 'Correo',
    followJourney: 'Sigue el viaje',
    basedIn: 'Estamos en',
  },

  footer: {
    contact: 'Contacto',
    quickLinks: 'Enlaces rápidos',
    services: 'Experiencias',
    gallery: 'Galería',
    payWithCrypto: 'Paga con cripto',
    rights: 'Todos los derechos reservados.',
  },

  whatsappFloat: {
    aria: 'Chatea por WhatsApp',
  },

  customize: {
    aria: 'Personaliza tu experiencia',
    title: 'Arma tu paquete',
    subtitle: 'Elige experiencias · define tu grupo · ve el precio al instante',
    people: 'Personas',
    bikeDays: 'Días de moto',
    nights: 'Noches',
    selectExperiences: 'Elige tus experiencias',
    yourPackage: 'Tu paquete',
    colExperience: 'Experiencia',
    colBreakdown: 'Detalle',
    colTotal: 'Total',
    quote: 'a cotizar',
    estimatedTotal: 'Total estimado',
    extras: '+ extras',
    emptyHint: 'Elige al menos una experiencia para ver tu precio.',
    sendToWhatsApp: 'Enviar por WhatsApp',
    unitDay: '/día',
    unitPersonNight: '/p·noche',
    unitPerson: '/persona',
    abbrDays: 'd',
    abbrPeople: 'p',
    abbrNights: 'n',
    waMessage: {
      intro: '¡Hola! Me gustaría armar un paquete personalizado:\n',
      bikeLine: (name, days, price, total) => `• ${name} — ${days} días × US$${price} = US$${total}`,
      stayLine: (name, people, nights, price, total) =>
        `• ${name} — ${people}p × ${nights} noches × US$${price} = US$${total}`,
      quoteLine: (name) => `• ${name} — precio a consultar`,
      peopleLine: (name, people, price, total) => `• ${name} — ${people} personas × US$${price} = US$${total}`,
      group: (people) => `\nGrupo: ${people} personas`,
      total: (total) => `Total estimado: US$ ${total}`,
      outro: '\n¿Me ayudan a planificar los detalles?',
    },
  },

  servicePage: {
    allExperiences: 'Todas las experiencias',
    whatsIncluded: 'Qué incluye',
    photoAlt: (name, n) => `${name}, foto ${n}`,
    notFound: 'Experiencia no encontrada.',
    backHome: '← Volver al inicio',
  },
};

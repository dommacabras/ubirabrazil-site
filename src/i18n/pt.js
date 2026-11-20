// Português do Brasil (tratamento "você").
// O que faltar aqui aparece automaticamente em inglês.
export const pt = {
  meta: {
    homeTitle: 'Ubira Brazil — Turismo de aventura em Santa Catarina',
    homeDescription:
      'Turismo de aventura premium em Santa Catarina. Caiaque, surf, trilhas, passeios de barco e muito mais. Pague em reais, dólar ou cripto.',
  },

  site: {
    tagline: 'Aventuras com curadoria em Santa Catarina: pague em reais, dólar ou cripto.',
    location: 'Florianópolis, Santa Catarina, Brasil',
  },

  wa: {
    greeting: (subject) => `Olá, tenho interesse em ${subject}`,
    yourServices: 'conhecer os serviços de vocês',
    tailoredTrip: 'uma viagem sob medida por Floripa',
    customItinerary: 'um roteiro personalizado',
  },

  common: {
    bookNow: 'Reserve agora',
    bookViaWhatsApp: 'Reserve pelo WhatsApp',
    payWithCrypto: 'Pague com cripto',
    personalizeTrip: 'Personalize sua viagem',
    close: 'Fechar',
    whatsIncluded: 'O que está incluso',
  },

  nav: {
    about: 'Sobre',
    services: 'Experiências',
    gallery: 'Galeria',
    reviews: 'Avaliações',
    crypto: 'Cripto',
    partners: 'Parceiros',
    contact: 'Contato',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },

  hero: {
    badge: 'Pague em R$ · US$ · Cripto',
    titleBefore: 'A ilha, ',
    titleHighlight: 'sob medida',
    titleAfter: ' para\u00a0você.', // espaço inseparável: "você" não fica sozinho na linha
    subtitle:
      'Para exploradores que querem mais do que uma viagem: uma história para contar, vivida em Florianópolis.',
    explore: 'Ver experiências',
    concierge: 'Fale com um concierge',
    scrollDown: 'Role para baixo',
  },

  about: {
    eyebrow: 'Quem somos',
    titleLine1: 'A gente não vende passeio.',
    titleLine2: 'A gente revela a Floripa que pouca gente conhece.',
    body:
      'Somos uma pequena equipe local obcecada por duas coisas: a beleza selvagem de Santa Catarina e fazer com que viajantes do mundo todo vivam tudo isso sem complicação. Escolha entre nossas dez experiências exclusivas, ou deixe a gente montar a sua semana inteira.',
    cta: 'Veja o que fazemos',
    pillars: [
      {
        title: 'Pensado para viajantes internacionais',
        text: 'Para exploradores que querem mais do que uma viagem: uma história para contar, vivida em Florianópolis.',
      },
      {
        title: 'Escolhido a dedo',
        text: 'Cada guia, casa e operador é selecionado pessoalmente. Nada de armadilha para turista.',
      },
      {
        title: 'Nativos em cripto',
        text: 'Aceitamos BTC, ETH e USDT. Preço fechado no pagamento, sem surpresa com câmbio.',
      },
    ],
  },

  servicesSection: {
    eyebrow: 'Nossas experiências',
    title: 'Dez jeitos de se apaixonar pela ilha.',
    text: 'Toque em qualquer card para ver detalhes, preços e reserva: pelo WhatsApp ou em cripto, você escolhe.',
    viewDetails: (name) => `Ver detalhes de ${name}`,
  },

  // Textos de cada experiência (preços, fotos e ids vêm de src/data/services.js)
  services: {
    kayak: {
      name: 'Passeios de caiaque',
      title: 'Aventuras de caiaque',
      description: 'Explore canais escondidos e águas cristalinas.',
      longDescription:
        'Desfrute dessa experiência única no canal da Barra da Lagoa e na Lagoa da Conceição. Vamos de caiaque por todo o canal da Barra e fazemos 2 paradas: uma na ponte do canal e outra numa praia secreta na Lagoa da Conceição, que só se alcança de caiaque. Nossos guias conhecem cada canto e cada enseada tranquila para parar, dar um mergulho e desfrutar de um dia incrível.',
      features: ['Equipamento incluso', 'Guias certificados', 'Opções ao nascer ou ao pôr do sol'],
      duration: '2 – 4 horas',
      groupSize: '1 – 8 pessoas',
      cta: 'Reserve pelo WhatsApp',
    },
    surf: {
      name: 'Aulas de surf',
      title: 'Aulas de surf com profissionais',
      description: 'Pegue sua primeira onda ou aprimore sua técnica.',
      longDescription:
        'Da primeira vez em pé na prancha até refinar o bottom turn: nossos instrutores adaptam cada aula ao seu nível e escolhem a praia certa para as condições do dia.',
      features: ['Pranchas para todos os níveis', 'Roupa de neoprene inclusa', 'Pacote de fotos disponível'],
      duration: '1,5 – 2 horas',
      groupSize: '1 – 4 pessoas',
      cta: 'Pegue sua onda',
    },
    horseback: {
      name: 'Cavalgadas',
      title: 'Trilhas costeiras a cavalo',
      description: 'Um passeio tranquilo entre dunas e praias.',
      longDescription:
        'Cavalgue entre dunas, lagoas de água doce e praias tranquilas no extremo sul da ilha. Cavalos mansos e bem treinados, perfeitos para iniciantes e para quem já tem experiência.',
      features: ['Cavalos mansos para iniciantes', 'Paradas para fotos com vista', 'Cavalgadas ao pôr do sol'],
      duration: '1,5 – 3 horas',
      groupSize: '1 – 6 pessoas',
      cta: 'Reserve sua cavalgada',
    },
    boat: {
      name: 'Passeios de barco e jet ski',
      title: 'Velocidade e luxo na água',
      description: 'Barcos privativos e passeios emocionantes de jet ski.',
      longDescription:
        'Alugue um barco privativo para passar o dia pela baía, ou sinta a adrenalina de um passeio de jet ski pelos pontos mais icônicos da ilha. Paradas para snorkel inclusas.',
      features: [
        'Marinheiro incluso nos barcos',
        'Instrução de segurança para jet ski',
        'Equipamento de snorkel',
      ],
      duration: '2 – 8 horas',
      groupSize: '1 – 12 pessoas',
      cta: 'Alugue agora',
    },
    diving: {
      name: 'Mergulho',
      title: 'Mergulho na Ilha do Xavier',
      description: 'Saída de mergulho de 4 horas para a Ilha do Xavier, com equipamento, aulas e almoço inclusos.',
      longDescription:
        'Saímos para a Ilha do Xavier em um passeio de 4 horas. Todo o equipamento está incluso, além de uma aula teórica e uma prática antes de entrar na água. Lanche servido a bordo, 30 minutos de mergulho com cilindro guiado por instrutor certificado e, depois, até 2 horas de snorkel sobre o recife.',
      features: [
        'Todo o equipamento incluso',
        'Aula teórica + prática',
        '30 min de mergulho guiado com instrutor',
        '2 horas de snorkel depois do mergulho',
        'Lanche a bordo',
      ],
      duration: '4 horas',
      groupSize: '1 – 8 pessoas',
      cta: 'Mergulhe com a gente',
    },
    buggy: {
      name: 'Passeios de buggy',
      title: 'Aventuras de buggy pelas dunas',
      description: 'Passeio de 6 horas de buggy pela costa leste de Floripa, com paradas para banho e descanso.',
      longDescription:
        'Uma aventura de 6 horas de buggy com paradas para banho e descanso pelo caminho. Passamos pela Lagoa da Conceição, Dunas da Joaquina, Praia da Joaquina, Mirante da Praia Mole, Praia do Moçambique, Parque Florestal do Rio Vermelho e Barra da Lagoa.',
      features: [
        'Lagoa da Conceição',
        'Dunas da Joaquina',
        'Praia da Joaquina',
        'Mirante da Praia Mole',
        'Praia do Moçambique',
        'Parque Florestal do Rio Vermelho',
        'Barra da Lagoa',
      ],
      duration: '6 horas',
      groupSize: '1 – 4 pessoas',
      cta: 'Bora para as dunas!',
    },
    motorcycle: {
      name: 'Aluguel de motos',
      title: 'Explore a ilha sobre duas rodas',
      description: 'Escolha sua moto e explore a ilha no seu ritmo.',
      longDescription:
        'Locação mínima de 3 dias pelo valor indicado. Inclui seguro completo e 2 capacetes. É exigida uma caução reembolsável de R$ 500 / US$ 99 / € 86, devolvida quando a moto é entregue nas mesmas condições. Necessário ter habilitação de moto válida (CNH categoria A).',
      features: ['Seguro completo incluso', '2 capacetes', 'Caução reembolsável'],
      duration: 'Mínimo de 3 dias',
      groupSize: '1 piloto',
      cta: 'Reserve uma moto',
    },
    hiking: {
      name: 'Trilhas',
      title: 'Trilhas de imersão na natureza',
      description: 'Trilhas guiadas por florestas tropicais até mirantes secretos.',
      longDescription:
        'De caminhadas curtas de praia em praia até subidas de meio período que terminam em mirantes panorâmicos: nossos guias locais aproximam você da ecologia da Mata Atlântica.',
      features: ['Guias locais especialistas', 'Vários níveis de dificuldade', 'Educação ambiental'],
      duration: '2 – 6 horas',
      groupSize: '1 – 10 pessoas',
      cta: 'Comece a explorar',
    },
    stay: {
      name: 'Hospedagem',
      title: 'Hospede-se no paraíso',
      description: 'Casas e chalés de praia escolhidos a dedo para o seu conforto.',
      longDescription:
        'Uma seleção de casas pé na areia, pousadas boutique e chalés de design: visitamos e aprovamos cada hospedagem pessoalmente. Suporte de concierge incluso.',
      features: ['Vista para o mar', 'Wi-Fi de alta velocidade', 'Café da manhã incluso'],
      duration: 'A partir de 1 noite',
      groupSize: '1 – 8 hóspedes',
      cta: 'Consultar disponibilidade',
    },
    gastronomic: {
      name: 'Experiências gastronômicas',
      title: 'Sabores locais e roteiros gastronômicos',
      description: 'Prove os melhores frutos do mar e pratos típicos da região.',
      longDescription:
        'Jantares de degustação conduzidos por chefs, harmonização de vinhos ao pôr do sol e manhãs "da fazenda à mesa" com os produtores por trás dos melhores ingredientes de Santa Catarina.',
      features: ['Jantares com chef', 'Degustação de vinhos', 'Roteiros da fazenda à mesa'],
      duration: '3 – 5 horas',
      groupSize: '2 – 12 pessoas',
      cta: 'Aproveite o momento',
    },
  },

  gallery: {
    eyebrow: 'Galeria',
    title: 'Momentos da ilha.',
    alts: {
      '/images/gallery/praia-joaquina.webp': 'Ondas para surfar na Praia da Joaquina',
      '/images/gallery/piscinas-naturais-barra-lagoa.webp': 'Piscinas naturais da Barra da Lagoa',
      '/images/gallery/floripa-landscape.png': 'Vista panorâmica do litoral de Florianópolis',
      '/images/gallery/floripa-scene.jpg': 'Paisagem da ilha',
      '/images/gallery/floripa-coast.jpg': 'Costa atlântica',
      '/images/gallery/campfire.jpg': 'Fogueira à beira da praia',
      '/images/gallery/jardim-01.jpg': 'Jardim tropical',
      '/images/gallery/mirante.jpg': 'Vista de um mirante sobre o costão',
      '/images/gallery/prainha.jpg': 'Prainha escondida',
      '/images/gallery/nossolounge.jpg': 'Nosso lounge, espaço de convivência dos hóspedes',
    },
  },

  testimonials: {
    eyebrow: 'Viajantes',
    title: 'O que nossos hóspedes dizem.',
    previous: 'Depoimento anterior',
    next: 'Próximo depoimento',
    goTo: (n) => `Ir para o depoimento ${n}`,
    countries: {
      Germany: 'Alemanha',
      'United States': 'Estados Unidos',
      France: 'França',
      Netherlands: 'Holanda',
      Spain: 'Espanha',
    },
  },

  crypto: {
    eyebrow: 'Pagamento',
    title: 'Pague com Bitcoin, Ethereum ou USDT.',
    body:
      'Fomos o primeiro operador de Santa Catarina a aceitar cripto de forma nativa. Acreditamos na liberdade. Tecnologia Coinbase Commerce: seguro, regulado e com liquidação instantânea.',
    perks: [
      {
        title: 'Pagamento instantâneo',
        text: 'Pague em segundos: sem horário bancário, sem contrato de câmbio, sem surpresa de IOF.',
      },
      {
        title: 'Preço travado',
        text: 'Cotado em USD/EUR e convertido automaticamente na liquidação.',
      },
      {
        title: 'Global por natureza',
        text: 'Feito para nômades e viajantes cripto. Pague de onde estiver.',
      },
    ],
  },

  contact: {
    eyebrow: 'Contato',
    title: 'Prontos quando você estiver.',
    text: 'O WhatsApp é o caminho mais rápido: normalmente respondemos em menos de uma hora.',
    chatWithUs: 'Fale com a gente',
    emailLabel: 'E-mail',
    followJourney: 'Acompanhe a jornada',
    basedIn: 'Estamos em',
  },

  footer: {
    contact: 'Contato',
    quickLinks: 'Links rápidos',
    services: 'Experiências',
    gallery: 'Galeria',
    payWithCrypto: 'Pague com cripto',
    rights: 'Todos os direitos reservados.',
  },

  whatsappFloat: {
    aria: 'Converse pelo WhatsApp',
  },

  customize: {
    aria: 'Personalize sua experiência',
    title: 'Monte seu pacote',
    subtitle: 'Escolha experiências · defina o grupo · veja o preço na hora',
    people: 'Pessoas',
    bikeDays: 'Dias de moto',
    nights: 'Noites',
    selectExperiences: 'Escolha suas experiências',
    yourPackage: 'Seu pacote',
    colExperience: 'Experiência',
    colBreakdown: 'Detalhamento',
    colTotal: 'Total',
    quote: 'sob consulta',
    estimatedTotal: 'Total estimado',
    extras: '+ extras',
    emptyHint: 'Escolha pelo menos uma experiência para ver o preço.',
    sendToWhatsApp: 'Enviar pelo WhatsApp',
    unitDay: '/dia',
    unitPersonNight: '/p·noite',
    unitPerson: '/pessoa',
    abbrDays: 'd',
    abbrPeople: 'p',
    abbrNights: 'n',
    waMessage: {
      intro: 'Olá! Quero montar um pacote personalizado:\n',
      bikeLine: (name, days, price, total) => `• ${name} — ${days} dias × US$${price} = US$${total}`,
      stayLine: (name, people, nights, price, total) =>
        `• ${name} — ${people}p × ${nights} noites × US$${price} = US$${total}`,
      quoteLine: (name) => `• ${name} — preço sob consulta`,
      peopleLine: (name, people, price, total) => `• ${name} — ${people} pessoas × US$${price} = US$${total}`,
      group: (people) => `\nGrupo: ${people} pessoas`,
      total: (total) => `Total estimado: US$ ${total}`,
      outro: '\nVocês me ajudam a planejar os detalhes?',
    },
  },

  servicePage: {
    allExperiences: 'Todas as experiências',
    whatsIncluded: 'O que está incluso',
    photoAlt: (name, n) => `${name}, foto ${n}`,
    notFound: 'Experiência não encontrada.',
    backHome: '← Voltar ao início',
  },
};

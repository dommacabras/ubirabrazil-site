// Central config — change once, propagates everywhere.
// Replace the placeholder values below with the real brand name and WhatsApp number.

export const SITE = {
  brand: 'Ubira Brazil',
  tagline: 'Curated adventures in Santa Catarina — pay in BRL, USD or crypto.',
  location: 'Florianópolis, Santa Catarina, Brazil',
  email: 'hello@ubirabrazil.com', // TODO: trocar quando email definitivo estiver pronto
  whatsappNumber: '5511991418315',
  instagram: 'https://instagram.com/ubirabrazil',
  // Coinbase Commerce checkout URL or hosted page (replace with your real one)
  coinbaseCheckoutUrl: 'https://commerce.coinbase.com/checkout/your-checkout-id',
  acceptedCryptos: ['BTC', 'ETH', 'USDT', 'USDC', 'LTC'],
};

export const waLink = (service = 'your services') => {
  const text = encodeURIComponent(`Hi, I'm interested in ${service}`);
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
};

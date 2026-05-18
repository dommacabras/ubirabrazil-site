# Floripa Curated — Site

Site SPA em React + Vite + Tailwind + Framer Motion para operação de turismo premium em Santa Catarina, com botão flutuante de WhatsApp e seção de pagamento em cripto via Coinbase Commerce.

## Pré-requisitos

- [Node.js](https://nodejs.org) 20 LTS ou superior
- npm (vem com o Node)

## Instalar e rodar localmente

```powershell
cd C:\TURISMO\SITE\turismo-site
npm install
npm run dev
```

Abra http://localhost:5173 — alterações salvas atualizam na hora (HMR).

## Build de produção

```powershell
npm run build
npm run preview   # serve o /dist localmente para conferir
```

## Antes do deploy — preencher os placeholders

Edite **um único arquivo**: `src/config/site.js`

| Campo | O que colocar |
|---|---|
| `brand` | Nome final da marca |
| `whatsappNumber` | Número no formato E.164 sem `+` (ex.: `5548999999999`) |
| `email` | E-mail de contato |
| `instagram` | URL completa do perfil |
| `coinbaseCheckoutUrl` | URL do checkout/hosted page no Coinbase Commerce |

Outros pontos opcionais:
- `src/data/services.js` — descrições, preços, durações, imagens dos 7 serviços
- `src/data/testimonials.js` — depoimentos reais quando tiver
- `src/data/gallery.js` — trocar URLs do `picsum.photos` pelas suas fotos (mover para `/public/images/` e referenciar como `/images/nome.jpg`)
- `index.html` — `<title>` e `<meta description>`

## Deploy na Vercel (5 minutos, grátis)

### Opção A — via Git (recomendada)
1. Criar repositório no GitHub e fazer push da pasta `turismo-site`.
2. Acessar [vercel.com/new](https://vercel.com/new), importar o repo.
3. Vercel detecta Vite automaticamente:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Clicar **Deploy**. URL pronta em ~1 min.
5. Em **Settings → Domains**, conectar o domínio próprio.

### Opção B — via CLI (sem Git)
```powershell
npm i -g vercel
vercel            # primeira vez: faz login + cria o projeto
vercel --prod     # publica em produção
```

## Estrutura de pastas

```
turismo-site/
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ components/
│  │  ├─ Navbar.jsx           # nav fixa + hamburguer mobile
│  │  ├─ Hero.jsx             # full-screen com CTA
│  │  ├─ About.jsx
│  │  ├─ Services.jsx         # grid dos 7 cards
│  │  ├─ ServiceCard.jsx      # card clicável
│  │  ├─ ServiceModal.jsx     # modal de detalhes
│  │  ├─ Gallery.jsx          # masonry de fotos
│  │  ├─ Testimonials.jsx     # carousel auto-play
│  │  ├─ CryptoSection.jsx    # seção Coinbase Commerce
│  │  ├─ Contact.jsx
│  │  ├─ Footer.jsx
│  │  └─ WhatsAppFloat.jsx    # botão flutuante
│  ├─ config/site.js          # ⭐ configurar marca, WhatsApp, etc.
│  ├─ data/
│  │  ├─ services.js          # os 7 serviços
│  │  ├─ testimonials.js
│  │  └─ gallery.js
│  ├─ App.jsx                 # composição + lazy load
│  ├─ main.jsx
│  └─ index.css               # Tailwind + componentes utilitários
├─ index.html
├─ package.json
├─ tailwind.config.js
├─ postcss.config.js
└─ vite.config.js
```

## Otimizações aplicadas

- **Mobile-first** em toda a paleta de breakpoints.
- **Lazy loading** das imagens (`loading="lazy"`) e `fetchpriority="high"` no hero.
- **Code splitting** com `React.lazy` para as seções abaixo da dobra.
- **Fonts** com `preconnect` + `display=swap`.
- **Modal** com lock de scroll do body + fecha no `Esc` + click fora.
- **Smooth scroll** nativo via CSS.
- **Animações reduzidas** automaticamente em devices que respeitam `prefers-reduced-motion` (padrão do Framer Motion).

## Próximos passos sugeridos

- Substituir todas as imagens `picsum.photos` por fotos reais (mover para `/public/images/`).
- Configurar o Coinbase Commerce e colar a URL real em `coinbaseCheckoutUrl`.
- Adicionar Google Analytics 4 / Meta Pixel no `index.html` antes de rodar tráfego pago.
- Adicionar `sitemap.xml` e `robots.txt` em `/public` antes do STEP 5 (Google Ads).
- Considerar versões PT/ES (i18n) quando o tráfego pago internacional escalar.

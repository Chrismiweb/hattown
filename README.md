# Hattown

Caps and apparel storefront. React + Vite + Tailwind CSS.

## Stack

- **React 19** + **React Router 7** — client-side routing
- **Vite** — build tooling / dev server
- **Tailwind CSS 3** — styling, configured with the brand's design tokens
- **lucide-react** — icon set

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/
    layout/       Navbar, Footer, AnnouncementBar, MarqueeStrip, Layout
    home/         Homepage-only sections (Hero, CategoryGrid, ProductGrid, ...)
    ui/           Shared primitives (Button, Tag, ProductCard, Skyline)
  pages/          One file per route: Home, Shop, Product, Cart, About
  data/           Mock product catalog (swap for a real API/CMS later)
  lib/            CartContext — app-wide cart state
  index.css       Tailwind layers + design-system component classes
  App.jsx         Route table
  main.jsx        Entry point, mounts <App /> inside BrowserRouter
```

## Design system

Defined as Tailwind theme extensions in `tailwind.config.js`:

| Token | Value | Use |
|---|---|---|
| `ink` | `#0B0B0A` | Primary text / dark sections |
| `paper` | `#F5F4EF` | Primary background |
| `paper-dim` | `#EAE8E0` | Secondary/alternating section background |
| `concrete` | `#8C8B85` | Muted text |
| `line` / `line-dark` | `#D8D6CE` / `#33322E` | Hairline borders, light/dark contexts |
| `signal` | `#FFC629` | Single accent — used sparingly, like signage/hazard tape |

Typography: `font-display` (Archivo Black) for headlines, `font-sans` (Inter) for
body copy, `font-mono` (JetBrains Mono) for prices, tags, and labels.

The **Skyline** component (`src/components/ui/Skyline.jsx`) is the brand's
signature graphic — a flat silhouette echoing the buildings/lighthouse in the
Hattown logo — reused as a structural divider across the site rather than as
one-off decoration.

## Data

`src/data/products.js` is a static placeholder catalog. Real product photos
and a real backend/CMS (Shopify Storefront API, etc.) are meant to replace it
— every component only depends on the `{ id, slug, name, price, category,
fit, img, description }` shape, so swapping the source is a one-file change.

## Cart

`src/lib/CartContext.jsx` holds in-memory cart state (no persistence yet).
Wire up `localStorage` or a backend cart once checkout is real.

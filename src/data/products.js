/**
 * Placeholder product catalog. Swap this for a real data source
 * (Shopify Storefront API, a CMS, your own backend) later — every
 * component here just reads this shape:
 *   { id, slug, name, price, category, img, description }
 */
export const products = [
  {
    id: "harbor-59fifty",
    slug: "harbor-59fifty-fitted",
    name: "Harbor 59FIFTY Fitted",
    price: 48.0,
    category: "Headwear",
    fit: "Fitted",
    img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    description: "Structured six-panel fitted with a flat brim and the harbor-district skyline patch.",
  },
  {
    id: "skyline-snapback",
    slug: "skyline-snapback",
    name: "Skyline Snapback",
    price: 42.0,
    category: "Headwear",
    fit: "Snapback",
    img: "public/video/photo_2026-08-10_19-14-42.jpg",
    description: "Our signature silhouette, hand-finished with an adjustable snap closure.",
  },
  {
    id: "downtown-trucker",
    slug: "downtown-trucker",
    name: "Downtown Trucker",
    price: 38.0,
    category: "Headwear",
    fit: "Trucker",
    img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=800&auto=format&fit=crop",
    description: "Breathable mesh back, structured front panel, built for long days on the block.",
  },
  {
    id: "lighthouse-dad-hat",
    slug: "lighthouse-dad-hat",
    name: "Lighthouse Dad Hat",
    price: 34.0,
    category: "Headwear",
    fit: "Unstructured",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    description: "Unstructured low-profile fit with a soft curved brim.",
  },
  {
    id: "hattown-crest-tee",
    slug: "hattown-crest-tee",
    name: "Hattown Crest Tee",
    price: 32.0,
    category: "Apparel",
    fit: "Regular",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    description: "Heavyweight cotton tee with the crest across the chest.",
  },
  {
    id: "city-grid-hoodie",
    slug: "city-grid-hoodie",
    name: "City Grid Hoodie",
    price: 68.0,
    category: "Apparel",
    fit: "Regular",
    img: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=800&auto=format&fit=crop",
    description: "Midweight fleece hoodie with the skyline grid printed across the back.",
  },
  {
    id: "block-crewneck",
    slug: "block-crewneck",
    name: "Block Crewneck",
    price: 58.0,
    category: "Apparel",
    fit: "Regular",
    img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    description: "Garment-dyed crewneck, brushed interior, small embroidered wordmark.",
  },
  {
    id: "harbor-jacket",
    slug: "harbor-jacket",
    name: "Harbor Jacket",
    price: 94.0,
    category: "Apparel",
    fit: "Regular",
    img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=800&auto=format&fit=crop",
    description: "Water-resistant shell jacket with the lighthouse patch on the sleeve.",
  },
];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (category) =>
  category ? products.filter((p) => p.category === category) : products;

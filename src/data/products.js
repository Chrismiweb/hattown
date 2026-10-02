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
    img: "/video/image_df7dfcf6.png",
    description: "Structured six-panel fitted with a flat brim and the harbor-district skyline patch.",
  },
    {
    id: "block-crewneck",
    slug: "block-crewneck",
    name: "Block Crewneck",
    price: 58.0,
    category: "Apparel",
    fit: "Regular",
    img: "/video/download (1).jpeg",
    description: "Garment-dyed crewneck, brushed interior, small embroidered wordmark.",
  },
  {
    id: "harbor-jacket",
    slug: "harbor-jacket",
    name: "Harbor Jacket",
    price: 94.0,
    category: "Apparel",
    fit: "Regular",
    img: "/video/image_c00bb7d5.png",
    description: "Water-resistant shell jacket with the lighthouse patch on the sleeve.",
  },
  {
    id: "skyline-snapback",
    slug: "skyline-snapback",
    name: "Skyline Snapback",
    price: 42.0,
    category: "Headwear",
    fit: "Snapback",
    img: "/video/b80ba317-848b-4099-85ff-d603ed14cc28.png",
    description: "Our signature silhouette, hand-finished with an adjustable snap closure.",
  },
  {
    id: "downtown-trucker",
    slug: "downtown-trucker",
    name: "Downtown Trucker",
    price: 38.0,
    category: "Headwear",
    fit: "Trucker",
    img: "/video/download (4).jpeg",
    description: "Breathable mesh back, structured front panel, built for long days on the block.",
  },
  
  {
    id: "lighthouse-dad-hat",
    slug: "lighthouse-dad-hat",
    name: "Lighthouse Dad Hat",
    price: 34.0,
    category: "Headwear",
    fit: "Unstructured",
    img: "/video/image_dfe1aa3d.png",
    description: "Unstructured low-profile fit with a soft curved brim.",
  },
  {
    id: "hattown-crest-tee",
    slug: "hattown-crest-tee",
    name: "Hattown Crest Tee",
    price: 32.0,
    category: "Apparel",
    fit: "Regular",
    img: "/video/image_ffb6f90e.png",
    description: "Heavyweight cotton tee with the crest across the chest.",
  },


];

export const getProductBySlug = (slug) => products.find((p) => p.slug === slug);
export const getProductsByCategory = (category) =>
  category ? products.filter((p) => p.category === category) : products;

import { Link } from "react-router-dom";

/**
 * 2x3 edge-to-edge collection grid — modeled on the New Era
 * "Just Caps" homepage layout. No gutters between tiles; each
 * tile carries its own title, one-line description, and a
 * white pill CTA anchored bottom-left.
 */
const COLLECTIONS = [
  {
    title: "City Series Vol. 04",
    desc: "The skyline drop — six fits, one silhouette.",
    to: "/shop",
    img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Harbor District",
    desc: "Structured fits inspired by the waterfront.",
    to: "/shop",
    img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Trucker Restock",
    desc: "Back in stock — the mesh-back fan favorites.",
    to: "/shop?fit=Trucker",
    img: "/video/photo_2026-08-10_19-14-42.jpg",
  },
  {
    title: "Denim Blocks",
    desc: "Patchwork denim crowns, unstructured and easy.",
    to: "/shop",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Fitted Collection",
    desc: "Flat brim, structured crown, zero give.",
    to: "/shop?fit=Fitted",
    img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Apparel Line",
    desc: "Hoodies and crewnecks built for the block.",
    to: "/shop?category=Apparel",
    img: "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function CollectionBanners() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {COLLECTIONS.map((c) => (
        <Link
          to={c.to}
          key={c.title}
          className="group relative block overflow-hidden aspect-[4/3] md:aspect-[3/2]"
        >
          <img
            src={c.img}
            alt={c.title}
            className="absolute inset-0 w-full h-full object-cover grayscale-[45%] contrast-[1.05] transition-transform duration-500 ease-out group-hover:scale-[1.045]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <h3 className="text-[20px] md:text-[24px] leading-tight text-paper mb-1.5">{c.title}</h3>
            <p className="text-[13px] md:text-[14px] normal-case font-sans text-paper/80 mb-5 max-w-[36ch]">
              {c.desc}
            </p>
            <span className="inline-flex items-center rounded-full bg-paper text-ink text-[13px] font-medium px-5 py-2.5 normal-case transition-colors duration-200 group-hover:bg-signal">
              Shop Collection
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}
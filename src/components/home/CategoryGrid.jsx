import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  { name: "Snapbacks", fit: "Snapback", img: "/video/ChatGPT Image Aug 27, 2026, 12_27_23 AM.png" },
  { name: "Fitted", fit: "Fitted", img: "/video/download (4).jpeg" },
  { name: "Trucker", fit: "Trucker", img: "/video/b80ba317-848b-4099-85ff-d603ed14cc28.png" },
  { name: "Apparel", fit: null, category: "Apparel", img: "/video/image_dfe1aa3d.png" },
];

export default function CategoryGrid() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-24">
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-[32px] md:text-[44px] leading-none">Shop by Fit</h2>
        <span className="font-mono text-[12px] tracking-widest uppercase hidden md:block text-concrete">
          {CATEGORIES.length} Categories
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {CATEGORIES.map((c) => (
          <Link
            to={c.category ? `/shop?category=${c.category}` : `/shop?fit=${c.fit}`}
            key={c.name}
            className="group relative block overflow-hidden aspect-[3/4]"
          >
            <img
              src={c.img}
              alt={c.name}
              className="absolute inset-0 w-full h-full object-cover grayscale-[55%] transition-transform duration-500 ease-out group-hover:scale-[1.045]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/0 via-transparent to-ink/75" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 flex items-center justify-between">
              <span className="font-display text-[16px] md:text-[19px] text-paper">{c.name}</span>
              <ArrowUpRight
                size={18}
                className="text-paper transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

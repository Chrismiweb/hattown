import { Link } from "react-router-dom";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Headwear", to: "/shop?category=Headwear" },
      { label: "Apparel", to: "/shop?category=Apparel" },
      { label: "New Arrivals", to: "/shop" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Order Status", to: "/" },
      { label: "Returns & Exchanges", to: "/" },
      { label: "Size Guide", to: "/" },
    ],
  },
  {
    title: "Hattown",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "Store Locator", to: "/" },
      { label: "Careers", to: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 pt-16 md:pt-20 pb-6">
        <div className="grid md:grid-cols-4 gap-10 pb-14 border-b border-line-dark">
          <div>
            <p className="font-display text-[20px] mb-3">HATTOWN</p>
            <p className="text-[13px] leading-relaxed text-concrete">
              Caps built for the skyline. Est. in the harbor district.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="font-mono text-[11px] tracking-widest uppercase mb-4 text-concrete">
                {col.title}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-[14px] focus-ring">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6">
          <p className="font-mono text-[11px] text-concrete">© 2026 Hattown. All rights reserved.</p>
          <p className="font-mono text-[11px] text-concrete">Made in Hattown, USA</p>
        </div>
      </div>
      <div className="select-none pointer-events-none -mb-[3vw]">
        <p className="font-display text-[19vw] leading-[0.8] text-center text-ink-soft">HATTOWN</p>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../../lib/CartContext";

const LINKS = [
  { label: "Headwear", to: "/shop?category=Headwear" },
  { label: "Apparel", to: "/shop?category=Apparel" },
  { label: "New Arrivals", to: "/shop" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-paper border-b border-line">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8 h-[76px] flex items-center justify-between">
        <button
          className="md:hidden focus-ring"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <Link to="/" className="font-display text-[22px] md:text-[26px] tracking-tight">
          HATTOWN
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {LINKS.map((l) => (
            <NavLink
              key={l.label}
              to={l.to}
              className="font-mono text-[12px] tracking-widest uppercase focus-ring"
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <button className="focus-ring" aria-label="Search">
            <Search size={19} />
          </button>
          <Link to="/cart" className="relative focus-ring" aria-label="Cart">
            <ShoppingBag size={19} />
            {count > 0 && (
              <span className="font-mono absolute -top-2 -right-2 flex items-center justify-center w-4 h-4 rounded-full bg-signal text-ink text-[9px]">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col border-t border-line bg-paper">
          {LINKS.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-mono text-[13px] tracking-widest uppercase px-5 py-4 border-b border-line"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

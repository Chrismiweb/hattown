import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ui/ProductCard";
import { ChevronDown } from "lucide-react";

const CATEGORIES = ["Headwear", "Apparel"];
const FITS = ["Fitted", "Snapback", "Trucker", "Unstructured", "Regular"];

function FilterGroup({ title, options, active, onToggle }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-line py-5">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between font-mono text-[12px] tracking-widest uppercase focus-ring"
      >
        {title}
        <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="mt-4 space-y-2.5">
          {options.map((opt) => (
            <label key={opt} className="flex items-center gap-2.5 text-[13px] cursor-pointer">
              <input
                type="checkbox"
                checked={active.includes(opt)}
                onChange={() => onToggle(opt)}
                className="accent-ink w-3.5 h-3.5"
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const fitParam = searchParams.get("fit");

  const [categories, setCategories] = useState(categoryParam ? [categoryParam] : []);
  const [fits, setFits] = useState(fitParam ? [fitParam] : []);

  const toggle = (setFn, list) => (opt) =>
    setFn(list.includes(opt) ? list.filter((o) => o !== opt) : [...list, opt]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catMatch = categories.length === 0 || categories.includes(p.category);
      const fitMatch = fits.length === 0 || fits.includes(p.fit);
      return catMatch && fitMatch;
    });
  }, [categories, fits]);

  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-8 py-10 md:py-14">
      <div className="mb-10">
        <h1 className="text-[36px] md:text-[52px] leading-none mb-2">Shop All</h1>
        <p className="font-mono text-[12px] tracking-widest uppercase text-concrete">
          {filtered.length} Products
        </p>
      </div>

      <div className="grid md:grid-cols-[220px_1fr] gap-10">
        <aside>
          <FilterGroup title="Category" options={CATEGORIES} active={categories} onToggle={toggle(setCategories, categories)} />
          <FilterGroup title="Fit" options={FITS} active={fits} onToggle={toggle(setFits, fits)} />
        </aside>

        <div>
          {filtered.length === 0 ? (
            <div className="py-20 text-center">
              <p className="font-display text-[22px] mb-2">No Matches</p>
              <p className="text-[14px] text-concrete">Try clearing a filter to see more of the drop.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

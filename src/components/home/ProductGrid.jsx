import { Link } from "react-router-dom";
import { products } from "../../data/products";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

/**
 * "Best Sellers" hero — modeled on the New Era homepage layout:
 * a large center image carrying an oversized headline + a single
 * CTA pill, flanked on both sides by small product thumbnails on
 * plain backgrounds.
 */
export default function ProductGrid() {
  const headwear = products.filter((p) => p.category === "Headwear");
  const leftThumbs = headwear.slice(0, 3);
  const rightThumbs = headwear.slice(1, 4);

  return (
    <section className="bg-paper-dim border-t border-line">
      <div className="max-w-[1800px] mx-auto px-5 md:px-0 py-16 md:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-[1fr_2fr_1fr] gap-3 md:gap-4">
          {/* Left thumbnails — hidden on small screens to keep focus on the hero */}
          <div className="hidden lg:flex flex-col gap-4">
            {leftThumbs.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.slug}`}
                className="group block aspect-square bg-paper border border-line overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
              </Link>
            ))}
          </div>

          {/* Center hero */}
          <div className="relative col-span-2 lg:col-span-1 aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-ink">
            <img
              src="/video/photo_2026-08-10_19-14-39.jpg"
              alt="Hattown best-selling caps"
              className="absolute inset-0 w-full h-full object-cover grayscale-[25%] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-ink/25" />

            <div className="relative h-full flex flex-col items-center justify-between p-6 md:p-10 text-center">
              <h2 className="font-display leading-[0.9] text-[15vw] sm:text-[9vw] lg:text-[4.4vw] text-paper pt-2">
                Best
                <br />
                Sellers
              </h2>
              <Button to="/shop" variant="onDark" className="mb-2">
                Shop Collection <ArrowRight size={14} />
              </Button>
            </div>
          </div>

          {/* Right thumbnails */}
          <div className="flex flex-col gap-4">
            {rightThumbs.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.slug}`}
                className="group block aspect-square bg-paper border border-line overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
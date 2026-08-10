import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { getProductBySlug, products } from "../data/products";
import { useCart } from "../lib/CartContext";
import Tag from "../components/ui/Tag";
import ProductCard from "../components/ui/ProductCard";
import { Minus, Plus, Check } from "lucide-react";

const SIZES = ["S", "M", "L", "XL"];

export default function Product() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [size, setSize] = useState("M");
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return <Navigate to="/shop" replace />;

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1600);
  };

  return (
    <>
      <section className="max-w-[1400px] mx-auto px-5 md:px-8 py-10 md:py-14">
        <nav className="font-mono text-[11px] tracking-widest uppercase text-concrete mb-8">
          <Link to="/shop" className="focus-ring">Shop</Link> / {product.category} / {product.name}
        </nav>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div className="relative overflow-hidden aspect-[4/5] bg-paper-dim border border-line">
            <img src={product.img} alt={product.name} className="absolute inset-0 w-full h-full object-cover" />
            <Tag variant="solid" className="absolute top-4 left-4">Hattown</Tag>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-widest uppercase text-concrete mb-3">{product.category}</p>
            <h1 className="text-[32px] md:text-[42px] leading-[0.95] mb-4">{product.name}</h1>
            <p className="font-mono text-[20px] mb-6">${product.price.toFixed(2)}</p>
            <p className="text-[14px] leading-relaxed text-concrete mb-8 normal-case font-sans">
              {product.description}
            </p>

            {product.category === "Apparel" && (
              <div className="mb-8">
                <p className="font-mono text-[11px] tracking-widest uppercase mb-3">Size</p>
                <div className="flex gap-2">
                  {SIZES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`w-11 h-11 font-mono text-[13px] border border-ink focus-ring ${
                        size === s ? "bg-ink text-paper" : "bg-transparent text-ink"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <p className="font-mono text-[11px] tracking-widest uppercase mb-3">Quantity</p>
              <div className="inline-flex items-center border border-ink">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center focus-ring"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="font-mono text-[13px] w-10 text-center">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center focus-ring"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button onClick={handleAdd} className="btn w-full md:w-auto justify-center focus-ring">
              {added ? (
                <>
                  Added to Cart <Check size={15} />
                </>
              ) : (
                "Add to Cart"
              )}
            </button>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-paper-dim border-t border-line">
          <div className="max-w-[1400px] mx-auto px-5 md:px-8 py-16 md:py-20">
            <h2 className="text-[28px] md:text-[36px] leading-none mb-10">You Might Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

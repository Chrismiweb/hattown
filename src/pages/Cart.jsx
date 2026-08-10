import { Link } from "react-router-dom";
import { useCart } from "../lib/CartContext";
import { Minus, Plus, X, ArrowRight } from "lucide-react";

export default function Cart() {
  const { items, removeItem, updateQty, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <section className="max-w-[1400px] mx-auto px-5 md:px-8 py-24 text-center">
        <h1 className="text-[32px] md:text-[44px] leading-none mb-4">Your Cart Is Empty</h1>
        <p className="text-[14px] text-concrete mb-8">Nothing in Hattown's cart yet — go find a fit.</p>
        <Link to="/shop" className="btn focus-ring">
          Shop All <ArrowRight size={14} />
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-8 py-10 md:py-14">
      <h1 className="text-[32px] md:text-[44px] leading-none mb-10">Your Cart</h1>

      <div className="grid md:grid-cols-[1fr_360px] gap-10 md:gap-16">
        <ul className="divide-y divide-line">
          {items.map((item) => (
            <li key={item.id} className="flex gap-5 py-6">
              <div className="w-24 h-28 shrink-0 bg-paper-dim border border-line overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[15px] font-medium mb-1">{item.name}</h3>
                    <p className="font-mono text-[13px] text-concrete">${item.price.toFixed(2)}</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="focus-ring text-concrete" aria-label="Remove item">
                    <X size={16} />
                  </button>
                </div>
                <div className="inline-flex items-center border border-ink w-fit">
                  <button
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="w-9 h-9 flex items-center justify-center focus-ring"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="font-mono text-[12px] w-8 text-center">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="w-9 h-9 flex items-center justify-center focus-ring"
                    aria-label="Increase quantity"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="bg-paper-dim border border-line p-6 md:p-8 h-fit">
          <h2 className="font-mono text-[12px] tracking-widest uppercase mb-6">Order Summary</h2>
          <div className="flex justify-between text-[14px] mb-3">
            <span className="text-concrete">Subtotal</span>
            <span className="font-mono">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-[14px] mb-6 pb-6 border-b border-line">
            <span className="text-concrete">Shipping</span>
            <span className="font-mono">{subtotal >= 75 ? "Free" : "$8.00"}</span>
          </div>
          <div className="flex justify-between text-[16px] mb-8">
            <span>Total</span>
            <span className="font-mono">${(subtotal + (subtotal >= 75 || subtotal === 0 ? 0 : 8)).toFixed(2)}</span>
          </div>
          <button className="btn w-full justify-center focus-ring">
            Checkout <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

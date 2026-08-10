import { Link } from "react-router-dom";
import Tag from "./Tag";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.slug}`} className="block group">
      <div className="relative overflow-hidden mb-4 aspect-[4/5] bg-paper border border-line">
        <img
          src={product.img}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover grayscale-[15%] transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <Tag variant="solid" className="absolute top-3 left-3">
          Hattown
        </Tag>
      </div>
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-[14px] md:text-[15px] font-medium leading-snug normal-case">{product.name}</h3>
        <span className="font-mono text-[13px] shrink-0">${product.price.toFixed(2)}</span>
      </div>
    </Link>
  );
}

import Hero from "../components/home/Hero";
import MarqueeStrip from "../components/layout/MarqueeStrip";
import CategoryGrid from "../components/home/CategoryGrid";
import CollectionBanners from "../components/home/CollectionBanners";
import ProductGrid from "../components/home/ProductGrid";
import BrandStatement from "../components/home/BrandStatement";
import EmailSignup from "../components/home/EmailSignup";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <CategoryGrid />
      <CollectionBanners />
      <ProductGrid />
      <BrandStatement />
      <EmailSignup />
    </>
  );
}

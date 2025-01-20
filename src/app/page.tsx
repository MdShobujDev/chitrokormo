import FeatureSection from "@/components/FeatureSection";
import Category from "@/components/HomePage/Category";
import FlashSale from "@/components/HomePage/Flash Sale/FlashSale";
import ForYou from "@/components/HomePage/ForYou";
import HeroCarousel from "@/components/HomePage/HeroCarousel";
import TopProduct from "@/components/HomePage/Top Products/TopProduct";
import TrendingProducts from "@/components/HomePage/TrendingProducts";

export default function Home() {
  return (
    <>
      <main>
        <HeroCarousel />
        <Category />
        <TrendingProducts />
        <TopProduct />
        <FlashSale />
        <ForYou />
        <FeatureSection />
      </main>
    </>
  );
}

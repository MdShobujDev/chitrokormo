import Category from "@/app/_components/Category";
import FlashSale from "@/app/_components/Flash Sale/FlashSale";
import ForYou from "@/app/_components/ForYou";
import HeroCarousel from "@/app/_components/HeroCarousel";
import TopProduct from "@/app/_components/Top Products/TopProduct";
import TrendingProducts from "@/app/_components/TrendingProducts";
import FeatureSection from "@/components/FeatureSection";

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

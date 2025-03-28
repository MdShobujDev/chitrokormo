import Category from "@/app/_components/Category";
import ForYou from "@/app/_components/ForYou";
import HeroCarousel from "@/app/_components/HeroCarousel";
import FeatureSection from "@/components/FeatureSection";
import { Suspense } from "react";
import FlashSale from "./_components/Flash Sale/FlashSale";
import TopProduct from "./_components/Top Products/TopProduct";
import TrendingProducts from "./_components/TrendingProducts";

export default function Home() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <main>
        <HeroCarousel />
        <Category />
        <TrendingProducts />
        <TopProduct />
        <FlashSale />
        <ForYou />
        <FeatureSection />
      </main>
    </Suspense>
  );
}

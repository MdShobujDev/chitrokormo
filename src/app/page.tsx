import Category from "@/components/HomePage/Category";
import ForYou from "@/components/HomePage/ForYou";
import HeroCarousel from "@/components/HomePage/HeroCarousel";
import TrendingProducts from "@/components/HomePage/TrendingProducts";

export default function Home() {
  return (
    <>
      <main className=" mb-5">
        <HeroCarousel />
        <Category />
        <TrendingProducts />
        <ForYou />
      </main>
    </>
  );
}

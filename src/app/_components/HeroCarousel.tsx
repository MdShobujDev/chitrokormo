import EmblaCarousel from "@/components/shared/EmblaCarouel";
import client from "@/lib/apollo-client";
import { GET_BANNERS } from "@/lib/queries";
import Image from "next/image";
import React from "react";

interface BannerProps {
  documentId: string;
  slug: string;
  banner_image: {
    url: string;
    documentId: string;
  };
}
const HeroCarousel: React.FC = async () => {
  const { data } = await client.query({ query: GET_BANNERS });

  return (
    <section className="max-w-7xl mx-auto">
      <EmblaCarousel dotButtons autoplay>
        {data.banners.map((banner: BannerProps) => (
          <div
            key={banner.documentId}
            className="[flex:0_0_100%] w-full h-full"
          >
            <Image
              src={banner.banner_image.url}
              alt="Banner Image"
              width={1280} // Ensure width is provided
              height={500} // Ensure height is provided
              className="sm:aspect-[16/5] aspect-[16/7] "
            />
          </div>
        ))}
      </EmblaCarousel>
    </section>
  );
};

export default HeroCarousel;

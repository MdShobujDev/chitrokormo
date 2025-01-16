"use client";
import banner_1 from "@/../public/images/Hero_section_banner/banner_1.jpg";
import banner_2 from "@/../public/images/Hero_section_banner/banner_2.jpg";
import banner_3 from "@/../public/images/Hero_section_banner/banner_3.jpg";
import banner_4 from "@/../public/images/Hero_section_banner/banner_4.jpg";
import banner_5 from "@/../public/images/Hero_section_banner/banner_5.jpg";
import { Carousel } from "antd";
import Image from "next/image";
import React from "react";

const HeroCarousel: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <section className=" max-w-7xl mx-auto ">
      <Carousel autoplay>
        <div>
          <Image src={banner_1} alt="banner_1" className=" aspect-[14/4]" />
        </div>
        <div>
          <Image src={banner_2} alt="banner_2" className=" aspect-[14/4]" />
        </div>
        <div>
          <Image src={banner_3} alt="banner_3" className=" aspect-[14/4]" />
        </div>
        <div>
          <Image src={banner_4} alt="banner_4" className=" aspect-[14/4]" />
        </div>
        <div>
          <Image src={banner_5} alt="banner_5" className=" aspect-[14/4]" />
        </div>
      </Carousel>
    </section>
  );
};

export default HeroCarousel;

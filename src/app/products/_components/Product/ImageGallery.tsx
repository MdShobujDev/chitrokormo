"use client";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";

const Images = [
  {
    id: 1,
    url: "https://plus.unsplash.com/premium_photo-1737024251796-dd751b4d9365?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    url: "https://plus.unsplash.com/premium_photo-1736984652083-e9b7a690bc78?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    url: "https://plus.unsplash.com/premium_photo-1736885282436-7ff78054d6b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    url: "https://plus.unsplash.com/premium_photo-1736851126371-632e188bf11e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const ImageGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <section className="flex min-[990px]:flex-row md:flex-col sm:flex-row flex-col gap-3">
      <div className="flex min-[990px]:flex-col md:flex-row sm:flex-col flex-row gap-1 md:order-last min-[990px]:order-none order-last sm:order-none">
        {Images.map((image, index) => (
          <div
            onClick={() => setCurrentImage(index)}
            key={image.id}
            className={cn(
              "cursor-pointer rounded-md overflow-hidden border-[2.5px] border-transparent ",
              currentImage === index && "border-primary "
            )}
          >
            <Image
              src={image.url}
              alt="product"
              className=" object-cover aspect-[4/3] "
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
      <div className="w-full">
        <Image
          src={Images[currentImage].url}
          alt="product"
          className=" object-fill object-center md:aspect-[12/8] aspect-[15/8] w-full rounded-md"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default ImageGallery;

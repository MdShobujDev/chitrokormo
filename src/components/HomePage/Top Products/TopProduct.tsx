import Image from "next/image";

const img_1 =
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img_2 =
  "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const img_3 =
  "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const TopProduct = () => {
  return (
    <section className="  max-w-7xl mx-auto sm:px-5 px-2 md:pt-10 pt-5 overflow-hidden">
      <div className=" grid gap-3 md:grid-cols-4 grid-cols-2 w-full ">
        <div className="rounded-md overflow-hidden">
          <Image
            src={img_1}
            alt="img"
            width={700}
            height={700}
            className=" aspect-[18/20] "
          />
        </div>
        {/* slider  */}
        <div className=" col-span-2 bg-yellow-100 md:order-none order-first rounded-md overflow-hidden">
          <Image
            src={img_3}
            alt="img"
            width={700}
            height={700}
            className=" md:aspect-[20/11] aspect-[16/6]"
          />
        </div>
        <div className="  rounded-md overflow-hidden">
          <Image
            src={img_2}
            alt="img"
            width={700}
            height={700}
            className=" aspect-[18/20]"
          />
        </div>
      </div>
    </section>
  );
};

export default TopProduct;

import client from "@/lib/apollo-client";
import { GET_CATEGORIES } from "@/lib/queries";
import Image from "next/image";
import Link from "next/link";
import EmblaCarousel from "../../components/shared/EmblaCarouel";

interface CategoryProps {
  name: string;
  documentId: string;
  slug: string;
  image: {
    url: string;
    name: string;
  };
}
const Category = async () => {
  const { data } = await client.query({ query: GET_CATEGORIES });

  return (
    <section className=" max-w-7xl mx-auto px-5 md:pt-10 pt-5">
      <div>
        <h1 className=" sm:text-2xl text-xl  font-bold text-primary">
          ক্যাটাগরি অনুযায়ী কেনাকাটা করুন
        </h1>
        <div className=" sm:pt-5 pt-3 ">
          <EmblaCarousel dragFree arrowButtons>
            {data.categories.map((category: CategoryProps) => (
              <Link
                href={`/products?categories=${category.name}`}
                key={category.slug}
                className="
           
                [flex:0_0_22%]
                min-[680px]:[flex:0_0_18%]
                min-[820px]:[flex:0_0_15%]
                lg:[flex:0_0_13%] min-[1170px]:[flex:0_0_10%]  sm:w-28 w-16 flex flex-col justify-between gap-1 rounded-lg  overflow-hidden relative cursor-pointer select-none bg-[#F3F3F3] sm:p-2 p-1 group/category "
              >
                <div className=" bg-red-300 rounded-lg overflow-hidden ">
                  <Image
                    src={category.image.url}
                    alt={category.image.name}
                    width={500}
                    height={500}
                    className="  aspect-[7/6] group-hover/category:scale-[1.05] transition-all duration-300 ease-linear "
                  />
                </div>
                <div>
                  <h2 className=" sm:text-xs text-[10px] text-center line-clamp-1">
                    {category.name}
                  </h2>
                </div>
              </Link>
            ))}
          </EmblaCarousel>
        </div>
      </div>
    </section>
  );
};

export default Category;

import client from "@/lib/apollo-client";
import { GET_TRENDING_PRODUCTS } from "@/lib/queries";
import EmblaCarousel from "../../components/shared/EmblaCarouel";
import ProductCard from "../../components/ui/ProductCard";

interface Image {
  name: string;
  url: string;
}

interface Review {
  rating?: number; // Optional because the reviews array may be empty
}

interface Variant {
  price: number;
}

interface ProductProps {
  title: string;
  documentId: string;
  off: number;
  SKU: string;
  reviews: Review[]; // Array of reviews
  images: Image[]; // Array of images
  variant: Variant[]; // Array of price variants
}

const TrendingProducts = async () => {
  const { data } = await client.query({
    query: GET_TRENDING_PRODUCTS,
    variables: {
      pagination: {
        limit: 10,
      },
      filters: {
        reviews: {
          rating: {
            gte: 2,
          },
        },
        total_sale: {
          gte: 1,
        },
      },
    },
  });

  return (
    <>
      {!(data.products.length === 0) && (
        <section className=" max-w-7xl mx-auto px-5 md:pt-10 pt-5 ">
          <h1 className=" sm:text-2xl text-xl font-bold text-primary">
            ট্রেন্ডিং পণ্য
          </h1>
          <div>
            <EmblaCarousel dragFree arrowButtons>
              {data?.products.map((product: ProductProps) => (
                <div
                  key={product.SKU}
                  className="[flex:0_0_65%] min-[400px]:[flex:0_0_50%]  min-[500px]:[flex:0_0_45%] sm:[flex:0_0_35%] md:[flex:0_0_30%] min-[880px]:[flex:0_0_27%] lg:[flex:0_0_19%] flex flex-col justify-between gap-3 py-3 cursor-pointer select-none"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </EmblaCarousel>
          </div>
        </section>
      )}
    </>
  );
};

export default TrendingProducts;

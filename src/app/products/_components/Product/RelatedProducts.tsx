import EmblaCarousel from "@/components/shared/EmblaCarouel";
import ProductCard from "@/components/ui/ProductCard";
import client from "@/lib/apollo-client";
import { GET_RELATED_PRODUCTS } from "@/lib/queries";

interface ImageProps {
  name: string;
  url: string;
}
interface ReviewProps {
  rating: number;
}
interface VariantProps {
  price: number;
}
interface ProductProps {
  SKU: string;
  documentId: string;
  off: number;
  title: string;
  images: ImageProps[];
  reviews: ReviewProps[];
  variant: VariantProps[];
}

interface CategoriesProps {
  products: ProductProps[];
}
const RelatedProducts = async ({ id }: { id: string }) => {
  const { data } = await client.query({
    query: GET_RELATED_PRODUCTS,
    variables: {
      documentId: id,
      pagination: {
        limit: 10,
      },
    },
  });
  // console.log("data", data);
  function flattenAndRemoveDuplicates(categories: CategoriesProps[]) {
    const uniqueProducts = new Map();
    categories.forEach((category: CategoriesProps) => {
      category.products.forEach((product: ProductProps) => {
        if (!uniqueProducts.has(product.documentId)) {
          uniqueProducts.set(product.documentId, product);
        }
      });
    });

    return Array.from(uniqueProducts.values());
  }

  const uniqueProducts = flattenAndRemoveDuplicates(data?.product?.categories);
  const relatedProducts = uniqueProducts.filter(
    (product) => product.documentId !== id
  );

  return (
    <section className=" max-w-7xl mx-auto  md:pt-10 pt-5 ">
      <h1 className=" sm:text-2xl text-xl font-bold text-primary">
        Related Products
      </h1>
      <div>
        <EmblaCarousel dragFree arrowButtons>
          {relatedProducts.map((item, index) => (
            <div
              key={index}
              className="[flex:0_0_65%] min-[400px]:[flex:0_0_50%]  min-[500px]:[flex:0_0_45%] sm:[flex:0_0_35%] md:[flex:0_0_30%] min-[880px]:[flex:0_0_27%] lg:[flex:0_0_19%] flex flex-col justify-between gap-3 py-3 cursor-pointer select-none"
            >
              <ProductCard product={item} />
            </div>
          ))}
        </EmblaCarousel>
      </div>
    </section>
  );
};

export default RelatedProducts;

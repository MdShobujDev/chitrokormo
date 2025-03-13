import client from "@/lib/apollo-client";
import { GET_PRODUCTS } from "@/lib/queries";
import Link from "next/link";
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
  size: string;
  available_quantity: number;
  stock_status: string;
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
const ForYou = async () => {
  const { data } = await client.query({
    query: GET_PRODUCTS,
    variables: {
      pagination: {
        limit: 10,
      },
    },
  });

  return (
    <section className="max-w-7xl mx-auto px-5 overflow-hidden md:pt-10 pt-5">
      <div className=" md:mb-5 mb-3 flex items-center justify-between gap-5">
        <h1 className=" sm:text-2xl text-xl font-bold text-primary">
          শুধুমাত্র আপনার জন্য
        </h1>
        <Link
          href={"/products"}
          className=" text-primary underline underline-offset-4 hover:text-blue-600 cursor-pointer transition-all font-medium"
        >
          সব পণ্য দেখুন
        </Link>
      </div>
      <div className=" grid sm:grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] w-full gap-3">
        {data.products.map((product: ProductProps) => (
          <div key={product.SKU}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <h1 className="  mt-5 text-center bg-primary hover:bg-pink-700 max-w-max text-white px-10 py-2 rounded cursor-pointer">
          আরও দেখুন
        </h1>
      </div>
    </section>
  );
};

export default ForYou;

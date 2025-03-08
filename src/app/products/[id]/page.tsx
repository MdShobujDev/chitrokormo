import client from "@/lib/apollo-client";
import { GET_PRODUCT } from "@/lib/queries";
import { Suspense } from "react";
import BreadCrumb from "../_components/Product/Breadcrumb";
import ImageGallery from "../_components/Product/ImageGallery";
import ProductDetails from "../_components/Product/ProductDetails";
import RelatedProducts from "../_components/Product/RelatedProducts";
import Tab from "../_components/Product/Tabs";
interface CategoryProps {
  name: string;
  slug: string;
}
interface List {
  id: string;
  item: string;
}

interface ListItems {
  id: string;
  title: string;
  list: List[];
}
interface DescriptionProps {
  id: string;
  summary: string;
  list_items: ListItems[];
}
interface ImageProps {
  name: string;
  url: string;
}
interface ReviewProps {
  date: string;
  documentId: string;
  rating: number;
  review: string;
  user_permissions_user: {
    username: string;
  };
}
interface VariantProps {
  available_quantity: number;
  id: string;
  price: number;
  size: string;
  stock_status: string;
}
interface ProductProps {
  SKU: string;
  documentId: string;
  off: number;
  title: string;
  total_sale: number;
  categories: CategoryProps[];
  description: DescriptionProps;
  images: ImageProps[];
  reviews: ReviewProps[];
  variant: VariantProps[];
}
interface DataProps {
  product: ProductProps;
}
const Product = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const { data } = await client.query<DataProps>({
    query: GET_PRODUCT,
    variables: {
      documentId: id,
    },
  });
  // console.log(data);
  return (
    <Suspense fallback={<div> loading ...</div>}>
      <section className=" max-w-7xl mx-auto px-5 py-10">
        <div>
          {/* top breadcrumb section  */}
          <div>
            {/* breadcrumb section  */}
            <BreadCrumb title={data?.product?.title} />
          </div>
          {/* middle section  */}
          <div className=" mt-3 flex md:flex-row flex-col gap-5">
            {/* image gallery section  */}
            <div className=" flex-1">
              <ImageGallery images={data?.product?.images} />
            </div>
            {/* product details section  */}
            <div className=" flex-1">
              <ProductDetails product={data?.product} />
            </div>
          </div>
          {/* description additional info reviews return policies section  */}
          <div className=" border sm:p-5 p-2 rounded mt-5 overflow-hidden">
            <Tab product={data?.product} />
          </div>
          {/* bottom related products section  */}
          <div>
            <RelatedProducts id={id} />
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default Product;

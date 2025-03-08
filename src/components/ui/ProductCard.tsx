import calculateDiscountedPrice from "@/utils/calculateDiscountPrice";
import formatteeNumber from "@/utils/formatteNumber";
// import { calculateAverageRating } from "@/utils/getAverageRating";
import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { TbCurrencyTaka } from "react-icons/tb";

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

const ProductCard = ({ product }: { product: ProductProps }) => {
  const calculateAverageRating = () => {
    if (product?.reviews.length === 0) return 0; // Avoid division by zero

    const total = product?.reviews.reduce(
      (sum, review) => sum + (review.rating || 0),
      0
    );
    const average = total / product?.reviews.length;

    return Math.min(Math.max(average, 0), 5); // Ensuring the value is within 0-5 range
  };
  return (
    <Link
      href={`/products/${product?.documentId}`}
      className=" bg-[#F3F3F3] p-2 rounded-lg  flex flex-col justify-between sm:gap-3 gap-2 shadow group/product cursor-pointer"
    >
      {/* image use here  */}
      <div className=" relative overflow-hidden rounded-lg">
        <Image
          src={product?.images[0]?.url}
          alt=""
          width={500}
          height={500}
          className=" rounded-lg aspect-[7/5] group-hover/product:scale-[1.05] transition-all duration-200 ease-linear"
        />
        {!(product?.off == 0) && (
          <div className=" absolute top-2 left-2 bg-primary px-1.5 py-0.5  rounded-2xl font-bold sm:text-xs text-[10px]  text-white max-w-max">
            save {product?.off}%
          </div>
        )}
        <div className="absolute top-2 right-2 cursor-pointer bg-white p-0.5 rounded hover:bg-primary hover:text-white transition-all duration-150 ease-in md:group-hover/product:block md:hidden">
          <IoCartOutline size={18} />
        </div>
      </div>
      <div className=" flex flex-col sm:gap-2 gap-1">
        <h2 className=" text-gray-800 line-clamp-1 sm:text-base text-sm">
          {product?.title}
        </h2>
        <div className=" flex items-center gap-2">
          <div className=" flex items-center text-primary">
            <span className=" text-2xl sm:text-3xl">
              <TbCurrencyTaka />
            </span>
            <h2 className=" mt-[2px] sm:text-2xl text-xl font-bold ">
              {calculateDiscountedPrice(
                product?.variant[0]?.price,
                product?.off
              )}
            </h2>
          </div>
          <div className=" flex items-center text-gray-600">
            <span>
              <TbCurrencyTaka size={15} />
            </span>
            <h2 className=" mt-[2px] line-through font-light  sm:text-base text-sm">
              {formatteeNumber(product?.variant[0]?.price)}
            </h2>
          </div>
        </div>
        <div className="  flex items-center justify-between">
          <Rate disabled allowHalf defaultValue={calculateAverageRating()} />
          <Link
            className="md:text-sm sm:text-xs text-[10px] hover:bg-black bg-primary text-white max-w-max sm:px-3 px-2 py-[4px] rounded-2xl  transition-all ease-linear duration-200"
            href={`products/${product?.documentId}`}
          >
            <span>এখনই কিনুন</span>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { TbCurrencyTaka } from "react-icons/tb";

interface ProductData {
  id: number;
  title: string;
  save: string;
  image: string;
  link: string;
  discount_amoumt: string;
  main_amount: string;
  star: string;
}

const ProductCard = ({ data }: { data: ProductData }) => {
  return (
    <div className=" bg-[#F3F3F3] p-2 rounded-lg  flex flex-col justify-between sm:gap-3 gap-2 shadow group/product hover:scale-[1.02] transition-all duration-200 ease-linear">
      {/* image use here  */}
      <div className=" relative overflow-hidden rounded-lg">
        <Image
          src={data.image}
          alt=""
          width={500}
          height={500}
          className=" rounded-lg aspect-[7/5] group-hover/product:scale-[1.05] transition-all duration-200 ease-linear"
        />
        <div className=" absolute top-2 left-2 bg-primary px-1.5 py-0.5  rounded-2xl font-bold sm:text-xs text-[10px]  text-white max-w-max">
          save 5%
        </div>
        <div className="absolute top-2 right-2 cursor-pointer bg-white p-0.5 rounded hover:bg-primary hover:text-white transition-all duration-150 ease-in md:group-hover/product:block md:hidden">
          <IoCartOutline size={18} />
        </div>
      </div>
      <div className=" flex flex-col sm:gap-2 gap-1">
        <h2 className=" text-gray-800 line-clamp-1 sm:text-base text-sm">
          ডার্ক মোড ওয়ালপেপার ডার্ক মোড ওয়ালপেপারডার্ক মোড ওয়ালপেপার
        </h2>
        <div className=" flex items-center gap-2">
          <div className=" flex items-center text-primary">
            <span className=" text-2xl sm:text-3xl">
              <TbCurrencyTaka />
            </span>
            <h2 className=" mt-[2px] sm:text-2xl text-xl font-bold ">250</h2>
          </div>
          <div className=" flex items-center text-gray-600">
            <span>
              <TbCurrencyTaka size={15} />
            </span>
            <h2 className=" mt-[2px] line-through font-light  sm:text-base text-sm">
              299
            </h2>
          </div>
        </div>
        <div className=" flex items-center justify-between">
          <div className=" flex items-center gap-1 text-orange-400 text-[.7rem]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <Link
            className="md:text-sm sm:text-xs text-[10px] hover:bg-black bg-primary text-white max-w-max sm:px-3 px-2 py-[4px] rounded-2xl  transition-all ease-linear duration-200"
            href={data.link}
          >
            <span>এখনই কিনুন</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

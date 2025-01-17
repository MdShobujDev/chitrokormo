import Image from "next/image";
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
    <div className=" bg-[#F3F3F3] p-2 rounded-lg  flex flex-col justify-between gap-3 shadow group/product hover:scale-[1.02] transition-all duration-200 ease-linear">
      {/* image use here  */}
      <div className=" relative overflow-hidden rounded-lg">
        <Image
          src={data.image}
          alt=""
          width={500}
          height={500}
          className=" rounded-lg aspect-[7/5] group-hover/product:scale-[1.05] transition-all duration-200 ease-linear"
        />
        <div className=" absolute top-2 left-2 bg-primary px-1.5 py-0.5  rounded-2xl font-bold text-xs text-white max-w-max">
          save 5%
        </div>
      </div>
      <div className=" flex flex-col gap-2">
        <h2 className=" text-gray-800 line-clamp-1">
          ডার্ক মোড ওয়ালপেপার ডার্ক মোড ওয়ালপেপারডার্ক মোড ওয়ালপেপার
        </h2>
        <div className=" flex items-center gap-2">
          <div className=" flex items-center text-primary">
            <span>
              <TbCurrencyTaka size={30} />
            </span>
            <h2 className=" mt-[2px] text-2xl font-bold ">250</h2>
          </div>
          <div className=" flex items-center">
            <span>
              <TbCurrencyTaka size={15} />
            </span>
            <h2 className=" mt-[2px] line-through font-light text-gray-700">
              299
            </h2>
          </div>
        </div>
        <div className=" flex items-center justify-between">
          <div className=" flex items-center gap-2 text-orange-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className=" cursor-pointer bg-white p-1 rounded hover:bg-primary hover:text-white transition-all duration-150 ease-in">
            <IoCartOutline size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

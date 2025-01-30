import Link from "next/link";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaRegClock, FaStar, FaTruckFast } from "react-icons/fa6";
import { GoArrowUpRight, GoShareAndroid } from "react-icons/go";
import {
  RiMastercardFill,
  RiShieldCheckFill,
  RiVisaLine,
} from "react-icons/ri";
import { TbCurrencyTaka, TbTruckReturn } from "react-icons/tb";
import ProductCart from "./ProductCart";

const ProductDetails = () => {
  return (
    <section className=" flex flex-col gap-3">
      {/* product category and review amounts start  */}
      <div className="flex min-[400px]:gap-10 items-center gap-5 ">
        <div className=" sm:text-base text-sm">
          ক্যাটাগরি: <span className=" text-primary">প্রসাধনী স্টিকার</span>
        </div>
        <div className="flex gap-1">
          <div className=" flex items-center gap-1 text-orange-400 sm:text-[.7rem] text-[.6rem]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className=" sm:text-base text-sm">(2 review)</p>
        </div>
      </div>
      {/* product category and review amounts end  */}

      {/* title & stock info start */}
      <h1 className=" sm:text-2xl text-xl sm:font-medium font-semibold line-clamp-2">
        ডার্ক মোড ওয়ালপেপার
      </h1>
      <div className=" border-[1.5px] text-gray-800 max-w-max px-3 py-0.5 border-primary font-medium rounded sm:text-sm text-xs">
        In stock
      </div>
      {/* title & stock info end */}

      {/* product price info start */}
      <div className=" flex items-center gap-2">
        <div className=" flex items-center text-primary">
          <span className=" text-3xl sm:text-4xl">
            <TbCurrencyTaka />
          </span>
          <h2 className=" mt-[2px] sm:text-4xl text-xl font-bold ">250</h2>
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
      {/* product price info end */}

      {/* cart & buy now button start */}
      <div className=" flex min-[1035px]:flex-row md:flex-col min-[500px]:flex-row flex-col  gap-3">
        <div>
          <ProductCart />
        </div>
        <Link
          className="flex-1 flex items-center justify-center gap-1 px-4 py-2 sm:text-base text-sm  hover:bg-black bg-primary text-white rounded-3xl  transition-all ease-linear duration-200"
          href={"/"}
        >
          <span>এখনই কিনুন</span>
          <GoArrowUpRight className=" sm:text-2xl text-xl" />
        </Link>
      </div>
      {/* cart & buy now button end */}

      <div className=" flex gap-4 flex-wrap items-center text-sm sm:text-base">
        <Link
          href={"/product/111"}
          className=" flex items-center gap-1 hover:text-primary transition-all"
        >
          <FaRegQuestionCircle /> <span>Ask a question</span>
        </Link>
        <Link
          href={"/product/111"}
          className=" flex items-center gap-1 hover:text-primary transition-all"
        >
          <FaTruckFast /> <span>Delivery & Return</span>
        </Link>
        <Link
          href={"/product/111"}
          className=" flex items-center gap-1 hover:text-primary transition-all"
        >
          <GoShareAndroid />
          <span> Share</span>
        </Link>
      </div>
      <div className=" grid min-[820px]:grid-cols-2 md:grid-cols-1 min-[500px]:grid-cols-2 grid-cols-1 grid-rows-2 min-[500px]:grid-rows-1 md:grid-rows-2 min-[820px]:grid-rows-1 gap-3 text-sm sm:text-base">
        <div className=" flex flex-col items-center justify-center text-center border px-5 py-3 rounded-lg w-full">
          <div>
            <FaRegClock size={20} />
          </div>
          <p>
            Estimate delivery times:
            <strong> 2-3 days</strong>
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center text-center border px-5 py-3 rounded-lg">
          <div>
            <TbTruckReturn size={23} />
          </div>
          <p>
            Return within <strong>20 days</strong> of purchase. Duties & taxes
            are non-refunable
          </p>
        </div>
      </div>
      <div className=" flex items-center flex-wrap gap-5">
        <div className=" flex items-center gap-1">
          <div className=" text-lg sm:text-xl text-green-600">
            <RiShieldCheckFill />
          </div>
          <p className=" text-sm sm:text-base">Guaranted Safe Checkout</p>
        </div>
        <div className=" flex gap-3">
          <div className=" text-3xl bg-gray-100 px-3 text-blue-800">
            <RiVisaLine />
          </div>
          <div className=" text-3xl bg-gray-100 px-3 text-rose-600">
            <RiMastercardFill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

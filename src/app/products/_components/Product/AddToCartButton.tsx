import Link from "next/link";
import { TbCurrencyTaka } from "react-icons/tb";

const AddToCartButton = ({ totalQuantity }: any) => {
  return (
    <Link
      href="/cart"
      className=" flex items-center justify-center gap-2 bg-black hover:bg-primary transition-all ease-linear duration-200 px-4 py-2 rounded-3xl text-white"
    >
      <span>কার্টে যোগ করুন -</span>
      <div className=" flex items-center">
        <span className=" text-2xl">
          <TbCurrencyTaka />
        </span>
        <h2 className=" mt-[2px]  text-xl font-bold ">{250 * totalQuantity}</h2>
      </div>
    </Link>
  );
};

export default AddToCartButton;

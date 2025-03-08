import Link from "next/link";
import { TbCurrencyTaka } from "react-icons/tb";

interface AddToCartButtonProps {
  totalQuantity: number;
  price: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  totalQuantity,
  price,
}) => {
  return (
    <Link
      href="/cart"
      className=" flex items-center justify-center gap-2 bg-black hover:bg-primary transition-all ease-linear duration-200 px-4 py-1.5 rounded-3xl text-white sm:text-base text-sm"
    >
      <span>কার্টে যোগ করুন -</span>
      <div className=" flex items-center">
        <TbCurrencyTaka className=" sm:text-2xl text-xl" />
        <h2 className=" mt-[2px]  sm:text-xl font-bold text-lg">
          {new Intl.NumberFormat("en-US").format(
            parseInt(price.replace(/,/g, ""), 10) * totalQuantity
          )}
        </h2>
      </div>
    </Link>
  );
};

export default AddToCartButton;

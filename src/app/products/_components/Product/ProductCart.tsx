"use client";
import { useState } from "react";
import Quantity from "../../../../components/shared/Quantity";
import AddToCartButton from "./AddToCartButton";

const ProductCart = ({ price }: { price: string }) => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = async () => {
    setQuantity(quantity + 1);
  };
  const handleDecrement = async () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="flex gap-4 items-center min-[410px]:flex-row min-[810px]:flex-row md:flex-col flex-col">
      <div className=" self-start">
        <Quantity
          quantity={quantity}
          handleDecrement={handleDecrement}
          handleIncrement={handleIncrement}
          primary
        />
      </div>
      <div className=" flex-1 w-full">
        <AddToCartButton totalQuantity={quantity} price={price} />
      </div>
    </div>
  );
};

export default ProductCart;

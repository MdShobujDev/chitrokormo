"use client";
import { useState } from "react";
import Quantity from "../../../../components/shared/Quantity";
import AddToCartButton from "./AddToCartButton";

const ProductCart = () => {
  const [totalQuantity, setTotalQuantity] = useState(1);
  const handleQuantity = (quantity: number) => {
    setTotalQuantity(quantity);
  };
  return (
    <div className="flex gap-4 items-center min-[410px]:flex-row min-[810px]:flex-row md:flex-col flex-col">
      <div className=" self-start">
        <Quantity handleQuantity={handleQuantity} primary />
      </div>
      <div className=" flex-1 w-full">
        <AddToCartButton totalQuantity={totalQuantity} />
      </div>
    </div>
  );
};

export default ProductCart;

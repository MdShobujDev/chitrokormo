"use client";
import Quantity from "@/components/shared/Quantity";
import { Badge } from "antd";
import Image from "next/image";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const CartProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (quantity: number) => {
    setQuantity(quantity);
  };
  return (
    <div className=" flex justify-between gap-4">
      <div className="flex gap-2">
        <Badge count={quantity}>
          <div className="rounded overflow-hidden ">
            <Image
              src="https://plus.unsplash.com/premium_photo-1680850209265-e4b77199e6bb?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
        </Badge>
        <div className=" flex flex-col justify-between ">
          <p className=" line-clamp-1">ক্যানভাস প্রিন্ট</p>
          <div>
            <Quantity handleQuantity={handleQuantity} secondary />
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-between items-end ">
        <p>2,400.00৳</p>
        <button className=" hover:text-primary transition-all">
          <FaXmark />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;

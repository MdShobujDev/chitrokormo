"use client";

import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface QuantityProps {
  handleQuantity: (quantity: number) => void;
  primary?: boolean;
  secondary?: boolean;
}

const Quantity: React.FC<QuantityProps> = ({
  handleQuantity,
  primary = false,
  secondary = false,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    handleQuantity(quantity);
  }, [quantity]);

  return (
    <div
      className={cn(
        "   rounded-3xl flex items-center  max-w-max",
        secondary && " px-1 py-0.5 bg-gray-200/50 gap-2 backdrop-blur",
        primary && " px-2.5 py-1.5 bg-gray-100 gap-5"
      )}
    >
      <button
        onClick={handleDecrement}
        className={cn(
          " text-gray-600 ",
          primary && "p-1.5",
          secondary && "p-1"
        )}
      >
        <FaMinus />
      </button>
      <span
        className={cn(
          secondary && " text-base",
          primary && "sm:text-xl text-lg"
        )}
      >
        {quantity}
      </span>
      <button
        onClick={handleIncrement}
        className={cn(
          " text-gray-600 ",
          primary && "p-1.5",
          secondary && "p-1"
        )}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default Quantity;

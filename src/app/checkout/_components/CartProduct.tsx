"use client";
import Quantity from "@/components/shared/Quantity";
import { useCart } from "@/context/CartContext";
import formatteeNumber from "@/utils/formatteNumber";
import { Badge } from "antd";
import Image from "next/image";
import toast from "react-hot-toast";
import { FaXmark } from "react-icons/fa6";

interface Image {
  name: string;
  url: string;
}

interface ItemProps {
  id: string;
  price: number;
  size: string;
  slug: string;
  product_quantity: number;
  product: {
    documentId: string;
    title: string;
    images: Image[];
  };
}
const CartProduct = ({ item, id }: { item: ItemProps; id: string }) => {
  const quantity = item?.product_quantity;
  const { updateCartItem, deleteCartItem } = useCart();

  const handleIncrement = async () => {
    await updateCartItem(id, item.slug, quantity + 1);
  };
  const handleDecrement = async () => {
    if (quantity > 1) {
      await updateCartItem(id, item.slug, quantity - 1);
    }
  };
  const handleDelete = async () => {
    await deleteCartItem(id, item.slug);
    toast.remove("Product deleted successfully!");
  };
  return (
    <div className=" flex justify-between gap-4">
      <div className="flex gap-3">
        <Badge count={item?.product_quantity} size="small">
          <div className="rounded overflow-hidden ">
            <Image
              src={item.product.images[0].url}
              alt={item.product.images[0].name}
              width={100}
              height={100}
              className=" aspect-[6/5]"
            />
          </div>
        </Badge>
        <div className=" flex flex-col justify-between ">
          <p className=" text-sm line-clamp-1">{item.product.title}</p>
          <div>
            <Quantity
              quantity={quantity}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              secondary
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-between items-end ">
        <p className=" text-sm">{formatteeNumber(item.price * quantity)}৳</p>
        <button
          onClick={handleDelete}
          className=" hover:text-primary transition-all"
        >
          <FaXmark />
        </button>
      </div>
    </div>
  );
};

export default CartProduct;

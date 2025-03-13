"use client";
import CartProduct from "@/app/checkout/_components/CartProduct";
import { useCart } from "@/context/CartContext";
import { cn } from "@/utils/cn";
import { Badge, Drawer, Empty } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { IoCartOutline } from "react-icons/io5";
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
const CartDrawer: React.FC = () => {
  const { cart, loading } = useCart();
  const [open, setOpen] = React.useState<boolean>(false);
  const router = useRouter();

  const handleClick = () => {
    setOpen(true);
    // console.log(cart);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="md:py-0 py-3 md:flex-none flex md:items-start items-center md:justify-normal justify-center group transition-all duration-150 ease-linear cursor-pointer"
      >
        <Badge count={cart?.cart_products.length} size="small">
          <div className="group-hover:text-primary transition-all duration-150 ease-linear text-2xl ">
            <IoCartOutline />
          </div>
        </Badge>
      </div>
      <Drawer
        closable
        destroyOnClose
        title={<p>Shopping Cart</p>}
        placement="right"
        open={open}
        loading={loading}
        onClose={() => setOpen(false)}
      >
        <div className=" flex flex-col justify-between gap-5 h-full ">
          <div className=" flex flex-col gap-4">
            {cart?.cart_products ? (
              cart?.cart_products?.map((item: ItemProps) => (
                <CartProduct key={item.id} item={item} id={cart?.documentId} />
              ))
            ) : (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
          </div>
          <div className=" flex gap-4 items-center justify-between py-4">
            <Link
              href="/view-cart"
              className=" flex-1 text-black border-primary border text-center py-2 rounded-3xl hover:text-white hover:bg-primary transition-all duration-200 ease-linear"
            >
              View cart
            </Link>
            <button
              onClick={() =>
                cart?.cart_products
                  ? router.push("/checkout")
                  : toast("Your cart is empty!")
              }
              className={cn(
                "flex-1 bg-primary text-white border-primary border text-center py-2 rounded-3xl cursor-pointer hover:text-black hover:bg-transparent transition-all duration-200 ease-linear"
              )}
            >
              Checkout
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CartDrawer;

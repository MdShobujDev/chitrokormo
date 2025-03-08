"use client";
import { useCart } from "@/context/CartContext";
import CartProduct from "./CartProduct";
import CouponCode from "./CouponCode";
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
const CheckoutCart = () => {
  const { cart, loading } = useCart();
  return (
    <section className=" bg-gray-50 p-5 rounded-md shadow flex flex-col gap-8">
      <h1 className=" text-2xl font-medium">আপনার কার্ট</h1>
      {/* pruducts */}
      <div className=" flex flex-col gap-4">
        {cart?.cart_products?.map((item: ItemProps) => (
          <CartProduct key={item.id} item={item} id={cart?.documentId} />
        ))}
      </div>
      {/* coupon code  */}
      <CouponCode />
      {/* total */}
      <div className=" border-t-[1.5px]">
        <div className=" flex flex-col gap-1 py-3">
          <div className=" flex justify-between items-center">
            <p>Subtotal</p>
            <p>3,900</p>
          </div>
          <div className=" flex justify-between items-center">
            <p>Bkash Charge</p>
            <p>3,900</p>
          </div>
          <div className=" flex justify-between items-center">
            <p>Shipping</p>
            <p>3,900</p>
          </div>
        </div>
        <div className=" flex justify-between items-center border-t-[1.5px] pt-2 font-bold">
          <p>Total</p>
          <p>3,450</p>
        </div>
      </div>

      <p className=" font-medium text-center">
        যেকোনো সমস্যায় নির্দ্বিধায় যোগাযোগ করুন- 01774617452
      </p>
    </section>
  );
};

export default CheckoutCart;

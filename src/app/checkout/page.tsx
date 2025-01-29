import CheckoutCart from "./_components/CheckoutCart";
import CustomerInfo from "./_components/CustomerInfo";

const Checkout = () => {
  return (
    <section className="max-w-7xl mx-auto px-5  grid min-[950px]:grid-cols-3 min-[820px]:grid-cols-5 gap-5 py-10">
      <div className=" min-[820px]:col-span-3 min-[950px]:col-span-2">
        {/* customer info  */}
        <CustomerInfo />
      </div>
      <div className=" min-[820px]:col-span-2 min-[950px]:col-span-1 order-first min-[820px]:order-none">
        {/* checkout cart */}
        <CheckoutCart />
      </div>
    </section>
  );
};

export default Checkout;

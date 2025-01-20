import CountDown from "./CountDown";
import FlashSaleProduct from "./FlashSaleProduct";

const FlashSale = () => {
  return (
    <section className=" max-w-7xl mx-auto px-5 md:pt-10 pt-5 ">
      <div className=" rounded-md overflow-hidden bg-[url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover bg-no-repeat">
        <div className=" bg-black/30 backdrop-blur-md sm:p-8 p-5 flex flex-col gap-3">
          <div className=" flex justify-between sm:gap-5 gap-2 flex-col sm:flex-row">
            <div className="text-white">
              <h2 className=" sm:text-2xl text-xl font-bold">ফ্ল্যাশ সেল</h2>
              <p className=" sm:text-sm text-xs">
                ৬০% পর্যন্ত ফ্ল্যাশ সেল ডিল উপভোগ করুন!
              </p>
            </div>
            <div>
              <CountDown />
            </div>
          </div>
          <div>
            <FlashSaleProduct />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;

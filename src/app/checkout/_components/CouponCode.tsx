"use client";

const CouponCode = () => {
  return (
    <div className=" flex gap-2 items-center justify-between">
      <input
        className=" border-[1.5px] border-gray-300 outline-none rounded-[5px] py-[10px] px-2 focus:border-[#6d198a] placeholder:text-gray-500"
        type="text"
        placeholder="Coupon Code"
      />
      <button className=" bg-primary text-white w-[40%] py-3 px-5 rounded-md">
        Apply
      </button>
    </div>
  );
};

export default CouponCode;

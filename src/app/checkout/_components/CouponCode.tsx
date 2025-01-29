"use client";
import styled from "styled-components";

const Input = styled.input`
  border: 1.5px solid #d1d5db;
  outline: none;
  border-radius: 5px;
  padding: 10px 8px;
  width: 100%;
  &:focus {
    border: 1.5px solid #6d198a;
  }
`;
const CouponCode = () => {
  return (
    <div className=" flex gap-2 items-center justify-between">
      <Input type="text" placeholder="Coupon Code" />
      <button className=" bg-primary text-white w-[40%] py-3 px-5 rounded-md">
        Apply
      </button>
    </div>
  );
};

export default CouponCode;

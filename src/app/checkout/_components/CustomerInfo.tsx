"use client";

import Bkash_Logo from "@/../public/images/BKash_Logo.png";
import Nagad_Logo from "@/../public/images/Nagad-Logo.png";
import { Collapse, CollapseProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import styled from "styled-components";
import AutoComplete from "./Autocomplete";
import PaymentMethodInfo from "./PaymentMethodInfo";
import RadioBtn from "./RadioBtn";

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: <p className=" font-medium">Cash on delivery</p>,
    children: <p>Pay with cash upon delivery.</p>,
  },
  {
    key: "2",
    label: (
      <div className=" flex  gap-2">
        <p className=" font-medium">Bkash</p>
        <Image src={Bkash_Logo} alt="bkash_logo" width={40} />
      </div>
    ),
    children: (
      <PaymentMethodInfo
        method="Bkash"
        number="01774617452"
        send_money_cost="1.85"
      />
    ),
  },
  {
    key: "3",
    label: (
      <div className=" flex  gap-2">
        <p className=" font-medium">Nagad</p>
        <Image src={Nagad_Logo} alt="nagad_logo" width={60} />
      </div>
    ),
    children: (
      <PaymentMethodInfo
        method="Nagad"
        number="01774617452"
        send_money_cost="1.45"
      />
    ),
  },
];

const Input = styled.input`
  border: 1.5px solid #d1d5db;
  outline: none;
  border-radius: 5px;
  padding: 10px 8px;
  &:focus {
    border: 1.5px solid #6d198a;
  }
`;

const CustomerInfo = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <section>
      <form className=" flex flex-col gap-5">
        {/* customer info start */}
        <div className=" flex flex-col gap-3 shadow bg-gray-50 p-5 rounded-md">
          <h1 className=" text-2xl font-medium ">Customer Information</h1>
          <div className=" flex flex-col gap-5">
            <div className=" grid min-[550px]:grid-cols-2 grid-cols-1 gap-5">
              <Input type="email" placeholder="ইমেইল (optional)" />
              <Input type="text" placeholder="সম্পূর্ণ নাম *" />
            </div>
            <div className=" grid min-[550px]:grid-cols-2 grid-cols-1 gap-5">
              <AutoComplete />
              <Input type="text" placeholder="সম্পূর্ণ ঠিকানা *" />
            </div>
            <div className=" grid grid-cols-1">
              <Input type="text" placeholder="ফোন নম্বর *" />
            </div>
          </div>
        </div>
        {/* customer info end */}

        {/* shipping info start */}
        <div className="flex flex-col gap-3 shadow bg-gray-50 p-5 rounded-md">
          <div>
            <h1 className=" text-2xl font-medium ">Shipping Method</h1>
            <p className=" text-sm text-gray-600">Shipping Method</p>
          </div>
          <div className="flex justify-between items-center border-[1.5px] border-gray-300 rounded-md p-3">
            <input
              type="text"
              className=" bg-transparent"
              placeholder="ডেলিভারি চার্জ"
              disabled
            />
            <span className=" text-gray-600">120.00৳</span>
          </div>
        </div>
        {/* shipping info end */}
        {/* payment info start */}

        <div className="flex flex-col gap-3 shadow bg-gray-50 p-5 rounded-md">
          <div>
            <h1 className=" text-2xl font-medium ">পেমেন্ট ইনফরমেশন</h1>
            <p className=" text-sm text-gray-600">
              All transactions are secure and encrypted. Credit card information
              is never stored on our servers.
            </p>
          </div>
          <div>
            <h4>Your order</h4>
            <div>
              <Collapse
                accordion
                defaultActiveKey={["1"]}
                onChange={onChange}
                expandIcon={({ isActive }) =>
                  isActive ? <RadioBtn checke /> : <RadioBtn />
                }
                items={items}
              />
            </div>
            <div className=" flex flex-col gap-3 mt-4">
              <p className=" text-sm text-gray-600">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
                <Link href="/checkout" className=" text-primary">
                  Privacy policy
                </Link>
                .
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className=" accent-primary p-1 cursor-pointer"
                  name="check"
                  id="check"
                  required
                />
                <label htmlFor="check" className=" text-sm text-gray-600">
                  I have read and agree to the website Terms and conditions *
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* payment info end */}

        <button className=" bg-primary hover:bg-black transition-all text-white text-lg py-3 font-medium rounded-md flex items-center justify-center gap-2">
          <IoCartOutline size={24} />
          অর্ডার কনফার্ম করুন
        </button>
      </form>
    </section>
  );
};

export default CustomerInfo;

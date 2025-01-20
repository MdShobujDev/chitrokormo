import Logo from "@/../public/images/logo.png";
import PaymentGateway from "@/../public/images/payment-gateway.webp";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" bg-[#212121]">
      <div className=" max-w-7xl mx-auto py-16 px-5 flex min-[910px]:flex-row flex-col gap-5">
        <div className=" flex flex-col gap-3 min-[910px]:flex-[0_0_30%] ">
          <Link href="/">
            <Image src={Logo} alt="logo" width={120} />
          </Link>
          <p className=" text-[#ffffffe6]">
            <strong>চিত্রকর্ম</strong>– আপনার লাইফস্টাইলের জন্য নির্ভরযোগ্য
            ইকমার্স। আমরা সরবরাহ করি মানসম্পন্ন লাইফস্টাইল পণ্য, দ্রুত ডেলিভারি
            এবং সন্তুষ্টি নিশ্চিত সেবা।
          </p>
          <p className=" text-[#ffffffe6]">স্টেশন রোড, শাপলা চত্তর, রংপুর। </p>
          <p className=" text-[#ffffffe6]">(+৮৮) ০১৭৭৪৬১৭৪৫২</p>
          <div className=" flex gap-2 text-white">
            <Link
              href="mailto:skshobuj9988@gmail.com"
              className=" border rounded-full p-2 text-lg hover:border-rose-500 hover:text-rose-500 transition-all duration-200 ease-linear cursor-pointer"
            >
              <MdOutlineEmail />
            </Link>
            <Link
              href="/"
              className=" border rounded-full p-2 text-lg hover:border-rose-500 hover:text-rose-500 transition-all duration-200 ease-linear cursor-pointer"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="/"
              className=" border rounded-full p-2 text-lg hover:border-rose-500 hover:text-rose-500 transition-all duration-200 ease-linear cursor-pointer"
            >
              <FaXTwitter />
            </Link>
            <Link
              href="/"
              className=" border rounded-full p-2 text-lg hover:border-rose-500 hover:text-rose-500 transition-all duration-200 ease-linear cursor-pointer"
            >
              <FaInstagram />
            </Link>
            <Link
              href="/"
              className=" border rounded-full p-2 text-lg hover:border-rose-500 hover:text-rose-500 transition-all duration-200 ease-linear cursor-pointer"
            >
              <FaTiktok />
            </Link>
            <Link
              href="/"
              className=" border rounded-full p-2 text-lg hover:border-rose-500 hover:text-rose-500 transition-all duration-200 ease-linear cursor-pointer"
            >
              <FaPinterest />
            </Link>
          </div>
        </div>
        <div className=" grid grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))] w-full gap-2">
          <div className="flex flex-col gap-8 ">
            <h2 className=" text-white font-medium text-lg">ক্যাটাগরিসমূহ</h2>
            <ul className=" text-[#ffffffe6] flex flex-col gap-1">
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                ওয়ালবোর্ড
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                ক্যানভাস প্রিন্ট
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                দোয়া কার্ড
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                দাওয়া ক্যানভাস
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                ওয়াল হ্যাঙ্গিং
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                ইভেন্ট বোর্ড
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                প্রচারমূলক জিনিসপত্র
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                উপহার সামগ্রী
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                আনুষাঙ্গিক
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                কাস্টম পণ্য
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-8 ">
            <h2 className=" text-white font-medium text-lg">দরকারী লিঙ্ক</h2>
            <ul className=" text-[#ffffffe6] flex flex-col gap-1">
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                হোম
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                সংগ্রহ
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                আমাদের সম্পর্কে
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                ব্লগ
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                অফার
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                অনুসন্ধান
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-8 ">
            <h2 className=" text-white font-medium text-lg">সহায়তা কেন্দ্র</h2>
            <ul className=" text-[#ffffffe6] flex flex-col gap-1">
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                আমার অ্যাকাউন্ট
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                আমার অর্ডার
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                ইচ্ছার তালিকা
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                আমাদের সাথে যোগাযোগ করুন
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-8 ">
            <h2 className=" text-white font-medium text-lg">
              লিগ্যাল ইনফরমেশন
            </h2>
            <ul className=" text-[#ffffffe6] flex flex-col gap-1">
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                টার্মস এবং কন্ডিশন
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                প্রাইভেসি পলিসি
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                রিফান্ড এবং রিটার্ন পলিসি
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                ওয়ারেন্টি সার্ভিসেস
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                {" "}
                শিপিং মেথড
              </Link>
              <Link
                href="/"
                className=" hover:text-primary transition-all ease-linear duration-150"
              >
                পেমেন্ট মেথড
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className=" border-t">
        <div className="max-w-7xl mx-auto px-5 sm:py-4 py-3 flex items-center justify-between gap-2 min-[700px]:flex-row flex-col">
          <div>
            <p className="text-[#ffffffe6] text-[15px]">
              কপিরাইট © 2024 চিত্রকর্ম সর্বস্বত্ব সংরক্ষিত
            </p>
          </div>
          <div>
            <Image
              src={PaymentGateway}
              alt="PaymentGateway"
              width={450}
              height={100}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

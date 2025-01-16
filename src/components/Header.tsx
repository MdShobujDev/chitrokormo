"use client";
import Logo from "@/../public/images/logo.png";
import { cn } from "@/utils/cs";
import { Badge } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaBars, FaRegUser, FaXmark } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { TbCategoryPlus } from "react-icons/tb";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" bg-gray-100/70 shadow backdrop-blur sticky top-0 z-40">
      <div className=" max-w-7xl px-5 mx-auto flex items-center justify-between gap-5 py-2">
        <div>
          <Image src={Logo} alt="logo" width={100} />
        </div>
        {/* search by category and products name  */}

        <div className="relative flex-1">
          <input
            type="text"
            id="Search"
            placeholder="Search for..."
            className="w-full rounded-md border border-gray-200 py-2.5 pe-10 pl-3 shadow sm:text-sm"
          />

          <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
            <button type="button" className="text-gray-600 hover:text-gray-700">
              <span className="sr-only">Search</span>
              <CiSearch />
            </button>
          </span>
        </div>

        <div className=" flex gap-5 items-center">
          <div className=" md:flex hidden">
            <ul className=" flex gap-2">
              <Link
                href="/"
                className=" text-lg font-medium px-3 py-2 hover:text-primary transition-all ease-linear duration-200"
              >
                হোম
              </Link>
              <Link
                href="/"
                className=" text-lg font-medium px-3 py-2 hover:text-primary transition-all ease-linear duration-200"
              >
                শপ
              </Link>
              <Link
                href="/"
                className=" text-lg font-medium px-3 py-2 hover:text-primary transition-all ease-linear duration-200"
              >
                আমাদের সম্পর্কে
              </Link>
              <Link
                href="/"
                className=" text-lg font-medium px-3 py-2 hover:text-primary transition-all ease-linear duration-200"
              >
                যোগাযোগ
              </Link>
            </ul>
          </div>
          <div className=" md:flex hidden gap-4 items-center">
            <div className=" text-2xl cursor-pointer">
              <TbCategoryPlus />
            </div>
            <Badge count={1}>
              <div className=" text-2xl cursor-pointer">
                <IoCartOutline />
              </div>
            </Badge>
            <div className=" text-[1.3rem] cursor-pointer">
              <FaRegUser />
            </div>
          </div>
        </div>
        <div
          onClick={() => setToggle(!toggle)}
          className=" p-2 md:hidden flex text-2xl cursor-pointer"
        >
          {toggle ? <FaXmark /> : <FaBars />}
        </div>
      </div>
      {/* small device menu bar  */}

      <div
        className={`bg-gray-200/90 absolute backdrop-blur-xl md:hidden block transition-all ease-linear duration-200 ${cn(
          toggle ? "left-0" : "-left-80",
          toggle && "right-0"
        )}`}
      >
        <ul className=" flex flex-col bg gap-2">
          <Link
            onClick={() => setToggle(!toggle)}
            href="/"
            className=" text-lg font-medium px-5 py-2 hover:text-primary transition-all ease-linear duration-200  hover:bg-primary/5"
          >
            হোম
          </Link>
          <Link
            onClick={() => setToggle(!toggle)}
            href="/"
            className=" text-lg font-medium px-5 py-2 hover:text-primary transition-all ease-linear duration-200 hover:bg-primary/5"
          >
            শপ
          </Link>
          <Link
            onClick={() => setToggle(!toggle)}
            href="/"
            className=" text-lg font-medium px-5 py-2 hover:text-primary transition-all ease-linear duration-200 hover:bg-primary/5"
          >
            আমাদের সম্পর্কে
          </Link>
          <Link
            onClick={() => setToggle(!toggle)}
            href="/"
            className=" text-lg font-medium px-5 py-2 hover:text-primary transition-all ease-linear duration-200 hover:bg-primary/5"
          >
            যোগাযোগ
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

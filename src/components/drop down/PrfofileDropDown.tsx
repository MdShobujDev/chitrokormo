"use client";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import React from "react";
import { FaRegUser } from "react-icons/fa6";
import {
  IoCartOutline,
  IoLocationOutline,
  IoLogInOutline,
} from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <div className=" flex  items-center gap-2">
        <div className=" bg-gray-400 w-7 h-7 rounded-full"></div>
        <h2 className=" text-black text-lg">Sk Shobuj</h2>
      </div>
    ),
    disabled: true,
  },
  {
    type: "divider",
  },
  {
    key: "2",
    icon: <MdOutlineManageAccounts size={20} />,
    label: "Manage Account",
  },
  {
    key: "3",
    icon: <IoCartOutline size={20} />,
    label: "My Orders",
  },
  {
    key: "4",
    icon: <IoLocationOutline size={20} />,
    label: "Address",
  },
  {
    key: "5",
    icon: <IoLogInOutline size={20} style={{ color: "#dc2626" }} />,
    label: <p className=" text-red-600">Log out</p>,
  },
];

const ProfileDropDown: React.FC = () => (
  <Dropdown
    menu={{ items }}
    overlayStyle={{
      marginTop: "25px",
      marginRight: "-15px",
      width: "200px",
    }}
  >
    <div className=" hover:text-primary transition-all duration-200 ease-linear ">
      <FaRegUser size={20} />
    </div>
  </Dropdown>
);

export default ProfileDropDown;

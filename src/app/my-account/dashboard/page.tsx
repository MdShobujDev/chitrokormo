"use client";

import { FaEdit } from "react-icons/fa";

// import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  // const { userSession, logout } = useAuth();

  // console.log(userSession);
  return (
    <div className=" bg-[#F8F8F8] p-3  w-full flex flex-col gap-5">
      <div>
        <h2 className=" text-3xl font-medium text-primary">PROFILE</h2>
        <p>
          Welcome back home! Here, you can check all your recent activities.
        </p>
      </div>
      <div>
        <div>
          <div></div>
          <div>
            <h3>200</h3>
            <p>Total Orders</p>
          </div>
        </div>
      </div>
      <div className=" flex gap-2 flex-col">
        <div className=" flex gap-2 ">
          <h2 className=" text-xl font-medium">Account Information</h2>
          <button className=" text-primary flex gap-1 items-center">
            Edit
            <FaEdit />
          </button>
        </div>
        <ul>
          <li>
            <p>
              <span className=" font-medium">Full Name:</span> John Doe
            </p>
          </li>
          <li>
            <p>
              <span className=" font-medium">Phone Number:</span> 08012345678
            </p>
          </li>
          <li>
            <p>
              <span className=" font-medium">Full Address:</span> Dhunat, Bogura
            </p>
          </li>
        </ul>
      </div>
      <div className=" flex gap-2 flex-col">
        <h2 className=" text-xl font-medium">Login Details</h2>
        <div className=" flex gap-5 ">
          <div>
            <p>
              <span className=" font-medium">Email:</span> mdshobuj12@gmail.com
            </p>
          </div>
          <div>
            <p className=" flex items-center gap-2 ">
              <span className=" font-medium">Password:</span>
              {Array(6).fill(
                <div className=" h-2 w-2 bg-gray-500 rounded-full" />
              )}
            </p>
            <button className="flex gap-1 items-center text-primary">
              Reset
              <FaEdit />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

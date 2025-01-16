import { Badge } from "antd";
import { FaRegUser } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { TbCategoryPlus } from "react-icons/tb";

const BottomNav = () => {
  return (
    <div className=" md:hidden block sticky bg-gray-200/70 backdrop-blur left-0 right-0 bottom-0 border-t border-gray-400">
      <div className="w-full  flex gap-4 justify-between items-cente px-5  ">
        <div className="py-3 flex items-center justify-center hover:text-primary transition-all duration-150 ease-linear  text-2xl cursor-pointer w-full">
          <GoHome />
        </div>
        <div className="py-3 flex items-center justify-center hover:text-primary transition-all duration-150 ease-linear text-2xl cursor-pointer w-full">
          <TbCategoryPlus />
        </div>
        <div className="py-3 w-full flex items-center justify-center">
          <Badge count={1}>
            <div className="hover:text-primary transition-all duration-150 ease-linear text-2xl cursor-pointer">
              <IoCartOutline />
            </div>
          </Badge>
        </div>
        <div className="py-3 w-full flex items-center justify-center hover:text-primary transition-all duration-150 ease-linear text-[1.3rem] cursor-pointer">
          <FaRegUser />
        </div>
      </div>
    </div>
  );
};

export default BottomNav;

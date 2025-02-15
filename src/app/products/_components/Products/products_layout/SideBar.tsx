import ActiveFilter from "./ActiveFilter";
import Availability from "./Availability";
import PriceFilter from "./PriceFilter";
import ShopByCategory from "./ShopByCategory";

const SideBar = () => {
  return (
    <div className=" min-[950px]:sticky min-[950px]:top-[70px] min-[950px]:max-h-max min-[950px]:border-[1.5px]  rounded min-[950px]:border-gray-300 p-2">
      <div className=" flex flex-col gap-5">
        <ActiveFilter />
        <PriceFilter />
        <Availability />
        <ShopByCategory />
      </div>
    </div>
  );
};

export default SideBar;

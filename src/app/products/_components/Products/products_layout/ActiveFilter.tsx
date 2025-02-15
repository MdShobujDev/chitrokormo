import { HiMiniXMark } from "react-icons/hi2";

const ActiveFilter = () => {
  return (
    <div className=" flex flex-col gap-2">
      <div className=" flex items-center justify-between">
        <h2 className=" text-xl font-medium">Active Filters</h2>
        <button className=" cursor-pointer">Clear all</button>
      </div>
      <div className=" flex flex-wrap gap-1">
        <div className=" flex items-center gap-2 max-w-max rounded-md px-1 bg-primary text-white">
          <span>Course</span>
          <span className=" cursor-pointer">
            <HiMiniXMark />
          </span>
        </div>
        <div className=" flex items-center gap-2 max-w-max rounded-md px-1 bg-primary text-white">
          <span>প্রসাধনী স্টিকার</span>
          <span className=" cursor-pointer">
            <HiMiniXMark />
          </span>
        </div>
        <div className=" flex items-center gap-2 max-w-max rounded-md px-1 bg-primary text-white">
          <span>ডেকোরেটিভ স্টিকার</span>
          <span className=" cursor-pointer">
            <HiMiniXMark />
          </span>
        </div>
        <div className=" flex items-center gap-2 max-w-max rounded-md px-1 bg-primary text-white">
          <span>বাণিজ্যিক স্টিকার</span>
          <span className=" cursor-pointer">
            <HiMiniXMark />
          </span>
        </div>
        <div className=" flex items-center gap-2 max-w-max rounded-md px-1 bg-primary text-white">
          <span>ডেকোরেটিভ স্টিকার</span>
          <span className=" cursor-pointer">
            <HiMiniXMark />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActiveFilter;

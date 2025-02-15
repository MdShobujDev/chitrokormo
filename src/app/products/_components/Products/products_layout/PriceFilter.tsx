"use client";
import { Slider } from "antd";
import { useState } from "react";

const PriceFilter = () => {
  const [value, setValue] = useState([20, 80]);
  return (
    <div>
      <h2 className=" text-xl font-medium">Price</h2>
      <div>
        <Slider
          range={{ editable: true, minCount: 1, maxCount: 5 }}
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
};

export default PriceFilter;

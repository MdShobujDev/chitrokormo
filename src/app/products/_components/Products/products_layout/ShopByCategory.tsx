"use client";
import type { GetProp } from "antd";
import { Checkbox } from "antd";

const ShopByCategory = () => {
  const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    console.log("checked = ", checkedValues);
  };
  return (
    <div>
      <h2 className=" text-xl font-medium">Shop By Category</h2>
      <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
        <div className=" flex flex-col">
          <Checkbox value="A">Wallboards</Checkbox>
          <Checkbox value="B">Canvas Prints</Checkbox>
          <Checkbox value="C">Doya Cards</Checkbox>
          <Checkbox value="d">Dawa Canvas</Checkbox>
          <Checkbox value="e">Wall Hangings</Checkbox>
          <Checkbox value="f">Event Boards</Checkbox>
          <Checkbox value="g">Promotional Items</Checkbox>
          <Checkbox value="h">Gift Items</Checkbox>
          <Checkbox value="i">Accessories</Checkbox>
          <Checkbox value="j">Custom Products</Checkbox>
        </div>
      </Checkbox.Group>
    </div>
  );
};

export default ShopByCategory;

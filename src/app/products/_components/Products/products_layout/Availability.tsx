"use client";
import type { GetProp } from "antd";
import { Checkbox } from "antd";

const Availability = () => {
  const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
    checkedValues
  ) => {
    console.log("checked = ", checkedValues);
  };

  return (
    <div>
      <h2 className=" text-xl font-medium">Availability</h2>
      <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
        <div className=" flex flex-col">
          <Checkbox value="A">In stock</Checkbox>
          <Checkbox value="B">Upcomming</Checkbox>
          <Checkbox value="C">Out of stck</Checkbox>
        </div>
      </Checkbox.Group>
    </div>
  );
};

export default Availability;

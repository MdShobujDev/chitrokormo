"use client";

import type { TabsProps } from "antd";
import { Tabs } from "antd";
import React from "react";
import Description from "./Description";
import ReturnPolicies from "./ReturnPolicies";
import Reviews from "./Reviews";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Description",
    children: <Description />,
  },

  {
    key: "2",
    label: "Reviews",
    children: <Reviews />,
  },
  {
    key: "3",
    label: "Return Policies",
    children: <ReturnPolicies />,
  },
];

const Tab: React.FC = () => (
  <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
);

export default Tab;

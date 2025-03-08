"use client";

import type { TabsProps } from "antd";
import { Tabs } from "antd";
import Description from "./Description";
import ReturnPolicies from "./ReturnPolicies";
import Reviews from "./Reviews";

interface CategoryProps {
  name: string;
  slug: string;
}
interface List {
  id: string;
  item: string;
}

interface ListItems {
  id: string;
  title: string;
  list: List[];
}
interface DescriptionProps {
  id: string;
  summary: string;
  list_items: ListItems[];
}
interface ImageProps {
  name: string;
  url: string;
}
interface ReviewProps {
  date: string;
  documentId: string;
  rating: number;
  review: string;
  user_permissions_user: {
    username: string;
  };
}
interface VariantProps {
  available_quantity: number;
  id: string;
  price: number;
  size: string;
  stock_status: string;
}
interface ProductProps {
  product: {
    SKU: string;
    documentId: string;
    off: number;
    title: string;
    total_sale: number;
    categories: CategoryProps[];
    description: DescriptionProps;
    images: ImageProps[];
    reviews: ReviewProps[];
    variant: VariantProps[];
  };
}
const Tab: React.FC<ProductProps> = ({ product }) => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Description",
      children: <Description description={product?.description} />,
    },

    {
      key: "2",
      label: "Reviews",
      children: <Reviews reviews={product?.reviews} />,
    },
    {
      key: "3",
      label: "Return Policies",
      children: <ReturnPolicies />,
    },
  ];
  return <Tabs defaultActiveKey="1" items={items} />;
};

export default Tab;

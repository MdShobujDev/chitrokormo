import { Breadcrumb } from "antd";
import Link from "next/link";

const BreadCrumb = () => {
  return (
    <div>
      <Breadcrumb
        items={[
          {
            title: <Link href="/">Home</Link>,
          },
          {
            title: <Link href="/products">Products</Link>,
          },
          {
            title: "wallboards",
          },
        ]}
      />
    </div>
  );
};

export default BreadCrumb;

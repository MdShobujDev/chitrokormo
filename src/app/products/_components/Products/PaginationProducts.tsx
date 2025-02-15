import { Pagination } from "antd";
import React from "react";

const PaginationProducts: React.FC = () => (
  <Pagination defaultCurrent={1} total={100} />
);

export default PaginationProducts;

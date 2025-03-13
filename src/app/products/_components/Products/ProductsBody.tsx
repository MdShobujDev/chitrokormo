import ProductCard from "@/components/ui/ProductCard";
import PaginationProducts from "./PaginationProducts";

const items = [
  {
    title:
      "ন্যাচারাল ওয়াল ক্যানভাস - মনোরম প্রাকৃতিক দৃশ্য (উচ্চমানের পিভিসি প্রিন্ট)",
    documentId: "iidd90gdd9gc1cmsgpxxdfiv",
    off: 25,
    SKU: "product-6",
    reviews: [],
    images: [
      {
        name: "IMG-20240417-WA0002.jpg",
        url: "https://res.cloudinary.com/dqq5dqezz/image/upload/v1739632957/IMG_20240417_WA_0002_9a0a1dfd5a.jpg",
      },
      {
        name: "IMG-20240417-WA0004.jpg",
        url: "https://res.cloudinary.com/dqq5dqezz/image/upload/v1739632954/IMG_20240417_WA_0004_cbfe66d574.jpg",
      },
      {
        name: "IMG-20240302-WA0004.jpg",
        url: "https://res.cloudinary.com/dqq5dqezz/image/upload/v1739632956/IMG_20240302_WA_0004_a86f5fed34.jpg",
      },
      {
        name: "IMG-20240302-WA0003.jpg",
        url: "https://res.cloudinary.com/dqq5dqezz/image/upload/v1739632955/IMG_20240302_WA_0003_96064bfe7b.jpg",
      },
    ],
    variant: [
      {
        price: 222,
        size: "22*1",
        available_quantity: 21,
        stock_status: "stock",
      },
      {
        price: 222,
        size: "22*1",
        available_quantity: 21,
        stock_status: "stock",
      },
    ],
  },
];
const ProductsBody = () => {
  return (
    <section className="flex flex-col gap-10 justify-between items-center">
      <div className=" grid sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] w-full gap-3">
        {items.map((product) => (
          <div key={product.SKU}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <PaginationProducts total={2000} />
    </section>
  );
};

export default ProductsBody;

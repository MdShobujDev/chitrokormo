import ProductCard from "@/components/ui/ProductCard";
import PaginationProducts from "./PaginationProducts";

const items = [
  {
    id: 1,
    title: "ডার্ক মোড ওয়ালপেপার ডার্ক মোড ওয়ালপেপারডার্ক মোড ওয়ালপেপার",
    save: "5",
    image:
      "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/",
    discount_amoumt: "250",
    main_amount: "299",
    star: "5",
  },
  {
    id: 2,
    title: "ডার্ক মোড ওয়ালপেপার ডার্ক মোড ওয়ালপেপারডার্ক মোড ওয়ালপেপার",
    save: "5",
    image:
      "https://images.unsplash.com/photo-1568842377941-63a9550044bf?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/",
    discount_amoumt: "250",
    main_amount: "299",
    star: "5",
  },
  {
    id: 3,
    title: "ডার্ক মোড ওয়ালপেপার ডার্ক মোড ওয়ালপেপারডার্ক মোড ওয়ালপেপার",
    save: "5",
    image:
      "https://images.unsplash.com/photo-1452457005517-a0dd81caca2a?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/",
    discount_amoumt: "250",
    main_amount: "299",
    star: "5",
  },
  {
    id: 4,
    title: "ডার্ক মোড ওয়ালপেপার ডার্ক মোড ওয়ালপেপারডার্ক মোড ওয়ালপেপার",
    save: "5",
    image:
      "https://images.unsplash.com/photo-1568842377941-63a9550044bf?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/",
    discount_amoumt: "250",
    main_amount: "299",
    star: "5",
  },
  {
    id: 5,
    title: "ডার্ক মোড ওয়ালপেপার ডার্ক মোড ওয়ালপেপারডার্ক মোড ওয়ালপেপার",
    save: "5",
    image:
      "https://images.unsplash.com/photo-1452457005517-a0dd81caca2a?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/",
    discount_amoumt: "250",
    main_amount: "299",
    star: "5",
  },
  {
    id: 6,
    title: "ডার্ক মোড ওয়ালপেপার ডার্ক মোড ওয়ালপেপারডার্ক মোড ওয়ালপেপার",
    save: "5",
    image:
      "https://images.unsplash.com/photo-1571907483083-af70aeda3285?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/",
    discount_amoumt: "250",
    main_amount: "299",
    star: "5",
  },
  {
    id: 7,
    title: "ডার্ক মোড ওয়ালপেপার ডার্ক মোড ওয়ালপেপারডার্ক মোড ওয়ালপেপার",
    save: "5",
    image:
      "https://images.unsplash.com/photo-1560132103-ff44e9dc1f1c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/",
    discount_amoumt: "250",
    main_amount: "299",
    star: "5",
  },
  {
    id: 8,
    title: "ডার্ক মোড ওয়ালপেপার ডার্ক মোড ওয়ালপেপারডার্ক মোড ওয়ালপেপার",
    save: "5",
    image:
      "https://plus.unsplash.com/premium_photo-1678459925149-386077b7ca61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/",
    discount_amoumt: "250",
    main_amount: "299",
    star: "5",
  },
  {
    id: 9,
    title: "ডার্ক মোড ওয়ালপেপার ডার্ক মোড ওয়ালপেপারডার্ক মোড ওয়ালপেপার",
    save: "5",
    image:
      "https://plus.unsplash.com/premium_photo-1681044639284-8fa36bcd1958?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/",
    discount_amoumt: "250",
    main_amount: "299",
    star: "5",
  },
  {
    id: 10,
    title: "ডার্ক মোড ওয়ালপেপার ডার্ক মোড ওয়ালপেপারডার্ক মোড ওয়ালপেপার",
    save: "5",
    image:
      "https://plus.unsplash.com/premium_photo-1681085437823-271ba6f7acc8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/",
    discount_amoumt: "250",
    main_amount: "299",
    star: "5",
  },
];
const ProductsBody = () => {
  return (
    <section className="flex flex-col gap-10 justify-between items-center">
      <div className=" grid sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] grid-cols-[repeat(auto-fit,_minmax(160px,_1fr))] w-full gap-3">
        {items.map((item) => (
          <div key={item.id}>
            <ProductCard data={item} />
          </div>
        ))}
      </div>

      <PaginationProducts total={2000} />
    </section>
  );
};

export default ProductsBody;

import EmblaCarousel from "@/components/ui/EmblaCarouel";
import ProductCard from "@/components/ui/ProductCard";

const items = [
  {
    id: 1,
    title: "ডার্ক মোড ওয়ালপেপার ডার্ক মোড ওয়ালপেপারডার্ক মোড ওয়ালপেপার",
    save: "5",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1596900779744-2bdc4a90509a?q=80&w=1876&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      "https://images.unsplash.com/photo-1608235375712-be654ace4420?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
];

const FlashSaleProduct = () => {
  return (
    <div>
      <div>
        <EmblaCarousel dragFree arrowButtons>
          {items.map((item) => (
            <div
              key={item.id}
              className="[flex:0_0_65%] min-[400px]:[flex:0_0_50%]  min-[500px]:[flex:0_0_45%] sm:[flex:0_0_35%] md:[flex:0_0_30%] min-[880px]:[flex:0_0_27%] lg:[flex:0_0_19%] flex flex-col justify-between gap-3 py-3 cursor-pointer select-none"
            >
              <ProductCard data={item} />
            </div>
          ))}
        </EmblaCarousel>
      </div>
    </div>
  );
};

export default FlashSaleProduct;

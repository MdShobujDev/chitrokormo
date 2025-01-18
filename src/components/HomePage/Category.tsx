import Image from "next/image";
import EmblaCarousel from "../ui/EmblaCarouel";

const categoryItems = [
  {
    id: 1,
    title: "ওয়ালবোর্ড",
    available_quantity: "10",
    link: "/",
    image:
      "https://plus.unsplash.com/premium_photo-1681302806300-3819d7c24c87?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "ক্যানভাস প্রিন্ট",
    available_quantity: "20",
    link: "/",
    image:
      "https://plus.unsplash.com/premium_photo-1706561252297-d9b575e9f295?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "দোয়া কার্ড",
    available_quantity: "14",
    link: "/",
    image:
      "https://images.unsplash.com/photo-1627618999952-6d9ea355d679?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "দাওয়া ক্যানভাস",
    available_quantity: "10",
    link: "/",
    image:
      "https://images.unsplash.com/photo-1588441259691-b04ba5e4ddf5?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "ওয়াল হ্যাঙ্গিং",
    available_quantity: "30",
    link: "/",
    image:
      "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "ইভেন্ট বোর্ড",
    available_quantity: "16",
    link: "/",
    image:
      "https://plus.unsplash.com/premium_photo-1719584878111-9cdf314d1e87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "প্রচারমূলক জিনিসপত্র",
    available_quantity: "50",
    link: "/",
    image:
      "https://plus.unsplash.com/premium_photo-1728666382376-d69421608b82?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    title: "উপহার সামগ্রী",
    available_quantity: "36",
    link: "/",
    image:
      "https://plus.unsplash.com/premium_photo-1661342572358-125eb3da814a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    title: "আনুষাঙ্গিক",
    available_quantity: "32",
    link: "/",
    image:
      "https://plus.unsplash.com/premium_photo-1718119449546-6b52f8a69b95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    title: "কাস্টম পণ্য",
    available_quantity: "18",
    link: "/",
    image:
      "https://plus.unsplash.com/premium_photo-1672883552384-087b8a7acdb6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Category = () => {
  return (
    <section className=" max-w-7xl mx-auto sm:px-5 px-2 md:pt-10 pt-5">
      <div>
        <h1 className=" sm:text-2xl text-xl  font-bold text-primary">
          ক্যাটাগরি অনুযায়ী কেনাকাটা করুন
        </h1>
        <div className=" sm:pt-5 pt-3">
          <EmblaCarousel autoplay>
            {categoryItems.map((item) => (
              <div
                key={item.id}
                className="[flex:0_0_55%] min-[400px]:[flex:0_0_47%]  min-[500px]:[flex:0_0_38%] sm:[flex:0_0_30%] min-[720px]:[flex:0_0_25%] lg:[flex:0_0_18.7%] flex flex-col justify-between gap-1 rounded-lg  overflow-hidden relative cursor-pointer select-none bg-[#F3F3F3] p-2"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className=" rounded-lg aspect-[7/5]"
                />
                <div>
                  <h2 className=" md:text-lg sm:text-base text-sm text-center">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </EmblaCarousel>
        </div>
      </div>
    </section>
  );
};

export default Category;

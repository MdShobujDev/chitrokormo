import SideBar from "./_components/Products/products_layout/SideBar";
import TopBar from "./_components/Products/products_layout/TopBar";
import ProductsBody from "./_components/Products/ProductsBody";

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <div>
        <div>
          <TopBar />
        </div>
        <div className=" flex py-5 gap-4 ">
          <div className=" min-[950px]:block hidden w-full flex-[0_0_25%]">
            <SideBar />
          </div>
          <div className=" w-full min-[950px]:flex-[0_0_75%]">
            <ProductsBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

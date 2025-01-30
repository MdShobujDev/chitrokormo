import BreadCrumb from "../_components/Product/Breadcrumb";
import ImageGallery from "../_components/Product/ImageGallery";
import ProductDetails from "../_components/Product/ProductDetails";
import RelatedProducts from "../_components/Product/RelatedProducts";
import Tab from "../_components/Product/Tabs";

const Product = () => {
  return (
    <section className=" max-w-7xl mx-auto px-5 py-10">
      <div>
        {/* top breadcrumb section  */}
        <div>
          {/* breadcrumb section  */}
          <BreadCrumb />
        </div>
        {/* middle section  */}
        <div className=" mt-3 flex md:flex-row flex-col gap-5">
          {/* image gallery section  */}
          <div className=" flex-1">
            <ImageGallery />
          </div>
          {/* product details section  */}
          <div className=" flex-1">
            <ProductDetails />
          </div>
        </div>
        {/* description additional info reviews return policies section  */}
        <div className=" border sm:p-5 p-2 rounded mt-5 overflow-hidden">
          <Tab />
        </div>
        {/* bottom related products section  */}
        <div>
          <RelatedProducts />
        </div>
      </div>
    </section>
  );
};

export default Product;

import client from "@/lib/apollo-client";
import { GET_FLASH_SALE_INFO } from "@/lib/queries";
import CountDown from "./CountDown";
import FlashSaleProduct from "./FlashSaleProduct";

const FlashSale = async () => {
  const { data } = await client.query({
    query: GET_FLASH_SALE_INFO,
    variables: {
      filters: {
        isOpenFlashSale: {
          eq: true,
        },
      },
      pagination: {
        limit: 1,
      },
    },
  });
  // console.log(data.flashSaleInfos[0]);
  return (
    <>
      {data?.flashSaleInfos[0] && (
        <section className=" max-w-7xl mx-auto px-5 md:pt-10 pt-5 ">
          <div
            className="rounded-md overflow-hidden bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${data.flashSaleInfos[0].background_image.url})`,
            }}
          >
            <div className=" bg-black/30 backdrop-blur-md sm:p-8 p-5 flex flex-col gap-3">
              <div className=" flex justify-between sm:gap-5 gap-2 flex-col sm:flex-row">
                <div className="text-white">
                  <h2 className=" sm:text-2xl text-xl font-bold">
                    ফ্ল্যাশ সেল
                  </h2>
                  <p className=" sm:text-sm text-xs">
                    {`${data?.flashSaleInfos[0].off}% পর্যন্ত ফ্ল্যাশ সেল ডিল উপভোগ করুন!`}
                  </p>
                </div>
                <div>
                  <CountDown />
                </div>
              </div>
              <div>
                <FlashSaleProduct />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default FlashSale;

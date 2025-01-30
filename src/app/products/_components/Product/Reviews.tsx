import { FaStar } from "react-icons/fa6";
import ReviewModal from "./ReviewModal";
import ReviewsCarousel from "./ReviewsCarousel";

const Reviews = () => {
  return (
    <section className="flex gap-5 flex-col min-[850px]:flex-row">
      <div className="flex gap-3 flex-col min-w-max">
        <div>
          <h1 className=" text-base sm:text-lg font-medium">
            Customer Reviews
          </h1>
          <div className="flex gap-1">
            <div className=" flex items-center gap-1 text-orange-400 text-[.6rem] sm:text-[.7rem]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className=" sm:text-base text-xs">Based on 2 review</p>
          </div>
        </div>

        <ReviewModal />
      </div>
      <div className=" overflow-hidden px-5">
        <ReviewsCarousel />
      </div>
    </section>
  );
};

export default Reviews;

"use client";

import { calculateAverageRating } from "@/utils/getAverageRating";
import { Rate } from "antd";
import ReviewModal from "./ReviewModal";
import ReviewsCarousel from "./ReviewsCarousel";

interface ReviewProps {
  reviews: {
    date: string;
    documentId: string;
    rating: number;
    review: string;
    users_permissions_user: {
      username: string;
    };
  }[];
}

const Reviews: React.FC<ReviewProps> = ({ reviews }) => {
  return (
    <section className="flex gap-5 flex-col min-[850px]:flex-row">
      <div className="flex gap-3 flex-col min-w-max">
        <div>
          <h1 className=" text-base sm:text-lg font-medium">
            Customer Reviews
          </h1>
          <div className="flex gap-1 items-center">
            <Rate
              disabled
              defaultValue={calculateAverageRating(reviews)}
              allowHalf
            />
            <p className=" sm:text-base text-xs">
              Based on {reviews.length} review
            </p>
          </div>
        </div>

        <ReviewModal />
      </div>
      <div className=" overflow-hidden px-5 w-full">
        <ReviewsCarousel reviews={reviews} />
      </div>
    </section>
  );
};

export default Reviews;

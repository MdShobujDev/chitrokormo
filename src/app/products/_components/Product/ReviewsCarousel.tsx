import EmblaCarousel from "@/components/shared/EmblaCarouel";
import { Rate } from "antd";

interface ReviewProps {
  date: string;
  documentId: string;
  rating: number;
  review: string;
  users_permissions_user: {
    username: string;
  };
}

const ReviewsCarousel = ({ reviews }: { reviews: ReviewProps[] }) => {
  console.log(reviews);
  return (
    <div className="">
      <EmblaCarousel arrowButtons autoplay>
        {reviews.map((review: ReviewProps, index: number) => (
          <div
            key={index}
            className=" flex-[0_0_100%] min-[400px]:flex-[0_0_75%] min-[500px]:flex-[0_0_60%]
            sm:flex-[0_0_50%] md:flex-[0_0_40%] min-[850px]:flex-[0_0_50%] lg:flex-[0_0_33%]  flex gap-3 border p-2 rounded-md cursor-pointer"
          >
            <div className=" min-w-max">
              <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                {/* image */}
              </div>
            </div>
            <div className=" mt-1.5 flex flex-col gap-1">
              <Rate disabled defaultValue={review.rating} allowHalf />
              <h1 className="sm:text-lg text-base line-clamp-1 font-medium">
                {review.users_permissions_user.username}
              </h1>
              <p className=" text-xs sm:text-sm  text-gray-700">
                {review.date}
              </p>
              <p className=" text-xs sm:text-sm font-light italic line-clamp-2">
                {review.review}
              </p>
            </div>
          </div>
        ))}
      </EmblaCarousel>
    </div>
  );
};

export default ReviewsCarousel;

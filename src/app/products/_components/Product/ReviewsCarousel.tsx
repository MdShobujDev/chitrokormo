import EmblaCarousel from "@/components/shared/EmblaCarouel";
import { FaStar } from "react-icons/fa6";

const Reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.",
    date: "2021-09-21",
    image: "https://randomuser.me/api/portraits",
  },
  {
    id: 2,
    name: "John Doe",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.",
    date: "2021-09-21",
    image: "https://randomuser.me/api/portraits",
  },
  {
    id: 3,
    name: "John Doe",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.",
    date: "2021-09-21",
    image: "https://randomuser.me/api/portraits",
  },
  {
    id: 4,
    name: "John Doe",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.",
    date: "2021-09-21",
    image: "https://randomuser.me/api/portraits",
  },
  {
    id: 5,
    name: "John Doe",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.",
    date: "2021-09-21",
    image: "https://randomuser.me/api/portraits",
  },
  {
    id: 6,
    name: "John Doe",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, voluptates.",
    date: "2021-09-21",
    image: "https://randomuser.me/api/portraits",
  },
];

const ReviewsCarousel = () => {
  return (
    <div>
      <EmblaCarousel arrowButtons autoplay>
        {Reviews.map((review) => (
          <div
            key={review.id}
            className="flex-[0_0_90%] min-[500px]:flex-[0_0_75%]
            sm:flex-[0_0_50%] md:flex-[0_0_40%] min-[850px]:flex-[0_0_50%] lg:flex-[0_0_33%]  flex gap-3 border p-2 rounded-md cursor-pointer"
          >
            <div className=" min-w-max">
              <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                {/* image */}
              </div>
            </div>
            <div className=" mt-1.5 flex flex-col gap-1">
              <div className="flex items-center gap-1 text-orange-400 text-[.7rem]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h1 className="text-lg font-medium">{review.name}</h1>
              <p className=" text-sm  text-gray-700">{review.date}</p>
              <p className=" text-sm font-light italic line-clamp-2">
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

"use client";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    id: 1,
    img: "/assets/admissions/creative (1).webp",
  },
  {
    id: 2,
    img: "/assets/admissions/creative (2).webp",
  },
  {
    id: 3,
    img: "/assets/admissions/creative (3).webp",
  },
  {
    id: 4,
    img: "/assets/admissions/creative (4).webp",
  },
  {
    id: 5,
    img: "/assets/admissions/creative (5).webp",
  },
  {
    id: 6,
    img: "/assets/admissions/creative (6).webp",
  },
  {
    id: 7,
    img: "/assets/admissions/creative (7).webp",
  },
  {
    id: 8,
    img: "/assets/admissions/creative (8).webp",
  },
  {
    id: 9,
    img: "/assets/admissions/creative (9).webp",
  },
];

const ReviewCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-max cursor-pointer overflow-hidden    transition-all duration-300 rounded-xl border  p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] bg-white",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row justify-center items-center gap-2 ">
        <Image
          className="rounded w-auto h-60 sm:w-auto object-contain sm:h-96"
          src={img}
          alt="Creative admission image"
          width={400}
          height={800}
        />
      </div>
    </figure>
  );
};

export function Creative() {
  return (
    <div className="relative flex sm:max-w-7xl max-w-[95%] mx-auto py-4 sm:py-10 flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      {/* <Marquee pauseOnHover reverse className="[--duration:5s]">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee> */}

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6  bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background"></div>
    </div>
  );
}

export default Creative;

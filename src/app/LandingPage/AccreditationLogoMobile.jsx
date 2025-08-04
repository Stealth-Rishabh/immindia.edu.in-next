import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";
const AACSB = "/assets/accreditationLogo/AACSB.webp";
const AICTE = "/assets/accreditationLogo/AICTE.webp";
const AMDISA = "/assets/accreditationLogo/AMDISA.webp";
const AUAP = "/assets/accreditationLogo/AUAP.webp";
const GGU = "/assets/accreditationLogo/GGU.webp";

const reviews = [
  {
    id: 1,
    img: AICTE,
  },
  {
    id: 2,
    img: AUAP,
  },
  {
    id: 3,
    img: AACSB,
  },
  {
    id: 4,
    img: AMDISA,
  },
  {
    id: 5,
    img: GGU,
  },
];

const ReviewCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-max cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] bg-white",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row justify-center items-center gap-2 ">
        <Image
          className="rounded  h-24"
          src={img}
          alt="Accreditation Logo"
          width={96}
          height={96}
        />
      </div>
    </figure>
  );
};

export function AccreditationLogoMobile() {
  return (
    <div className="relative flex max-w-7xl mx-auto py-4 sm:py-10 flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:8s]">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      {/* <Marquee pauseOnHover reverse className="[--duration:5s]">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee> */}

      {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
    </div>
  );
}

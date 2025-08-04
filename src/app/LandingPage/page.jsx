"use client";
import { useEffect, useState } from "react";
import { initializePrefetch } from "../../utils/prefetch";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import LatestBlogsAndEvents from "./LatestBlogsAndEvents";
import Stats from "./Stats";
import Testimonial from "./Testimonial";
import GlobalExcursion from "./EduTour";
import Awards from "./Awards";
import ProgramsOffered from "./ProgramsOffered";
import Recruiters from "./Recruiters";
import NetworkHappening from "./NetworkHappening";
import LiveProjects from "./LiveProjects";
import HeroSlider from "./HeroSlider";
import Placements from "./Placements";
import OurPartners from "./OurPartners";
import Magnet from "../../yes/Magnet/Magnet";
import BrochureForm from "./BrochureForm";

const MobilePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768; // Tailwind's 'md' breakpoint
    if (isMobile) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 6000); // 2-second delay

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent
        className="md:hidden z-[9999] w-full px-5 max-h-fit aspect-ratio-[5/7]  bg-transparent border-0 rounded-lg overflow-hidden focus:outline-none"
        crossIcon="hidden"
      >
        <a
          href="https://www.immindia.edu.in/imm/general-pgdm-lp/"
          target="_blank"
          className="flex items-center justify-center"
          rel="noopener noreferrer"
        >
          <Image
            src="/pop-up.webp"
            alt="Special Offer"
            width={400}
            height={700}
            className="rounded-lg object-contain w-full h-full max-h-[700px]"
          />
        </a>
        <DialogFooter className="grid grid-cols-2  justify-center gap-4">
          <DialogClose className="bg-white text-black px-4 py-2 rounded-md text-lg">
            Close
          </DialogClose>
          <Button
            variant="outline"
            onClick={() => {
              window.location.href = "https://admissions.immindia.edu.in/";
            }}
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 hover:text-white text-base text-white px-4 py-2 mt-3 rounded-md h-full animate-bounce "
          >
            Apply Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const Landing = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Initialize prefetching for better performance
    initializePrefetch();

    // Check if mobile on client side
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <MobilePopup />
      <div className="fixed -right-11 sm:-right-9 top-[40vh] z-[9999] transform -translate-y-1/2 animate-pulse">
        <Magnet
          padding={150}
          disabled={isMobile}
          magnetStrength={20}
          className=""
        >
          <button
            onClick={() => {
              window.location.href = "https://admissions.immindia.edu.in/";
            }}
            target="_blank"
            className={`flex items-center  rotate-[270deg] bg-red-800 hover:bg-red-900 text-white px-4 pt-2 pb-5 rounded-lg drop-shadow-lg transition-all duration-300 animate-pulse font-semibold`}
          >
            Apply Now
          </button>
        </Magnet>
      </div>
      <div className="fixed -right-[4.7rem] sm:-right-[4.2rem] top-[65vh]  transform z-[9999] -translate-y-1/2">
        <Magnet
          padding={150}
          disabled={isMobile}
          magnetStrength={20}
          className=""
        >
          <BrochureForm />
        </Magnet>
      </div>

      <HeroSlider />

      <OurPartners />

      <ProgramsOffered />

      <Stats />

      {/* Optimized data fetch with React Query and lazy loading */}
      <Placements />

      {/* Optimized data fetch with React Query and lazy loading */}
      <Awards />

      {/* Optimized data fetch with React Query and lazy loading */}
      <Recruiters />

      {/* Optimized data fetch with React Query and lazy loading */}
      <GlobalExcursion />

      <NetworkHappening />

      <LatestBlogsAndEvents />

      {/* Optimized data fetch with React Query and lazy loading */}
      <LiveProjects />

      {/* Optimized data fetch with React Query and lazy loading */}
      <Testimonial />
    </div>
  );
};

export default Landing;

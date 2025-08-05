"use client";
import Heading from "../../../components/Heading";
import ImgAndBreadcrumb from "../../../components/ImgAndBreadcrumb";
import Container from "../../../components/wrappers/Container";
// import Stats from "../../../components/Stats";
// import Newsletter from "../../../components/Newsletter";
// import AboutSidebar from "../../../components/AboutSidebar";
import { useState, useEffect } from "react";
import { Mail, MailOpen } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useFetch } from "../../../hooks/useFetch";
import { API_ENDPOINTS } from "@/lib/api";
import Image from "next/image";

const Leadership = () => {
  const {
    data,
    loading: bannerLoading,
    error: bannerError,
  } = useFetch("/api/indexBanner.php");
  const [bannerImage, setBannerImage] = useState(
    `${API_ENDPOINTS.UPLOADS}/680fd14484b0a.png`
  ); // Default image
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const mobileImage = data.find(
        (item) => item && item.category === "Leadership Mobile"
      )?.url;
      const desktopImage = data.find(
        (item) => item && item.category === "Leadership"
      )?.url;

      if (isMobile && mobileImage) {
        setBannerImage(mobileImage);
      } else if (!isMobile && desktopImage) {
        setBannerImage(desktopImage);
      }
      // Optional: Fallback to a general category image if specific ones are not found
      // else if (desktopImage) { // Fallback to desktop if mobile-specific not found on mobile
      //   setBannerImage(desktopImage);
      // } else if (mobileImage) { // Fallback to mobile if desktop-specific not found on desktop
      //  setBannerImage(mobileImage);
      // }
    }
  }, [data, isMobile]);

  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/about/leadership", label: "About" },
    { label: "Leadership" },
  ];
  return (
    <div className="relative min-h-screen ">
      <ImgAndBreadcrumb
        title=""
        imageSrc={bannerImage}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <Container className="container grid ">
        <Heading
          title="Welcome to Our Leadership Team"
          titleClassName="text-primary-color  lg:text-5xl text-center"
          subtitleClassName="text-gray-500 text-center m-0 lg:text-lg lg:font-normal lg:max-w-full"
          subtitle="Meet the visionaries guiding our institution towards excellence in education and empowerment."
          className="pt-12 mx-auto"
        />
        <LeadershipContent />
      </Container>
      <div className="bg-slate-50"></div>
      {/* <Stats />
      <Newsletter /> */}
    </div>
  );
};

export default Leadership;

const LeadershipContent = () => {
  const [leadershipMembers, setLeadershipMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const fetchLeadership = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.FACULTY);
        if (!response.ok) {
          throw new Error("Failed to fetch leadership data");
        }
        const data = await response.json();

        // Debug: Check if data is an array
        if (!Array.isArray(data)) {
          console.error("API returned non-array data:", data);
          throw new Error("Invalid data format received from API");
        }

        // Filter to only include leadership category
        const leadershipOnly = data.filter(
          (member) =>
            member &&
            member.category &&
            member.category.toLowerCase() === "leadership"
        );

        console.log("Leadership members:", leadershipOnly);

        // Ensure all members have required properties
        const validatedMembers = leadershipOnly.map((member) => ({
          id: member.id || Math.random().toString(),
          title: member.title || "Unknown",
          description: member.description || "No position specified",
          url: member.url || "/assets/placeholder.jpg",
          link: member.link || "",
          message: member.message || "No message available.",
          category: member.category || "leadership",
        }));

        setLeadershipMembers(validatedMembers.reverse());
        setLoading(false);
      } catch (err) {
        console.error("Error fetching leadership data:", err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchLeadership();
  }, []);

  const handleReadMore = (leader) => {
    setSelectedLeader(leader);
    setIsDialogOpen(true);
  };

  return (
    <div className="container mx-auto">
      {loading && (
        <div className="text-center py-10">
          <p className="text-lg">Loading leadership information...</p>
        </div>
      )}
      {error && (
        <div className="text-center py-10">
          <p className="text-lg text-red-500">Error: {error}</p>
        </div>
      )}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipMembers.map((leader, index) => {
            // Ensure all values are strings to prevent React error #130
            const safeLeader = {
              name: String(leader.title || "Unknown"),
              position: String(leader.description || "No position specified"),
              image: String(leader.url || "/assets/placeholder.jpg"),
              linkedin: String(leader.link || ""),
              message: String(leader.message || "No message available."),
            };

            return (
              <LeaderCard
                key={leader.id || index}
                leader={safeLeader}
                onReadMore={handleReadMore}
                index={index}
              />
            );
          })}
        </div>
      )}
      <ReadMoreDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        leader={selectedLeader}
      />
    </div>
  );
};

const LeaderCard = ({ leader, onReadMore, index }) => {
  // Safety check for leader data
  if (!leader || typeof leader !== "object") {
    console.error("Invalid leader data:", leader);
    return null;
  }

  return (
    <Card className="flex flex-col h-full">
      <CardContent className="flex-grow p-6">
        <div className="aspect-w-1 aspect-h-1 mb-4">
          <Image
            src={leader.image || "/assets/placeholder.jpg"}
            alt={leader.name || "Leadership member"}
            width={300}
            height={300}
            className="object-cover rounded-lg shadow border border-gray-50 w-full  h-full "
          />
        </div>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              {leader.name || "Unknown"}
            </h3>
            <p className="text-gray-600 mb-4">
              {leader.position || "No position specified"}
            </p>
          </div>

          <a
            href={leader.linkedin || "javascript:void(0)"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-all duration-300"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-blue-500 hover:text-blue-600 transition-colors duration-300"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={() => onReadMore(leader)}
          className="w-full flex items-center justify-center group"
        >
          {index === 0 || index === 1 ? "View Legacy" : "View Message"}
          <Mail
            size={20}
            className="mt-1 ml-2 group-hover:hidden transition-all duration-300"
          />
          <MailOpen
            size={20}
            className="mt- ml-2 hidden group-hover:block transition-all duration-300"
          />
        </Button>
      </CardFooter>
    </Card>
  );
};

const ReadMoreDialog = ({ isOpen, onClose, leader }) => {
  if (!leader) return null;

  // Ensure leader properties are strings
  const safeLeader = {
    name: String(leader.name || "Unknown"),
    position: String(leader.position || "No position specified"),
    message: String(leader.message || "No message available."),
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose} className=" rounded-lg">
      <DialogContent className="sm:max-w-3xl rounded-lg w-[90vw]">
        <DialogHeader>
          <DialogTitle className="text-xl text-left">
            {safeLeader.name}
          </DialogTitle>
          <DialogDescription className="text-left">
            {safeLeader.position}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 max-h-[60vh] overflow-y-auto">
          {safeLeader.message.split(/\n+/).map((paragraph, index) => (
            <p key={index} className="mb-4 whitespace-pre-line text-justify">
              {paragraph || " "}
            </p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

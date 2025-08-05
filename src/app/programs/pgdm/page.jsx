"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "../../../components/wrappers/Container";
import Heading from "../../../components/Heading";
import PgdmProgramTab from "../PgdmProgramTab";
import ProjectTab from "../ProjectTab";
import ImgAndBreadcrumb from "../../../components/ImgAndBreadcrumb";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";

const PgdmPage = () => {
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

  const breadcrumbItems = [
    { href: "/", label: "Home" },
    { href: "/programs/pgdm", label: "Programs" },
    { label: "PGDM" },
  ];

  return (
    <div className="relative min-h-screen">
      <ImgAndBreadcrumb
        title={isMobile ? "PGDM" : ""}
        imageSrc={isMobile ? "/banners/pgdmM.webp" : "/banners/pgdm.webp"}
        imageAlt="Description of the image"
        breadcrumbItems={breadcrumbItems}
      />
      <section className="relative">
        <DotPattern
          glow="true"
          className={cn(
            "[mask-image:radial-gradient(200px_circle_at_center,white,transparent, z-[-99] relative)], hidden md:block"
          )}
        />
        <Container>
          <div className="">
            <Heading
              title="Post Graduate Diploma in Management"
              titleClassName="lg:font-extrabold font-bold text-primary-color"
              subtitle="Our PGDM program is designed to provide a comprehensive understanding of modern business practices"
              subtitleClassName="text-gray-500 text-justify m-0 lg:text-lg lg:font-normal  text-center mx-auto max-w-4xl backdrop-blur-sm"
              className="w-full text-center sm:col-span-4 pt-12"
            />

            <Tabs defaultValue="pgdm" className="w-full my-2">
              <TabsList className="grid w-full h-full grid-cols-2 ">
                <TabsTrigger
                  value="pgdm"
                  className="data-[state=active]:bg-pink-900 h-10 data-[state=active]:text-white"
                >
                  PGDM
                </TabsTrigger>
                <TabsTrigger
                  value="projects"
                  className="data-[state=active]:bg-pink-900 h-10 data-[state=active]:text-white"
                >
                  Projects
                </TabsTrigger>
              </TabsList>
              <TabsContent value="pgdm" className="mt-6">
                <div className="space-y-8 sm:px-4">
                  <PgdmProgramTab />
                </div>
              </TabsContent>

              <TabsContent value="curriculum" className="mt-6">
                <ProjectTab />
              </TabsContent>

              <TabsContent value="projects" className="mt-6">
                <div className="space-y-8 sm:px-4">
                  <ProjectTab />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default PgdmPage;

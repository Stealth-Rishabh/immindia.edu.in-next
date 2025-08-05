"use client";
import { BookOpen } from "lucide-react";
import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { curriculum } from "./data/pgdm-program-data";
import Image from "next/image";

export default function SemesterTabMobile() {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);

  const handleTabHover = useCallback((index) => {
    setHoveredTab(index);
    const timer = setTimeout(() => {
      setActiveTab(index);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="">
      <motion.div
        className="text-center mt-10 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-pink-900 mb-4 drop-shadow-md backdrop-blur-sm">
          13 Skill Certifications by Kladio
        </h2>
        <p className="text-gray-700 text-base drop-shadow-sm backdrop-blur-sm">
          Choose from a variety of specializations designed to align with your
          career goals and industry demands.
        </p>
      </motion.div>

      {/* Mobile Tab Navigation */}
      <div className="flex overflow-x-auto space-x-2 mb-6 pb-2">
        {curriculum.map((semester, index) => (
          <motion.button
            key={index}
            onMouseEnter={() => handleTabHover(index)}
            onMouseLeave={() => setHoveredTab(null)}
            onClick={() => setActiveTab(index)}
            className={cn(
              "flex-shrink-0 px-4 py-2 rounded-lg transition-all duration-200 font-medium text-sm",
              "hover:shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50",
              activeTab === index
                ? "bg-gradient-to-r from-pink-700 to-pink-900 text-white drop-shadow-lg"
                : "bg-white border-2 border-slate-100 hover:bg-gradient-to-r hover:from-pink-700 hover:to-pink-900 hover:text-white shadow-md"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {semester.semester}
          </motion.button>
        ))}
      </div>

      {/* Mobile Content Display */}
      <div className="bg-white/80 p-4 rounded-lg shadow-md">
        <AnimatePresence>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <h2 className="text-xl font-bold text-pink-800 mb-2">
                {curriculum[activeTab].title.name}
              </h2>
              <p className="text-gray-500 text-sm mb-4">
                {curriculum[activeTab].semester}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {curriculum[activeTab].modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center p-3 bg-white rounded-lg shadow-sm border"
                >
                  <Image
                    src={module.icon}
                    alt={module.name}
                    width={32}
                    height={32}
                    className="w-8 h-8 object-contain mr-3"
                  />
                  <p className="text-sm font-medium text-slate-700">
                    {module.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

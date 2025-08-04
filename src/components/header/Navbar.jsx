"use client";

import Image from "next/image";
import Drawer from "./Drawer";
import Link from "next/link";
import { navlinks } from "./navData";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@/context/ThemeContext";

const logo = "/assets/logo.svg";
const logo2 = "/assets/header/imm 56 years logo.png";

export default function Header() {
  const { navbarColor } = useTheme();

  return (
    <header className="w-full">
      {/* Main Navigation */}
      <nav className={navbarColor}>
        <div className="flex flex-wrap items-center justify-between px-4 py-3 mx-auto md:px-4">
          {/* Logo Section */}
          <div className="flex items-center gap-0">
            <Link
              href="/"
              className="transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={logo}
                alt="Indo Global Group of Colleges"
                width={200}
                height={80}
                className="w-auto h-[80px]"
              />
            </Link>
            <Image
              src={logo2}
              alt="Indo Global Group of Colleges"
              width={200}
              height={64}
              className="w-auto h-16 transition-transform duration-300 hover:scale-105 "
            />
          </div>

          {/* Navigation Menu */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {navlinks.map((item, index) => (
                <DropdownItem key={index} item={item} />
              ))}
            </ul>
          </div>

          <Drawer />
        </div>
      </nav>
    </header>
  );
}

function DropdownItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setIsHovered(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!item.submenu ? (
        <Link
          href={item.path}
          className={`text-sm font-medium text-white relative transition-all duration-300 
            ${isHovered ? "text-gray-200" : ""}
            after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white 
            after:left-0 after:-bottom-1 after:transition-all after:duration-300
            hover:after:w-full`}
        >
          {item.name}
        </Link>
      ) : (
        <button
          className={`text-sm font-medium text-white relative transition-all duration-300
            ${isHovered ? "text-gray-200" : ""}
            after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white 
            after:left-0 after:-bottom-1 after:transition-all after:duration-300
            hover:after:w-full`}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          {item.name}
        </button>
      )}

      {/* Dropdown Menu */}
      {item.submenu && isOpen && (
        <>
          {/* This div creates an invisible bridge between parent and dropdown */}
          <div className="absolute w-full h-2 -bottom-2"></div>
          <ul
            className="absolute left-0 top-full p-1 mt-2 overflow-hidden bg-white rounded shadow-lg z-[9999] min-w-[150px] w-max
                       animate-fadeIn transform origin-top-left"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {item.submenu.map((subItem, subIndex) =>
              subItem.href ? (
                <li key={subIndex} onClick={() => setIsOpen(false)}>
                  <a
                    href={subItem.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 rounded-sm transition-all duration-200
                            hover:bg-gray-200 hover:pl-6 hover:text-primary-color"
                  >
                    {subItem.name}
                  </a>
                </li>
              ) : (
                <li key={subIndex} onClick={() => setIsOpen(false)}>
                  <Link
                    href={subItem.path}
                    className="block px-4 py-2 text-sm text-gray-700 rounded-sm transition-all duration-200
                            hover:bg-gray-200 hover:pl-6 hover:text-primary-color"
                  >
                    {subItem.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </>
      )}
    </li>
  );
}

DropdownItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string,
    submenu: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

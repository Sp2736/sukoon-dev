"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Track scroll position to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      // Change state if scrolled past 50px (you can adjust this threshold)
      if (window.scrollY > 800) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine styles based on scroll state
  const navBgClass = isScrolled ? "bg-white shadow-sm" : "bg-transparent";
  const textColorClass = isScrolled ? "text-[#1F1F1F]" : "text-black";
  const logoSrc = isScrolled ? "/logo-black.png" : "/logo-white.png";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${navBgClass}`}
    >
      <div className="flex items-center justify-between px-8 md:px-24 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex flex-col">
            <img
              src={logoSrc}
              alt="Sukoon Developers"
              className="h-12 w-auto object-contain cursor-pointer transition-all duration-300"
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 ml-auto">
          <div
            className={`flex items-center gap-8 font-heading text-[15px] ${textColorClass}`}
          >
            <Link
              href="/"
              className="font-medium cursor-pointer hover:opacity-70 transition-opacity"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="font-normal opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
            >
              About Us
            </Link>
            <Link
              href="/properties"
              className="font-normal opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
            >
              Property listing
            </Link>
          </div>

          <Link
            href="/contact"
            className="bg-[#52B7EC] text-white px-8 py-3 rounded-full font-heading font-semibold text-[14px] hover:brightness-110 transition-all cursor-pointer"
          >
            Contact Us
          </Link>
        </div>

        {/* Hamburger Toggle (Mobile Only) */}
        <div className="md:hidden flex items-center relative z-[120] ml-auto">
          <button
            onClick={toggleMenu}
            className={`${textColorClass} p-2 transition-transform duration-300 active:scale-90`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu List */}
      <div
        className={`absolute top-full right-8 md:right-24 transition-all duration-300 ease-in-out md:hidden flex flex-col items-end ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        {/* The mobile menu uses a solid background to ensure readability regardless of the page background */}
        <ul
          className={`flex flex-col items-end gap-3 py-4 px-6 rounded-xl shadow-lg border border-gray-100 ${isScrolled ? "bg-white" : "bg-black/80 backdrop-blur-md"}`}
        >
          <li>
            <Link
              href="/"
              onClick={toggleMenu}
              className={`font-heading text-[15px] font-medium cursor-pointer ${textColorClass}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={toggleMenu}
              className={`font-heading text-[15px] font-normal cursor-pointer ${textColorClass} opacity-80`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/properties"
              onClick={toggleMenu}
              className={`font-heading text-[15px] font-normal cursor-pointer ${textColorClass} opacity-80`}
            >
              Property listing
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={toggleMenu}
              className="font-heading text-[14px] font-semibold text-[#52B7EC] cursor-pointer"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

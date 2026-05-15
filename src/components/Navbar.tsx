"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Property listing", href: "/properties" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  // 1. Pages that use the "sukoon-color.png" logo (Listings & Details)
  const isColorLogoPage = pathname.startsWith("/properties");

  // 2. Pages that are solid white immediately (Properties routing)
  const isSolidWhitePage = pathname.startsWith("/properties");

  // 3. Pages that need White TEXT initially (Contact, About)
  const isWhiteTextPage = pathname === "/contact" || pathname === "/about";

  // 4. Pages that need a White LOGO initially (Home, Contact, About)
  const isWhiteLogoPage =
    pathname === "/" || pathname === "/contact" || pathname === "/about";

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBgClass =
    isScrolled || isSolidWhitePage ? "bg-white shadow-sm" : "bg-transparent";

  const textColorClass =
    isScrolled || isSolidWhitePage
      ? "text-[#1F1F1F]"
      : isWhiteTextPage
        ? "text-white"
        : "text-[#1F1F1F]";

  // LOGO LOGIC REFACTORED: Color logo overrides everything on Property pages
  let logoSrc = "/logo-black.png";
  if (isColorLogoPage) {
    logoSrc = "/sukoon-color.png";
  } else if (isScrolled) {
    logoSrc = "/logo-black.png";
  } else if (isWhiteLogoPage) {
    logoSrc = "/logo-white.png";
  }

  const mobileMenuBg =
    isScrolled || isSolidWhitePage
      ? "bg-white"
      : isWhiteTextPage
        ? "bg-black/80 backdrop-blur-md"
        : "bg-white/90 backdrop-blur-md shadow-sm";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${navBgClass}`}
    >
      <div className="flex items-center justify-between px-8 md:px-24 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex flex-col">
            <img
              src={logoSrc}
              alt="Sukoon Developers"
              className="h-12 w-auto object-contain cursor-pointer transition-all duration-300"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 ml-auto">
          <div
            className={`flex items-center gap-8 font-heading text-[15px] ${textColorClass}`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "font-bold opacity-100"
                      : "font-normal opacity-80 hover:font-bold hover:opacity-100"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            className="bg-[#52B7EC] text-white px-8 py-3 rounded-full font-heading font-semibold text-[14px] hover:brightness-110 transition-all cursor-pointer shadow-sm"
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
        <ul
          className={`flex flex-col items-end gap-3 py-4 px-6 rounded-xl border border-gray-100 ${mobileMenuBg}`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  className={`font-heading text-[15px] cursor-pointer transition-all duration-300 ${textColorClass} ${
                    isActive
                      ? "font-bold opacity-100"
                      : "font-normal opacity-80 hover:font-bold hover:opacity-100"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
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

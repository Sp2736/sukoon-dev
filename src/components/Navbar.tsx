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

  const isColorLogoPage = pathname.startsWith("/properties");
  const isWhiteTextPage =
    pathname === "/contact" ||
    pathname === "/about" ||
    pathname.startsWith("/properties");
  const isWhiteLogoPage =
    pathname === "/" || pathname === "/contact" || pathname === "/about";

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBgClass = isScrolled ? "bg-white shadow-sm" : "bg-transparent";

  const textColorClass = isScrolled
    ? "text-[#1F1F1F]"
    : isWhiteTextPage
      ? pathname.startsWith("/properties")
        ? "text-black"
        : "text-white"
      : "text-[#1F1F1F]";

  let logoSrc = "/sukoon-col.png";
  if (isColorLogoPage) {
    logoSrc = "/sukoon-col.png";
  } else if (isScrolled) {
    logoSrc = "/sukoon-col.png";
  } else if (isWhiteLogoPage) {
    logoSrc = "/logo-white.png";
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${navBgClass}`}
    >
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex flex-col">
            <img
              src={logoSrc}
              alt="Sukoon Developers"
              className="h-10 md:h-12 w-auto object-contain cursor-pointer transition-all duration-300"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 ml-auto">
          <div
            className={`flex items-center gap-8 font-heading text-[15px] font-semibold ${textColorClass}`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-all duration-300 ${isActive ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
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

        {/* Hamburger Toggle (Mobile/Tablet Only) */}
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

      {/* Mobile Menu List (Forced to White BG & Black Text) */}
      <div
        className={`absolute top-full right-4 md:right-16 transition-all duration-300 ease-in-out md:hidden flex flex-col items-end ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-end gap-4 py-6 px-8 rounded-2xl border border-gray-100 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={toggleMenu}
                  className={`font-heading text-[16px] cursor-pointer transition-all duration-300 text-[#1F1F1F] ${
                    isActive ? "font-bold" : "font-medium opacity-80"
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
              className={`font-heading text-[16px] cursor-pointer transition-all duration-300 text-[#52B7EC] ${
                pathname === "/contact" ? "font-bold" : "font-medium"
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

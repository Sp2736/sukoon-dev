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

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navBgClass = isScrolled ? "bg-white shadow-sm" : "bg-transparent";

  const textColorClass = isScrolled
    ? "text-[#1F1F1F]"
    : isWhiteTextPage
      ? pathname.startsWith("/properties")
        ? "text-black"
        : "text-white"
      : "text-[#1F1F1F]";

  // Hamburger is white when logo is white (unscrolled, white-logo pages),
  // black once scrolled or on color-logo pages
  const hamburgerColorClass =
    !isScrolled && isWhiteLogoPage && !isColorLogoPage
      ? "text-white"
      : "text-[#1F1F1F]";

  let logoSrc = "/sukoon-col.webp";
  if (isColorLogoPage) {
    logoSrc = "/sukoon-col.webp";
  } else if (isScrolled) {
    logoSrc = "/sukoon-col.webp";
  } else if (isWhiteLogoPage) {
    logoSrc = "/logo-white.webp";
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${navBgClass}`}
      >
        <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex flex-col">
              <img
                src={logoSrc}
                alt="Sukoon Developer"
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
              className="bg-[#52B7EC] text-white px-8 py-3 rounded-full font-heading font-semibold text-[14px] transition-all cursor-pointer shadow-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Hamburger — mobile only */}
          <div className="md:hidden flex items-center relative z-[120] ml-auto">
            <button
              onClick={toggleMenu}
              className={`p-2 transition-all duration-300 active:scale-90 ${
                isOpen ? "text-[#1F1F1F]" : hamburgerColorClass
              }`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </nav>

      {/* SLIDE-DOWN MOBILE MENU PANEL */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[105] bg-black/20 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Panel — slides down from top, covers 2/5 of screen height */}
      <div
        className={`fixed top-0 left-0 w-full z-[110] md:hidden bg-white
          transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
          ${isOpen ? "translate-y-0" : "-translate-y-full"}
        `}
        style={{ height: "40vh", minHeight: "260px" }}
      >
        {/* Inner layout */}
        <div className="flex flex-col h-full px-6 pt-4 pb-8">
          {/* Top row: color logo + X button */}
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <img
                src="/sukoon-col.webp"
                alt="Sukoon Developer"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#1F1F1F] p-2 active:scale-90 transition-transform duration-200"
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Nav links — vertically centered in remaining space */}
          <nav className="flex flex-col justify-center flex-1 gap-[2px]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-heading text-[18px] py-3 border-b border-gray-100 transition-all duration-200
                    ${
                      isActive
                        ? "text-[#1F1F1F] font-bold"
                        : "text-[#1F1F1F] font-medium opacity-70 hover:opacity-100"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`font-heading text-[18px] py-3 transition-all duration-200
                ${
                  pathname === "/contact"
                    ? "text-[#52B7EC] font-bold"
                    : "text-[#52B7EC] font-medium"
                }`}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
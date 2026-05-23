"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { Instrument_Sans, Source_Sans_3 } from "next/font/google";

const instrument = Instrument_Sans({ subsets: ["latin"] });
const source = Source_Sans_3({ subsets: ["latin"] });

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-[800px] flex items-center pt-[100px] pb-[50px] overflow-hidden">
      {/* ========================================================= */}
      {/* BACKGROUND LAYERS */}
      {/* ========================================================= */}

      {/* Base Image - Fades in cinematically on load */}
      <img
        src="/contact-bg.webp"
        alt="Sukoon Contact"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0B1521]/95 via-[#0B152190]/70 to-transparent" />

      {/* ========================================================= */}
      {/* CONTENT WRAPPER */}
      {/* ========================================================= */}

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-[100px] flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8">
        {/* --- LEFT COLUMN: Contact Information --- */}
        <div className="w-full lg:w-[45%] flex flex-col text-white pt-4">
          <h1 className="animate-base main-heading-animation font-heading font-bold text-[48px] lg:text-[64px] leading-[1.1] tracking-[-0.02em] mb-[24px]">
            Let’s Connect
          </h1>

          <p className={`animate-base sub-heading-animation delay-100 ${source.className} font-body font-normal text-[16px] md:text-[18px] text-white/90 leading-[1.6] max-w-[480px] mb-[48px]`}>
            Have questions about properties or investments? Our team is here to
            help you find the right opportunity
          </p>

          {/* Contact Details List */}
          <div className={`animate-base content-animation delay-200 ${instrument.className} flex flex-col gap-6 font-body text-[16px] text-white/90 mb-[56px]`}>
            <a
              href="tel:+917229011331"
              className="flex items-center gap-4 hover:text-[#52B7EC] transition-colors duration-300"
            >
              <Phone
                size={20}
                className="shrink-0"
                fill="currentColor"
                strokeWidth={0}
              />
              <span>+91 72290 11331</span>
            </a>

            <a
              href="mailto:info@sukoondeveloper.com"
              className="flex items-center gap-4 hover:text-[#52B7EC] transition-colors duration-300"
            >
              <Mail
                size={20}
                className="shrink-0"
                fill="currentColor"
                strokeWidth={0}
              />
              <span>info@sukoondeveloper.com</span>
            </a>

            <div className="flex items-start gap-4">
              <MapPin size={22} className="mt-1 shrink-0 text-white" />
              <span className="leading-[1.6] max-w-[320px]">
                1/84 - Sarpanch Faliyu, Near Bhathiji Mandir, Hetampura, Vadodara (Dabhoi Road)<br/>390004
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="animate-base content-animation delay-300 flex flex-col gap-4">
            <span className={`${instrument.className} font-body font-medium text-[15px] text-white`}>
              Follow Us
            </span>
            <div className="flex items-center gap-6">
              {/* X / Twitter */}
              <a
                href="#"
                className="text-white hover:text-[#52B7EC] transition-colors duration-300"
                aria-label="X"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                className="text-white hover:text-[#52B7EC] transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                className="text-white hover:text-[#52B7EC] transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: Minimalist Form Card --- */}
        <div className="animate-base form-animation delay-400 w-full lg:w-[48%] max-w-[600px]">
          <div className="bg-white/95 backdrop-blur-sm rounded-[22px] p-5 md:p-[24px] shadow-2xl">
            <h2 className="font-heading font-semibold text-[#303030] text-[26px] md:text-[26px] mb-[32px]">
              Send Us a Message
            </h2>

            <form
              className={`flex flex-col gap-6`}
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name */}
              <input
                type="text"
                placeholder="Name"
                className={`${source.className} w-full border-b border-gray-200 bg-transparent py-3 text-[18px] font-body text-[#1F1F1F] placeholder-gray-400 focus:outline-none focus:border-[#52B7EC] transition-colors`}
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className={`${source.className} w-full border-b border-gray-200 bg-transparent py-3 text-[18px] font-body text-[#1F1F1F] placeholder-gray-400 focus:outline-none focus:border-[#52B7EC] transition-colors`}
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone Number"
                className={`${source.className} w-full border-b border-gray-200 bg-transparent py-3 text-[18px] font-body text-[#1F1F1F] placeholder-gray-400 focus:outline-none focus:border-[#52B7EC] transition-colors`}
              />

              {/* Property Type Dropdown */}
              <div className="relative">
                <select
                  className={`${source.className} w-full border-b border-gray-200 bg-transparent py-3 text-[18px] font-body text-gray-400 appearance-none focus:outline-none focus:border-[#52B7EC] transition-colors cursor-pointer`}
                  defaultValue=""
                >
                  <option value="" disabled className={`text-[gray-400]`}>
                    Property Type
                  </option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="land">Land Investment</option>
                </select>
                {/* Custom Select Arrow */}
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>

              {/* Budget Range */}
              <input
                type="text"
                placeholder="Budget Range"
                className={`${source.className} w-full border-b border-gray-200 bg-transparent py-3 text-[18px] font-body text-[#1F1F1F] placeholder-gray-400 focus:outline-none focus:border-[#52B7EC] transition-colors`}
              />

              {/* Message */}
              <input
                type="text"
                placeholder="Message"
                className={`${source.className} w-full border-b border-gray-200 bg-transparent py-3 text-[18px] font-body text-[#1F1F1F] placeholder-gray-400 focus:outline-none focus:border-[#52B7EC] transition-colors`}
              />

              {/* Submit Button - Aligned Left */}
              <div className="mt-4 flex justify-start">
                <button
                  type="submit"
                  className="bg-[#52B7EC] text-white px-8 py-[14px] rounded-full font-heading font-semibold text-[15px] hover:brightness-110 transition-all duration-300 active:scale-95"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
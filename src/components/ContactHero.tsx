"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-[800px] flex items-center pt-[120px] pb-[80px] overflow-hidden">
      {/* ========================================================= */}
      {/* BACKGROUND LAYERS */}
      {/* ========================================================= */}

      {/* 1. Base Image - Make sure to name your image contact-bg.jpg in the public folder */}
      <img
        src="/contact-bg.jpg"
        alt="Sukoon Contact"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* 2. Dark Gradient Overlay - Fades from dark on the left to transparent on the right */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0A1118]/95 via-[#0A1118]/70 to-transparent" />

      {/* 3. Optional Bottom Fade to blend cleanly into the next section */}
      <div className="absolute bottom-0 left-0 w-full h-[150px] z-[1] bg-gradient-to-t from-white via-white/40 to-transparent" />

      {/* ========================================================= */}
      {/* CONTENT WRAPPER */}
      {/* ========================================================= */}

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-16 lg:px-[100px] flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
        {/* --- LEFT COLUMN: Contact Information --- */}
        <div className="w-full lg:w-[45%] flex flex-col text-white">
          <h1 className="font-heading font-bold text-[40px] lg:text-[56px] leading-[1.1] mb-[20px]">
            Let’s Connect
          </h1>

          <p className="font-body font-normal text-[16px] md:text-[18px] text-white/80 leading-[1.7] max-w-[500px] mb-[48px]">
            Have questions about properties or investments? Our team is here to
            help you find the right opportunity.
          </p>

          {/* Contact Details List */}
          <div className="flex flex-col gap-6 font-body text-[15px] text-white/90 mb-[48px]">
            <a
              href="tel:+919825444603"
              className="flex items-start gap-4 hover:text-[#52B7EC] transition-colors duration-300"
            >
              <Phone
                size={20}
                className="mt-0.5 shrink-0"
                fill="currentColor"
                strokeWidth={0}
              />
              <span>+91 98254 44603</span>
            </a>

            <a
              href="mailto:info@sukoon.in"
              className="flex items-start gap-4 hover:text-[#52B7EC] transition-colors duration-300"
            >
              <Mail
                size={20}
                className="mt-0.5 shrink-0"
                fill="currentColor"
                strokeWidth={0}
              />
              <span>info@sukoon.in</span>
            </a>

            <div className="flex items-start gap-4">
              <MapPin size={22} className="mt-0.5 shrink-0 text-white" />
              <span className="leading-[1.6] max-w-[300px]">
                301, Lotus Business Hub, RC Dutt Road, Alkapuri, Vadodara,
                Gujarat 390007
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <span className="font-heading font-semibold text-[14px] text-white/70 tracking-wide uppercase">
              Follow Us
            </span>
            <div className="flex items-center gap-5">
              {/* X / Twitter */}
              <a
                href="#"
                className="text-white hover:text-[#52B7EC] transition-colors duration-300"
                aria-label="X"
              >
                <svg
                  width="18"
                  height="18"
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
                  width="20"
                  height="20"
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
                  width="20"
                  height="20"
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

        {/* --- RIGHT COLUMN: Form Card --- */}
        <div className="w-full lg:w-[50%] max-w-[600px]">
          <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-2xl">
            <h2 className="font-heading font-bold text-[#1F1F1F] text-[24px] md:text-[28px] mb-[32px]">
              Send Us a Message
            </h2>

            <form
              className="flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name */}
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] font-body text-[#1F1F1F] placeholder-gray-400 focus:outline-none focus:border-[#52B7EC] focus:ring-1 focus:ring-[#52B7EC] transition-all bg-[#FAFAFA] hover:bg-white"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] font-body text-[#1F1F1F] placeholder-gray-400 focus:outline-none focus:border-[#52B7EC] focus:ring-1 focus:ring-[#52B7EC] transition-all bg-[#FAFAFA] hover:bg-white"
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] font-body text-[#1F1F1F] placeholder-gray-400 focus:outline-none focus:border-[#52B7EC] focus:ring-1 focus:ring-[#52B7EC] transition-all bg-[#FAFAFA] hover:bg-white"
              />

              {/* Property Type Dropdown */}
              <div className="relative">
                <select
                  className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] font-body text-gray-400 focus:text-[#1F1F1F] appearance-none focus:outline-none focus:border-[#52B7EC] focus:ring-1 focus:ring-[#52B7EC] transition-all bg-[#FAFAFA] hover:bg-white cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Property Type
                  </option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="land">Land Investment</option>
                </select>
                {/* Custom Select Arrow */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg
                    width="12"
                    height="12"
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
                className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] font-body text-[#1F1F1F] placeholder-gray-400 focus:outline-none focus:border-[#52B7EC] focus:ring-1 focus:ring-[#52B7EC] transition-all bg-[#FAFAFA] hover:bg-white"
              />

              {/* Message */}
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border border-gray-200 rounded-lg px-4 py-3.5 text-[15px] font-body text-[#1F1F1F] placeholder-gray-400 focus:outline-none focus:border-[#52B7EC] focus:ring-1 focus:ring-[#52B7EC] transition-all bg-[#FAFAFA] hover:bg-white resize-none"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-2 w-fit bg-[#52B7EC] text-white px-8 py-3.5 rounded-full font-heading font-semibold text-[15px] hover:brightness-110 transition-all duration-300"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

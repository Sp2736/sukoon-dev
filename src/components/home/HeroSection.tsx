import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100svh] lg:h-screen min-h-[650px] lg:min-h-[850px] flex flex-col justify-center overflow-hidden">
      {/* 1. Background Image & Fade Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.webp')" }}
      >
        {/* Exact gradient overlay: Full width on mobile/tablet for text readability, 70% on desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D130622]/95 via-[#333B2A3B]/70 to-transparent w-full lg:w-[70%]"></div>
      </div>

      {/* 3. Main Hero Content (Structured exactly to match image wrapping) */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 mt-0 lg:mt-12 w-full max-w-[850px]">
        {/* Huge Headline - Scaled for mobile, preserved for desktop */}
        <h1 className="animate-base main-heading-animation font-heading font-bold text-white text-[42px] md:text-[54px] lg:text-[64px] leading-[1.1] lg:leading-[1.05] mb-4 lg:mb-6 drop-shadow-md">
          Build, Invest & Grow with Us
        </h1>

        {/* Sub-headline */}
        <p className="animate-base sub-heading-animation font-body text-white/90 text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] max-w-[700px] mb-8 lg:mb-12">
          Building homes, developing spaces, and growing land wealth all over
          Gujarat, with zero brokerage and full transparency
        </p>

        {/* CTA Button */}

        <Link
          href="/contact"
          className="animate-base content-animation bg-[#52B7EC] text-white px-8 py-3 rounded-full font-heading font-semibold text-[14px] shadow-lg hover:brightness-110 transition-all"
        >
          Get In Touch
        </Link>
      </div>

      {/* 4. Bottom Stats Block (Stacked on mobile, side-by-side on tablet/desktop) */}
      <div className="animate-base content-animation delay-500 absolute bottom-6 lg:bottom-10 left-6 md:left-16 lg:left-24 z-10 flex flex-col md:flex-row items-start md:items-center gap-4 lg:gap-12 md:gap-8">
        {/* Stat 1 */}
        <div className="flex flex-col gap-1">
          <span className="font-heading font-bold text-white text-[20px] md:text-[22px] tracking-tight">
            50k+ renters
          </span>
          <span className="font-body text-white/60 text-[13px] md:text-[14px] capitalize">
            Believe In Our Service
          </span>
        </div>

        {/* Original line.svg from Figma - Hidden on mobile phones, visible on tablet+ */}
        <img
          src="/line.svg"
          alt="divider"
          className="hidden md:block h-10 md:h-14 w-auto object-contain opacity-50"
        />

        {/* Stat 2 */}
        <div className="flex flex-col gap-1">
          <span className="font-heading font-bold text-white text-[20px] md:text-[22px] tracking-tight">
            10k+ properties
          </span>
          <span className="font-body text-white/60 text-[13px] md:text-[14px] capitalize">
            And House Ready For Occupancy
          </span>
        </div>
      </div>
    </section>
  );
}

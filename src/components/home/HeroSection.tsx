import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[850px] flex flex-col justify-center overflow-hidden">
      {/* 1. Background Image & Fade Layer */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        {/* Exact gradient overlay: Heavy dark green/black on the left, fading cleanly before the house */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D130622]/95 via-[#333B2A3B]/70 to-transparent w-full md:w-[70%]"></div>
      </div>

      {/* 3. Main Hero Content (Structured exactly to match image wrapping) */}
      <div className="relative z-10 px-8 md:px-24 mt-12 w-full max-w-[850px]">
        {/* Huge Headline */}
        <h1 className="font-heading font-bold text-white text-[64px] md:text-[64px] leading-[1.05] mb-6 drop-shadow-md">
          Build, Invest & Grow with Us
        </h1>

        {/* Sub-headline */}
        <p className="font-body text-white/90 text-[20px] md:text-[18px] leading-[1.6] max-w-[700px] mb-12">
          Building homes, developing spaces, and growing land wealth all over
          Gujarat, with zero brokerage and full transparency
        </p>

        {/* CTA Button */}
        <button className="bg-[#52B7EC] text-white px-8 py-3 rounded-full font-heading font-semibold text-[14px] shadow-lg hover:brightness-110 transition-all">
          Get In Touch
        </button>
      </div>

      {/* 4. Bottom Stats Block (Anchored to bottom left) */}
      <div className="absolute bottom-10 left-10 md:left-16 lg:left-24 z-10 flex items-center gap-8 md:gap-12">
        {/* Stat 1 */}
        <div className="flex flex-col gap-1">
          <span className="font-heading font-bold text-white text-[20px] md:text-[22px] tracking-tight">50k+ renters</span>
          <span className="font-body text-white/60 text-[13px] md:text-[14px] capitalize">Believe In Our Service</span>
        </div>
        
        {/* Original line.svg from Figma */}
        <img 
          src="/line.svg" 
          alt="divider" 
          className="h-10 md:h-14 w-auto object-contain opacity-50" 
        />
        
        {/* Stat 2 */}
        <div className="flex flex-col gap-1">
          <span className="font-heading font-bold text-white text-[20px] md:text-[22px] tracking-tight">10k+ properties</span>
          <span className="font-body text-white/60 text-[13px] md:text-[14px] capitalize">And House Ready For Occupancy</span>
        </div>
      </div>
    </section>
  );
}

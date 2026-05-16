import Image from "next/image";

export default function AboutHero() {
  return (
      <section className="relative w-full h-[800px] flex flex-col items-center pt-[100px] lg:pt-[120px] text-center font-sans">

        {/* 1. Fixed height to h-[800px] to match your navbar transition trigger.
          2. Reduced pt (padding-top) to shift the text upwards.
        */}
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/about-hero.png" // Ensure this matches your image name in public/
          alt="Luxury modern villa at night"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* CONTENT BLOCK */}
      <div className="relative z-10 w-full max-w-[1400px] px-6 flex flex-col items-center">
        
        {/* MAIN HEADING */}
        <h1 className="text-white font-bold text-5xl md:text-[80px] lg:text-[108px] leading-none tracking-[-2px] mb-[30px]">
          Building Trust in Real Estate
        </h1>
        
        {/* SUBHEADING */}
        <p className="text-[rgba(255,255,255,0.92)] font-normal text-lg md:text-[20px] lg:text-[24px] leading-[1.5] max-w-[800px]">
          We simplify property buying through trust, transparency, and expertise.
        </p>

      </div>
    </section>
  );
}
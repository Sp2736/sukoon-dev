import Image from "next/image";
import { Instrument_Sans, Source_Sans_3 } from "next/font/google";

const instrument = Instrument_Sans({ subsets: ["latin"] });
const source = Source_Sans_3({ subsets: ["latin"] });

export default function AboutHero() {
  return (
    <section className="relative w-full h-[800px] flex flex-col items-center pt-[100px] lg:pt-[120px] text-center">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/about-hero.png"
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
        <h1 className="font-heading text-white font-bold text-5xl md:text-[58px] lg:text-[70px] leading-none tracking-[-1.5px] mb-[30px]">
          Building Trust in Real Estate
        </h1>

        {/* SUBHEADING */}
        <p className={`${source.className} text-[rgba(255,255,255,0.92)] font-normal text-lg md:text-[14px] lg:text-[18px] leading-[1.5] max-w-[800px]`}>
          We simplify property buying through trust, transparency, and
          expertise.
        </p>
      </div>
    </section>
  );
}

export default function AboutHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image - Add the dark building image here */}
      <img 
        src="/about-hero.png" 
        alt="Sukoon Developers" 
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Centered Text Content */}
      <div className="relative z-10 text-center px-6 mt-16">
        <h1 className="font-heading font-bold text-white text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] tracking-[-0.02em]">
          Building Dreams,<br />Creating Legacies
        </h1>
      </div>
    </section>
  );
}
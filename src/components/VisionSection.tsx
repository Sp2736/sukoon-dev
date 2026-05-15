export default function VisionSection() {
  return (
    <section className="w-full bg-white py-[40px] px-6 md:px-16 lg:px-[100px]">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-24">
        
        {/* Left Column: Heading */}
        <div className="w-full lg:w-[35%] shrink-0 flex flex-col">
          <h2 className="font-heading font-bold text-[36px] md:text-[48px] text-[#1F1F1F] leading-tight">
            Our Vision
          </h2>
        </div>

        {/* Right Column: Paragraph */}
        <div className="w-full lg:w-[65%] font-body text-[16px] md:text-[18px] text-[#1F1F1F]/80 leading-[1.7]">
          <p>
            To redefine the real estate experience by setting new benchmarks in quality, trust, and innovation. We envision a landscape where every property we touch becomes a landmark of prosperity, offering unparalleled value and peace of mind to our clients, while contributing to the sustainable growth of the communities we serve.
          </p>
        </div>

      </div>
    </section>
  );
}
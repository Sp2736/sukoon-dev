export default function MissionSection() {
  return (
    <section className="w-full bg-white py-[60px] px-6 md:px-16 lg:px-[100px]">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Column: Image */}
        <div className="w-full lg:w-1/2">
          <img 
            src="/about-mission.jpg" // Image with the house and pool
            alt="Our Mission" 
            className="w-full h-auto rounded-[24px] object-cover"
          />
        </div>

        {/* Right Column: Heading & Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="font-heading font-bold text-[36px] md:text-[48px] text-[#1F1F1F] leading-tight mb-6">
            Our Mission
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-[#1F1F1F]/80 leading-[1.7]">
            Our mission is to empower individuals and businesses by providing them with meticulously curated real estate opportunities. We are dedicated to delivering end-to-end solutions—from identifying prime locations to seamless execution—ensuring that every client's journey is marked by clarity, confidence, and exceptional success.
          </p>
        </div>

      </div>
    </section>
  );
}
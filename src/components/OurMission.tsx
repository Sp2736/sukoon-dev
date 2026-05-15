export default function OurMission() {
  return (
    <section className="relative w-full bg-white py-[80px] px-6 md:px-16 lg:px-[100px]">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
          {/* Drop the mission image into your public folder */}
          <img 
            src="/mission-img.jpg" 
            alt="Our Mission" 
            className="w-full h-auto rounded-[24px] object-cover shadow-sm"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h2 className="font-heading font-bold text-[32px] md:text-[44px] text-[#1F1F1F] leading-[1.15] mb-6">
            Our Mission
          </h2>
          <p className="font-body text-[16px] md:text-[18px] text-[#1F1F1F]/80 leading-[1.7]">
            To deliver exceptional real estate solutions by focusing on meticulous planning, superior craftsmanship, and timely execution. We strive to exceed our clients' expectations by fostering a culture of continuous improvement and integrity in everything we do.
          </p>
        </div>

      </div>
    </section>
  );
}
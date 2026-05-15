export default function WhyChooseUsSection() {
  return (
    <section className="w-full bg-white pt-[60px] pb-[120px] px-6 md:px-16 lg:px-[100px]">
      <div className="max-w-[1920px] mx-auto flex flex-col">
        
        {/* Section Top Heading */}
        <h2 className="font-heading font-bold text-[36px] md:text-[48px] text-[#1F1F1F] leading-tight mb-12">
          Why Choose Us?
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-[45%]">
            <img 
              src="/about-why-choose.jpg" // Glass office building image
              alt="Why Choose Us" 
              className="w-full h-auto rounded-[24px] object-cover"
            />
          </div>

          {/* Right Column: Numbered List */}
          <div className="w-full lg:w-[55%] flex flex-col gap-10">
            
            {/* Item 01 */}
            <div className="flex gap-6 items-start">
              <span className="font-heading text-[40px] md:text-[48px] font-normal text-[#52B7EC] leading-none shrink-0">01</span>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading font-bold text-[22px] text-[#1F1F1F]">Unwavering Trust & Transparency</h3>
                <p className="font-body text-[16px] text-[#1F1F1F]/70 leading-[1.6]">
                  We believe that trust is the cornerstone of every successful partnership. Our processes are designed to be completely transparent, ensuring you are informed and confident at every step of your investment journey.
                </p>
              </div>
            </div>

            {/* Item 02 */}
            <div className="flex gap-6 items-start">
              <span className="font-heading text-[40px] md:text-[48px] font-normal text-[#52B7EC] leading-none shrink-0">02</span>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading font-bold text-[22px] text-[#1F1F1F]">Deep Local Expertise</h3>
                <p className="font-body text-[16px] text-[#1F1F1F]/70 leading-[1.6]">
                  With roots firmly planted in Gujarat, our unparalleled understanding of the local market dynamics allows us to identify high-yield opportunities that align with your strategic goals.
                </p>
              </div>
            </div>

            {/* Item 03 */}
            <div className="flex gap-6 items-start">
              <span className="font-heading text-[40px] md:text-[48px] font-normal text-[#52B7EC] leading-none shrink-0">03</span>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading font-bold text-[22px] text-[#1F1F1F]">Client-Centric Approach</h3>
                <p className="font-body text-[16px] text-[#1F1F1F]/70 leading-[1.6]">
                  Your goals are our priority. We listen, understand, and tailor our services to meet your specific needs, providing personalized guidance to turn your real estate vision into reality.
                </p>
              </div>
            </div>

            {/* Item 04 */}
            <div className="flex gap-6 items-start">
              <span className="font-heading text-[40px] md:text-[48px] font-normal text-[#52B7EC] leading-none shrink-0">04</span>
              <div className="flex flex-col gap-2">
                <h3 className="font-heading font-bold text-[22px] text-[#1F1F1F]">End-to-End Solutions</h3>
                <p className="font-body text-[16px] text-[#1F1F1F]/70 leading-[1.6]">
                  From property selection and legal documentation to final acquisition and beyond, we offer comprehensive support to make your experience seamless, stress-free, and highly rewarding.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
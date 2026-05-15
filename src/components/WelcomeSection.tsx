export default function WelcomeSection() {
  return (
    <section className="w-full bg-white pt-[100px] pb-[40px] px-6 md:px-16 lg:px-[100px]">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-24">
        
        {/* Left Column: Stacked Heading */}
        <div className="w-full lg:w-[35%] shrink-0 flex flex-col">
          <span className="font-heading font-medium text-[24px] md:text-[32px] text-[#1F1F1F]/50 leading-tight">
            Welcome to
          </span>
          <span className="font-heading font-bold text-[36px] md:text-[48px] text-[#1F1F1F] leading-tight mt-1">
            Sukoon Developer
          </span>
        </div>

        {/* Right Column: Paragraphs */}
        <div className="w-full lg:w-[65%] flex flex-col gap-6 font-body text-[16px] md:text-[18px] text-[#1F1F1F]/80 leading-[1.7]">
          <p>
            Welcome to Sukoon Developer, your trusted partner in navigating the dynamic real estate landscape of Gujarat. With a profound commitment to excellence and a passion for creating spaces that inspire, we specialize in delivering premium residential, commercial, and agricultural properties tailored to your unique aspirations.
          </p>
          <p>
            Founded on the principles of integrity, transparency, and customer-centricity, we go beyond transactions to build lasting relationships. Our deep market expertise, combined with a meticulous approach to every project, ensures that your investment is secure, profitable, and aligned with your vision for the future.
          </p>
        </div>

      </div>
    </section>
  );
}
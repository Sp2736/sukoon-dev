import {
  BadgeDollarSign,
  MessageSquareText,
  ShieldCheck,
  Handshake,
} from "lucide-react";
import { Source_Sans_3 } from "next/font/google";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400"],
});

export default function WhyChooseUs() {
  const features = [
    {
      icon: (
        <img
          src="/icon-bag-of-money.png"
          alt="Money Bag"
          className="w-[28px] h-[28px]"
        />
      ),
      title: "Zero Brokerage, 100% Transparency",
      description:
        "We don't charge brokerage. Our focus is to help you find the right property with complete clarity and no hidden costs",
    },
    {
      icon: (
        <img
          src="/icon-consultation.png"
          alt="Consultation"
          className="w-[28px] h-[28px]"
        />
      ),
      title: "Expert Consultation You Can Trust",
      description:
        "Whether you're buying, selling, or investing, our team provides honest advice tailored to your goals",
    },
    {
      icon: (
        <img
          src="/icon-checkmark.png"
          alt="Verified"
          className="w-[28px] h-[28px]"
        />
      ),
      title: "Verified Properties Across Gujarat",
      description:
        "From residential to industrial and land investments, every listing is carefully verified for authenticity and value",
    },
    {
      icon: (
        <img
          src="/icon-support.png"
          alt="Support"
          className="w-[28px] h-[28px]"
        />
      ),
      title: "End-to-End Support",
      description:
        "From property selection to final deal closure, we guide you at every step to ensure a smooth experience",
    },
  ];

  return (
    <section className="w-full bg-[#FFFFFF] px-6 md:px-16 lg:px-[100px] pt-16 pb-20 lg:pt-[60px] lg:pb-[100px]">
      <div className="w-full max-w-[1720px] mx-auto">
        {/* Top Row: Heading and Sub-text */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 lg:mb-[80px] gap-4 lg:gap-0">
          {/* Left Heading */}
          <h2 className="font-heading font-bold text-[#1F1F1F] text-[28px] md:text-[32px] lg:text-[40px] leading-[1.2] max-w-[500px]">
            Why Choose Sukoon Developers
          </h2>

          {/* Right Sub-text (Fixed className syntax & hidden <br> on mobile) */}
          <p
            className={`${sourceSans.className} font-normal text-[#1F1F1F]/80 text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] lg:leading-[1.5] max-w-[450px]`}
          >
            Smart property decisions start with the right{" "}
            <br className="hidden lg:block" /> guidance
          </p>
        </div>

        {/* Bottom Row: 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-2 lg:gap-y-0 border-gray-200">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-start text-left 
                py-8 lg:py-0 
                /* Desktop Padding */
                lg:px-8 first:lg:pl-0 last:lg:pr-0 
                /* Borders: Clean bottom borders on mobile/tablet, right borders on desktop */
                border-b border-gray-100 lg:border-b-0 lg:border-r lg:border-gray-200 
                last:border-b-0 last:lg:border-r-0
              `}
            >
              {/* Icon Container */}
              <div className="w-[56px] h-[56px] lg:w-[64px] lg:h-[64px] rounded-full bg-[#52B7EC]/10 flex items-center justify-center mb-6 lg:mb-[32px] shrink-0">
                {feature.icon}
              </div>

              {/* Feature Title */}
              <h3 className="font-heading font-bold text-[#1F1F1F] text-[18px] lg:text-[20px] leading-[1.4] mb-3 lg:mb-[16px] max-w-[280px]">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="font-body font-normal text-[#1F1F1F]/60 text-[14px] lg:text-[12px] leading-[1.6] lg:leading-[1.7] max-w-[280px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

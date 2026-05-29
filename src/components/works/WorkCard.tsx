import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface WorkCardProps {
  id: string | number;
  image: string;
  title: string;
  location: string;
  type: "image" | "video";
  isVisible?: boolean;
  index?: number;
}

export default function WorkCard({
  id,
  image,
  title,
  location,
  type,
  isVisible = true,
  index = 0,
}: WorkCardProps) {
  const cardDelay = index * 150 + 150;
  const imageDelay = cardDelay + 150;
  const contentDelay = cardDelay + 300;

  return (
    <Link
      href={`/works/${id}`}
      style={{ transitionDelay: `${cardDelay}ms` }}
      className={`bg-[#D9F2FF]/50 border border-[#D9F2FF]/30 rounded-[20px] p-[16px] flex flex-col group hover:shadow-lg transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div
        style={{ transitionDelay: `${imageDelay}ms` }}
        className={`relative w-full h-[220px] md:h-[250px] xl:h-[270px] rounded-[12px] overflow-hidden mb-4 shrink-0 transition-all duration-700 ease-out transform ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {type === "video" && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-all group-hover:bg-black/40">
            <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
              <svg
                className="w-5 h-5 text-[#52B7EC] ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      <div
        style={{ transitionDelay: `${contentDelay}ms` }}
        className={`flex flex-col flex-grow px-1 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex items-center gap-1.5 text-[#919191] mb-1">
          <img
            src="/pin.webp"
            alt="location"
            className="w-[14px] h-[14px] md:w-[15px] md:h-[15px] object-contain shrink-0"
          />
          <span className="font-body text-[11px] md:text-[13px] leading-[1.6]">
            {location}
          </span>
        </div>

        <h3 className="font-heading font-semibold text-[15px] md:text-[18px] text-[#1F1F1F] leading-[1.4] mb-3 line-clamp-2">
          {title}
        </h3>

        <div className="flex justify-between items-center mt-auto pt-2">
          <span className="font-heading font-bold text-[14px] md:text-[16px] text-[#52B7EC] leading-none">
            {type === "video" ? "Video Walkthrough" : "Site Photo"}
          </span>

          <div className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] rounded-full bg-white flex justify-center items-center shrink-0 border border-[#D9F2FF] group-hover:bg-[#52B7EC] transition-colors duration-300">
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#52B7EC] group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </div>
    </Link>
  );
}

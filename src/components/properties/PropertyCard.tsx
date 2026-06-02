import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  details: string;
  price: string | number;
  category?: string;
  amenities?: string[];
  isVisible?: boolean;
  index?: number;
  isAdmin?: boolean;
}

export default function PropertyCard({
  id,
  image,
  title,
  location,
  details,
  price,
  category = "",
  amenities = [],
  isVisible = true,
  index = 0,
  isAdmin = false,
}: PropertyCardProps) {
  // Original animation delays
  const cardDelay = index * 150 + 150;
  const imageDelay = cardDelay + 150;
  const contentDelay = cardDelay + 300;

  const MANDATORY_AMENITIES = [
    {
      label: "Prime Location",
      icon: "/amenities-prime.png",
    },
    {
      label: "Schools Nearby",
      icon: "/amenities/school.png",
    },
    {
      label: "Hospitals Nearby",
      icon: "/amenities-hospital.png",
    },
  ];

  const isResidential = category === "Residential";

  return (
    <div
      style={{ transitionDelay: `${cardDelay}ms` }}
      className={`bg-[#D9F2FF]/50 border border-[#D9F2FF]/30 rounded-[20px] p-[16px] flex flex-col group hover:shadow-lg transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div
        style={{ transitionDelay: `${imageDelay}ms` }}
        className={`relative w-full h-[220px] md:h-[250px] xl:h-[270px] rounded-[10px] overflow-hidden shrink-0 mb-3 bg-white transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <img
          src={image || "/placeholder.jpg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {category && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#1F1F1F] shadow-sm">
            {category}
          </span>
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

        <h3 className="font-heading font-semibold text-[15px] md:text-[18px] text-[#1F1F1F] leading-[1.4] mb-1 line-clamp-1">
          {title}
        </h3>

        <p className="font-heading font-medium text-[14px] md:text-[12px] text-[#1F1F1F]/80 leading-[1.4] mb-4">
          ({details})
        </p>

        {/* Residential Amenities */}
        {isResidential && (
          <div className="flex flex-wrap gap-2 mb-4">
            {MANDATORY_AMENITIES.map((amenity, idx) => (
              <div
                key={`mandatory-${idx}`}
                className="flex items-center gap-1.5 bg-white/70 border border-[#D9F2FF] px-2.5 py-1 rounded-md"
              >
                <img
                  src={amenity.icon}
                  alt={amenity.label}
                  className="w-3.5 h-3.5 object-contain"
                />
                <span className="text-xs font-medium text-[#1F1F1F] whitespace-nowrap">
                  {amenity.label}
                </span>
              </div>
            ))}

            {amenities.slice(0, 2).map((amenity, idx) => (
              <div
                key={`admin-${idx}`}
                className="flex items-center gap-1.5 bg-white/70 border border-[#D9F2FF] px-2.5 py-1 rounded-md"
              >
                <div className="w-1.5 h-1.5 bg-sky-500 rounded-full shrink-0" />
                <span className="text-xs font-medium text-[#1F1F1F] whitespace-nowrap">
                  {amenity}
                </span>
              </div>
            ))}

            {amenities.length > 2 && (
              <div className="flex items-center px-2 py-1 text-xs font-medium text-[#919191]">
                +{amenities.length - 2} more
              </div>
            )}
          </div>
        )}

        <div className="flex justify-between items-center mt-auto pt-2">
          <span className="font-heading font-bold text-[16px] md:text-[18px] xl:text-[20px] text-[#1F1F1F] leading-[1.4]">
            {typeof price === "number"
              ? `₹${price.toLocaleString("en-IN")}`
              : price}
          </span>

          <Link
            href={isAdmin ? `/admin/properties/${id}` : `/properties/${id}`}
            className="flex items-center justify-center gap-1 text-black shrink-0 transition-all duration-300 hover:text-sky-700"
          >
            View Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

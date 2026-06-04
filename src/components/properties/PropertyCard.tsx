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

// Map dynamic amenity names to their respective icons
const AMENITY_ICONS: Record<string, string> = {
  "Prime Location": "/amenities-prime.png",
  "Schools Nearby": "/amenities-school.png",
  "Hospitals Nearby": "/amenities-hospital.png",
  "Gymnasium": "/amenities-gym.webp",
  "Swimming Pool": "/amenities-pool.webp",
  "Clubhouse": "/amenities-clubhouse.webp",
  "Children Park": "/amenities-park.webp",
  "Living Room": "/amenities-living.webp",
  "Power Backup": "/amenities-power.webp",
  "Dining Area": "/amenities-dining.webp",
  "Security": "/amenities-security.webp",
  "Parking": "/amenities-parking.webp",
  "Intercom": "/amenities-intercom.webp",
  "Maintenance Staff": "/amenities-staff.webp",
};

// Fallback icon for any newly added amenities that don't have a specific icon yet
const getAmenityIcon = (name: string) =>
  AMENITY_ICONS[name] || "/verified-check.webp";

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
  const cardDelay = index * 150 + 150;
  const imageDelay = cardDelay + 150;
  const contentDelay = cardDelay + 300;

  const MANDATORY_AMENITIES = [
    { label: "Prime Location", icon: "/amenities-prime.png" },
    { label: "Schools Nearby", icon: "/amenities-school.png" },
    { label: "Hospitals Nearby", icon: "/amenities-hospital.png" },
  ];

  const isResidential = category === "Residential";

  return (
    <div
      style={{ transitionDelay: isVisible ? `${cardDelay}ms` : "0ms" }}
      className={`bg-[#D9F2FF]/50 border border-[#D9F2FF]/30 rounded-[20px] p-[16px] flex flex-col group hover:shadow-lg transition-all duration-700 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div
        style={{ transitionDelay: isVisible ? `${imageDelay}ms` : "0ms" }}
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
        style={{ transitionDelay: isVisible ? `${contentDelay}ms` : "0ms" }}
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

        {/* Residential Amenities - Icon Only Layout */}
        {isResidential && (
          <div className="flex flex-wrap gap-2.5 mb-4">
            {/* Mandatory Icons */}
            {MANDATORY_AMENITIES.map((amenity, idx) => (
              <div
                key={`mandatory-${idx}`}
                // 'group/tooltip' allows us to hover this div and show the child tooltip
                className="relative group/tooltip flex items-center justify-center w-[36px] h-[36px] md:w-[40px] md:h-[40px] border border-[#D9F2FF] rounded-[8px] hover:bg-white hover:shadow-sm hover:border-[#52B7EC]/50 transition-all cursor-pointer"
              >
                <img
                  src={amenity.icon}
                  alt={amenity.label}
                  className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] object-contain opacity-80 group-hover/tooltip:opacity-100 transition-opacity"
                />

                {/* CSS Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-[#1F1F1F] text-white text-[11px] font-medium rounded-[5px] opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 shadow-lg translate-y-1 group-hover/tooltip:translate-y-0">
                  {amenity.label}
                  {/* Tooltip Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[#1F1F1F]" />
                </div>
              </div>
            ))}

            {/* Dynamic Added Amenities */}
            {/* We can show more now (e.g., 4) since icons take up less space! */}
            {amenities.slice(0, 4).map((amenity, idx) => (
              <div
                key={`admin-${idx}`}
                className="relative group/tooltip flex items-center justify-center w-[36px] h-[36px] md:w-[40px] md:h-[40px] border border-[#D9F2FF] rounded-[8px] hover:bg-white hover:shadow-sm hover:border-[#52B7EC]/50 transition-all cursor-pointer"
              >
                <img
                  src={getAmenityIcon(amenity)}
                  alt={amenity}
                  className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] object-contain opacity-70 group-hover/tooltip:opacity-100 transition-opacity"
                />

                {/* CSS Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-[#1F1F1F] text-white text-[11px] font-medium rounded-[5px] opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 shadow-lg translate-y-1 group-hover/tooltip:translate-y-0">
                  {amenity}
                  {/* Tooltip Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[#1F1F1F]" />
                </div>
              </div>
            ))}

            {/* Overflow Counter */}
            {amenities.length > 4 && (
              <div className="flex items-center justify-center w-[36px] h-[36px] md:w-[40px] md:h-[40px] bg-[#D9F2FF]/40 border border-[#D9F2FF] rounded-[8px] text-[12px] font-bold text-[#52B7EC]">
                +{amenities.length - 4}
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
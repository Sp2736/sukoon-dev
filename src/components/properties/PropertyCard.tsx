import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

interface PropertyCardProps {
  id: string; // We added the ID prop for routing
  // category: string;
  image: string;
  title: string;
  location: string;
  details: string;
  price: string;
}

export default function PropertyCard({
  id,
  image,
  title,
  location,
  details,
  price,
}: PropertyCardProps) {
  return (
    <div className="bg-[#D9F2FF]/50 border border-[#D9F2FF]/30 rounded-[20px] p-[16px] flex flex-col group hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-[220px] md:h-[250px] xl:h-[270px] rounded-[10px] overflow-hidden shrink-0 mb-3 bg-white">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-grow px-1">
        <div className="flex items-center gap-1.5 text-[#919191] mb-1">
          <img
            src="/pin.png"
            alt="location"
            className="w-[14px] h-[14px] md:w-[15px] md:h-[15px] object-contain shrink-0"
          />

          <span className="font-body text-[11px] md:text-[13px] leading-[1.6]">
            {location}
          </span>
        </div>

        <h3 className="font-heading font-semibold text-[15px] md:text-[18px] text-[#1F1F1F] leading-[1.4] mb-1">
          {title}
        </h3>

        <p className="font-heading font-medium text-[14px] md:text-[12px] text-[#1F1F1F]/80 leading-[1.4] mb-4">
          ({details})
        </p>

        <div className="flex justify-between items-center mt-auto pt-2">
          <span className="font-heading font-bold text-[16px] md:text-[18px] xl:text-[20px] text-[#1F1F1F] leading-[1.4]">
            {price}
          </span>

          {/* Swapped <button> for Next.js <Link> pointing to the dynamic route */}
          <Link
            href={`/properties/${id}`}
            className="flex items-center gap-1.5 font-heading font-medium text-[11px] md:text-[13px] text-[#1F1F1F] hover:text-[#52B7EC] transition-colors"
          >
            View Details
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

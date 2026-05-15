import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

interface PropertyCardProps {
  id: string; // We added the ID prop for routing
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
    <div className="bg-[#D9F2FF]/50 border border-[#D9F2FF]/30 rounded-[20px] p-[24px] flex flex-col group hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="relative w-full h-[280px] md:h-[300px] rounded-[10px] overflow-hidden shrink-0 mb-3 bg-white">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-grow px-1">
        <div className="flex items-center gap-1.5 text-[#919191] mb-1">
          <MapPin size={18} color="#52B7EC" className="shrink-0" />
          <span className="font-body text-[14px] md:text-[15px] leading-[1.6]">
            {location}
          </span>
        </div>

        <h3 className="font-heading font-semibold text-[20px] md:text-[22px] text-[#1F1F1F] leading-[1.4] mb-1">
          {title}
        </h3>

        <p className="font-heading font-medium text-[14px] md:text-[15px] text-[#1F1F1F]/80 leading-[1.4] mb-4">
          ({details})
        </p>

        <div className="flex justify-between items-center mt-auto pt-2">
          <span className="font-heading font-bold text-[22px] md:text-[24px] text-[#1F1F1F] leading-[1.4]">
            {price}
          </span>

          {/* Swapped <button> for Next.js <Link> pointing to the dynamic route */}
          <Link
            href={`/properties/${id}`}
            className="flex items-center gap-1.5 font-heading font-medium text-[15px] md:text-[16px] text-[#1F1F1F] hover:text-[#52B7EC] transition-colors"
          >
            View Details
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

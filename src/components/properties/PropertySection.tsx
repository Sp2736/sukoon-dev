import PropertyCard from "./PropertyCard";
import { ArrowRight } from "lucide-react";

interface PropertyItem {
  id: string;
  image: string;
  title: string;
  location: string;
  details: string;
  price: string;
}

interface PropertySectionProps {
  title: string;
  properties: PropertyItem[];
  isAlternateBg?: boolean;
}

export default function PropertySection({
  title,
  properties,
  isAlternateBg = false,
}: PropertySectionProps) {
  return (
    <section
      className={`w-full py-[40px] md:py-[50px] px-5 md:px-8 lg:px-[48px] xl:px-[64px] ${isAlternateBg ? "bg-[#F9FAFB]" : "bg-white"}`}
    >
      <div className="w-full flex flex-col">
        {" "}
        {/* TOP ROW: Heading Left, Link Right */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="font-heading font-bold text-[32px] md:text-[40px] text-[#1F1F1F] leading-tight">
            {title}
          </h2>

          <a
            href="#"
            className="font-heading font-semibold text-[15px] md:text-[16px] text-[#52B7EC] hover:text-[#3da0d6] flex items-center underline gap-1.5 transition-colors group shrink-0"
          >
            View All
          </a>
        </div>
        {/* BOTTOM ROW: The 3 Card Grid (Increased gap to handle larger cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {" "}
          {properties.map((prop, index) => (
            <PropertyCard
              key={index}
              id={prop.id}
              image={prop.image}
              title={prop.title}
              location={prop.location}
              details={prop.details}
              price={prop.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

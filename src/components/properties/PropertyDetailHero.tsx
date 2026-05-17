import {
  Building,
  Maximize,
  MapPin,
  Tags,
  BedSingle,
  ArrowLeft,
  ArrowRight,
  Dumbbell,
  Waves,
  Armchair,
  Zap,
  Utensils,
} from "lucide-react";

interface PropertyDetailHeroProps {
  title: string;
  propertyType: string;
  area: string;
  location: string;
  price: string;
  bhk: string;
  images: string[];
}

export default function PropertyDetailHero({
  title,
  propertyType,
  area,
  location,
  price,
  bhk,
  images,
}: PropertyDetailHeroProps) {
  return (
    <section className="w-full bg-white px-6 md:px-16 lg:px-[100px] pb-[80px]">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* LEFT COLUMN: Image Gallery (Approx 55% width) */}
        <div className="w-full lg:w-[55%] flex flex-col gap-4">
          {/* Main Giant Image */}
          <div className="w-full h-[400px] md:h-[500px] lg:h-[550px] rounded-[24px] overflow-hidden">
            <img
              src={images[0]}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom Thumbnails & Controls */}
          <div className="flex items-center gap-3 md:gap-4 w-full h-[100px] md:h-[120px]">
            {/* Left Arrow */}
            <button className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] shrink-0 rounded-full border border-gray-200 flex items-center justify-center text-[#1F1F1F] hover:bg-gray-50 transition-colors">
              <ArrowLeft size={20} />
            </button>

            {/* 3 Thumbnails filling the space */}
            <div className="flex-1 flex gap-3 md:gap-4 h-full">
              <img
                src={images[1] || images[0]}
                alt="Thumbnail 1"
                className="w-1/3 h-full object-cover rounded-[16px]"
              />
              <img
                src={images[2] || images[0]}
                alt="Thumbnail 2"
                className="w-1/3 h-full object-cover rounded-[16px]"
              />
              <img
                src={images[3] || images[0]}
                alt="Thumbnail 3"
                className="w-1/3 h-full object-cover rounded-[16px]"
              />
            </div>

            {/* Right Arrow */}
            <button className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] shrink-0 rounded-full bg-[#D9F2FF] flex items-center justify-center text-[#52B7EC] hover:brightness-95 transition-all">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Property Details Card (Approx 45% width) */}
        <div className="w-full lg:w-[45%] bg-[#F4FAFD] border border-[#D9F2FF]/50 rounded-[24px] p-8 md:p-10 flex flex-col h-fit">
          <h1 className="font-heading font-bold text-[36px] md:text-[42px] text-[#1F1F1F] leading-tight mb-8">
            {title}
          </h1>

          <div className="flex flex-col w-full">
            {/* Row 1: Property Type */}
            <div className="flex justify-between items-center py-4 border-b border-[#D9F2FF]">
              <div className="flex items-center gap-3 text-[#919191]">
                <Building size={20} strokeWidth={1.5} />
                <span className="font-body text-[16px]">Property Type :</span>
              </div>
              <span className="font-heading font-medium text-[18px] text-[#1F1F1F]">
                {propertyType}
              </span>
            </div>

            {/* Row 2: Area */}
            <div className="flex justify-between items-center py-4 border-b border-[#D9F2FF]">
              <div className="flex items-center gap-3 text-[#919191]">
                <Maximize size={20} strokeWidth={1.5} />
                <span className="font-body text-[16px]">Area (sq ft) :</span>
              </div>
              <span className="font-heading font-medium text-[18px] text-[#1F1F1F]">
                {area}
              </span>
            </div>

            {/* Row 3: Location */}
            <div className="flex justify-between items-center py-4 border-b border-[#D9F2FF]">
              <div className="flex items-center gap-3 text-[#919191]">
                <MapPin size={20} strokeWidth={1.5} />
                <span className="font-body text-[16px]">Location :</span>
              </div>
              <span className="font-heading font-medium text-[18px] text-[#1F1F1F]">
                {location}
              </span>
            </div>

            {/* Row 4: Expected Price */}
            <div className="flex justify-between items-center py-4 border-b border-[#D9F2FF]">
              <div className="flex items-center gap-3 text-[#919191]">
                <Tags size={20} strokeWidth={1.5} />
                <span className="font-body text-[16px]">Expected Price :</span>
              </div>
              <span className="font-heading font-medium text-[18px] text-[#1F1F1F]">
                {price}
              </span>
            </div>

            {/* Row 5: BHK Type */}
            <div className="flex justify-between items-center py-4 border-b border-[#D9F2FF]">
              <div className="flex items-center gap-3 text-[#919191]">
                <BedSingle size={20} strokeWidth={1.5} />
                <span className="font-body text-[16px]">BHK Type :</span>
              </div>
              <span className="font-heading font-medium text-[18px] text-[#1F1F1F]">
                {bhk}
              </span>
            </div>
          </div>

          {/* Project Amenities */}
          <div className="mt-8">
            <h3 className="font-heading font-bold text-[18px] text-[#1F1F1F] mb-6">
              Project Amenities :
            </h3>

            <div className="flex justify-between items-center w-full">
              {/* Icon 1 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-[50px] h-[50px] rounded-full border border-[#919191]/50 flex items-center justify-center text-[#919191]">
                  <Dumbbell size={20} strokeWidth={1.5} />
                </div>
                <span className="font-body text-[12px] font-medium text-[#1F1F1F]">
                  Gymnasium
                </span>
              </div>
              {/* Icon 2 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-[50px] h-[50px] rounded-full border border-[#919191]/50 flex items-center justify-center text-[#919191]">
                  <Waves size={20} strokeWidth={1.5} />
                </div>
                <span className="font-body text-[12px] font-medium text-[#1F1F1F]">
                  Swimming Pool
                </span>
              </div>
              {/* Icon 3 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-[50px] h-[50px] rounded-full border border-[#919191]/50 flex items-center justify-center text-[#919191]">
                  <Armchair size={20} strokeWidth={1.5} />
                </div>
                <span className="font-body text-[12px] font-medium text-[#1F1F1F]">
                  Living Room
                </span>
              </div>
              {/* Icon 4 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-[50px] h-[50px] rounded-full border border-[#919191]/50 flex items-center justify-center text-[#919191]">
                  <Zap size={20} strokeWidth={1.5} />
                </div>
                <span className="font-body text-[12px] font-medium text-[#1F1F1F]">
                  Power Backup
                </span>
              </div>
              {/* Icon 5 */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-[50px] h-[50px] rounded-full border border-[#919191]/50 flex items-center justify-center text-[#919191]">
                  <Utensils size={20} strokeWidth={1.5} />
                </div>
                <span className="font-body text-[12px] font-medium text-[#1F1F1F]">
                  Dining Area
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

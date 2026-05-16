const categories = [
  { title: "Residential", image: "/residential.png" },
  { title: "Commercial", image: "/commercial.png" },
  { title: "Industrial", image: "/industrial.png" },
  { title: "Open Land – Agricultural", image: "/agri-land.png" },
  { title: "Open Land – Non Agricultural", image: "/non-agri-land.png" },
];

export default function InvestmentCategories() {
  return (
    <section className="relative w-full bg-[#FFFFFF] flex flex-col items-center py-[60px] lg:py-[100px] overflow-hidden">
      
      {/* Heading: Scaled down slightly for laptops, reaches full 50px on large monitors */}
      <h2 className="font-heading font-bold text-[#1F1F1F] text-[26px] md:text-[34px] lg:text-[40px] leading-[1.1] text-center mb-[16px] lg:mb-[20px] px-4">
        What Are You Investing In?
      </h2>

      {/* Subheading: Scaled down proportionally to match the overall reduced size */}
      <p className="font-body font-normal text-[#1F1F1F] text-[12px] md:text-[12px] lg:text-[18px] leading-[1.6] text-center w-full max-w-[725px] px-4 mb-[40px] lg:mb-[80px]">
        From premium residential developments to high-return land <br/>investments two trusted names, one vision of excellence in Gujarat.
      </p>

      {/* Cards Grid: 
          Uses grid-cols-5 on large screens. This forces the 5 cards to evenly share 
          the screen width rather than overflowing off the side. 
          Max width is capped at 1720px to match Figma's exact spacing.
      */}
      <div className="w-full max-w-[1720px] px-6 md:px-12 lg:px-[100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[16px] lg:gap-[20px]">
        {categories.map((cat, index) => (
          /* Card: aspect-[328/362] guarantees the exact Figma shape no matter the screen size */
          <div 
            key={index} 
            className="relative w-full aspect-[328/362] rounded-[16px] lg:rounded-[20px] overflow-hidden"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${cat.image}')` }}
            />
            
            {/* Exact Figma Gradient Overlay (No generic Tailwind gradients) */}
            <div 
              className="absolute inset-0" 
              style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 77.07%, #000000 100%)' }}
            />
            
            {/* Card Title: Text scales down slightly to fit the reduced card width perfectly */}
            <h3 className="absolute bottom-[12px] lg:bottom-[16px] left-0 w-full text-center font-heading font-semibold text-[12px] lg:text-[15px] leading-[1.5] text-[#FFFFFF] px-2">
              {cat.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
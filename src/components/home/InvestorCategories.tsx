const categories = [
  { title: "Residential", image: "/residential.png" },
  { title: "Commercial", image: "/commercial.png" },
  { title: "Industrial", image: "/industrial.png" },
  { title: "Open Land – Agricultural", image: "/agri-land.png" },
  { title: "Open Land – Non Agricultural", image: "/non-agri-land.png" },
];

export default function InvestmentCategories() {
  return (
    <section className="relative w-full bg-[#FFFFFF] flex flex-col items-center py-16 lg:py-[100px] overflow-hidden">
      {/* Heading */}
      <h2 className="font-heading font-bold text-[#1F1F1F] text-[28px] md:text-[34px] lg:text-[40px] leading-[1.2] lg:leading-[1.1] text-center mb-4 lg:mb-[20px] px-6">
        What Are You Investing In?
      </h2>

      {/* Subheading: Increased mobile font size for readability, hidden <br> on mobile */}
      <p className="font-body font-normal text-[#1F1F1F] text-[14px] md:text-[16px] lg:text-[18px] leading-[1.6] text-center w-full max-w-[725px] px-6 mb-10 lg:mb-[80px]">
        From premium residential developments to high-return land{" "}
        <br className="hidden lg:block" />
        investments two trusted names, one vision of excellence in Gujarat.
      </p>

      {/* Cards Grid: 
          Mobile: 2 columns (cleaner than 1 huge column)
          Tablet: 3 columns
          Desktop: 5 columns
      */}
      <div className="w-full max-w-[1720px] px-6 md:px-12 lg:px-[100px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-[20px]">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="relative w-full aspect-[328/362] rounded-[16px] lg:rounded-[20px] overflow-hidden shadow-sm"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
              style={{ backgroundImage: `url('${cat.image}')` }}
            />

            {/* Exact Figma Gradient Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, #000000 100%)",
              }}
            />

            {/* Card Title: Bumped mobile font size slightly */}
            <h3 className="absolute bottom-[12px] lg:bottom-[16px] left-0 w-full text-center font-heading font-semibold text-[14px] lg:text-[15px] leading-[1.4] lg:leading-[1.5] text-[#FFFFFF] px-2 z-10">
              {cat.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

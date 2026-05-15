import PropertyDetailHero from "@/src/components/properties/PropertyDetailHero";
import PropertySection from "@/src/components/properties/PropertySection";
// Navbar and Footer are automatically applied by layout.tsx

// --- MOCK DATA --- 
// Exactly matching your Figma text
const propertyDetails = {
  title: "Green Valley Home",
  propertyType: "Residential",
  area: "1,850 sq ft",
  location: "Vadodara",
  price: "₹85 L",
  bhk: "3BHK",
  images: [
    "/plot-1-1.png", // Main large image
    "/plot-1-2.png", // Thumbnail 1
    "/plot-1-3.png", // Thumbnail 2
    "/plot-2-1.png"  // Thumbnail 3
  ]
};

// Data for the "Related Property" section at the bottom
const relatedProperties = [
  { image: "/plot-1-1.png", title: "Green Valley Home", location: "Deepali nagar, Vadodara", details: "2, 3 BHK", price: "₹45.6 L - 69.7 L" },
  { image: "/plot-1-2.png", title: "Skyline Residency", location: "Deepali nagar, Vadodara", details: "2, 3 BHK", price: "₹45.6 L - 69.7 L" },
  { image: "/plot-1-3.png", title: "Urban Bliss Apartments", location: "Deepali nagar, Vadodara", details: "2, 3 BHK", price: "₹45.6 L - 69.7 L" },
];

export default function PropertyDetailsPage() {
  return (
    // pt-[140px] guarantees the layout clears the solid white navbar
    <main className="w-full bg-white flex flex-col min-h-screen pt-[140px]">
      
      {/* 1. The Exact Figma Hero Section */}
      <PropertyDetailHero 
        title={propertyDetails.title}
        propertyType={propertyDetails.propertyType}
        area={propertyDetails.area}
        location={propertyDetails.location}
        price={propertyDetails.price}
        bhk={propertyDetails.bhk}
        images={propertyDetails.images}
      />

      {/* 2. Related Property Section (Reusing your existing component) */}
      <PropertySection 
        title="Related Property"
        properties={relatedProperties}
        isAlternateBg={false} // Keeps the background white as shown in the design
      />
      
    </main>
  );
}
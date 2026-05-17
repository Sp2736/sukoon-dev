import PropertySection from "@/src/components/properties/PropertySection";

const propertyData = [
  {
    title: "Residential",
    properties: [
      {
        id:"res-1",
        image: "/plot-1-1.png",
        title: "Green Valley Home",
        location: "Deepali nagar, Vadodara",
        details: "2, 3 BHK",
        price: "₹45.6 L - 69.7 L",
      },
      {
        id:"res-2",
        image: "/plot-1-2.png",
        title: "Luxury Villas in Alkapuri",
        location: "Alkapuri, Vadodara",
        details: "4 BHK",
        price: "₹ 3.5 Cr Onwards",
      },
      {
        id:"res-3",
        image: "/plot-1-3.png",
        title: "Premium Apartments",
        location: "Gotri, Vadodara",
        details: "3 BHK",
        price: "₹ 85 Lacs Onwards",
      },
    ],
  },
  {
    title: "Commercial",
    properties: [
      {
        id:"comm-1",
        image: "/plot-2-1.png",
        title: "Lotus Business Hub",
        location: "RC Dutt Road, Vadodara",
        details: "Office Space",
        price: "₹ 1.2 Cr Onwards",
      },
      {
        id:"comm-2",
        image: "/plot-2-2.png",
        title: "Retail Spaces in Veda",
        location: "Vasna Road, Vadodara",
        details: "Retail",
        price: "₹ 90 Lacs Onwards",
      },
      {
        id:"comm-3",
        image: "/plot-2-3.png",
        title: "Corporate IT Park",
        location: "Sayajigunj, Vadodara",
        details: "Office Space",
        price: "₹ 5.5 Cr Onwards",
      },
    ],
  },
  {
    title: "Industrial",
    properties: [
      {
        id:"ind-1",
        image: "/plot-3-1.png",
        title: "Makarpura Industrial Shed",
        location: "Makarpura GIDC, Vadodara",
        details: "Shed",
        price: "₹ 4.5 Cr Onwards",
      },
      {
        id:"ind-2",
        image: "/plot-3-2.png",
        title: "Logistics Warehouse",
        location: "Halol Highway, Vadodara",
        details: "Warehouse",
        price: "₹ 8.0 Cr Onwards",
      },
      {
        id:"ind-3",
        image: "/plot-3-3.png",
        title: "Savli Industrial Plot",
        location: "Savli GIDC, Vadodara",
        details: "Plot",
        price: "₹ 12.0 Cr Onwards",
      },
    ],
  },
  {
    title: "Agricultural Land",
    properties: [
      {
        id:"agri-1",
        image: "/plot-4-1.png",
        title: "Prime Farm Land",
        location: "Dabhoi, Gujarat",
        details: "10 Vigha",
        price: "₹ 25 Lacs / Vigha",
      },
      {
        id:"agri-2",
        image: "/plot-4-2.png",
        title: "Fertile Land Near Karjan",
        location: "Karjan, Gujarat",
        details: "25 Vigha",
        price: "₹ 18 Lacs / Vigha",
      },
      {
        id:"agri-3",
        image: "/plot-4-3.png",
        title: "Agricultural Plot",
        location: "Padra, Gujarat",
        details: "15 Vigha",
        price: "₹ 22 Lacs / Vigha",
      },
    ],
  },
  {
    title: "Non-Agricultural Land",
    properties: [
      {
        id:"non-agro-1",
        image: "/plot-5-1.png",
        title: "Residential N.A. Plot",
        location: "Sevasi, Vadodara",
        details: "5000 Sq.Ft.",
        price: "₹ 1.5 Cr Onwards",
      },
      {
        id:"non-agro-2",
        image: "/plot-5-2.png",
        title: "Commercial N.A. Land",
        location: "Waghodia Road, Vadodara",
        details: "15,000 Sq.Ft.",
        price: "₹ 4.5 Cr Onwards",
      },
      {
        id:"non-agro-3",
        image: "/plot-5-3.png",
        title: "Mixed-Use N.A. Parcel",
        location: "Ajwa Road, Vadodara",
        details: "20,000 Sq.Ft.",
        price: "₹ 5.0 Cr Onwards",
      },
    ],
  },
];

export default function PropertiesPage() {
  return (
    // pt-[90px] perfectly offsets your solid white navbar so there is no huge dead space!
    <main className="w-full bg-white flex flex-col min-h-screen pt-[90px]">
      {propertyData.map((section, index) => (
        <PropertySection
          key={index}
          title={section.title}
          properties={section.properties}
          isAlternateBg={index % 2 !== 0}
        />
      ))}
    </main>
  );
}

import PropertySection from "@/src/components/properties/PropertySection";

// Next.js config to revalidate the page every 60 seconds
export const revalidate = 60;

interface ApiProperty {
  public_id: string;
  cover_image: string;
  title: string;
  city: string;
  configuration: string;
  price: number;
  category: string;
}

async function fetchProperties() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiKey = process.env.SUKOON_API_KEY;

  try {
    // Fetching with a high limit to get all properties for grouping
    const res = await fetch(`${apiUrl}/api/properties?limit=100`, {
      headers: {
        // Adjust this header key based on what validateApiKey() expects in your backend
        Authorization: `Bearer ${apiKey}`,
        "x-api-key": apiKey || "",
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error("Failed to fetch properties");

    const json = await res.json();
    return (json.data || []) as ApiProperty[];
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
}

export default async function PropertiesPage() {
  const properties = await fetchProperties();

  // Your predefined categories, now including Industrial
  const categories = [
    "Residential",
    "Commercial",
    "Industrial",
    "Agricultural Land",
    "Non-agricultural Land",
  ];

  // Group the flat API data into sections
  const groupedData = categories.map((category) => {
    return {
      title: category,
      properties: properties
        .filter((p) => p.category === category)
        .map((p) => ({
          id: p.public_id, // Important: Passes the dynamic ID to the card
          image: p.cover_image || "/sukoon-col.png", // Fallback image
          title: p.title,
          location: p.city || "Gujarat",
          details: p.configuration || "Details on request",
          price: p.price
            ? `₹ ${p.price.toLocaleString("en-IN")}`
            : "Price on Request",
        })),
    };
  });

  return (
    <main className="w-full bg-white flex flex-col min-h-screen pt-[90px]">
      {groupedData.map((section, index) => {
        // Only render the section if it actually has properties
        if (section.properties.length === 0) return null;

        return (
          <PropertySection
            key={index}
            title={section.title}
            properties={section.properties}
            isAlternateBg={index % 2 !== 0}
          />
        );
      })}

      {/* Fallback if database is empty or API is unreachable */}
      {properties.length === 0 && (
        <div className="flex items-center justify-center min-h-[50vh]">
          <p className="text-gray-500 font-medium text-lg">
            No properties found at the moment.
          </p>
        </div>
      )}
    </main>
  );
}

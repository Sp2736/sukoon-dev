import { notFound } from "next/navigation";
import PropertyDetailHero from "@/src/components/properties/PropertyDetailHero";
import PropertySection from "@/src/components/properties/PropertySection";

// Next.js config to revalidate the page cache every 60 seconds
export const revalidate = 60;

// --- Types ---
interface SinglePropertyData {
  public_id: string;
  title: string;
  category: string;
  city: string;
  price: number;
  configuration: string;
  area?: string; // Optional, assuming you might add this to your DB
  description?: string;
  cover_image: string;
  images: string[];
}

// --- Fetch Functions ---
async function fetchSingleProperty(
  publicId: string,
): Promise<SinglePropertyData | null> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiKey = process.env.SUKOON_API_KEY;

  try {
    const res = await fetch(`${apiUrl}/api/properties/${publicId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "x-api-key": apiKey || "",
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error("Failed to fetch property details");
    }

    const json = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching single property:", error);
    return null;
  }
}

async function fetchRelatedProperties(category: string, excludeId: string) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiKey = process.env.SUKOON_API_KEY;

  try {
    // 1. We now pass exclude_id to the API, and strictly limit the response to 3 items
    const res = await fetch(
      `${apiUrl}/api/properties?category=${encodeURIComponent(category)}&exclude_id=${excludeId}&limit=3`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "x-api-key": apiKey || "",
        },
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) return [];

    const json = await res.json();
    const data: SinglePropertyData[] = json.data || [];

    // 2. We no longer need to filter or slice on the frontend! Just map it to the UI components.
    return data.map((p) => ({
      id: p.public_id,
      image: p.cover_image || "/sukoon-col.webp",
      title: p.title,
      location: p.city || "Gujarat",
      details: p.configuration || "Details on request",
      price: p.price
        ? `₹ ${p.price.toLocaleString("en-IN")}`
        : "Price on Request",
    }));
  } catch (error) {
    console.error("Error fetching related properties:", error);
    return [];
  }
}

// --- Page Component ---
export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Resolve the dynamic route parameter
  const resolvedParams = await params;
  const propertyId = resolvedParams.id;

  // 1. Fetch the main property data
  const property = await fetchSingleProperty(propertyId);

  // Trigger Next.js 404 page if property doesn't exist
  if (!property) {
    notFound();
  }

  // 2. Fetch related properties based on the category of the main property
  const relatedProperties = await fetchRelatedProperties(
    property.category,
    propertyId,
  );

  // 3. Ensure we have an array of images for the hero component
  const displayImages =
    property.images && property.images.length > 0
      ? property.images
      : [property.cover_image || "/sukoon-col.webp"];

  return (
    // pt-[140px] guarantees the layout clears the solid white navbar
    <main className="w-full bg-white flex flex-col min-h-screen pt-[140px]">
      {/* 1. Dynamic Hero Section */}
      <PropertyDetailHero
        title={property.title}
        propertyType={property.category}
        area={property.area || "Area details upon request"} // Fallback if area isn't a column in your DB yet
        location={property.city}
        price={
          property.price
            ? `₹ ${property.price.toLocaleString("en-IN")}`
            : "Price on request"
        }
        bhk={property.configuration || "Configuration upon request"}
        images={displayImages}
      />

      {/* 2. Related Property Section */}
      {/* Only render if there are actually related properties to show */}
      {relatedProperties.length > 0 && (
        <PropertySection
          title="Related Property"
          properties={relatedProperties}
          isAlternateBg={false} // Keeps the background white as shown in the design
        />
      )}
    </main>
  );
}

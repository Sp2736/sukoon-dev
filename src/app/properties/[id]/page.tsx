import { notFound } from "next/navigation";
import PropertyDetailHero from "@/src/components/properties/PropertyDetailHero";
import PropertySection from "@/src/components/properties/PropertySection";
import AnimatedBackground from "@/src/components/ui/AnimatedBackground";

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
  area?: string; 
  description?: string;
  cover_image: string;
  images: string[];
  amenities?: string[];
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

    return data.map((p) => ({
      id: p.public_id,
      image: p.cover_image || "/sukoon-col.webp",
      title: p.title,
      location: p.city || "Gujarat",
      details: p.configuration || "Details on request",
      category: p.category, 
      amenities: p.amenities, 
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
  const resolvedParams = await params;
  const propertyId = resolvedParams.id;

  const property = await fetchSingleProperty(propertyId);

  if (!property) {
    notFound();
  }

  const relatedProperties = await fetchRelatedProperties(
    property.category,
    propertyId,
  );

  const displayImages =
    property.images && property.images.length > 0
      ? property.images
      : [property.cover_image || "/sukoon-col.webp"];

  return (
    <main className="w-full relative flex flex-col min-h-screen pt-[140px]">
      <AnimatedBackground />
      
      {/* 1. Dynamic Hero Section */}
      <PropertyDetailHero
        title={property.title}
        propertyType={property.category}
        area={property.area || "Area details upon request"} 
        location={property.city}
        price={
          property.price
            ? `₹ ${property.price.toLocaleString("en-IN")}`
            : "Price on request"
        }
        bhk={property.configuration || "Configuration upon request"}
        images={displayImages}
        amenities={property.amenities}
      />

      {/* 2. Related Property Section */}
      {relatedProperties.length > 0 && (
        <PropertySection
          title="Related Property"
          properties={relatedProperties}
          isAlternateBg={false} 
        />
      )}
    </main>
  );
}
import type { Metadata } from "next";
import WorksSection from "@/src/components/works/WorksSection";

// Revalidate the page every 60 seconds (ISR)
export const revalidate = 60;

export const metadata: Metadata = {
  title: "Our Works | Sukoon Developer",
  description:
    "Explore our ongoing construction sites, structural developments, and completed projects.",
};

interface MediaItem {
  url: string;
  type: "image" | "video";
}

interface ApiWork {
  public_id?: string;
  id?: string;
  title: string;
  location: string;
  status?: string;
  category?: string;
  media: MediaItem[];
}

async function fetchWorks() {
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ||
    process.env.API_URL ||
    "http://127.0.0.1:3000";
  const apiKey = process.env.SUKOON_API_KEY;

  try {
    const res = await fetch(`${apiUrl}/api/works?limit=100`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "x-api-key": apiKey || "",
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`Backend API Error (${res.status}):`, errorText);
      throw new Error(`Failed to fetch works: ${res.status}`);
    }

    const json = await res.json();
    return (json.data || []) as ApiWork[];
  } catch (error) {
    console.error("Error fetching works in frontend:", error);
    return [];
  }
}

export default async function WorksPage() {
  const works = await fetchWorks();

  // Dynamically group works based on their status (e.g., "Ongoing", "Completed")
  const groupedData = works.reduce((acc, work) => {
    const group = work.status || "Our Projects";
    if (!acc[group]) acc[group] = [];
    
    // Grab the first uploaded media item for the thumbnail
    const firstMedia = work.media && work.media.length > 0 ? work.media[0] : null;
    
    acc[group].push({
      id: work.public_id || work.id || Math.random().toString(),
      title: work.title,
      location: work.location || "Gujarat",
      image: firstMedia ? firstMedia.url : "/hero-bg.webp",
      type: firstMedia ? firstMedia.type : "image",
      category: work.category || "Uncategorized",
    });
    
    return acc;
  }, {} as Record<string, any[]>);

  // Convert the grouped object into an array for easy rendering
  const sections = Object.entries(groupedData).map(([category, items]) => ({
    category,
    items,
  }));

  // Optional: Sort sections alphabetically so "Completed" and "Ongoing" remain consistent
  sections.sort((a, b) => a.category.localeCompare(b.category));

  return (
    <main className="w-full bg-white flex flex-col min-h-screen pt-[90px]">
      {/* Header Section
      <div className="w-full flex justify-center py-12 md:py-16 px-6 md:px-16 lg:px-24 bg-white border-b border-stone-100">
        <div className="w-full flex flex-col">
          <h1 className="font-heading font-bold text-3xl md:text-5xl text-stone-900 tracking-tight">
            Our Works
          </h1>
          <p className="font-body text-stone-500 text-sm md:text-base font-medium mt-4 max-w-3xl leading-relaxed">
            Take a look at the progress of our construction sites, recent
            structural developments, and our completed landmark projects. We
            believe in transparency and showcasing our commitment to quality at
            every step.
          </p>
        </div>
      </div> */}

      {/* Grouped Sections dynamically rendering based on Database data */}
      {sections.map((section, index) => (
        <WorksSection
          key={section.category}
          title={section.category}
          works={section.items}
          isAlternateBg={index % 2 !== 0}
        />
      ))}

      {/* Fallback if database is empty */}
      {sections.length === 0 && (
        <div className="flex items-center justify-center min-h-[40vh]">
          <p className="text-stone-500 font-medium text-lg">
            No works found at the moment.
          </p>
        </div>
      )}
    </main>
  );
}
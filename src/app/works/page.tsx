import type { Metadata } from "next";
import WorksSection from "@/src/components/works/WorksSection";

export const metadata: Metadata = {
  title: "Our Works | Sukoon Developer",
  description:
    "Explore our ongoing construction sites, structural developments, and completed projects.",
};

const worksData = [
  {
    category: "Ongoing Construction",
    items: [
      {
        id: "foundation-excavation",
        title: "Foundation & Excavation",
        location: "Site A, Vadodara",
        image: "/hero-bg.webp",
        type: "image" as const,
      },
      {
        id: "structural-framework",
        title: "Structural Framework",
        location: "Site B, Dabhoi Road",
        image: "/plot-1-1.webp",
        type: "video" as const,
      },
      {
        id: "first-floor-slabs",
        title: "First Floor Slabs",
        location: "Site A, Vadodara",
        image: "/plot-2-1.webp",
        type: "image" as const,
      },
    ],
  },
  {
    category: "Completed Sites",
    items: [
      {
        id: "residential-villa",
        title: "Residential Villa Exterior",
        location: "Vadodara",
        image: "/residential.webp",
        type: "image" as const,
      },
      {
        id: "commercial-walkthrough",
        title: "Commercial Complex Walkthrough",
        location: "Dabhoi",
        image: "/commercial.webp",
        type: "video" as const,
      },
    ],
  },
];

export default function WorksPage() {
  return (
    <main className="w-full bg-white flex flex-col min-h-screen pt-[90px]">
      {/* Header Section */}
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
      </div>

      {/* Grouped Sections */}
      {worksData.map((section, index) => (
        <WorksSection
          key={section.category}
          title={section.category}
          works={section.items}
          isAlternateBg={index % 2 !== 0}
        />
      ))}
    </main>
  );
}

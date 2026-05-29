import type { Metadata } from "next";
import WorkDetailHero, {
  MediaItem,
} from "@/src/components/works/WorkDetailHero";

export const metadata: Metadata = {
  title: "Work Details | Sukoon Developer",
};

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkDetailPage({ params }: PageProps) {
  const resolvedParams = await params;

  // Dummy data mock - normally you'd fetch this from your DB based on resolvedParams.id
  const workData = {
    title: "Structural Framework Construction",
    category: "Ongoing Construction",
    location: "Site B, Dabhoi Road, Vadodara",
    status: "In Progress",
    media: [
      { url: "/plot-1-1.webp", type: "image" as const },
      { url: "/commercial.webp", type: "video" as const }, // Testing Video
      { url: "/plot-2-1.webp", type: "image" as const },
    ] as MediaItem[],
  };

  return (
    <main className="w-full bg-white flex flex-col min-h-screen pt-[90px]">
      <WorkDetailHero
        title={workData.title}
        category={workData.category}
        location={workData.location}
        status={workData.status}
        media={workData.media}
      />

      {/* Additional details could go here in a standard container if needed */}
      <div className="px-6 md:px-16 lg:px-24 py-12 max-w-4xl">
        <h2 className="text-2xl font-black text-[#1F1F1F] mb-4">
          Project Overview
        </h2>
        <p className="text-stone-500 font-medium leading-relaxed">
          Detailed breakdown of the {resolvedParams.id} construction phase. The
          structural framework involves heavy reinforcement, stringent quality
          checks on materials, and precise alignment. We ensure all safety
          parameters are met during this crucial phase of development.
        </p>
      </div>
    </main>
  );
}

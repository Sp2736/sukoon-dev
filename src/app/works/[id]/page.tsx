import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WorkDetailHero, { MediaItem } from "@/src/components/works/WorkDetailHero";
import AnimatedBackground from "@/src/components/ui/AnimatedBackground";

export const revalidate = 60; // Revalidate every 60 seconds

export const metadata: Metadata = {
  title: "Work Details | Sukoon Developer",
};

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

interface ApiWork {
  public_id?: string;
  id?: string;
  title: string;
  location: string;
  status?: string;
  description?: string;
  category?: string;
  media: MediaItem[];
}

async function fetchWorkById(id: string): Promise<ApiWork | null> {
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
      throw new Error("Failed to fetch works data");
    }

    const json = await res.json();
    const works: ApiWork[] = json.data || [];

    return works.find((w) => w.public_id === id || w.id === id) || null;
  } catch (error) {
    console.error("Error fetching specific work:", error);
    return null;
  }
}

export default async function WorkDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const workData = await fetchWorkById(resolvedParams.id);

  if (!workData) {
    notFound();
  }

  const media: MediaItem[] =
    workData.media && workData.media.length > 0
      ? workData.media
      : [{ url: "/hero-bg.webp", type: "image" }];

  return (
    <main className="w-full relative flex flex-col min-h-screen pt-[90px]">
      <AnimatedBackground />

      <WorkDetailHero
        title={workData.title}
        category={workData.category || workData.status || "Our Projects"}
        location={workData.location || "Gujarat"}
        status={workData.status || "In Progress"}
        media={media}
      />

      <div className="px-6 md:px-16 lg:px-24 py-12 max-w-4xl relative z-10">
        <h2 className="text-2xl font-black text-[#1F1F1F] mb-4">
          Project Overview
        </h2>

        <p className="text-stone-500 font-medium leading-relaxed mb-4 whitespace-pre-wrap">
          {workData.description?.trim()
            ? workData.description
            : `Detailed breakdown of the ${workData.title} phase. This project involves heavy reinforcement, stringent quality checks on materials, and precise alignment. We ensure all safety parameters are met during this crucial phase of development.`}
        </p>
      </div>
    </main>
  );
}
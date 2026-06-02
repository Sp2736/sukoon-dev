import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");

  if (!category) {
    return NextResponse.json(
      { success: false, error: "Category is required" },
      { status: 400 }
    );
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const apiKey = process.env.SUKOON_API_KEY;

  try {
    // Fetch from the sukoon-api without a limit to get ALL properties for this category
    const res = await fetch(
      `${apiUrl}/api/properties?category=${encodeURIComponent(category)}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "x-api-key": apiKey || "",
        },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch properties from backend");
    }

    const json = await res.json();
    const data = json.data || [];

    // Map the properties securely on the server side so they are ready for the UI
    const mappedProperties = data.map((p: any) => ({
      id: p.public_id,
      image: p.cover_image || "/sukoon-col.webp",
      title: p.title,
      location: p.city || "Gujarat",
      details: p.configuration || "Details on request",
      category: p.category,
      amenities: p.amenities || [],
      price: p.price
        ? `₹ ${p.price.toLocaleString("en-IN")}`
        : "Price on Request",
    }));

    return NextResponse.json({ success: true, data: mappedProperties });
  } catch (error: any) {
    console.error("Error fetching properties by category:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch properties" },
      { status: 500 }
    );
  }
}
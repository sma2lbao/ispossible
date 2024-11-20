import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug;

  console.log("slug: ", slug);
  return NextResponse.json({ data: null });
}

import { inject } from "@/shared/inject";
import { NextResponse } from "next/server";

export const GET = inject(
  async (
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
  ) => {
    const slug = (await params).slug;

    console.log("slug: ", slug);

    return NextResponse.json({ data: null });
  }
);

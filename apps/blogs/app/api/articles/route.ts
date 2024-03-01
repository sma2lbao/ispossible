import { NextResponse } from "next/server";
import { findArticleMetas } from "@/shared/parse-article";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  if (!category) {
    return NextResponse.json({ data: [] });
  }
  const result = await findArticleMetas(category);
  return NextResponse.json({ data: result });
}

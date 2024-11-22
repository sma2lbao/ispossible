import { getSts } from "@/shared/sts";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getSts();

  return NextResponse.json({
    data,
  });
}

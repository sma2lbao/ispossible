import { inject } from "@/shared/inject";
import { NextRequest, NextResponse } from "next/server";

export const POST = inject(async (request: NextRequest) => {
  const payload = await request.json();
  console.log("payload", payload);
  return NextResponse.json({}, { status: 200 });
});

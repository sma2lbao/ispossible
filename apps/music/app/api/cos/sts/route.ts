import { inject } from "@/shared/inject";
import { getSts } from "@/shared/sts";
import { NextResponse } from "next/server";

export const GET = inject(async () => {
  const data = await getSts();

  return NextResponse.json({
    data,
  });
});

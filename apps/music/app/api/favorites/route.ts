import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const payload = await request.json();

  const favorite = await prisma.favoriteSong.create({
    data: {
      userId: payload.userId,
      songId: payload.songId,
    },
  });

  return NextResponse.json({ data: favorite });
}

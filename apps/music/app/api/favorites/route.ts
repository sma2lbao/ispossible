import prisma from "@/database";
import { auth } from "@/shared/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    return NextResponse.json({ error: "Missing userId" }, { status: 400 });
  }

  const payload = await request.json();

  const favorite = await prisma.favoriteSong.create({
    data: {
      userId,
      songId: payload.songId,
    },
  });

  return NextResponse.json({ data: favorite });
}

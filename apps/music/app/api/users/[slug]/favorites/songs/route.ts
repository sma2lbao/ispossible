import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const userId = (await params).slug;

  const favoritedSongs = await prisma.favoriteSong.findMany({
    where: { userId },
    include: {
      song: true,
    },
  });

  const nextSongs = favoritedSongs.map((item) => {
    return {
      ...item.song,
      isFavorited: true,
    };
  });

  return NextResponse.json({
    data: nextSongs,
  });
}

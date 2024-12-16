import prisma from "@/database";
import { inject } from "@/shared/inject";
import { NextRequest, NextResponse } from "next/server";

export const GET = inject(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
  ) => {
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
);

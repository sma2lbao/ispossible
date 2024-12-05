import prisma from "@/database";
import { auth } from "@/shared/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    return NextResponse.json({ error: "userId not exist" }, { status: 403 });
  }

  const songs = await prisma.song.findMany({
    take: 10,
    include: {
      favoritedBy: {
        where: {
          userId,
        },
      },
    },
  });

  const nextSongs = songs.map((item) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { favoritedBy: _, ...rest } = item;
    return {
      ...rest,
      isFavorited: true,
    };
  });

  return NextResponse.json({
    data: nextSongs,
  });
}

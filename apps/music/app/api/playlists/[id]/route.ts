import prisma from "@/database";
import { auth } from "@/shared/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  const userId = session?.user?.id;
  const playlistId = (await params).id;
  const playlist = await prisma.playlist.findUnique({
    where: {
      id: playlistId,
    },
    include: {
      songs: {
        include: {
          song: true,
        },
      },
    },
  });

  let favoritedSongIds: string[] = [];
  const songIds = playlist?.songs.map((item) => item.songId);
  if (userId) {
    favoritedSongIds = await prisma.favoriteSong
      .findMany({
        where: {
          userId,
          songId: {
            in: songIds,
          },
        },
        select: {
          songId: true,
        },
      })
      .then((favorites) => favorites.map((item) => item.songId));
  }

  const nextSongs = playlist?.songs.map((item) => ({
    ...item.song,
    isFavorited: favoritedSongIds.includes(item.songId),
  }));
  const nextPlaylist = { ...playlist, songs: nextSongs };

  return NextResponse.json({ data: nextPlaylist });
}

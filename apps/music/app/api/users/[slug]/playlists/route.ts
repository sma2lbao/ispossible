import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const userId = (await params).slug;

  const usersPlaylists = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      playlists: {
        take: 20,
      },
    },
  });

  const playlists = usersPlaylists?.playlists ?? [];

  return NextResponse.json({ data: playlists });
}

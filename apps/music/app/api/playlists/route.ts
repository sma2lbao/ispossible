import prisma from "@/database";
import { CreatePlaylistSchema } from "@/schemas/playlists";
import { auth } from "@/shared/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const playlists = await prisma.playlist.findMany({
    take: 10,
  });

  return NextResponse.json({ data: playlists });
}

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  const payload = await request.json();
  const data = CreatePlaylistSchema.parse(payload);

  const newPlaylist = await prisma.playlist.create({
    data: {
      ...data,
      authorId: session.user.id!,
    },
  });

  return NextResponse.json({
    data: newPlaylist,
  });
}

import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const payload = await request.json();

  const newAlbums = await prisma.album.create({
    data: {
      title: payload.title,
      description: payload.description,
      coverUrl: payload.coverUrl,
      artistId: payload.artistId,
    },
  });

  return NextResponse.json({ data: newAlbums });
}

import prisma from "@/database";
import { auth } from "@/shared/auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  const session = await auth();
  if (!session?.user) {
    return NextResponse.json({ data: null }, { status: 401 });
  }

  const newPlaylist = await prisma.playlist.create({
    data: {
      name: payload.name,
      description: payload.description,
      coverUrl: payload.coverUrl,
      authorId: session.user.id!,
    },
  });

  return NextResponse.json({
    data: newPlaylist,
  });
}

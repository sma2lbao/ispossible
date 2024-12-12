import prisma from "@/database";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const payload = await request.json();

  const newAlbum = await prisma.album.update({
    where: {
      id,
    },
    data: {
      title: payload.title,
      description: payload.description,
      coverUrl: payload.coverUrl,
    },
  });

  return NextResponse.json({ data: newAlbum }, { status: 201 });
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const album = await prisma.album.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      artist: true,
    },
  });

  return NextResponse.json({ data: album });
}

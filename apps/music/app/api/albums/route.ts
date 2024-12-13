import prisma from "@/database";
import { CreateAlbumSchema } from "@/schemas/albums";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const payload = await request.json();

  const data = CreateAlbumSchema.parse(payload);
  const newAlbums = await prisma.album.create({
    data,
  });

  return NextResponse.json({ data: newAlbums });
}

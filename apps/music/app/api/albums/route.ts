import prisma from "@/database";
import { CreateAlbumSchema } from "@/schemas/albums";
import { inject } from "@/shared/inject";
import { NextRequest, NextResponse } from "next/server";

export const POST = inject(async (request: NextRequest) => {
  const payload = await request.json();

  const data = CreateAlbumSchema.parse(payload);
  const newAlbums = await prisma.album.create({
    data,
  });

  return NextResponse.json({ data: newAlbums });
});

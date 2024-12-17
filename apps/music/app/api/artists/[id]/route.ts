import prisma from "@/database";
import { UpdateArtistSchema } from "@/schemas/artists";
import { inject } from "@/shared/inject";
import { RoleName } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = inject(
  async (request: Request, { params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const artist = await prisma.artist.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return NextResponse.json({ data: artist });
  }
);

export const PUT = inject(
  async (request: Request, { params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    const payload = await request.json();
    const data = UpdateArtistSchema.parse(payload);
    const newArtist = await prisma.artist.update({
      where: {
        id,
      },
      data,
    });

    return NextResponse.json({ data: newArtist });
  },
  { role: RoleName.ADMIN }
);

export const DELETE = inject(
  async (request: Request, { params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id;
    await prisma.artist.delete({
      where: {
        id,
      },
    });

    return NextResponse.json({ data: true });
  },
  { role: RoleName.ADMIN }
);

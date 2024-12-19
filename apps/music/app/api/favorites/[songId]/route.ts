import prisma from "@/database";
import { inject } from "@/shared/inject";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = inject(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ songId: string }> }
  ) => {
    const songId = (await params).songId;
    const userId = request.user!.id!;

    const deleteResult = await prisma.favoriteSong.deleteMany({
      where: {
        userId,
        songId,
      },
    });
    if (deleteResult.count === 0) {
      return NextResponse.json({ message: "not found" }, { status: 404 });
    }

    return NextResponse.json({ data: null });
  },
  {
    login: true,
  }
);

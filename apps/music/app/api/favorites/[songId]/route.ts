import prisma from "@/database";
import { auth } from "@/shared/auth";
import { inject } from "@/shared/inject";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = inject(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ songId: string }> }
  ) => {
    const songId = (await params).songId;
    const session = await auth();
    const userId = session?.user?.id;

    const deleteResult = await prisma.favoriteSong.deleteMany({
      where: {
        userId,
        songId,
      },
    });
    if (deleteResult.count === 0) {
      return NextResponse.json({ error: "not found" }, { status: 404 });
    }

    return NextResponse.json({ data: null });
  }
);

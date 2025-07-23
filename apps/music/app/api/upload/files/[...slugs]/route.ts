import { MINIO_BUCKET } from "@/constants";
import { inject } from "@/shared/inject";
import minio from "@/shared/minio";
import { NextRequest, NextResponse } from "next/server";

export const GET = inject(
  async (
    request: NextRequest,
    {
      params,
    }: {
      params: Promise<{ slugs: string[] }>;
    }
  ) => {
    const slugs = (await params).slugs;
    const id = slugs.join("/");
    const url = await minio.presignedGetObject(MINIO_BUCKET, id, 3600);
    const resource = await fetch(url);
    return new NextResponse(resource.body, {
      headers: {
        "Cache-Control": "public, max-age=3600, immutable",
      },
    });
  }
);

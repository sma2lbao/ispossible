import { MINIO_BUCKET } from "@/constants";
import minio from "@/shared/minio";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ slugs: string[] }>;
  }
) {
  const slugs = (await params).slugs;
  const id = slugs.join("/");

  const stream = await minio.getObject(MINIO_BUCKET, id);
  const readable = new ReadableStream({
    start(controller) {
      stream.on("data", (chunk) => {
        controller.enqueue(chunk);
      });

      stream.on("end", () => {
        controller.close();
      });

      stream.on("error", (err) => {
        controller.error(err);
      });
    },
  });
  return new NextResponse(readable, {
    headers: {
      "Content-Type": "application/octet-stream",
    },
  });
}

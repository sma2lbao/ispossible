import { NextRequest, NextResponse } from "next/server";

export type RouteHandler = (
  request: NextRequest,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...args: any
) => Promise<NextResponse>;

export function inject(handler: RouteHandler) {
  return async function (request: NextRequest, ...args: unknown[]) {
    try {
      return await handler(request, ...args);
    } catch (error) {
      return NextResponse.json(
        {
          error: (error as Error)?.message ?? "服务器繁忙",
        },
        { status: 500 }
      );
    }
  };
}

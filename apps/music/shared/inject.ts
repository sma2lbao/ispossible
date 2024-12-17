import { RoleName } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

export type RouteHandler = (
  request: NextRequest,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...args: any
) => Promise<NextResponse>;

export interface InjectRouteOptions {
  /**
   * 需要登陆
   */
  login?: boolean;
  /**
   * 需要是什么角色
   */
  role?: RoleName;
  /**
   * 将 user 挂到request上
   */
  injectUser?: boolean;
}

export function inject(handler: RouteHandler, options?: InjectRouteOptions) {
  const { role, login, injectUser } = options ?? {};
  return async function (request: NextRequest, ...args: unknown[]) {
    try {
      if (login || role || injectUser) {
        const session = await auth();
        const user = session?.user;
        if (injectUser) {
          request.user = user;
        }

        if ((login || role) && !user) {
          return NextResponse.json(
            { message: "Unauthorized" },
            { status: 401 }
          );
        }

        if (role && user && !user.roles.includes(role)) {
          return NextResponse.json({ message: "Forbidden" }, { status: 403 });
        }
      }

      return await handler(request, ...args);
    } catch (error) {
      return NextResponse.json(
        {
          message: "Internal Server Error",
        },
        { status: 500 }
      );
    }
  };
}

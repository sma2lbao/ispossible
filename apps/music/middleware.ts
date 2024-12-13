import { NextRequest, NextResponse } from "next/server";
import { auth } from "./shared/auth";

export default auth((request: NextRequest) => {
  try {
    return NextResponse.next();
  } catch (error) {
    console.log("log: ", request.url);
    console.error("error:", error);
    return NextResponse.json(
      { error: "Middleware processing failed" },
      { status: 500 }
    );
  }
});

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|images|icons|manifest).*)",
  ],
};

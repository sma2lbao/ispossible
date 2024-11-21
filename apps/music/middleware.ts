import { NextResponse } from "next/server";
import { auth } from "./shared/auth";

export default auth(() => {
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|icons|manifest).*)",
  ],
};

import { NextResponse } from "next/server";
import { auth } from "./shared/auth";

export default auth((request) => {
  // if (!request.auth) {
  //   return NextResponse.redirect(new URL("/auth/login", request.url));
  // }
  console.log("auth: ", request.auth);
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|images|icons|manifest).*)",
  ],
};

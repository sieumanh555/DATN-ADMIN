import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken")?.value;
  const pathname = req.nextUrl.pathname;
  if (/\.(png|jpg|jpeg|gif|webp|svg|ico)$/i.test(pathname)) {
    return NextResponse.next();
  }
  if (token && (pathname === "/signin" || pathname === "/signup")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  if (!token && pathname !== "/signin" && pathname !== "/signup") {
    return NextResponse.redirect(new URL("/signin", req.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: "/((?!_next/static|_next/image|favicon.ico|public/).*)",
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/work")) {
    const authCookie = request.cookies.get("slug_auth");

    if (authCookie?.value !== "true") {
      const url = request.nextUrl.clone();
      url.pathname = "/login";
      url.searchParams.set("from", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// only run on the path below...
export const config = {
  matcher: "/work/:path*",
};

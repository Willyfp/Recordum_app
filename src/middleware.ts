import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const nonAuthRoutes = [
    "/cadastro/avancado",
    "/login",
    "/cadastro",
    "/home",
    "/recuperar",
    "/",
  ];

  // const pwaRoutes = [
  //   "/sw.js",
  //   "/manifest.json",
  //   "/favicon.ico",
  //   "sw.js.map",
  //   "swe-worker-development.js",
  //   "workbox-1b1de004.js",
  //   "workbox-1b1de004.js.map",
  // ];

  if (request.nextUrl.pathname.includes(".")) return NextResponse.next();

  const token = cookies().get("token");

  const userId = cookies().get("user_id");

  if (nonAuthRoutes.includes(request.nextUrl.pathname)) {
    if (token && userId) {
      const absoluteURL = new URL("/inicio", request.nextUrl.origin);

      return NextResponse.redirect(absoluteURL.toString());
    }

    return;
  } else if (!token || !userId) {
    const absoluteURL = new URL("/login", request.nextUrl.origin);

    return NextResponse.redirect(absoluteURL.toString());
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
  ],
};

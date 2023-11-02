import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const nonAuthRoutes = [
    "/cadastro/avancado",
    "/login",
    "/cadastro",
    "/home",
    "/",
  ];

  const token = cookies().get("token");

  if (nonAuthRoutes.includes(request.nextUrl.pathname)) {
    if (token) {
      const absoluteURL = new URL("/inicio", request.nextUrl.origin);

      return NextResponse.redirect(absoluteURL.toString());
    }

    return;
  } else if (!token) {
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

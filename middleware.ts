import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
  const isApiRoute = request.nextUrl.pathname.startsWith("/api/admin");
  const isLoginPage = request.nextUrl.pathname === "/login";

  // Redirect to login if no token on admin routes
  if ((isAdminRoute || isApiRoute) && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect to admin if already logged in on login page
  if (isLoginPage && token) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*", "/login"],
};
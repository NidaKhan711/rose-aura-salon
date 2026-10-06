import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;
  const isAdminRoute = pathname.startsWith("/admin");
  const isApiRoute = pathname.startsWith("/api/admin");
  const isLoginPage = request.nextUrl.pathname === "/login";
  const publicApiRequests = [
    { path: "/api/admin/bookings", method: "POST" },
    { path: "/api/admin/contact", method: "POST" },
    { path: "/api/admin/subscribe", method: "POST" },
    { path: "/api/admin/gallery", method: "GET" },
  ];
  const isPublicApiRequest = publicApiRequests.some(
    (route) => pathname === route.path && request.method === route.method
  );

  // Redirect to login if no token on admin routes
  if ((isAdminRoute || (isApiRoute && !isPublicApiRequest)) && !token) {
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

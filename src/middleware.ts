import { NextResponse } from "next/server";
import { auth } from "@/auth";

/**
 * Protects all /portal/* routes. Unauthenticated users are redirected to
 * the sign-in page. Role-specific sub-route protection (e.g. only admins
 * may view /portal/admin) is enforced again inside each portal page as a
 * defense-in-depth measure, since middleware here only checks that a
 * session exists.
 */
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  if (nextUrl.pathname.startsWith("/portal") && !isLoggedIn) {
    const signInUrl = new URL("/auth/signin", nextUrl.origin);
    signInUrl.searchParams.set("callbackUrl", nextUrl.pathname);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/portal/:path*"],
};

// Import necessary functions from Next.js
import { NextResponse } from "next/server";

// Define the middleware function
export function middleware(request) {
  // Extract the token from cookies
  const token = request.cookies.get("token")?.value;

  // Check the current pathname
  const pathname = request.nextUrl.pathname;

  // If no token is found and the path is "/dashboard", redirect to the login page
  if (!token && pathname === "/dashboard") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow the request to continue if the token is present or if it's not a protected route
  return NextResponse.next();
}

// Configure middleware to apply to specific routes
export const config = {
  matcher: ["/dashboard"],
};

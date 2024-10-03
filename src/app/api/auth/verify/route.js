// app/api/auth/verify/route.js
import { NextResponse } from "next/server";
import { verifyToken } from "../../../auth";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "No token found" }, { status: 401 });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }

  return NextResponse.json({
    message: "Token is valid",
    user: { id: decoded.id },
  });
}

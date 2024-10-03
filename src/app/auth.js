// app/utils/auth.js
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = "ijocvmkslmdvo";

export function generateToken(user) {
  return jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
}

export function verifyToken(token) {
  try {
    console.log("verifyToken", token);
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    console.error("Token verification failed:", error.message);
    return null;
  }
}

export function setTokenCookie(response, token) {
  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 86400,
    path: "/",
  });
}

export function removeTokenCookie(response) {
  response.cookies.delete("token");
}

import { NextResponse } from "next/server";
import dbConnect from "../../../db";
import User from "../../../models/User";
import { generateToken, setTokenCookie } from "../../../auth";

export async function POST(request) {
  try {
    await dbConnect();
    const { username, password } = await request.json();

    // Check if user exists and password is correct
    const user = await User.findOne({ username });
    console.log("login", user);

    console.log("login", user);
    if (!user || !(await user.comparePassword(password))) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate and set token cookie
    const token = generateToken(user);
    const response = NextResponse.json({ message: "Logged in successfully" });

    // Set token cookie in response headers
    setTokenCookie(response, token); // Make sure setTokenCookie correctly sets the cookie on the response
    return response;
  } catch (error) {
    // Catch and log the error for debugging
    console.error("Error during login:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

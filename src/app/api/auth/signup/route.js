import { NextResponse } from "next/server";
import dbConnect from "../../../db";
import User from "../../../models/User";
import { generateToken, setTokenCookie } from "../../../auth";

export async function POST(request) {
  await dbConnect();
  const { username, password } = await request.json();

  try {
    // Create a new user in the database
    const user = await User.create({ username, password });

    // Generate a token for the new user
    const token = generateToken(user);

    // Create a NextResponse object and set the token cookie
    const response = NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );

    // Set the token cookie in the response
    setTokenCookie(response, token);

    return response;
  } catch (error) {
    console.error("Error creating user:", error.message);
    return NextResponse.json(
      { error: "Username already exists" },
      { status: 400 }
    );
  }
}

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json(
      { message: data.message || "Login failed" },
      { status: 401 }
    );
  }

  const response = NextResponse.json({
    message: "Login successful",
    user: data.user,
    token: data.token,
  });

  response.cookies.set({
    name: "token",
    value: data.token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}

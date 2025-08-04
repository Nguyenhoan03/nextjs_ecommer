import { NextResponse } from "next/server";
import { fetcher } from "@/libs/axios";

interface LoginResponse {
  user: any;
  token: string;
}

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const data = await fetcher<LoginResponse>(
      `${process.env.NEXT_PUBLIC_API_BACKEND}/api/login`,
      {
        method: "POST",
        body: { email, password },
      }
    );

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
  } catch (error: any) {
    return NextResponse.json(
      { message: error.message || "Login failed" },
      { status: 401 }
    );
  }
}

// app/api/cart/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { fetcher } from "@/libs/axios";

export async function GET() {
  try {
    const cookieStore =await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const count = await fetcher<number>(
      `${process.env.NEXT_PUBLIC_API_BACKEND}/api/quantity-product-cart`,
      {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      }
    );

    const productCart = await fetcher(
      `${process.env.NEXT_PUBLIC_API_BACKEND}/api/product-cart`,
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
        credentials: "include",
      }
    );

    // Trả về object rõ ràng
    return NextResponse.json({ count, productCart }, { status: 200 });
  } catch (err) {
    console.error("API /api/cart error:", err);
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}

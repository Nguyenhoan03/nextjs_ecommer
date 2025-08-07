import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { fetcher } from "@/libs/axios";

export async function GET() {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const count = await fetcher<number>(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/cart`, {
            headers: { Authorization: `Bearer ${token}` },
            cache: "no-store",
        });

        return NextResponse.json(count);
    } catch (err) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
}

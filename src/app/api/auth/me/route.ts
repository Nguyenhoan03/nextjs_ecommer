import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { fetcher } from "@/libs/axios";

export async function GET() {
    const resolvedCookieStore = await cookies();
    const token = resolvedCookieStore.get('token')?.value;

    if (!token) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        const data = await fetcher<any>(`${process.env.NEXT_PUBLIC_API_BACKEND}/api/me`, {
            headers: { Authorization: `Bearer ${token}` },
            cache: "no-store",
        });

        return NextResponse.json(data);
    } catch (err: any) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
}

import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        if (!data.email) {
            return NextResponse.json(
                { error: "Email is required." },
                { status: 400 }
            );
        }

        const filePath = path.join(process.cwd(), "data", "newsletter-subscribers.json");
        let subscribers: unknown[] = [];
        try {
            const existing = await fs.readFile(filePath, "utf-8");
            subscribers = JSON.parse(existing);
        } catch {
            // File doesn't exist yet
        }

        // Check for duplicate
        const emails = subscribers.map((s: unknown) => (s as { email: string }).email);
        if (emails.includes(data.email)) {
            return NextResponse.json({ success: true, message: "Already subscribed." });
        }

        subscribers.push({
            email: data.email,
            subscribedAt: new Date().toISOString(),
        });

        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, JSON.stringify(subscribers, null, 2));

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: "Something went wrong." },
            { status: 500 }
        );
    }
}

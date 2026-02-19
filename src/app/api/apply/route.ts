import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        if (!data.name || !data.email) {
            return NextResponse.json(
                { error: "Name and email are required." },
                { status: 400 }
            );
        }

        const filePath = path.join(process.cwd(), "data", "creator-applications.json");
        let applications: unknown[] = [];
        try {
            const existing = await fs.readFile(filePath, "utf-8");
            applications = JSON.parse(existing);
        } catch {
            // File doesn't exist yet
        }

        applications.push({
            ...data,
            submittedAt: new Date().toISOString(),
        });

        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, JSON.stringify(applications, null, 2));

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: "Something went wrong." },
            { status: 500 }
        );
    }
}

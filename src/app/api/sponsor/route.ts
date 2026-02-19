import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // Validate required fields
        if (!data.name || !data.email || !data.company) {
            return NextResponse.json(
                { error: "Name, email, and company are required." },
                { status: 400 }
            );
        }

        // Store to a JSON file (v1 — replace with CMS/Airtable later)
        const filePath = path.join(process.cwd(), "data", "sponsor-leads.json");
        let leads: unknown[] = [];
        try {
            const existing = await fs.readFile(filePath, "utf-8");
            leads = JSON.parse(existing);
        } catch {
            // File doesn't exist yet, start fresh
        }

        leads.push({
            ...data,
            submittedAt: new Date().toISOString(),
        });

        await fs.mkdir(path.dirname(filePath), { recursive: true });
        await fs.writeFile(filePath, JSON.stringify(leads, null, 2));

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: "Something went wrong." },
            { status: 500 }
        );
    }
}

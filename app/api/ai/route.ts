import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { message } = await req.json();

    if (!message) {
        return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    try {
        console.log("API Key present:", !!process.env.OPENROUTER_API_KEY);
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
                "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
                "X-Title": process.env.NEXT_PUBLIC_SITE_NAME || "My AI App",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "tngtech/deepseek-r1t2-chimera:free",
                messages: [
                    {
                        role: "user",
                        content: message,
                    },
                ],
            }),
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("AI API error:", error);
        return NextResponse.json({ error: "Failed to fetch AI response" }, { status: 500 });
    }
}

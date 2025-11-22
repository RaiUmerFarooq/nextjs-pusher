import { NextResponse } from "next/server";
import Pusher from "pusher";

const pusher = new Pusher({
    appId: process.env.PUSHER_APP_ID!,
    key: process.env.PUSHER_KEY!,
    secret: process.env.PUSHER_SECRET!,
    cluster: process.env.PUSHER_CLUSTER!,
    useTLS: true,
});

export async function POST(req: Request) {
    const { message, username } = await req.json();

    if (!message || !username) {
        return NextResponse.json({ error: "Message and username are required" }, { status: 400 });
    }

    try {
        await pusher.trigger("chat-room", "message", {
            message,
            username,
            timestamp: new Date().toISOString(),
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Pusher error:", error);
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }
}

"use client";
import { useEffect, useState, useRef } from "react";
import Pusher from "pusher-js";
import { Input } from "@/components/ui/input";

interface Message {
    username: string;
    message: string;
    timestamp: string;
}

export default function ChatPage() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [username, setUsername] = useState("");
    const [isJoined, setIsJoined] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isJoined) return;

        // Initialize Pusher
        const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY!, {
            cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
        });

        // Subscribe to the channel
        const channel = pusher.subscribe("chat-room");

        // Bind to the event
        channel.bind("message", (data: Message) => {
            setMessages((prev) => [...prev, data]);
        });

        return () => {
            pusher.unsubscribe("chat-room");
        };
    }, [isJoined]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleJoin = () => {
        if (username.trim()) {
            setIsJoined(true);
        }
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: input,
                username: username,
            }),
        });

        setInput("");
    };

    if (!isJoined) {
        return (
            <div className="flex flex-1 items-center justify-center p-4">
                <div className="w-full max-w-md space-y-4 rounded-xl border bg-card p-6 shadow-lg text-center">
                    <h1 className="text-2xl font-bold">Join Chat Room</h1>
                    <p className="text-muted-foreground">Enter your name to start chatting</p>
                    <Input
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleJoin()}
                    />
                    <button
                        onClick={handleJoin}
                        className="w-full rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/90"
                        disabled={!username.trim()}
                    >
                        Join
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-1 flex-col w-full max-w-4xl mx-auto p-4">
            <div className="flex-1 overflow-y-auto rounded-xl border bg-card p-4 shadow-sm space-y-4 mb-4">
                {messages.length === 0 ? (
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                        No messages yet. Say hello!
                    </div>
                ) : (
                    messages.map((msg, i) => (
                        <div
                            key={i}
                            className={`flex flex-col ${msg.username === username ? "items-end" : "items-start"
                                }`}
                        >
                            <div
                                className={`max-w-[80%] rounded-lg px-4 py-2 ${msg.username === username
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted text-foreground"
                                    }`}
                            >
                                <p className="text-sm font-bold opacity-70 mb-1">{msg.username}</p>
                                <p>{msg.message}</p>
                            </div>
                            <span className="text-xs text-muted-foreground mt-1">
                                {new Date(msg.timestamp).toLocaleTimeString()}
                            </span>
                        </div>
                    ))
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="flex gap-2">
                <Input
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    className="flex-1"
                />
                <button
                    onClick={sendMessage}
                    className="rounded-md bg-primary px-6 py-2 font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                    disabled={!input.trim()}
                >
                    Send
                </button>
            </div>
        </div>
    );
}

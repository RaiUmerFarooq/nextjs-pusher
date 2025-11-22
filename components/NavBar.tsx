'use client'
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useAIStore } from "@/store/aiStore";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
    const setResult = useAIStore((state) => state.setResult);
    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false);
    const pathname = usePathname();

    const searching = async () => {
        if (!value.trim()) return;
        setLoading(true);
        try {
            const response = await fetch("/api/ai", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: value
                })
            });
            const data = await response.json();
            if (data.choices && data.choices[0]) {
                setResult(data.choices[0].message.content);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="sticky top-0 z-50 flex h-16 items-center justify-between gap-4 border-b bg-background/60 px-6 backdrop-blur-md transition-all">
            <div className="flex items-center gap-4">
                <Link href={"/"} className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors hover:bg-primary/20" title="Home">
                    <Image src="/home.svg" alt="Home" width={20} height={20} className="opacity-70" />
                </Link>
                <Link href={"/chat"} className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors hover:bg-primary/20" title="Chat Room">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
                </Link>
                <Link href={"/profile"} className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors hover:bg-primary/20" title="Profile">
                     <Image src="/images/profile.svg" alt="Profile" width={20} height={20} className="opacity-70" />
                </Link>
            </div>
            {pathname === "/" && (
                <div className="flex max-w-md flex-1 items-center gap-2">
                    <Input
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        type="text"
                        className="bg-background/50 transition-all focus:bg-background"
                        placeholder="Ask Anything..."
                        onKeyDown={(e) => e.key === 'Enter' && searching()}
                    />
                    <button
                        onClick={searching}
                        className="flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:opacity-50 min-w-[80px]"
                        disabled={!value || loading}
                    >
                        {loading ? (
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        ) : (
                            "Search"
                        )}
                    </button>
                </div>
            )}
            <div className="w-10"></div>
        </div>
    )
}

export default NavBar
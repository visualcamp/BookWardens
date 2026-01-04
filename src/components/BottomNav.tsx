"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Calendar, Shield, Zap, Archive } from "lucide-react";
import clsx from "clsx";

export default function BottomNav() {
    const pathname = usePathname();

    const tabs = [
        { name: "Today", href: "/", icon: Calendar },
        { name: "Library", href: "/library", icon: BookOpen },
        { name: "Coach", href: "/coach", icon: Zap }, // Using Zap for Coach/Training
        { name: "Wardens", href: "/wardens", icon: Shield },
        { name: "Vault", href: "/vault", icon: Archive },
    ];

    return (
        <nav className="fixed bottom-0 w-full max-w-[480px] h-[80px] bg-gradient-to-t from-[#0F0518] to-transparent flex items-center justify-around px-2 z-50 pb-2 pointer-events-none">
            <div className="flex items-center justify-around w-full max-w-sm bg-[#1A0B2E]/90 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 shadow-2xl pointer-events-auto">
                {tabs.map((tab) => {
                    const isActive = pathname === tab.href || (tab.href !== "/" && pathname.startsWith(tab.href));
                    return (
                        <Link
                            key={tab.name}
                            href={tab.href}
                            className={clsx(
                                "relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300",
                                isActive ? "bg-gradient-to-br from-[#7B2CBF] to-[#9D4EDD] text-white shadow-[0_0_20px_rgba(157,78,221,0.6)] -translate-y-2 scale-110" : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <tab.icon size={isActive ? 24 : 22} strokeWidth={isActive ? 2.5 : 2} />
                            {isActive && (
                                <span className="absolute -bottom-6 text-[10px] font-bold text-[#D0D0D0] opacity-0 animate-fade-in uppercase tracking-wider">
                                    {/* Optional: Fade in label only on active, or keep hidden for pure icon look. User asked for 'emoticons instead of text', so keeping hidden/minimal is safer. */}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}

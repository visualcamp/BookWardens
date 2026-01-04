"use client";

import { Bell, Mail, Settings, Gem, Shield } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
    return (
        <header className="fixed top-0 w-full max-w-[480px] h-[70px] flex items-center justify-between px-4 z-50 bg-gradient-to-b from-[#0F0518] via-[#0F0518]/80 to-transparent pointer-events-none">
            {/* Player Stats (HUD) */}
            <div className="flex gap-2 pointer-events-auto">
                <div className="flex items-center gap-2 bg-[#2a1b3d]/80 border border-white/10 px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md">
                    <Shield size={16} className="text-green-400" />
                    <span className="text-xs font-bold font-serif text-white">Lvl 4</span>
                </div>
                <div className="flex items-center gap-2 bg-[#2a1b3d]/80 border border-white/10 px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md">
                    <Gem size={16} className="text-purple-400" />
                    <span className="text-xs font-bold font-serif text-white">2450</span>
                </div>
            </div>

            {/* Action Icons */}
            <div className="flex items-center gap-3 pointer-events-auto">
                <button className="w-10 h-10 rounded-full bg-[#1A0B2E] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-500 shadow-md transition-all">
                    <Bell size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#1A0B2E] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-500 shadow-md transition-all">
                    <Mail size={18} />
                </button>
                <Link href="/settings" className="w-10 h-10 rounded-full bg-[#1A0B2E] border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-purple-500 shadow-md transition-all">
                    <Settings size={18} />
                </Link>
            </div>
        </header>
    );
}

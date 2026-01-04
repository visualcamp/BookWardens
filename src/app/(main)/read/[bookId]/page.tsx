"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Settings, Eye, BookOpen, Clock, Activity, Wand2 } from "lucide-react";
import Button from "@/components/ui/Button";
import EyeTracker from "@/components/EyeTracker";
import clsx from "clsx";

// Required for static export with dynamic routes
export async function generateStaticParams() {
    return [
        { bookId: "1" },
        { bookId: "2" },
        { bookId: "3" },
    ];
}

// Styled Stats Capsule - Icon Only for "Game" feel
const StatCapsule = ({ icon: Icon, value, color }: any) => (
    <div className="flex items-center gap-2 bg-[#2a1b3d]/50 border border-[#ffffff]/10 rounded-full px-4 py-2 backdrop-blur-md shadow-lg">
        <Icon size={16} className={color} />
        <span className="text-sm font-bold text-white font-mono">{value}</span>
    </div>
);

export default function ReadingPage() {
    const router = useRouter();
    const [progress, setProgress] = useState(85); // Mock start at 85% for demo

    return (
        <div className="fixed inset-0 bg-[#0F0518] z-[100] flex flex-col font-sans">
            {/* Header */}
            <header className="flex items-center justify-between p-4 z-10 bg-gradient-to-b from-[#0F0518] to-transparent">
                <button onClick={() => router.back()} className="w-10 h-10 rounded-full bg-[#2a1b3d] flex items-center justify-center text-white border border-[#ffffff]/10 hover:bg-[#3d2a55]">
                    <ArrowLeft size={20} />
                </button>
                <div className="flex items-center gap-2 bg-[#1A0B2E] px-4 py-1.5 rounded-full border border-white/5">
                    <span className="text-lg">🏰</span>
                    <span className="text-sm font-bold text-white uppercase tracking-wider">Room 1/5</span>
                </div>
                <button className="w-10 h-10 rounded-full bg-[#2a1b3d] flex items-center justify-center text-white border border-[#ffffff]/10 hover:bg-[#3d2a55]">
                    <Settings size={20} />
                </button>
            </header>

            {/* Stats Bar - Icon Only */}
            <div className="flex justify-center gap-4 px-4 pb-4">
                <StatCapsule icon={Clock} value="00:45" color="text-purple-400" />
                <StatCapsule icon={Activity} value="98%" color="text-green-400" />
                <StatCapsule icon={BookOpen} value="124" color="text-blue-400" />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto px-6 pb-32 no-scrollbar relative">

                {/* Hero Image / Chapter Header */}
                <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-8 group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800"
                        alt="Library"
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F0518] via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4">
                        <span className="bg-[#7B2CBF] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-[0_0_10px_#7B2CBF]">CHAPTER 3</span>
                        <h1 className="text-2xl font-bold text-white mt-1 text-glow">The Whispering Library</h1>
                    </div>
                </div>

                {/* Text Content with Highlights */}
                <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                    <p>
                        The heavy iron gates creaked open, revealing a swirling vortex of <span className="text-purple-400 font-bold drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">purple mist</span>. It was the Rift, older than the library itself, humming with a strange energy that made the very air vibrate.
                    </p>
                    <p>
                        "Do not look away," the Warden whispered, his voice echoing as if from a great distance. "The text shifts if you blink. Keep your gaze steady, Apprentice."
                    </p>
                    <p>
                        I took a deep breath, focusing my eyes on the glowing runes etched into the archway. As I read them aloud, the mist began to part, revealing rows of infinite bookshelves stretching into the void. Each book pulsed with a heartbeat of its own.
                    </p>
                    <p>
                        A sudden gust of wind turned the pages of a nearby tome. <span className="bg-[#2a1b3d] text-white px-1 rounded border border-purple-500/30">The ink shimmered</span> like liquid starlight. I knew then that this was no ordinary library; it was a prison for stories that refused to end.
                    </p>
                </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0F0518] via-[#0F0518] to-transparent z-20">
                {/* Progress Bar */}
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2 px-1">
                    <span className="text-gray-400">Rift Seal Strength</span>
                    <span className="text-white">85%</span>
                </div>
                <div className="h-3 bg-[#2a1b3d] rounded-full overflow-hidden mb-4 border border-white/5 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-1/2 skew-x-12 animate-shimmer" />
                    <div
                        className="h-full bg-gradient-to-r from-[#7B2CBF] to-[#9D4EDD] shadow-[0_0_15px_#9D4EDD]"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <Button fullWidth variant="primary" size="lg" className="rounded-2xl shadow-[0_0_30px_rgba(157,78,221,0.6)] animate-pulse-slow">
                    <Wand2 className="mr-2" /> Seal the Room
                </Button>
                <p className="text-center text-[10px] text-gray-500 mt-2">Tap to confirm completion & unlock next segment</p>
            </div>

            <EyeTracker />
        </div>
    );
}

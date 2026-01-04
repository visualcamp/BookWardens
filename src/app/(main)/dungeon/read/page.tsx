"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { ArrowLeft, Pause, Eye, Droplets } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ReadingDungeonPage() {
    const [inkLevel, setInkLevel] = useState(0);
    const [isSealed, setIsSealed] = useState(false);

    // Simulate reading progress / ink generation
    useEffect(() => {
        const interval = setInterval(() => {
            setInkLevel((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 0.5; // Slow fill
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const handleSeal = () => {
        setIsSealed(true);
    };

    if (isSealed) {
        return (
            <div className="flex flex-col items-center justify-center h-screen p-6 text-center gap-6 bg-[#0F0518]">
                <div className="w-24 h-24 rounded-full bg-purple-600 shadow-[0_0_50px_rgba(157,78,221,0.8)] flex items-center justify-center animate-pulse">
                    <Droplets size={48} className="text-white" />
                </div>
                <h1 className="text-3xl font-serif font-bold text-white">Rift Sealed!</h1>
                <p className="text-gray-300">You collected <span className="text-purple-400 font-bold">120 Ink</span>. The story is restored.</p>
                <Link href="/dungeon/quiz" className="w-full">
                    <Button fullWidth>Proceed to Trial</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0F0518] text-[#E0E0E0] font-sans leading-relaxed pb-32">
            {/* HUD */}
            <header className="fixed top-0 left-0 w-full p-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent z-50">
                <Link href="/">
                    <ArrowLeft className="text-gray-400" />
                </Link>
                <div className="flex items-center gap-4">
                    {/* Eye Tracker Status */}
                    <div className="flex items-center gap-1 text-green-400 text-xs font-bold bg-green-900/20 px-2 py-1 rounded-full border border-green-500/30">
                        <Eye size={12} />
                        <span>Tracking Active</span>
                    </div>
                    <Pause className="text-gray-400" />
                </div>
            </header>

            {/* Content Area */}
            <main className="pt-20 px-6 max-w-lg mx-auto">
                <h2 className="text-2xl font-serif font-bold mb-6 text-purple-100">Chapter 3: The Whispering Cave</h2>

                <div className="space-y-6 text-lg text-gray-300">
                    <p>
                        The heavy iron gates creaked open, revealing a swirling vortex of <span className="text-purple-400 font-bold text-glow">purple mist</span>. It was the Rift, older than the library itself, humming with a strange energy that made the very air vibrate.
                    </p>
                    <p>
                        "Do not look away," the Warden whispered, his voice echoing as if from a great distance. "The text shifts if you blink. Keep your gaze steady, Apprentice."
                    </p>
                    <p>
                        I took a deep breath, focusing my eyes on the glowing runes etched into the archway. As I read them aloud, the mist began to part, revealing rows of infinite bookshelves stretching into the void. Each book pulsed with a heartbeat of its own.
                    </p>
                    <p>
                        A sudden gust of wind turned the pages of a nearby tome. <span className="underline decoration-purple-500 decoration-wavy decoration-2 underline-offset-4">The ink shimmered</span> like liquid starlight. I knew then that this was no ordinary library; it was a prison for stories that refused to end.
                    </p>
                    <p>
                        The shadows danced along the walls, forming shapes that seemed almost human. Could they be the lost readers of the past? Or merely figments of a mind strained by the arcane energies of this place? I pushed the thought aside.
                    </p>
                </div>
            </main>

            {/* Bottom Ink Gauge */}
            <div className="fixed bottom-0 w-full max-w-[480px] p-6 bg-gradient-to-t from-black via-black/90 to-transparent z-50">
                <div className="flex justify-between text-xs font-bold text-purple-300 mb-2">
                    <span>RIFT SEAL STRENGTH</span>
                    <span>{Math.floor(inkLevel)}%</span>
                </div>
                {/* Progress Bar Container */}
                <div className="h-4 bg-gray-800 rounded-full overflow-hidden border border-white/10 relative">
                    {/* Liquid Ink Fill */}
                    <motion.div
                        className="h-full bg-gradient-to-r from-purple-800 via-purple-600 to-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.8)] relative"
                        style={{ width: `${inkLevel}%` }}
                        layoutId="ink-bar"
                    >
                        {/* Particles/Bubbles inside bar (simulated with bg) */}
                    </motion.div>
                </div>

                {/* Final Action */}
                <div className="mt-4">
                    <Button
                        fullWidth
                        disabled={inkLevel < 100}
                        onClick={handleSeal}
                        className={inkLevel >= 100 ? "animate-pulse-slow shadow-[0_0_30px_rgba(157,78,221,0.6)]" : "opacity-50"}
                    >
                        {inkLevel >= 100 ? "✨ Seal the Room" : "Reading..."}
                    </Button>
                </div>
            </div>
        </div>
    );
}

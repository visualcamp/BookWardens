"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Flame, Clock, Swords, Book } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function TodayHome() {
    return (
        <div className="flex flex-col gap-6">
            {/* Header Stats */}
            <section className="flex items-center justify-between">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-bold font-serif italic">Hello, Warden</h1>
                    <p className="text-sm text-[#A0A0A0]">The rift is unstable today.</p>
                </div>
                <div className="flex items-center gap-2 bg-[#252525] px-3 py-1.5 rounded-full border border-[#333]">
                    <Flame size={16} className="text-orange-500 fill-orange-500" />
                    <span className="text-sm font-bold">12 Day Streak</span>
                </div>
            </section>

            {/* Main Hero Card: Today's Dungeon */}
            <section>
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-sm font-semibold uppercase tracking-wider text-[#A0A0A0]">Today&apos;s Dungeon</h2>
                    <div className="flex items-center gap-1 text-[#9D4EDD] text-xs">
                        <Clock size={12} />
                        <span>Resets in 10:24</span>
                    </div>
                </div>

                <Card hoverEffect className="relative overflow-hidden group aspect-[3/4] flex flex-col justify-end p-6 border-[#9D4EDD]/30 shadow-[0_0_20px_rgba(157,78,221,0.1)]">
                    {/* Background Image Placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-700" />

                    <div className="relative z-20 flex flex-col gap-3">
                        <div className="bg-[#9D4EDD] w-fit px-2 py-0.5 rounded text-[10px] font-bold text-white uppercase">
                            Lv. 3 • Adventure
                        </div>
                        <h3 className="text-2xl font-serif font-bold leading-tight">
                            The Adventures of<br />Tom Sawyer
                        </h3>
                        <p className="text-sm text-gray-300 line-clamp-2">
                            Tom falls in love with Becky Thatcher, a new girl in town, and persuades her to get engaged...
                        </p>

                        <div className="mt-2 grid grid-cols-2 gap-2">
                            <div className="bg-black/40 backdrop-blur-sm rounded p-2 flex items-center gap-2 border border-white/10">
                                <Swords size={16} className="text-[#E0AAFF]" />
                                <div className="text-xs">
                                    <div className="text-gray-400">Boss</div>
                                    <div className="font-semibold">Injun Joe</div>
                                </div>
                            </div>
                            <div className="bg-black/40 backdrop-blur-sm rounded p-2 flex items-center gap-2 border border-white/10">
                                <Book size={16} className="text-[#4CC9F0]" />
                                <div className="text-xs">
                                    <div className="text-gray-400">Pages</div>
                                    <div className="font-semibold">3 Chapters</div>
                                </div>
                            </div>
                        </div>

                        <Link href="/dungeon/word">
                            <Button className="mt-2 w-full shadow-[0_0_20px_rgba(157,78,221,0.4)] animate-pulse-slow">
                                Enter Rift
                            </Button>
                        </Link>
                    </div>
                </Card>
            </section>

            {/* Daily Progress Stepper */}
            <section>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#A0A0A0] mb-3">Daily Ritual</h2>
                <Card className="p-4 flex items-center justify-between gap-2">
                    {['Word', 'Read', 'Quiz', 'Boss'].map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 flex-1">
                            <div className={clsx(
                                "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-colors",
                                idx === 0 ? "border-[#9D4EDD] bg-[#9D4EDD] text-white" : "border-[#333] bg-[#252525] text-[#5d5d5d]"
                            )}>
                                {idx + 1}
                            </div>
                            <span className={clsx("text-[10px] uppercase font-semibold", idx === 0 ? "text-[#E0E0E0]" : "text-[#5d5d5d]")}>
                                {step}
                            </span>
                        </div>
                    ))}
                </Card>
            </section>
        </div>
    );
}

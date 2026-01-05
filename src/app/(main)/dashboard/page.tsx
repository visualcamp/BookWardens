"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Flame, Star, Zap, ChevronRight, Trophy, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DashboardPage() {
    return (
        <div className="pb-24 space-y-6">
            {/* Header / Greeting */}
            <header className="flex justify-between items-center mb-2">
                <div>
                    <h1 className="text-2xl font-serif font-bold text-white">Hello, Warden</h1>
                    <p className="text-xs text-gray-400">The Rift awaits your command.</p>
                </div>
                <div className="flex items-center gap-1 bg-yellow-900/30 px-3 py-1 rounded-full border border-yellow-500/30">
                    <Flame size={14} className="text-yellow-500" />
                    <span className="text-yellow-400 font-bold text-sm">3 Day Streak</span>
                </div>
            </header>

            {/* Main Action Card (Today's Ritual) */}
            <section className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/10 rounded-2xl blur-xl" />
                <Card className="relative border-purple-500/50 overflow-hidden group">
                    <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Sparkles size={80} />
                    </div>

                    <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                            <span className="bg-purple-600 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow-[0_0_10px_#9333ea]">
                                Daily Ritual
                            </span>
                            <span className="text-gray-400 text-xs">10 min remaining</span>
                        </div>

                        <h2 className="text-3xl font-serif font-bold text-white mb-2 text-glow">It's Time to Forge</h2>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            The Ink Shadows are gathering. Complete your daily reading to push them back.
                        </p>

                        <Link href="/dungeon/word">
                            <Button fullWidth size="lg" className="shadow-[0_0_20px_rgba(157,78,221,0.6)] animate-pulse-slow">
                                <Zap className="mr-2 fill-white" size={18} /> Enter Rift
                            </Button>
                        </Link>
                    </div>
                </Card>
            </section>

            {/* Progress Stepper */}
            <section>
                <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">Today's Progress</h3>
                <div className="flex justify-between items-center relative px-2">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -z-10" />

                    {/* Steps */}
                    {[
                        { label: "Word", status: "done" },
                        { label: "Read", status: "current" },
                        { label: "Quiz", status: "locked" },
                        { label: "Boss", status: "locked" }
                    ].map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 bg-[#0F0518] px-2">
                            <div className={`
                                w-8 h-8 rounded-full flex items-center justify-center border-2
                                ${step.status === 'done' ? 'bg-green-500 border-green-500 text-black' :
                                    step.status === 'current' ? 'bg-purple-600 border-purple-400 text-white animate-pulse' :
                                        'bg-gray-900 border-gray-700 text-gray-700'}
                            `}>
                                {step.status === 'done' ? "✓" : idx + 1}
                            </div>
                            <span className={`text-[10px] font-bold ${step.status === 'locked' ? 'text-gray-600' : 'text-gray-300'}`}>
                                {step.label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Recommended Quest */}
            <section className="pt-2">
                <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">Side Quest</h3>
                <Card className="p-4 flex items-center gap-4 bg-[#1A0B2E] border-white/5 hover:border-purple-500/30 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-orange-900/30 flex items-center justify-center text-orange-400 border border-orange-500/20">
                        <Trophy size={20} />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-white font-bold text-sm">Review Yesterday's Words</h4>
                        <p className="text-xs text-gray-500">Earn 50 bonus Ink</p>
                    </div>
                    <ChevronRight size={16} className="text-gray-600" />
                </Card>
            </section>
        </div>
    );
}

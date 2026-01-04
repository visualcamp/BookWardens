"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Check, Star, ArrowRight, Share2, Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ResultPage() {
    return (
        <div className="flex flex-col min-h-screen py-10 px-6 max-w-lg mx-auto pb-32">
            <header className="text-center mb-8">
                <h1 className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">Dungeon Cleared</h1>
                <h2 className="text-3xl font-serif font-bold text-white">The Whispering Library</h2>
            </header>

            <div className="flex-1 flex flex-col gap-6">
                {/* Main Rank */}
                <div className="flex justify-center">
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="w-32 h-32 rounded-full border-4 border-yellow-400 bg-gradient-to-br from-yellow-600 to-yellow-800 flex items-center justify-center shadow-[0_0_50px_rgba(234,179,8,0.4)]"
                    >
                        <span className="text-6xl font-serif font-bold text-white drop-shadow-md">S</span>
                    </motion.div>
                </div>

                {/* Rewards */}
                <Card className="p-6 bg-[#1A0B2E]/90 border-purple-500/30">
                    <h3 className="text-xs font-bold text-gray-400 uppercase mb-4 text-center">Rewards Appraised</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-purple-600 flex items-center justify-center">💧</div>
                                <span className="font-bold">Ink Gathered</span>
                            </div>
                            <span className="font-mono text-purple-300">+240</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-cyan-600 flex items-center justify-center">ᚲ</div>
                                <span className="font-bold">Runes Etched</span>
                            </div>
                            <span className="font-mono text-cyan-300">+3</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-yellow-500/20 shadow-[0_0_10px_rgba(234,179,8,0.1)]">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-yellow-600 flex items-center justify-center">💎</div>
                                <span className="font-bold text-yellow-200">Bonus Gem</span>
                            </div>
                            <span className="text-xs text-yellow-500 font-bold">PERFECT CLEAR</span>
                        </div>
                    </div>
                </Card>

                {/* Stats Summary */}
                <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="p-3 bg-white/5 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Reading Speed</div>
                        <div className="text-lg font-bold">210 WPM</div>
                    </div>
                    <div className="p-3 bg-white/5 rounded-lg">
                        <div className="text-xs text-gray-500 mb-1">Comprehension</div>
                        <div className="text-lg font-bold text-green-400">100%</div>
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-8 space-y-3">
                <Link href="/">
                    <Button fullWidth className="animate-pulse-slow">Return to HQ</Button>
                </Link>
                <Button variant="ghost" fullWidth className="text-sm">
                    <Share2 size={16} className="mr-2" /> Share Report
                </Button>
            </div>
        </div>
    );
}

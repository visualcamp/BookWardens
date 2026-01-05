"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Flame, Trophy, Sparkles, ChevronRight, Book, Zap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BOOKS } from "@/data/books";

export default function DashboardPage() {
    // Featured Books (Randomly pick 3 for now)
    const featuredBooks = BOOKS.slice(0, 3);

    return (
        <div className="pb-24 space-y-8 font-sans">
            {/* Header / Greeting */}
            <header className="flex justify-between items-end px-2">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-3xl font-serif font-bold text-white leading-none mb-1">
                            Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Warden</span>
                        </h1>
                        <p className="text-xs text-gray-400 tracking-wide">The Rift is unstable today.</p>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2 bg-[#2a1b3d] px-3 py-1.5 rounded-full border border-purple-500/30 shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                >
                    <Flame size={16} className="text-orange-500 fill-orange-500 animate-pulse" />
                    <span className="text-orange-100 font-bold text-sm">3 Day Streak</span>
                </motion.div>
            </header>

            {/* Main Action Card (Today's Ritual) */}
            <section className="relative px-2">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/10 rounded-3xl blur-2xl -z-10" />
                <Card className="relative border-purple-500/50 overflow-hidden group hover:border-purple-400 transition-colors duration-500">
                    {/* Background Detail */}
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl group-hover:bg-purple-600/30 transition-all" />

                    <div className="p-6 relative z-10">
                        <div className="flex items-start justify-between mb-6">
                            <span className="bg-[#7B2CBF] text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded shadow-[0_0_10px_#7B2CBF]">
                                Daily Ritual
                            </span>
                            <span className="text-purple-300 text-xs font-mono bg-black/30 px-2 py-1 rounded">
                                00:10:00 LEFT
                            </span>
                        </div>

                        <h2 className="text-3xl font-serif font-bold text-white mb-2 text-glow">It's Time to Forge</h2>
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed max-w-[80%]">
                            The Ink Shadows are gathering. Complete your daily reading to push them back and restore the archives.
                        </p>

                        <div className="flex gap-3">
                            <Link href="/dungeon/word" className="flex-1">
                                <Button fullWidth size="lg" className="shadow-[0_0_20px_rgba(157,78,221,0.6)] animate-pulse-slow">
                                    <Zap className="mr-2 fill-white" size={18} /> Enter Rift
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Card>
            </section>

            {/* Progress Stepper */}
            <section className="px-2">
                <h3 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest pl-1">Today's Progress</h3>
                <div className="flex justify-between items-center relative px-4 py-2">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-gray-800 -z-10" />
                    <div className="absolute top-1/2 left-6 right-1/2 h-0.5 bg-gradient-to-r from-green-500 to-purple-500 -z-10" />

                    {/* Steps */}
                    {[
                        { label: "Word", status: "done", icon: "✓" },
                        { label: "Read", status: "current", icon: "2" },
                        { label: "Quiz", status: "locked", icon: "3" },
                        { label: "Boss", status: "locked", icon: "4" }
                    ].map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2">
                            <motion.div
                                initial={{ scale: 0.8 }} animate={{ scale: 1 }}
                                className={`
                                    w-10 h-10 rounded-xl flex items-center justify-center border-2 shadow-lg z-10
                                    ${step.status === 'done' ? 'bg-green-500 border-green-400 text-black shadow-green-500/30' :
                                        step.status === 'current' ? 'bg-[#1A0B2E] border-purple-500 text-purple-400 shadow-purple-500/50' :
                                            'bg-[#0F0518] border-gray-800 text-gray-700'}
                                `}
                            >
                                <span className="font-bold font-mono">{step.icon}</span>
                            </motion.div>
                            <span className={`text-[10px] font-bold uppercase ${step.status === 'done' ? 'text-green-500' : step.status === 'current' ? 'text-purple-400' : 'text-gray-600'}`}>
                                {step.label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Recommended Books (Horizontal Scroll) */}
            <section className="pl-2">
                <div className="flex justify-between items-center pr-4 mb-4">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Recommended Reads</h3>
                    <Link href="/library" className="text-xs text-purple-400 font-bold hover:text-purple-300">View All</Link>
                </div>

                <div className="flex gap-4 overflow-x-auto pb-4 pr-4 pl-1 no-scrollbar snap-x">
                    {featuredBooks.map((book, idx) => (
                        <Link key={book.id} href={`/library/${book.id}`} className="snap-center">
                            <motion.div
                                className="w-[140px] flex-shrink-0"
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-3 border border-white/10 shadow-lg group">
                                    <img src={book.coverUrl} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" alt={book.title} />
                                    <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-bold text-white border border-white/20">
                                        {book.level}★
                                    </div>
                                </div>
                                <h4 className="text-white font-bold text-sm truncate leading-tight">{book.title}</h4>
                                <p className="text-xs text-gray-500 truncate">{book.author}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Side Quest */}
            <section className="px-2">
                <h3 className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest pl-1">Side Quest</h3>
                <Card className="p-4 flex items-center gap-4 bg-[#1A0B2E] border-white/5 hover:border-purple-500/30 transition-colors group cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-900/40 to-orange-900/40 flex items-center justify-center text-yellow-400 border border-yellow-500/20 group-hover:scale-110 transition-transform">
                        <Trophy size={24} />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-white font-bold text-sm group-hover:text-purple-300 transition-colors">Review Yesterday's Words</h4>
                        <p className="text-xs text-gray-500">Reward: <span className="text-yellow-500 font-bold">50 Raw Ink</span></p>
                    </div>
                    <ChevronRight size={18} className="text-gray-600 group-hover:translate-x-1 transition-transform" />
                </Card>
            </section>
        </div>
    );
}

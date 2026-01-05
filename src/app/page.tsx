"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

export default function IntroPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F0518] relative overflow-hidden px-6 text-center">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-20 blur-sm scale-110 animate-pulse-slow" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0518] via-[#0F0518]/80 to-transparent" />

            {/* Glowing Rune Circle Animation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-purple-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] border border-cyan-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center gap-6"
            >
                {/* Logo Area */}
                <div className="relative">
                    <motion.div
                        animate={{
                            boxShadow: ["0 0 20px #9D4EDD", "0 0 50px #9D4EDD", "0 0 20px #9D4EDD"]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-24 h-24 bg-[#1A0B2E] rounded-2xl flex items-center justify-center border border-purple-400 rotate-45 transform"
                    >
                        <BookOpen size={48} className="text-white -rotate-45" />
                    </motion.div>
                </div>

                {/* Title */}
                <div>
                    <motion.h1
                        className="text-4xl font-serif font-bold text-white mb-2 leading-tight"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        The Book <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Wardens</span>
                    </motion.h1>
                    <p className="text-gray-400 text-sm tracking-widest uppercase">Rift of Pages</p>
                </div>

                <div className="h-8" />

                {/* CTA Button */}
                <Link href="/signup">
                    <Button
                        size="lg"
                        className="w-full min-w-[200px] text-lg font-serif shadow-[0_0_30px_rgba(157,78,221,0.5)] animate-bounce-subtle"
                    >
                        Enter the Rift <ArrowRight className="ml-2" />
                    </Button>
                </Link>

                <p className="text-xs text-gray-600 mt-8">
                    v1.0.0-mvp
                </p>
            </motion.div>
        </div>
    );
}

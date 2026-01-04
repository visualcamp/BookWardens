"use client";

import Button from "@/components/ui/Button";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center gap-8 w-full animate-fade-in">
            {/* Brand Logo/Splash */}
            <div className="flex flex-col items-center gap-4 py-12">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#9D4EDD] to-[#3C096C] flex items-center justify-center shadow-[0_0_30px_rgba(157,78,221,0.5)] animate-pulse-slow">
                    <BookOpen size={48} className="text-white" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-white text-center">
                    The Book Wardens
                    <span className="block text-sm font-normal text-[#9D4EDD] mt-2 tracking-widest uppercase">
                        Rift of Pages
                    </span>
                </h1>
            </div>

            {/* Login Form Placeholder */}
            <div className="w-full flex flex-col gap-4">
                <div className="space-y-2">
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full h-12 bg-[#252525] border border-[#333] rounded-lg px-4 text-[#E0E0E0] focus:border-[#9D4EDD] focus:outline-none transition-colors"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-12 bg-[#252525] border border-[#333] rounded-lg px-4 text-[#E0E0E0] focus:border-[#9D4EDD] focus:outline-none transition-colors"
                    />
                </div>

                <Link href="/">
                    <Button fullWidth size="lg">Log In</Button>
                </Link>

                <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-[#333]" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-[#121212] px-2 text-[#5d5d5d]">Or continue with</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <Button variant="secondary" className="w-full">Google</Button>
                    <Button variant="secondary" className="w-full">Guest</Button>
                </div>
            </div>

            <p className="text-sm text-[#A0A0A0]">
                Don&apos;t have an account? <span className="text-[#9D4EDD] font-semibold cursor-pointer">Sign up</span>
            </p>
        </div>
    );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, User, Shield, Sword, Scroll } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SetupPage() {
    const router = useRouter();
    const [step, setStep] = useState(1); // 1: Nickname, 2: Class Selection
    const [nickname, setNickname] = useState("");
    const [selectedClass, setSelectedClass] = useState<string | null>(null);

    const CLASSES = [
        { id: "scribe", name: "Rune Scribe", icon: Scroll, desc: "Masters of vocabulary. High word retention.", color: "text-cyan-400", border: "border-cyan-500" },
        { id: "knight", name: "Ink Knight", icon: Sword, desc: "Defenders of stories. High reading stamina.", color: "text-red-400", border: "border-red-500" },
        { id: "sage", name: "Void Sage", icon: Shield, desc: "Sealers of rifts. Balanced stats.", color: "text-purple-400", border: "border-purple-500" },
    ];

    const handleNext = () => {
        if (step === 1 && nickname.trim()) {
            setStep(2);
        } else if (step === 2 && selectedClass) {
            // Save setup data (mock) and go to main
            console.log("Setup complete:", { nickname, selectedClass });
            router.push("/dungeon/tutorial"); // Go to Tutorial first
        }
    };

    return (
        <div className="min-h-screen bg-[#0F0518] text-white p-6 font-sans">
            {/* Header / Back */}
            {step === 2 && (
                <button onClick={() => setStep(1)} className="text-gray-500 mb-8 flex items-center gap-2">
                    <ArrowLeft size={18} /> Back
                </button>
            )}

            <div className="max-w-md mx-auto mt-10">
                {/* Step Indicator */}
                <div className="flex gap-2 mb-8 justify-center">
                    <div className={`h-1 w-12 rounded-full ${step >= 1 ? 'bg-purple-500' : 'bg-gray-800'}`} />
                    <div className={`h-1 w-12 rounded-full ${step >= 2 ? 'bg-purple-500' : 'bg-gray-800'}`} />
                </div>

                {/* Step 1: Nickname */}
                {step === 1 && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="text-center">
                            <h2 className="text-2xl font-serif font-bold text-white mb-2">Identify Yourself</h2>
                            <p className="text-gray-400">What shall we call you, Warden?</p>
                        </div>

                        <div className="bg-[#1A0B2E] p-1 rounded-xl border border-white/10 flex items-center gap-3 px-4 py-3 focus-within:border-purple-500 transition-colors">
                            <User className="text-gray-500" />
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="bg-transparent w-full outline-none text-white placeholder-gray-600 font-bold"
                                value={nickname}
                                onChange={(e) => setNickname(e.target.value)}
                                autoFocus
                            />
                        </div>

                        <div className="mt-8">
                            <Button
                                fullWidth
                                onClick={handleNext}
                                disabled={!nickname.trim()}
                                size="lg"
                            >
                                Continue <ArrowRight size={18} />
                            </Button>
                        </div>
                    </motion.div>
                )}

                {/* Step 2: Class Selection */}
                {step === 2 && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-4"
                    >
                        <div className="text-center mb-4">
                            <h2 className="text-2xl font-serif font-bold text-white mb-2">Choose Your Path</h2>
                            <p className="text-gray-400">Your origin defines your starting stats.</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            {CLASSES.map((cls) => (
                                <button
                                    key={cls.id}
                                    onClick={() => setSelectedClass(cls.id)}
                                    className={`
                                        relative p-4 rounded-xl border-2 text-left transition-all
                                        ${selectedClass === cls.id
                                            ? `${cls.border} bg-[#2a1b3d] shadow-[0_0_20px_rgba(0,0,0,0.5)]`
                                            : "border-white/5 bg-[#1A0B2E] hover:bg-[#251040]"}
                                    `}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-full bg-black/30 ${cls.color}`}>
                                            <cls.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className={`font-serif font-bold text-lg ${selectedClass === cls.id ? 'text-white' : 'text-gray-300'}`}>
                                                {cls.name}
                                            </h3>
                                            <p className="text-xs text-gray-500 leading-tight">
                                                {cls.desc}
                                            </p>
                                        </div>
                                    </div>
                                    {selectedClass === cls.id && (
                                        <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full shadow-[0_0_10px_#4ade80]" />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="mt-8">
                            <Button
                                fullWidth
                                onClick={handleNext}
                                disabled={!selectedClass}
                                size="lg"
                                className={selectedClass ? "animate-pulse-slow shadow-[0_0_30px_rgba(157,78,221,0.5)]" : ""}
                            >
                                Complete Setup
                            </Button>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}

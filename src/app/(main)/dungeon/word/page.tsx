"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Volume2, RotateCcw, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const WORDS = [
    {
        id: 1,
        word: "Luminous",
        phonetic: "/ˈluːmɪnəs/",
        meaning: "Full of or shedding light; bright or shining, especially in the dark.",
        example: "The luminous dial of the clock glowed in the darkness.",
        image: "https://images.unsplash.com/photo-1504704911898-68304a7d2807?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 2,
        word: "Cryptic",
        phonetic: "/ˈkrɪptɪk/",
        meaning: "Having a meaning that is mysterious or obscure.",
        example: "He found a cryptic note left on his desk.",
        image: "https://images.unsplash.com/photo-1518105570919-e342af1a8256?q=80&w=600&auto=format&fit=crop"
    }
];

export default function WordDungeonPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const currentWord = WORDS[currentIndex];

    const handleNext = () => {
        setIsFlipped(false);
        if (currentIndex < WORDS.length - 1) {
            setTimeout(() => setCurrentIndex(prev => prev + 1), 300);
        } else {
            setShowResult(true);
        }
    };

    if (showResult) {
        return (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-140px)] gap-6 text-center">
                <div className="w-20 h-20 rounded-full bg-purple-600 shadow-[0_0_30px_rgba(157,78,221,0.6)] flex items-center justify-center">
                    <Check size={40} className="text-white" />
                </div>
                <div>
                    <h1 className="text-3xl font-serif font-bold mb-2">Words Forged!</h1>
                    <p className="text-gray-400">You gathered 2 Runes from this session.</p>
                </div>
                <Link href="/dungeon/read" className="w-full">
                    <Button fullWidth>Enter the Rift (Read)</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-[calc(100vh-140px)] py-4">
            <header className="flex justify-between items-center mb-6">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Word Forge</span>
                <span className="text-sm font-bold text-purple-400">{currentIndex + 1} / {WORDS.length}</span>
            </header>

            <div className="flex-1 perspective-1000 relative">
                <div
                    className="relative w-full h-full cursor-pointer transition-transform duration-700 transform-style-3d grid place-items-center"
                    onClick={() => setIsFlipped(!isFlipped)}
                    style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
                >
                    {/* Front */}
                    <Card className="absolute inset-0 w-full h-full backface-hidden p-8 flex flex-col items-center justify-center gap-6 border-purple-500/30">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-purple-500/50 shadow-[0_0_20px_rgba(157,78,221,0.3)]">
                            <img src={currentWord.image} alt={currentWord.word} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center">
                            <h2 className="text-4xl font-serif font-bold mb-2">{currentWord.word}</h2>
                            <p className="text-gray-500 font-mono text-sm">{currentWord.phonetic}</p>
                        </div>
                        <div className="mt-auto text-xs text-gray-500 animate-pulse">Tap to Reveal Meaning</div>
                    </Card>

                    {/* Back */}
                    <Card className="absolute inset-0 w-full h-full backface-hidden p-8 flex flex-col items-center justify-center gap-6 border-purple-500/30 rotate-y-180 bg-[#1A0B2E]">
                        <div className="flex items-center gap-2 text-purple-400">
                            <Volume2 size={24} />
                            <span className="text-xs uppercase font-bold">Pronunciation</span>
                        </div>
                        <div className="text-center space-y-4">
                            <h3 className="text-2xl font-bold text-white">{currentWord.word}</h3>
                            <p className="text-lg text-gray-300 leading-relaxed italic">"{currentWord.meaning}"</p>
                            <div className="bg-white/5 p-4 rounded-xl">
                                <p className="text-sm text-gray-400">Ex: {currentWord.example}</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Actions */}
            <div className="mt-8 grid grid-cols-2 gap-4">
                <Button variant="secondary" onClick={handleNext} disabled={!isFlipped}>
                    <X size={20} className="mr-2 text-red-400" /> Hard
                </Button>
                <Button onClick={handleNext} disabled={!isFlipped}>
                    <Check size={20} className="mr-2 text-green-400" /> Easy
                </Button>
            </div>
        </div>
    );
}

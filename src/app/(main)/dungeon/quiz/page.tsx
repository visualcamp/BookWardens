"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Brain, Gem, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const QUESTIONS = [
    {
        id: 1,
        question: "Why did the protagonist hide the key?",
        options: [
            "To save her brother from the curse.",
            "Because she was scared of the dark.",
            "It was an accident she didn't mean to.",
            "The Warden told her to destroy it."
        ],
        answer: 0
    },
    {
        id: 2,
        question: "What does the 'Purple Mist' represent in this chapter?",
        options: [
            "A poisonous gas trap.",
            "The chaotic energy of the Rift.",
            "The arrival of a friendly spirit.",
            "Just a weather phenomenon."
        ],
        answer: 1
    }
];

export default function QuizDungeonPage() {
    const [currentQ, setCurrentQ] = useState(0);
    const [selected, setSelected] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleCheck = () => {
        if (selected === null) return;

        const correct = selected === QUESTIONS[currentQ].answer;
        setIsCorrect(correct);
        if (correct) setScore(prev => prev + 1);

        setTimeout(() => {
            if (currentQ < QUESTIONS.length - 1) {
                setCurrentQ(prev => prev + 1);
                setSelected(null);
                setIsCorrect(null);
            } else {
                setFinished(true);
            }
        }, 1500); // Wait a bit to show feedback
    };

    if (finished) {
        return (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-140px)] gap-6 text-center px-6">
                <div className="relative">
                    <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20" />
                    <Gem size={80} className="text-cyan-400 relative z-10 animate-bounce" />
                </div>
                <div>
                    <h1 className="text-3xl font-serif font-bold mb-2 text-white">Understanding Verified</h1>
                    <p className="text-gray-400">
                        You sought the truth and found it.<br />
                        <span className="text-cyan-400 font-bold">{score} / {QUESTIONS.length} Gems Earned</span>
                    </p>
                </div>
                <Link href="/dungeon/boss" className="w-full">
                    <Button fullWidth className="animate-pulse-slow shadow-[0_0_20px_rgba(157,78,221,0.5)]">
                        Face the Boss
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-[calc(100vh-140px)] py-4 max-w-lg mx-auto">
            {/* Header */}
            <header className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                    <Brain size={18} className="text-pink-500" />
                    <span className="text-sm font-bold text-gray-300 uppercase tracking-widest">Mind Trial</span>
                </div>
                <div className="flex gap-1">
                    {QUESTIONS.map((_, idx) => (
                        <div key={idx} className={`h-1.5 w-6 rounded-full ${idx <= currentQ ? 'bg-pink-500' : 'bg-gray-700'}`} />
                    ))}
                </div>
            </header>

            {/* Question Card */}
            <motion.div
                key={currentQ}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col justify-center"
            >
                <Card className="p-6 border-pink-500/20 bg-gradient-to-br from-[#1A0B2E] to-[#251030]">
                    <h2 className="text-xl font-bold font-serif mb-6 leading-relaxed">
                        {QUESTIONS[currentQ].question}
                    </h2>

                    <div className="flex flex-col gap-3">
                        {QUESTIONS[currentQ].options.map((opt, idx) => (
                            <button
                                key={idx}
                                onClick={() => !isCorrect && setSelected(idx)}
                                disabled={isCorrect !== null}
                                className={`
                                    p-4 rounded-xl text-left text-sm font-semibold border-2 transition-all
                                    ${selected === idx
                                        ? (isCorrect !== null
                                            ? (idx === QUESTIONS[currentQ].answer ? "border-green-500 bg-green-500/10 text-green-100" : "border-red-500 bg-red-500/10 text-red-100")
                                            : "border-pink-500 bg-pink-500/10 text-white")
                                        : "border-white/5 bg-black/20 text-gray-400 hover:bg-white/5"
                                    }
                                `}
                            >
                                <div className="flex items-center justify-between">
                                    <span>{opt}</span>
                                    {selected === idx && isCorrect === null && <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse" />}
                                </div>
                            </button>
                        ))}
                    </div>
                </Card>
            </motion.div>

            {/* Action */}
            <div className="mt-8">
                <Button
                    fullWidth
                    onClick={handleCheck}
                    disabled={selected === null || isCorrect !== null}
                    className={selected !== null && isCorrect === null ? "bg-pink-600 hover:bg-pink-500" : ""}
                >
                    {isCorrect === null ? "Confirm Answer" : (isCorrect ? "Correct!" : "Incorrect")}
                </Button>
            </div>
        </div>
    );
}

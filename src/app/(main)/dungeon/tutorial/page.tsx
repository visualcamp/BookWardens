"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { ArrowRight, Bot, BookOpen, Brain, CheckCircle, Award } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Tutorial Steps Data
const STEPS = [
    {
        id: "intro",
        title: "Welcome, Initiate.",
        content: "I am The Coach. I will guide you through your first Rift sealing ritual. It consists of three stages: Word Forging, Essence Reading, and Mind Trial.",
        icon: Bot,
        color: "text-cyan-400"
    },
    {
        id: "word",
        title: "Stage 1: Word Forging",
        content: "Before entering, you must arm yourself with Knowledge. Learn the keywords that will appear in the text.",
        task: "Select the correct meaning for 'Ephemeral'.",
        options: ["Lasting forever", "Short-lived", "Heavy"],
        answer: 1,
        icon: BookOpen,
        color: "text-purple-400"
    },
    {
        id: "read",
        title: "Stage 2: Essence Reading",
        content: "Now, face the text. The Rift is unstable. Read carefully to gather Ink.",
        task: "Read this sentence: 'The ephemeral mist vanished with the morning sun.'",
        actionLabel: "I have read it.",
        icon: BookOpen,
        color: "text-pink-400"
    },
    {
        id: "quiz",
        title: "Stage 3: Mind Trial",
        content: "Prove your understanding to seal the Rift permanently.",
        task: "What happened to the mist?",
        options: ["It turned into rain", "It vanished with the sun", "It froze"],
        answer: 1,
        icon: Brain,
        color: "text-blue-400"
    },
    {
        id: "complete",
        title: "Training Complete!",
        content: "You are ready, Warden. The real challenges await you in the Dashboard.",
        icon: Award,
        color: "text-yellow-400"
    }
];

export default function TutorialPage() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);

    const stepData = STEPS[currentStep];
    const isLastStep = currentStep === STEPS.length - 1;

    const handleNext = () => {
        if (isLastStep) {
            router.push("/dashboard");
        } else {
            setCurrentStep(prev => prev + 1);
            setSelectedOption(null);
        }
    };

    const handleOptionSelect = (idx: number) => {
        if (selectedOption !== null) return;
        setSelectedOption(idx);

        // Auto advance if correct (simplified for tutorial)
        if (stepData.answer !== undefined && idx === stepData.answer) {
            setTimeout(handleNext, 1000);
        } else if (stepData.answer === undefined) {
            handleNext();
        }
    };

    return (
        <div className="min-h-screen bg-[#0F0518] flex flex-col p-6 font-sans">
            {/* Header / Progress */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                    <Bot className="text-cyan-400" />
                    <span className="text-gray-400 text-xs font-bold uppercase">The Coach</span>
                </div>
                <div className="flex gap-1">
                    {STEPS.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1 w-6 rounded-full transition-all duration-300 ${idx <= currentStep ? 'bg-cyan-500' : 'bg-gray-800'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Main Content Card */}
            <div className="flex-1 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className="p-6 border-cyan-500/30 bg-gradient-to-br from-[#1A0B2E] to-[#150a25]">
                            <div className={`w-12 h-12 rounded-full bg-black/40 flex items-center justify-center mb-4 ${stepData.color} border border-white/10`}>
                                <stepData.icon size={24} />
                            </div>

                            <h1 className="text-2xl font-serif font-bold text-white mb-4">{stepData.title}</h1>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                {stepData.content}
                            </p>

                            {/* Interaction Area */}
                            <div className="space-y-4">
                                {stepData.task && (
                                    <div className="bg-[#0F0518] p-4 rounded-lg border border-white/5 mb-4">
                                        <p className="text-sm font-bold text-cyan-200 mb-2">TASK</p>
                                        <p className="text-white italic">"{stepData.task}"</p>
                                    </div>
                                )}

                                {/* Options Buttons */}
                                {stepData.options && (
                                    <div className="flex flex-col gap-2">
                                        {stepData.options.map((opt, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleOptionSelect(idx)}
                                                disabled={selectedOption !== null}
                                                className={`
                                                    p-3 rounded-lg text-left text-sm border transition-all
                                                    ${selectedOption === idx
                                                        ? (idx === stepData.answer ? 'bg-green-500/20 border-green-500 text-green-300' : 'bg-red-500/20 border-red-500')
                                                        : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-300'}
                                                `}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* Action Button (Reading or Complete) */}
                                {(stepData.actionLabel || isLastStep) && (
                                    <Button
                                        fullWidth
                                        onClick={handleNext}
                                        className={isLastStep ? "shadow-[0_0_30px_rgba(250,204,21,0.5)] animate-pulse-slow" : ""}
                                        variant={isLastStep ? "primary" : "outline"}
                                    >
                                        {isLastStep ? "Enter Dashboard" : stepData.actionLabel}
                                    </Button>
                                )}
                            </div>
                        </Card>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

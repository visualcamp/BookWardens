"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { useState } from "react";
import clsx from "clsx";
import { Check } from "lucide-react";

export default function ProfileSetup() {
    const [step, setStep] = useState(1);
    const [identity, setIdentity] = useState<string | null>(null);
    const [goal, setGoal] = useState<string | null>(null);

    const steps = [
        {
            id: 1,
            title: "Identity",
            question: "Who are you mainly?",
            options: ["Student (Elementary/Middle/High)", "Adult Learner", "Avid Reader"],
            value: identity,
            setValue: setIdentity,
        },
        {
            id: 2,
            title: "Goal",
            question: "What is your main goal?",
            options: ["Build a Daily Habit", "Read Faster", "Deep Comprehension", "Expand Vocabulary"],
            value: goal,
            setValue: setGoal,
        },
        // Add more steps as needed
    ];

    const currentStepData = steps[step - 1];

    const handleNext = () => {
        if (step < steps.length) {
            setStep(step + 1);
        } else {
            // Finish
            window.location.href = "/";
        }
    };

    return (
        <div className="flex flex-col justify-between h-[80vh] w-full max-w-md mx-auto">
            <div className="space-y-6">
                {/* Progress */}
                <div className="flex gap-2">
                    {steps.map((s) => (
                        <div
                            key={s.id}
                            className={clsx(
                                "h-1 flex-1 rounded-full transition-colors",
                                s.id <= step ? "bg-[#9D4EDD]" : "bg-[#333]"
                            )}
                        />
                    ))}
                </div>

                <div className="space-y-4">
                    <h2 className="text-sm uppercase tracking-widest text-[#9D4EDD]">{currentStepData.title}</h2>
                    <h1 className="text-3xl font-bold font-serif">{currentStepData.question}</h1>
                </div>

                <div className="flex flex-col gap-3">
                    {currentStepData.options.map((opt) => {
                        const isSelected = currentStepData.value === opt;
                        return (
                            <Card
                                key={opt}
                                onClick={() => currentStepData.setValue(opt)}
                                className={clsx(
                                    "cursor-pointer flex items-center justify-between p-5 transition-all",
                                    isSelected
                                        ? "border-[#9D4EDD] bg-[#9D4EDD]/10 shadow-[0_0_15px_rgba(157,78,221,0.2)]"
                                        : "hover:bg-[#252525]"
                                )}
                            >
                                <span className={clsx("font-medium", isSelected ? "text-white" : "text-[#A0A0A0]")}>
                                    {opt}
                                </span>
                                {isSelected && <Check className="text-[#9D4EDD]" size={20} />}
                            </Card>
                        );
                    })}
                </div>
            </div>

            <Button
                size="lg"
                fullWidth
                disabled={!currentStepData.value}
                onClick={handleNext}
                className="mt-8 animate-fade-in"
            >
                {step === steps.length ? "Enter Library Kingdom" : "Next"}
            </Button>
        </div>
    );
}

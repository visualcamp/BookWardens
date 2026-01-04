"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Shield, Zap, BookOpen, Sword, Sparkles } from "lucide-react";

export default function WardensPage() {
    return (
        <div className="flex flex-col gap-6 pb-20">
            <h1 className="text-2xl font-bold font-serif italic text-white">Warden Profile</h1>

            {/* Hero Character */}
            <div className="relative h-64 w-full flex items-center justify-center">
                {/* Glow Effects */}
                <div className="absolute w-48 h-48 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />

                {/* Character Image (Placeholder) */}
                <img
                    src="https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=600&auto=format&fit=crop"
                    alt="Warden Character"
                    className="relative z-10 w-40 h-40 object-cover rounded-full border-4 border-purple-500 shadow-[0_0_30px_rgba(157,78,221,0.5)]"
                />

                {/* Level Badge */}
                <div className="absolute bottom-10 bg-black/80 text-white px-4 py-1 rounded-full border border-purple-500 z-20 font-bold text-sm shadow-lg">
                    Level 4 Initiate
                </div>
            </div>

            {/* Stats */}
            <Card className="p-4 grid grid-cols-3 gap-4 text-center bg-[#1A0B2E]/50">
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-400 font-bold uppercase">Fluency</span>
                    <span className="text-xl font-bold text-white">Rank B</span>
                </div>
                <div className="flex flex-col gap-1 border-x border-white/10">
                    <span className="text-xs text-gray-400 font-bold uppercase">Insight</span>
                    <span className="text-xl font-bold text-white">Rank A-</span>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-400 font-bold uppercase">Lexicon</span>
                    <span className="text-xl font-bold text-white">Rank C+</span>
                </div>
            </Card>

            {/* Equipment Slots */}
            <section>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#A0A0A0] mb-3">Equipment</h2>
                <div className="grid grid-cols-3 gap-3">
                    <EquipmentSlot icon={Sword} label="Ink Pen" rarity="rare" />
                    <EquipmentSlot icon={BookOpen} label="Grimoire" rarity="epic" />
                    <EquipmentSlot icon={Sparkles} label="Charm" rarity="common" />
                </div>
            </section>

            {/* Skill Tree Button */}
            <Button variant="secondary" fullWidth className="flex items-center gap-2 justify-center">
                <Zap size={18} className="text-yellow-400" />
                Open Skill Tree
            </Button>
        </div>
    );
}

function EquipmentSlot({ icon: Icon, label, rarity }: any) {
    const rarityColors: any = {
        common: "border-gray-600 bg-gray-900/50",
        rare: "border-cyan-500 bg-cyan-900/30 shadow-[0_0_10px_rgba(6,182,212,0.3)]",
        epic: "border-purple-500 bg-purple-900/30 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
    };

    return (
        <div className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center gap-2 ${rarityColors[rarity]}`}>
            <Icon size={24} className="text-white" />
            <span className="text-[10px] uppercase font-bold text-gray-300">{label}</span>
        </div>
    )
}

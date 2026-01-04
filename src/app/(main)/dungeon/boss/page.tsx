"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Swords, Skull, Heart, Zap } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function BossBattlePage() {
    const [bossHp, setBossHp] = useState(100);
    const [playerHp, setPlayerHp] = useState(100);
    const [turn, setTurn] = useState(1); // 1 = Player choice, 2 = Attack Anim, 3 = Boss Attack
    const [battleLog, setBattleLog] = useState("The Ink Shadow manifests!");
    const [shake, setShake] = useState(false);

    // Mock Boss Logic
    const handleAttack = (type: 'quick' | 'heavy') => {
        // Player Turn
        setTurn(2);
        const damage = type === 'quick' ? 15 : 25;
        const hitChance = type === 'quick' ? 1.0 : 0.7;

        let actualDmg = 0;
        if (Math.random() < hitChance) {
            actualDmg = damage;
            setBattleLog(`You cast ${type === 'quick' ? 'Quick Slash' : 'Heavy Rune'}! Dealt ${damage} dmg.`);
            setBossHp(prev => Math.max(0, prev - damage));
            triggerShake();
        } else {
            setBattleLog("Your attack missed!");
        }

        // Transition to Boss Turn
        setTimeout(() => {
            if (bossHp - actualDmg <= 0) return; // Win handled in render

            // Boss Attacks
            setTurn(3);
            const bossDmg = Math.floor(Math.random() * 15) + 5;
            setBattleLog(`Ink Shadow strikes back! Took ${bossDmg} dmg.`);
            setPlayerHp(prev => Math.max(0, prev - bossDmg));
            triggerShake();

            // Back to Player
            setTimeout(() => setTurn(1), 1500);
        }, 1500);
    };

    const triggerShake = () => {
        setShake(true);
        setTimeout(() => setShake(false), 500);
    };

    if (bossHp <= 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-140px)] gap-6 text-center">
                <div className="w-24 h-24 rounded-full bg-yellow-500/20 flex items-center justify-center animate-[spin_3s_linear_infinite]">
                    <Swords size={48} className="text-yellow-400" />
                </div>
                <h1 className="text-4xl font-serif font-bold text-white mb-2">VICTORY</h1>
                <p className="text-gray-400">The Ink Shadow has been dispersed.</p>
                <Link href="/dungeon/result" className="w-full px-6">
                    <Button fullWidth className="bg-gradient-to-r from-yellow-600 to-orange-500 border-none">Claim Rewards</Button>
                </Link>
            </div>
        );
    }

    if (playerHp <= 0) {
        return (
            <div className="flex flex-col items-center justify-center h-[calc(100vh-140px)] gap-6 text-center">
                <Skull size={64} className="text-red-500" />
                <h1 className="text-4xl font-serif font-bold text-red-500 mb-2">DEFEAT</h1>
                <p className="text-gray-400">The rift overwhelmed you.</p>
                <Button onClick={() => { setPlayerHp(50); setTurn(1); }} fullWidth variant="secondary">Try Again (Cost 1 Gem)</Button>
            </div>
        );
    }

    return (
        <div className={clsx("flex flex-col h-[calc(100vh-140px)] py-4 max-w-lg mx-auto relative", shake && "animate-[ping_0.1s_ease-in-out_bg-red-900/10]")}>

            {/* Boss Area */}
            <div className="flex-1 flex flex-col items-center justify-center relative">
                {/* Boss Status */}
                <div className="w-full mb-4 px-4 absolute top-0">
                    <div className="flex justify-between text-xs font-bold text-red-400 mb-1">
                        <span>INK SHADOW (LVL 3)</span>
                        <span>{bossHp}/100</span>
                    </div>
                    <div className="h-4 bg-gray-900 rounded-full border border-red-900 overflow-hidden">
                        <div className="h-full bg-red-600 transition-all duration-300" style={{ width: `${bossHp}%` }} />
                    </div>
                </div>

                {/* Boss Visual */}
                <div className={clsx("relative w-48 h-48 transition-transform duration-200", turn === 2 && "scale-95 brightness-150")}>
                    <div className="absolute inset-0 bg-purple-600/30 blur-[60px] animate-pulse" />
                    {/* Placeholder Monster */}
                    <img
                        src="https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=600&auto=format&fit=crop"
                        alt="Boss"
                        className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.8)] filter grayscale contrast-125"
                    />
                </div>

                {/* Damage Number Popups (Simplified) */}
                {turn !== 1 && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white drop-shadow-md animate-bounce">
                        💥
                    </div>
                )}
            </div>

            {/* Battle Log */}
            <div className="bg-black/40 backdrop-blur-sm p-3 rounded-xl mb-4 text-center border border-white/10 min-h-[50px] flex items-center justify-center">
                <p className="text-sm font-mono text-gray-300">{battleLog}</p>
            </div>

            {/* Player Controls */}
            <Card className="p-4 bg-[#1A0B2E] border-t border-purple-500/30">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                        <Heart size={16} className="text-green-500 fill-green-500" />
                        <span className="text-sm font-bold">{playerHp} HP</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap size={16} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-sm font-bold">3 AP</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <Button
                        onClick={() => handleAttack('quick')}
                        disabled={turn !== 1}
                        className="bg-purple-700 hover:bg-purple-600 border-none"
                    >
                        Quick Slash
                        <span className="block text-[10px] opacity-70 font-normal">100% Hit • 15 Dmg</span>
                    </Button>
                    <Button
                        onClick={() => handleAttack('heavy')}
                        disabled={turn !== 1}
                        variant="secondary"
                    >
                        Heavy Logic
                        <span className="block text-[10px] opacity-70 font-normal">70% Hit • 25 Dmg</span>
                    </Button>
                </div>
            </Card>
        </div>
    );
}

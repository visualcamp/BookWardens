"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Hammer, CircleDollarSign, Trophy, Archive } from "lucide-react";

export default function VaultPage() {
    return (
        <div className="flex flex-col gap-6 pb-20">
            <h1 className="text-2xl font-bold font-serif italic text-white">The Vault</h1>

            {/* Currencies */}
            <section className="grid grid-cols-3 gap-2">
                <CurrencyCard label="Ink" amount="850" color="bg-purple-600" />
                <CurrencyCard label="Runes" amount="12" color="bg-cyan-600" />
                <CurrencyCard label="Gems" amount="4" color="bg-pink-600" />
            </section>

            {/* Actions */}
            <section className="grid grid-cols-2 gap-3">
                <Card hoverEffect className="p-4 flex flex-col items-center justify-center gap-2 aspect-[4/3] bg-gradient-to-br from-[#1A0B2E] to-[#2a1345]">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
                        <Hammer size={20} />
                    </div>
                    <span className="font-bold text-sm">Forge</span>
                </Card>
                <Card hoverEffect className="p-4 flex flex-col items-center justify-center gap-2 aspect-[4/3] bg-gradient-to-br from-[#1A0B2E] to-[#2a1345]">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                        <Trophy size={20} />
                    </div>
                    <span className="font-bold text-sm">Achievements</span>
                </Card>
                <Card hoverEffect className="p-4 flex flex-col items-center justify-center gap-2 aspect-[4/3] bg-gradient-to-br from-[#1A0B2E] to-[#2a1345]">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                        <Archive size={20} />
                    </div>
                    <span className="font-bold text-sm">Artifacts</span>
                </Card>
                <Card hoverEffect className="p-4 flex flex-col items-center justify-center gap-2 aspect-[4/3] bg-gradient-to-br from-[#1A0B2E] to-[#2a1345]">
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                        <CircleDollarSign size={20} />
                    </div>
                    <span className="font-bold text-sm">Shop</span>
                </Card>
            </section>

            {/* Recent Drops */}
            <section>
                <h2 className="text-sm font-semibold uppercase tracking-wider text-[#A0A0A0] mb-3">Recent Acquisitions</h2>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                        <div className="w-10 h-10 rounded bg-cyan-900/50 flex items-center justify-center border border-cyan-500/30">
                            <span className="text-lg">ᚲ</span>
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white">Rune of Clarity</div>
                            <div className="text-xs text-gray-500">Found in "Tom Sawyer"</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                        <div className="w-10 h-10 rounded bg-purple-900/50 flex items-center justify-center border border-purple-500/30">
                            <span className="text-lg">💧</span>
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white">Concentrated Ink</div>
                            <div className="text-xs text-gray-500">Reward for 500 WPM Streak</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function CurrencyCard({ label, amount, color }: any) {
    return (
        <Card className="p-3 flex flex-col items-center justify-center gap-1 bg-[#1A0B2E] border-white/10">
            <span className="text-xs text-gray-400 uppercase font-bold">{label}</span>
            <div className={`text-lg font-bold ${color.replace('bg-', 'text-')}`}>{amount}</div>
        </Card>
    )
}

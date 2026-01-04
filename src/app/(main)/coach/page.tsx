"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { Brain, Eye, Zap, ArrowRight, TrendingUp } from "lucide-react";

export default function CoachPage() {
    return (
        <div className="flex flex-col gap-6 pb-20">
            <h1 className="text-2xl font-bold font-serif italic text-white">Warden Coach</h1>

            {/* Coach Insight */}
            <Card className="p-4 border-purple-500/30 bg-gradient-to-br from-[#1A0B2E] via-[#2a1345] to-[#1A0B2E]">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center border border-purple-500/50 flex-shrink-0">
                        <Brain size={24} className="text-purple-300" />
                    </div>
                    <div>
                        <h2 className="font-bold text-lg mb-1">Observation</h2>
                        <p className="text-sm text-gray-300 leading-relaxed">
                            Your reading speed was excellent today, but your <span className="text-purple-400">regression rate</span> (rereading) spiked in Chapter 3. Let's focus on forward momentum.
                        </p>
                    </div>
                </div>
            </Card>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
                <StatsCard
                    icon={Zap}
                    label="Fluency"
                    value="185 WPM"
                    trend="+5%"
                    color="text-yellow-400"
                />
                <StatsCard
                    icon={Eye}
                    label="Fixation"
                    value="240ms"
                    trend="-12%"
                    trendGood
                    color="text-cyan-400"
                />
                <StatsCard
                    icon={Brain}
                    label="Comprehension"
                    value="92%"
                    trend="+2%"
                    color="text-pink-400"
                />
                <StatsCard
                    icon={TrendingUp}
                    label="Focus"
                    value="A-"
                    trend="Stable"
                    color="text-green-400"
                />
            </div>

            {/* Recommended Training */}
            <section>
                <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-gray-300 uppercase text-xs tracking-wider">Suggested Training</h3>
                    <span className="text-xs text-purple-400">View All</span>
                </div>

                <Card hoverEffect className="p-4 flex items-center justify-between group">
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-purple-400 mb-1">3 MINUTE DRILL</span>
                        <h4 className="font-bold text-base">Regression Breaker</h4>
                        <p className="text-xs text-gray-400">Force your eyes to move forward without looking back.</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                        <ArrowRight size={20} />
                    </div>
                </Card>
            </section>

            {/* Detailed Report Teaser */}
            <Card className="p-6 text-center border-dashed border-white/10 bg-transparent flex flex-col items-center gap-3">
                <p className="text-sm text-gray-400">Unlock detailed eye-tracking heatmaps and advanced vocabulary analysis.</p>
                <Button variant="outline" size="sm">
                    Unlock Full Report (₩5,000/mo)
                </Button>
            </Card>
        </div>
    );
}

function StatsCard({ icon: Icon, label, value, trend, trendGood = true, color }: any) {
    return (
        <Card className="p-3 flex flex-col gap-2 bg-[#1A0B2E]/80">
            <div className={`flex justify-between items-start ${color}`}>
                <Icon size={18} />
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/5 ${trendGood ? 'text-green-400' : 'text-red-400'}`}>
                    {trend}
                </span>
            </div>
            <div>
                <div className="text-2xl font-bold font-serif">{value}</div>
                <div className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">{label}</div>
            </div>
        </Card>
    )
}

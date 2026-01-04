"use client";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { ArrowLeft, BookOpen, Clock, PlayCircle } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock data (in a real app, fetch based on params.bookId)
const BOOK_DETAILS = {
    title: "1984",
    author: "George Orwell",
    description: "A dystopian social science fiction novel that explores the dangers of totalitarianism, mass surveillance, and repressive regimentation of persons and behaviours within society.",
    level: "Lv. 5",
    cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=600&auto=format&fit=crop",
    chapters: [
        { id: 1, title: "Part 1, Chapter 1", status: "completed" },
        { id: 2, title: "Part 1, Chapter 2", status: "unlocked" },
        { id: 3, title: "Part 1, Chapter 3", status: "locked" },
        { id: 4, title: "Part 1, Chapter 4", status: "locked" }
    ]
};

export default function BookDetailPage() {
    // const params = useParams(); // Using static data for now

    return (
        <div className="min-h-screen bg-[#0F0518] pb-24">
            {/* Hero Header with Cover */}
            <div className="relative w-full h-64">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60"
                    style={{ backgroundImage: `url('${BOOK_DETAILS.cover}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0518] to-transparent" />

                <Link href="/library" className="absolute top-4 left-4 p-2 rounded-full bg-black/40 text-white backdrop-blur-md z-10 hover:bg-black/60">
                    <ArrowLeft size={24} />
                </Link>
            </div>

            <div className="px-6 -mt-12 relative z-10 flex flex-col gap-6">
                {/* Book Info */}
                <div className="flex gap-4 items-end">
                    <div className="w-24 h-36 rounded-lg overflow-hidden shadow-2xl border-2 border-white/10 shrink-0">
                        <img src={BOOK_DETAILS.cover} alt="Cover" className="w-full h-full object-cover" />
                    </div>
                    <div className="pb-2">
                        <span className="text-xs font-bold text-purple-400 border border-purple-500/30 px-2 py-0.5 rounded mb-2 inline-block">
                            {BOOK_DETAILS.level}
                        </span>
                        <h1 className="text-2xl font-serif font-bold text-white leading-none mb-1">{BOOK_DETAILS.title}</h1>
                        <p className="text-sm text-gray-400">{BOOK_DETAILS.author}</p>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                    <Link href="/dungeon/word" className="flex-1">
                        <Button fullWidth className="flex items-center justify-center gap-2">
                            <PlayCircle size={18} /> Enter Rift
                        </Button>
                    </Link>
                    <Button variant="outline" className="flex-1">Add to Shelf</Button>
                </div>

                {/* Synopsis */}
                <section>
                    <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest mb-2">Synopsis</h2>
                    <p className="text-sm text-gray-400 leading-relaxed font-serif">
                        {BOOK_DETAILS.description}
                    </p>
                </section>

                {/* Chapter List */}
                <section>
                    <div className="flex justify-between items-center mb-3">
                        <h2 className="text-sm font-bold text-gray-300 uppercase tracking-widest">Chapters</h2>
                        <span className="text-xs text-gray-500">2 / 24 Completed</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        {BOOK_DETAILS.chapters.map((chapter) => (
                            <Card
                                key={chapter.id}
                                className="p-4 flex items-center justify-between bg-[#1A0B2E] border-white/5"
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`
                                        w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold
                                        ${chapter.status === 'completed' ? 'bg-green-900/50 text-green-400 border border-green-500/30' :
                                            chapter.status === 'unlocked' ? 'bg-purple-900/50 text-purple-400 border border-purple-500/30' :
                                                'bg-gray-800 text-gray-600'}
                                     `}>
                                        {chapter.status === 'completed' ? <CheckIcon /> : chapter.id}
                                    </div>
                                    <span className={`text-sm font-medium ${chapter.status === 'locked' ? 'text-gray-600' : 'text-gray-200'}`}>
                                        {chapter.title}
                                    </span>
                                </div>

                                {chapter.status === 'locked' && <div className="text-xs text-gray-600" >Locked</div>}
                                {chapter.status === 'unlocked' && <div className="text-xs text-purple-400 font-bold animate-pulse">Next</div>}
                            </Card>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

function CheckIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
    )
}

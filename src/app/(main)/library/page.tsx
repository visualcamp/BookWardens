"use client";

import Card from "@/components/ui/Card";
import { Search, Star, BookOpen, Download } from "lucide-react";

const CATEGORIES = ["Recommended", "Classics", "Mystery", "Fantasy"];

const BOOKS = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        level: "Lv. 4",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop",
        progress: 45,
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        level: "Lv. 5",
        cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=400&auto=format&fit=crop",
        progress: 0,
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        level: "Lv. 5",
        cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=400&auto=format&fit=crop",
        progress: 10,
    },
    {
        id: 4,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        level: "Lv. 3",
        cover: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=400&auto=format&fit=crop",
        progress: 0,
    },
];

export default function LibraryPage() {
    return (
        <div className="flex flex-col gap-6 pb-20">
            {/* Header */}
            <h1 className="text-2xl font-bold font-serif italic text-white">The Archives</h1>

            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input
                    type="text"
                    placeholder="Search for wisdom..."
                    className="w-full bg-[#1A0B2E] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                />
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                {CATEGORIES.map((cat, idx) => (
                    <button
                        key={cat}
                        className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap border transition-all ${idx === 0
                                ? "bg-purple-600 border-purple-500 text-white shadow-[0_0_10px_rgba(157,78,221,0.4)]"
                                : "bg-transparent border-white/10 text-gray-400 hover:text-white hover:bg-white/5"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Book Grid */}
            <div className="grid grid-cols-2 gap-4">
                {BOOKS.map((book) => (
                    <Card
                        key={book.id}
                        hoverEffect
                        className="group relative flex flex-col items-center p-3 gap-3 aspect-[2/3] bg-[#1A0B2E]/50 border-white/5 overflow-hidden"
                    >
                        {/* Cover Image */}
                        <div className="w-full h-full absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-sm group-hover:blur-none scale-110" style={{ backgroundImage: `url('${book.cover}')` }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-end h-full w-full">
                            <div className="flex justify-between items-start mb-auto">
                                <span className="bg-black/60 backdrop-blur px-2 py-0.5 rounded text-[10px] text-purple-300 border border-purple-500/30">
                                    {book.level}
                                </span>
                                {book.progress > 0 && (
                                    <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-[10px] font-bold ring-2 ring-black">
                                        {book.progress}%
                                    </div>
                                )}
                            </div>

                            <h3 className="text-sm font-serif font-bold text-white leading-tight mb-1">{book.title}</h3>
                            <p className="text-[10px] text-gray-400">{book.author}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

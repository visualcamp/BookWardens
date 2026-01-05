"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, BookOpen } from "lucide-react";
import Link from "next/link";
import { BOOKS } from "@/data/books";

const GENRES = ["All", "Adventure", "Fantasy", "Mystery", "Sci-Fi", "Romance"];

export default function LibraryPage() {
    const [search, setSearch] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("All");

    // Filter books basic logic (Mock genre filtering as we didn't add genre field yet, assume simple logic or show all)
    // For now, just filtering by search text
    const filteredBooks = BOOKS.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="pb-24 px-4 font-sans min-h-screen">
            {/* Header */}
            <div className="pt-6 pb-6 bg-[#0F0518]/95 backdrop-blur-md sticky top-0 z-20 -mx-4 px-4 border-b border-white/5">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-serif font-bold text-white">The Archive</h1>
                    <div className="text-xs text-gray-500 font-mono border border-white/10 px-2 py-1 rounded">
                        {BOOKS.length} VOLUMES
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative mb-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search by title or author..."
                        className="w-full bg-[#1A0B2E] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Filter Chips */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                    {GENRES.map((genre) => (
                        <button
                            key={genre}
                            onClick={() => setSelectedGenre(genre)}
                            className={`
                                whitespace-nowrap px-3 py-1.5 rounded-full text-xs font-bold transition-all border
                                ${selectedGenre === genre
                                    ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-900/50'
                                    : 'bg-[#1A0B2E] border-white/10 text-gray-400 hover:bg-[#251040]'}
                            `}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
            </div>

            {/* Book Grid */}
            <motion.div
                layout
                className="grid grid-cols-2 gap-4 mt-4"
            >
                {filteredBooks.map((book) => (
                    <Link key={book.id} href={`/library/${book.id}`}>
                        <motion.div
                            layoutId={`book-${book.id}`}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="group relative"
                        >
                            {/* Level Badge */}
                            <div className="absolute top-2 left-2 z-10 bg-black/70 backdrop-blur-sm px-1.5 py-0.5 rounded text-[10px] font-bold text-yellow-400 border border-yellow-500/20">
                                Lv. {book.level}
                            </div>

                            <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3 bg-[#1A0B2E] shadow-2xl border border-white/5 group-hover:border-purple-500/50 transition-colors">
                                <img
                                    src={book.coverUrl}
                                    alt={book.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    loading="lazy"
                                />

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0518] via-transparent to-transparent opacity-60" />
                            </div>

                            <h3 className="text-sm font-bold text-white leading-tight mb-1 truncate group-hover:text-purple-300 transition-colors">
                                {book.title}
                            </h3>
                            <p className="text-xs text-gray-500 truncate">{book.author}</p>
                        </motion.div>
                    </Link>
                ))}

                {/* Empty State */}
                {filteredBooks.length === 0 && (
                    <div className="col-span-2 text-center py-20 text-gray-500">
                        <BookOpen size={48} className="mx-auto mb-4 opacity-20" />
                        <p>No tomes found.</p>
                    </div>
                )}
            </motion.div>
        </div>
    );
}

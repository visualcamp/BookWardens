"use client";

import BottomNav from "@/components/BottomNav";
import TopBar from "@/components/TopBar";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <TopBar />
            <main className="pb-[65px] pt-[60px] min-h-screen px-4 py-4">
                {/* Adjusted padding: pt-[60px] for TopBar, pb-[65px] for BottomNav */}
                {children}
            </main>
            <BottomNav />
        </>
    );
}

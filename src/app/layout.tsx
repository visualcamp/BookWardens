import type { Metadata } from "next";
import { Cinzel, Outfit } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "The Book Wardens",
  description: "RPG Reading Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(cinzel.variable, outfit.variable, "bg-black font-sans")}>
        <div id="app-root">
          {children}
        </div>
      </body>
    </html>
  );
}

"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Mail, Lock, UserPlus } from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function SignupPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // Signup successful, redirect to Setup
            router.push("/setup");
        } catch (err: any) {
            console.error(err);
            if (err.code === 'auth/email-already-in-use') {
                setError("This email is already registered.");
            } else if (err.code === 'auth/weak-password') {
                setError("Password should be at least 6 characters.");
            } else {
                setError("Failed to create account. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0F0518] flex flex-col justify-center p-6 text-white font-sans">
            <div className="max-w-md w-full mx-auto space-y-8">
                <div className="text-center">
                    <h1 className="text-3xl font-serif font-bold mb-2">Join the Wardens</h1>
                    <p className="text-gray-400">Create your account to seal the Rift.</p>
                </div>

                <form onSubmit={handleSignup} className="space-y-6">
                    <div className="space-y-4">
                        <div className="bg-[#1A0B2E] p-1 rounded-xl border border-white/10 flex items-center gap-3 px-4 py-3 focus-within:border-purple-500 transition-colors">
                            <Mail className="text-gray-500" size={20} />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-transparent w-full outline-none text-white placeholder-gray-600"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="bg-[#1A0B2E] p-1 rounded-xl border border-white/10 flex items-center gap-3 px-4 py-3 focus-within:border-purple-500 transition-colors">
                            <Lock className="text-gray-500" size={20} />
                            <input
                                type="password"
                                placeholder="Create Password"
                                className="bg-transparent w-full outline-none text-white placeholder-gray-600"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                minLength={6}
                                required
                            />
                        </div>
                    </div>

                    {error && <p className="text-red-400 text-sm text-center font-bold">{error}</p>}

                    <Button
                        fullWidth
                        size="lg"
                        disabled={loading}
                        className={loading ? "opacity-50" : "shadow-[0_0_20px_#9333ea] animate-pulse-slow"}
                    >
                        <UserPlus size={18} className="mr-2" />
                        {loading ? "Creating Account..." : "Create Account"}
                    </Button>
                </form>

                <div className="text-center">
                    <p className="text-sm text-gray-400">
                        Already have an account?{" "}
                        <Link href="/login" className="text-purple-400 font-bold hover:underline">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

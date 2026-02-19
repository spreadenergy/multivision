"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Send } from "lucide-react";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        try {
            await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            setSubmitted(true);
            setEmail("");
        } catch {
            // Handle error silently for v1
        }
    };

    return (
        <SectionWrapper className="bg-brand-surface/30">
            <div className="mx-auto max-w-xl text-center">
                <h2 className="font-heading text-2xl font-bold md:text-3xl">
                    Stay in the Loop
                </h2>
                <p className="mt-3 text-brand-text-secondary">
                    Get the latest from across the Multivision Network — new shows, episodes, and updates.
                </p>

                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mt-8 rounded-xl border border-brand-green/30 bg-brand-green/5 p-6"
                    >
                        <p className="font-heading font-bold text-brand-green">
                            You&apos;re in! 🎉
                        </p>
                        <p className="mt-1 text-sm text-brand-text-secondary">
                            Welcome to the Multivision community.
                        </p>
                    </motion.div>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 flex items-center gap-3 rounded-full border border-brand-border bg-brand-surface p-2 focus-within:border-brand-coral/40 transition-colors"
                    >
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            className="flex-1 bg-transparent px-4 py-2 text-sm text-brand-text placeholder:text-brand-text-secondary/50 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-coral text-white hover:bg-brand-coral-dark transition-colors duration-200 cursor-pointer"
                            aria-label="Subscribe"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                )}
            </div>
        </SectionWrapper>
    );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
            {/* Ambient background glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-brand-coral/5 blur-[120px] animate-pulse" />
                <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-brand-cyan/5 blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
                <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-brand-green/5 blur-[100px] animate-pulse" style={{ animationDelay: "4s" }} />
            </div>

            {/* Noise overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }} />

            <div className="relative z-10 text-center max-w-4xl mx-auto">
                {/* Animated Logo Mark */}
                <motion.div
                    className="mx-auto mb-8 w-24 h-24 md:w-32 md:h-32"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <motion.path
                            d="M15 80 L15 35 Q15 20 30 20 L30 20 Q40 20 40 35 L40 55 L50 35 L60 55 L60 35 Q60 20 70 20 L70 20 Q85 20 85 35 L85 80"
                            fill="none"
                            stroke="url(#heroGradient)"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        <defs>
                            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#E8435A" />
                                <stop offset="50%" stopColor="#7DC83E" />
                                <stop offset="100%" stopColor="#4CC9E0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.7 }}
                >
                    The Network Behind{" "}
                    <span className="bg-gradient-to-r from-brand-coral via-brand-green to-brand-cyan bg-clip-text text-transparent">
                        the Voices.
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    className="mt-6 text-lg text-brand-text-secondary md:text-xl max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.7 }}
                >
                    We build, launch, and scale culture-driven podcasts and digital media brands.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.7 }}
                >
                    <Button variant="primary" href="/shows">
                        Explore Shows
                    </Button>
                    <Button variant="secondary" href="/apply">
                        Join the Network
                    </Button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-brand-text-secondary/30 flex items-start justify-center p-2">
                    <div className="w-1 h-2 rounded-full bg-brand-text-secondary/60" />
                </div>
            </motion.div>
        </section>
    );
}

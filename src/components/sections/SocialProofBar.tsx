"use client";

import React from "react";
import { motion } from "framer-motion";

const platforms = [
    { name: "Spotify", icon: "🎵" },
    { name: "Apple Podcasts", icon: "🎧" },
    { name: "YouTube", icon: "▶️" },
    { name: "iHeartRadio", icon: "❤️" },
    { name: "Amazon Music", icon: "🎶" },
];

const stats = [
    { value: "13", label: "Active Shows" },
    { value: "Multi", label: "Platform Distribution" },
    { value: "9+", label: "Content Genres" },
];

export default function SocialProofBar() {
    return (
        <section className="relative border-y border-brand-border bg-brand-surface/50">
            <div className="mx-auto max-w-7xl px-6 py-8 md:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Stats */}
                    <div className="flex items-center gap-8 md:gap-12">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                className="text-center"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="font-heading text-2xl font-bold text-brand-text">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-brand-text-secondary uppercase tracking-wider mt-1">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-12 bg-brand-border" />

                    {/* Platforms */}
                    <div className="flex items-center gap-6">
                        <span className="text-xs text-brand-text-secondary uppercase tracking-wider whitespace-nowrap">
                            Available on
                        </span>
                        <div className="flex items-center gap-4">
                            {platforms.map((platform) => (
                                <span
                                    key={platform.name}
                                    className="text-xl opacity-60 hover:opacity-100 transition-opacity duration-200"
                                    title={platform.name}
                                >
                                    {platform.icon}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

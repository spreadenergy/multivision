"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

import { shows } from "@/data/shows";

const latestEpisodes = shows.slice(0, 6).map(show => ({
    showTitle: show.title,
    episodeTitle: "Latest Episode", // Placeholder title for now
    coverImage: show.coverImage,
    slug: show.slug,
}));

export default function LatestEpisodes() {
    return (
        <SectionWrapper>
            <SectionHeading
                title="Latest Across the Network"
                subtitle="Fresh episodes from across our shows."
            />

            <div className="overflow-x-auto pb-4 -mx-6 px-6">
                <div className="flex gap-5 min-w-max">
                    {latestEpisodes.map((episode, i) => (
                        <motion.div
                            key={`${episode.showTitle}-${i}`}
                            className="w-72 shrink-0 rounded-2xl border border-brand-border bg-brand-surface overflow-hidden group cursor-pointer transition-all duration-300 hover:border-brand-coral/40"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="relative h-44 bg-brand-muted overflow-hidden">
                                <Image
                                    src={episode.coverImage}
                                    alt={episode.showTitle}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-brand-coral/80 flex items-center justify-center group-hover:bg-brand-coral transition-colors">
                                        <svg className="w-5 h-5 text-brand-text ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="p-5">
                                <span className="text-xs text-brand-coral font-semibold uppercase tracking-wider">
                                    {episode.showTitle}
                                </span>
                                <h4 className="mt-2 font-heading text-sm font-bold leading-snug line-clamp-2">
                                    {episode.episodeTitle}
                                </h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}

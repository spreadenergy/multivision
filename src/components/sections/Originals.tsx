"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

import Image from "next/image";
import { shows } from "@/data/shows";

const originals = shows.slice(0, 3).map(show => ({
    title: show.title,
    description: show.tagline,
    badge: "ORIGINAL",
    image: show.coverImage,
    slug: show.slug,
}));

export default function Originals() {
    return (
        <SectionWrapper>
            <SectionHeading
                title="Multivision Originals"
                subtitle="IP first. Talent second. Every show is designed to be a brand, not just a broadcast."
                accentColor="green"
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {originals.map((item, i) => (
                    <motion.div
                        key={item.title}
                        className="relative rounded-2xl p-[1px] bg-gradient-to-br from-brand-coral via-brand-green to-brand-cyan overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                    >
                        <div className="rounded-2xl bg-brand-black p-6 h-full flex flex-col">
                            <div className="flex justify-between items-start mb-6">
                                <span className="inline-block rounded-full bg-brand-green/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-green">
                                    {item.badge}
                                </span>
                            </div>

                            {/* This section already displays an image (show logo/cover image) */}
                            <div className="relative w-full aspect-video mb-6 rounded-lg overflow-hidden bg-brand-surface/50">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <h3 className="font-heading text-xl font-bold group-hover:text-brand-coral transition-colors">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-sm text-brand-text-secondary leading-relaxed flex-grow">
                                {item.description}
                            </p>

                            <a href={`/shows/${item.slug}`} className="mt-6 text-xs font-bold uppercase tracking-widest text-brand-coral hover:text-brand-white transition-colors flex items-center gap-2">
                                View Show <span className="text-lg">→</span>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}

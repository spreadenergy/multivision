"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ShowCardProps {
    slug: string;
    title: string;
    tagline: string;
    category: string;
    coverImage: string;
}

const categoryColors: Record<string, string> = {
    culture: "bg-brand-coral/20 text-brand-coral",
    comedy: "bg-brand-green/20 text-brand-green",
    education: "bg-brand-cyan/20 text-brand-cyan",
    lifestyle: "bg-brand-coral/20 text-brand-coral",
    spanish: "bg-brand-green/20 text-brand-green",
    intellectual: "bg-brand-cyan/20 text-brand-cyan",
    marketing: "bg-brand-green/20 text-brand-green",
    spirituality: "bg-brand-coral/20 text-brand-coral",
    art: "bg-brand-cyan/20 text-brand-cyan",
};

export default function ShowCard({
    slug,
    title,
    tagline,
    category,
    coverImage,
}: ShowCardProps) {
    return (
        <motion.a
            href={`/shows/${slug}`}
            className="group relative block overflow-hidden rounded-2xl bg-brand-surface border border-brand-border transition-all duration-300 hover:border-brand-coral/40 hover:shadow-[0_0_32px_rgba(232,67,90,0.15)]"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Cover Image */}
            <div className="relative aspect-square overflow-hidden">
                <Image
                    src={coverImage}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5">
                <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${categoryColors[category] || "bg-brand-muted text-brand-text-secondary"
                        }`}
                >
                    {category}
                </span>
                <h3 className="mt-3 font-heading text-xl font-bold leading-tight">
                    {title}
                </h3>
                <p className="mt-2 text-sm text-brand-text-secondary leading-relaxed">
                    {tagline}
                </p>
            </div>
        </motion.a>
    );
}

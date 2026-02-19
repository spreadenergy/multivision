"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";

const milestones = [
    { year: "2024", label: "Network Founded" },
    { year: "2025", label: "6+ Active Shows" },
    { year: "2026", label: "Multivision Studios" },
    { year: "Beyond", label: "Creator Fund & Expansion" },
];

export default function Thesis() {
    return (
        <SectionWrapper className="bg-brand-surface/30">
            <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block rounded-full bg-brand-coral/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-coral mb-6">
                    Our Thesis
                </span>
                <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-8">
                    Voices Deserve{" "}
                    <span className="bg-gradient-to-r from-brand-coral via-brand-green to-brand-cyan bg-clip-text text-transparent">
                        Infrastructure
                    </span>
                </h2>
                <blockquote className="text-xl md:text-2xl text-brand-text-secondary leading-relaxed italic">
                    &ldquo;We believe every great voice deserves the infrastructure of a media company behind it.
                    Multivision exists to build that infrastructure — not for one creator, but for an entire
                    generation of storytellers who refuse to wait for permission.&rdquo;
                </blockquote>
                <p className="mt-6 text-sm text-brand-text-secondary uppercase tracking-wider">
                    — Multivision Network
                </p>
            </div>

            {/* Timeline */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
                {milestones.map((milestone, i) => (
                    <motion.div
                        key={milestone.year}
                        className="relative text-center p-6 rounded-xl border border-brand-border bg-brand-surface/50"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                    >
                        <div className="font-heading text-2xl font-bold text-brand-coral">
                            {milestone.year}
                        </div>
                        <div className="mt-2 text-xs text-brand-text-secondary uppercase tracking-wider">
                            {milestone.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}

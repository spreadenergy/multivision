"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

const originals = [
    {
        title: "Opinion Junkyard",
        description: "Where hot takes go to live forever. Our flagship debate format.",
        badge: "ORIGINAL",
    },
    {
        title: "100 Ways",
        description: "One hundred approaches to life's biggest challenges. An IP built to scale.",
        badge: "ORIGINAL",
    },
    {
        title: "HyphyTown",
        description: "Bay Area culture, music, and lifestyle — the definitive voice of a movement.",
        badge: "ORIGINAL",
    },
];

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
                        <div className="rounded-2xl bg-brand-black p-8 h-full">
                            <span className="inline-block rounded-full bg-brand-green/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-green">
                                {item.badge}
                            </span>
                            <h3 className="mt-4 font-heading text-xl font-bold">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-sm text-brand-text-secondary leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}

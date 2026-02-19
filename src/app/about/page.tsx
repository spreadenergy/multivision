"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const milestones = [
    { year: "2024", title: "Network Founded", description: "Multivision launches with a vision to build infrastructure for independent creators." },
    { year: "2025", title: "6+ Active Shows", description: "Building a diverse roster spanning culture, comedy, education, and Spanish-language content." },
    { year: "2026", title: "Multivision Studios", description: "Expanding into original content production and branded media experiences." },
    { year: "Beyond", title: "Global Expansion", description: "Creator fund, educational platform, and international content partnerships." },
];

const values = [
    { title: "Creators First", description: "Every decision starts with the creator. We exist to amplify voices, not exploit them." },
    { title: "IP-Driven", description: "We build shows as brands — intellectual property that grows in value over time." },
    { title: "Culture-Forward", description: "We don't follow trends. We build platforms for the communities creating them." },
    { title: "Sustainable Growth", description: "No hype cycles. We build for longevity, monetization, and real audience impact." },
];

export default function AboutPage() {
    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="px-6 py-16 md:py-24 text-center">
                <div className="mx-auto max-w-3xl">
                    <motion.h1
                        className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Building the Future of{" "}
                        <span className="bg-gradient-to-r from-brand-coral via-brand-green to-brand-cyan bg-clip-text text-transparent">
                            Independent Media
                        </span>
                    </motion.h1>
                    <motion.p
                        className="mt-6 text-lg text-brand-text-secondary max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                    >
                        Multivision Network is a podcast network and IP studio that develops, produces, and scales culture-driven media brands. We provide creators with the infrastructure they need to thrive.
                    </motion.p>
                </div>
            </section>

            {/* Thesis */}
            <SectionWrapper className="bg-brand-surface/30">
                <div className="mx-auto max-w-3xl text-center">
                    <blockquote className="text-xl md:text-2xl text-brand-text leading-relaxed italic font-heading">
                        &ldquo;Every great voice deserves the infrastructure of a media company behind it. We&apos;re building that infrastructure — not for one creator, but for an entire generation of storytellers.&rdquo;
                    </blockquote>
                    <p className="mt-6 text-sm text-brand-text-secondary uppercase tracking-wider">
                        — Multivision Network
                    </p>
                </div>
            </SectionWrapper>

            {/* Values */}
            <SectionWrapper>
                <h2 className="font-heading text-3xl font-bold text-center mb-12 md:text-4xl">
                    What Drives Us
                </h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {values.map((value, i) => (
                        <motion.div
                            key={value.title}
                            className="rounded-2xl border border-brand-border bg-brand-surface p-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h3 className="font-heading text-xl font-bold text-brand-coral mb-3">
                                {value.title}
                            </h3>
                            <p className="text-sm text-brand-text-secondary leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Timeline */}
            <SectionWrapper className="bg-brand-surface/30">
                <h2 className="font-heading text-3xl font-bold text-center mb-12 md:text-4xl">
                    Our Journey
                </h2>
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-border md:-translate-x-px" />

                    <div className="space-y-12">
                        {milestones.map((milestone, i) => (
                            <motion.div
                                key={milestone.year}
                                className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                            >
                                {/* Dot */}
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-brand-coral -translate-x-1.5 mt-2 z-10" />

                                {/* Content */}
                                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                                    <span className="font-heading text-xl font-bold text-brand-coral">
                                        {milestone.year}
                                    </span>
                                    <h3 className="font-heading text-lg font-bold mt-1">{milestone.title}</h3>
                                    <p className="text-sm text-brand-text-secondary mt-2 leading-relaxed">
                                        {milestone.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            {/* CTA */}
            <SectionWrapper>
                <div className="text-center">
                    <h2 className="font-heading text-3xl font-bold md:text-4xl">
                        Ready to Be Part of It?
                    </h2>
                    <p className="mt-4 text-brand-text-secondary max-w-lg mx-auto">
                        Whether you&apos;re a creator looking for a home or a brand looking for authentic partnerships — we&apos;d love to connect.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                        <Button variant="green" href="/apply">
                            Apply as Creator
                        </Button>
                        <Button variant="cyan" href="/sponsors">
                            Become a Sponsor
                        </Button>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}

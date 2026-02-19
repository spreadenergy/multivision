"use client";

import React from "react";
import { motion } from "framer-motion";
import { Film, Mic, TrendingUp } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
    {
        icon: Film,
        title: "Show Development",
        description:
            "From concept to launch, we develop original podcast formats and help creators refine their vision into scalable media properties.",
        color: "text-brand-coral",
        borderColor: "hover:border-brand-coral/40",
    },
    {
        icon: Mic,
        title: "Production & Distribution",
        description:
            "Full-service production, editing, and multi-platform distribution. We get your show everywhere it needs to be — and sounding premium.",
        color: "text-brand-green",
        borderColor: "hover:border-brand-green/40",
    },
    {
        icon: TrendingUp,
        title: "Brand & Monetization",
        description:
            "Strategic brand development, sponsor matchmaking, and revenue optimization. We turn audience attention into sustainable income.",
        color: "text-brand-cyan",
        borderColor: "hover:border-brand-cyan/40",
    },
];

export default function WhatWeDo() {
    return (
        <SectionWrapper className="bg-brand-surface/30">
            <SectionHeading
                title="More Than Podcasts"
                subtitle="A full-stack media operation built to develop, produce, and monetize culture-driven content."
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {services.map((service, i) => (
                    <motion.div
                        key={service.title}
                        className={`rounded-2xl border border-brand-border bg-brand-surface p-8 transition-all duration-300 ${service.borderColor}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                    >
                        <service.icon className={`w-10 h-10 ${service.color} mb-5`} />
                        <h3 className="font-heading text-xl font-bold mb-3">
                            {service.title}
                        </h3>
                        <p className="text-sm text-brand-text-secondary leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}

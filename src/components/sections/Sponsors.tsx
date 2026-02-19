"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Megaphone } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const pillars = [
    {
        icon: Users,
        title: "Audience Growth",
        description:
            "Access engaged, loyal listeners across multiple demographics and cultural touchpoints.",
    },
    {
        icon: Target,
        title: "Niche Targeting",
        description:
            "Reach specific audiences through curated shows spanning culture, education, lifestyle, and more.",
    },
    {
        icon: Megaphone,
        title: "Cross-Platform Promotion",
        description:
            "Your brand amplified across podcasts, YouTube, social media, and the entire Multivision ecosystem.",
    },
];

export default function Sponsors() {
    return (
        <SectionWrapper>
            <SectionHeading
                title="Partner With Us"
                subtitle="Connect your brand with culture-forward audiences who listen, engage, and act."
                accentColor="cyan"
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-12">
                {pillars.map((pillar, i) => (
                    <motion.div
                        key={pillar.title}
                        className="rounded-2xl border border-brand-border bg-brand-surface p-8 text-center transition-all duration-300 hover:border-brand-cyan/40"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                    >
                        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-cyan/10">
                            <pillar.icon className="w-7 h-7 text-brand-cyan" />
                        </div>
                        <h3 className="font-heading text-lg font-bold mb-3">
                            {pillar.title}
                        </h3>
                        <p className="text-sm text-brand-text-secondary leading-relaxed">
                            {pillar.description}
                        </p>
                    </motion.div>
                ))}
            </div>

            <div className="text-center">
                <Button variant="cyan" href="/sponsors">
                    Become a Sponsor
                </Button>
            </div>
        </SectionWrapper>
    );
}

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const benefits = [
    "Full Production Support",
    "Professional Branding",
    "Multi-Platform Distribution",
    "Monetization Strategy",
    "Network Cross-Promotion",
    "Growth Analytics",
];

export default function JoinNetwork() {
    return (
        <SectionWrapper className="bg-brand-surface/30">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
                {/* Copy */}
                <div>
                    <span className="inline-block rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-green mb-6">
                        For Creators
                    </span>
                    <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                        Join the{" "}
                        <span className="text-brand-green">Network</span>
                    </h2>
                    <p className="mt-4 text-lg text-brand-text-secondary leading-relaxed">
                        We handle production, branding, distribution, and monetization.{" "}
                        <span className="text-brand-text font-semibold">
                            You focus on your voice.
                        </span>
                    </p>
                    <div className="mt-8">
                        <Button variant="green" href="/apply">
                            Apply to Join
                        </Button>
                    </div>
                </div>

                {/* Benefits Checklist */}
                <div className="space-y-4">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={benefit}
                            className="flex items-center gap-4 rounded-xl border border-brand-border bg-brand-surface p-4"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                                <Check className="w-4 h-4 text-brand-green" />
                            </div>
                            <span className="font-body text-sm font-medium">{benefit}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Users, Target, Megaphone, BarChart3, Mic2, Sparkles } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";

const adFormats = [
    { icon: Mic2, title: "Host-Read Ads", description: "Authentic endorsements delivered by trusted hosts." },
    { icon: Sparkles, title: "Branded Segments", description: "Custom content segments woven into episodes." },
    { icon: Megaphone, title: "Pre & Mid-Roll", description: "Traditional placements with premium production." },
    { icon: BarChart3, title: "Cross-Network Campaigns", description: "Reach audiences across multiple shows simultaneously." },
];

const whyUs = [
    { icon: Users, value: "Engaged Audiences", description: "Our listeners don't just hear — they act. High engagement, loyal communities." },
    { icon: Target, value: "Precise Targeting", description: "Choose shows by niche, demo, language, or culture to reach exactly who you need." },
    { icon: Megaphone, value: "Multi-Platform", description: "Your message amplified across podcasts, YouTube, social, and the entire network." },
];

export default function SponsorsPage() {
    const [formData, setFormData] = useState({
        name: "", company: "", email: "", budget: "", message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch("/api/sponsor", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            setSubmitted(true);
        } catch {
            // Handle error
        }
    };

    return (
        <div className="pt-24">
            {/* Hero */}
            <section className="px-6 py-16 md:py-24 text-center">
                <div className="mx-auto max-w-3xl">
                    <motion.span
                        className="inline-block rounded-full bg-brand-cyan/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-cyan mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Sponsorship Opportunities
                    </motion.span>
                    <motion.h1
                        className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        Reach Engaged,{" "}
                        <span className="text-brand-cyan">Culture-Forward</span> Audiences
                    </motion.h1>
                    <motion.p
                        className="mt-6 text-lg text-brand-text-secondary max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Partner with Multivision Network to connect your brand with listeners who are passionate, loyal, and ready to engage.
                    </motion.p>
                </div>
            </section>

            {/* Why Multivision */}
            <SectionWrapper className="bg-brand-surface/30">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {whyUs.map((item, i) => (
                        <motion.div
                            key={item.value}
                            className="rounded-2xl border border-brand-border bg-brand-surface p-8 text-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                        >
                            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand-cyan/10">
                                <item.icon className="w-7 h-7 text-brand-cyan" />
                            </div>
                            <h3 className="font-heading text-lg font-bold mb-3">{item.value}</h3>
                            <p className="text-sm text-brand-text-secondary leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Ad Formats */}
            <SectionWrapper>
                <h2 className="font-heading text-3xl font-bold text-center mb-4 md:text-4xl">
                    Advertising Formats
                </h2>
                <p className="text-center text-brand-text-secondary mb-12 max-w-xl mx-auto">
                    Flexible options to match your campaign goals and budget.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {adFormats.map((format, i) => (
                        <motion.div
                            key={format.title}
                            className="rounded-2xl border border-brand-border bg-brand-surface p-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <format.icon className="w-8 h-8 text-brand-cyan mb-4" />
                            <h3 className="font-heading font-bold mb-2">{format.title}</h3>
                            <p className="text-xs text-brand-text-secondary leading-relaxed">{format.description}</p>
                        </motion.div>
                    ))}
                </div>
            </SectionWrapper>

            {/* Inquiry Form */}
            <SectionWrapper className="bg-brand-surface/30">
                <div className="mx-auto max-w-2xl">
                    <h2 className="font-heading text-3xl font-bold text-center mb-4 md:text-4xl">
                        Get in Touch
                    </h2>
                    <p className="text-center text-brand-text-secondary mb-10">
                        Tell us about your brand and goals. We&apos;ll create a custom sponsorship package.
                    </p>

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="rounded-2xl border border-brand-cyan/30 bg-brand-cyan/5 p-10 text-center"
                        >
                            <h3 className="font-heading text-2xl font-bold text-brand-cyan">
                                Thank You! 🎉
                            </h3>
                            <p className="mt-3 text-brand-text-secondary">
                                We&apos;ve received your inquiry and will be in touch within 48 hours.
                            </p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text-secondary mb-2">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full rounded-lg border border-brand-border bg-brand-surface px-4 py-3 text-sm text-brand-text focus:border-brand-cyan focus:outline-none transition-colors"
                                        placeholder="Jane Smith"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text-secondary mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full rounded-lg border border-brand-border bg-brand-surface px-4 py-3 text-sm text-brand-text focus:border-brand-cyan focus:outline-none transition-colors"
                                        placeholder="Acme Inc."
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text-secondary mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full rounded-lg border border-brand-border bg-brand-surface px-4 py-3 text-sm text-brand-text focus:border-brand-cyan focus:outline-none transition-colors"
                                        placeholder="jane@acme.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text-secondary mb-2">
                                        Budget Range
                                    </label>
                                    <select
                                        value={formData.budget}
                                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                        className="w-full rounded-lg border border-brand-border bg-brand-surface px-4 py-3 text-sm text-brand-text focus:border-brand-cyan focus:outline-none transition-colors"
                                    >
                                        <option value="">Select budget</option>
                                        <option value="under-5k">Under $5,000</option>
                                        <option value="5k-15k">$5,000 – $15,000</option>
                                        <option value="15k-50k">$15,000 – $50,000</option>
                                        <option value="50k+">$50,000+</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text-secondary mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full rounded-lg border border-brand-border bg-brand-surface px-4 py-3 text-sm text-brand-text focus:border-brand-cyan focus:outline-none transition-colors resize-none"
                                    placeholder="Tell us about your goals and the audience you'd like to reach..."
                                />
                            </div>
                            <div className="text-center">
                                <Button variant="cyan" type="submit">
                                    Send Inquiry
                                </Button>
                            </div>
                        </form>
                    )}
                </div>
            </SectionWrapper>
        </div>
    );
}

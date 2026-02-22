"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";

const benefits = [
    "Full production — recording, editing, mixing, mastering",
    "Professional branding — logo, cover art, visual identity",
    "Multi-platform distribution — Spotify, Apple, YouTube, and more",
    "Monetization strategy — sponsorships, partnerships, revenue streams",
    "Network cross-promotion — exposure to the entire Multivision audience",
    "Growth analytics — data-driven insights to scale your show",
];

const niches = [
    "Culture & Society",
    "Comedy & Entertainment",
    "Education & Learning",
    "Health & Lifestyle",
    "Music & Arts",
    "Spanish-Language Content",
    "Business & Finance",
    "Other",
];

export default function ApplyPage() {
    const [formData, setFormData] = useState({
        name: "", email: "", showName: "", niche: "", audienceSize: "",
        description: "", links: "", goals: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await fetch("/api/apply", {
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
            <section className="px-6 py-16 md:py-24">
                <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
                    {/* Copy */}
                    <div>
                        <motion.span
                            className="inline-block rounded-full bg-brand-green/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-green mb-6"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            For Creators
                        </motion.span>
                        <motion.h1
                            className="font-heading text-4xl font-bold md:text-5xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            Join the{" "}
                            <span className="text-brand-green">Multivision</span>{" "}
                            Network
                        </motion.h1>
                        <motion.p
                            className="mt-4 text-lg text-brand-text-secondary"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            We handle the business of podcasting so you can focus on what matters most — your voice and your audience.
                        </motion.p>

                        {/* Benefits */}
                        <div className="mt-8 space-y-3">
                            {benefits.map((benefit, i) => (
                                <motion.div
                                    key={benefit}
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + i * 0.08 }}
                                >
                                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                                        <Check className="w-3 h-3 text-brand-green" />
                                    </div>
                                    <span className="text-sm text-brand-text-secondary">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        {submitted ? (
                            <div className="rounded-2xl border border-brand-green/30 bg-brand-green/5 p-10 text-center">
                                <h3 className="font-heading text-2xl font-bold text-brand-green">
                                    Application Received! 🎉
                                </h3>
                                <p className="mt-3 text-brand-text-secondary">
                                    We&apos;ll review your application and reach out within 5 business days.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="rounded-2xl border border-brand-border bg-brand-surface p-8 space-y-5"
                            >
                                <h2 className="font-heading text-xl font-bold mb-2">
                                    Apply to Join
                                </h2>

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text-secondary mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full rounded-lg border border-brand-border bg-brand-black px-4 py-3 text-sm text-brand-text focus:border-brand-green focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text-secondary mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full rounded-lg border border-brand-border bg-brand-black px-4 py-3 text-sm text-brand-text focus:border-brand-green focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text-secondary mb-2">
                                            Show Name / Concept
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.showName}
                                            onChange={(e) => setFormData({ ...formData, showName: e.target.value })}
                                            className="w-full rounded-lg border border-brand-border bg-brand-black px-4 py-3 text-sm text-brand-text focus:border-brand-green focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text-secondary mb-2">
                                            Content Niche
                                        </label>
                                        <select
                                            value={formData.niche}
                                            onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                                            className="w-full rounded-lg border border-brand-border bg-brand-black px-4 py-3 text-sm text-brand-text focus:border-brand-green focus:outline-none transition-colors"
                                        >
                                            <option value="">Select niche</option>
                                            {niches.map((n) => (
                                                <option key={n} value={n}>{n}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text-secondary mb-2">
                                        Current Audience Size
                                    </label>
                                    <select
                                        value={formData.audienceSize}
                                        onChange={(e) => setFormData({ ...formData, audienceSize: e.target.value })}
                                        className="w-full rounded-lg border border-brand-border bg-brand-black px-4 py-3 text-sm text-brand-text focus:border-brand-green focus:outline-none transition-colors"
                                    >
                                        <option value="">Select audience size</option>
                                        <option value="new">Just starting out</option>
                                        <option value="small">Under 1,000 listeners/month</option>
                                        <option value="medium">1,000 – 10,000 listeners/month</option>
                                        <option value="large">10,000+ listeners/month</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text-secondary mb-2">
                                        Show Description
                                    </label>
                                    <textarea
                                        rows={3}
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full rounded-lg border border-brand-border bg-brand-black px-4 py-3 text-sm text-brand-text focus:border-brand-green focus:outline-none transition-colors resize-none"
                                        placeholder="What is your show about? Who is your target audience?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-text-secondary mb-2">
                                        Links (website, social, existing episodes)
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.links}
                                        onChange={(e) => setFormData({ ...formData, links: e.target.value })}
                                        className="w-full rounded-lg border border-brand-border bg-brand-black px-4 py-3 text-sm text-brand-text focus:border-brand-green focus:outline-none transition-colors"
                                        placeholder="https://..."
                                    />
                                </div>

                                <div className="pt-2">
                                    <Button variant="green" type="submit">
                                        Submit Application
                                    </Button>
                                </div>
                            </form>
                        )}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

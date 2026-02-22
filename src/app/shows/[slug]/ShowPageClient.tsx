"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Button from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ShowCard from "@/components/ui/ShowCard";
import type { Show } from "@/data/shows";

interface ShowPageClientProps {
    show: Show;
    relatedShows: Show[];
}

export default function ShowPageClient({ show, relatedShows }: ShowPageClientProps) {
    return (
        <div className="pt-20">
            {/* Show Hero */}
            <section className="relative px-6 py-16 md:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
                        {/* Cover Art */}
                        <motion.div
                            className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden border border-brand-border"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Image
                                src={show.coverImage}
                                alt={show.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>

                        {/* Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <span className="inline-block rounded-full bg-brand-coral/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-coral mb-4">
                                {show.category}
                            </span>
                            <h1 className="font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
                                {show.title}
                            </h1>
                            <p className="mt-2 text-xl text-brand-text-secondary italic">
                                {show.tagline}
                            </p>
                            <p className="mt-6 text-brand-text-secondary leading-relaxed">
                                {show.description}
                            </p>

                            {/* Hosts */}
                            <div className="mt-8">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-text-secondary mb-6">
                                    Meet the {show.hosts.length > 1 ? "Hosts" : "Host"}
                                </h3>
                                <div className="flex flex-col gap-8">
                                    {show.hosts.map((host, index) => (
                                        <div key={index} className="flex items-start gap-5">
                                            <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-brand-border shadow-sm">
                                                <Image
                                                    src={host.image}
                                                    alt={host.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-heading font-bold text-xl">{host.name}</h4>
                                                <p className="text-xs text-brand-coral font-bold uppercase tracking-wider mb-2">
                                                    {host.role}
                                                </p>
                                                <p className="text-sm text-brand-text-secondary leading-relaxed max-w-md">
                                                    {host.bio}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Platform Links */}
                            <div className="mt-8 flex flex-wrap gap-3">
                                {show.platforms.spotify && (
                                    <Button variant="secondary" href={show.platforms.spotify}>
                                        <ExternalLink className="w-4 h-4" /> Spotify
                                    </Button>
                                )}
                                {show.platforms.apple && (
                                    <Button variant="secondary" href={show.platforms.apple}>
                                        <ExternalLink className="w-4 h-4" /> Apple Podcasts
                                    </Button>
                                )}
                                {show.platforms.youtube && (
                                    <Button variant="secondary" href={show.platforms.youtube}>
                                        <ExternalLink className="w-4 h-4" /> YouTube
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sponsor This Show CTA */}
            <section className="px-6">
                <div className="mx-auto max-w-7xl rounded-2xl border border-brand-cyan/20 bg-brand-cyan/5 p-8 md:p-12 text-center">
                    <h3 className="font-heading text-2xl font-bold">
                        Sponsor {show.title}
                    </h3>
                    <p className="mt-2 text-brand-text-secondary max-w-lg mx-auto">
                        Reach an engaged audience through authentic host-read ads and branded content.
                    </p>
                    <div className="mt-6">
                        <Button variant="cyan" href="/sponsors">
                            Inquire About Sponsorship
                        </Button>
                    </div>
                </div>
            </section>

            {/* Related Shows */}
            {relatedShows.length > 0 && (
                <SectionWrapper>
                    <h2 className="font-heading text-2xl font-bold mb-8 text-center">
                        More from the Network
                    </h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {relatedShows.map((s) => (
                            <ShowCard
                                key={s.slug}
                                slug={s.slug}
                                title={s.title}
                                tagline={s.tagline}
                                category={s.category}
                                coverImage={s.coverImage}
                            />
                        ))}
                    </div>
                </SectionWrapper>
            )}
        </div>
    );
}

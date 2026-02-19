"use client";

import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import ShowCard from "@/components/ui/ShowCard";
import { shows } from "@/data/shows";

export default function ShowsPage() {
    return (
        <div className="pt-24">
            <SectionWrapper>
                <SectionHeading
                    title="All Shows"
                    subtitle="Explore the full Multivision Network roster. Culture, comedy, education, and everything in between."
                />
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {shows.map((show) => (
                        <ShowCard
                            key={show.slug}
                            slug={show.slug}
                            title={show.title}
                            tagline={show.tagline}
                            category={show.category}
                            coverImage={show.coverImage}
                        />
                    ))}
                </div>
            </SectionWrapper>
        </div>
    );
}

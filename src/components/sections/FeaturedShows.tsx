"use client";

import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import ShowCard from "@/components/ui/ShowCard";
import { getFeaturedShows } from "@/data/shows";

export default function FeaturedShows() {
    const featured = getFeaturedShows();

    return (
        <SectionWrapper id="shows">
            <SectionHeading
                title="Our Shows"
                subtitle="Culture-driven content across genres, languages, and audiences."
                accentColor="coral"
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {featured.map((show) => (
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
    );
}

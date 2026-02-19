import { Metadata } from "next";
import { notFound } from "next/navigation";
import { shows, getShowBySlug, getRelatedShows } from "@/data/shows";
import ShowPageClient from "./ShowPageClient";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return shows.map((show) => ({ slug: show.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const show = getShowBySlug(slug);
    if (!show) return {};
    return {
        title: show.title,
        description: show.tagline,
        openGraph: {
            title: `${show.title} | Multivision Network`,
            description: show.tagline,
        },
    };
}

export default async function ShowPage({ params }: PageProps) {
    const { slug } = await params;
    const show = getShowBySlug(slug);
    if (!show) notFound();

    const relatedShows = getRelatedShows(slug);

    return <ShowPageClient show={show} relatedShows={relatedShows} />;
}

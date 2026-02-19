export interface Show {
    slug: string;
    title: string;
    tagline: string;
    category: "culture" | "comedy" | "education" | "lifestyle" | "spanish";
    coverImage: string;
    hosts: string[];
    platforms: {
        spotify?: string;
        apple?: string;
        youtube?: string;
    };
    featured: boolean;
    status: "active" | "coming-soon";
    description: string;
}

export const shows: Show[] = [
    {
        slug: "opinion-junkyard",
        title: "Opinion Junkyard",
        tagline: "Where hot takes go to live forever.",
        category: "culture",
        coverImage: "/shows/opinion-junkyard.svg",
        hosts: ["TBD"],
        platforms: {
            spotify: "#",
            apple: "#",
            youtube: "#",
        },
        featured: true,
        status: "active",
        description:
            "A raw, unfiltered space where opinions aren't just shared — they're debated, dissected, and left out in the open. No topic is off limits. No take is too hot. This is where culture, politics, and everyday life collide.",
    },
    {
        slug: "100-ways",
        title: "100 Ways",
        tagline: "One hundred paths. Infinite possibilities.",
        category: "lifestyle",
        coverImage: "/shows/100-ways.svg",
        hosts: ["TBD"],
        platforms: {
            spotify: "#",
            apple: "#",
            youtube: "#",
        },
        featured: true,
        status: "active",
        description:
            "Exploring 100 different ways to approach life's biggest challenges — from building wealth to finding purpose. Each episode tackles a new angle with actionable insights and real stories.",
    },
    {
        slug: "hyphytown",
        title: "HyphyTown",
        tagline: "Bay Area energy. Global reach.",
        category: "culture",
        coverImage: "/shows/hyphytown.svg",
        hosts: ["TBD"],
        platforms: {
            spotify: "#",
            apple: "#",
            youtube: "#",
        },
        featured: true,
        status: "active",
        description:
            "Straight from the Bay Area, HyphyTown brings the energy, the culture, and the conversations that define a generation. Music, lifestyle, and the stories behind the movement.",
    },
    {
        slug: "reprograma-tu-mente",
        title: "Reprograma Tu Mente",
        tagline: "Transforma tu pensamiento. Transforma tu vida.",
        category: "spanish",
        coverImage: "/shows/reprograma-tu-mente.svg",
        hosts: ["TBD"],
        platforms: {
            spotify: "#",
            apple: "#",
            youtube: "#",
        },
        featured: true,
        status: "active",
        description:
            "Un podcast en español dedicado al crecimiento personal y la mentalidad ganadora. Cada episodio ofrece herramientas prácticas para reprogramar tu mente y alcanzar tu máximo potencial.",
    },
    {
        slug: "drop-that",
        title: "Drop That!",
        tagline: "Drop the beat. Drop the knowledge.",
        category: "comedy",
        coverImage: "/shows/drop-that.svg",
        hosts: ["TBD"],
        platforms: {
            spotify: "#",
            apple: "#",
            youtube: "#",
        },
        featured: true,
        status: "active",
        description:
            "Where music meets conversation. Drop That! brings together artists, creators, and culture-makers to break down what's hot, what's next, and what needs to be said.",
    },
    {
        slug: "good-looking-english",
        title: "Good Looking English",
        tagline: "Learn English the way it's actually spoken.",
        category: "education",
        coverImage: "/shows/good-looking-english.svg",
        hosts: ["TBD"],
        platforms: {
            spotify: "#",
            apple: "#",
            youtube: "#",
        },
        featured: true,
        status: "active",
        description:
            "Forget textbooks. Good Looking English teaches real-world English through culture, slang, and everyday conversation. Designed for non-native speakers who want to sound natural.",
    },
];

export function getShowBySlug(slug: string): Show | undefined {
    return shows.find((show) => show.slug === slug);
}

export function getFeaturedShows(): Show[] {
    return shows.filter((show) => show.featured);
}

export function getRelatedShows(currentSlug: string, limit = 3): Show[] {
    return shows.filter((show) => show.slug !== currentSlug).slice(0, limit);
}

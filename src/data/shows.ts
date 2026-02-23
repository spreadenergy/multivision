export interface Host {
    name: string;
    role: string;
    bio: string;
    image: string;
}

export interface Show {
    slug: string;
    title: string;
    tagline: string;
    category: "culture" | "comedy" | "education" | "lifestyle" | "spanish" | "intellectual" | "marketing" | "spirituality" | "art";
    coverImage: string;
    hosts: Host[];
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
        slug: "wet-paint",
        title: "Wet Paint",
        tagline: "Art, vulnerability, and creative reinvention.",
        category: "art",
        coverImage: "/shows/wet-paint.jpg",
        hosts: [
            {
                name: "Maria Williams",
                role: "Host",
                bio: "Maria Williams (Art by Maudie) explores the emotional and spiritual layers behind artistic creation.",
                image: "/hosts/maria-williams.png"
            }
        ],
        platforms: { spotify: "#", apple: "#", youtube: "#" },
        featured: true,
        status: "active",
        description: "A raw, expressive podcast exploring the emotional and spiritual layers behind artistic creation. Conversations about doubt, discipline, identity shifts, and becoming through art."
    },
    {
        slug: "caesar-chuy",
        title: "Caesar & Chuy",
        tagline: "Culture, comedy, and animated insights.",
        category: "comedy",
        coverImage: "/shows/caesar-chuy.png",
        hosts: [
            {
                name: "Keu Reyes",
                role: "Host",
                bio: "Keu Reyes explores systems, influence, and philosophy with a sharp, cultural lens.",
                image: "/hosts/keu-reyes.webp"
            },
            {
                name: "Rick Najera",
                role: "Host",
                bio: "Award-winning writer, actor, and director Rick Najera brings his vast experience in comedy and storytelling.",
                image: "/hosts/rick-najera.jpg"
            },
            {
                name: "Alfonso Amey",
                role: "Animator",
                bio: "Alfonso Amey provides the dynamic visual energy and animation that brings the show to life.",
                image: "/hosts/alfonso-amey.jpg"
            }
        ],
        platforms: { spotify: "#", apple: "#", youtube: "#" },
        featured: true,
        status: "active",
        description: "A unique blend of culture and comedy, featuring Keu Reyes and Rick Najera, with animation by Alfonso Amey."
    },
    {
        slug: "higher-signals",
        title: "Higher Signals",
        tagline: "Spiritual insight and angelic guidance.",
        category: "spirituality",
        coverImage: "/shows/higher-signals.jpg",
        hosts: [
            {
                name: "Eve Solara",
                role: "Host",
                bio: "Eve Solara provides reflective spiritual insight centered on divine messages and higher consciousness.",
                image: "/hosts/eve-solara.png"
            }
        ],
        platforms: { spotify: "#", apple: "#", youtube: "#" },
        featured: true,
        status: "active",
        description: "A reflective spiritual podcast centered on divine messages, intuitive downloads, symbolism, and higher consciousness awareness."
    },
    {
        slug: "opinion-junkyard",
        title: "Opinion Junkyard",
        tagline: "Cultural commentary and unfiltered debate.",
        category: "culture",
        coverImage: "/shows/opinion-junkyard.jpg",
        hosts: [
            {
                name: "Various Hosts",
                role: "Hosts",
                bio: "A dynamic rotation of voices bringing sharp, opinion-driven discussions on culture and politics.",
                image: "/hosts/placeholder.webp"
            }
        ],
        platforms: { spotify: "#", apple: "#", youtube: "#" },
        featured: true,
        status: "active",
        description: "Sharp, opinion-driven discussions on culture, politics, relationships, and current events with bold personality and no polish."
    },
    {
        slug: "100-ways",
        title: "100 Ways",
        tagline: "Creative problem solving and multiplicity thinking.",
        category: "lifestyle",
        coverImage: "/shows/100-ways.png",
        hosts: [
            {
                name: "Dio Palencia",
                role: "Co-Host",
                bio: "Dio Palencia explores multiplicity thinking and creative problem-solving.",
                image: "/hosts/placeholder.webp"
            },
            {
                name: "Yaneva Mercado",
                role: "Co-Host",
                bio: "Yaneva Mercado brings insights into approaching life's challenges from 100 different angles.",
                image: "/hosts/yaneva-mercado.png"
            }
        ],
        platforms: { spotify: "#", apple: "#", youtube: "#" },
        featured: true,
        status: "active",
        description: "Each episode explores 100 ways to approach a single theme, reinforcing the idea that there is never just one way."
    },
    {
        slug: "la-consulta",
        title: "La Consulta",
        tagline: "Personal growth and real-life dilemmas.",
        category: "spanish",
        coverImage: "/shows/la-consulta.png",
        hosts: [
            {
                name: "Carla Marco",
                role: "Host",
                bio: "Carla Marco offers thoughtful conversations about relationships and identity in this Spanish-language advice podcast.",
                image: "/hosts/carla-marco.png"
            }
        ],
        platforms: { spotify: "#", apple: "#", youtube: "#" },
        featured: true,
        status: "active",
        description: "A Spanish-language advice and reflection podcast where listeners’ questions become thoughtful conversations about relationships, identity, and life decisions."
    },
    {
        slug: "reprograma-tu-mente",
        title: "Reprograma Tu Mente",
        tagline: "Neuroprogramming and mental transformation.",
        category: "spanish",
        coverImage: "/shows/reprograma-tu-mente.png",
        hosts: [
            {
                name: "Dr. Alfredo Arias",
                role: "Host",
                bio: "Dr. Alfredo Arias focuses on subconscious reconditioning and radical self-training through applied psychology.",
                image: "/hosts/alfredo-arias.png"
            }
        ],
        platforms: { spotify: "#", apple: "#", youtube: "#" },
        featured: true,
        status: "active",
        description: "A Spanish-language show focused on subconscious reconditioning, male development, and radical self-training through applied psychology."
    },
    {
        slug: "spread-uno",
        title: "SPREAD Uno Podcast",
        tagline: "Modern marketing and branding in Spanish.",
        category: "marketing",
        coverImage: "/shows/spread-uno.png",
        hosts: [
            {
                name: "Ghansery Tovar",
                role: "Host",
                bio: "Ghansery Tovar provides insights into brand building and creative strategy across Latin American markets.",
                image: "/hosts/ghansery-tovar.png"
            }
        ],
        platforms: { spotify: "#", apple: "#", youtube: "#" },
        featured: true,
        status: "active",
        description: "Insights into brand building, influence systems, and creative strategy across Latin American markets."
    },
    {
        slug: "reminding-yourself",
        title: "Reminding Yourself",
        tagline: "Men’s mental resilience and rebuilding.",
        category: "lifestyle",
        coverImage: "/shows/reminding-yourself.png",
        hosts: [
            {
                name: "Keu Reyes",
                role: "Host",
                bio: "Keu Reyes reflects on discipline, fatherhood, emotional recalibration, and personal reconstruction.",
                image: "/hosts/keu-reyes.webp"
            }
        ],
        platforms: { spotify: "#", apple: "#", youtube: "#" },
        featured: true,
        status: "active",
        description: "Reflections on discipline, fatherhood, emotional recalibration, burnout recovery, and personal reconstruction."
    },
    {
        slug: "seduccion-estrategica",
        title: "Seducción Estratégica",
        tagline: "Spanish-language seduction systems.",
        category: "spanish",
        coverImage: "/shows/seduccion-estrategica.png",
        hosts: [
            {
                name: "Keu Reyes",
                role: "Host",
                bio: "Keu Reyes dives into human mating strategy, emotional intelligence, and applied psychological influence.",
                image: "/hosts/keu-reyes.webp"
            }
        ],
        platforms: { spotify: "#", apple: "#", youtube: "#" },
        featured: true,
        status: "active",
        description: "A deeper dive into human mating strategy, emotional intelligence, and applied psychological influence."
    },
    {
        slug: "good-looking-english",
        title: "Good-Looking English",
        tagline: "Cultural commentary with sharp humor.",
        category: "comedy",
        coverImage: "/shows/good-looking-english.png",
        hosts: [
            {
                name: "TBD",
                role: "Host",
                bio: "Driven by conservative takes, cultural observations, and comedic insight.",
                image: "/hosts/placeholder.webp"
            }
        ],
        platforms: { spotify: "#", apple: "#", youtube: "#" },
        featured: true,
        status: "active",
        description: "An ironic title for a show driven by conservative takes, cultural observations, and comedic insight."
    },
    {
        slug: "hyphytown",
        title: "HyphyTown",
        tagline: "Energy, music, Bay Area culture.",
        category: "culture",
        coverImage: "/shows/hyphytown.jpg",
        hosts: [
            {
                name: "Demarco Allen",
                role: "Host",
                bio: "Demarco Allen brings high-energy cultural conversations centered around Bay Area movement and sound.",
                image: "/hosts/demarco-allen.png"
            }
        ],
        platforms: { spotify: "#", apple: "#", youtube: "#" },
        featured: true,
        status: "active",
        description: "A high-energy cultural show centered around movement, sound, and creative expression."
    },
    {
        slug: "artistic-warfare",
        title: "The Keu Reyes Project / Artistic Warfare",
        tagline: "Systems, influence, philosophy, and power.",
        category: "intellectual",
        coverImage: "/shows/artistic-warfare.jpg",
        hosts: [
            {
                name: "Keu Reyes",
                role: "Host",
                bio: "Keu Reyes explores psychological systems, governance theory, and human evolution concepts.",
                image: "/hosts/keu-reyes.webp"
            }
        ],
        platforms: { spotify: "#", apple: "#", youtube: "#" },
        featured: true,
        status: "active",
        description: "A flagship intellectual property platform that explores psychological systems, governance theory, and human evolution concepts."
    },
    {
        slug: "seductioned",
        title: "SeductionEd",
        tagline: "Education in attraction dynamics.",
        category: "education",
        coverImage: "/shows/seductioned.png",
        hosts: [
            {
                name: "Keu Reyes",
                role: "Host",
                bio: "Keu Reyes teaches the mechanics of attraction, signaling, and human behavioral economics.",
                image: "/hosts/keu-reyes.webp"
            }
        ],
        platforms: { spotify: "#", apple: "#", youtube: "#" },
        featured: true,
        status: "active",
        description: "Structured episodes teaching the mechanics of attraction, signaling, and human behavioral economics."
    }
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

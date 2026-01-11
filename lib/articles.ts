// src/lib/articles.ts

export interface Article {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
    image: string;
    featured?: boolean;
}

export const ALL_ARTICLES: Article[] = [
    {
        slug: "dlug-technologiczny-w-scaleupach",
        title: "Dług technologiczny to cichy zabójca Twojego Exit Planu.",
        excerpt: "Analiza 50 polskich startupów, które straciły wycenę przez spaghetti code. Jak audytować architekturę przed rundą B?",
        date: "12 STY 2024",
        author: "Piotr Nowak, CTO",
        category: "Tech Strategy",
        readTime: "8 min",
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2574&auto=format&fit=crop",
        featured: true
    },
    {
        slug: "ai-w-fintech",
        title: "AI w FinTechu: Hype vs ROI.",
        excerpt: "Wszyscy chcą AI, ale nikt nie wie po co. Pokazujemy twarde dane z wdrożenia CreditScore AI i realne oszczędności.",
        date: "05 STY 2024",
        author: "Kamil Ketelman, CEO",
        category: "Market Intelligence",
        readTime: "6 min",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop"
    },
    {
        slug: "offshore-vs-nearshore",
        title: "Dlaczego Indie już nie są tanie?",
        excerpt: "Koszty poprawek po tanim outsourcingu przekraczają koszty polskiego seniora. Matematyka wdrożeń w modelu Nearshore.",
        date: "28 GRU 2023",
        author: "Janusz Kulesza, Partner",
        category: "Business",
        readTime: "12 min",
        image: "https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=2670&auto=format&fit=crop"
    },
    {
        slug: "mvp-to-nie-prototyp",
        title: "MVP, które zarabia od dnia zero.",
        excerpt: "Przestań budować 'prototypy do szuflady'. Jak zwalidować pomysł biznesowy bez pisania linijki kodu backendowego.",
        date: "15 GRU 2023",
        author: "Kamil Ketelman, CEO",
        category: "Venture Building",
        readTime: "5 min",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
    }
];
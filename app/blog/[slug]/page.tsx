import { Metadata } from "next";
import Image from "next/image"; // Do optymalizacji obrazów
import { Section } from "@/components/Section";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Linkedin, Twitter, Share2 } from "lucide-react";
import { notFound } from "next/navigation";
import { ALL_ARTICLES } from "@/lib/articles";
import { Paragraph } from "@/components/Typography";
interface PageProps {
    params: Promise<{ slug: string }>;
}

// === 1. GENEROWANIE ŚCIEŻEK STATYCZNYCH (SSG) ===
export async function generateStaticParams() {
    return ALL_ARTICLES.map((article) => ({
        slug: article.slug,
    }));
}

// === 2. DYNAMICZNE METADANE (SEO) ===
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = ALL_ARTICLES.find((a) => a.slug === slug);

    if (!article) {
        return {
            title: "Artykuł nie znaleziony",
        };
    }

    return {
        title: `${article.title} | Ketelman Insights`,
        description: article.excerpt, // Używamy zajawki jako meta description
        openGraph: {
            title: article.title,
            description: article.excerpt,
            type: "article",
            publishedTime: article.date, // Format YYYY-MM-DD
            authors: [article.author],
            url: `https://ketelman.com/blog/${article.slug}`,
            images: [
                {
                    url: article.image, // URL do obrazka
                    width: 1200,
                    height: 630,
                    alt: article.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.excerpt,
            images: [article.image],
        },
    };
}

// === 3. GŁÓWNY KOMPONENT ===
export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = ALL_ARTICLES.find((a) => a.slug === slug);

    if (!article) {
        return notFound();
    }

    const nextArticle = ALL_ARTICLES.find(a => a.slug !== article.slug);

    // --- DANE STRUKTURALNE (SCHEMA.ORG) ---
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": article.title,
        "image": [article.image],
        "datePublished": article.date,
        "dateModified": article.date, // Jeśli masz datę modyfikacji, dodaj ją tutaj
        "author": {
            "@type": "Person",
            "name": article.author,
            "url": "https://ketelman.com/o-nas" // Link do bio autora (opcjonalnie)
        },
        "publisher": {
            "@type": "Organization",
            "name": "Ketelman Holding",
            "logo": {
                "@type": "ImageObject",
                "url": "https://ketelman.com/logo.png" // Podmień na URL logo
            }
        },
        "description": article.excerpt,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://ketelman.com/blog/${article.slug}`
        }
    };

    // Breadcrumbs Schema
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Strona Główna",
            "item": "https://ketelman.com"
        }, {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://ketelman.com/blog"
        }, {
            "@type": "ListItem",
            "position": 3,
            "name": article.title
        }]
    };

    return (
        <>
            {/* Wstrzyknięcie JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* article tag obejmuje główną treść */}
            <article>
                {/* === HEADER ARTYKUŁU === */}
                <Section className="pt-32 pb-12 md:pt-48 bg-black border-b border-white/10">
                    <header className="max-w-4xl mx-auto">
                        {/* Nawigacja powrotna */}
                        <Link href="/blog" className="inline-flex items-center text-accent-blue hover:text-white mb-8 transition-colors text-sm font-mono uppercase tracking-widest group">
                            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                            Powrót do Insightów
                        </Link>

                        {/* Metadane */}
                        <div className="flex flex-wrap items-center gap-4 md:gap-8 text-concrete-gray text-xs md:text-sm font-mono uppercase tracking-widest mb-6">
                            <span className="text-accent-blue border border-accent-blue/20 px-2 py-1 bg-accent-blue/5">
                                {article.category}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar size={14} /> 
                                <time dateTime={article.date}>{article.date}</time>
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock size={14} /> {article.readTime} read
                            </span>
                        </div>

                        {/* Tytuł */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight mb-8">
                            {article.title}
                        </h1>

                        {/* Autor */}
                        <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white font-bold text-xl overflow-hidden relative">
                                {/* Opcjonalnie: Zdjęcie autora zamiast inicjału */}
                                {article.author.charAt(0)}
                            </div>
                            <div>
                                <p className="text-white text-sm font-bold">{article.author}</p>
                                <p className="text-concrete-gray text-xs">Ketelman Holding Expert</p>
                            </div>
                        </div>
                    </header>
                </Section>

                {/* === HERO IMAGE === */}
                <div className="w-full h-[40vh] md:h-[60vh] relative overflow-hidden bg-gray-900">
                    <Image
                        src={article.image}
                        alt={`Ilustracja do artykułu: ${article.title}`}
                        fill
                        priority // Ładuje priorytetowo (LCP)
                        className="object-cover opacity-80"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" aria-hidden="true"></div>
                </div>

                {/* === TREŚĆ ARTYKUŁU === */}
                <Section className="py-16 md:py-24 relative">
                    <div className="grid lg:grid-cols-12 gap-12">

                        {/* Lewa kolumna: Social Share (Sticky) */}
                        <aside className="hidden lg:block lg:col-span-2" aria-label="Udostępnij">
                            <div className="sticky top-32 flex flex-col gap-4 items-center">
                                <p className="text-[10px] uppercase text-white/40 mb-2 writing-vertical-lr">Share</p>
                                <button aria-label="Udostępnij na LinkedIn" className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors">
                                    <Linkedin size={20} />
                                </button>
                                <button aria-label="Udostępnij na Twitterze" className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors">
                                    <Twitter size={20} />
                                </button>
                                <button aria-label="Skopiuj link" className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors">
                                    <Share2 size={20} />
                                </button>
                            </div>
                        </aside>

                        {/* Środkowa kolumna: Tekst */}
                        <div className="lg:col-span-8">

                            {/* Wstęp (Lead) */}
                            <p className="text-xl md:text-2xl text-white leading-relaxed mb-10 font-serif">
                                {article.excerpt} To jest miejsce na rozszerzony lead, który wprowadza czytelnika w kontekst problemu biznesowego. W świecie, gdzie technologia jest towarem, to strategia decyduje o zwycięstwie.
                            </p>

                            {/* Box: Key Takeaways */}
                            <div className="bg-blue-950/10 border-l-4 border-accent-blue p-8 mb-12 my-10 rounded-r-lg">
                                <h3 className="text-accent-blue font-bold uppercase tracking-widest text-xs mb-4">Executive Summary</h3>
                                <ul className="space-y-3 text-white/90">
                                    <li className="flex gap-3">
                                        <span className="text-accent-blue font-bold" aria-hidden="true">•</span>
                                        Skalowanie długu technologicznego to najczęstsza przyczyna upadku w fazie Growth.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-accent-blue font-bold" aria-hidden="true">•</span>
                                        Audyt architektury powinien odbywać się przed każdą rundą inwestycyjną.
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-accent-blue font-bold" aria-hidden="true">•</span>
                                        Wybór technologii &quot;modnej&quot; zamiast &quot;sprawdzonej&quot; kosztuje średnio 30% więcej w utrzymaniu.
                                    </li>
                                </ul>
                            </div>

                            {/* Treść właściwa */}
                            <div className="prose prose-invert prose-lg max-w-none text-concrete-gray">
                                <h2 className="text-white font-bold text-3xl mt-12 mb-6">1. Diagnoza problemu</h2>
                                <p className="mb-6 leading-relaxed">
                                    Większość startupów zaczyna od MVP, co jest słusznym podejściem. Problem pojawia się, gdy kod napisany &quot;na szybko&quot; staje się fundamentem systemu obsługującego miliony użytkowników. To moment, w którym dług technologiczny przestaje być metaforą, a staje się pozycją w P&L (Profit and Loss).
                                </p>
                                <p className="mb-6 leading-relaxed">
                                    Nasze doświadczenia z wdrażania systemów dla bankowości pokazują, że refaktoryzacja na wczesnym etapie kosztuje 10x mniej niż przepisywanie systemu po 2 latach.
                                </p>

                                <blockquote className="border-l-2 border-white/20 pl-6 italic text-white my-10 text-xl font-serif">
                                    &quot;Kod jest jak glina. Dopóki jest mokry, możesz go kształtować. Gdy stwardnieje (wejdzie na produkcję), jedynym sposobem na zmianę kształtu jest rozbicie go i ulepienie od nowa.&quot;
                                </blockquote>

                                <h2 className="text-white font-bold text-3xl mt-12 mb-6">2. Strategia wyjścia (Exit Strategy)</h2>
                                <p className="mb-6 leading-relaxed">
                                    Inwestorzy patrzą nie tylko na przychód. Patrzą na skalowalność. System, który wymaga 10 nowych programistów na każde 10k nowych użytkowników, nie jest aktywem. Jest zobowiązaniem.
                                </p>
                                <p className="leading-relaxed">
                                    W Ketelman Holding stosujemy zasadę &quot;Clean Architecture or Nothing&quot;. Nawet w projektach wewnętrznych zakładamy, że kod będzie czytany przez audytorów zewnętrznych.
                                </p>
                            </div>
                        </div>

                        <div className="hidden lg:block lg:col-span-2"></div>
                    </div>
                </Section>
            </article>

            {/* === NEXT READ === */}
            {nextArticle && (
                <Section className="border-t border-white/10 py-16">
                    <p className="text-concrete-gray font-mono text-xs uppercase tracking-widest mb-8">Czytaj dalej</p>
                    <div className="grid md:grid-cols-2 gap-8 items-center group cursor-pointer">
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-accent-blue transition-colors">
                                <Link href={`/blog/${nextArticle.slug}`}>
                                    {nextArticle.title}
                                </Link>
                            </h3>
                            <p className="text-concrete-gray mb-6">
                                {nextArticle.excerpt}
                            </p>
                            <Link href={`/blog/${nextArticle.slug}`} className="text-accent-blue font-bold uppercase tracking-widest text-xs border-b border-accent-blue/30 pb-1 hover:text-white transition-colors">
                                Przeczytaj artykuł
                            </Link>
                        </div>
                        <div className="h-64 overflow-hidden border border-white/10 opacity-50 group-hover:opacity-100 transition-all relative">
                             <Image 
                                src={nextArticle.image} 
                                alt={nextArticle.title} 
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </Section>
            )}

            {/* === CTA === */}
            <Section variant="highlight" className="text-center py-24">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Potrzebujesz audytu technologicznego?
                </h2>
                <Paragraph className="max-w-2xl mx-auto mb-8">
                    Nasi eksperci (ci sami, którzy piszą te artykuły) mogą przeanalizować Twój projekt.
                </Paragraph>
                <Link href="/kontakt" className="bg-white text-black font-bold px-10 py-4 hover:bg-accent-blue transition-all inline-block">
                    UMÓW ROZMOWĘ
                </Link>
            </Section>
        </>
    );
}
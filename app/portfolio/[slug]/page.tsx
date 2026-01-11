import { Metadata } from "next";
import Image from "next/image"; // Kluczowe dla Core Web Vitals
import { HeadingH2, Paragraph } from "@/components/Typography";
import { Section } from "@/components/Section";
import Link from "next/link";
import { ArrowLeft, Cpu } from "lucide-react";
import { notFound } from "next/navigation";
import { getProject, ALL_PROJECTS } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// === 1. GENEROWANIE ŚCIEŻEK STATYCZNYCH (SSG) ===
// Dzięki temu Next.js wygeneruje pliki HTML dla każdego projektu podczas budowania
export async function generateStaticParams() {
    return ALL_PROJECTS.map((project) => ({
        slug: project.slug,
    }));
}

// === 2. DYNAMICZNE METADANE (SEO) ===
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        return {
            title: "Projekt nie znaleziony",
        };
    }

    return {
        title: `${project.title} - Case Study | Ketelman Portfolio`,
        description: `Zobacz jak zrealizowaliśmy projekt ${project.title} dla klienta ${project.client}. Wyzwanie: ${project.challenge.substring(0, 100)}...`,
        keywords: [project.category, ...project.stack, "case study it", "software house realizacje"],
        openGraph: {
            title: `${project.title} | Realizacja Ketelman Holding`,
            description: project.description,
            images: [{ url: project.heroImage }],
            type: "article", // Lub 'website', ale 'article' pasuje do case study
        },
    };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return notFound();
  }

  // --- 3. DANE STRUKTURALNE (SCHEMA.ORG) ---
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", // Mówimy Google: "To jest opis oprogramowania"
    "name": project.title,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "description": project.description,
    "author": {
        "@type": "Organization",
        "name": "Ketelman Holding"
    },
    "offers": {
        "@type": "Offer",
        "price": "0", // Portfolio nie ma ceny, ale pole jest wymagane w niektórych walidatorach
        "priceCurrency": "PLN"
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
          "name": "Portfolio",
          "item": "https://ketelman.com/portfolio"
      }, {
          "@type": "ListItem",
          "position": 3,
          "name": project.title
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

      {/* === HERO SECTION === */}
      <section className="relative h-[80vh] flex items-end pb-20 overflow-hidden">
        {/* Optymalizacja tła Hero za pomocą Next/Image */}
        <Image
            src={project.heroImage}
            alt={`Tło projektu ${project.title}`}
            fill
            priority // Najważniejszy obrazek na stronie (LCP)
            className="object-cover z-0"
            quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 z-10" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
            <Link href="/portfolio" className="inline-flex items-center text-white/70 hover:text-accent-blue mb-8 transition-colors group text-sm font-mono uppercase tracking-widest">
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={16} />
                Wróć do Portfolio
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <span className="text-accent-blue font-mono uppercase tracking-widest text-sm bg-accent-blue/10 px-3 py-1 rounded-sm border border-accent-blue/20">
                        {project.category}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-4 mb-2 tracking-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl text-concrete-gray max-w-2xl">
                        {project.description}
                    </p>
                </div>
                
                <div className="flex flex-col gap-4 bg-white/5 backdrop-blur-md p-6 border border-white/10 rounded-sm min-w-[250px]">
                    <div>
                        <p className="text-xs text-white/50 uppercase font-mono">Klient</p>
                        <p className="text-white font-bold">{project.client}</p>
                    </div>
                    <div>
                        <p className="text-xs text-white/50 uppercase font-mono">Czas realizacji</p>
                        <p className="text-white font-bold">{project.duration}</p>
                    </div>
                     <div>
                        <p className="text-xs text-white/50 uppercase font-mono">Zespół</p>
                        <p className="text-white font-bold">{project.teamSize}</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* === STATYSTYKI === */}
      <Section variant="highlight" className="border-y border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.stats.map((stat: any, idx: number) => (
                <div key={idx} className="text-center group">
                    <div className="flex justify-center mb-4">
                        <div className="p-4 bg-accent-blue/5 rounded-full border border-accent-blue/20 group-hover:bg-accent-blue/20 transition-colors">
                            <stat.icon className="w-8 h-8 text-accent-blue" aria-hidden="true" />
                        </div>
                    </div>
                    <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                    <p className="text-sm text-concrete-gray uppercase tracking-widest">{stat.label}</p>
                </div>
            ))}
        </div>
      </Section>

      {/* === CASE STUDY (TREŚĆ) === */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-32">
                <p className="text-red-500 font-mono mb-2 text-sm tracking-wider">/ THE CHALLENGE</p>
                <HeadingH2>Punkt krytyczny.</HeadingH2>
                <Paragraph className="text-white/80 text-lg">
                    {project.challenge}
                </Paragraph>
                <blockquote className="mt-8 p-6 bg-red-900/10 border-l-4 border-red-500/50 italic text-white/70">
                    &quot;Przed wdrożeniem systemu traciliśmy około 15% przychodu na błędnych decyzjach manualnych.&quot;
                </blockquote>
            </div>

            <div>
                 <p className="text-accent-blue font-mono mb-2 text-sm tracking-wider">/ THE SOLUTION</p>
                <HeadingH2>Architektura sukcesu.</HeadingH2>
                <Paragraph>
                    {project.solution}
                </Paragraph>
                
                {/* Zdjęcie 1 z Galerii - Optymalizacja */}
                <figure className="my-10 relative aspect-video overflow-hidden rounded-sm border border-white/10 group">
                    <Image 
                        src={project.gallery[0]} 
                        alt={`Interfejs systemu ${project.title} - widok główny`} 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                     <figcaption className="absolute bottom-4 left-4 text-white text-xs font-mono">FIG. 01 - PROCES WDROŻENIOWY</figcaption>
                </figure>

                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Cpu className="text-accent-blue" aria-hidden="true" /> Użyte Technologie
                </h3>
                <ul className="flex flex-wrap gap-3">
                    {project.stack.map((tech: string) => (
                        <li key={tech} className="bg-white/5 border border-white/10 px-4 py-2 text-sm text-white hover:border-accent-blue/50 hover:bg-accent-blue/5 transition-all cursor-default">
                            {tech}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </Section>

      {/* === DUŻE ZDJĘCIE (WIZUALIZACJA) === */}
      <section className="py-20 bg-black overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 mb-10">
              <HeadingH2>Wizualizacja</HeadingH2>
          </div>
          <div className="w-full h-[60vh] relative">
              {/* Zdjęcie 2 z Galerii - Optymalizacja */}
               <Image 
                    src={project.gallery[1]} 
                    alt={`Wizualizacja dashboardu ${project.title}`} 
                    fill
                    className="object-cover opacity-60"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" aria-hidden="true"></div>
          </div>
      </section>

      {/* === CTA === */}
      <Section variant="darker" className="text-center py-32">
          <HeadingH2>Twoja firma może być następna.</HeadingH2>
          <Paragraph>
              Podoba Ci się to podejście? Zbudujmy coś podobnego dla Ciebie.
          </Paragraph>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/kontakt" className="bg-accent-blue text-black font-bold px-8 py-4 hover:bg-white transition-colors">
                  ROZPOCZNIJ PROJEKT
              </Link>
              <Link href="/portfolio" className="border border-white/20 text-white font-bold px-8 py-4 hover:text-accent-blue hover:border-accent-blue transition-colors">
                  INNE REALIZACJE
              </Link>
          </div>
      </Section>
    </>
  );
}
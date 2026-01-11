import { Metadata } from "next";
import { HeadingH1, Paragraph } from "@/components/Typography";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link"; // Zmiana z <a> na Link dla wydajności
// 1. IMPORTUJEMY DANE
import { ALL_PROJECTS } from "@/lib/projects";

// --- 1. METADANE SEO ---
export const metadata: Metadata = {
  title: "Portfolio | Ketelman - Realizacje Software House i Startupy",
  description: "Zobacz nasze Case Studies. Budujemy oprogramowanie dedykowane dla klientów (Software House) oraz rozwijamy własne spółki technologiczne (Venture Building).",
  keywords: ["portfolio software house", "realizacje it", "case study aplikacje", "venture building portfolio", "projekty erp"],
  openGraph: {
    title: "Portfolio Ketelman Holding - Code & Capital",
    description: "Inwestycje własne i projekty dla klientów. Zobacz jak budujemy wartość technologiczną.",
    url: "https://ketelman.com/portfolio",
    type: "website",
  },
};

export default function PortfolioPage() {
  // 2. FILTRUJEMY PROJEKTY
  const holdingProjects = ALL_PROJECTS.filter((p) => p.type === "holding");
  const clientProjects = ALL_PROJECTS.filter((p) => p.type === "client");

  // --- 3. DANE STRUKTURALNE (SCHEMA.ORG) ---
  // Mówimy Google: "To jest strona typu Kolekcja, która zawiera Listę Elementów (Twoje projekty)"
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Portfolio Ketelman Holding",
    "description": "Zbiór realizacji software house i inwestycji własnych.",
    "url": "https://ketelman.com/portfolio",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": ALL_PROJECTS.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://ketelman.com/portfolio/${project.slug}`,
        "name": project.title,
        "image": project.heroImage
      }))
    }
  };

  return (
    <>
      {/* Wstrzyknięcie JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* HEADER PORTFOLIO */}
      <Section className="pt-32 pb-16 bg-gradient-to-b from-black via-blue-950/20 to-black">
        <header className="max-w-4xl">
           <p className="text-accent-blue font-mono mb-1 uppercase tracking-widest text-sm flex items-center">
              Realizacje
           </p>
           <HeadingH1 className="mb-3">
             Code & Capital.
           </HeadingH1>
           <Paragraph className="max-w-2xl text-lg text-white/80">
             Zobacz, jak budujemy wartość. Poniżej znajdziesz podział na nasze <span className="text-white font-bold border-b border-accent-blue">spółki portfelowe</span> oraz zaawansowane systemy stworzone dla <span className="text-white font-bold border-b border-white">Partnerów zewnętrznych</span>.
           </Paragraph>
        </header>
      </Section>

      {/* === FILAR 1: HOLDING (Projekty Własne) === */}
      <Section variant="darker" className="py-4 lg:py-8">
        <div className="mb-10 flex flex-col items-start">
            <span className="bg-blue-900/30 text-blue-300 font-bold px-3 py-1 text-xs uppercase tracking-widest border border-blue-500/20 mb-3 rounded-sm">
                Filar I: Internal Ventures
            </span>
            <h2 className="text-3xl font-bold text-white">Ketelman Holding</h2>
            <p className="text-concrete-gray text-sm mt-2 max-w-xl">
                Projekty sfinansowane z kapitału własnego. Pełna własność intelektualna i operacyjna. To tutaj testujemy najodważniejsze rozwiązania.
            </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {holdingProjects.map((project) => (
                <ProjectCard 
                    key={project.slug}
                    href={`/portfolio/${project.slug}`}
                    image={project.heroImage}
                    type={project.type}
                    category={project.category}
                    title={project.title}
                    description={project.description}
                    tags={project.stack.slice(0, 3)} 
                />
            ))}
        </div>
      </Section>

      {/* === FILAR 2: SOFTWARE HOUSE (Projekty Klientów) === */}
      <Section className="py-4 lg:py-8">
        <div className="mb-10 flex flex-col items-start">
            <span className="bg-emerald-900/30 text-emerald-300 font-bold px-3 py-1 text-xs uppercase tracking-widest border border-emerald-500/20 mb-3 rounded-sm">
                Filar II: Client Work
            </span>
            <h2 className="text-3xl font-bold text-white">Software House</h2>
             <p className="text-concrete-gray text-sm mt-2 max-w-xl">
                Rozwiązania &quot;szyte na miarę&quot; dla korporacji i dużych MŚP. Wykorzystujemy know-how z własnych spółek, by budować przewagę Klientów.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {clientProjects.map((project) => (
                <ProjectCard 
                    key={project.slug}
                    href={`/portfolio/${project.slug}`}
                    image={project.heroImage}
                    type={project.type}
                    category={project.category}
                    title={project.title}
                    description={project.description}
                    tags={project.stack.slice(0, 3)}
                />
            ))}
        </div>
      </Section>

      {/* CTA FOOTER */}
      <Section variant="highlight" className="text-center mt-12 py-24">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Masz wizję, której inni się boją?</h2>
        <Paragraph>Technologia to nie bariera. To dźwignia.</Paragraph>
        <div className="mt-8">
             {/* Zmiana <a> na <Link> dla SPA navigation (SEO boost) */}
             <Link href="/kontakt" className="bg-white text-black font-bold px-10 py-4 hover:bg-accent-blue transition-all inline-flex items-center gap-2">
                ZAMÓW KONSULTACJĘ <ArrowUpRight size={20} aria-hidden="true" />
             </Link>
        </div>
      </Section>
    </>
  );
}
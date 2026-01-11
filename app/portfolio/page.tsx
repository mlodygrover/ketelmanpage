import { HeadingH1, Paragraph } from "@/components/Typography";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { ArrowUpRight } from "lucide-react";
// 1. IMPORTUJEMY DANE (Single Source of Truth)
import { ALL_PROJECTS } from "@/lib/projects";

export const metadata = {
  title: "Portfolio | Ketelman Holding & Software House",
  description: "Nasze inwestycje oraz projekty zrealizowane dla klientów zewnętrznych.",
};

export default function PortfolioPage() {
  // 2. FILTRUJEMY PROJEKTY NA DWA KOSZYKI
  const holdingProjects = ALL_PROJECTS.filter((p) => p.type === "holding");
  const clientProjects = ALL_PROJECTS.filter((p) => p.type === "client");

  return (
    <>
      {/* HEADER PORTFOLIO */}
      <Section className="pt-32 pb-16 bg-gradient-to-b from-black via-blue-950/20 to-black">
        <div className="max-w-4xl">
           <p className="text-accent-blue font-mono mb-1 uppercase tracking-widest text-sm flex items-center">
              Realizacje
           </p>
           <HeadingH1 className="mb-3">
             Code & Capital.
           </HeadingH1>
           <Paragraph className="max-w-2xl text-lg text-white/80">
             Zobacz, jak budujemy wartość. Poniżej znajdziesz podział na nasze <span className="text-white font-bold border-b border-accent-blue">spółki portfelowe</span> oraz zaawansowane systemy stworzone dla <span className="text-white font-bold border-b border-white">Partnerów zewnętrznych</span>.
           </Paragraph>
        </div>
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
            {/* 3. GENEROWANIE KART AUTOMATYCZNIE */}
            {holdingProjects.map((project) => (
                <ProjectCard 
                    key={project.slug}
                    href={`/portfolio/${project.slug}`} // Tworzymy link dynamiczny
                    image={project.heroImage}
                    type={project.type}
                    category={project.category}
                    title={project.title}
                    description={project.description}
                    // Bierzemy tylko 3 pierwsze technologie, żeby nie zapchać karty
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
                Rozwiązania "szyte na miarę" dla korporacji i dużych MŚP. Wykorzystujemy know-how z własnych spółek, by budować przewagę Klientów.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {/* GENEROWANIE KART AUTOMATYCZNIE */}
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
             <a href="/kontakt" className="bg-white text-black font-bold px-10 py-4 hover:bg-accent-blue transition-all inline-flex items-center gap-2">
                ZAMÓW KONSULTACJĘ <ArrowUpRight size={20} />
             </a>
        </div>
      </Section>
    </>
  );
}
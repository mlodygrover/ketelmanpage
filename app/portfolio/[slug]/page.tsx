import { HeadingH2, Paragraph } from "@/components/Typography";
import { Section } from "@/components/Section";
import Link from "next/link";
import { ArrowLeft, Cpu } from "lucide-react";
import { notFound } from "next/navigation";
// 1. IMPORTUJEMY DANE Z ZEWNĘTRZNEGO PLIKU
import { getProject } from "@/lib/projects"; 

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  // 2. Czekamy na slug (Next.js 15)
  const { slug } = await params;
  
  // 3. Pobieramy projekt używając funkcji z lib/projects.ts
  const project = getProject(slug);

  // 4. Jeśli slug nie pasuje do żadnego projektu -> 404
  if (!project) {
    return notFound();
  }

  return (
    <>
      {/* === HERO SECTION === */}
      <section className="relative h-[80vh] flex items-end pb-20">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
            style={{ backgroundImage: `url('${project.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 z-10" />

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
            <Link href="/portfolio" className="inline-flex items-center text-white/70 hover:text-accent-blue mb-8 transition-colors group">
                <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
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
                        <p className="text-xs text-white/50 uppercase">Klient</p>
                        <p className="text-white font-bold">{project.client}</p>
                    </div>
                    <div>
                        <p className="text-xs text-white/50 uppercase">Czas realizacji</p>
                        <p className="text-white font-bold">{project.duration}</p>
                    </div>
                     <div>
                        <p className="text-xs text-white/50 uppercase">Zespół</p>
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
                            <stat.icon className="w-8 h-8 text-accent-blue" />
                        </div>
                    </div>
                    <p className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</p>
                    <p className="text-sm text-concrete-gray uppercase tracking-widest">{stat.label}</p>
                </div>
            ))}
        </div>
      </Section>

      {/* === CASE STUDY === */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="sticky top-32">
                <p className="text-red-500 font-mono mb-2">/ THE CHALLENGE</p>
                <HeadingH2>Punkt krytyczny.</HeadingH2>
                <Paragraph className="text-white/80 text-lg">
                    {project.challenge}
                </Paragraph>
                <div className="mt-8 p-6 bg-red-900/10 border-l-4 border-red-500/50 italic text-white/70">
                    "Przed wdrożeniem systemu traciliśmy około 15% przychodu na błędnych decyzjach manualnych."
                </div>
            </div>

            <div>
                 <p className="text-accent-blue font-mono mb-2">/ THE SOLUTION</p>
                <HeadingH2>Architektura sukcesu.</HeadingH2>
                <Paragraph>
                    {project.solution}
                </Paragraph>
                
                {/* Zdjęcie 1 z Galerii */}
                <div className="my-10 relative aspect-video overflow-hidden rounded-sm border border-white/10 group">
                    <img 
                        src={project.gallery[0]} 
                        alt="Project screenshot" 
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                     <p className="absolute bottom-4 left-4 text-white text-xs font-mono">FIG. 01 - PROCES WDROŻENIOWY</p>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <Cpu className="text-accent-blue" /> Użyte Technologie
                </h3>
                <div className="flex flex-wrap gap-3">
                    {project.stack.map((tech: string) => (
                        <span key={tech} className="bg-white/5 border border-white/10 px-4 py-2 text-sm text-white hover:border-accent-blue/50 hover:bg-accent-blue/5 transition-all cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
      </Section>

      {/* === DUŻE ZDJĘCIE (WIZUALIZACJA) === */}
      <section className="py-20 bg-black overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 mb-10">
              <HeadingH2>Wizualizacja</HeadingH2>
          </div>
          <div className="w-full h-[60vh] relative">
              {/* Zdjęcie 2 z Galerii */}
               <img 
                    src={project.gallery[1]} 
                    alt="System visualization" 
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
          </div>
      </section>

      {/* === CTA === */}
      <Section variant="darker" className="text-center py-32">
          <HeadingH2>Twoja firma może być następna.</HeadingH2>
          <Paragraph>
              Podoba Ci się to podejście? Zbudujmy coś podobnego dla Ciebie.
          </Paragraph>
          <div className="mt-8 flex justify-center gap-4">
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
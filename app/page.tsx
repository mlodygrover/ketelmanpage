import { HeadingH1, HeadingH2, Paragraph } from "@/components/Typography";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";
import { 
    ArrowRight, Code2, LineChart, Building2, 
    ShieldCheck, Users, Milestone, Terminal, 
    TrendingUp
} from "lucide-react";
// Importy Danych
import { ALL_PROJECTS } from "@/lib/projects";
import { ALL_ARTICLES } from "@/lib/articles";

export default function Home() {
  const featuredSlugs = ["draft-and-go-web", "ekomis-system"];
  const featuredProjects = ALL_PROJECTS.filter(p => featuredSlugs.includes(p.slug));
  const latestArticles = ALL_ARTICLES.slice(0, 3); // Bierzemy 3 najnowsze

  return (
    <>
      {/* === 1. HERO SECTION === */}
      <Section className="pt-32 pb-16 md:pt-48 md:pb-32 min-h-[90vh] md:min-h-screen flex flex-col justify-center relative bg-gradient-to-b from-black via-blue-950/10 to-black overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-accent-blue/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="max-w-5xl relative z-10">
          <div className="flex items-center gap-4 mb-4 md:mb-8">
             <div className="h-px w-8 md:w-12 bg-accent-blue"></div>
             <span className="text-accent-blue font-mono text-xs md:text-sm tracking-widest uppercase">Est. 2015</span>
          </div>
          
          <HeadingH1 className="text-4xl sm:text-5xl md:text-7xl leading-tight">
            Holding Technologiczny.<br />
            Twój Partner <span className="text-accent-blue">Wykonawczy.</span>
          </HeadingH1>
          
          <Paragraph className="max-w-2xl text-base md:text-xl mt-6 text-white/80">
            Ketelman to hybryda. Z jednej strony inwestujemy i budujemy własne startupy. 
            Z drugiej – udostępniamy nasze zespoły inżynierskie firmom zewnętrznym. 
            Otrzymujesz jakość, którą sami stosujemy we własnych biznesach.
          </Paragraph>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12">
            <Link href="/portfolio" className="w-full sm:w-auto bg-accent-blue text-black font-bold px-6 py-4 md:px-10 hover:bg-white transition-all text-center tracking-wide flex items-center justify-center gap-2 group">
              ZOBACZ REALIZACJE <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
            </Link>
            <Link href="/kontakt" className="w-full sm:w-auto border border-white/20 text-white font-bold px-6 py-4 md:px-10 hover:border-accent-blue hover:text-accent-blue transition-all text-center tracking-wide">
              KONSULTACJA
            </Link>
          </div>
        </div>
      </Section>

      {/* === 2. FOUNDERS (NOWA SEKCJA) === */}
      <Section className="border-t border-white/5 py-16 md:py-24">
         <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
                <p className="text-accent-blue font-mono mb-4 text-sm tracking-wider">/ THE BOARD</p>
                <HeadingH2>Od Inwestorów <br/>dla Inwestorów.</HeadingH2>
                <Paragraph className="mb-6">
                    Nie jesteśmy "studentami informatyki". Jesteśmy przedsiębiorcami, którzy nauczyli się technologii, by skalować własne biznesy.
                </Paragraph>
                <Link href="/o-nas" className="text-white border-b border-white/30 pb-1 hover:text-accent-blue hover:border-accent-blue transition-all">
                    Poznaj naszą historię &rarr;
                </Link>
            </div>
            
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
                {/* FOUNDER 1 */}
                <div className="group relative h-[400px] overflow-hidden border border-white/10 bg-white/5">
                    <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" 
                        alt="Kamil Ketelman" 
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <p className="text-2xl font-bold text-white">Kamil Ketelman</p>
                        <p className="text-accent-blue font-mono text-xs uppercase tracking-widest">CEO & Founder</p>
                    </div>
                </div>
                 {/* FOUNDER 2 */}
                 <div className="group relative h-[400px] overflow-hidden border border-white/10 bg-white/5">
                    <img 
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" 
                        alt="Piotr Nowak" 
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <p className="text-2xl font-bold text-white">Piotr "Vector" Nowak</p>
                        <p className="text-accent-blue font-mono text-xs uppercase tracking-widest">CTO & Partner</p>
                    </div>
                </div>
            </div>
         </div>
      </Section>

      {/* === 3. OFERTA & PROCES (ROZSZERZONA) === */}
      <Section variant="darker" className="py-16 md:py-32">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <HeadingH2>Model 360°</HeadingH2>
            <Paragraph>
                Kompleksowa obsługa cyklu życia produktu. Od kartki papieru po exit.
            </Paragraph>
        </div>

        {/* KARTY KOMPETENCJI */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
            <Card className="hover:bg-blue-950/20 p-8">
                <Building2 className="w-12 h-12 text-accent-blue mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Venture Building</h3>
                <p className="text-concrete-gray text-sm">Tworzymy MVP, wprowadzamy produkt na rynek i skalujemy go.</p>
            </Card>
            <Card className="hover:bg-blue-950/20 p-8">
                <Code2 className="w-12 h-12 text-accent-blue mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Custom Software</h3>
                <p className="text-concrete-gray text-sm">Systemy ERP, platformy handlowe, integracje bankowe. Zero WordPressa.</p>
            </Card>
            <Card className="hover:bg-blue-950/20 p-8">
                <LineChart className="w-12 h-12 text-accent-blue mb-6" />
                <h3 className="text-xl font-bold text-white mb-4">Tech Consulting</h3>
                <p className="text-concrete-gray text-sm">Audyty bezpieczeństwa, ratowanie projektów (Rescue Missions).</p>
            </Card>
        </div>

        {/* PROCES (Step by Step) */}
        <div className="grid md:grid-cols-4 gap-4 border-t border-white/10 pt-16">
            {[
                { step: "01", title: "Discovery", icon: Users, desc: "Warsztaty strategiczne i weryfikacja modelu biznesowego." },
                { step: "02", title: "Prototyping", icon: Milestone, desc: "Makiety UX/UI i architektura systemu." },
                { step: "03", title: "Development", icon: Terminal, desc: "Kodowanie w sprincie dwutygodniowym. CI/CD." },
                { step: "04", title: "Scaling", icon: TrendingUp, desc: "Monitoring, optymalizacja kosztów chmury, rozwój." }
            ].map((item) => (
                <div key={item.step} className="p-4 group">
                    <div className="text-4xl font-black text-white/5 mb-4 group-hover:text-accent-blue/20 transition-colors">{item.step}</div>
                    <div className="flex items-center gap-2 mb-2 text-white font-bold">
                        <item.icon size={18} className="text-accent-blue" />
                        {item.title}
                    </div>
                    <p className="text-xs text-concrete-gray">{item.desc}</p>
                </div>
            ))}
        </div>
      </Section>

      {/* === 4. PORTFOLIO (Z KROKU WCZEŚNIEJ) === */}
      <Section className="py-16 md:py-32">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-0">
            <div>
                <p className="text-accent-blue font-mono mb-2 text-sm tracking-wider">/ SELECTED WORKS</p>
                <HeadingH2 className="mb-0">Dowody, nie obietnice.</HeadingH2>
            </div>
            <Link href="/portfolio" className="text-white hover:text-accent-blue border-b border-white/30 hover:border-accent-blue pb-1 transition-colors text-sm font-bold uppercase tracking-wide">
                Zobacz pełne portfolio
            </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
                <ProjectCard 
                    key={project.slug}
                    href={`/portfolio/${project.slug}`}
                    image={project.heroImage}
                    type={project.type}
                    category={project.category}
                    title={project.title}
                    description={project.description}
                    tags={project.stack.slice(0, 4)}
                />
            ))}
        </div>
      </Section>

      {/* === 5. ARTYKUŁY / BLOG (NOWA SEKCJA) === */}
      <Section variant="highlight" className="py-16 md:py-32">
         <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
                <HeadingH2>Ketelman Insights</HeadingH2>
                <Paragraph className="max-w-xl">
                    Dzielimy się wiedzą, której inni strzegą. Raporty rynkowe, analizy technologiczne i strategie budowania wartości.
                </Paragraph>
            </div>
            <Link href="/blog" className="mt-4 md:mt-0 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-wider transition-all">
                Przejdź do czytelni
            </Link>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`} className="group block bg-black border border-white/10 hover:border-accent-blue/50 transition-all p-6">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-[10px] font-mono text-accent-blue uppercase border border-accent-blue/30 px-2 py-1 rounded-sm">
                            {article.category}
                        </span>
                        <span className="text-xs text-white/40">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors line-clamp-2">
                        {article.title}
                    </h3>
                    <p className="text-sm text-concrete-gray line-clamp-3 mb-6">
                        {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-white/60 font-bold uppercase tracking-wide group-hover:gap-4 transition-all">
                        Czytaj dalej <ArrowRight size={14} className="text-accent-blue" />
                    </div>
                </Link>
            ))}
         </div>
      </Section>

      {/* === 6. CTA === */}
      <Section className="text-center py-20 md:py-32">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
            Masz wizję.<br />
            My mamy <span className="text-zinc-600">technologię.</span>
        </h2>
        <div className="mt-8 md:mt-12">
            <Link href="/kontakt" className="inline-block w-full sm:w-auto bg-white text-black text-base md:text-lg font-bold px-8 md:px-16 py-4 md:py-5 rounded-sm hover:bg-accent-blue transition-all">
                ROZPOCZNIJ WSPÓŁPRACĘ
            </Link>
        </div>
      </Section>
    </>
  );
}
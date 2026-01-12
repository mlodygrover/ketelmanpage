import { Metadata } from "next";
import Image from "next/image";
import { HeadingH1, HeadingH2, Paragraph } from "@/components/Typography";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";
import {
  ArrowRight, Code2, LineChart, Building2,
  Users, Milestone, Terminal, TrendingUp,
  Cpu
} from "lucide-react";

import { ALL_PROJECTS } from "@/lib/projects";
import { ALL_ARTICLES } from "@/lib/articles";
import { SierpinskiBackground } from "@/components/SierpinskiBackground";
import { OfferSection } from "@/components/offersection";

export const metadata: Metadata = {
  title: "Ketelman | Holding Technologiczny & Custom Software House",
  description: "Inwestujemy w startupy i tworzymy oprogramowanie dedykowane (ERP, CRM). Łączymy Venture Building z usługami Software House. Sprawdź nasze case studies.",
  // ... reszta metadata bez zmian
};

export default function Home() {
  const featuredSlugs = ["draft-and-go-web", "ekomis-system"];
  const featuredProjects = ALL_PROJECTS.filter(p => featuredSlugs.includes(p.slug));
  const latestArticles = ALL_ARTICLES.slice(0, 3);

  // ... schemaData bez zmian ...
  const schemaData = { /* ... Twoja schema ... */ };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* === 1. HERO SECTION (FULL SCREEN) === */}
      {/* ZMIANA: Używamy natywnego tagu <section> zamiast komponentu Section, 
          żeby mieć pełną kontrolę nad szerokością i wysokością (h-screen) */}
      {/* === 1. HERO SECTION (FULL SCREEN) === */}
      <section
        // ZMIANA TUTAJ: Dodano 'pt-24 md:pt-0'. 
        // Na mobile (pt-24) dodajemy odstęp od góry (ok. 96px), żeby treść nie wchodziła pod menu.
        // Na desktopie (md:pt-0) zostawiamy 0, bo tam ekran jest wysoki i justify-center działa dobrze.
        className="relative w-full h-[100dvh] flex flex-col justify-center items-center overflow-hidden pt-24 md:pt-0"
      >

        {/* TŁO: Jest pozycjonowane absolutnie i zajmuje 100% tej sekcji */}
        <SierpinskiBackground />

        {/* TREŚĆ: Zamknięta w kontenerze */}
        <div className="relative z-30 container mx-auto px-6 md:px-12 max-w-7xl h-full flex flex-col justify-center ">

          <div className="flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 " >
            <span className="text-accent-blue bg-black font-mono font-semibold text-xs md:text-sm tracking-widest uppercase bg-accent-blue/10 px-3 py-1 rounded-full border-2 border-accent-blue/20">
              Czy 2026 będzie Twoim rokiem?
            </span>
          </div>

          <HeadingH1 className="text-4xl sm:text-5xl md:text-7xl leading-tight mb-6 drop-shadow-2xl">
            Holding Technologiczny.<br />
            Twój Partner <span className="text-accent-blue">Wykonawczy.</span>
          </HeadingH1>

          <Paragraph className="max-w-2xl text-base md:text-xl text-white/90 mb-8 md:mb-12 drop-shadow-lg">
            Ketelman to hybryda. Z jednej strony <strong>inwestujemy i budujemy własne startupy</strong>.
            Z drugiej – udostępniamy nasze <strong>zespoły inżynierskie</strong> firmom zewnętrznym.
            Otrzymujesz jakość, którą sami stosujemy we własnych biznesach.
          </Paragraph>

          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-start mt-8 md:mt-12">

            {/* Przycisk 1: Portfolio */}
            <Link
              href="/portfolio"
              className="
          w-fit
          whitespace-nowrap
          border border-white/20 
          text-white 
          font-bold 
          px-8 py-4 
          hover:border-accent-blue hover:text-accent-blue 
          transition-all 
          text-center 
          tracking-wide 
          backdrop-blur-sm bg-black/30 
          rounded-sm
          flex items-center gap-2 group
        "
            >
              ZOBACZ REALIZACJE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>

            {/* Przycisk 2: Konsultacja */}
            <Link
              href="/kontakt"
              className="
          w-fit
          whitespace-nowrap
          border border-white/20 
          text-white 
          font-bold 
          px-8 py-4 
          hover:border-accent-blue hover:text-accent-blue 
          transition-all 
          text-center 
          tracking-wide 
          backdrop-blur-sm bg-black/30 
          rounded-sm
        "
            >
              KONSULTACJA
            </Link>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/30 z-30 hidden md:block">
          <ArrowRight className="rotate-90 w-6 h-6" />
        </div>
      </section>
      <OfferSection />
      {/* === SEKCJA: FRAKTALNA JAKOŚĆ (Vision & Story) === */}
      <Section className="py-24 md:py-32 border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEWA KOLUMNA: Animacja (Okno na fraktal) */}
          {/* Ustawiamy relative i overflow-hidden, aby 'zamknąć' ogromny trójkąt w mniejszym pudełku */}
          <div className="relative h-[400px] w-full rounded-sm border border-white/10 bg-black overflow-hidden group">

            {/* Tło animowane - używamy Twojego komponentu */}
            <SierpinskiBackground />

            {/* Dodatkowy overlay, żeby tekst/logo na wierzchu (opcjonalnie) był czytelny */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 pointer-events-none" />

            {/* Ozdobny techniczny detal na wierzchu animacji */}
            <div className="absolute bottom-6 left-6 z-10">
              <p className="text-[10px] font-mono text-accent-blue uppercase tracking-widest border border-accent-blue/30 px-2 py-1 bg-black/50 backdrop-blur-md">
                Fraktalna powtarzalność
              </p>
            </div>

            {/* Efekt poświaty przy hoverze ramki */}
            <div className="absolute inset-0 border border-accent-blue/0 group-hover:border-accent-blue/30 transition-all duration-700 pointer-events-none" />
          </div>

          {/* PRAWA KOLUMNA: Copywriting */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Cpu size={20} className="text-accent-blue" />
              <span className="text-accent-blue font-mono text-xs uppercase tracking-widest">
                Philosophy / Engineering
              </span>
            </div>

            <HeadingH2 className="mb-6">
              Kod wpisany w <br />
              <span className="text-white/50">naturę rzeczy.</span>
            </HeadingH2>

            <div className="space-y-6 text-lg text-concrete-gray">
              <p>
                <strong className="text-white">Fraktal.</strong> Figura samopodobna, gdzie każda, nawet najmniejsza część, jest idealnym odzwierciedleniem całości. Trójkąt Sierpińskiego to nie tylko matematyczna abstrakcja – to symbol nieskończonej precyzji i skalowalności.
              </p>

              <p>
                W <strong className="text-white">Ketelman Holding</strong> traktujemy inżynierię oprogramowania dokładnie tak samo. Odzwierciedlamy tę <strong>fraktalnie powtarzalną jakość</strong> w każdym projekcie. Niezależnie czy tworzymy mały moduł, czy potężną architekturę chmurową – standard wykonania pozostaje niezmiennie perfekcyjny.
              </p>

              <p>
                Witamy na naszej stronie. Zachęcamy do głębszej analizy naszej <Link href="/oferta" className="text-accent-blue hover:underline">oferty</Link> oraz <Link href="/portfolio" className="text-accent-blue hover:underline">portfolio</Link>.
              </p>

              <div className="pt-4 border-l-2 border-accent-blue/30 pl-6 mt-8">
                <p className="text-xl text-white italic">
                  &quot;Jeśli chcesz wejść na rynek technologii internetowych, zdaje się, że trafiłeś do właściwego <span className="text-accent-blue font-bold not-italic">GATE</span>.&quot;
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest hover:text-accent-blue transition-colors group"
              >
                Otwórz bramę do współpracy
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </Section>
      <Section className="py-16 md:py-32">
        {/* Portfolio Content */}
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

      <Section variant="highlight" className="py-16 md:py-32">
        {/* Blog Content */}
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
              <article>
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
                  Czytaj dalej <ArrowRight size={14} className="text-accent-blue" aria-hidden="true" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </Section>

      {/* === 2. FOUNDERS === */}
      {/* Tu wracamy do Twojego standardowego komponentu Section */}
      {/* <Section className="border-t border-white/5 py-16 md:py-24">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
      
          <div className="lg:col-span-4">
            <p className="text-accent-blue font-mono mb-4 text-sm tracking-wider">/ THE BOARD</p>
            <HeadingH2>Od Inwestorów <br />dla Inwestorów.</HeadingH2>
            <Paragraph className="mb-6">
              Nie jesteśmy &quot;studentami informatyki&quot;. Jesteśmy przedsiębiorcami, którzy nauczyli się technologii, by <strong>skalować własne biznesy</strong>.
            </Paragraph>
            <Link href="/o-nas" className="text-white border-b border-white/30 pb-1 hover:text-accent-blue hover:border-accent-blue transition-all">
              Poznaj naszą historię &rarr;
            </Link>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-6">
            <div className="group relative h-[400px] overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
                alt="Kamil Ketelman - CEO Ketelman Holding"
                fill
                className="object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-10">
                <p className="text-2xl font-bold text-white">Kamil Ketelman</p>
                <p className="text-accent-blue font-mono text-xs uppercase tracking-widest">CEO & Founder</p>
              </div>
            </div>
            <div className="group relative h-[400px] overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop"
                alt="Piotr Nowak - CTO Ketelman Holding"
                fill
                className="object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-10">
                <p className="text-2xl font-bold text-white">Piotr &quot;Vector&quot; Nowak</p>
                <p className="text-accent-blue font-mono text-xs uppercase tracking-widest">CTO & Partner</p>
              </div>
            </div>
          </div>
        </div>
      </Section> */}


      {/* ... Reszta sekcji (Oferta, Portfolio, Blog, CTA) bez zmian ... */}
      <Section variant="darker" className="py-16 md:py-32">
        {/* ... Skopiuj resztę ze swojego poprzedniego kodu ... */}
        {/* Jeśli potrzebujesz, mogę wkleić całość, ale chodzi głównie o zmianę pierwszej sekcji */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <HeadingH2>Model 360°</HeadingH2>
          <Paragraph>
            Kompleksowa obsługa cyklu życia produktu. Od kartki papieru po exit.
          </Paragraph>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {/* Karty... */}
          <Card className="hover:bg-blue-950/20 p-8 flex flex-col h-full">
            <Building2 className="w-12 h-12 text-accent-blue mb-6" aria-hidden="true" />
            <h3 className="text-xl font-bold text-white mb-4">Venture Building</h3>
            <p className="text-concrete-gray text-sm">Tworzymy MVP, wprowadzamy produkt na rynek i skalujemy go.</p>
          </Card>
          <Card className="hover:bg-blue-950/20 p-8 flex flex-col h-full">
            <Code2 className="w-12 h-12 text-accent-blue mb-6" aria-hidden="true" />
            <h3 className="text-xl font-bold text-white mb-4">Custom Software</h3>
            <p className="text-concrete-gray text-sm">Systemy ERP, platformy handlowe, integracje bankowe. Zero WordPressa.</p>
          </Card>
          <Card className="hover:bg-blue-950/20 p-8 flex flex-col h-full">
            <LineChart className="w-12 h-12 text-accent-blue mb-6" aria-hidden="true" />
            <h3 className="text-xl font-bold text-white mb-4">Tech Consulting</h3>
            <p className="text-concrete-gray text-sm">Audyty bezpieczeństwa, ratowanie projektów (Rescue Missions).</p>
          </Card>
        </div>

        <div className="grid md:grid-cols-4 gap-4 border-t border-white/10 pt-16">
          {[
            { step: "01", title: "Discovery", icon: Users, desc: "Warsztaty strategiczne i weryfikacja modelu biznesowego." },
            { step: "02", title: "Prototyping", icon: Milestone, desc: "Makiety UX/UI i architektura systemu." },
            { step: "03", title: "Development", icon: Terminal, desc: "Kodowanie w sprincie dwutygodniowym. CI/CD." },
            { step: "04", title: "Scaling", icon: TrendingUp, desc: "Monitoring, optymalizacja kosztów chmury, rozwój." }
          ].map((item) => (
            <div key={item.step} className="p-4 group">
              <div className="text-4xl font-black text-white/5 mb-4 group-hover:text-accent-blue/20 transition-colors" aria-hidden="true">{item.step}</div>
              <div className="flex items-center gap-2 mb-2 text-white font-bold">
                <item.icon size={18} className="text-accent-blue" aria-hidden="true" />
                <h4 className="inline">{item.title}</h4>
              </div>
              <p className="text-xs text-concrete-gray">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>


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
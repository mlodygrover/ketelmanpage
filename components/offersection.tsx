"use client";

import Image from "next/image";
import { HeadingH2, Paragraph } from "@/components/Typography";
import { Section } from "@/components/Section";
import Link from "next/link";
import { 
  Globe, Smartphone, Server, Layout, 
  ShieldCheck, Cpu, Database, Cloud, 
  Code, Layers, Zap, ArrowUpRight
} from "lucide-react";

// DANE DO OFERTY
// Łatwa edycja w jednym miejscu
const SERVICES = [
  {
    id: "web-dev",
    title: "Digital Presence & Strony WWW",
    description: "Nie robimy zwykłych 'wizytówek'. Tworzymy wysokowydajne strony marketingowe, landing page'e nastawione na konwersję i serwisy korporacyjne, które budują autorytet marki.",
    icon: Globe,
    tech: ["Next.js", "React", "Tailwind CSS", "Headless CMS", "SEO"]
  },
  {
    id: "web-apps",
    title: "Aplikacje Webowe (SaaS)",
    description: "Skomplikowane systemy działające w przeglądarce. Panele administracyjne, systemy CRM/ERP, platformy B2B. Skalowalność i bezpieczeństwo to priorytet.",
    icon: Layout,
    tech: ["React", "TypeScript", "Node.js", "SaaS Architecture"]
  },
  {
    id: "mobile",
    title: "Aplikacje Mobilne",
    description: "Natywna wydajność przy jednym kodzie źródłowym. Tworzymy aplikacje na iOS i Androida, które użytkownicy kochają za płynność i intuicyjność.",
    icon: Smartphone,
    tech: ["React Native", "Expo", "iOS", "Android"]
  },
  {
    id: "backend",
    title: "Backend & Cloud",
    description: "Silnik Twojego biznesu. Projektujemy bezpieczne API, mikrousługi i architekturę chmurową, która wytrzyma duży ruch i zapewni ciągłość działania.",
    icon: Server,
    tech: ["Python", "Go", "AWS", "PostgreSQL", "Docker"]
  },
  {
    id: "design",
    title: "Product Design (UI/UX)",
    description: "Zanim napiszemy linię kodu, projektujemy doświadczenia. Makiety, prototypy i systemy designu, które łączą estetykę z użytecznością biznesową.",
    icon: Layers,
    tech: ["Figma", "Prototyping", "User Flow", "Design Systems"]
  },
  {
    id: "consulting",
    title: "Audyty & Konsulting",
    description: "Masz problem z obecnym kodem? A może potrzebujesz CTO do wynajęcia? Przeprowadzamy audyty bezpieczeństwa, wydajności i ratujemy projekty (Rescue Missions).",
    icon: ShieldCheck,
    tech: ["Code Review", "Security", "Optimization", "Strategy"]
  }
];

export const OfferSection = () => {
  return (
    <Section variant="darker" className="py-24 md:py-32 relative overflow-hidden">
      
      {/* Tło dekoracyjne (opcjonalne) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* LEWA STRONA - NAGŁÓWEK + IMAGE */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Zap size={20} className="text-accent-blue" />
              <span className="text-accent-blue font-mono text-xs uppercase tracking-widest">
                Our Capabilities
              </span>
            </div>

            <HeadingH2 className="mb-6">
              Pełne spektrum <br />
              <span className="text-white/50">inżynierii.</span>
            </HeadingH2>

            <Paragraph className="mb-8">
              Jako Holding Technologiczny nie ograniczamy się do jednej technologii. Dobieramy narzędzia pod problem biznesowy, a nie odwrotnie.
              <br /><br />
              Od prostych wizytówek po skomplikowane systemy bankowe – dostarczamy kod, który zarabia.
            </Paragraph>

            <Link 
              href="/kontakt" 
              className="inline-flex items-center gap-2 bg-white text-black font-bold px-6 py-3 hover:bg-accent-blue transition-colors rounded-sm group"
            >
              WYCEŃ PROJEKT
              <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Ozdobny obrazek / kod */}
          <div className="hidden lg:block mt-12 relative rounded-sm overflow-hidden border border-white/10 bg-black/50 backdrop-blur-md p-6">
             <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
             </div>
             <div className="font-mono text-xs text-white/70 space-y-1">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">solutions</span> = <span className="text-yellow-400">await</span> ketelman.<span className="text-blue-300">build</span>({`{`}</p>
                <p className="pl-4">quality: <span className="text-green-400">Infinity</span>,</p>
                <p className="pl-4">deadline: <span className="text-green-400">true</span>,</p>
                <p className="pl-4">stack: [<span className="text-orange-400">"Next.js"</span>, <span className="text-orange-400">"AI"</span>]</p>
                <p>{`}`});</p>
             </div>
          </div>
        </div>

        {/* PRAWA STRONA - GRID KART (USŁUGI) */}
        <div className="lg:col-span-8">
          <div className="grid md:grid-cols-2 gap-4">
            {SERVICES.map((service, index) => (
              <div 
                key={service.id}
                className="group relative p-8 bg-white/5 border border-white/10 hover:border-accent-blue/50 hover:bg-white/[0.07] transition-all duration-300 rounded-sm flex flex-col h-full"
              >
                {/* Ikona główna */}
                <div className="mb-6 inline-flex p-3 rounded-sm bg-black border border-white/10 group-hover:border-accent-blue/30 group-hover:text-accent-blue transition-colors">
                   <service.icon size={28} />
                </div>

                {/* Treść */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-concrete-gray leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Tech Stack (Tagi na dole karty) */}
                <div className="pt-6 border-t border-white/5 mt-auto">
                   <div className="flex flex-wrap gap-2">
                      {service.tech.map((tech) => (
                        <span key={tech} className="text-[10px] uppercase tracking-wider font-mono text-white/40 border border-white/10 px-2 py-1 rounded-sm group-hover:border-accent-blue/20 group-hover:text-accent-blue/80 transition-colors">
                           {tech}
                        </span>
                      ))}
                   </div>
                </div>

                {/* Efekt Glow w rogu przy hoverze */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-blue/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
};
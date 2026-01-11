import { cn } from "@/lib/utils";
import { ArrowUpRight, Code2 } from "lucide-react";
import Link from "next/link"; // 1. To musi być zaimportowane

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  type: "holding" | "client";
  href: string; // 2. Upewniamy się, że href jest wymagany
  image?: string;
}

export const ProjectCard = ({ title, category, description, tags, type, href, image }: ProjectCardProps) => {
  return (
    // 3. To jest najważniejsze: Cała karta jest linkiem
    <Link href={href} className="group block h-full">
      <div className={cn(
        "relative flex flex-col h-full bg-black/40 border border-white/10 overflow-hidden transition-all duration-500",
        // Efekty hover
        "hover:border-accent-blue/60 hover:shadow-[0_0_30px_-10px_rgba(0,242,254,0.15)] hover:-translate-y-1"
      )}>
        
        {/* --- CZĘŚĆ 1: OBRAZEK (GÓRA) --- */}
        <div className="relative h-56 overflow-hidden border-b border-white/5">
            {/* Overlay gradientowy */}
            <div className={cn(
                "absolute inset-0 z-10 mix-blend-multiply opacity-80 transition-opacity duration-500 group-hover:opacity-60",
                type === "holding" 
                    ? "bg-gradient-to-tr from-blue-950 via-gray-900 to-black" 
                    : "bg-gradient-to-tr from-emerald-950 via-gray-900 to-black"
            )} />
            
            {/* ZDJĘCIE TŁA */}
            <div 
                className={cn(
                    "w-full h-full bg-cover bg-center transform transition-transform duration-700 ease-out group-hover:scale-110",
                    "bg-neutral-900"
                )}
                style={{ 
                    backgroundImage: image ? `url('${image}')` : undefined 
                }}
            />

            {/* Badge w rogu */}
            <div className="absolute top-3 left-3 z-20">
                <span className={cn(
                    "text-[10px] font-bold px-2 py-1 uppercase tracking-widest backdrop-blur-md border shadow-lg",
                    type === "holding" 
                        ? "bg-blue-500/10 border-blue-400/50 text-blue-200" 
                        : "bg-emerald-500/10 border-emerald-400/50 text-emerald-200"
                )}>
                    {type === "holding" ? "Inwestycja Własna" : "Projekt Kliencki"}
                </span>
            </div>
        </div>

        {/* --- CZĘŚĆ 2: TREŚĆ (DÓŁ) --- */}
        <div className="flex flex-col flex-grow p-6 text-left">
            <div className="flex justify-between items-start mb-3">
                <p className="text-accent-blue/80 text-xs font-mono uppercase tracking-wider flex items-center gap-2">
                    <Code2 size={12} /> {category}
                </p>
                <ArrowUpRight className="text-white/40 w-5 h-5 group-hover:text-accent-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">
                {title}
            </h3>
            
            <p className="text-concrete-gray text-sm leading-relaxed line-clamp-3 mb-6">
                {description}
            </p>

            <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span key={tag} className="text-[10px] text-white/50 bg-white/5 px-2 py-1 rounded-sm border border-transparent group-hover:border-white/10 transition-colors">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </Link>
  );
};
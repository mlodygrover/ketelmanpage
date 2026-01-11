import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "darker" | "highlight";
  // Dodajemy prop 'as', który pozwala zmienić tag HTML (np. na 'main', 'footer')
  as?: React.ElementType; 
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", as: Tag = "section", children, ...props }, ref) => {
    return (
      <Tag
        ref={ref}
        className={cn(
          // Bazowe style
          "py-24 px-6 md:px-12 lg:py-32 relative overflow-hidden",
          // Warianty tła
          variant === "default" && "bg-transparent",
          variant === "darker" && "bg-black/50",
          variant === "highlight" && "bg-blue-950/20 border-y border-blue-500/10",
          className
        )}
        {...props}
      >
        {/* ARIA-HIDDEN="TRUE" - Ważne dla SEO/Dostępności */}
        {/* Mówimy robotom i czytnikom ekranowym: "Ignorujcie te paski, to tylko dekoracja" */}
        <div 
            className="absolute inset-0 flex justify-between pointer-events-none opacity-10 max-w-7xl mx-auto px-6"
            aria-hidden="true" 
        >
            <div className="w-px h-full bg-white/20"></div>
            <div className="w-px h-full bg-white/20"></div>
            <div className="w-px h-full bg-white/20 hidden md:block"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
            {children}
        </div>
      </Tag>
    );
  }
);
Section.displayName = "Section";

export { Section };
import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "darker" | "highlight";
}

// To jest nasze "styled.section"
const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          // Bazowe style: duży padding góra/dół, centrowanie zawartości
          "py-24 px-6 md:px-12 lg:py-32 relative overflow-hidden",
          // Warianty tła
          variant === "default" && "bg-transparent",
          variant === "darker" && "bg-black/50",
          variant === "highlight" && "bg-blue-950/20 border-y border-blue-500/10",
          className
        )}
        {...props}
      >
        {/* Opcjonalny element dekoracyjny - pionowe linie jak w wieżowcach */}
        <div className="absolute inset-0 flex justify-between pointer-events-none opacity-10 max-w-7xl mx-auto px-6">
            <div className="w-px h-full bg-white/20"></div>
            <div className="w-px h-full bg-white/20"></div>
            <div className="w-px h-full bg-white/20 hidden md:block"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">{children}</div>
      </section>
    );
  }
);
Section.displayName = "Section";

export { Section };
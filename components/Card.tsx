import { cn } from "@/lib/utils";
import { ElementType, HTMLAttributes } from "react";

// Definiujemy, że 'as' może być dowolnym tagiem HTML, domyślnie 'div'
interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType; 
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ as: Tag = "div", className, children, ...props }: CardProps) => {
  return (
    <Tag 
      className={cn(
        "bg-white/5 border border-white/10 p-8 hover:border-accent-blue/50 transition-all duration-300 group relative overflow-hidden block", // Dodane 'block' dla bezpieczeństwa
        className
      )}
      {...props}
    >
      {/* Efekt poświaty przy hover */}
      <div className="absolute inset-0 bg-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </Tag>
  );
};
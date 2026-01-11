// components/Card.tsx
import { cn } from "@/lib/utils";

export const Card = ({ className, children }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn(
      "bg-white/5 border border-white/10 p-8 hover:border-accent-blue/50 transition-all duration-300 group relative overflow-hidden",
      className
    )}>
      {/* Efekt poświaty przy hover */}
      <div className="absolute inset-0 bg-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
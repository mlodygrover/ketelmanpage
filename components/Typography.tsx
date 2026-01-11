import { cn } from "@/lib/utils";

// Wielki, innowacyjny nagłówek H1
export const HeadingH1 = ({ className, children }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1 className={cn("text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-accent-blue", className)}>
    {children}
  </h1>
);

// Nagłówek sekcji H2
export const HeadingH2 = ({ className, children }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={cn("text-3xl md:text-5xl font-bold mb-8 relative inline-block", className)}>
    {children}
    {/* Mały akcent pod spodem */}
    <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent-blue"></span>
  </h2>
);

// Zwykły tekst
export const Paragraph = ({ className, children }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-lg md:text-xl text-concrete-gray leading-relaxed mb-6", className)}>
    {children}
  </p>
);
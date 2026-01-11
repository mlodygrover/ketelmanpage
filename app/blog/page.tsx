import { HeadingH1, HeadingH2, Paragraph } from "@/components/Typography";
import { Section } from "@/components/Section";
import Link from "next/link";
import { ALL_ARTICLES } from "@/lib/articles";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

export const metadata = {
  title: "Insights | Ketelman Holding",
  description: "Analizy rynku, strategie technologiczne i raporty ROI.",
};

export default function BlogPage() {
  const featuredArticle = ALL_ARTICLES.find(a => a.featured) || ALL_ARTICLES[0];
  const otherArticles = ALL_ARTICLES.filter(a => a.slug !== featuredArticle.slug);

  return (
    <>
      <Section className="pt-32 pb-16 md:pt-48 bg-black">
        {/* NAGŁÓWEK GAZETOWY */}
        <div className="border-b border-white/20 pb-8 mb-12">
            <div className="flex justify-between items-end mb-4">
                <span className="text-concrete-gray font-mono text-xs uppercase tracking-widest">Wydanie #142</span>
                <span className="text-accent-blue font-mono text-xs uppercase tracking-widest">Market Intelligence</span>
            </div>
            <HeadingH1 className="text-5xl md:text-8xl font-serif tracking-tight border-t border-white/20 pt-8">
                THE KETELMAN <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-concrete-gray">REPORT</span>
            </HeadingH1>
        </div>

        {/* UKŁAD MAGAZYNOWY */}
        <div className="grid lg:grid-cols-12 gap-12">
            
            {/* LEWA KOLUMNA - FEATURED (Duży artykuł) */}
            <div className="lg:col-span-8 group cursor-pointer">
                <Link href={`/blog/${featuredArticle.slug}`}>
                    <div className="relative h-[400px] md:h-[500px] w-full mb-6 overflow-hidden border border-white/10">
                        <img 
                            src={featuredArticle.image} 
                            alt={featuredArticle.title} 
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                        />
                         <div className="absolute top-4 left-4 bg-accent-blue text-black font-bold px-3 py-1 text-xs uppercase">
                            Temat Numeru
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-accent-blue font-mono mb-3 uppercase tracking-widest">
                        <span>{featuredArticle.category}</span>
                        <span>//</span>
                        <span>{featuredArticle.date}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-accent-blue transition-colors leading-tight">
                        {featuredArticle.title}
                    </h2>
                    <p className="text-concrete-gray text-lg md:text-xl leading-relaxed max-w-2xl border-l-2 border-accent-blue pl-6">
                        {featuredArticle.excerpt}
                    </p>
                </Link>
            </div>

            {/* PRAWA KOLUMNA - LISTA (Boczny pasek) */}
            <div className="lg:col-span-4 flex flex-col gap-8 border-l border-white/10 lg:pl-8">
                <div className="font-mono text-xs text-concrete-gray uppercase mb-4">Pozostałe analizy</div>
                
                {otherArticles.map((article) => (
                    <Link key={article.slug} href={`/blog/${article.slug}`} className="group block border-b border-white/10 pb-8 last:border-0">
                         <div className="flex items-center gap-2 text-[10px] text-white/50 font-mono mb-2 uppercase">
                            <span>{article.category}</span>
                            <span className="w-1 h-1 bg-accent-blue rounded-full"></span>
                            <span>{article.readTime} read</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">
                            {article.title}
                        </h3>
                        <p className="text-sm text-concrete-gray line-clamp-2 mb-3">
                            {article.excerpt}
                        </p>
                        <div className="text-xs text-white/40 flex items-center gap-2">
                             <ArrowUpRight size={14} /> Czytaj dalej
                        </div>
                    </Link>
                ))}

                {/* Box Newslettera w stylu ogłoszenia */}
                <div className="mt-auto bg-white/5 border border-white/10 p-6 text-center">
                    <p className="text-accent-blue font-bold text-lg mb-2">Insider Data</p>
                    <p className="text-xs text-concrete-gray mb-4">Dołącz do 2,000+ inwestorów otrzymujących nasze raporty.</p>
                    <button className="w-full bg-white text-black text-xs font-bold py-3 uppercase tracking-widest hover:bg-accent-blue transition-colors">
                        Subskrybuj
                    </button>
                </div>
            </div>
        </div>
      </Section>
    </>
  );
}
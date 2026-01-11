import { Metadata } from "next";
import { HeadingH1, HeadingH2, Paragraph } from "@/components/Typography";
import { Section } from "@/components/Section";
// Usunąłem nieużywany import Card, jeśli nie jest potrzebny w tym pliku,
// ale jeśli planujesz go użyć, możesz go przywrócić.

// --- 1. ROZBUDOWANE METADANE ---
export const metadata: Metadata = {
  title: "O nas | Ketelman - Historia i DNA Holdingu Technologicznego",
  description: "Poznaj historię inwestorów, którzy zbudowali własny software house. Od 2015 roku łączymy Venture Building z twardą technologią. Sprawdź nasze wartości.",
  keywords: ["historia firmy IT", "software house warszawa", "venture building polska", "inwestycje w startupy", "technologia dla biznesu"],
  openGraph: {
    title: "O nas | Ketelman - Od Inwestorów dla Inwestorów",
    description: "Nie dowoził nam rynek, więc zbudowaliśmy to sami. Zobacz, dlaczego nasze podejście do technologii jest inne.",
    url: "https://ketelman.com/o-nas", // Podmień na właściwy URL
    type: "website",
    siteName: "Ketelman Holding",
  },
};

export default function AboutPage() {
  // --- 2. DANE STRUKTURALNE (SCHEMA.ORG) ---
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Ketelman",
      "foundingDate": "2015",
      "slogan": "Od Inwestorów dla Inwestorów",
      "description": "Holding technologiczny łączący inwestycje w startupy z usługami software development.",
      "knowsAbout": ["Venture Building", "Software Architecture", "Business Strategy"]
    }
  };

  return (
    <>
      {/* Wstrzyknięcie JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Section className="pt-40">
        <p className="text-accent-blue font-mono mb-4 text-sm tracking-wider">/ ORIGIN STORY</p>
        
        <header>
            <HeadingH1>Od Inwestorów <br/> dla Inwestorów.</HeadingH1>
        </header>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <article>
            <HeadingH2 className="text-2xl md:text-3xl mb-4">Problem rynkowy</HeadingH2>
            <Paragraph>
              Jako Ketelman Holding inwestowaliśmy w startupy od 2015 roku. Zauważyliśmy niepokojący wzorzec: 
              świetne pomysły biznesowe upadały przez słabe wykonanie techniczne. Software house&apos;y &quot;dowoziły kod&quot;, 
              ale nie dowoziły wartości biznesowej.
            </Paragraph>
          </article>
          <article>
            <HeadingH2 className="text-2xl md:text-3xl mb-4">Nasza odpowiedź</HeadingH2>
            <Paragraph>
              Postanowiliśmy stworzyć własny dział technologiczny. Początkowo – tylko dla naszych spółek.
              Kiedy osiągnęliśmy poziom, w którym nasze systemy wyprzedzały rynkową konkurencję o lata świetlne,
              podjęliśmy decyzję o otwarciu się na partnerów zewnętrznych.
            </Paragraph>
          </article>
        </div>
      </Section>

      <Section variant="highlight">
        <HeadingH2 className="text-center mb-12">Nasze DNA</HeadingH2>
        
        {/* Zmiana na listę semantyczną dla lepszego zrozumienia przez roboty */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
            
            {/* Wartość 1 */}
            <div className="p-6">
                <div className="text-5xl font-bold text-white/10 mb-4" aria-hidden="true">01</div>
                <h3 className="text-xl font-bold text-white mb-2">Pragmatyzm</h3>
                <p className="text-concrete-gray text-sm">
                    Nie używamy technologii, bo są &quot;modne&quot;. Używamy tych, które przynoszą zwrot (ROI).
                </p>
            </div>

            {/* Wartość 2 */}
            <div className="p-6 border-x border-white/5">
                <div className="text-5xl font-bold text-accent-blue/20 mb-4" aria-hidden="true">02</div>
                <h3 className="text-xl font-bold text-white mb-2">Przejrzystość</h3>
                <p className="text-concrete-gray text-sm">
                    Mówimy &quot;nie&quot;, gdy pomysł nie ma sensu biznesowego. Chronimy Twój budżet przed przepaleniem.
                </p>
            </div>

            {/* Wartość 3 */}
            <div className="p-6">
                <div className="text-5xl font-bold text-white/10 mb-4" aria-hidden="true">03</div>
                <h3 className="text-xl font-bold text-white mb-2">Długofalowość</h3>
                <p className="text-concrete-gray text-sm">
                    Budujemy systemy gotowe na 5-10 lat, skalowalne i bezpieczne, a nie &quot;jednorazówki&quot; pod demo.
                </p>
            </div>
        </div>
      </Section>
    </>
  );
}
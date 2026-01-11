import { Metadata } from "next";
import { HeadingH1, HeadingH2, Paragraph } from "@/components/Typography";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Check } from "lucide-react";

// --- 1. METADANE SEO ---
export const metadata: Metadata = {
  title: "Oferta | Ketelman - Software House Enterprise, Audyty i Rescue Missions",
  description: "Specjalizujemy się w trudnych projektach. Budowa systemów dedykowanych (ERP/CRM), ratowanie upadających projektów (Rescue Mission) oraz Product Design.",
  keywords: ["software house warszawa", "ratowanie projektów it", "audyt kodu", "systemy dedykowane", "produkcja oprogramowania", "mikroserwisy"],
  openGraph: {
    title: "Oferta Ketelman Holding - Technologia dla Biznesu",
    description: "Nie jesteśmy agencją. Budujemy systemy krytyczne. Sprawdź nasze usługi.",
    url: "https://ketelman.com/oferta",
    type: "website",
  },
};

const services = [
  {
    title: "Holding Tech Stack Development",
    desc: "Kompleksowa budowa oprogramowania dedykowanego. Od ERP, przez CRM, aż po zaawansowane platformy B2B.",
    features: ["Architektura Mikroserwisów", "Bezpieczeństwo klasy Enterprise", "Skalowalność chmurowa (AWS/Azure)"]
  },
  {
    title: "Rescue Mission",
    desc: "Masz projekt, który utknął? Deweloperzy przestali odbierać telefony? Przejmujemy kod, naprawiamy go i wdrażamy.",
    features: ["Audyt kodu (Code Review)", "Refaktoryzacja", "Optymalizacja długu technologicznego"]
  },
  {
    title: "Product Design & Strategy",
    desc: "Nie zaczynamy od kodu. Zaczynamy od makiety i arkusza kalkulacyjnego. Weryfikujemy opłacalność.",
    features: ["Warsztaty Discovery", "Prototypowanie UI/UX", "Analiza Biznesowa"]
  }
];

export default function OfferPage() {
  // --- 2. DANE STRUKTURALNE (SCHEMA.ORG) ---
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": services.map((service, index) => ({
      "@type": "Service",
      "position": index + 1,
      "name": service.title,
      "description": service.desc,
      "provider": {
        "@type": "Organization",
        "name": "Ketelman Holding"
      },
      "areaServed": "PL",
      "serviceType": "Information Technology"
    }))
  };

  return (
    <>
      {/* Wstrzyknięcie JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Section className="pt-40">
        <header>
            <HeadingH1>Oferta szyta na miarę <br/> <span className="text-accent-blue">dużego biznesu.</span></HeadingH1>
            <Paragraph>
                Nie jesteśmy agencją reklamową. Jesteśmy inżynierami oprogramowania.
                Specjalizujemy się w systemach o krytycznym znaczeniu dla przedsiębiorstwa.
            </Paragraph>
        </header>
      </Section>

      <Section variant="darker">
        <div className="grid gap-8">
          {services.map((service, idx) => (
            // Usunąłem 'as="article"', zostawiając domyślny div
            <Card key={idx} as="article" className="flex flex-col md:flex-row gap-8 items-start border-l-4 border-l-accent-blue hover:bg-white/5 transition-colors">
                <div className="md:w-1/3">
                    <h2 className="text-2xl font-bold text-white mb-2">{service.title}</h2>
                </div>
                <div className="md:w-2/3">
                    <p className="text-concrete-gray mb-6 text-lg">{service.desc}</p>
                    <ul className="grid sm:grid-cols-2 gap-4">
                        {service.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-3 text-white/80">
                                <Check size={16} className="text-accent-blue flex-shrink-0" aria-hidden="true" /> 
                                <span>{feat}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
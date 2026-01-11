import { HeadingH1, HeadingH2, Paragraph } from "@/components/Typography";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Check } from "lucide-react";

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
  return (
    <>
      <Section className="pt-40">
        <HeadingH1>Oferta szyta na miarę <br/> <span className="text-accent-blue">dużego biznesu.</span></HeadingH1>
        <Paragraph>
            Nie jesteśmy agencją reklamową. Jesteśmy inżynierami oprogramowania.
            Specjalizujemy się w systemach o krytycznym znaczeniu dla przedsiębiorstwa.
        </Paragraph>
      </Section>

      <Section variant="darker">
        <div className="grid gap-8">
          {services.map((service, idx) => (
            <Card key={idx} className="flex flex-col md:flex-row gap-8 items-start border-l-4 border-l-accent-blue">
                <div className="md:w-1/3">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                </div>
                <div className="md:w-2/3">
                    <p className="text-concrete-gray mb-6 text-lg">{service.desc}</p>
                    <ul className="grid sm:grid-cols-2 gap-4">
                        {service.features.map((feat) => (
                            <li key={feat} className="flex items-center gap-3 text-white/80">
                                <Check size={16} className="text-accent-blue" /> {feat}
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
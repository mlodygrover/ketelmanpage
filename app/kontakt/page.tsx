import { Metadata } from "next";
import { HeadingH1, Paragraph } from "@/components/Typography";
import { Section } from "@/components/Section";
import { Mail, MapPin, Phone } from "lucide-react";

// --- 1. METADANE SEO ---
export const metadata: Metadata = {
  title: "Kontakt | Ketelman Holding - Umów Konsultację Strategiczną",
  description: "Szukasz partnera technologicznego? Skontaktuj się z zarządem Ketelman Holding. Biuro w Warsaw Spire. Gwarantujemy poufność (NDA) i wstępną analizę projektu w 48h.",
  openGraph: {
    title: "Skontaktuj się z nami | Ketelman Holding",
    description: "Umów spotkanie w Warsaw Spire lub konsultację online. Twój partner w Venture Building.",
    url: "https://ketelman.com/kontakt",
    type: "website",
  },
};

export default function ContactPage() {
  // --- 2. DANE STRUKTURALNE (SCHEMA.ORG) ---
  // Dzięki temu Google Maps i wyszukiwarka lepiej rozumieją lokalizację firmy
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Ketelman Holding",
      "url": "https://ketelman.com",
      "logo": "https://ketelman.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+48 22 000 00 00",
        "contactType": "sales",
        "areaServed": "PL",
        "availableLanguage": ["Polish", "English"]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plac Europejski 1 (Warsaw Spire)",
        "addressLocality": "Warszawa",
        "postalCode": "00-844",
        "addressCountry": "PL"
      },
      "email": "zarzad@ketelman-holding.com"
    }
  };

  return (
    <>
      {/* Wstrzyknięcie JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Section className="pt-40 min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Lewa kolumna: Info */}
          <div>
            <header>
                <HeadingH1>Spotkajmy się <br/> <span className="text-accent-blue">na szczycie.</span></HeadingH1>
                <Paragraph>
                  Każdy projekt zaczynamy od analizy NDA i wstępnej konsultacji strategicznej.
                  Jesteśmy wybredni co do projektów, które przyjmujemy, bo angażujemy się w nie na 100%.
                </Paragraph>
            </header>
            
            {/* Użycie tagu <address> dla semantyki */}
            <address className="mt-12 space-y-8 not-italic">
              
              {/* Adres */}
              <div className="flex items-start gap-6">
                  <div className="bg-accent-blue/10 p-4 rounded-sm text-accent-blue" aria-hidden="true">
                      <MapPin />
                  </div>
                  <div>
                      <h3 className="text-white font-bold text-lg">Centrala</h3>
                      <p className="text-concrete-gray">
                          Warsaw Spire, Floor 35<br/>
                          Plac Europejski 1, 00-844 Warszawa
                      </p>
                  </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-6">
                  <div className="bg-accent-blue/10 p-4 rounded-sm text-accent-blue" aria-hidden="true">
                      <Mail />
                  </div>
                  <div>
                      <h3 className="text-white font-bold text-lg">E-mail</h3>
                      <a href="mailto:zarzad@ketelman-holding.com" className="text-concrete-gray hover:text-accent-blue transition-colors">
                          zarzad@ketelman-holding.com
                      </a>
                  </div>
              </div>
              
              {/* Telefon */}
               <div className="flex items-start gap-6">
                  <div className="bg-accent-blue/10 p-4 rounded-sm text-accent-blue" aria-hidden="true">
                      <Phone />
                  </div>
                  <div>
                      <h3 className="text-white font-bold text-lg">Infolinia Inwestorska</h3>
                      <a href="tel:+48220000000" className="text-concrete-gray hover:text-accent-blue transition-colors">
                          +48 22 000 00 00
                      </a>
                  </div>
              </div>
            </address>
          </div>

          {/* Prawa kolumna: Formularz */}
          <div className="bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white mb-6">Wstępna analiza projektu</h2>
              <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                      <div>
                          <label htmlFor="name" className="block text-xs text-accent-blue uppercase font-bold mb-2">Imię i Nazwisko</label>
                          <input id="name" name="name" type="text" className="w-full bg-black/40 border border-white/10 p-3 text-white focus:border-accent-blue outline-none transition-colors" required />
                      </div>
                      <div>
                          <label htmlFor="company" className="block text-xs text-accent-blue uppercase font-bold mb-2">Firma</label>
                          <input id="company" name="company" type="text" className="w-full bg-black/40 border border-white/10 p-3 text-white focus:border-accent-blue outline-none transition-colors" />
                      </div>
                  </div>
                  
                  <div>
                      <label htmlFor="email" className="block text-xs text-accent-blue uppercase font-bold mb-2">Adres E-mail</label>
                      <input id="email" name="email" type="email" className="w-full bg-black/40 border border-white/10 p-3 text-white focus:border-accent-blue outline-none transition-colors" required />
                  </div>

                  <div>
                      <label htmlFor="message" className="block text-xs text-accent-blue uppercase font-bold mb-2">Opisz krótko wyzwanie</label>
                      <textarea id="message" name="message" rows={4} className="w-full bg-black/40 border border-white/10 p-3 text-white focus:border-accent-blue outline-none transition-colors" required></textarea>
                  </div>

                  <button type="submit" className="w-full bg-accent-blue text-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors">
                      Wyślij zgłoszenie
                  </button>
              </form>
          </div>

        </div>
      </Section>
    </>
  );
}
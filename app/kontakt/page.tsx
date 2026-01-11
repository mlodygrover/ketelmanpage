import { HeadingH1, Paragraph } from "@/components/Typography";
import { Section } from "@/components/Section";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <Section className="pt-40 min-h-screen">
      <div className="grid lg:grid-cols-2 gap-16">
        
        {/* Lewa kolumna: Info */}
        <div>
          <HeadingH1>Spotkajmy się <br/> <span className="text-accent-blue">na szczycie.</span></HeadingH1>
          <Paragraph>
            Każdy projekt zaczynamy od analizy NDA i wstępnej konsultacji strategicznej.
            Jesteśmy wybredni co do projektów, które przyjmujemy, bo angażujemy się w nie na 100%.
          </Paragraph>
          
          <div className="mt-12 space-y-8">
            <div className="flex items-start gap-6">
                <div className="bg-accent-blue/10 p-4 rounded-sm text-accent-blue">
                    <MapPin />
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg">Centrala</h3>
                    <p className="text-concrete-gray">Warsaw Spire, Floor 35<br/>Plac Europejski 1, Warszawa</p>
                </div>
            </div>

            <div className="flex items-start gap-6">
                <div className="bg-accent-blue/10 p-4 rounded-sm text-accent-blue">
                    <Mail />
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg">E-mail</h3>
                    <p className="text-concrete-gray">zarzad@ketelman-holding.com</p>
                </div>
            </div>
            
             <div className="flex items-start gap-6">
                <div className="bg-accent-blue/10 p-4 rounded-sm text-accent-blue">
                    <Phone />
                </div>
                <div>
                    <h3 className="text-white font-bold text-lg">Infolinia Inwestorska</h3>
                    <p className="text-concrete-gray">+48 22 000 00 00</p>
                </div>
            </div>
          </div>
        </div>

        {/* Prawa kolumna: Formularz */}
        <div className="bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Wstępna analiza projektu</h3>
            <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs text-accent-blue uppercase font-bold mb-2">Imię i Nazwisko</label>
                        <input type="text" className="w-full bg-black/40 border border-white/10 p-3 text-white focus:border-accent-blue outline-none transition-colors" />
                    </div>
                    <div>
                        <label className="block text-xs text-accent-blue uppercase font-bold mb-2">Firma</label>
                        <input type="text" className="w-full bg-black/40 border border-white/10 p-3 text-white focus:border-accent-blue outline-none transition-colors" />
                    </div>
                </div>
                
                <div>
                    <label className="block text-xs text-accent-blue uppercase font-bold mb-2">Adres E-mail</label>
                    <input type="email" className="w-full bg-black/40 border border-white/10 p-3 text-white focus:border-accent-blue outline-none transition-colors" />
                </div>

                <div>
                    <label className="block text-xs text-accent-blue uppercase font-bold mb-2">Opisz krótko wyzwanie</label>
                    <textarea rows={4} className="w-full bg-black/40 border border-white/10 p-3 text-white focus:border-accent-blue outline-none transition-colors"></textarea>
                </div>

                <button type="submit" className="w-full bg-accent-blue text-black font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors">
                    Wyślij zgłoszenie
                </button>
            </form>
        </div>

      </div>
    </Section>
  );
}
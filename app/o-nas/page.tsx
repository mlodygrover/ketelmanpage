import { HeadingH1, HeadingH2, Paragraph } from "@/components/Typography";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";

export const metadata = {
  title: "O nas | Ketelman Holding",
  description: "Historia inwestorów, którzy stali się technologami.",
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-40">
        <p className="text-accent-blue font-mono mb-4">/ ORIGIN STORY</p>
        <HeadingH1>Od Inwestorów <br/> dla Inwestorów.</HeadingH1>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div>
            <HeadingH2 className="text-2xl md:text-3xl">Problem rynkowy</HeadingH2>
            <Paragraph>
              Jako Ketelman Holding inwestowaliśmy w startupy od 2015 roku. Zauważyliśmy niepokojący wzorzec: 
              świetne pomysły biznesowe upadały przez słabe wykonanie techniczne. Software house'y "dowoziły kod", 
              ale nie dowoziły wartości biznesowej.
            </Paragraph>
          </div>
          <div>
            <HeadingH2 className="text-2xl md:text-3xl">Nasza odpowiedź</HeadingH2>
            <Paragraph>
              Postanowiliśmy stworzyć własny dział technologiczny. Początkowo – tylko dla naszych spółek.
              Kiedy osiągnęliśmy poziom, w którym nasze systemy wyprzedzały rynkową konkurencję o lata świetlne,
              podjęliśmy decyzję o otwarciu się na partnerów zewnętrznych.
            </Paragraph>
          </div>
        </div>
      </Section>

      <Section variant="highlight">
        <HeadingH2 className="text-center mb-12">Nasze DNA</HeadingH2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
                <div className="text-5xl font-bold text-white/10 mb-4">01</div>
                <h3 className="text-xl font-bold text-white mb-2">Pragmatyzm</h3>
                <p className="text-concrete-gray text-sm">Nie używamy technologii, bo są "modne". Używamy tych, które przynoszą zwrot.</p>
            </div>
            <div className="p-6 border-x border-white/5">
                <div className="text-5xl font-bold text-accent-blue/20 mb-4">02</div>
                <h3 className="text-xl font-bold text-white mb-2">Przejrzystość</h3>
                <p className="text-concrete-gray text-sm">Mówimy "nie", gdy pomysł nie ma sensu biznesowego. Chronimy Twój budżet.</p>
            </div>
            <div className="p-6">
                <div className="text-5xl font-bold text-white/10 mb-4">03</div>
                <h3 className="text-xl font-bold text-white mb-2">Długofalowość</h3>
                <p className="text-concrete-gray text-sm">Budujemy systemy gotowe na 5-10 lat, a nie "jednorazówki".</p>
            </div>
        </div>
      </Section>
    </>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Dodajemy, aby oznaczać aktywny link
import { Menu, X } from "lucide-react";

// Definicja linków w jednym miejscu (DRY + łatwiejsze generowanie Schemy)
const NAV_LINKS = [
  { href: "/o-nas", label: "O nas", title: "Poznaj historię Ketelman Holding" },
  { href: "/portfolio", label: "Portfolio", title: "Zobacz nasze realizacje i inwestycje" },
  { href: "/oferta", label: "Oferta", title: "Usługi programistyczne i venture building" },
  { href: "/blog", label: "Insights", title: "Analizy rynkowe i raporty" }, // Warto dodać bloga do menu
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Sprawdzamy, na której stronie jesteśmy

  const closeMenu = () => setIsOpen(false);

  // --- DANE STRUKTURALNE (SiteNavigationElement) ---
  // To mówi Google: "Oto struktura nawigacji tej witryny"
  const navSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": NAV_LINKS.map(link => link.label),
    "url": NAV_LINKS.map(link => `https://ketelman.com${link.href}`) // Podmień domenę
  };

  return (
    <>
      {/* Wstrzyknięcie JSON-LD dla nawigacji */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navSchema) }}
      />

      <nav 
        className="fixed top-0 w-full z-50 glass-effect border-b border-white/5"
        aria-label="Główna nawigacja"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            
            {/* LOGO */}
            <Link 
              href="/" 
              className="text-xl font-bold tracking-tighter flex items-center z-50 relative group"
              onClick={closeMenu}
              aria-label="Strona główna Ketelman Holding"
              title="Powrót na stronę główną"
            >
              KETELMAN <span className="text-accent-blue ml-1 group-hover:text-white transition-colors">HOLDING</span>
            </Link>

            {/* DESKTOP MENU - Zmiana DIV na UL dla semantyki */}
            <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-accent-blue ${
                      pathname === link.href ? "text-accent-blue" : "text-white"
                    }`}
                    title={link.title}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              
              {/* Przycisk Kontakt (jako CTA poza pętlą lub w pętli - tu oddzielnie dla stylu) */}
              <li>
                <Link 
                  href="/kontakt" 
                  className="text-sm font-medium uppercase tracking-widest border border-white/20 px-6 py-2 rounded-sm hover:border-accent-blue hover:text-accent-blue text-white transition-all flex items-center"
                  aria-label="Skontaktuj się z nami"
                >
                  Kontakt
                </Link>
              </li>
            </ul>

            {/* MOBILE TOGGLE BUTTON */}
            <button 
              className="md:hidden text-white z-50 relative p-2 hover:text-accent-blue transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={isOpen} // Ważne dla dostępności (Screen Readers)
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU OVERLAY */}
        {isOpen && (
          <div 
            id="mobile-menu"
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden flex flex-col justify-center items-center animate-in fade-in duration-200"
          >
            {/* Zmiana DIV na UL również tutaj */}
            <ul className="flex flex-col items-center gap-8 list-none p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    onClick={closeMenu}
                    className={`text-2xl font-bold uppercase tracking-widest transition-colors hover:text-accent-blue ${
                      pathname === link.href ? "text-accent-blue" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/kontakt" 
                  onClick={closeMenu}
                  className="text-2xl font-bold text-accent-blue border border-accent-blue px-8 py-3 mt-4 uppercase tracking-widest hover:bg-accent-blue hover:text-black transition-all inline-block"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};
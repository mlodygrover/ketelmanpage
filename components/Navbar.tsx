"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // <--- 1. Importujemy Image
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/o-nas", label: "O nas", title: "Poznaj historię Ketelman Holding" },
  { href: "/portfolio", label: "Portfolio", title: "Zobacz nasze realizacje i inwestycje" },
  { href: "/oferta", label: "Oferta", title: "Usługi programistyczne i venture building" },
  { href: "/blog", label: "Insights", title: "Analizy rynkowe i raporty" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  const navSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": NAV_LINKS.map(link => link.label),
    "url": NAV_LINKS.map(link => `https://ketelman.com${link.href}`)
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navSchema) }}
      />

      <nav
        className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all"
        aria-label="Główna nawigacja"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            
            {/* LOGO - ZMIANA TUTAJ */}
            <Link
              href="/"
              // Usunięto klasy tekstowe (font-bold itp.), zostawiono pozycjonowanie
              className="flex items-center z-50 relative hover:opacity-80 transition-opacity"
              onClick={closeMenu}
              aria-label="Strona główna - Ketelman Holding"
            >
              <Image
                src="/logo2.png" // Upewnij się, że plik jest w folderze public/
                alt="Ketelman Holding Logo"
                // Width i Height określają proporcje (aspect ratio), CSS niżej kontroluje rozmiar
                width={300} 
                height={100}
                // h-8 (32px) na mobile, h-10 (40px) na desktopie, szerokość auto
                className="w-auto h-8 md:h-10 object-contain"
                priority // Ładujemy priorytetowo (LCP)
              />
            </Link>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-accent-blue ${pathname === link.href ? "text-accent-blue" : "text-white"
                      }`}
                    title={link.title}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href="/kontakt"
                  className="text-sm font-medium uppercase tracking-widest border border-white/20 px-6 py-2 rounded-sm hover:border-accent-blue hover:text-accent-blue text-white transition-all flex items-center"
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
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav> 
      
      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden flex flex-col justify-center items-center animate-in fade-in duration-200"
        >
          <ul className="flex flex-col items-center gap-8 list-none p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`text-2xl font-bold uppercase tracking-widest transition-colors hover:text-accent-blue ${pathname === link.href ? "text-accent-blue" : "text-white"
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
    </>
  );
};
"use client"; // Ważne: musimy to dodać, bo używamy useState (interakcja)

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ikony do menu mobilnego

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Funkcja pomocnicza do zamykania menu po kliknięciu w link (na mobile)
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* LOGO - flex items-center naprawia pionowe ustawienie */}
          <Link 
            href="/" 
            className="text-xl font-bold tracking-tighter flex items-center z-50 relative"
            onClick={closeMenu}
          >
            KETELMAN <span className="text-accent-blue ml-1">HOLDING</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            <Link href="/o-nas" className="hover:text-accent-blue transition-colors">
              O nas
            </Link>
            <Link href="/portfolio" className="hover:text-accent-blue transition-colors">
              Portfolio
            </Link>
            <Link href="/oferta" className="hover:text-accent-blue transition-colors">
              Oferta
            </Link>
            {/* Przycisk Kontakt wyróżniony ramką */}
            <Link 
              href="/kontakt" 
              className="hover:text-accent-blue transition-colors border border-white/20 px-6 py-2 rounded-sm hover:border-accent-blue flex items-center"
            >
              Kontakt
            </Link>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button 
            className="md:hidden text-white z-50 relative p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {/* Pokazujemy tylko gdy isOpen == true. Na desktopie (md:hidden) zawsze ukryte. */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden flex flex-col justify-center items-center gap-8 animate-in fade-in duration-200">
          <Link 
            href="/o-nas" 
            onClick={closeMenu}
            className="text-2xl font-bold text-white hover:text-accent-blue transition-colors uppercase tracking-widest"
          >
            O nas
          </Link>
          <Link 
            href="/portfolio" 
            onClick={closeMenu}
            className="text-2xl font-bold text-white hover:text-accent-blue transition-colors uppercase tracking-widest"
          >
            Portfolio
          </Link>
          <Link 
            href="/oferta" 
            onClick={closeMenu}
            className="text-2xl font-bold text-white hover:text-accent-blue transition-colors uppercase tracking-widest"
          >
            Oferta
          </Link>
          <Link 
            href="/kontakt" 
            onClick={closeMenu}
            className="text-2xl font-bold text-accent-blue border border-accent-blue px-8 py-3 mt-4 uppercase tracking-widest hover:bg-accent-blue hover:text-black transition-all"
          >
            Kontakt
          </Link>
        </div>
      )}
    </nav>
  );
};
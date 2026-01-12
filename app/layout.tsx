import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// --- KONFIGURACJA GLOBALNA SEO ---
export const metadata: Metadata = {
  // 1. Definiujemy adres domeny (wymagane do poprawnego działania obrazków w social media)
  metadataBase: new URL("https://ketelman.com"), // ⚠️ ZMIEŃ NA SWOJĄ DOMENĘ

  // 2. Szablon tytułów (Automatyzacja)
  title: {
    default: "Ketelman Holding & Software House | Venture Building",
    template: "%s | Ketelman Holding" // %s zostanie zastąpione tytułem z podstrony (np. "Kontakt")
  },

  description: "Nie jesteśmy tylko programistami. Jesteśmy praktykami biznesu. Tworzymy oprogramowanie dedykowane (ERP, CRM) i budujemy startupy, które sprawdziliśmy na własnym kapitale.",

  // 3. Słowa kluczowe widoczne dla wszystkich stron
  keywords: ["software house", "venture building", "inwestycje", "aplikacje dedykowane", "systemy ERP"],

  // 4. Konfiguracja robotów (Indeksuj wszystko)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 5. Domyślny wygląd przy udostępnianiu (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://ketelman.com",
    siteName: "Ketelman Holding",
    title: "Ketelman Holding - Code & Capital",
    description: "Inwestujemy w startupy i tworzymy oprogramowanie dla biznesu.",
    images: [
      {
        url: "/og-image.jpg", // Wrzuć plik og-image.jpg (1200x630px) do folderu public
        width: 1200,
        height: 630,
        alt: "Ketelman Holding Brand",
      },
    ],
  },

  // 6. Ikony (Favicon)
  // Zostaw tylko to, jeśli K.png jest w folderze public
  icons: {
    icon: "/icon1.ico",
  },

  // 7. Link Kanoniczny (Zapobiega duplikacji)
  alternates: {
    canonical: "./",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // --- GLOBALNE DANE STRUKTURALNE (SCHEMA.ORG) ---
  const globalSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ketelman Holding",
    "url": "https://ketelman.com",
    "logo": "https://ketelman.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/twoja-firma",
      "https://twitter.com/twoja-firma",
      "https://facebook.com/twoja-firma"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+48 22 000 00 00",
      "contactType": "customer service",
      "areaServed": "PL",
      "availableLanguage": "Polish"
    }
  };

  return (
    <html lang="pl" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-black text-white selection:bg-accent-blue selection:text-black">
        {/* Wstrzyknięcie globalnej schemy */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />

        <Navbar />

        <main className="flex flex-col min-h-screen">
          {children}
        </main>

        {/* Tutaj warto dodać Footer, jeśli go masz */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
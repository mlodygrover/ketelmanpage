import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google"; // Użyjemy dwóch fontów
import "./globals.css";
import { Navbar } from "@/components/Navbar";

// Montserrat dla nagłówków (bardziej techniczny), Inter dla tekstu
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ketelman Holding & Software House | Budujemy Fundamenty Biznesu",
  description: "Nie jesteśmy tylko programistami. Jesteśmy praktykami biznesu. Tworzymy oprogramowanie, które sprawdziliśmy na własnych spółkach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
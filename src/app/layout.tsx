// src/app/layout.tsx

import type { Metadata } from "next";
// Importujemy domyślne czcionki z Next.js
import { Inter, Lora } from "next/font/google";
import "./globals.css";

// Importujemy stałe komponenty
import Navbar from "@/components/navbar";
import Footer from "@/components/footer"; // Upewnij się, że stworzyłeś ten komponent

// Konfiguracja czcionek dla lepszego wyglądu
const inter = Inter({ subsets: ["latin"], variable: '--font-inter' }); // Czcionka dla treści
const lora = Lora({ subsets: ["latin"], weight: ["400", "700"], variable: '--font-lora' }); // Czcionka szeryfowa dla nagłówków

export const metadata: Metadata = {
  title: "Nazwa Orkiestry - Zapraszamy na koncerty",
  description: "Oficjalna strona internetowa Nazwy Orkiestry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      {/* 
        Używamy klas z tailwind.config.js (font-sans, font-serif) 
        do przypisania zmiennych CSS z czcionkami do odpowiednich klas
      */}
      <body className={`${inter.variable} ${lora.variable} font-sans bg-zinc-950 text-gray-100`}>
        {/* Nawigacja renderowana na każdej stronie */}
        <Navbar />

        {/* Miejsce na unikalną treść podstrony (z page.tsx) */}
        <main>{children}</main>
        
        {/* Stopka renderowana na każdej stronie */}
        <Footer />
      </body>
    </html>
  );
}
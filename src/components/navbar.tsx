// src/components/Navbar.tsx

import React from 'react';
// KROK 1: Importujemy komponent Link
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-zinc-950 bg-opacity-80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center text-gray-100">
        
        {/* KROK 2: Zamieniamy <a> na <Link> */}
        <Link href="/" className="text-2xl font-bold font-serif tracking-wider">
          NAZWA ORKIESTRY
        </Link>
        
        <ul className="hidden lg:flex items-center space-x-8 font-sans">
          {/* Robimy to samo dla wszystkich linków w menu */}
          <li><Link href="/repertuar" className="hover:text-amber-400 transition-colors">Repertuar</Link></li>
          <li><Link href="/o-nas" className="hover:text-amber-400 transition-colors">O nas</Link></li>
          <li><Link href="/orkiestra" className="hover:text-amber-400 transition-colors">Orkiestra</Link></li>
          <li><Link href="/kontakt" className="hover:text-amber-400 transition-colors">Kontakt</Link></li>
        </ul>
        
        {/* I dla przycisku "KUP BILET" */}
        <Link href="/bilety" className="hidden lg:inline-block bg-amber-400 text-zinc-900 font-bold py-2 px-6 rounded-sm hover:bg-amber-500 transition-colors duration-300">
          KUP BILET
        </Link>
        
        <button className="lg:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-4 6h16"></path></svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
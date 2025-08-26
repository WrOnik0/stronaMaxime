import React from 'react';

const Navbar = () => {
  return (
    // Używamy bg-zinc-950 zamiast bg-brand-dark
    <header className="bg-zinc-950 bg-opacity-80 backdrop-blur-sm sticky top-0 z-50">
      {/* Używamy text-gray-100 zamiast text-brand-light */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center text-gray-100">
        <a href="/" className="text-2xl font-bold font-serif tracking-wider">
          Maxime
        </a>
        <ul className="hidden lg:flex items-center space-x-8 font-sans">
          {/* Używamy hover:text-amber-400 zamiast hover:text-brand-gold */}
          <li><a href="/repertuar" className="hover:text-amber-400 transition-colors">Repertuar</a></li>
          <li><a href="/o-nas" className="hover:text-amber-400 transition-colors">O nas</a></li>
          <li><a href="/orkiestra" className="hover:text-amber-400 transition-colors">Orkiestra</a></li>
          <li><a href="/kontakt" className="hover:text-amber-400 transition-colors">Kontakt</a></li>
        </ul>
        {/* Używamy bg-amber-400, text-zinc-900 i hover:bg-amber-500 */}
        <a href="/bilety" className="hidden lg:inline-block bg-amber-400 text-zinc-900 font-bold py-2 px-6 rounded-sm hover:bg-amber-500 transition-colors duration-300">
          KUP BILET
        </a>
        <button className="lg:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-4 6h16"></path></svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
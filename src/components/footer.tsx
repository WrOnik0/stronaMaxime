import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-gray-800 py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Nazwa Orkiestry. Wszelkie prawa zastrzeżone.</p>
        <p className="text-sm mt-2">Projekt i wykonanie: [Twoje Imię/Nazwa]</p>
      </div>
    </footer>
  );
};

export default Footer;
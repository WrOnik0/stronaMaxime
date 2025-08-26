import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/videos/orchestra-performance.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
      {/* Używamy text-gray-100 */}
      <div className="relative z-20 px-4 text-gray-100">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider leading-tight">
          Symfonia losu Beethovena
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Doświadcz potęgi V Symfonii pod batutą maestro Jana Kowalskiego.
        </p>
        {/* Używamy bg-amber-400, text-zinc-900 i hover:bg-amber-500 */}
        <a href="/bilety" className="mt-8 inline-block bg-amber-400 text-zinc-900 font-bold py-3 px-10 rounded-sm text-lg hover:bg-amber-500 transition-colors duration-300">
          KUP BILET
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
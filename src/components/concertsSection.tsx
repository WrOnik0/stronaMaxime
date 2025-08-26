import React from 'react';
import Image from 'next/image';

const ConcertCard = ({ date, title, imageUrl, link }: { date: string; title: string; imageUrl: string; link: string; }) => (
  // bg-gray-900 to standardowa klasa, więc jest OK
  <div className="bg-gray-900 overflow-hidden group">
    <div className="overflow-hidden relative h-64 w-full">
      <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <p className="text-gray-400 text-sm">{date}</p>
      {/* Używamy text-gray-100 */}
      <h3 className="font-serif text-2xl mt-2 mb-4 text-gray-100">{title}</h3>
      {/* Używamy text-amber-400 i hover:text-amber-500 */}
      <a href={link} className="text-amber-400 font-bold hover:text-amber-500 transition-colors">
        Szczegóły i bilety &rarr;
      </a>
    </div>
  </div>
);

const ConcertsSection = () => {
  return (
    // Używamy bg-zinc-950
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6">
        {/* Używamy text-gray-100 */}
        <h2 className="font-serif text-4xl text-center mb-12 text-gray-100">Nadchodzące wydarzenia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ConcertCard date="25 PAŹDZIERNIKA 2024, 19:00" title="Wieczór z Beethovenem" imageUrl="/images/koncert1.jpg" link="#" />
          <ConcertCard date="15 LISTOPADA 2024, 19:00" title="Magia Mozarta" imageUrl="/images/koncert2.jpg" link="#" />
          <ConcertCard date="5 GRUDNIA 2024, 19:00" title="Koncert świąteczny" imageUrl="/images/koncert3.jpg" link="#" />
        </div>
      </div>
    </section>
  );
};

export default ConcertsSection;
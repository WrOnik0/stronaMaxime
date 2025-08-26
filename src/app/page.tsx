import HeroSection from '@/components/heroSection';
import ConcertsSection from '@/components/concertsSection';

export default function HomePage() {
  return (
    // Używamy fragmentu (<>...</>), bo nie potrzebujemy dodatkowego kontenera.
    // Navbar i Footer pojawią się automatycznie dzięki layout.tsx.
    <>
      <HeroSection />
      <ConcertsSection />
      {/* <AboutUsSection /> */}
      {/* <SupportSection /> */}
    </>
  );
}
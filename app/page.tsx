import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/sections/Hero';
import Pain from '@/components/sections/Pain';
import Solution from '@/components/sections/Solution';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';
import Deliverables from '@/components/sections/Deliverables';
import Bonuses from '@/components/sections/Bonuses';
import Offer from '@/components/sections/Offer';
import Guarantee from '@/components/sections/Guarantee';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pain />
        <Solution />
        <Benefits />
        <Testimonials />
        <Deliverables />
        <Bonuses />
        <Offer />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

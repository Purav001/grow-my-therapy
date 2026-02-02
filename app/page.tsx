import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Approach from '@/components/Approach';
import Office from '@/components/Office';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5EFE6]">
      <Header version="redesign" />
      <Hero version="redesign" />
      <About />
      <Approach /> 
      {/* version="redesign" */}
      <Office />
      <FAQ version="redesign" />
      <Contact />
      <Footer version="redesign" />
    </div>
  );
}

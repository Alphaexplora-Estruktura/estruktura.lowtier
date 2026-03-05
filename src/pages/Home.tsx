import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Collection from "../components/Collection";
import Craftsmanship from "../components/Craftsmanship";
import Gallery from "../components/Gallery";
import CTA from "../components/CTA";

export default function Home() {

  return (
    <div className="bg-estruktura-bg min-h-screen font-sans selection:bg-estruktura-gold selection:text-estruktura-bg relative text-estruktura-cream">

      {/* Main Content */}
      <main className="relative z-10 w-full overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Collection />
        <Craftsmanship />
        <Gallery />
        <CTA />
      </main>

      <footer className="py-16 bg-[#050001] border-t border-estruktura-gold/10 text-center relative z-20">
        <div className="max-w-[85rem] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="flex flex-col items-start gap-2">
            <h2 className="text-3xl text-estruktura-gold font-serif tracking-widest uppercase">Estruktura</h2>
            <p className="text-xs text-estruktura-cream/40 font-light tracking-wide">The Zenith of Artisanal Foundations</p>
          </div>

          <div className="flex gap-10 text-xs uppercase tracking-[0.2em] text-estruktura-cream/60 font-semibold">
            <a href="#about" className="hover:text-estruktura-gold transition-colors duration-300">Heritage</a>
            <a href="#collection" className="hover:text-estruktura-gold transition-colors duration-300">Collections</a>
            <a href="#contact" className="hover:text-estruktura-gold transition-colors duration-300">Concierge</a>
          </div>

          <div className="text-right">
            <p className="text-[10px] text-estruktura-cream/30 uppercase tracking-[0.3em] font-semibold">&copy; {new Date().getFullYear()} Estruktura.</p>
            <p className="text-[10px] text-estruktura-cream/30 uppercase tracking-[0.3em] font-semibold mt-1">All Rights Strictly Reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

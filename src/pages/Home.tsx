import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Collection from "../components/Collection";
import Craftsmanship from "../components/Craftsmanship";
import Gallery from "../components/Gallery";
import ComingSoon from "../components/ComingSoon";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: '#1C1915' }}>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Collection />
        <Craftsmanship />
        <Gallery />
        <ComingSoon />
        <CTA />
      </main>

      <footer className="bg-[#111009] border-t border-[#D8C3A5]/10 py-14 px-6 lg:px-16">
        <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-0.5 h-4 bg-[#D8C3A5]" />
              <span className="font-serif text-lg text-[#F4F1EA] tracking-[0.2em] uppercase">Estruktura Manila</span>
            </div>
            <p className="text-[#8c7e71] text-xs font-light tracking-wide">Your Premier Carpet Partner.</p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {[
              { name: 'Designs', href: '#designs' },
              { name: 'Products', href: '#products' },
              { name: 'Gallery', href: '#gallery' },
              { name: 'Contact', href: '#contact' },
            ].map(link => (
              <a key={link.name} href={link.href} className="text-[0.65rem] uppercase tracking-[0.2em] text-[#F4F1EA]/40 hover:text-[#D8C3A5] transition-colors duration-300">
                {link.name}
              </a>
            ))}
          </nav>

          <p className="text-[#F4F1EA]/20 text-[0.6rem] uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Estruktura Manila. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

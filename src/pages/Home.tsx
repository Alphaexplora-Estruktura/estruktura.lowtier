import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Collection from "../components/Collection";
import Craftsmanship from "../components/Craftsmanship";
import Gallery from "../components/Gallery";
import OtherProducts from "../components/OtherProducts";
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
        <OtherProducts />
        <CTA />
      </main>

      <footer className="bg-[#111009] border-t border-[#D8C3A5]/10 pt-16 pb-8 px-6 lg:px-16">
        <div className="max-w-[90rem] mx-auto">
          
          {/* Top Section: 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-16">
            
            {/* Column 1: Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-0.5 h-4 bg-[#D8C3A5]" />
                <span className="font-serif text-lg text-[#F4F1EA] tracking-[0.2em] uppercase">Estruktura Manila</span>
              </div>
              <p className="text-[#8c7e71] text-xs font-light tracking-wide">Carpet & Interior Solutions</p>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h4 className="text-[#F4F1EA]/30 text-[0.6rem] uppercase tracking-[0.3em] mb-6">Explore</h4>
              <nav className="flex flex-col gap-4">
                {[
                  { name: 'Designs', href: '#designs' },
                  { name: 'Products', href: '#products' },
                  { name: 'Gallery', href: '#gallery' },
                  { name: 'Contact', href: '#contact' },
                ].map(link => (
                  <a key={link.name} href={link.href} className="text-[0.65rem] uppercase tracking-[0.2em] text-[#F4F1EA]/60 hover:text-[#D8C3A5] transition-colors duration-300 w-fit">
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Column 3: Contact Details */}
            <div>
              <h4 className="text-[#F4F1EA]/30 text-[0.6rem] uppercase tracking-[0.3em] mb-6">Contact Us</h4>
              <div className="flex flex-col gap-4 text-[#8c7e71] text-[0.75rem] font-light tracking-wide">
                <p className="leading-relaxed">
                  6T Bugallon St. Marikina Heights,<br />
                  Marikina City
                </p>
                <p>0968 474 6559</p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:estrukturamanila@gmail.com" className="hover:text-[#D8C3A5] transition-colors duration-300 w-fit">
                    estrukturamanila@gmail.com
                  </a>
                  <a href="mailto:mariegeraldine.deleon@gmail.com" className="hover:text-[#D8C3A5] transition-colors duration-300 w-fit">
                    mariegeraldine.deleon@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Section: Copyright & Credits */}
          <div className="pt-8 border-t border-[#D8C3A5]/10 flex flex-col items-center justify-center gap-3">
            <p className="text-[#F4F1EA]/20 text-[0.8rem] uppercase tracking-[0.3em] text-center">
              &copy; {new Date().getFullYear()} Estruktura Manila. All rights reserved.
            </p>
            <p className="text-[#F4F1EA]/20 text-[0.6rem] uppercase tracking-[0.2em] text-center">
              Powered by{' '}
              <a 
                href="https://alphaexplora.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#8c7e71] hover:text-[#D8C3A5] transition-colors duration-300 font-medium"
              >
                Alphaexplora Information Technology Services
              </a>
            </p>
          </div>

          

        </div>
      </footer>
    </div>
  );
}
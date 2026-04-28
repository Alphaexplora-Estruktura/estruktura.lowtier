import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Collection from "../components/Collection";
import Craftsmanship from "../components/Craftsmanship";
import Gallery from "../components/Gallery";
import OtherProducts from "../components/OtherProducts";
import Services from "../components/Services";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-estruktura-bg text-estruktura-text selection:bg-estruktura-accent/50 selection:text-estruktura-text">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Collection />
        <Craftsmanship />
        <Gallery />
        <OtherProducts />
        <Services />
        <CTA />
      </main>

      <footer className="bg-estruktura-text text-estruktura-cream border-t border-estruktura-accent/20 pt-10 pb-6 px-6 lg:px-16">
        <div className="max-w-[90rem] mx-auto">

          {/* Main Section: Spread Horizontally */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8">

            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-0.5 h-8 bg-estruktura-gold" />
              {/* Added items-start and text-left here */}
              <div className="flex flex-col justify-center items-start text-left">
                <span className="font-serif text-xl text-estruktura-cream tracking-[0.3em] uppercase leading-none whitespace-nowrap">
                  Estruktura Manila
                </span>
                {/* Removed px-2 which was adding horizontal space */}
                <span className="text-estruktura-gold text-[0.6rem] uppercase tracking-[0.25em] mt-2 font-medium py-0.5 rounded-sm w-fit inline-block whitespace-nowrap">
                  Carpet & Interior Solutions
                </span>
              </div>
            </div>

            {/* Contact Details & Socials (Horizontal on Desktop) */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 lg:gap-8 text-estruktura-cream/70 text-[0.7rem] font-light tracking-wide">

              <p>6T Bugallon St. Marikina Heights, Marikina City</p>

              {/* Divider (Hidden on Mobile) */}
              <div className="hidden md:block w-px h-4 bg-estruktura-gold/30" />

              <p>GLOBE: 0917 413 8843</p>

              {/* Divider (Hidden on Mobile) */}
              <div className="hidden md:block w-px h-4 bg-estruktura-gold/30" />

              <p>SMART: 0968 474 6559</p>

              {/* Divider (Hidden on Mobile) */}
              <div className="hidden md:block w-px h-4 bg-estruktura-gold/30" />

              <a href="mailto:estrukturamanila@gmail.com" className="hover:text-estruktura-gold transition-colors duration-300">
                estrukturamanila@gmail.com
              </a>

              {/* Divider (Hidden on Mobile) */}
              <div className="hidden md:block w-px h-4 bg-estruktura-gold/30" />

              {/* Facebook Icon */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-estruktura-gold transition-colors duration-300"
              >
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-[1.15rem] h-[1.15rem]">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

          </div>

          {/* Bottom Section: Copyright & Credits */}
          <div className="pt-6 border-t border-estruktura-accent/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-estruktura-cream/40 text-[0.65rem] uppercase tracking-[0.3em] text-center md:text-left">
              &copy; {new Date().getFullYear()} Estruktura Manila. All rights reserved.
            </p>
            <p className="text-estruktura-cream/40 text-[0.55rem] uppercase tracking-[0.2em] text-center md:text-right">
              Powered by{' '}
              <a
                href="https://alphaexplora.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-estruktura-gold hover:text-estruktura-cream transition-colors duration-300 font-medium"
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
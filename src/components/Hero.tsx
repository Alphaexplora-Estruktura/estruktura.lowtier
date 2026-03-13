import imgBr12 from '../assets/carpets/bedroom-guestroom/br-1.2.jpg';
import imgMs12 from '../assets/carpets/modern-style/ms-1.2.jpg';
import imgEe12 from '../assets/carpets/elegant-european-stle/ee-1.2.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: '#1C1915' }}
    >
      {/* Full-bleed carpet background */}
      <img
        src={imgBr12}
        alt="Estruktura carpet in a room"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.28 }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1C1915]/70 via-[#1C1915]/40 to-[#1C1915]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C1915]/80 via-transparent to-transparent" />

      {/* Content: vertically centered */}
      <div className="relative z-10 flex flex-col justify-center flex-1 max-w-[90rem] mx-auto w-full px-6 lg:px-16 pt-28 pb-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">

          {/* Left column: headline */}
          <div>
            {/* Eyebrow */}
            <div
              className="flex items-center gap-4 mb-7"
              style={{ opacity: 0, animation: 'fadeInUp 0.8s ease-out 0.2s forwards' }}
            >
              <div className="w-8 h-px bg-[#8c7e71]" />
              <span className="text-[#8c7e71] uppercase text-[0.6rem] tracking-[0.35em] font-semibold">
                Manila · Philippines
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-serif text-[#F4F1EA] leading-[1.05] mb-6"
              style={{
                fontSize: 'clamp(3rem, 6vw, 6rem)',
                fontWeight: 400,
                opacity: 0,
                animation: 'fadeInUp 0.9s ease-out 0.4s forwards',
              }}
            >
              Carpets That<br />
              <em className="not-italic" style={{ color: '#D8C3A5' }}>Define a Space.</em>
            </h1>

            {/* Sub */}
            <p
              className="text-[#F4F1EA]/55 font-light mb-10 max-w-md"
              style={{
                fontSize: 'clamp(0.88rem, 1.5vw, 1.05rem)',
                lineHeight: 1.75,
                opacity: 0,
                animation: 'fadeInUp 0.9s ease-out 0.6s forwards',
              }}
            >
              Your premier carpet partner in Manila. Handtufted wool, machine-woven precision, custom designs — for every space.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start gap-4"
              style={{ opacity: 0, animation: 'fadeInUp 0.9s ease-out 0.8s forwards' }}
            >
              <a
                href="#designs"
                className="inline-flex items-center gap-3 px-8 py-4 text-[#1C1915] font-semibold uppercase text-[0.65rem] tracking-[0.25em] transition-all duration-300 hover:scale-[1.02]"
                style={{ background: '#D8C3A5' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#eddfc3')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = '#D8C3A5')}
              >
                See Our Work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 text-[#D8C3A5] font-medium uppercase text-[0.65rem] tracking-[0.25em] border border-[#D8C3A5]/30 hover:border-[#D8C3A5]/70 transition-all duration-300"
              >
                Get a Quote
              </a>
            </div>

            {/* Scroll indicator */}
            <div
              className="mt-14 flex items-center gap-3"
              style={{ opacity: 0, animation: 'fadeInUp 0.9s ease-out 1.1s forwards' }}
            >
              <div className="w-5 h-8 rounded-full border border-[#8c7e71]/40 flex items-start justify-center pt-1.5">
                <div className="w-1 h-2 bg-[#8c7e71]/70 rounded-full" style={{ animation: 'scrollPulse 2s ease-in-out infinite' }} />
              </div>
              <span className="text-[0.6rem] uppercase tracking-[0.3em] text-[#8c7e71]/50">Scroll to explore</span>
            </div>
          </div>

          {/* Right column: three preview carpet cards */}
          <div
            className="hidden lg:grid grid-cols-3 gap-4 items-end"
            style={{ opacity: 0, animation: 'fadeInUp 0.9s ease-out 0.9s forwards' }}
          >
            {[
              { src: imgEe12, label: 'European Elegance', aspect: 'aspect-[3/4]' },
              { src: imgBr12, label: 'Bedroom', aspect: 'aspect-[3/4] mt-12' },
              { src: imgMs12, label: 'Modern Style', aspect: 'aspect-[3/4]' },
            ].map((card, i) => (
              <div key={i} className={`relative overflow-hidden group cursor-pointer ${card.aspect}`}>
                <img
                  src={card.src}
                  alt={card.label}
                  className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1915]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-[#F4F1EA]/80 text-[0.6rem] uppercase tracking-[0.2em] font-light">{card.label}</p>
                </div>
                <div className="absolute inset-0 border border-[#D8C3A5]/0 group-hover:border-[#D8C3A5]/30 transition-all duration-500" />
              </div>
            ))}
            <p className="col-span-3 text-right text-[0.55rem] uppercase tracking-[0.25em] text-[#8c7e71]/50 pt-1">
              Sample Works
            </p>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.3; transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}

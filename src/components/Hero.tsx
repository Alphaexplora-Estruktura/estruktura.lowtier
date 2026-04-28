import imgBr12 from '../assets/carpets/bedroom-guestroom/br-1.2.jpg';
import imgMs12 from '../assets/carpets/modern-style/ms-1.2.jpg';
import imgEe12 from '../assets/carpets/elegant-european-stle/ee-1.2.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-estruktura-bg"
    >
      {/* Full-bleed carpet background */}
      <img
        src={imgBr12}
        alt="Estruktura carpet in a room"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.15 }}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-estruktura-bg/80 via-transparent to-estruktura-bg/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-estruktura-bg/90 via-estruktura-bg/30 to-transparent" />

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
              <div className="w-8 h-px bg-estruktura-text" />
            </div>

            {/* Headline */}
            <h1
              className="font-serif text-estruktura-text leading-[1.05] mb-10"
              style={{
                fontSize: 'clamp(3rem, 6vw, 6rem)',
                fontWeight: 500,
                opacity: 0,
                animation: 'fadeInUp 0.9s ease-out 0.4s forwards',
              }}
            >
              Carpets That<br />
              <em className="not-italic text-estruktura-gold">Define a Space.</em>
            </h1>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start gap-4"
              style={{ opacity: 0, animation: 'fadeInUp 0.9s ease-out 0.8s forwards' }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 text-estruktura-cream font-bold uppercase text-base md:text-[0.65rem] tracking-[0.25em] bg-estruktura-text border border-estruktura-text transition-all duration-300 hover:bg-estruktura-accent hover:text-estruktura-text hover:border-estruktura-accent"
              >
                Get a Quote
              </a>
            </div>

            {/* Scroll indicator */}
            <div
              className="mt-14 flex items-center gap-3"
              style={{ opacity: 0, animation: 'fadeInUp 0.9s ease-out 1.1s forwards' }}
            >
              <div className="w-5 h-8 rounded-full border border-estruktura-text/40 flex items-start justify-center pt-1.5">
                <div className="w-1 h-2 bg-estruktura-text/70 rounded-full" style={{ animation: 'scrollPulse 2s ease-in-out infinite' }} />
              </div>
              <span className="text-sm md:text-[0.6rem] uppercase tracking-[0.3em] text-estruktura-text/70 font-bold">Scroll to explore</span>
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
                <div className="absolute inset-0 bg-gradient-to-t from-estruktura-text/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-estruktura-cream/90 text-sm md:text-[0.6rem] uppercase tracking-[0.2em] font-medium">{card.label}</p>
                </div>
                <div className="absolute inset-0 border border-estruktura-accent/0 group-hover:border-estruktura-accent/80 transition-all duration-500" />
              </div>
            ))}
            <p className="col-span-3 text-right text-sm md:text-[0.55rem] uppercase tracking-[0.25em] text-estruktura-text/60 pt-1 font-semibold">
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
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
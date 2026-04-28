import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function CTA() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="contact" className="bg-estruktura-text relative overflow-hidden">

      {/* Decorative top line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-estruktura-accent/40 to-transparent" />

      {/* Background texture glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-estruktura-accent/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-estruktura-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[75rem] mx-auto px-6 lg:px-16 py-28 lg:py-36">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >

          {/* Left: Message */}
          <div>
            <span className="text-estruktura-gold uppercase text-sm md:text-[0.75rem] tracking-[0.35em] font-bold mb-5 flex items-center gap-3">
              <span className="w-10 h-px bg-estruktura-gold" />
              Let's Create Together
            </span>
            <h2
              className="font-serif text-estruktura-cream leading-tight mt-4 mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500 }}
            >
              Ready to Transform<br />
              <em style={{ color: '#D8C3A5', fontStyle: 'italic', fontWeight: 400 }}>Your Space?</em>
            </h2>
            <p className="text-estruktura-cream/90 font-medium leading-relaxed text-lg md:text-[1.1rem] mb-10 max-w-sm">
              To provide an accurate quotation, a site visit for actual measurement is required. We will bring samples during our visit.
            </p>

            <div className="space-y-4">
              {[
                { icon: '📍', text: 'Manila, Philippines' },
                { icon: '📞', text: 'Available for consultations' },
                { icon: '✉️', text: 'Custom quotes provided' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-estruktura-cream/80 text-base md:text-[1rem]">
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form (Conversational Rewrite) */}
          <div>
            <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="What name should we use?"
                    className="w-full px-5 py-4 bg-estruktura-bg/5 border border-estruktura-cream/10 text-estruktura-cream placeholder:text-estruktura-cream/40 focus:outline-none focus:border-estruktura-accent transition-all font-medium text-base md:text-[0.95rem]"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Where should we email you?"
                    className="w-full px-5 py-4 bg-estruktura-bg/5 border border-estruktura-cream/10 text-estruktura-cream placeholder:text-estruktura-cream/40 focus:outline-none focus:border-estruktura-accent transition-all font-medium text-base md:text-[0.95rem]"
                  />
                </div>
              </div>

              <input
                type="text"
                placeholder="What kind of space are we transforming? (e.g. Hotel Lobby, Bedroom)"
                className="w-full px-5 py-4 bg-estruktura-bg/5 border border-estruktura-cream/10 text-estruktura-cream placeholder:text-estruktura-cream/40 focus:outline-none focus:border-estruktura-accent transition-all font-medium text-base md:text-[0.95rem]"
              />

              <input
                type="text"
                placeholder="When is a good time for us to visit and measure?"
                className="w-full px-5 py-4 bg-estruktura-bg/5 border border-estruktura-cream/10 text-estruktura-cream placeholder:text-estruktura-cream/40 focus:outline-none focus:border-estruktura-accent transition-all font-medium text-base md:text-[0.95rem]"
              />

              <textarea
                rows={4}
                placeholder="Tell us a little bit about your vision or requirements..."
                className="w-full px-5 py-4 bg-estruktura-bg/5 border border-estruktura-cream/10 text-estruktura-cream placeholder:text-estruktura-cream/40 focus:outline-none focus:border-estruktura-accent transition-all font-medium text-base md:text-[0.95rem] resize-none"
              />

              <button
                type="button"
                className="w-full px-8 py-5 bg-estruktura-accent text-estruktura-text font-bold uppercase text-sm md:text-[0.75rem] tracking-[0.3em] hover:bg-estruktura-cream transition-all duration-300 mt-2"
              >
                Request a Site Visit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
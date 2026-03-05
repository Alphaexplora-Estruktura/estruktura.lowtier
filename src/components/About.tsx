
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function About() {
  const [ref1, isVisible1] = useIntersectionObserver({ threshold: 0.2 });
  const [ref2, isVisible2] = useIntersectionObserver({ threshold: 0.2 });
  const [ref3, isVisible3] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" className="py-32 md:py-48 relative bg-estruktura-bg overflow-hidden">

      {/* Smooth gradient transition from Hero's dark background into this section */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#1a0009] to-transparent pointer-events-none z-10" />

      {/* Smooth gradient transition into the Collection section below */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1F0007] to-transparent pointer-events-none z-10" />

      {/* Background Watermark */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-32 z-0 pointer-events-none rotate-90 transform origin-left opacity-10 hidden lg:block">
        <span className="text-[12vw] font-serif text-estruktura-cream whitespace-nowrap tracking-[0.2em] select-none">
          HERITAGE
        </span>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-estruktura-gold/80 to-transparent opacity-40"></div>

      <div className="max-w-[85rem] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Text Content - Problem/Solution */}
          <div ref={ref1} className={`lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 transition-all duration-[1200ms] ease-out ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}>
            <span className="text-estruktura-gold uppercase tracking-[0.3em] text-xs font-semibold mb-6 flex items-center gap-3">
              <span className={`h-[1px] bg-estruktura-gold transition-all duration-1000 delay-500 ${isVisible1 ? 'w-12' : 'w-0'}`}></span>
              The Paradigm
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] text-estruktura-cream mb-10 leading-[1.15] drop-shadow-md">
              True Opulence <br />
              <span className="text-estruktura-cream/50 italic font-serif">Cannot Be</span> <br />
              Mass-Produced.
            </h2>

            <div className="space-y-6 text-estruktura-cream/80 text-lg font-light leading-relaxed tracking-wide">
              <p>
                In an era of infinite, soulless replication, true luxury remains uncompromising. It is hand-tied, knot by agonizing knot.
              </p>
              <p>
                Your sanctuary deserves a foundation built with singular intention, not a machine’s repetition. We don't make carpets; we weave heirlooms sourced from the rarest mountain wools and artisan silks.
              </p>
              <p className="text-estruktura-gold font-medium tracking-widest uppercase text-sm mt-8 border-b border-estruktura-gold/30 pb-2 inline-block">
                Feel the silence. Touch the history.
              </p>
            </div>
          </div>

          {/* Image Grid - Proof of Artisanship - Made much clearer */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-6 relative order-1 lg:order-2">
            {/* Architectural Frame Behind Images */}
            <div className={`absolute -inset-6 border border-estruktura-gold/20 -z-10 transition-all duration-1000 delay-300 ${isVisible2 || isVisible3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-estruktura-accent/10 rounded-full blur-[100px] -z-10" />

            <div ref={ref2} className={`flex flex-col gap-6 translate-y-12 transition-all duration-[1500ms] ease-out delay-200 ${isVisible2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
              <div className="aspect-[3/4] w-full carpet-texture-overlay overflow-hidden shadow-2xl border border-estruktura-gold/30 relative group">
                {/* Removed sepia and heavy blur to make it visible */}
                <img
                  src="https://www.mischioff.com/wp-content/uploads/2023/03/header-unternehmen.jpg"
                  alt="Raw Materials"
                  className={`w-full h-full object-cover transition-all duration-[3s] ease-out group-hover:scale-[1.05] ${isVisible2 ? 'scale-100' : 'scale-110'}`}
                />
              </div>
              <div className="p-6 glass-panel text-center border-l-4 border-l-estruktura-gold/50">
                <p className="text-estruktura-gold font-serif text-3xl mb-1 drop-shadow-sm">450</p>
                <p className="text-xs uppercase tracking-[0.2em] text-estruktura-cream/80">Hours Per Weave</p>
              </div>
            </div>

            <div ref={ref3} className={`flex flex-col gap-6 transition-all duration-[1500ms] ease-out delay-500 ${isVisible3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
              <div className="p-6 glass-panel text-center border-r-4 border-r-estruktura-gold/50">
                <p className="text-estruktura-gold font-serif text-3xl mb-1 drop-shadow-sm">100%</p>
                <p className="text-xs uppercase tracking-[0.2em] text-estruktura-cream/80">Artisan Silk & Wool</p>
              </div>
              <div className="aspect-[4/5] w-full carpet-texture-overlay overflow-hidden shadow-2xl border border-estruktura-gold/30 relative group">
                <img
                  src="https://media.product.which.co.uk/prod/images/ar_2to1_1200x600/a0eddb634aa9-carpet2306885023.webp"
                  alt="Crafting Process"
                  className={`w-full h-full object-cover transition-all duration-[3s] ease-out group-hover:scale-[1.05] ${isVisible3 ? 'scale-100' : 'scale-110'}`}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

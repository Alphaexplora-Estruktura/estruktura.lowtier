import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import imgAta1 from '../assets/carpets/artwork-to-actual-carpet/ata-1.1.jpg';
import imgAta2 from '../assets/carpets/artwork-to-actual-carpet/ata-1.2.jpg';

export default function Craftsmanship() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="craftsmanship" className="bg-estruktura-bg overflow-hidden border-t border-estruktura-accent/20">

            {/* ── Full-width header ── */}
            <div className="py-20 lg:py-28 px-6 lg:px-16 text-center max-w-[90rem] mx-auto">
                <span className="text-estruktura-gold uppercase text-[0.6rem] tracking-[0.35em] font-semibold mb-5 inline-flex items-center gap-3">
                    <span className="w-8 h-px bg-estruktura-gold" />
                    The Process
                    <span className="w-8 h-px bg-estruktura-gold" />
                </span>
                <h2 className="font-serif text-estruktura-text mt-4 leading-tight" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 500 }}>
                    From Concept to Reality.
                </h2>
                <p className="text-estruktura-text/70 font-medium max-w-xl mx-auto mt-4 text-sm leading-relaxed">
                    Machine and Handtufted-Manufactured
                </p>
            </div>

            {/* ── Side-by-side before/after ── */}
            <div
                ref={ref}
                className={`grid grid-cols-1 lg:grid-cols-2 transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                {/* Panel 1: Design / Layout */}
                <div className="group relative min-h-[480px] overflow-hidden">
                    <img
                        src={imgAta1}
                        alt="Carpet concept design"
                        className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-[1.04]"
                        style={{ opacity: 0.85 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-estruktura-text/90 via-estruktura-text/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-10">
                        <div className="w-8 h-px bg-estruktura-accent/60 mb-4" />
                        <span className="text-estruktura-gold text-[0.6rem] uppercase tracking-[0.3em] font-semibold">Step 01</span>
                        <h3 className="font-serif text-estruktura-cream text-3xl mt-2 mb-3">Flexible Craftsmanship</h3>
                        <p className="text-estruktura-cream/80 font-light text-sm leading-relaxed max-w-xs">
                            Every commission starts as a detailed layout. We review dimensions, color palettes, and texture preferences with you.
                        </p>
                    </div>
                </div>

                {/* Panel 2: Actual result */}
                <div className="group relative min-h-[480px] overflow-hidden">
                    <img
                        src={imgAta2}
                        alt="Actual installed carpet"
                        className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-[1.04]"
                        style={{ opacity: 0.85 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-estruktura-text/90 via-estruktura-text/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-10">
                        <div className="w-8 h-px bg-estruktura-accent/60 mb-4" />
                        <span className="text-estruktura-gold text-[0.6rem] uppercase tracking-[0.3em] font-semibold">Step 02</span>
                        <h3 className="font-serif text-estruktura-cream text-3xl mt-2 mb-3">Tailored to You</h3>
                        <p className="text-estruktura-cream/80 font-light text-sm leading-relaxed max-w-xs">
                            Choose your color palette and texture. The result is a carpet made exactly for your space.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Transition teaser ── */}
            <div className="py-10 px-6 lg:px-16 border-t border-estruktura-accent/20">
                <div className="max-w-[90rem] mx-auto flex items-center justify-between">
                    <p className="text-estruktura-text/50 font-bold text-xs uppercase tracking-[0.3em]">See the finished spaces ↓</p>
                    <a href="#gallery" className="text-estruktura-text hover:text-estruktura-gold font-bold text-xs uppercase tracking-[0.3em] transition-colors duration-300">
                        View Gallery →
                    </a>
                </div>
            </div>
        </section>
    );
}

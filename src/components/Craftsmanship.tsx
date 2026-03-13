import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import imgAta1 from '../assets/carpets/artwork-to-actual-carpet/ata-1.1.jpg';
import imgAta2 from '../assets/carpets/artwork-to-actual-carpet/ata-1.2.jpg';

export default function Craftsmanship() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="craftsmanship" className="bg-[#2A2725] overflow-hidden">

            {/* ── Full-width header ── */}
            <div className="py-20 lg:py-28 px-6 lg:px-16 text-center max-w-[90rem] mx-auto">
                <span className="text-[#8c7e71] uppercase text-[0.6rem] tracking-[0.35em] font-semibold mb-5 inline-flex items-center gap-3">
                    <span className="w-8 h-px bg-[#8c7e71]" />
                    The Process
                    <span className="w-8 h-px bg-[#8c7e71]" />
                </span>
                <h2 className="font-serif text-[#F4F1EA] mt-4 leading-tight" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 400 }}>
                    From Concept to Reality.
                </h2>
                <p className="text-[#F4F1EA]/40 font-light max-w-xl mx-auto mt-4 text-sm leading-relaxed">
                    We master both Machine-Manufactured Precision and Handtufted Skills.
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
                        style={{ opacity: 0.75 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1915]/90 via-[#1C1915]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-10">
                        <div className="w-8 h-px bg-[#D8C3A5]/60 mb-4" />
                        <span className="text-[#8c7e71] text-[0.6rem] uppercase tracking-[0.3em] font-semibold">Step 01</span>
                        <h3 className="font-serif text-[#F4F1EA] text-3xl mt-2 mb-3">Flexible Craftsmanship</h3>
                        <p className="text-[#F4F1EA]/60 font-light text-sm leading-relaxed max-w-xs">
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
                        style={{ opacity: 0.75 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1915]/90 via-[#1C1915]/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-10">
                        <div className="w-8 h-px bg-[#D8C3A5]/60 mb-4" />
                        <span className="text-[#8c7e71] text-[0.6rem] uppercase tracking-[0.3em] font-semibold">Step 02</span>
                        <h3 className="font-serif text-[#F4F1EA] text-3xl mt-2 mb-3">Tailored to You</h3>
                        <p className="text-[#F4F1EA]/60 font-light text-sm leading-relaxed max-w-xs">
                            Choose your color palette and texture. The result is a carpet made exactly for your space — no compromises.
                        </p>
                    </div>
                </div>
            </div>

            {/* ── Transition teaser ── */}
            <div className="py-10 px-6 lg:px-16 border-t border-[#F4F1EA]/5">
                <div className="max-w-[90rem] mx-auto flex items-center justify-between">
                    <p className="text-[#F4F1EA]/30 text-xs uppercase tracking-[0.3em]">See the finished spaces ↓</p>
                    <a href="#gallery" className="text-[#D8C3A5] text-xs uppercase tracking-[0.3em] hover:text-[#F4F1EA] transition-colors duration-300">
                        View Gallery →
                    </a>
                </div>
            </div>
        </section>
    );
}

import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// ─── Carpet imports ───────────────────────────────────────────────────────────
import imgBr11 from '../assets/carpets/bedroom-guestroom/br-1.1.jpg';
import imgBr12 from '../assets/carpets/bedroom-guestroom/br-1.2.jpg';
import imgBr21 from '../assets/carpets/bedroom-guestroom/br-2.1.jpg';
import imgBr22 from '../assets/carpets/bedroom-guestroom/br-2.2.jpg';
import imgBr31 from '../assets/carpets/bedroom-guestroom/br-3.1.jpg';
import imgBr32 from '../assets/carpets/bedroom-guestroom/br-3.2.jpg';
import imgCh11 from '../assets/carpets/corridors-hallway/ch-1.1.jpg';
import imgCr12 from '../assets/carpets/corridors-hallway/cr-1.2.jpg';
import imgMs11 from '../assets/carpets/modern-style/ms-1.1.jpg';
import imgMs12 from '../assets/carpets/modern-style/ms-1.2.jpg';
import imgMd11 from '../assets/carpets/modern-design/md-1.1.jpg';
import imgMd12 from '../assets/carpets/modern-design/md-1.2.jpg';

// Single Tile Imports
import imgCt1 from '../assets/carpets/cartpet-tiles/ct-1.jpg';
import imgCt2 from '../assets/carpets/cartpet-tiles/ct-2.jpg';
import imgCt3 from '../assets/carpets/cartpet-tiles/ct-3.jpg';
import imgCt4 from '../assets/carpets/cartpet-tiles/ct-4.jpg';
import imgCt5 from '../assets/carpets/cartpet-tiles/ct-5.jpg';
import imgCt7 from '../assets/carpets/cartpet-tiles/ct-7.jpg';

// ─── Data Refactored into Pairs ───────────────────────────────────────────────
const projectPairs = [
    { artwork: imgBr11, install: imgBr12 },
    { artwork: imgBr21, install: imgBr22 },
    { artwork: imgBr31, install: imgBr32 },
    { artwork: imgCh11, install: imgCr12 },
    { artwork: imgMs11, install: imgMs12 },
    { artwork: imgMd11, install: imgMd12 },
];

const singleTiles = [imgCt1, imgCt2, imgCt3, imgCt4, imgCt5, imgCt7];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Gallery() {
    const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section id="gallery" className="bg-[#F4F1EA] overflow-hidden">
            {/* Header */}
            <div className="py-20 lg:py-24 px-6 lg:px-16 bg-[#F4F1EA]">
                <div
                    ref={headerRef}
                    className={`max-w-[90rem] mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 transition-all duration-[1000ms] ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div>
                        <span className="text-[#8c7e71] uppercase text-[0.6rem] tracking-[0.35em] font-semibold mb-5 flex items-center gap-3">
                            <span className="w-8 h-px bg-[#8c7e71]" />
                            Project Gallery
                        </span>
                        <h2 className="font-serif text-[#2A2725] leading-tight mt-3" style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', fontWeight: 400 }}>
                            From Vision<br />
                            <em style={{ color: '#8c7e71', fontStyle: 'italic', fontWeight: 300 }}>to Installation.</em>
                        </h2>
                    </div>
                </div>
            </div>

            {/* Paired Projects Section - Reduced gap to 2 to match horizontal spacing */}
            <div className="max-w-[90rem] mx-auto px-6 lg:px-16 pb-2 flex flex-col gap-2">
                {projectPairs.map((pair, idx) => (
                    <ProjectComparison key={idx} pair={pair} index={idx} />
                ))}
            </div>

            {/* Single Tiles Section - Increased to 4/6 columns to make tiles smaller */}
            <div className="max-w-[90rem] mx-auto px-6 lg:px-16 pb-20">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    {singleTiles.map((src, idx) => (
                        <SingleCard key={idx} src={src} delay={idx * 70} />
                    ))}
                </div>
            </div>

            {/* Footer CTA */}
            <div className="py-14 px-6 lg:px-16 bg-[#F4F1EA] text-center border-t border-[#8c7e71]/10">
                <p className="font-serif italic text-[#8c7e71] text-lg">
                    "Interested in seeing your space transformed?"
                </p>
                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 mt-6 text-[0.65rem] uppercase tracking-[0.3em] text-[#2A2725] border-b border-[#2A2725]/30 pb-0.5 hover:border-[#2A2725] transition-all duration-300"
                >
                    Let's talk →
                </a>
            </div>
        </section>
    );
}

// ─── Project Comparison Layout (Mobile Responsive Fix) ────────────────────────────
function ProjectComparison({ pair, index }: any) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.15 });

    return (
        <div
            ref={ref}
            // Removed fixed height on mobile (h-auto), kept it for md and lg
            className={`flex flex-col md:flex-row gap-2 h-auto md:h-[300px] lg:h-[400px] transition-all duration-[1000ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
            {/* Artwork Column */}
            <div className="group relative flex-1 overflow-hidden bg-[#2A2725] aspect-[4/3] md:aspect-auto">
                <img
                    src={pair.artwork}
                    alt={`Artwork Design ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-[1.05]"
                    style={{ opacity: 0.85 }}
                />
                <div className="absolute inset-0 bg-[#1C1915]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Install Column */}
            <div className="group relative flex-1 overflow-hidden bg-[#2A2725] aspect-[4/3] md:aspect-auto">
                <img
                    src={pair.install}
                    alt={`Installed Carpet ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-[1.05]"
                    style={{ opacity: 0.9 }}
                />
                <div className="absolute inset-0 bg-[#1C1915]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
        </div>
    );
}

// ─── Single Card for Carpet Tiles ──────────────────────────────────────────────
function SingleCard({ src, delay }: any) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className="group relative aspect-square overflow-hidden bg-[#2A2725] cursor-pointer"
            style={{
                transitionDelay: `${delay}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
        >
            <img
                src={src}
                alt="Carpet Tile"
                className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-[1.06]"
                style={{ opacity: 0.85 }}
            />
            <div className="absolute inset-0 border border-[#D8C3A5]/0 group-hover:border-[#D8C3A5]/30 transition-all duration-500 pointer-events-none" />
        </div>
    );
}
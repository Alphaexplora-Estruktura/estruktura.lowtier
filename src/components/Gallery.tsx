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
import imgCt1 from '../assets/carpets/cartpet-tiles/ct-1.jpg';
import imgCt2 from '../assets/carpets/cartpet-tiles/ct-2.jpg';
import imgCt3 from '../assets/carpets/cartpet-tiles/ct-3.jpg';
import imgCt4 from '../assets/carpets/cartpet-tiles/ct-4.jpg';
import imgCt5 from '../assets/carpets/cartpet-tiles/ct-5.jpg';
import imgCt7 from '../assets/carpets/cartpet-tiles/ct-7.jpg';

// ─── Blinds imports ───────────────────────────────────────────────────────────
import imgBlinds1 from '../assets/blinds/blinds-1.jpg';
import imgBlinds2 from '../assets/blinds/blinds-2.jpg';
import imgBlinds3 from '../assets/blinds/blinds-3.jpg';

// ─── Wallpaper imports ────────────────────────────────────────────────────────
import imgWp1 from '../assets/wallpapers/wp-1.jpg';
import imgWp2 from '../assets/wallpapers/wp-2.jpg';
import imgWp3 from '../assets/wallpapers/wp-3.jpg';
import imgWp4 from '../assets/wallpapers/wp-4.jpg';
import imgWp5 from '../assets/wallpapers/wp-5.jpg';
import imgWp6 from '../assets/wallpapers/wp-6.jpg';
import imgWp7 from '../assets/wallpapers/wp-7.jpg';

// ─── Data ─────────────────────────────────────────────────────────────────────
// label: 'Layout' = design plan | 'Installed' = finished result | '' = general photo
const categories = [
    {
        title: 'Bedroom & Guest Room',
        images: [
            { src: imgBr11, label: 'Layout' },
            { src: imgBr12, label: 'Installed' },
            { src: imgBr21, label: 'Layout' },
            { src: imgBr22, label: 'Installed' },
            { src: imgBr31, label: 'Layout' },
            { src: imgBr32, label: 'Installed' },
        ],
    },
    {
        title: 'Corridors & Hallways',
        images: [
            { src: imgCh11, label: 'Layout' },
            { src: imgCr12, label: 'Installed' },
        ],
    },
    {
        title: 'Modern Interiors',
        images: [
            { src: imgMs11, label: 'Layout' },
            { src: imgMs12, label: 'Installed' },
            { src: imgMd11, label: 'Layout' },
            { src: imgMd12, label: 'Installed' },
        ],
    },
    {
        title: 'Carpet Tiles',
        images: [
            { src: imgCt1, label: '' },
            { src: imgCt2, label: '' },
            { src: imgCt3, label: '' },
            { src: imgCt4, label: '' },
            { src: imgCt5, label: '' },
            { src: imgCt7, label: '' },
        ],
    },
    {
        title: 'Window Blinds',
        images: [
            { src: imgBlinds1, label: '' },
            { src: imgBlinds2, label: '' },
            { src: imgBlinds3, label: '' },
        ],
    },
    {
        title: 'Wallpapers',
        images: [
            { src: imgWp1, label: '' },
            { src: imgWp2, label: '' },
            { src: imgWp3, label: '' },
            { src: imgWp4, label: '' },
            { src: imgWp5, label: '' },
            { src: imgWp6, label: '' },
            { src: imgWp7, label: '' },
        ],
    },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Gallery() {
    const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section id="gallery" className="bg-[#F4F1EA] overflow-hidden">

            {/* ── Header ── */}
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
                    <p className="text-[#5c5048] font-light max-w-xs text-sm leading-relaxed lg:text-right lg:mt-8">
                        Each project showcases our craftsmanship — from design layouts to beautifully finished installations.
                    </p>
                </div>
            </div>

            {/* ── Categories ── */}
            {categories.map((cat, catIdx) => (
                <CategoryBlock key={catIdx} cat={cat} catIdx={catIdx} />
            ))}

            {/* ── Bottom nudge ── */}
            <div className="py-14 px-6 lg:px-16 bg-[#F4F1EA] text-center">
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

// ─── Category block ────────────────────────────────────────────────────────────
function CategoryBlock({
    cat,
    catIdx,
}: {
    cat: { title: string; images: { src: string; label: string }[] };
    catIdx: number;
}) {
    const [roomRef, roomVisible] = useIntersectionObserver({ threshold: 0.05 });

    return (
        <div className="mb-2">
            {/* Category label bar */}
            <div className="bg-[#1C1915] px-6 lg:px-16 py-4">
                <div className="max-w-[90rem] mx-auto flex items-center gap-4">
                    <span className="text-[#8c7e71]/60 text-[0.55rem] uppercase tracking-[0.35em]">
                        {String(catIdx + 1).padStart(2, '0')}
                    </span>
                    <div className="w-4 h-px bg-[#8c7e71]/40" />
                    <span className="text-[#F4F1EA]/70 text-xs uppercase tracking-[0.25em] font-light">{cat.title}</span>
                </div>
            </div>

            {/* Images — flex-wrap so every row fills completely, no orphan cells */}
            <div
                ref={roomRef}
                className={`transition-all duration-[1000ms] ease-out ${roomVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '1px', background: 'rgba(216,195,165,0.2)' }}
            >
                {(() => {
                    const n = cat.images.length;
                    // Find the best column count (largest divisor of n ≤ 4),
                    // but never fall below 2 so the layout stays balanced.
                    let cols = 3; // sensible default
                    for (let c = Math.min(n, 4); c >= 2; c--) {
                        if (n % c === 0) { cols = c; break; }
                    }
                    const pct = `calc(${(100 / cols).toFixed(4)}% - ${((cols - 1) / cols).toFixed(4)}px)`;
                    return cat.images.map((img, imgIdx) => (
                        <GalleryCard
                            key={imgIdx}
                            src={img.src}
                            label={img.label}
                            isInstalled={img.label === 'Installed'}
                            delay={imgIdx * 70}
                            flexBasis={pct}
                        />
                    ));
                })()}
            </div>
        </div>
    );
}

// ─── Individual card ───────────────────────────────────────────────────────────
function GalleryCard({
    src, label, isInstalled, delay, flexBasis,
}: {
    src: string; label: string; isInstalled: boolean; delay: number; flexBasis?: string;
}) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05 });

    return (
        <div
            ref={ref}
            className="group relative aspect-[4/3] overflow-hidden bg-[#2A2725] cursor-pointer"
            style={{
                transitionDelay: `${delay}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                flexBasis: flexBasis ?? '25%',
                flexGrow: 1,
                flexShrink: 0,
            }}
        >
            <img
                src={src}
                alt={label || 'Gallery image'}
                className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-[1.06]"
                style={{ opacity: 0.85 }}
            />
            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1915]/70 via-transparent to-transparent" />

            {/* Label badge — only shown when label exists */}
            {label && (
                <div className={`absolute top-3 left-3 px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.25em] font-semibold backdrop-blur-sm ${isInstalled ? 'bg-[#D8C3A5] text-[#1C1915]' : 'bg-[#1C1915]/70 text-[#D8C3A5] border border-[#D8C3A5]/30'}`}>
                    {label}
                </div>
            )}

            {/* Hover border */}
            <div className="absolute inset-0 border-2 border-[#D8C3A5] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
}

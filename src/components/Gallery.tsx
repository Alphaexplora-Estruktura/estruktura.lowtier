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

// ─── Data ─────────────────────────────────────────────────────────────────────
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
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Gallery() {
    const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section id="gallery" className="bg-[#F4F1EA] overflow-hidden">
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

            {categories.map((cat, catIdx) => (
                <CategoryBlock key={catIdx} cat={cat} catIdx={catIdx} />
            ))}

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

function CategoryBlock({ cat, catIdx }: any) {
    const [roomRef, roomVisible] = useIntersectionObserver({ threshold: 0.05 });

    return (
        <div className="mb-2">
            <div className="bg-[#1C1915] px-6 lg:px-16 py-4">
                <div className="max-w-[90rem] mx-auto flex items-center gap-4">
                    <span className="text-[#8c7e71]/60 text-[0.55rem] uppercase tracking-[0.35em]">
                        {String(catIdx + 1).padStart(2, '0')}
                    </span>
                    <div className="w-4 h-px bg-[#8c7e71]/40" />
                    <span className="text-[#F4F1EA]/70 text-xs uppercase tracking-[0.25em] font-light">{cat.title}</span>
                </div>
            </div>

            <div
                ref={roomRef}
                className={`flex flex-wrap gap-[1px] bg-[rgba(216,195,165,0.2)] transition-all duration-[1000ms] ease-out ${roomVisible ? 'opacity-100' : 'opacity-0'}`}
            >
                {cat.images.map((img: any, imgIdx: number) => (
                    <GalleryCard
                        key={imgIdx}
                        src={img.src}
                        label={img.label}
                        isInstalled={img.label === 'Installed'}
                        delay={imgIdx * 70}
                    />
                ))}
            </div>
        </div>
    );
}

function GalleryCard({ src, label, isInstalled, delay }: any) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.05 });

    return (
        <div
            ref={ref}
            className="group relative flex-grow flex-shrink-0 w-[45%] md:w-[30%] lg:w-[22%] h-[200px] md:h-[250px] lg:h-[300px] overflow-hidden bg-[#2A2725] cursor-pointer"
            style={{
                transitionDelay: `${delay}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
        >
            <img
                src={src}
                alt={label || 'Gallery image'}
                className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-[1.06]"
                style={{ opacity: 0.85 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1915]/70 via-transparent to-transparent" />

            {label && (
                <div className={`absolute top-3 left-3 px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.25em] font-semibold backdrop-blur-sm ${isInstalled ? 'bg-[#D8C3A5] text-[#1C1915]' : 'bg-[#1C1915]/70 text-[#D8C3A5] border border-[#D8C3A5]/30'}`}>
                    {label}
                </div>
            )}
            <div className="absolute inset-0 border-2 border-[#D8C3A5] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
}
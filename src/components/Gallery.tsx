import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
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

// .1 = Layout (design plan), .2 = Installed (final result)
const rooms = [
    {
        room: 'Bedroom / Guest Room',
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
        room: 'Corridors & Hallways',
        images: [
            { src: imgCh11, label: 'Layout' },
            { src: imgCr12, label: 'Installed' },
        ],
    },
    {
        room: 'Modern Interiors',
        images: [
            { src: imgMs11, label: 'Layout' },
            { src: imgMs12, label: 'Installed' },
            { src: imgMd11, label: 'Layout' },
            { src: imgMd12, label: 'Installed' },
        ],
    },
];

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
                        Each project shows the design layout alongside the finished installed carpet.
                    </p>
                </div>
            </div>

            {/* ── Gallery rooms ── */}
            {rooms.map((room, roomIdx) => {
                const [roomRef, roomVisible] = useIntersectionObserver({ threshold: 0.05 });
                return (
                    <div key={roomIdx} className="mb-2">
                        {/* Room label */}
                        <div className="bg-[#1C1915] px-6 lg:px-16 py-4">
                            <div className="max-w-[90rem] mx-auto flex items-center gap-4">
                                <span className="text-[#8c7e71]/60 text-[0.55rem] uppercase tracking-[0.35em]">
                                    {String(roomIdx + 1).padStart(2, '0')}
                                </span>
                                <div className="w-4 h-px bg-[#8c7e71]/40" />
                                <span className="text-[#F4F1EA]/70 text-xs uppercase tracking-[0.25em] font-light">{room.room}</span>
                            </div>
                        </div>

                        {/* Images grid */}
                        <div
                            ref={roomRef}
                            className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[#D8C3A5]/20 transition-all duration-[1000ms] ease-out ${roomVisible ? 'opacity-100' : 'opacity-0'}`}
                        >
                            {room.images.map((img, imgIdx) => (
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
            })}

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

function GalleryCard({
    src, label, isInstalled, delay,
}: {
    src: string; label: string; isInstalled: boolean; delay: number;
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
            }}
        >
            <img
                src={src}
                alt={label}
                className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-[1.06]"
                style={{ opacity: 0.85 }}
            />
            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1915]/70 via-transparent to-transparent" />

            {/* Label badge */}
            <div className={`absolute top-3 left-3 px-2.5 py-1 text-[0.55rem] uppercase tracking-[0.25em] font-semibold backdrop-blur-sm ${isInstalled ? 'bg-[#D8C3A5] text-[#1C1915]' : 'bg-[#1C1915]/70 text-[#D8C3A5] border border-[#D8C3A5]/30'}`}>
                {label}
            </div>

            {/* Hover border */}
            <div className="absolute inset-0 border-2 border-[#D8C3A5] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
}

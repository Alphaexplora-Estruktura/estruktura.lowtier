import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

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

export default function OtherProducts() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    const wallpapers = [imgWp1, imgWp2, imgWp3, imgWp4, imgWp5, imgWp6, imgWp7];
    const blinds = [imgBlinds1, imgBlinds2, imgBlinds3];

    return (
        <section id="more" className="bg-[#2A2725] overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBMNDAgNDAiIHN0cm9rZT0iI0Y0RjFFQSIgc3Ryb2tlLXdpZHRoPSIwLjIiIG9wYWNpdHk9IjAuMDQiLz48L3N2Zz4=')] opacity-40" />

            <div
                ref={ref}
                className={`relative z-10 max-w-[90rem] mx-auto px-6 lg:px-16 py-24 lg:py-32 transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="text-center mb-16">
                    <span className="text-[#8c7e71] uppercase text-[0.6rem] tracking-[0.35em] font-semibold mb-5 inline-flex items-center gap-3 justify-center">
                        <span className="w-8 h-px bg-[#8c7e71]" />
                        Also Available
                        <span className="w-8 h-px bg-[#8c7e71]" />
                    </span>
                    <h2 className="font-serif text-[#F4F1EA] mt-4 leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 400 }}>
                        Complete Your Interior.
                    </h2>
                    <p className="text-[#F4F1EA]/40 font-light max-w-md mx-auto mt-4 text-sm leading-relaxed">
                        Beyond carpets, we are your partner for complete interior flooring and window solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Wallpapers Section */}
                    <div className="flex flex-col gap-4">
                        <div className="border-b border-[#F4F1EA]/10 pb-4 mb-2 flex justify-between items-end">
                            <h3 className="font-serif text-[#F4F1EA] text-2xl">Wallpapers</h3>
                            <span className="text-[#8c7e71] text-[0.6rem] uppercase tracking-[0.25em]">Texture & Pattern</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {wallpapers.map((src, i) => (
                                <div key={i} className="aspect-square overflow-hidden bg-[#1C1915]">
                                    <img src={src} alt={`Wallpaper ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 opacity-80 hover:opacity-100" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Blinds Section */}
                    <div className="flex flex-col gap-4">
                        <div className="border-b border-[#F4F1EA]/10 pb-4 mb-2 flex justify-between items-end">
                            <h3 className="font-serif text-[#F4F1EA] text-2xl">Window Blinds</h3>
                            <span className="text-[#8c7e71] text-[0.6rem] uppercase tracking-[0.25em]">Light Control</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {blinds.map((src, i) => (
                                <div key={i} className={`overflow-hidden bg-[#1C1915] ${i === 2 ? 'sm:col-span-2 aspect-[2/1]' : 'aspect-square'}`}>
                                    <img src={src} alt={`Blinds ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 opacity-80 hover:opacity-100" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <p className="text-center text-[#F4F1EA]/25 text-xs mt-16 tracking-[0.2em] uppercase">
                    Inquire via our contact form for sample viewing
                </p>
            </div>
        </section>
    );
}
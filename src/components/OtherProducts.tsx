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
        <section id="more" className="bg-estruktura-bg overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMCBMNDAgNDAiIHN0cm9rZT0iI0Y0RjFFQSIgc3Ryb2tlLXdpZHRoPSIwLjIiIG9wYWNpdHk9IjAuMDQiLz48L3N2Zz4=')] opacity-20" />

            <div
                ref={ref}
                className={`relative z-10 max-w-[90rem] mx-auto px-6 lg:px-16 py-24 lg:py-32 transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="text-center mb-16 md:mb-20">
                    <span className="text-estruktura-gold uppercase text-[0.75rem] tracking-[0.3em] font-bold mb-5 inline-flex items-center gap-3 justify-center">
                        <span className="w-10 h-px bg-estruktura-gold" />
                        Also Available
                        <span className="w-10 h-px bg-estruktura-gold" />
                    </span>
                    <h2 className="font-serif text-estruktura-text mt-4 leading-tight" style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: 500 }}>
                        Complete Your Interior Floors and Walls.
                    </h2>
                    <p className="text-estruktura-text/80 font-medium max-w-xl mx-auto mt-6 text-[1rem] md:text-[1.1rem] leading-relaxed">
                        Beyond carpets, we are your partner for complete interior flooring, walls, and window solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
                    {/* Wallpapers Section */}
                    <div className="flex flex-col gap-6">
                        <div className="border-b border-estruktura-accent/50 pb-5">
                            {/* Changed to items-baseline for perfect text alignment */}
                            <div className="flex justify-between items-baseline mb-3">
                                <h3 className="font-serif text-estruktura-text text-3xl font-medium">Wallpapers</h3>
                                <span className="text-estruktura-gold text-[0.75rem] uppercase tracking-[0.25em] font-bold">Texture & Pattern</span>
                            </div>
                            {/* Added min-h-[4.5rem] md:min-h-[5rem] to force equal heights */}
                            <p className="text-estruktura-text/80 font-medium text-[1rem] leading-relaxed min-h-[4.5rem] md:min-h-[5rem]">
                                Transform your walls with textures and striking patterns. Creating an inviting accent wall in your living room or adding character to a cozy bedroom.
                            </p>
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
                    <div className="flex flex-col gap-6">
                        <div className="border-b border-estruktura-accent/50 pb-5">
                            {/* Changed to items-baseline for perfect text alignment */}
                            <div className="flex justify-between items-baseline mb-3">
                                <h3 className="font-serif text-estruktura-text text-3xl font-medium">Window Blinds</h3>
                                <span className="text-estruktura-gold text-[0.75rem] uppercase tracking-[0.25em] font-bold">Light Control</span>
                            </div>
                            {/* Added min-h-[4.5rem] md:min-h-[5rem] to force equal heights */}
                            <p className="text-estruktura-text/80 font-medium text-[1rem] leading-relaxed min-h-[4.5rem] md:min-h-[5rem]">
                                Functional designs that let you control natural light with ease. Keeping your home office glare-free or ensuring a restful sleep in the bedroom.
                            </p>
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

                <p className="text-center text-estruktura-text/60 text-[0.85rem] mt-20 tracking-[0.2em] uppercase font-bold">
                    Inquire via our contact form for sample viewing
                </p>
            </div>
        </section>
    );
}
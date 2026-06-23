import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ease = 'cubic-bezier(0.23, 1, 0.32, 1)';

export default function Services() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="services" className="relative bg-[#1C1915] text-[#F4F1EA] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[60vh] lg:min-h-[80vh]">
                
                {/* ── Left Side: Full Bleed Image ── */}
                <div className="relative h-[40vh] sm:h-[50vh] lg:h-auto overflow-hidden">
                    <img 
                        src="/assets/img-3.png" 
                        alt="Wall-to-wall treatment installation cleanup" 
                        className="absolute inset-0 w-full h-full object-cover" 
                    />
                    {/* Subtle vignette/overlay so it blends nicely */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1915]/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                </div>

                {/* ── Right Side: Content Area ── */}
                <div className="flex flex-col justify-center p-8 sm:p-16 lg:p-20 xl:p-28">
                    <div 
                        ref={ref}
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'none' : 'translateY(22px)',
                            transition: `opacity 800ms ${ease}, transform 800ms ${ease}`,
                        }}
                    >
                        {/* Main Service Info */}
                        <div>
                            <span className="text-[#D8C3A5] uppercase text-[0.65rem] tracking-[0.38em] font-semibold mb-6 flex items-center gap-4">
                                <span className="w-10 h-px bg-[#D8C3A5]/60" />
                                Cleaning Services
                            </span>
                            <h3 className="font-serif mb-8 leading-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 400 }}>
                                Deep Carpet<br />
                                <em style={{ color: '#D8C3A5', fontStyle: 'italic', fontWeight: 300 }}>Cleaning.</em>
                            </h3>
                            <p className="text-[#F4F1EA]/80 text-lg md:text-xl font-light leading-relaxed max-w-[44ch]">
                                Keep your carpets looking brand new and smelling fresh with our deep steam-cleaning service, made specifically for wall-to-wall carpets.
                            </p>
                        </div>
                        
                        {/* Disclaimer / Note block */}
                        <div className="pt-8 border-t border-[#D8C3A5]/15 mt-12">
                            <span className="text-[#D8C3A5] text-[0.65rem] uppercase tracking-[0.22em] font-semibold block mb-3">
                                Please Note
                            </span>
                            <p className="text-[#F4F1EA]/50 text-base md:text-lg font-light leading-relaxed max-w-[44ch]">
                                Our cleaning service is only for wall-to-wall or fully installed carpets. We do not accept loose area rugs or small standalone mats.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
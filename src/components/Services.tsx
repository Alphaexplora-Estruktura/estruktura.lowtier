import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Services() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section id="services" className="relative bg-[#F4F1EA] overflow-hidden">
            {/* Elegant Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D8C3A5]/30 via-[#F4F1EA] to-[#F4F1EA] pointer-events-none" />

            <div
                ref={ref}
                className={`relative z-10 max-w-[90rem] mx-auto px-6 lg:px-16 py-[clamp(4rem,10vw,7rem)] transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left Side: Headline */}
                    <div className="flex-1 text-center md:text-left">
                        <span className="text-[#8c7e71] uppercase text-sm md:text-[0.65rem] tracking-[0.35em] font-bold mb-4 inline-flex items-center gap-3">
                            <span className="hidden md:block w-8 h-px bg-[#8c7e71]" />
                            Our Services
                        </span>
                        <h2 className="font-serif text-[#1C1915] leading-tight" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 500 }}>
                            Carpet Cleaning <br className="hidden md:block" />
                            <em style={{ color: '#8c7e71', fontStyle: 'italic', fontWeight: 300 }}>Solutions.</em>
                        </h2>
                        <p className="text-[#5c5048] mt-6 text-lg md:text-[1rem] leading-relaxed max-w-md mx-auto md:mx-0">
                            Maintain the pristine condition of your investment with our professional deep-cleaning solutions, tailored specifically for your installed flooring.
                        </p>
                    </div>

                    {/* Right Side: The Highlighted Service Card */}
                    <div className="flex-1 w-full max-w-lg">
                        <div className="bg-white rounded-2xl shadow-lg shadow-[#D8C3A5]/10 border border-[#D8C3A5]/40 p-[clamp(1.5rem,4vw,2.5rem)] relative overflow-hidden group">

                            {/* Accent highlight bar */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#D8C3A5]" />

                            <h3 className="font-serif text-[#1C1915] text-2xl mb-4">
                                Steam Extract Cleaning
                            </h3>
                            <p className="text-[#1C1915] font-medium text-base md:text-[0.95rem] leading-relaxed tracking-wide">
                                Specialized deep-cleaning process exclusively for <strong className="font-bold text-[#8c7e71]">installed carpets</strong>.
                            </p>

                            <div className="mt-8 pt-6 border-t border-[#F4F1EA]">
                                <span className="inline-flex items-center gap-2 text-[#8c7e71] text-sm md:text-[0.7rem] uppercase tracking-[0.2em] font-bold">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#D8C3A5]">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    Please Note
                                </span>
                                <p className="text-[#5c5048] text-base md:text-sm mt-2 font-light">
                                    We do not provide cleaning services for standalone area rugs.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
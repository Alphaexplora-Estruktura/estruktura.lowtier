import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ease = 'cubic-bezier(0.23, 1, 0.32, 1)';

export default function Services() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <section id="services" className="relative bg-[#F4F1EA] overflow-hidden py-[clamp(4rem,10vw,8rem)]">
            <div className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-16">
                
                <div 
                    ref={ref}
                    className="max-w-4xl mx-auto bg-[#1C1915] text-[#F4F1EA] rounded-2xl flex flex-col overflow-hidden shadow-xl shadow-[#1C1915]/10"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'none' : 'translateY(22px) scale(0.98)',
                        transition: `opacity 700ms ${ease}, transform 700ms ${ease}`,
                    }}
                >
                    {/* Fixed 16:10 Standard Aspect Display Frame Block */}
                    <div className="w-full aspect-[21/9] sm:aspect-[16/6] bg-[#171513] relative overflow-hidden border-b border-[#D8C3A5]/10 shadow-inner">
                        <img src="/assets/img-3.png" alt="Wall-to-wall treatment installation cleanup" className="w-full h-full object-cover blur-[0.2px] opacity-95" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1915] via-transparent to-transparent" />
                    </div>

                    <div className="p-8 sm:p-12 pt-10 flex-1 flex flex-col justify-between">
                        <div>
                            <span className="text-[#D8C3A5] uppercase text-[0.6rem] tracking-[0.38em] font-semibold mb-5 block">
                                Cleaning Services
                            </span>
                            <h3 className="font-serif mb-6 leading-tight" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 400 }}>
                                Deep Carpet<br />Cleaning.
                            </h3>
                            <p className="text-[#F4F1EA]/75 text-lg font-light leading-relaxed max-w-[44ch]">
                                Keep your carpets looking brand new and smelling fresh with our deep steam-cleaning service, made specifically for wall-to-wall carpets.
                            </p>
                        </div>
                        <div className="pt-8 border-t border-[#D8C3A5]/15 mt-12">
                            <span className="text-[#D8C3A5] text-[0.6rem] uppercase tracking-[0.22em] font-semibold block mb-2">
                                Please Note
                            </span>
                            <p className="text-[#F4F1EA]/60 text-lg font-light leading-relaxed">
                                Our cleaning service is only for wall-to-wall or fully installed carpets. We do not accept loose area rugs or small standalone mats.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
} 
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function ComingSoon() {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

    const categories = [
        {
            title: 'Wallpapers',
            icon: '🖼️',
            tagline: 'Transform walls with texture and pattern.',
            note: 'Collection launching soon',
        },
        {
            title: 'Blinds',
            icon: '🪟',
            tagline: 'Light control, elegantly designed.',
            note: 'Samples available on request',
        },
    ];

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            className="group relative border border-[#F4F1EA]/10 p-10 hover:border-[#D8C3A5]/40 transition-all duration-500 cursor-default overflow-hidden"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {/* Background blur */}
                            <div className="absolute inset-0 bg-[#F4F1EA]/0 group-hover:bg-[#F4F1EA]/[0.02] transition-all duration-500" />

                            <div className="relative z-10">
                                <div className="text-4xl mb-6">{cat.icon}</div>
                                <h3 className="font-serif text-[#F4F1EA] text-2xl mb-2">{cat.title}</h3>
                                <p className="text-[#F4F1EA]/50 font-light text-sm mb-6">{cat.tagline}</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-[#8c7e71] animate-pulse" />
                                    <span className="text-[#8c7e71] text-[0.6rem] uppercase tracking-[0.25em]">{cat.note}</span>
                                </div>
                            </div>

                            {/* Corner accent */}
                            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#D8C3A5]/20 group-hover:border-[#D8C3A5]/50 transition-all duration-500" />
                        </div>
                    ))}
                </div>

                <p className="text-center text-[#F4F1EA]/25 text-xs mt-10 tracking-[0.2em] uppercase">
                    Inquire via our contact form for availability
                </p>
            </div>
        </section>
    );
}

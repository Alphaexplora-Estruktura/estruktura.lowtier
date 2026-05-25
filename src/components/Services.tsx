import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ease = 'cubic-bezier(0.23, 1, 0.32, 1)';

const mats = [
    {
        num: '01',
        name: 'Standard Type',
        code: 'DJ-A',
        image: '/assets/img-4.png',
        desc: 'Widely used in hotels, shopping malls, office buildings, and airports. Effectively scrapes and absorbs dust with strong stain resistance — easy to maintain and clean. Anti-skid rubber base keeps the mat firmly in place to protect indoor and outdoor floors.',
    },
    {
        num: '02',
        name: 'Slim Type',
        code: 'DJ-C',
        image: '/assets/img-5.png',
        profiles: ['/assets/DJ-C1.png', '/assets/DJ-C2.png'],
        desc: 'Ideal for commercial entrances in hospitals, apartments, and retail establishments. Superior anti-fouling and dedusting performance. Weather and tensile resistant with a rubber base that stays close to the ground, preventing slipping.',
    },
    {
        num: '03',
        name: 'Flexible Type',
        code: 'DJ-S',
        image: '/assets/img-7.png',
        desc: 'Built for flexible installation across various business environments and high traffic areas. Excellent weather and skid resistance with a rubber base that protects indoor and outdoor floors from wear and daily use.',
    },
];

const nylonFeatures = [
    { num: '01', title: 'Anti-Fouling & Dedusting', desc: 'Powerfully scrapes and absorbs dust with strong stain resistance — easy to maintain and repeatedly washed.' },
    { num: '02', title: 'Weather & Skid Resistance', desc: 'Anti-skid rubber base stays close to the ground, preventing slipping and protecting floors from wear.' },
    { num: '03', title: 'Bright & Clear Colors', desc: 'Vibrant, fade-resistant colors that hold up across years of daily use.' },
    { num: '04', title: 'Custom Sizes', desc: 'Available in large roll widths to fit your exact entrance or indoor area.' },
];

const logoShowcase = [
    { path: '/assets/img-1.png', label: 'Le Nouvel Homme Custom Layout' },
    { path: '/assets/img-2.png', label: 'Mi Hotel Tokyo Branding' },
    { path: '/assets/img-3.png', label: 'Ramada Resort Entrance Accent' },
];

const swatches = [
    { path: '/assets/M4000-carpet.png', label: 'M4000 Series' },
    { path: '/assets/pineapple-pattern-carpet.png', label: 'Pineapple Texture' },
    { path: '/assets/three-stripes-carpet.png', label: 'Three Stripes Pattern' },
];

const specialtyCarpets = [
    { name: 'Everyday Office Carpets', desc: 'Tough, everyday carpets with a waterproof bottom. Comes in ribbed or square patterns, great for busy hallways and offices.' },
    { name: 'Bath & Pool Mats', desc: 'Water-friendly plastic tiles that prevent slipping. Perfect for locker rooms, pools, and wet areas.' },
    { name: 'Outdoor Scraping Mats', desc: 'Purely scraping mats with no fabric. Best for outdoor use to scrape off heavy mud before stepping inside.' },
];

function reveal(visible: boolean, delay = 0) {
    return {
        style: {
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(22px) scale(0.98)',
            transition: `opacity 700ms ${ease}, transform 700ms ${ease}`,
            transitionDelay: visible ? `${delay}ms` : '0ms',
        },
    };
}

export default function Services() {
    const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [aluminumRef, aluminumVisible] = useIntersectionObserver({ threshold: 0.05 });
    const [nylonRef, nylonVisible] = useIntersectionObserver({ threshold: 0.05 });
    const [commercialRef, commercialVisible] = useIntersectionObserver({ threshold: 0.05 });

    return (
        <section id="services" className="relative bg-[#F4F1EA] overflow-hidden">
            <div className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-16 py-[clamp(5rem,12vw,8rem)]">

                {/* ── HERO ── */}
                <div ref={heroRef} className="mb-[clamp(5rem,14vw,10rem)]" {...reveal(heroVisible)}>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-20 items-end">
                        <div>
                            <span className="text-[#8c7e71] uppercase text-[0.6rem] tracking-[0.38em] font-semibold inline-flex items-center gap-3 mb-7">
                                <span className="w-12 h-px bg-[#8c7e71]" />
                                Our Complete Range
                            </span>
                            <h2 className="font-serif text-[#1C1915] leading-[0.9] text-[clamp(3.5rem,7.5vw,6.5rem)] font-normal">
                                Quality<br />
                                <em style={{ color: '#8c7e71', fontStyle: 'italic', fontWeight: 300 }}>Flooring</em><br />
                                Options.
                            </h2>
                        </div>
                        <div className="lg:pb-2 flex flex-col gap-8">
                            <p className="text-[#5c5048] text-lg font-light leading-relaxed max-w-[52ch]">
                                From heavy-duty aluminum entrance mats to custom printed carpets — durable and reliable flooring solutions for any environment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── SECTION 1: ALUMINUM ENTRANCE MATS ── */}
                <div ref={aluminumRef} className="mb-[clamp(5rem,14vw,10rem)]">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-[clamp(2.5rem,7vw,4.5rem)]" {...reveal(aluminumVisible)}>
                        <span className="text-[#8c7e71] uppercase text-[0.6rem] tracking-[0.38em] font-semibold inline-flex items-center gap-3 shrink-0">
                            <span className="w-8 h-px bg-[#8c7e71]" />
                            Aluminum Systems
                        </span>
                        <div className="hidden sm:block flex-1 h-px bg-[#D8C3A5]/40" />
                        <h3 className="font-serif text-[#1C1915] shrink-0" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 400 }}>
                            Entrance <em style={{ color: '#8c7e71', fontStyle: 'italic', fontWeight: 300 }}>Mats</em>
                        </h3>
                    </div>

                    <div className="border-t border-[#D8C3A5]/40">
                        {mats.map((mat, i) => (
                            <div
                                key={mat.num}
                                className="group border-b border-[#D8C3A5]/40 py-10 lg:py-14
                                    grid grid-cols-1 lg:grid-cols-[6rem_18rem_1fr_22rem] gap-x-12 gap-y-8
                                    cursor-default items-start"
                                style={{
                                    ...reveal(aluminumVisible).style,
                                    transitionDelay: aluminumVisible ? `${i * 85}ms` : '0ms',
                                }}
                            >
                                {/* Large Numbering Frame */}
                                <span className="font-serif text-[#D8C3A5] leading-none select-none text-[clamp(3.5rem,5vw,5rem)] font-medium">
                                    {mat.num}
                                </span>

                                {/* Header & Profile Schematic Blocks */}
                                <div>
                                    <h4 className="font-serif text-[#1C1915] text-2xl mb-2 font-normal group-hover:text-[#8c7e71] transition-colors duration-200">
                                        {mat.name}
                                    </h4>
                                    <span className="text-[#8c7e71] text-xs uppercase tracking-[0.2em] font-semibold">{mat.code}</span>
                                    
                                    {/* Standard Size Blueprint Cross Sections */}
                                    {mat.profiles && (
                                        <div className="flex gap-3 mt-6">
                                            {mat.profiles.map((prof, idx) => (
                                                <div key={idx} className="w-28 aspect-[16/10] bg-white border border-[#D8C3A5]/40 p-1.5 rounded-sm shadow-sm">
                                                    <img src={prof} alt="Profile Cross-Section diagram Spec" className="w-full h-full object-contain" />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Text content block */}
                                <p className="text-[#5c5048] text-lg font-light leading-relaxed max-w-[52ch] pt-1">
                                    {mat.desc}
                                </p>

                                {/* Standardized high-visibility aspect container box */}
                                <div className="w-full aspect-[16/10] rounded-sm overflow-hidden border border-[#D8C3A5]/30 bg-[#1C1915]/5 shadow-sm">
                                    <img 
                                        src={mat.image} 
                                        alt={`${mat.name} Site Reference`} 
                                        className="w-full h-full object-cover blur-[0.2px] group-hover:scale-[1.02] transition-transform duration-500 ease-out" 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── SECTION 2: NYLON PRINTING CARPETS ── */}
                <div ref={nylonRef} className="mb-[clamp(5rem,14vw,10rem)]" {...reveal(nylonVisible)}>
                    <div className="bg-[#1C1915] rounded-2xl overflow-hidden shadow-xl shadow-[#1C1915]/10">
                        <div className="px-6 sm:px-10 lg:px-16 pt-14 pb-12 border-b border-[#D8C3A5]/10
                            grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-end">
                            <div>
                                <span className="text-[#D8C3A5] uppercase text-[0.6rem] tracking-[0.38em] font-semibold inline-flex items-center gap-3 mb-7">
                                    <span className="w-8 h-px bg-[#D8C3A5]" />
                                    Custom Designs
                                </span>
                                <h3 className="font-serif text-[#F4F1EA] leading-[0.9]" style={{ fontSize: 'clamp(2.75rem, 5vw, 4.5rem)', fontWeight: 400 }}>
                                    Printed Logo<br />
                                    <em style={{ color: '#D8C3A5', fontStyle: 'italic', fontWeight: 300 }}>Carpets.</em>
                                </h3>
                            </div>
                            <div className="flex flex-col gap-8 lg:pb-1">
                                <p className="text-[#F4F1EA]/75 text-lg font-light leading-relaxed max-w-[52ch]">
                                    Widely used in hotels, shopping malls, office buildings, airports, apartments, and all kinds of entrances and indoor areas. Effectively collects and absorbs dust — built to last in high traffic environments.
                                </p>
                            </div>
                        </div>

                        {/* Overhauled Standard Grid Size Showcase Gallery */}
                        <div className="px-6 sm:px-10 lg:px-16 py-12 bg-[#171513] border-b border-[#D8C3A5]/10">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {logoShowcase.map((logo, idx) => (
                                    <div key={idx} className="group/gallery relative aspect-[16/10] overflow-hidden rounded-sm border border-[#D8C3A5]/15 bg-stone-900 shadow-md">
                                        <img 
                                            src={logo.path} 
                                            alt={logo.label} 
                                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/gallery:scale-103" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-5">
                                            <span className="text-[#F4F1EA] text-sm font-light tracking-wide">{logo.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="divide-y divide-[#D8C3A5]/10">
                            {nylonFeatures.map((f, i) => (
                                <div
                                    key={f.num}
                                    className="px-6 sm:px-10 lg:px-16 py-8
                                        grid grid-cols-[3rem_1fr] lg:grid-cols-[3rem_240px_1fr] gap-x-6 lg:gap-x-12 items-start"
                                    style={{
                                        ...reveal(nylonVisible).style,
                                        transitionDelay: nylonVisible ? `${180 + i * 65}ms` : '0ms',
                                    }}
                                >
                                    <span className="text-[#D8C3A5]/35 text-[0.6rem] uppercase tracking-[0.3em] font-bold pt-1">{f.num}</span>
                                    <h4 className="font-serif text-[#F4F1EA] text-2xl leading-snug">{f.title}</h4>
                                    <p className="text-[#F4F1EA]/65 text-lg font-light leading-relaxed hidden lg:block">{f.desc}</p>
                                    <p className="lg:hidden text-[#F4F1EA]/65 text-base font-light leading-relaxed col-start-2 mt-2">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── SECTION 3: SPECIALTY MATS & CLEANING ── */}
                <div ref={commercialRef} {...reveal(commercialVisible)}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                        {/* Specialty Options Column Layout */}
                        <div>
                            <span className="text-[#8c7e71] uppercase text-[0.6rem] tracking-[0.38em] font-semibold mb-5 inline-flex items-center gap-3">
                                <span className="w-8 h-px bg-[#8c7e71]" />
                                Specialty Options
                            </span>
                            <h3 className="font-serif text-[#1C1915] leading-tight mb-10" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 400 }}>
                                Specialty <em style={{ color: '#8c7e71', fontStyle: 'italic', fontWeight: 300 }}>Carpets.</em>
                            </h3>

                            <div className="border-t border-[#D8C3A5]/40 mb-10">
                                {specialtyCarpets.map((item, i) => (
                                    <div
                                        key={i}
                                        className="group border-b border-[#D8C3A5]/40 py-7 cursor-default"
                                        style={{
                                            transition: `background-color 220ms ease`,
                                            opacity: commercialVisible ? 1 : 0,
                                            transitionDelay: commercialVisible ? `${i * 60}ms` : '0ms',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(216,195,165,0.04)'; }}
                                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; }}
                                    >
                                        <h4 className="font-serif text-[#1C1915] text-2xl mb-2 group-hover:text-[#8c7e71]" style={{ transition: `color 200ms ${ease}` }}>
                                            {item.name}
                                        </h4>
                                        <p className="text-[#5c5048] text-lg font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Standardized Swatch Sizes Layout */}
                            <div className="grid grid-cols-3 gap-4 pt-2">
                                {swatches.map((swatch, idx) => (
                                    <div key={idx} className="flex flex-col gap-2.5 group/swatch">
                                        <div className="aspect-[4/3] w-full rounded-sm overflow-hidden border border-[#D8C3A5]/40 bg-white p-1.5 shadow-sm">
                                            <img src={swatch.path} alt={swatch.label} className="w-full h-full object-cover group-hover/swatch:scale-[1.03] transition-transform duration-300" />
                                        </div>
                                        <span className="text-[#8c7e71] text-[0.6rem] uppercase tracking-wider font-bold text-center">{swatch.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Professional Deep Cleaning System Container Card */}
                        <div className="bg-[#1C1915] text-[#F4F1EA] rounded-2xl flex flex-col justify-between overflow-hidden shadow-xl shadow-[#1C1915]/10 h-full">
                            {/* Fixed 16:10 Standard Aspect Display Frame Block */}
                            <div className="w-full aspect-[16/10] bg-[#171513] relative overflow-hidden border-b border-[#D8C3A5]/10 shadow-inner">
                                <img src="/assets/img-6.png" alt="Wall-to-wall treatment installation cleanup" className="w-full h-full object-cover blur-[0.2px] opacity-95" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1915] via-transparent to-transparent" />
                            </div>

                            <div className="p-8 sm:p-12 pt-8 flex-1 flex flex-col justify-between">
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
                </div>

            </div>
        </section>
    );
} 
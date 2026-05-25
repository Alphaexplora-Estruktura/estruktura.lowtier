import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ease = 'cubic-bezier(0.23, 1, 0.32, 1)';

const mats = [
    {
        num: '01',
        name: 'Standard Type',
        code: 'DJ-A',
        desc: 'Widely used in hotels, shopping malls, office buildings, and airports. Effectively scrapes and absorbs dust with strong stain resistance — easy to maintain and clean. Anti-skid rubber base keeps the mat firmly in place to protect indoor and outdoor floors.',
    },
    {
        num: '02',
        name: 'Slim Type',
        code: 'DJ-C',
        desc: 'Ideal for commercial entrances in hospitals, apartments, and retail establishments. Superior anti-fouling and dedusting performance. Weather and tensile resistant with a rubber base that stays close to the ground, preventing slipping.',
    },
    {
        num: '03',
        name: 'Flexible Type',
        code: 'DJ-S',
        desc: 'Built for flexible installation across various business environments and high traffic areas. Excellent weather and skid resistance with a rubber base that protects indoor and outdoor floors from wear and daily use.',
    },
];

const nylonFeatures = [
    { num: '01', title: 'Anti-Fouling & Dedusting', desc: 'Powerfully scrapes and absorbs dust with strong stain resistance — easy to maintain and repeatedly washed.' },
    { num: '02', title: 'Weather & Skid Resistance', desc: 'Anti-skid rubber base stays close to the ground, preventing slipping and protecting floors from wear.' },
    { num: '03', title: 'Bright & Clear Colors', desc: 'Vibrant, fade-resistant colors that hold up across years of daily use.' },
    { num: '04', title: 'Custom Sizes', desc: 'Available in large roll widths to fit your exact entrance or indoor area.' },
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
            transform: visible ? 'none' : 'translateY(22px) scale(0.97)',
            transition: `opacity 700ms ${ease}, transform 700ms ${ease}`,
            transitionDelay: visible ? `${delay}ms` : '0ms',
        },
    };
}

export default function Services() {
    const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [aluminumRef, aluminumVisible] = useIntersectionObserver({ threshold: 0.08 });
    const [nylonRef, nylonVisible] = useIntersectionObserver({ threshold: 0.08 });
    const [commercialRef, commercialVisible] = useIntersectionObserver({ threshold: 0.08 });

    return (
        <section id="services" className="relative bg-[#F4F1EA] overflow-hidden">
            <div className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-16 py-[clamp(5rem,12vw,8rem)]">

                {/* ── HERO — Left-aligned asymmetric ── */}
                <div
                    ref={heroRef}
                    className="mb-[clamp(5rem,14vw,10rem)]"
                    {...reveal(heroVisible)}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-20 items-end">
                        {/* Left: big editorial headline */}
                        <div>
                            <span className="text-[#8c7e71] uppercase text-[0.6rem] tracking-[0.38em] font-semibold inline-flex items-center gap-3 mb-7">
                                <span className="w-12 h-px bg-[#8c7e71]" />
                                Our Complete Range
                            </span>
                            <h2
                                className="font-serif text-[#1C1915] leading-[0.9]"
                                style={{ fontSize: 'clamp(3.5rem, 7.5vw, 6.5rem)', fontWeight: 400 }}
                            >
                                Quality<br />
                                <em style={{ color: '#8c7e71', fontStyle: 'italic', fontWeight: 300 }}>Flooring</em><br />
                                Options.
                            </h2>
                        </div>
                        <p className="text-[#5c5048] max-w-sm text-base md:text-[0.9rem] font-light leading-relaxed">
                            Tough and durable aluminum mats built for heavy foot traffic, perfect for keeping dirt and moisture out of your building.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                        {/* DJ-A Type */}
                        <div className="group bg-white rounded-xl border border-[#D8C3A5]/40 p-8 lg:p-10 hover:bg-[#1C1915] transition-colors duration-500 flex flex-col justify-between relative overflow-hidden">
                            <span className="absolute -top-6 -right-4 text-[#F4F1EA] text-[8rem] font-serif font-bold group-hover:text-[#2A2725] transition-colors duration-500 select-none">01</span>
                            <div className="relative z-10 mb-16">
                                <h4 className="font-serif text-[#1C1915] text-xl mb-4 group-hover:text-[#D8C3A5] transition-colors">Standard Type (DJ-A)</h4>
                                <p className="text-[#5c5048] text-base md:text-[0.78rem] font-light leading-relaxed group-hover:text-[#F4F1EA]/70 transition-colors">
                                    Our most popular heavy-duty mat. Comes in different metal thicknesses to handle various levels of everyday foot traffic.
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
                            <div className="relative z-10 pt-6 border-t border-[#D8C3A5]/30 space-y-3 group-hover:border-[#D8C3A5]/20 transition-colors">
                                <p className="text-[#1C1915] group-hover:text-[#F4F1EA] text-sm md:text-[0.7rem] font-medium"><strong className="text-[#8c7e71]">Surface Options:</strong> Carpet, Nylon Brush, or Rubber</p>
                                <p className="text-[#1C1915] group-hover:text-[#F4F1EA] text-sm md:text-[0.7rem] font-medium"><strong className="text-[#8c7e71]">Metal Thickness:</strong> 0.8mm up to 2.0mm</p>
                            </div>
                        </div>

                        {/* DJ-C Type */}
                        <div className="group bg-white rounded-xl border border-[#D8C3A5]/40 p-8 lg:p-10 hover:bg-[#1C1915] transition-colors duration-500 flex flex-col justify-between relative overflow-hidden">
                            <span className="absolute -top-6 -right-4 text-[#F4F1EA] text-[8rem] font-serif font-bold group-hover:text-[#2A2725] transition-colors duration-500 select-none">02</span>
                            <div className="relative z-10 mb-16">
                                <h4 className="font-serif text-[#1C1915] text-xl mb-4 group-hover:text-[#D8C3A5] transition-colors">Slim Type (DJ-C)</h4>
                                <p className="text-[#5c5048] text-base md:text-[0.78rem] font-light leading-relaxed group-hover:text-[#F4F1EA]/70 transition-colors">
                                    A thinner design that easily fits into shallow floor spaces without sacrificing strength and durability.
                                </p>
                            </div>
                            <div className="relative z-10 pt-6 border-t border-[#D8C3A5]/30 space-y-3 group-hover:border-[#D8C3A5]/20 transition-colors">
                                <p className="text-[#1C1915] group-hover:text-[#F4F1EA] text-sm md:text-[0.7rem] font-medium"><strong className="text-[#8c7e71]">Best For:</strong> Shallow floor recesses</p>
                                <p className="text-[#1C1915] group-hover:text-[#F4F1EA] text-sm md:text-[0.7rem] font-medium"><strong className="text-[#8c7e71]">Total Height:</strong> Only 10mm</p>
                            </div>
                        </div>

                        {/* DJ-S Type */}
                        <div className="group bg-white rounded-xl border border-[#D8C3A5]/40 p-8 lg:p-10 hover:bg-[#1C1915] transition-colors duration-500 flex flex-col justify-between relative overflow-hidden">
                            <span className="absolute -top-6 -right-4 text-[#F4F1EA] text-[8rem] font-serif font-bold group-hover:text-[#2A2725] transition-colors duration-500 select-none">03</span>
                            <div className="relative z-10 mb-16">
                                <h4 className="font-serif text-[#1C1915] text-xl mb-4 group-hover:text-[#D8C3A5] transition-colors">Flexible Type (DJ-S)</h4>
                                <p className="text-[#5c5048] text-base md:text-[0.78rem] font-light leading-relaxed group-hover:text-[#F4F1EA]/70 transition-colors">
                                    Extra-strong aluminum strips connected by flexible rubber hinges. Rolls up easily for cleaning the floor underneath.
                                </p>
                            </div>
                            <div className="relative z-10 pt-6 border-t border-[#D8C3A5]/30 space-y-3 group-hover:border-[#D8C3A5]/20 transition-colors">
                                <p className="text-[#1C1915] group-hover:text-[#F4F1EA] text-sm md:text-[0.7rem] font-medium"><strong className="text-[#8c7e71]">Connection:</strong> Flexible rubber strips</p>
                                <p className="text-[#1C1915] group-hover:text-[#F4F1EA] text-sm md:text-[0.7rem] font-medium"><strong className="text-[#8c7e71]">Best For:</strong> Sloped or uneven entryways</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── SECTION 1: ALUMINUM ENTRANCE MATS — Editorial numbered rows ── */}
                <div ref={aluminumRef} className="mb-[clamp(5rem,14vw,10rem)]">

                    {/* Section header */}
                    <div
                        className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-[clamp(2.5rem,7vw,4.5rem)]"
                        {...reveal(aluminumVisible)}
                    >
                        <span className="text-[#8c7e71] uppercase text-[0.6rem] tracking-[0.38em] font-semibold inline-flex items-center gap-3 shrink-0">
                            <span className="w-8 h-px bg-[#8c7e71]" />
                            Aluminum Systems
                        </span>
                        <div className="hidden sm:block flex-1 h-px bg-[#D8C3A5]/40" />
                        <h3
                            className="font-serif text-[#1C1915] shrink-0"
                            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 400 }}
                        >
                            Entrance <em style={{ color: '#8c7e71', fontStyle: 'italic', fontWeight: 300 }}>Mats</em>
                        </h3>
                    </div>

                    {/* Numbered editorial rows — no cards, dividers only */}
                    <div className="border-t border-[#D8C3A5]/40">
                        {mats.map((mat, i) => (
                            <div
                                key={mat.num}
                                className="group border-b border-[#D8C3A5]/40 py-9 lg:py-11
                                    grid grid-cols-[4.5rem_1fr] lg:grid-cols-[6rem_18rem_1fr] gap-x-6 lg:gap-x-12 gap-y-4
                                    cursor-default"
                                style={{
                                    opacity: aluminumVisible ? 1 : 0,
                                    transform: aluminumVisible ? 'none' : 'translateY(18px) scale(0.98)',
                                    transition: `opacity 600ms ${ease}, transform 600ms ${ease}, background-color 220ms ease`,
                                    transitionDelay: aluminumVisible ? `${i * 75}ms` : '0ms',
                                }}
                                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(216,195,165,0.07)'; }}
                                onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; }}
                            >
                                {/* Large editorial number */}
                                <span
                                    className="font-serif text-[#D8C3A5] leading-none select-none"
                                    style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 500 }}
                                >
                                    {mat.num}
                                </span>

                                {/* Name + code */}
                                <div className="pt-1 lg:pt-2">
                                    <h4
                                        className="font-serif text-[#1C1915] leading-tight mb-2"
                                        style={{
                                            fontSize: 'clamp(1.4rem, 2.5vw, 1.875rem)',
                                            fontWeight: 400,
                                            transition: `color 200ms ${ease}`,
                                            color: 'inherit',
                                        }}
                                    >
                                        <span className="group-hover:text-[#8c7e71]" style={{ transition: `color 200ms ${ease}` }}>
                                            {mat.name}
                                        </span>
                                    </h4>
                                    <span className="text-[#8c7e71] text-sm uppercase tracking-[0.2em] font-semibold">{mat.code}</span>
                                    {/* Mobile description */}
                                    <p className="lg:hidden text-[#5c5048] text-lg font-light leading-relaxed mt-4 max-w-[60ch]">
                                        {mat.desc}
                                    </p>
                                </div>

                                {/* Desktop description */}
                                <p className="hidden lg:block text-[#5c5048] text-lg font-light leading-relaxed pt-2 max-w-[55ch]">
                                    {mat.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── SECTION 2: NYLON PRINTING CARPETS — Dark editorial block ── */}
                <div
                    ref={nylonRef}
                    className="mb-[clamp(5rem,14vw,10rem)]"
                    {...reveal(nylonVisible)}
                >
                    <div className="bg-[#1C1915] rounded-2xl overflow-hidden">

                        {/* Top: headline + description + CTA */}
                        <div className="px-5 sm:px-10 lg:px-16 pt-14 pb-12 border-b border-[#D8C3A5]/10
                            grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-end">
                            <div>
                                <span className="text-[#D8C3A5] uppercase text-[0.6rem] tracking-[0.38em] font-semibold inline-flex items-center gap-3 mb-7">
                                    <span className="w-8 h-px bg-[#D8C3A5]" />
                                    Custom Designs
                                </span>
                                <h3
                                    className="font-serif text-[#F4F1EA] leading-[0.9]"
                                    style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)', fontWeight: 400 }}
                                >
                                    Printed Logo<br />
                                    <em style={{ color: '#D8C3A5', fontStyle: 'italic', fontWeight: 300 }}>Carpets.</em>
                                </h3>
                            </div>
                            <div className="flex flex-col gap-8 lg:pb-1">
                                <p className="text-[#F4F1EA]/75 text-lg font-light leading-relaxed max-w-[52ch]">
                                    Widely used in hotels, shopping malls, office buildings, airports, apartments, and all kinds of entrances and indoor areas. Effectively collects and absorbs dust — built to last in high traffic environments.
                                </p>
                                <a
                                    href="/RJ%20Nylon%20Printing%20Carpet%20brochure.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2.5 px-7 py-3 bg-[#D8C3A5] text-[#1C1915] text-[0.65rem] font-bold uppercase tracking-widest rounded-sm self-start
                                        hover:bg-[#F4F1EA] active:scale-[0.97]"
                                    style={{ transition: `background-color 160ms ${ease}, transform 160ms ${ease}` }}
                                >
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                    </svg>
                                    Download Brochure
                                </a>
                            </div>
                        </div>

                        {/* Bottom: numbered feature rows — no border-l side stripes */}
                        <div className="divide-y divide-[#D8C3A5]/10">
                            {nylonFeatures.map((f, i) => (
                                <div
                                    key={f.num}
                                    className="px-5 sm:px-10 lg:px-16 py-8
                                        grid grid-cols-[3rem_1fr] lg:grid-cols-[3rem_200px_1fr] gap-x-6 lg:gap-x-12 items-start"
                                    style={{
                                        opacity: nylonVisible ? 1 : 0,
                                        transform: nylonVisible ? 'none' : 'translateY(14px)',
                                        transition: `opacity 550ms ${ease}, transform 550ms ${ease}`,
                                        transitionDelay: nylonVisible ? `${180 + i * 65}ms` : '0ms',
                                    }}
                                >
                                    <span className="text-[#D8C3A5]/35 text-[0.6rem] uppercase tracking-[0.3em] font-bold pt-1">{f.num}</span>
                                    <h4 className="font-serif text-[#F4F1EA] text-2xl leading-snug">{f.title}</h4>
                                    <p className="text-[#F4F1EA]/65 text-base font-light leading-relaxed hidden lg:block">{f.desc}</p>
                                    {/* Mobile desc */}
                                    <p className="lg:hidden text-[#F4F1EA]/65 text-base font-light leading-relaxed col-start-2 mt-2">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── SECTION 3 & 4: SPECIALTY MATS & CLEANING ── */}
                <div ref={commercialRef} {...reveal(commercialVisible)}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* Specialty Carpets — editorial divider list */}
                        <div>
                            <span className="text-[#8c7e71] uppercase text-[0.6rem] tracking-[0.38em] font-semibold mb-5 inline-flex items-center gap-3">
                                <span className="w-8 h-px bg-[#8c7e71]" />
                                Specialty Options
                            </span>
                            <h3
                                className="font-serif text-[#1C1915] leading-tight mb-10"
                                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 400 }}
                            >
                                Specialty <em style={{ color: '#8c7e71', fontStyle: 'italic', fontWeight: 300 }}>Carpets.</em>
                            </h3>

                            <div className="border-t border-[#D8C3A5]/40">
                                {specialtyCarpets.map((item, i) => (
                                    <div
                                        key={i}
                                        className="group border-b border-[#D8C3A5]/40 py-7 cursor-default"
                                        style={{
                                            transition: `background-color 220ms ease`,
                                            opacity: commercialVisible ? 1 : 0,
                                            transitionDelay: commercialVisible ? `${i * 60}ms` : '0ms',
                                        }}
                                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(216,195,165,0.07)'; }}
                                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = ''; }}
                                    >
                                        <h4
                                            className="font-serif text-[#1C1915] text-2xl mb-2 group-hover:text-[#8c7e71]"
                                            style={{ transition: `color 200ms ${ease}` }}
                                        >
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

                        {/* Deep Carpet Cleaning */}
                        <div className="bg-[#1C1915] text-[#F4F1EA] p-10 lg:p-14 rounded-2xl flex flex-col justify-between min-h-[420px]">
                            <div>
                                <span className="text-[#D8C3A5] uppercase text-[0.6rem] tracking-[0.38em] font-semibold mb-6 block">
                                    Cleaning Services
                                </span>
                                <h3
                                    className="font-serif mb-7 leading-[0.95]"
                                    style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 400 }}
                                >
                                    Deep Carpet<br />Cleaning.
                                </h3>
                                <p className="text-[#F4F1EA]/75 text-lg font-light leading-relaxed max-w-[44ch]">
                                    Keep your carpets looking brand new and smelling fresh with our deep steam-cleaning service, made specifically for wall-to-wall carpets.
                                </p>
                            </div>
                            <div className="pt-8 border-t border-[#D8C3A5]/15 mt-10">
                                <span className="text-[#D8C3A5] text-[0.6rem] uppercase tracking-[0.22em] font-semibold block mb-2">
                                    Please Note
                                </span>
                                <p className="text-[#F4F1EA]/60 text-base font-light leading-relaxed">
                                    Our cleaning service is only for wall-to-wall or fully installed carpets. We do not accept loose area rugs or small standalone mats.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}

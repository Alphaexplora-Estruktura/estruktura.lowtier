import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Services() {
    const [heroRef, heroVisible] = useIntersectionObserver({ threshold: 0.1 });
    const [aluminumRef, aluminumVisible] = useIntersectionObserver({ threshold: 0.15 });
    const [nylonRef, nylonVisible] = useIntersectionObserver({ threshold: 0.15 });
    const [modularRef, modularVisible] = useIntersectionObserver({ threshold: 0.15 });
    const [commercialRef, commercialVisible] = useIntersectionObserver({ threshold: 0.15 });
    const [cleaningRef, cleaningVisible] = useIntersectionObserver({ threshold: 0.15 });

    return (
        <section id="services" className="relative bg-[#F4F1EA] overflow-hidden">
            {/* Elegant Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D8C3A5]/20 via-[#F4F1EA] to-[#F4F1EA] pointer-events-none" />

            <div className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-16 py-[clamp(4rem,10vw,7rem)]">

                {/* ── HERO ── */}
                <div
                    ref={heroRef}
                    className={`text-center mb-[clamp(4rem,10vw,6rem)] transition-all duration-[1400ms] ease-out ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                >
                    <span className="text-[#8c7e71] uppercase text-sm md:text-[0.6rem] tracking-[0.35em] font-semibold inline-flex items-center gap-3">
                        <span className="w-12 h-px bg-[#8c7e71]" />
                        Our Complete Range
                        <span className="w-12 h-px bg-[#8c7e71]" />
                    </span>
                    <h2 className="font-serif text-[#1C1915] leading-tight mt-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500 }}>
                        Quality Flooring <em style={{ color: '#8c7e71', fontStyle: 'italic', fontWeight: 300 }}>Options.</em>
                    </h2>
                    <p className="text-[#5c5048] text-base md:text-[0.9rem] font-light leading-relaxed mt-6 mb-8 max-w-3xl mx-auto">
                        From heavy-duty aluminum entrance mats to custom printed carpets — discover our wide range of durable and reliable flooring solutions for any space.
                    </p>
                    <a
                        href="/2025%20catalogue.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 border border-[#8c7e71] text-[#1C1915] hover:bg-[#8c7e71] hover:text-[#F4F1EA] transition-colors duration-300 text-[0.7rem] font-bold uppercase tracking-widest rounded-sm"
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                        </svg>
                        View Full 2025 Catalog
                    </a>
                </div>

                {/* ── SECTION 1: ALUMINUM ENTRANCE MATS ── */}
                <div
                    ref={aluminumRef}
                    className={`mb-[clamp(5rem,12vw,9rem)] transition-all duration-[1400ms] ease-out ${aluminumVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                >
                    <div className="mb-[clamp(2.5rem,6vw,4rem)] flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <span className="text-[#8c7e71] uppercase text-sm md:text-[0.6rem] tracking-[0.3em] font-semibold inline-flex items-center gap-3">
                                <span className="w-8 h-px bg-[#8c7e71]" />
                                Aluminum Systems
                            </span>
                            <h3 className="font-serif text-[#1C1915] leading-tight mt-3" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 500 }}>
                                Entrance <em style={{ color: '#8c7e71', fontStyle: 'italic', fontWeight: 300 }}>Mats</em>
                            </h3>
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

                {/* ── SECTION 2: NYLON PRINTING CARPETS ── */}
                <div
                    ref={nylonRef}
                    className={`mb-[clamp(5rem,12vw,9rem)] transition-all duration-[1400ms] ease-out ${nylonVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                >
                    <div className="bg-[#1C1915] rounded-2xl p-10 lg:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D8C3A5]/5 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D8C3A5]/30 to-transparent" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                            <div>
                                <span className="text-[#D8C3A5] uppercase text-sm md:text-[0.6rem] tracking-[0.3em] font-semibold inline-flex items-center gap-3 mb-6">
                                    <span className="w-8 h-px bg-[#D8C3A5]" />
                                    Custom Designs
                                </span>
                                <h3 className="font-serif text-[#F4F1EA] leading-tight mb-6" style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 400 }}>
                                    Printed Logo <br />
                                    <em style={{ color: '#D8C3A5', fontStyle: 'italic', fontWeight: 300 }}>Carpets.</em>
                                </h3>
                                <p className="text-[#F4F1EA]/70 text-[clamp(1rem,1.5vw,1.1rem)] leading-relaxed mb-8">
                                    Make a great first impression with your own logo or design. Our printed carpets use bright, fade-resistant colors that look great in lobbies, offices, and storefronts.
                                </p>
                                <div className="inline-block border border-[#D8C3A5]/30 bg-[#F4F1EA]/5 px-6 py-4 rounded-lg mb-8">
                                    <p className="text-[#D8C3A5] text-sm md:text-[0.7rem] font-medium">
                                        <strong className="text-[#F4F1EA] font-semibold">Material:</strong> Durable nylon top with a non-slip rubber bottom. Safe, washable, and built to last.
                                    </p>
                                </div>
                                <div>
                                    <a
                                        href="/RJ%20Nylon%20Printing%20Carpet%20brochure.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-8 py-3 bg-[#D8C3A5] text-[#1C1915] hover:bg-[#F4F1EA] transition-colors duration-300 text-[0.7rem] font-bold uppercase tracking-widest rounded-sm"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                        </svg>
                                        Download Specs & Brochure
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    { title: "Bright & Clear Colors", desc: "Vibrant colors that won't easily fade over time." },
                                    { title: "Safe & Non-Slip", desc: "Rubber bottom keeps the mat firmly in place." },
                                    { title: "Easy to Clean", desc: "Fully machine washable for easy, hassle-free upkeep." },
                                    { title: "Custom Sizes", desc: "Available in large roll widths to fit your exact space." },
                                ].map((feature, idx) => (
                                    <div key={idx} className="border-l border-[#D8C3A5]/30 pl-5 py-2">
                                        <h4 className="text-[#F4F1EA] font-serif text-xl mb-1">{feature.title}</h4>
                                        <p className="text-[#F4F1EA]/50 text-sm md:text-[0.7rem] font-light leading-relaxed">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── SECTION 3: MODULAR MAT SYSTEMS ── */}
                <div
                    ref={modularRef}
                    className={`mb-[clamp(5rem,12vw,9rem)] transition-all duration-[1400ms] ease-out ${modularVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                >
                    <div className="mb-[clamp(2.5rem,6vw,4rem)] text-center">
                        <span className="text-[#8c7e71] uppercase text-sm md:text-[0.6rem] tracking-[0.3em] font-semibold inline-flex items-center gap-3">
                            <span className="w-8 h-px bg-[#8c7e71]" />
                            Modular Systems
                            <span className="w-8 h-px bg-[#8c7e71]" />
                        </span>
                        <h3 className="font-serif text-[#1C1915] leading-tight mt-3" style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)', fontWeight: 500 }}>
                            Interlocking <em style={{ color: '#8c7e71', fontStyle: 'italic', fontWeight: 300 }}>Mats</em>
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D8C3A5]/30 border border-[#D8C3A5]/30">
                        {/* Three-in-One */}
                        <div className="bg-[#F4F1EA] p-8 hover:bg-white transition-colors duration-300">
                            <h4 className="font-serif text-[#1C1915] text-xl mb-3">Scraper Brush Tiles</h4>
                            <p className="text-[#5c5048] text-base md:text-[0.78rem] font-light leading-relaxed mb-6">Combines scraping, brushing, and wiping in one mat to easily remove thick mud and dirt from shoes.</p>
                            <div className="text-sm md:text-[0.7rem] font-medium text-[#1C1915] space-y-1">
                                <p><strong className="text-[#8c7e71]">Size:</strong> 150x150mm squares</p>
                                <p><strong className="text-[#8c7e71]">Best For:</strong> Outdoor entrances</p>
                            </div>
                        </div>
                        {/* Amino */}
                        <div className="bg-[#F4F1EA] p-8 hover:bg-white transition-colors duration-300">
                            <h4 className="font-serif text-[#1C1915] text-xl mb-3">Carpet Insert Tiles</h4>
                            <p className="text-[#5c5048] text-base md:text-[0.78rem] font-light leading-relaxed mb-6">Connectable square tiles with built-in carpet strips to easily wipe off moisture and fine dust.</p>
                            <div className="text-sm md:text-[0.7rem] font-medium text-[#1C1915] space-y-1">
                                <p><strong className="text-[#8c7e71]">Design:</strong> Interlocking tiles with carpet</p>
                                <p><strong className="text-[#8c7e71]">Best For:</strong> Indoor lobbies</p>
                            </div>
                        </div>
                        {/* M Series */}
                        <div className="bg-[#F4F1EA] p-8 hover:bg-white transition-colors duration-300">
                            <h4 className="font-serif text-[#1C1915] text-xl mb-3">Lightweight Tiles</h4>
                            <p className="text-[#5c5048] text-base md:text-[0.78rem] font-light leading-relaxed mb-6">Super lightweight and flexible interlocking tiles. Very easy to install, clean, and replace.</p>
                            <div className="text-sm md:text-[0.7rem] font-medium text-[#1C1915] space-y-1">
                                <p><strong className="text-[#8c7e71]">Material:</strong> Lightweight PVC/EVA</p>
                                <p><strong className="text-[#8c7e71]">Size:</strong> 300x300mm squares</p>
                            </div>
                        </div>
                        {/* Rocca */}
                        <div className="bg-[#F4F1EA] p-8 hover:bg-white transition-colors duration-300">
                            <h4 className="font-serif text-[#1C1915] text-xl mb-3">Heavy Rubber Tiles</h4>
                            <p className="text-[#5c5048] text-base md:text-[0.78rem] font-light leading-relaxed mb-6">Strong rubber-like tiles. You can choose to add carpet strips inside or keep it purely rubber.</p>
                            <div className="text-sm md:text-[0.7rem] font-medium text-[#1C1915] space-y-1">
                                <p><strong className="text-[#8c7e71]">Feature:</strong> Mix and match with carpet</p>
                                <p><strong className="text-[#8c7e71]">Size:</strong> 500x500mm squares</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-4 mb-[clamp(4rem,10vw,8rem)]">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D8C3A5]/40 to-transparent" />
                    <span className="text-[#D8C3A5] text-xs tracking-[0.3em]">•</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D8C3A5]/40 to-transparent" />
                </div>

                {/* ── SECTION 4 & 5: SPECIALTY MATS & CLEANING (Split Layout) ── */}
                <div
                    ref={commercialRef}
                    className={`transition-all duration-[1200ms] ease-out ${commercialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* Specialty Carpets List */}
                        <div>
                            <span className="text-[#8c7e71] uppercase text-sm md:text-[0.6rem] tracking-[0.35em] font-semibold mb-4 inline-flex items-center gap-3">
                                <span className="w-8 h-px bg-[#8c7e71]" />
                                Specialty Options
                            </span>
                            <h3 className="font-serif text-[#1C1915] leading-tight mb-8" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 500 }}>
                                Specialty <em style={{ color: '#8c7e71', fontStyle: 'italic', fontWeight: 300 }}>Carpets.</em>
                            </h3>

                            <div className="space-y-6">
                                <div className="border-b border-[#D8C3A5]/30 pb-6">
                                    <h4 className="text-[#1C1915] font-serif text-xl mb-2">Everyday Office Carpets</h4>
                                    <p className="text-[#5c5048] text-base md:text-[0.9rem] font-light leading-relaxed">Tough, everyday carpets with a waterproof bottom. Comes in ribbed or square patterns, great for busy hallways and offices.</p>
                                </div>
                                <div className="border-b border-[#D8C3A5]/30 pb-6">
                                    <h4 className="text-[#1C1915] font-serif text-xl mb-2">Bath & Pool Mats</h4>
                                    <p className="text-[#5c5048] text-base md:text-[0.9rem] font-light leading-relaxed">Water-friendly plastic tiles that prevent slipping. Perfect for locker rooms, pools, and wet areas.</p>
                                </div>
                                <div>
                                    <h4 className="text-[#1C1915] font-serif text-xl mb-2">Outdoor Scraping Mats</h4>
                                    <p className="text-[#5c5048] text-base md:text-[0.9rem] font-light leading-relaxed">Purely scraping mats with no fabric. Best for outdoor use to scrape off heavy mud before stepping inside.</p>
                                </div>
                            </div>
                        </div>

                        {/* Carpet Cleaning Callout */}
                        <div className="bg-[#1C1915] text-[#F4F1EA] p-10 lg:p-14 rounded-2xl flex flex-col justify-center">
                            <span className="text-[#D8C3A5] uppercase text-sm md:text-[0.6rem] tracking-[0.35em] font-semibold mb-4 block">
                                Cleaning Services
                            </span>
                            <h3 className="font-serif mb-6" style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400 }}>
                                Deep Carpet Cleaning
                            </h3>
                            <p className="text-[#F4F1EA]/70 text-base md:text-[0.9rem] font-light leading-relaxed mb-8">
                                Keep your carpets looking brand new and smelling fresh with our deep steam-cleaning service, made specifically for wall-to-wall carpets.
                            </p>

                            <div className="bg-[#F4F1EA]/10 border border-[#D8C3A5]/20 p-5 rounded-lg">
                                <span className="inline-flex items-center gap-2 text-[#D8C3A5] text-sm md:text-[0.7rem] uppercase tracking-[0.2em] font-semibold mb-2">
                                    Please Note
                                </span>
                                <p className="text-[#F4F1EA]/60 text-base md:text-[0.78rem] font-light leading-relaxed">
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
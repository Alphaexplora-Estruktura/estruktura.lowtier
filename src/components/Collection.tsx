import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import imgBr22 from '../assets/carpets/bedroom-guestroom/br-2.2.jpg';
import imgBr32 from '../assets/carpets/bedroom-guestroom/br-3.2.jpg';

// ─── Product data with descriptions ──────────────────────────────────────────
const products = [
  {
    name: 'Axminster',
    description: 'Woven on an Axminster loom for crisp pattern reproduction and consistent pile density — ideal for adding a classic touch to living rooms and welcoming reception areas.',
  },
  {
    name: 'Handtufted',
    description: 'Hand-crafted by artisans using a tufting gun to allow bespoke designs, rich textures, and custom color palettes — ideal for custom area rugs and adding a personalized touch to your home.',
  },
  {
    name: 'Roll Carpet',
    description: 'Available in broad widths to deliver seamless coverage that reduces seam lines and creates a unified, polished appearance — ideal for covering larger rooms or open office spaces.',
  },
  {
    name: 'Carpet Tiles',
    description: 'Simplifying installation, replacement, and reconfiguration — ideal for home offices, playrooms, and everyday workspaces.',
  },
  {
    name: 'Wilton Carpet',
    description: 'Tightly woven on a continuous loom for superior durability and depth of color — ideal for dining rooms, bedrooms, and spaces where you want lasting comfort.',
  },
  {
    name: 'Wire Wilton',
    description: 'Featuring structured loop piles that create a distinctive textured finish — ideal for hallways, stairs, and areas that see a lot of daily foot traffic.',
  },
  {
    name: 'Flocked Carpet',
    description: 'Created by electrostatically applying ultra-short fibers for an exceptionally soft yet highly durable surface — ideal for pet-friendly homes and busy households that need easy cleaning.',
  },
  {
    name: 'Matting',
    description: 'Designed to trap dirt and moisture while offering optional custom branding — ideal for keeping your home or office entrances clean and inviting.',
  },
];

// ─── Benefits data (no emojis) ────────────────────────────────────────────────
const benefits = [
  { label: 'Color & Visual Appeal', detail: 'Wide palette and pattern options allow carpets to define the character of any space.' },
  { label: 'Exceptional Comfort', detail: 'Dense pile cushions every step, reducing fatigue in high-use residential and commercial areas.' },
  { label: 'Safety Underfoot', detail: 'Slip-resistant surfaces and cushioned backing minimize fall risks across all environments.' },
  { label: 'Sound Absorption', detail: 'Carpet fibre significantly reduces airborne and impact noise for quieter, more productive spaces.' },
  { label: 'Area Definition', detail: 'Distinct flooring zones guide circulation and reinforce spatial hierarchy without structural walls.' },
  { label: 'Floor Protection', detail: 'Acts as a protective layer that extends the lifespan of subfloor materials from wear and impact.' },
];

export default function Collection() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.15 });
  const [productsRef, productsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [benefitsRef, benefitsVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="products" className="overflow-hidden">

      {/* ── Section 1: Products header ── */}
      <div className="relative min-h-[55dvh] flex items-end overflow-hidden bg-[#1C1915]">
        <img
          src={imgBr22}
          alt="Installed carpet bedroom"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.35 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1915] via-[#1C1915]/40 to-transparent" />

        <div
          ref={headerRef}
          className={`relative z-10 max-w-[90rem] mx-auto px-6 lg:px-16 pb-16 transition-all duration-[1000ms] ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-[#8c7e71] uppercase text-sm md:text-[0.6rem] tracking-[0.35em] font-semibold mb-5 flex items-center gap-3">
            <span className="w-8 h-px bg-[#8c7e71]" />
            What We Provide
          </span>
          <h2 className="font-serif text-[#F4F1EA] leading-tight" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 400 }}>
            Carpets for<br />
            <em style={{ color: '#D8C3A5', fontStyle: 'italic', fontWeight: 300 }}>Every Need.</em>
          </h2>
        </div>
      </div>

      {/* ── Section 2: Products grid ── */}
      <div ref={productsRef} className={`bg-[#F4F1EA] py-[clamp(4rem,10vw,5rem)] px-6 lg:px-16 transition-all duration-[1000ms] ease-out ${productsVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-[90rem] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-[#D8C3A5]/40">
            {products.map((p, i) => (
              <div key={i} className="bg-[#F4F1EA] p-[clamp(1.25rem,4vw,2rem)] group hover:bg-[#1C1915] transition-all duration-500 cursor-default flex flex-col gap-3" style={{ transitionDelay: `${i * 50}ms` }}>
                <span className="text-[#8c7e71]/50 text-sm md:text-[0.6rem] uppercase tracking-[0.3em] font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="font-serif text-[#2A2725] text-xl group-hover:text-[#D8C3A5] transition-colors duration-500 leading-tight">
                  {p.name}
                </h4>
                <div className="w-8 h-px bg-[#D8C3A5]/60 group-hover:bg-[#D8C3A5]/30 transition-colors duration-500" />
                <p className="text-[#5c5048] text-base md:text-[0.78rem] leading-relaxed font-light group-hover:text-[#F4F1EA]/60 transition-colors duration-500">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Section 2.5: Ways We Work With You (Friendly & Elegant Layout) ── */}
      <div className="bg-[#E8E2DA] py-[clamp(3rem,8vw,5rem)] px-6 lg:px-16 border-y border-[#D8C3A5]/30">
        <div className="max-w-[90rem] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Left: Typography & Intro */}
          <div className="flex-1 text-center lg:text-left">
            <span className="text-[#8c7e71] uppercase text-sm md:text-[0.65rem] tracking-[0.3em] font-bold mb-4 block">
              How We Work With You
            </span>
            <h3 className="font-serif text-[#1C1915] text-3xl md:text-4xl lg:text-5xl mb-6 font-medium leading-tight">
              Ready-Made or<br className="hidden lg:block" /> Fully Custom.
            </h3>
            <p className="text-[#5c5048] text-lg md:text-[1rem] leading-relaxed max-w-xl mx-auto lg:mx-0">
              We love helping you find the perfect match. Whether you are looking for a quick, stunning transformation or a deeply personalized masterpiece, we are happy to guide you to the right solution for your space.
            </p>
          </div>

          {/* Right: The Two Options Side-by-Side */}
          <div className="flex-[1.5] w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">

            {/* Option 1: Available Collections */}
            <div className="bg-[#F4F1EA] p-8 md:p-10 rounded-xl border border-[#D8C3A5]/30 hover:border-[#D8C3A5] hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <h4 className="font-serif text-[#1C1915] text-xl mb-3">Available Collections</h4>
                <p className="text-[#5c5048] text-base md:text-[0.9rem] leading-relaxed font-light mb-6">
                  Perfect for homes, boutique offices, and intimate spaces. Choose from our curated, high-quality designs that are ready for immediate installation.
                </p>
              </div>
              <span className="text-[#8c7e71] text-sm md:text-[0.7rem] uppercase tracking-[0.2em] font-bold">
                No minimum required
              </span>
            </div>

            {/* Option 2: Bespoke Customization */}
            <div className="bg-[#F4F1EA] p-8 md:p-10 rounded-xl border border-[#D8C3A5]/30 hover:border-[#D8C3A5] hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
              <div>
                <h4 className="font-serif text-[#1C1915] text-xl mb-3">Bespoke Customization</h4>
                <p className="text-[#5c5048] text-base md:text-[0.9rem] leading-relaxed font-light mb-6">
                  Tailored for grand-scale commercial projects and hotels. We will collaborate closely with you to craft a totally unique design from scratch.
                </p>
              </div>
              <div className="pt-4 border-t border-[#D8C3A5]/30 mt-auto">
                <span className="text-[#8c7e71] text-sm md:text-[0.7rem] uppercase tracking-[0.2em] font-bold block leading-relaxed">
                  Kindly Note: <br className="hidden xl:block" />
                  <span className="text-[#1C1915]">Custom tiles start at 1,000 sqm.</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Section 3: Benefits (Editorial Architectural Grid) ── */}
      <div className="relative min-h-[600px] overflow-hidden bg-[#F4F1EA]">
        {/* More visible background image */}
        <img
          src={imgBr32}
          alt="Benefits of carpet"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.35 }}
        />
        {/* Frosted glass overlay so the text remains easy to read */}
        <div className="absolute inset-0 bg-[#F4F1EA]/60 backdrop-blur-[3px]" />

        <div className="relative z-10 max-w-[75rem] mx-auto px-6 lg:px-16 py-24">
          <div ref={benefitsRef} className={`transition-all duration-[1000ms] ease-out ${benefitsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Header */}
            <div className="text-center mb-16">
              <span className="text-[#8c7e71] uppercase text-sm md:text-[0.65rem] tracking-[0.35em] font-semibold mb-5 flex items-center justify-center gap-3">
                <span className="w-8 h-px bg-[#8c7e71]" />
                More Than Beauty
                <span className="w-8 h-px bg-[#8c7e71]" />
              </span>
              <h3 className="font-serif text-[#1C1915] font-medium" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                Why Carpet Matters.
              </h3>
            </div>

            {/* Editorial Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#D8C3A5]/50 bg-[#F4F1EA]/60 backdrop-blur-md shadow-xl">
              {benefits.map((b, i) => (
                <div key={i} className="group relative p-[clamp(1.25rem,4vw,2.5rem)] border-b border-r border-[#D8C3A5]/50 hover:bg-white/90 transition-all duration-500 flex flex-col h-full overflow-hidden">

                  {/* Massive watermark numeral */}
                  <span className="absolute -bottom-4 -right-2 text-[8rem] font-serif font-bold text-[#D8C3A5]/15 group-hover:text-[#D8C3A5]/25 transition-colors duration-500 pointer-events-none select-none leading-none">
                    {['I', 'II', 'III', 'IV', 'V', 'VI'][i]}
                  </span>

                  {/* Standard numeral indicator */}
                  <span className="text-[#D8C3A5] text-sm md:text-[0.7rem] uppercase tracking-[0.3em] font-bold mb-6 block relative z-10">
                    {String(i + 1).padStart(2, '0')} —
                  </span>

                  <h4 className="text-[#1C1915] font-serif text-xl mb-4 group-hover:text-[#8c7e71] transition-colors duration-300 relative z-10">
                    {b.label}
                  </h4>

                  <p className="text-[#5c5048] text-base md:text-[0.9rem] font-medium leading-relaxed relative z-10">
                    {b.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
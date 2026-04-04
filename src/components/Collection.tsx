import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import imgBr22 from '../assets/carpets/bedroom-guestroom/br-2.2.jpg';
import imgBr32 from '../assets/carpets/bedroom-guestroom/br-3.2.jpg';
import imgCr12 from '../assets/carpets/corridors-hallway/cr-1.2.jpg';

// ─── Product data with descriptions ──────────────────────────────────────────
const products = [
  {
    name: 'Axminster',
    description:
      'Woven on an Axminster loom for crisp pattern reproduction and consistent pile density — ideal for adding a classic touch to living rooms and welcoming reception areas.',
  },
  {
    name: 'Handtufted',
    description:
      'Hand-crafted by artisans using a tufting gun to allow bespoke designs, rich textures, and custom color palettes — ideal for custom area rugs and adding a personalized touch to your home.',
  },
  {
    name: 'Roll Carpet',
    description:
      'Available in broad widths to deliver seamless coverage that reduces seam lines and creates a unified, polished appearance — ideal for covering larger rooms or open office spaces.',
  },
  {
    name: 'Carpet Tiles',
    description:
      'Simplifying installation, replacement, and reconfiguration — ideal for home offices, playrooms, and everyday workspaces.',
  },
  {
    name: 'Wilton Carpet',
    description:
      'Tightly woven on a continuous loom for superior durability and depth of color — ideal for dining rooms, bedrooms, and spaces where you want lasting comfort.',
  },
  {
    name: 'Wire Wilton',
    description:
      'Featuring structured loop piles that create a distinctive textured finish — ideal for hallways, stairs, and areas that see a lot of daily foot traffic.',
  },
  {
    name: 'Flocked Carpet',
    description:
      'Created by electrostatically applying ultra-short fibers for an exceptionally soft yet highly durable surface — ideal for pet-friendly homes and busy households that need easy cleaning.',
  },
  {
    name: 'Matting',
    description:
      'Designed to trap dirt and moisture while offering optional custom branding — ideal for keeping your home or office entrances clean and inviting.',
  },
];

// ─── Benefits data (no emojis) ────────────────────────────────────────────────
const benefits = [
  {
    label: 'Color & Visual Appeal',
    detail: 'Wide palette and pattern options allow carpets to define the character of any space.',
  },
  {
    label: 'Exceptional Comfort',
    detail: 'Dense pile cushions every step, reducing fatigue in high-use residential and commercial areas.',
  },
  {
    label: 'Safety Underfoot',
    detail: 'Slip-resistant surfaces and cushioned backing minimize fall risks across all environments.',
  },
  {
    label: 'Sound Absorption',
    detail: 'Carpet fibre significantly reduces airborne and impact noise for quieter, more productive spaces.',
  },
  {
    label: 'Area Definition',
    detail: 'Distinct flooring zones guide circulation and reinforce spatial hierarchy without structural walls.',
  },
  {
    label: 'Floor Protection',
    detail: 'Acts as a protective layer that extends the lifespan of subfloor materials from wear and impact.',
  },
];

// ─── Component ─────────────────────────────────────────────────────────────────
export default function Collection() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.15 });
  const [productsRef, productsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [benefitsRef, benefitsVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="products" className="overflow-hidden">

      {/* ── Section 1: Products header over a carpet photo ── */}
      <div className="relative min-h-[55vh] flex items-end overflow-hidden bg-[#1C1915]">
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
          <span className="text-[#8c7e71] uppercase text-[0.6rem] tracking-[0.35em] font-semibold mb-5 flex items-center gap-3">
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
      <div
        ref={productsRef}
        className={`bg-[#F4F1EA] py-20 px-6 lg:px-16 transition-all duration-[1000ms] ease-out ${productsVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-[90rem] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-[#D8C3A5]/40">
            {products.map((p, i) => (
              <div
                key={i}
                className="bg-[#F4F1EA] p-8 group hover:bg-[#1C1915] transition-all duration-500 cursor-default flex flex-col gap-3"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {/* Number index */}
                <span className="text-[#8c7e71]/50 text-[0.6rem] uppercase tracking-[0.3em] font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {/* Name */}
                <h4 className="font-serif text-[#2A2725] text-xl group-hover:text-[#D8C3A5] transition-colors duration-500 leading-tight">
                  {p.name}
                </h4>
                {/* Divider */}
                <div className="w-8 h-px bg-[#D8C3A5]/60 group-hover:bg-[#D8C3A5]/30 transition-colors duration-500" />
                {/* Description */}
                <p className="text-[#5c5048] text-[0.78rem] leading-relaxed font-light group-hover:text-[#F4F1EA]/60 transition-colors duration-500">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Section 3: Benefits — dark strip with side carpet image ── */}
      <div className="bg-[#1C1915]">
        <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-2">

          {/* Left: benefits list */}
          <div
            ref={benefitsRef}
            className={`px-6 lg:px-16 py-20 transition-all duration-[1000ms] ease-out ${benefitsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <span className="text-[#8c7e71] uppercase text-[0.6rem] tracking-[0.35em] font-semibold mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-[#8c7e71]" />
              More Than Beauty
            </span>
            <h3 className="font-serif text-[#F4F1EA] mb-10" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 400 }}>
              Why Carpet Matters.
            </h3>

            <ul className="space-y-0 divide-y divide-[#2A2725]">
              {benefits.map((b, i) => (
                <li
                  key={i}
                  className="group flex items-start gap-5 py-5 hover:bg-[#2A2725]/30 transition-colors duration-300 px-2 -mx-2"
                >
                  {/* Roman numeral index */}
                  <span className="text-[#8c7e71]/50 text-[0.55rem] uppercase tracking-[0.25em] font-semibold mt-1 w-6 flex-shrink-0 text-right">
                    {['I', 'II', 'III', 'IV', 'V', 'VI'][i]}
                  </span>
                  {/* Thin vertical rule */}
                  <div className="w-px self-stretch bg-[#8c7e71]/20 flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <span className="text-[#F4F1EA]/90 font-light text-sm tracking-wide group-hover:text-[#D8C3A5] transition-colors duration-300">
                      {b.label}
                    </span>
                    <span className="text-[#8c7e71]/60 text-[0.72rem] font-light leading-relaxed">
                      {b.detail}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: photograph */}
          <div className="relative min-h-[420px] overflow-hidden">
            <img
              src={imgBr32}
              alt="Benefits of carpet"
              className="w-full h-full object-cover"
              style={{ opacity: 0.5 }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1915] via-[#1C1915]/10 to-transparent lg:block hidden" />
            <img
              src={imgCr12}
              alt="Corridor carpet"
              className="absolute bottom-6 right-6 w-40 h-28 object-cover border-2 border-[#D8C3A5]/30 shadow-2xl hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

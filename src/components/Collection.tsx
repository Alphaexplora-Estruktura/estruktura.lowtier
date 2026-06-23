import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import imgBr22 from '../assets/carpets/bedroom-guestroom/br-2.2.jpg';
import imgBr32 from '../assets/carpets/bedroom-guestroom/br-3.2.jpg';

const products = [
  {
    name: 'Axminster Carpet',
    description: 'Machine-woven from premium wool and nylon. Custom colours and designs are woven deep into the pile to match your style and palette. Durable enough for heavy foot traffic, with excellent dimensional stability. Ideal for grand ballrooms, event venues, guestrooms, hallways, theaters, and hotel lobbies. Made to order.',
  },
  {
    name: 'Hand-tufted Carpet',
    description: 'Artisan-made from a premium pure wool blend. Custom colours, intricate designs, unique textures, and exact shapes crafted to your requirements. Yarns anchored to a stable backing create a dense, resilient pile with great stability and soft comfort. Perfect for hotel lobbies, luxury suites, ballrooms, event spaces, guestrooms, hallways, elevator lobbies, and residential areas like living rooms or bedrooms — ideal for spaces needing a personal touch. Made to order.',
  },
  {
    name: 'Roll Carpet',
    description: 'Practical, ready-to-use flooring. Machine-made in standard continuous lengths, available in plain colors and classic or modern patterns. These are standard designs (not custom-made) and crafted from durable materials: nylon, polypropylene, olefin, or premium wool blends. Ideal for offices, homes, and bedrooms.',
  },
  {
    name: 'Carpet Tiles',
    description: 'Versatile, innovative flooring. Precision-made as modular units from quality nylon, polypropylene, olefin, polyester or wool-blend fibres, built for long-lasting use. Easy-fit edges enable fast installation and perfect alignment, with great sound insulation and a comfortable feel underfoot. Suitable for corporate offices, conference rooms, retail spaces, schools, healthcare facilities, airport terminals, hotel corridors and elevator entrances.',
  },
  {
    name: 'Wilton Carpet',
    description: 'Precisely woven on specialized Wilton looms, with yarns fully interlaced through the backing. This premium carpet features intricate, highly detailed, and complex designs—with brilliant colours, deep tones, and elaborate patterns. A distinguished choice for hotels, casinos, ballrooms, function halls, and lobbies. Stocks Available.',
  },
  {
    name: 'Wire Wilton Carpet',
    description: 'Crafted on Wilton looms with special metal wires inserted during weaving. This precision engineering delivers uniform pile height, sharp patterns, and an exceptionally tight structure. It offers greater strength, stability, durability, and superior resistance to crushing under heavy use. Made to order, it is specified for shopping centers, busy hotel corridors, casinos, and high-traffic venues.',
  },
  {
    name: 'Electrostatic Flocked Carpet',
    description: 'A modern flooring material combining the benefits of traditional carpets and hard surfaces, widely used in contemporary interiors. Made with high-voltage electrostatic flocking technology, it uses premium 100% nylon 6,6 fibers, plus stabilizing, fiberglass, and waterproof latex layers. With over 80 million fibers per square meter — 10 times more than standard bonded carpets — it delivers exceptional durability, color fastness, flame resistance, anti-static and anti-slip performance. It is also low-formaldehyde, antimicrobial, highly stain-resistant, and easy to maintain. Specified for airports, transport hubs, and areas with constant use of trolleys and wheeled equipment.',
  },
  {
    name: 'Matting',
    description: 'This heavy duty floorcovering is engineered to scrape dirt, absorb moisture, trap dust and grit right at entrances before they spread further inside. Manufactured specifically for protection, safety, and cleanliness. It is produced in standard readily available stocks cut to size or indent for custom sizes and logos. An excellent solution for building entrances, main lobbies, lift lobbies, shopping mall doorways, office foyers, hotel entrances, industrial facilities, and all high- access points where hygiene and safety are priorities.',
  },
];

const benefits = [
  { label: 'Color & Visual Appeal', detail: 'Offers a vast palette and endless patterns, letting you define the unique character and style of any space instantly.' },
  { label: 'Exceptional Comfort', detail: 'Dense, soft pile cushions every step, reducing physical fatigue in busy homes, offices, or commercial areas.' },
  { label: 'Safety Underfoot', detail: 'Slip-resistant surface and cushioned backing minimize fall risks and soften impacts for better protection.' },
  { label: 'Sound Absorption', detail: 'Fibers trap airborne noise and dampen footstep impact, creating quieter, calmer, and more focused environments.' },
  { label: 'Area Definition', detail: 'Creates distinct flooring zones that guide movement and organize space — no walls or dividers needed.' },
  { label: 'Floor Protection', detail: 'Acts as a durable shield, shielding your subfloor from scratches, wear, and damage to extend its lifespan.' },
  { label: 'Air Quality Improvement', detail: 'Traps dust, pollen, and fine particles from the air, holding them until vacuumed — resulting in cleaner, healthier indoor air.' },
  { label: 'Easy Transformation & Brand Identity', detail: 'Instantly refreshes or changes the entire theme of a space without major renovation; especially vital for hospitality businesses like hotels — carpet serves as your brand’s visual face, making a lasting first impression alongside your name and services.' },
];

export default function Collection() {
  const [headerRef, headerVisible] = useIntersectionObserver({ threshold: 0.15 });
  const [productsRef, productsVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [benefitsRef, benefitsVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="products" className="overflow-hidden">

      {/* ── Section 1: Products header ── */}
      <div className="relative min-h-[60dvh] flex items-center justify-center overflow-hidden bg-[#1C1915]">
        <img
          src={imgBr22}
          alt="Installed carpet bedroom"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Light brown overlay - adjusted for better base contrast */}
        <div className="absolute inset-0 bg-[#A49381]/80" />
        
        {/* Subtle center darkening for white text contrast, fading to the off-white bottom */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(28,25,21,0.25)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F1EA] via-transparent to-transparent opacity-90" />

        <div
          ref={headerRef}
          className={`relative z-10 w-full max-w-[90rem] mx-auto px-6 lg:px-16 flex flex-col items-center text-center transition-all duration-[1000ms] ease-out ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-[#F4F1EA] drop-shadow-sm uppercase text-sm md:text-[0.65rem] tracking-[0.35em] font-semibold mb-5 flex items-center justify-center gap-4">
            <span className="w-12 md:w-20 h-px bg-[#F4F1EA]/80" />
            What We Provide
            <span className="w-12 md:w-20 h-px bg-[#F4F1EA]/80" />
          </span>
          <h2 className="font-serif text-[#F4F1EA] leading-tight drop-shadow-md" style={{ fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 400 }}>
            Carpets for<br />
            {/* Darkened text to #1C1915 for maximum contrast against light brown */}
            <em style={{ color: '#1C1915', fontStyle: 'italic', fontWeight: 400 }} className="drop-shadow-none">Every Need.</em>
          </h2>
        </div>
      </div>

      {/* ── Section 2: Products grid ── */}
      <div ref={productsRef} className={`bg-[#F4F1EA] py-[clamp(4rem,10vw,5rem)] px-6 lg:px-16 transition-all duration-[1000ms] ease-out ${productsVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-[90rem] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-[#D8C3A5]/40">
            {products.map((p, i) => (
              <div key={i} className="bg-[#F4F1EA] p-[clamp(1.25rem,4vw,2rem)] group hover:bg-white transition-all duration-500 cursor-default flex flex-col gap-3" style={{ transitionDelay: `${i * 50}ms` }}>
                <span className="text-[#8c7e71]/80 text-sm md:text-[0.6rem] uppercase tracking-[0.3em] font-semibold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h4 className="font-serif text-[#1C1915] text-xl group-hover:text-[#8c7e71] transition-colors duration-500 leading-tight">
                  {p.name}
                </h4>
                <div className="w-8 h-px bg-[#D8C3A5]/60 transition-colors duration-500" />
                <p className="text-[#5c5048] text-base md:text-[0.78rem] leading-relaxed font-light transition-colors duration-500">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Section 2.5: Ways We Work With You (Friendly & Elegant Layout) ── */}
      <div className="bg-[#E8E2DA] py-[clamp(4rem,10vw,6rem)] px-6 lg:px-16 border-y border-[#D8C3A5]/30">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

          {/* Typography & Intro */}
          <span className="text-[#8c7e71] uppercase text-sm md:text-[0.65rem] tracking-[0.3em] font-bold mb-4 block">
            How We Work With You
          </span>
          <h3 className="font-serif text-[#1C1915] text-3xl md:text-4xl lg:text-5xl mb-6 font-medium leading-tight">
            Ready-Made or Fully Custom.
          </h3>
          <p className="text-[#5c5048] text-lg md:text-[1rem] leading-relaxed max-w-2xl mx-auto">
            We love helping you find the perfect match. Whether you are looking for a quick, stunning transformation or a deeply personalized masterpiece, we are happy to guide you to the right solution for your space.
          </p>

        </div>
      </div>

      {/* ── Section 3: Benefits (Editorial Architectural Grid) ── */}
      <div className="relative min-h-[600px] overflow-hidden bg-[#1C1915]">
        {/* More visible background image */}
        <img
          src={imgBr32}
          alt="Benefits of carpet"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Light brown overlay */}
        <div className="absolute inset-0 bg-[#D8C3A5]/60" />
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
                Why Carpet?
              </h3>
            </div>

            {/* Editorial Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#D8C3A5]/50 bg-[#F4F1EA]/60 backdrop-blur-md shadow-xl">
              {benefits.map((b, i) => (
                <div key={i} className="group relative p-[clamp(1.25rem,4vw,2.5rem)] border-b border-r border-[#D8C3A5]/50 hover:bg-white/90 transition-all duration-500 flex flex-col h-full overflow-hidden">

                  {/* Massive watermark numeral */}
                  <span className="absolute -bottom-4 -right-2 text-[8rem] font-serif font-bold text-[#D8C3A5]/15 group-hover:text-[#D8C3A5]/25 transition-colors duration-500 pointer-events-none select-none leading-none">
                    {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'][i]}
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
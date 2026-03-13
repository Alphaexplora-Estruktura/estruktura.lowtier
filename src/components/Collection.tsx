import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import imgBr22 from '../assets/carpets/bedroom-guestroom/br-2.2.jpg';
import imgBr32 from '../assets/carpets/bedroom-guestroom/br-3.2.jpg';
import imgCr12 from '../assets/carpets/corridors-hallway/cr-1.2.jpg';

const products = [
  { name: 'Axminster', icon: '⬡', note: 'Machine precision' },
  { name: 'Handtufted', icon: '✦', note: 'Artisan craft' },
  { name: 'Roll Carpet', icon: '◈', note: 'Large coverage' },
  { name: 'Carpet Tiles', icon: '▦', note: 'Modular & flexible' },
  { name: 'Wilton Carpet', icon: '◉', note: 'Woven excellence' },
  { name: 'Wire Wilton', icon: '◈', note: 'Loop pile texture' },
  { name: 'Flocked Carpet', icon: '✿', note: 'Velvet-like finish' },
  { name: 'Matting', icon: '⬛', note: 'With / without logo' },
];

const benefits = [
  { label: 'Color & Visual Appeal', icon: '🎨' },
  { label: 'Exceptional Comfort', icon: '☁️' },
  { label: 'Safety Underfoot', icon: '🛡️' },
  { label: 'Sound Absorption', icon: '🔇' },
  { label: 'Area Definition', icon: '📐' },
  { label: 'Floor Protection', icon: '🛡️' },
];

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
            <em style={{ color: '#D8C3A5', fontStyle: 'italic', fontWeight: 300 }}>Every Space.</em>
          </h2>
        </div>
      </div>

      {/* ── Section 2: Products grid over cream bg ── */}
      <div
        ref={productsRef}
        className={`bg-[#F4F1EA] py-20 px-6 lg:px-16 transition-all duration-[1000ms] ease-out ${productsVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="max-w-[90rem] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#D8C3A5]/40">
            {products.map((p, i) => (
              <div
                key={i}
                className="bg-[#F4F1EA] p-8 group hover:bg-[#1C1915] transition-all duration-500 cursor-default"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">{p.icon}</div>
                <h4 className="font-serif text-[#2A2725] text-lg mb-1 group-hover:text-[#D8C3A5] transition-colors duration-500">{p.name}</h4>
                <p className="text-[#8c7e71] text-xs uppercase tracking-[0.2em] group-hover:text-[#8c7e71]/60 transition-colors duration-500">{p.note}</p>
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
            <ul className="space-y-5">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-5 group">
                  <div className="w-8 h-8 rounded-full bg-[#2A2725] flex items-center justify-center text-sm flex-shrink-0">
                    {b.icon}
                  </div>
                  <span className="text-[#F4F1EA]/70 font-light text-base group-hover:text-[#D8C3A5] transition-colors duration-300">{b.label}</span>
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

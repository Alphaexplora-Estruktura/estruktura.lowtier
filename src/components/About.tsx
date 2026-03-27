import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import imgNature1 from '../assets/carpets/design-inspired-by-nature/dn-1.1.jpg';
import imgNature2 from '../assets/carpets/design-inspired-by-nature/dn-2.1.jpg';
import imgModern1 from '../assets/carpets/modern-style/ms-1.1.jpg';
import imgModern2 from '../assets/carpets/modern-design/md-1.1.jpg';
import imgEuropean from '../assets/carpets/elegant-european-stle/ee-1.1.jpg';

const styles = [
  {
    label: 'Nature-Inspired',
    description: 'Organic patterns, earthy tones, botanical motifs.',
    images: [imgNature1, imgNature2],
  },
  {
    label: 'Modern',
    description: 'Clean lines, geometric patterns, contemporary finishes.',
    images: [imgModern1, imgModern2],
  },
  {
    label: 'European Elegance',
    description: 'Grand medallions, rich textures, heritage detailing.',
    images: [imgEuropean, imgEuropean],
  },
];

export default function About() {
  const [headingRef, headingVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="designs" className="bg-[#F4F1EA] overflow-hidden">

      {/* ── Intro bar ── */}
      <div className="bg-[#1C1915] py-20 lg:py-28">
        <div
          ref={headingRef}
          className={`max-w-[90rem] mx-auto px-6 lg:px-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 transition-all duration-[1000ms] ease-out ${headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <span className="text-[#8c7e71] uppercase text-[0.6rem] tracking-[0.35em] font-semibold mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-[#8c7e71]" />
              Our Designs
            </span>
            <h2 className="font-serif text-[#F4F1EA] leading-tight" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 400 }}>
              Versatile Designs<br />
              <em style={{ color: '#D8C3A5', fontStyle: 'italic', fontWeight: 300 }}>for Every Vision.</em>
            </h2>
          </div>
          <p className="text-[#F4F1EA]/50 font-light leading-relaxed max-w-sm text-sm lg:text-right">
            From nature-inspired artistic concepts and Heritage Arts to Grand and Magnificent Artwork — we bring your ideas to life.
          </p>
        </div>
      </div>

      {/* ── Style cards: full-width horizontal strip scroll ── */}
      <div className="divide-y divide-[#D8C3A5]/30">
        {styles.map((style, idx) => {
          const [cardRef, cardVisible] = useIntersectionObserver({ threshold: 0.1 });

          return (
            <div
              key={idx}
              ref={cardRef}
              className={`group grid grid-cols-1 lg:grid-cols-2 transition-all duration-[1000ms] ease-out ${cardVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: `${idx * 120}ms` }}
            >
              {/* Image panel */}
              <div className={`relative aspect-[16/9] lg:aspect-auto lg:min-h-[420px] overflow-hidden ${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                {/* Primary image */}
                <img
                  src={style.images[0]}
                  alt={style.label}
                  className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1915]/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-[#D8C3A5] text-[0.55rem] uppercase tracking-[0.3em] font-semibold bg-[#1C1915]/60 backdrop-blur-sm px-3 py-1.5">
                    {String(idx + 1).padStart(2, '0')} / {String(styles.length).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Text panel */}
              <div className={`flex flex-col justify-center px-10 lg:px-16 py-14 bg-[#F4F1EA] ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <span className="text-[#8c7e71] uppercase text-[0.6rem] tracking-[0.35em] font-semibold mb-4">Style</span>
                <h3
                  className="font-serif text-[#2A2725] mb-5 leading-tight group-hover:text-[#5c5048] transition-colors duration-500"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 400 }}
                >
                  {style.label}
                </h3>
                <p className="text-[#5c5048] font-light leading-relaxed mb-8 text-base">
                  {style.description}
                </p>
                <div className={`w-12 h-px bg-[#8c7e71] transition-all duration-700 group-hover:w-24`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Teaser transition into next section ── */}
      <div className="bg-[#1C1915] py-10 px-6 lg:px-16">
        <div className="max-w-[90rem] mx-auto flex items-center justify-between">
          <p className="text-[#F4F1EA]/40 text-xs uppercase tracking-[0.3em]">Explore how we craft each design ↓</p>
          <a href="#products" className="text-[#D8C3A5] text-xs uppercase tracking-[0.3em] hover:text-[#F4F1EA] transition-colors duration-300">
            Our Products →
          </a>
        </div>
      </div>
    </section>
  );
}

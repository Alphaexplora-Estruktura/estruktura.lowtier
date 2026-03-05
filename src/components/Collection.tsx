
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const collections = [
  {
    number: "01",
    name: "The Royal Crimson",
    description: "Deep, velvety textures echoing the halls of ancient palaces. A foundation that commands absolute authority.",
    image: "https://scontent.fmnl17-7.fna.fbcdn.net/v/t39.30808-6/591836822_1193675172875145_6697429013612354732_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=108&ccb=1-7&_nc_sid=b895b5&_nc_eui2=AeFbJiY3Eax5zdEvMeEOSuAdOUSOAjbf3Ew5RI4CNt_cTHAx18fdbojVLfGkPYSG1YO4Re5qtoR1qzvkmfOsDKYW&_nc_ohc=itZxfVvKyKAQ7kNvwFgdY9o&_nc_oc=AdnKbm6wbpw5KlgmK_YHPQ0gcsqMNCRmhd-pXFeAoJXxuKwLjjfxI7OkYARpkrmOis0&_nc_zt=23&_nc_ht=scontent.fmnl17-7.fna&_nc_gid=B2TC-OchRipJxeGMBB3Tgg&oh=00_AfuLNU0b7bmRpGhXqbKuttHe_WEGc-DhtmX2rrAp90TQrw&oe=69A73731",
    status: "3 Available"
  },
  {
    number: "02",
    name: "Ivory Silk Cascade",
    description: "Luminous and pure, crafted from the most delicate artisan silk. Designed to reflect light like a flawless pearl.",
    image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1200&auto=format&fit=crop",
    status: "Sold Out - Waitlist"
  },
  {
    number: "03",
    name: "Obsidian Gold Weave",
    description: "A bold statement of dark threads interwoven with genuine gold filigree. Unapologetic modern opulence.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop",
    status: "1 Available"
  },
  {
    number: "04",
    name: "The Sovereign Medallion",
    description: "A grand central medallion motif woven in hand-spun Tibetan wool, reminiscent of palace ceiling rosettes.",
    image: "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?q=80&w=1200&auto=format&fit=crop",
    status: "2 Available"
  },
  {
    number: "05",
    name: "Noir Sable",
    description: "Midnight black pile with a subtle gunmetal sheen. Reserved exclusively for estates that demand silent luxury.",
    image: "https://www.daltonhospitalitycarpet.com/wp-content/uploads/2023/11/Essence-III-hotel-carpet-hospitality.jpg",
    status: "Commission Only"
  },
  {
    number: "06",
    name: "Desert Sand Étude",
    description: "Warm earthy neutrals inspired by Arabian sand dunes, woven from raw undyed merino and natural jute.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
    status: "4 Available"
  },
];

export default function Collection() {
  const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="collection" className="py-32 md:py-48 relative bg-[#1F0007] overflow-hidden border-t border-estruktura-bg">
      {/* Smooth gradient transition from About section above */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#1F0007] to-transparent pointer-events-none z-20" />

      {/* Background radial glow & structural grid */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-estruktura-accent/15 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-estruktura-gold"></div>
        <div className="absolute right-1/3 top-0 bottom-0 w-[1px] bg-estruktura-gold"></div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row justify-between items-end mb-24 lg:mb-32 border-b border-estruktura-gold/30 pb-12 transition-all duration-[1500ms] ease-out ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <div className="max-w-3xl">
            <span className="text-estruktura-gold uppercase tracking-[0.4em] text-xs font-semibold mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-estruktura-gold/60"></span>
              The Private Reserve
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] text-estruktura-cream leading-[1.1] drop-shadow-lg">
              The Curator's Vault.
            </h2>
          </div>
          <p className="text-estruktura-cream/80 max-w-sm text-right mt-8 md:mt-0 font-light hidden md:block leading-relaxed tracking-wide">
            Masterpieces currently held in private estates from Dubai to Geneva. Explore the remaining available commissions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {collections.map((item, index) => {
            const [itemRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });

            return (
              <div
                key={index}
                ref={itemRef}
                className={`group relative flex flex-col hover:-translate-y-4 transition-all duration-[1200ms] cursor-pointer ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-24 scale-95'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >

                {/* Structural Numbering Watermark */}
                <div className="absolute -top-16 -right-6 text-[8rem] font-serif text-estruktura-gold/5 z-0 pointer-events-none tracking-tighter group-hover:text-estruktura-gold/10 transition-colors duration-700">
                  {item.number}
                </div>

                {/* Status Badge */}
                <div className="absolute top-6 left-6 z-20 glass-panel px-5 py-3 bg-[#0a0002]/80 backdrop-blur-md border-estruktura-gold/40 shadow-xl">
                  <span className={`text-[10px] uppercase tracking-[0.2em] font-medium ${item.status.includes('Waitlist') ? 'text-estruktura-cream/60' : 'text-estruktura-gold text-glow-gold'}`}>
                    {item.status}
                  </span>
                </div>

                {/* Image Container */}
                <div className="aspect-[4/5] w-full overflow-hidden carpet-texture-overlay border border-estruktura-gold/20 relative shadow-2xl z-10 bg-[#2D000A]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`w-full h-full object-cover transition-all duration-[2.5s] ease-out group-hover:scale-[1.08] ${isVisible ? 'scale-100' : 'scale-110'}`}
                  />

                  {/* Persistent tinted veil — fades out on hover to "reveal" */}
                  <div className="absolute inset-0 bg-[#1F0007]/30 group-hover:bg-transparent transition-colors duration-1000 pointer-events-none" />

                  {/* Hover overlay — curiosity CTA */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F0007]/95 via-[#1F0007]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-start justify-end p-8 gap-2">
                    <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-estruktura-gold">
                      View this commission →
                    </span>
                    <span className="text-[11px] text-estruktura-cream/70 font-light">
                      Availability on request
                    </span>
                  </div>
                </div>

                <div className="pt-8 relative z-10">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-estruktura-gold/60 text-sm font-serif italic">{item.number}</span>
                    <div className="h-[1px] w-8 bg-estruktura-gold/30"></div>
                  </div>
                  <h3 className="text-3xl text-estruktura-cream mb-4 font-serif group-hover:text-estruktura-gold transition-colors duration-500 drop-shadow-md">{item.name}</h3>
                  <p className="text-estruktura-cream/70 font-light leading-relaxed text-md tracking-wide">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-32 text-center">
          <a href="#contact" className="inline-flex items-center gap-4 border border-estruktura-gold/40 px-8 py-5 text-estruktura-gold uppercase tracking-[0.3em] text-xs hover:bg-estruktura-gold hover:text-[#1F0007] transition-all duration-500 hover:shadow-[0_0_30px_rgba(219,190,155,0.3)]">
            View Archived Legacy Collection
          </a>
        </div>
      </div>
    </section>
  );
}

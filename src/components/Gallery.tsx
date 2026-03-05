import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

// Masonry-style grid of carpet texture close-ups for a virtual showcase feel
const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=1200&auto=format&fit=crop",
        alt: "Close-up of hand-knotted silk threads",
        label: "Hand-Knotted Silk",
        size: "tall", // spans 2 rows
    },
    {
        src: "https://frithrugs.co.uk/assets/Uploads/_resampled/FitWyI1NTUiLCIzMzMiXQ/psw429_rugspf63kdavjj_1.jpg",
        alt: "Plush crimson wool pile",
        label: "Mountain Wool Pile",
        size: "wide",
    },
    {
        src: "https://hugrug.co.uk/cdn/shop/files/Sienna-Weave-Lifestyle_01-120x170.jpg?v=1756902066&width=1024",
        alt: "Intricate geometric weave pattern",
        label: "Geometric Weave",
        size: "normal",
    },
    {
        src: "https://image.made-in-china.com/2f0j00jWUckNrMLboq/Custom-Hand-Tufted-Carpet-Rug-Wool-Nylon-Acrylic-Silk-Carpet-Yarn-for-Living-Room-Hotel.jpg",
        alt: "Gold thread filigree detail",
        label: "Gold Filigree",
        size: "wide",
    },
    {
        src: "https://carpetcave.com/wp-content/uploads/2022/10/brown-and-biege-high-pile-carpet-1-960x480.jpg",
        alt: "Deep pile carpet texture",
        label: "Ultra-Plush Pile",
        size: "tall",
    },
    {
        src: "https://m.media-amazon.com/images/I/81OUTkMEx3L._AC_UF894,1000_QL80_.jpg",
        alt: "Artisan weaving process",
        label: "The Artisan's Hand",
        size: "normal",
    },
];

export default function Gallery() {
    const [headerRef, isHeaderVisible] = useIntersectionObserver({ threshold: 0.3 });

    return (
        <section id="gallery" className="py-24 md:py-32 relative bg-estruktura-bg overflow-hidden">

            {/* Top gradient blend from Collection */}
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#1F0007] to-transparent pointer-events-none z-10" />

            <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">

                {/* Section Header */}
                <div ref={headerRef} className={`mb-16 md:mb-20 transition-all duration-[1200ms] ease-out ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`h-[1px] bg-estruktura-gold transition-all duration-1000 ${isHeaderVisible ? 'w-12' : 'w-0'}`}></div>
                        <span className="text-estruktura-gold uppercase tracking-[0.3em] text-xs font-semibold">Virtual Showcase</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <h2 className="text-4xl md:text-5xl lg:text-[4rem] text-estruktura-cream font-serif leading-tight max-w-2xl">
                            Touch the Texture.<br />
                            <span className="text-estruktura-gold/80 italic font-light">Feel the Royalty.</span>
                        </h2>
                        <p className="text-estruktura-cream/60 max-w-xs font-light leading-relaxed text-sm tracking-wide hidden md:block">
                            Each image is a window into the meticulous craft behind every Estruktura piece. Zoom in. Explore. Be convinced.
                        </p>
                    </div>
                </div>

                {/* Masonry / Magazine-style Photo Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[320px]">

                    {/* Image 1 — tall (spans 2 rows) */}
                    <GalleryCard image={galleryImages[0]} className="row-span-2" delay={0} />

                    {/* Image 2 — normal */}
                    <GalleryCard image={galleryImages[1]} className="" delay={100} />

                    {/* Image 3 — normal */}
                    <GalleryCard image={galleryImages[2]} className="" delay={200} />

                    {/* Image 4 — bottom center, wide */}
                    <GalleryCard image={galleryImages[3]} className="col-span-1 md:col-span-1" delay={300} />

                    {/* Image 5 — tall (spans 2 rows on last column) */}
                    <GalleryCard image={galleryImages[4]} className="row-span-2 hidden md:block" delay={150} />

                    {/* Image 6 — bottom left on the last row */}
                    <GalleryCard image={galleryImages[5]} className="" delay={250} />

                </div>

                {/* Bottom tagline */}
                <div className="mt-16 text-center">
                    <p className="text-estruktura-cream/40 font-serif italic text-lg tracking-wide">
                        "Every knot tells a story. Every weave, a thousand hours of devotion."
                    </p>
                </div>

            </div>

            {/* Bottom gradient blend into CTA */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0002] to-transparent pointer-events-none z-10" />
        </section>
    );
}

function GalleryCard({ image, className, delay }: { image: typeof galleryImages[0]; className: string; delay: number }) {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`group relative overflow-hidden cursor-pointer border border-estruktura-gold/10 ${className} transition-all duration-[1400ms] ease-out`}
            style={{
                transitionDelay: `${delay}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.97) translateY(30px)',
            }}
        >
            <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-[1.08]"
            />

            {/* Persistent dark-bottom gradient for label readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0002]/90 via-transparent to-transparent" />

            {/* Label — always visible */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-[10px] uppercase tracking-[0.25em] text-estruktura-gold font-semibold">
                    {image.label}
                </p>
            </div>

            {/* Hover: full overlay with zoom instruction */}
            <div className="absolute inset-0 bg-[#0a0002]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-[9px] uppercase tracking-[0.3em] text-estruktura-cream/80 border border-estruktura-cream/30 px-4 py-2 backdrop-blur-sm">
                    Explore Texture
                </span>
            </div>
        </div>
    );
}

import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const features = [
    {
        icon: "✦",
        title: "Hand-Knotted Construction",
        description: "Each knot is placed by hand, one thread at a time. A single square metre takes up to 80 hours.",
        image: "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=800&auto=format&fit=crop",
    },
    {
        icon: "◈",
        title: "Himalayan Wool & Artisan Silk",
        description: "We source exclusively from high-altitude Tibetan sheep and independent Chinese silk artisans.",
        image: "https://www.stevescarpetcare.net/user/pages/01.articles/how-to-store-your-rug-when-not-in-use/Red-Persian-rug-rolled-up-and-ready-for-storage.jpg",
    },
    {
        icon: "⬡",
        title: "Natural Dye Mastery",
        description: "All pigments are plant and mineral-derived. Colours deepen with age, unlike synthetic alternatives.",
        image: "https://www.alexandersgroup.co.uk/wp-content/uploads/2025/04/rug-and-carpet-storage-1.jpg",
    },
    {
        icon: "❖",
        title: "Bespoke Dimensioning",
        description: "Every commission is designed to the exact architectural dimensions of your space. No standard sizes.",
        image: "https://5.imimg.com/data5/IO/AT/MY-35887793/carpet-roll-1000x1000.jpg",
    },
];

export default function Craftsmanship() {
    const [headingRef, isHeadingVisible] = useIntersectionObserver({ threshold: 0.2 });

    return (
        <section id="craftsmanship" className="py-24 md:py-40 relative overflow-hidden" style={{ backgroundColor: '#120004' }}>

            {/* Background ambient glow */}
            <div className="absolute left-0 top-1/3 w-[500px] h-[500px] bg-estruktura-accent/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[90rem] mx-auto px-6 lg:px-12 relative z-10">

                {/* Heading */}
                <div
                    ref={headingRef}
                    className={`text-center mb-20 md:mb-28 transition-all duration-[1200ms] ease-out ${isHeadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >
                    <span className="text-estruktura-gold uppercase tracking-[0.4em] text-xs font-semibold mb-6 block">The Craft</span>
                    <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] text-estruktura-cream font-serif leading-tight mb-6">
                        Engineered for<br />
                        <span className="text-estruktura-gold italic font-light">Generations.</span>
                    </h2>
                    <p className="text-estruktura-cream/60 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
                        An Estruktura carpet is not manufactured. It is cultivated. Below are the non-negotiable standards every piece must meet before it ever touches your floor.
                    </p>
                </div>

                {/* Feature Grid — alternating layout */}
                <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 gap-px bg-estruktura-gold/10">
                    {features.map((feature, index) => {
                        const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                ref={ref}
                                className={`group relative flex flex-col md:flex-row overflow-hidden bg-[#120004] transition-all duration-[1400ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                                style={{ transitionDelay: `${(index % 2) * 150}ms` }}
                            >

                                {/* Image side */}
                                <div className={`relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-[1.06]"
                                    />
                                    {/* Divider gradient covering edge toward text */}
                                    <div className={`absolute inset-0 ${isEven ? 'bg-gradient-to-r from-transparent to-[#120004]/60' : 'bg-gradient-to-l from-transparent to-[#120004]/60'}`} />
                                </div>

                                {/* Text side */}
                                <div className={`relative flex flex-col justify-center p-8 md:p-12 w-full md:w-1/2 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                                    <div className="text-estruktura-gold/50 text-3xl mb-6">{feature.icon}</div>
                                    <h3 className="text-2xl md:text-3xl text-estruktura-cream font-serif mb-4 leading-tight group-hover:text-estruktura-gold transition-colors duration-500">
                                        {feature.title}
                                    </h3>
                                    <p className="text-estruktura-cream/70 font-light leading-relaxed tracking-wide">
                                        {feature.description}
                                    </p>
                                    {/* Decorative bottom accent line */}
                                    <div className={`h-[1px] bg-estruktura-gold/30 mt-8 transition-all duration-[1500ms] ${isVisible ? 'w-16 opacity-100' : 'w-0 opacity-0'}`} style={{ transitionDelay: '600ms' }} />
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

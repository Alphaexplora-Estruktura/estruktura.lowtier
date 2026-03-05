export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#1a0009' }}
    >
      {/* Background: very dark plant/silhouette texture */}
      <img
        src="https://wallpapercave.com/wp/wp2057640.jpg"
        alt="Textured background"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.18]"
        style={{ filter: 'saturate(0.4) brightness(0.5)' }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(90,8,28,0.45) 0%, rgba(18,0,5,0.85) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

        {/* Tagline */}
        <div className="flex items-center gap-5 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
          <div className="h-px w-10 bg-[#d4b896]/50" />
          <span className="uppercase text-[#d4b896]/90 font-semibold" style={{ fontSize: '0.65rem', letterSpacing: '0.3em' }}>
            Limited to 50 Commissions
          </span>
          <div className="h-px w-10 bg-[#d4b896]/50" />
        </div>

        {/* Headline */}
        <h1
          className="font-serif text-[#f5ecd8] mb-6 leading-tight animate-fade-in-up"
          style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', fontWeight: 400, animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
        >
          Beneath the Feet of the
          <br />
          <span className="font-serif italic" style={{ color: '#dfc1a3', fontWeight: 300 }}>
            Extraordinary.
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="text-[#f5ecd8]/70 font-light leading-relaxed mb-14 animate-fade-in-up"
          style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)', maxWidth: '36rem', letterSpacing: '0.02em', animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}
        >
          The world's most exclusive artisanal carpets. Woven with heritage,
          <br /> destined for legacy.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.8s', opacity: 0, animationFillMode: 'forwards' }}>
          <a
            href="#contact"
            className="group inline-flex items-center justify-center transition-all duration-300"
            style={{
              background: '#d6b897',
              color: '#1a0009',
              padding: '1.1rem 2.5rem',
              minWidth: '17rem',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              fontWeight: 700,
              textTransform: 'uppercase',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#e8ceb2')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#d6b897')}
          >
            Request Private Access
          </a>

          {/* Teaser hook – nudge to scroll and discover */}
          <a
            href="#about"
            className="text-[#d4b896]/60 hover:text-[#d4b896] transition-colors duration-300 flex flex-col items-center gap-3 group"
          >
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>
              Or explore the story behind the craft
            </span>
            {/* Animated pulsing chevron */}
            <svg
              className="w-4 h-4 animate-bounce"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Thin vertical line at the very bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
        <div className="w-px h-14 bg-gradient-to-b from-[#d6b897]/40 to-transparent" />
      </div>
    </section>
  );
}

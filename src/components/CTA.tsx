import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function CTA() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="contact" className="bg-[#1C1915] relative overflow-hidden">

      {/* Decorative top line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D8C3A5]/40 to-transparent" />

      {/* Background texture glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D8C3A5]/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#8c7e71]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[75rem] mx-auto px-6 lg:px-16 py-28 lg:py-36">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >

          {/* Left: Message */}
          <div>
            <span className="text-[#8c7e71] uppercase text-[0.6rem] tracking-[0.35em] font-semibold mb-5 flex items-center gap-3">
              <span className="w-8 h-px bg-[#8c7e71]" />
              Let's Create Together
            </span>
            <h2
              className="font-serif text-[#F4F1EA] leading-tight mt-4 mb-8"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 400 }}
            >
              Ready to Transform<br />
              <em style={{ color: '#D8C3A5', fontStyle: 'italic', fontWeight: 300 }}>Your Space?</em>
            </h2>
            <p className="text-[#F4F1EA]/50 font-light leading-relaxed text-sm mb-10 max-w-sm">
              Tell us about your project — the room, dimensions, and vision. We'll guide you through every step, from design layout to final installation.
            </p>

            <div className="space-y-4">
              {[
                { icon: '📍', text: 'Manila, Philippines' },
                { icon: '📞', text: 'Available for consultations' },
                { icon: '✉️', text: 'Custom quotes provided' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-[#F4F1EA]/40 text-sm">
                  <span>{item.icon}</span>
                  <span className="font-light">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <form className="flex flex-col gap-5" onSubmit={e => e.preventDefault()}>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-5 py-4 bg-[#2A2725] border border-[#F4F1EA]/10 text-[#F4F1EA] placeholder:text-[#F4F1EA]/30 focus:outline-none focus:border-[#D8C3A5]/50 transition-all font-light text-sm"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-5 py-4 bg-[#2A2725] border border-[#F4F1EA]/10 text-[#F4F1EA] placeholder:text-[#F4F1EA]/30 focus:outline-none focus:border-[#D8C3A5]/50 transition-all font-light text-sm"
                  />
                </div>
              </div>

              <input
                type="text"
                placeholder="Project type (e.g. Bedroom - Handtufted, Hotel lobby)"
                className="w-full px-5 py-4 bg-[#2A2725] border border-[#F4F1EA]/10 text-[#F4F1EA] placeholder:text-[#F4F1EA]/30 focus:outline-none focus:border-[#D8C3A5]/50 transition-all font-light text-sm"
              />

              <textarea
                rows={4}
                placeholder="Tell us about your space and what you have in mind..."
                className="w-full px-5 py-4 bg-[#2A2725] border border-[#F4F1EA]/10 text-[#F4F1EA] placeholder:text-[#F4F1EA]/30 focus:outline-none focus:border-[#D8C3A5]/50 transition-all font-light text-sm resize-none"
              />

              <button
                type="button"
                className="w-full px-8 py-5 bg-[#D8C3A5] text-[#1C1915] font-semibold uppercase text-[0.65rem] tracking-[0.3em] hover:bg-[#F4F1EA] transition-all duration-300 mt-2"
              >
                Send Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

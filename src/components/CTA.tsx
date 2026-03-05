
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function CTA() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  return (
    <section id="contact" className="py-40 relative flex items-center justify-center bg-[#0a0002] overflow-hidden">

      {/* 1. Clearer Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1579606032822-8350bc11ebc4?q=80&w=2500&auto=format&fit=crop"
          alt="Luxury Carpet Room"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* 2. Rich Gradients to blend image seamlessly */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0002] via-[#1F0007]/60 to-[#0a0002] z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0002]/80 via-transparent to-[#0a0002]/80 z-0" />

      {/* 3. Glowing Orbs to prevent emptiness */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 w-[600px] h-[600px] bg-estruktura-gold/10 rounded-full blur-[150px] z-0"></div>
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-estruktura-accent/20 rounded-full blur-[120px] z-0"></div>

      <div className="relative z-20 px-6 max-w-[60rem] mx-auto w-full">

        {/* Architectural border frame around context box */}
        <div className={`relative p-1 md:p-3 transition-all duration-[2000ms] ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}>
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-estruktura-gold/60"></div>
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-estruktura-gold/60"></div>
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-estruktura-gold/60"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-estruktura-gold/60"></div>

          {/* Lead Magnet / Opt-in Box */}
          <div
            ref={ref}
            className={`glass-panel bg-[#2D000A]/70 backdrop-blur-3xl border border-estruktura-gold/30 p-12 md:p-24 shadow-[0_40px_100px_rgba(0,0,0,0.8)] text-center w-full`}
          >

            <div className="flex justify-center mb-8">
              <div className={`w-[1px] bg-gradient-to-b from-estruktura-gold to-transparent transition-all duration-1000 delay-500 ${isVisible ? 'h-16' : 'h-0'}`}></div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[4rem] text-estruktura-cream mb-8 leading-[1.05] font-serif tracking-tight drop-shadow-xl inline-block relative">
              Begin Your Commission.
            </h2>

            <p className="text-lg text-estruktura-cream/90 font-light mb-16 max-w-xl mx-auto leading-relaxed tracking-wide shadow-black">
              Estruktura operates strictly by appointment. Connect with our white-glove concierge to discuss the architectural dimensions and aesthetic vision of your space.
            </p>

            <form className="flex flex-col gap-6 w-full mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Principal Name"
                    className="w-full px-6 py-5 bg-[#0a0002]/60 border border-estruktura-gold/30 text-estruktura-cream placeholder:text-estruktura-cream/40 focus:outline-none focus:border-estruktura-gold focus:bg-[#1F0007]/80 transition-all font-light text-md"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-estruktura-gold w-0 group-hover:w-full transition-all duration-500"></div>
                </div>

                <div className="relative group">
                  <input
                    type="text"
                    placeholder="Estate / Project Location"
                    className="w-full px-6 py-5 bg-[#0a0002]/60 border border-estruktura-gold/30 text-estruktura-cream placeholder:text-estruktura-cream/40 focus:outline-none focus:border-estruktura-gold focus:bg-[#1F0007]/80 transition-all font-light text-md"
                  />
                  <div className="absolute bottom-0 left-0 h-[1px] bg-estruktura-gold w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>

              <div className="relative group">
                <input
                  type="email"
                  placeholder="Confidential Email Address"
                  className="w-full px-6 py-5 bg-[#0a0002]/60 border border-estruktura-gold/30 text-estruktura-cream placeholder:text-estruktura-cream/40 focus:outline-none focus:border-estruktura-gold focus:bg-[#1F0007]/80 transition-all font-light text-md"
                />
                <div className="absolute bottom-0 left-0 h-[1px] bg-estruktura-gold w-0 group-hover:w-full transition-all duration-500"></div>
              </div>

              <button
                type="button"
                className="mt-8 w-full px-8 py-6 bg-estruktura-gold text-[#0a0002] font-semibold tracking-[0.3em] uppercase text-sm hover:bg-[#F8F1D6] transition-all duration-500 shadow-[0_0_30px_rgba(219,190,155,0.2)] hover:shadow-[0_0_50px_rgba(219,190,155,0.5)] transform hover:-translate-y-1"
              >
                Schedule Private Consultation
              </button>
            </form>

            <p className="text-[11px] text-estruktura-gold/60 mt-12 tracking-[0.4em] uppercase font-semibold">
              <span className="inline-block w-2 h-2 bg-red-600 rounded-full animate-pulse mr-3"></span>
              Currently curating commissions. Only 3 slots remain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

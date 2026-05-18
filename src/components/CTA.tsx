import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function CTA() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally trigger your backend API or email service
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="bg-estruktura-text relative overflow-hidden">

      {/* Decorative top line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-estruktura-accent/40 to-transparent" />

      {/* Background texture glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-estruktura-accent/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-estruktura-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[75rem] mx-auto px-6 lg:px-16 py-[clamp(5rem,12vw,9rem)]">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >

          {/* Left: Message */}
          <div>
            <span className="text-estruktura-gold uppercase text-sm md:text-[0.75rem] tracking-[0.35em] font-bold mb-5 flex items-center gap-3">
              <span className="w-10 h-px bg-estruktura-gold" />
              Let's Create Together
            </span>
            <h2
              className="font-serif text-estruktura-cream leading-tight mt-4 mb-8"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 500 }}
            >
              Ready to Transform<br />
              <em style={{ color: '#D8C3A5', fontStyle: 'italic', fontWeight: 400 }}>Your Space?</em>
            </h2>
            <p className="text-estruktura-cream/90 font-medium leading-relaxed text-lg md:text-[1.1rem] mb-10 max-w-sm">
              To provide an accurate quotation, a site visit for actual measurement is required. We will bring samples during our visit.
            </p>

            <div className="space-y-4">
              {[
                { icon: '📍', text: 'Manila, Philippines' },
                { icon: '📞', text: 'Available for consultations' },
                { icon: '✉️', text: 'Custom quotes provided' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-estruktura-cream/80 text-base md:text-[1rem]">
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form or Confirmation UI */}
          <div className="bg-estruktura-bg/5 p-6 sm:p-8 border border-estruktura-cream/10 rounded-sm relative min-h-[500px] flex flex-col justify-center">

            {isSubmitted ? (
              /* Confirmation UI */
              <div
                className="text-center flex flex-col items-center justify-center animate-[fadeInUp_0.6s_ease-out_forwards]"
              >
                <div className="w-16 h-16 rounded-full bg-estruktura-accent/20 border border-estruktura-accent flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-estruktura-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-estruktura-cream text-3xl mb-3">Inquiry Sent</h3>
                <p className="text-estruktura-cream/70 text-[1rem] font-light leading-relaxed max-w-sm mb-8">
                  Thank you for reaching out. Our team will review your request and contact you shortly to confirm your site visit.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 min-h-[44px] border border-estruktura-cream/20 text-estruktura-cream/80 uppercase text-[0.65rem] tracking-[0.2em] hover:bg-estruktura-cream/5 transition-all duration-300"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              /* Input Form */
              <div className="animate-[fadeIn_0.5s_ease-out_forwards]">
                <div className="mb-8">
                  <h3 className="font-serif text-estruktura-cream text-2xl mb-2">Say Hello</h3>
                  <p className="text-estruktura-cream/60 text-[0.95rem] font-light">
                    Fill out the details below, and we will get back to you shortly to arrange a visit.
                  </p>
                </div>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        className="w-full px-2 sm:px-5 py-4 bg-transparent border-b border-estruktura-cream/20 text-estruktura-cream placeholder:text-estruktura-cream/40 focus:outline-none focus:border-estruktura-accent transition-all font-medium text-base"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        className="w-full px-2 sm:px-5 py-4 bg-transparent border-b border-estruktura-cream/20 text-estruktura-cream placeholder:text-estruktura-cream/40 focus:outline-none focus:border-estruktura-accent transition-all font-medium text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        className="w-full px-2 sm:px-5 py-4 bg-transparent border-b border-estruktura-cream/20 text-estruktura-cream placeholder:text-estruktura-cream/40 focus:outline-none focus:border-estruktura-accent transition-all font-medium text-base"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ''); }}
                        placeholder="Contact Number"
                        className="w-full px-2 sm:px-5 py-4 bg-transparent border-b border-estruktura-cream/20 text-estruktura-cream placeholder:text-estruktura-cream/40 focus:outline-none focus:border-estruktura-accent transition-all font-medium text-base"
                      />
                    </div>
                  </div>

                  <input
                    type="text"
                    required
                    placeholder="Space Type (e.g., Office, Bedroom)"
                    className="w-full px-2 sm:px-5 py-4 bg-transparent border-b border-estruktura-cream/20 text-estruktura-cream placeholder:text-estruktura-cream/40 focus:outline-none focus:border-estruktura-accent transition-all font-medium text-base"
                  />

                  <input
                    type="datetime-local"
                    required
                    placeholder="Preferred Date & Time"
                    className="w-full px-2 sm:px-5 py-4 bg-transparent border-b border-estruktura-cream/20 text-estruktura-cream placeholder:text-estruktura-cream/40 focus:outline-none focus:border-estruktura-accent transition-all font-medium text-base"
                    style={{ colorScheme: 'dark' }}
                  />

                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your vision for the space..."
                    className="w-full px-2 sm:px-5 py-4 bg-transparent border-b border-estruktura-cream/20 text-estruktura-cream placeholder:text-estruktura-cream/40 focus:outline-none focus:border-estruktura-accent transition-all font-medium text-base resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full px-8 min-h-[44px] bg-estruktura-accent text-estruktura-text font-bold uppercase text-[0.75rem] tracking-[0.3em] hover:bg-estruktura-cream transition-all duration-300 mt-4"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
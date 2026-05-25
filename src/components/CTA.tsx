import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function CTA() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // States para sa form processing
  const [inputHour, setInputHour] = useState<string>('09');
  const [selectedMinute, setSelectedMinute] = useState<string>('00');
  const [selectedPeriod, setSelectedPeriod] = useState<string>('AM');

  const minDate = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 3);
    const pad = (n: number) => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  })();

  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9]/g, '').slice(0, 2);
    setInputHour(val);
  };

  const handleHourBlur = () => {
    let num = parseInt(inputHour, 10);
    if (isNaN(num) || num < 1 || num > 12) {
      setInputHour('12');
    } else {
      setInputHour(String(num).padStart(2, '0'));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // Pagsamahin ang oras para isama sa payload submission
    const combinedTime = `${inputHour}:${selectedMinute} ${selectedPeriod}`;
    formData.append('preferred_time', combinedTime);

    // Palitan ang 'YOUR_ENDPOINT_KEY' ng ibibigay na key mula sa Formspree/Web3Forms
    const endpoint = 'https://submit-form.com/YOUR_ENDPOINT_KEY'; 

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-estruktura-text relative overflow-hidden">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-estruktura-accent/40 to-transparent" />

      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-estruktura-accent/5 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-estruktura-gold/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[75rem] mx-auto px-6 lg:px-16 py-[clamp(4rem,10vw,7.5rem)]">
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 transition-all duration-[1200ms] ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Left Panel */}
          <div>
            <span className="text-estruktura-gold uppercase text-sm md:text-[0.75rem] tracking-[0.35em] font-bold mb-5 flex items-center gap-3">
              <span className="w-10 h-px bg-estruktura-gold" />
              Let's Create Together
            </span>
            <h2 className="font-serif text-estruktura-cream leading-tight mt-4 mb-8" style={{ fontSize: 'clamp(2.3rem, 4.5vw, 4rem)', fontWeight: 500 }}>
              Ready to Transform<br />
              <em style={{ color: '#D8C3A5', fontStyle: 'italic', fontWeight: 400 }}>Your Space?</em>
            </h2>
            <p className="text-estruktura-cream/90 font-light leading-relaxed text-base md:text-[1rem] mb-10 max-w-sm">
              To provide an accurate quotation, a site visit for actual measurement is required. We will bring samples during our visit.
            </p>
            <div className="space-y-4">
              {[
                { icon: '📍', text: '6T Bugallon St. Marikina Heights, Marikina City' },
                { icon: '📞', text: 'Available for site visits & consultations' },
                { icon: '✉️', text: 'Custom estimates tailored to your space' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 text-estruktura-cream/80 text-sm md:text-[0.95rem]">
                  <span className="mt-0.5">{item.icon}</span>
                  <span className="font-light leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel: Form Panel */}
          <div className="bg-[#171513] p-6 sm:p-10 border border-estruktura-cream/10 rounded-sm relative min-h-[550px] flex flex-col justify-center">
            {isSubmitted ? (
              <div className="text-center flex flex-col items-center justify-center animate-[fadeInUp_0.6s_ease-out_forwards]">
                <div className="w-16 h-16 rounded-full bg-estruktura-accent/20 border border-estruktura-accent flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-estruktura-gold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-estruktura-cream text-3xl mb-3">Inquiry Sent</h3>
                <p className="text-estruktura-cream/70 text-[0.95rem] font-light leading-relaxed max-w-sm mb-8">
                  Thank you for reaching out. We will get back to you shortly to confirm your scheduled site visit slot at {inputHour}:{selectedMinute} {selectedPeriod}.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 min-h-[44px] border border-estruktura-cream/20 text-estruktura-cream/80 uppercase text-[0.65rem] tracking-[0.2em] hover:bg-estruktura-cream/5 transition-all duration-300"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <div className="animate-[fadeIn_0.5s_ease-out_forwards]">
                <div className="mb-6">
                  <h3 className="font-serif text-estruktura-cream text-2xl mb-2">Book a Site Visit</h3>
                  <p className="text-estruktura-cream/60 text-sm font-light">
                    Fill out the details below, and we will get back to you shortly to arrange a visit.
                  </p>
                </div>

                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="text" name="first_name"尊 required placeholder="First Name" className="w-full px-1 py-3 bg-transparent border-b border-estruktura-cream/20 text-estruktura-cream placeholder:text-estruktura-cream/30 focus:outline-none focus:border-estruktura-accent text-base font-light" />
                    <input type="text" name="last_name" required placeholder="Last Name" className="w-full px-1 py-3 bg-transparent border-b border-estruktura-cream/20 text-estruktura-cream placeholder:text-estruktura-cream/30 focus:outline-none focus:border-estruktura-accent text-base font-light" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input type="email" name="email" required placeholder="Email Address" className="w-full px-1 py-3 bg-transparent border-b border-estruktura-cream/20 text-estruktura-cream placeholder:text-estruktura-cream/30 focus:outline-none focus:border-estruktura-accent text-base font-light" />
                    <input type="tel" name="contact_number" required onInput={(e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ''); }} placeholder="Contact Number" className="w-full px-1 py-3 bg-transparent border-b border-estruktura-cream/20 text-estruktura-cream placeholder:text-estruktura-cream/30 focus:outline-none focus:border-estruktura-accent text-base font-light" />
                  </div>

                  <input type="text" name="space_type" required placeholder="Space Type (e.g., Office, Living Room)" className="w-full px-1 py-3 bg-transparent border-b border-estruktura-cream/20 text-estruktura-cream placeholder:text-estruktura-cream/30 focus:outline-none focus:border-estruktura-accent text-base font-light" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
                    <div className="flex flex-col gap-2">
                      <label className="text-estruktura-cream/50 text-xs uppercase tracking-wider font-medium">Select Target Date</label>
                      <input type="date" name="target_date" required min={minDate} className="w-full px-2 py-3 bg-transparent border-b border-estruktura-cream/20 text-estruktura-cream focus:outline-none focus:border-estruktura-accent text-base font-light" style={{ colorScheme: 'dark' }} />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-estruktura-cream/50 text-xs uppercase tracking-wider font-medium">Preferred Time</label>
                      <div className="flex items-center gap-2 border-b border-estruktura-cream/20 py-2">
                        <input
                          type="text"
                          required
                          value={inputHour}
                          onChange={handleHourChange}
                          onBlur={handleHourBlur}
                          placeholder="09"
                          className="w-10 text-center bg-transparent text-estruktura-cream focus:outline-none focus:text-estruktura-gold text-base font-light placeholder:text-estruktura-cream/30"
                        />
                        <span className="text-estruktura-cream/40 text-base font-light">:</span>

                        <select
                          value={selectedMinute}
                          onChange={(e) => setSelectedMinute(e.target.value)}
                          className="bg-[#171513] text-estruktura-cream focus:outline-none focus:text-estruktura-gold text-base font-light px-1 cursor-pointer appearance-none"
                        >
                          <option value="00">00</option>
                          <option value="30">30</option>
                        </select>

                        <select
                          value={selectedPeriod}
                          onChange={(e) => setSelectedPeriod(e.target.value)}
                          className="bg-[#171513] text-estruktura-cream focus:outline-none focus:text-estruktura-gold text-base font-light px-1 ml-auto cursor-pointer appearance-none"
                        >
                          <option value="AM">AM</option>
                          <option value="PM">PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <textarea name="requirements" rows={2} required placeholder="Tell us your requirements..." className="w-full px-1 py-3 bg-transparent border-b border-estruktura-cream/20 text-estruktura-cream placeholder:text-estruktura-cream/30 focus:outline-none focus:border-estruktura-accent text-base font-light resize-none mt-2" />

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full px-8 min-h-[48px] bg-estruktura-accent text-estruktura-text font-bold uppercase text-[0.75rem] tracking-[0.3em] hover:bg-estruktura-cream transition-all duration-300 mt-2 shadow-lg shadow-black/20 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending Inquiries...' : 'Confirm Booking Slot'}
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
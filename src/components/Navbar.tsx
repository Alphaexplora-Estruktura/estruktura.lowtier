import { useState, useEffect } from 'react';

const navLinks = [
    { name: 'Designs', href: '#designs' },
    { name: 'Products', href: '#products' },
    { name: 'Process', href: '#craftsmanship' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'More', href: '#more' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled
                    ? 'bg-[#1C1915]/90 backdrop-blur-md border-b border-[#D8C3A5]/10 py-4 shadow-2xl'
                    : 'bg-transparent py-6 md:py-8'
                    }`}
            >
                <div className="max-w-[90rem] mx-auto px-6 lg:px-16 flex justify-between items-center">

                    {/* Logo */}
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group">
                        <img
                            src="/Estruktura-trans.png"
                            alt="Estruktura Logo"
                            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="hidden sm:block w-0.5 h-5 bg-[#D8C3A5] group-hover:h-7 transition-all duration-300" />
                        <span className="hidden sm:block font-serif text-xl text-[#F4F1EA] tracking-[0.2em] uppercase">
                            Estruktura
                        </span>
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-[0.65rem] uppercase tracking-[0.2em] text-[#F4F1EA]/60 hover:text-[#F4F1EA] transition-colors duration-300 group font-medium"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D8C3A5] group-hover:w-full transition-all duration-300" />
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="ml-2 px-5 py-2.5 text-[0.6rem] uppercase tracking-[0.25em] font-semibold text-[#1C1915] bg-[#D8C3A5] hover:bg-[#F4F1EA] transition-all duration-300"
                        >
                            Get a Quote
                        </a>
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden flex flex-col justify-center gap-1.5 w-7 h-7"
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`w-full h-px bg-[#F4F1EA] transition-all duration-300 ${isMobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                        <span className={`h-px bg-[#F4F1EA] transition-all duration-300 ${isMobileOpen ? 'opacity-0 w-0' : 'w-3/4'}`} />
                        <span className={`w-full h-px bg-[#F4F1EA] transition-all duration-300 ${isMobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-[99] bg-[#1C1915]/97 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <nav className="flex flex-col items-center gap-8">
                    {navLinks.map((link, i) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileOpen(false)}
                            className="font-serif text-2xl text-[#F4F1EA]/80 hover:text-[#D8C3A5] transition-colors duration-300 tracking-[0.1em]"
                            style={{
                                opacity: isMobileOpen ? 1 : 0,
                                transform: isMobileOpen ? 'translateY(0)' : 'translateY(16px)',
                                transition: `opacity 0.4s ease-out ${i * 0.07 + 0.2}s, transform 0.4s ease-out ${i * 0.07 + 0.2}s, color 0.3s`,
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setIsMobileOpen(false)}
                        className="mt-6 px-8 py-4 bg-[#D8C3A5] text-[#1C1915] text-[0.7rem] uppercase tracking-[0.3em] font-bold"
                        style={{
                            opacity: isMobileOpen ? 1 : 0,
                            transform: isMobileOpen ? 'translateY(0)' : 'translateY(16px)',
                            transition: `opacity 0.4s ease-out 0.55s, transform 0.4s ease-out 0.55s`,
                        }}
                    >
                        Get a Quote
                    </a>
                </nav>
            </div>
        </>
    );
}

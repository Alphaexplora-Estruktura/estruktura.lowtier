import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll detection for glassmorphism effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Heritage', href: '#about' },
        { name: 'Collections', href: '#collection' },
        { name: 'Concierge', href: '#contact' },
    ];

    return (
        <>
            {/* Desktop & Mobile Header */}
            <header
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out border-b ${isScrolled
                    ? 'bg-[#1F0007]/80 backdrop-blur-md border-estruktura-gold/20 py-4 shadow-2xl'
                    : 'bg-transparent border-transparent py-6 md:py-8'
                    }`}
            >
                <div className="max-w-[90rem] mx-auto px-6 lg:px-12 flex justify-between items-center">

                    {/* Logo */}
                    <a href="#" className="flex items-center gap-3 group">
                        <div className="h-6 w-[2px] bg-estruktura-gold group-hover:h-8 transition-all duration-300"></div>
                        <span className="text-2xl text-estruktura-gold font-serif tracking-widest uppercase drop-shadow-md group-hover:text-glow-gold transition-all duration-300">
                            Estruktura
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="relative text-xs uppercase tracking-[0.2em] text-estruktura-cream/80 hover:text-estruktura-gold transition-colors duration-300 group font-semibold"
                            >
                                {link.name}
                                <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-estruktura-gold group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                            </a>
                        ))}

                        <a
                            href="#contact"
                            className="ml-4 px-6 py-3 border border-estruktura-gold/50 text-estruktura-gold text-xs uppercase tracking-[0.2em] font-medium hover:bg-estruktura-gold hover:text-[#1F0007] transition-all duration-500 hover:shadow-[0_0_20px_rgba(219,190,155,0.3)] backdrop-blur-sm"
                        >
                            Private Access
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col justify-center gap-[6px] w-8 h-8 z-[110]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`w-full h-[1px] bg-estruktura-gold transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                        <span className={`w-3/4 h-[1px] bg-estruktura-gold ml-auto transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-full h-[1px] bg-estruktura-gold transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[#0a0002]/95 backdrop-blur-xl z-[105] transition-all duration-700 ease-in-out md:hidden flex flex-col items-center justify-center ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="absolute top-0 left-0 w-full h-full border-[12px] border-estruktura-bg/20 z-0 pointer-events-none"></div>

                <nav className="flex flex-col items-center gap-10 relative z-10">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl text-estruktura-cream font-serif tracking-widest uppercase relative hover:text-estruktura-gold transition-colors duration-300"
                            style={{
                                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                                opacity: isMobileMenuOpen ? 1 : 0,
                                transition: `all 0.5s ease-out ${index * 0.1 + 0.3}s`
                            }}
                        >
                            <span className="text-estruktura-gold/50 text-sm absolute -left-8 top-1">0{index + 1}</span>
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mt-8 px-8 py-4 bg-estruktura-gold text-[#1F0007] text-xs uppercase tracking-[0.3em] font-bold shadow-[0_0_30px_rgba(219,190,155,0.2)]"
                        style={{
                            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                            opacity: isMobileMenuOpen ? 1 : 0,
                            transition: `all 0.5s ease-out 0.6s`
                        }}
                    >
                        Request Commission
                    </a>
                </nav>
            </div>
        </>
    );
}

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FloatingNavbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "How We Work", href: "/how-we-work" },
        { name: "Demo", href: "/demo" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4"
        >
            <div
                className={`
                    relative flex items-center
                    w-full max-w-[1143px] h-[64.8px]
                    bg-white/80 backdrop-blur-xl
                    rounded-[66px] border border-white/20
                    transition-all duration-300
                    ${scrolled ? "shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] scale-[0.98]" : "shadow-[0_12px_30px_-10px_rgba(0,0,0,0.05)]"}
                `}
            >
                {/* Logo Section - Official SVG Logo */}
                <div className="absolute left-[26.5px] top-[17px] flex items-center">
                    <Link to="/">
                        <img
                            src="/assets/v-logo.svg"
                            alt="after5 logo"
                            className="h-[27px] w-auto object-contain"
                        />
                    </Link>
                </div>

                {/* Navigation Links - Precise 149px left offset */}
                <div className="hidden md:flex absolute left-[149px] top-1/2 -translate-y-[calc(50%+0.4px)] items-center gap-[18px]">
                    {navLinks.map((link) => (
                        link.href.startsWith("/") ? (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="font-inter font-semibold text-[16px] text-primary/70 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </Link>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                className="font-inter font-semibold text-primary/70 text-[16px] hover:text-primary/60 transition-colors"
                            >
                                {link.name}
                            </a>
                        )
                    ))}
                </div>

                {/* CTA Button - Precise right alignment */}
                <div className="flex items-center absolute right-[4px] top-1/2 -translate-y-1/2">
                    <Link to="/contact">
                        <motion.button
                            whileHover="hover"
                            whileTap={{ scale: 0.97 }}
                            initial="rest"
                            animate="rest"
                            variants={{
                                rest: { scale: 1 },
                                hover: { scale: 1.04 }
                            }}
                            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                            className="relative overflow-hidden bg-primary text-white font-inter font-bold w-[173px] h-[56.8px] rounded-[52px] text-[15px] flex items-center justify-center gap-2"
                        >
                            {/* Continuous ambient glow ping */}
                            <motion.span
                                animate={{ scale: [1, 1.6, 1], opacity: [0.25, 0, 0.25] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 rounded-[52px] bg-[#2EFFA1]/30 pointer-events-none"
                            />

                            {/* Green shimmer sweep on hover */}
                            <motion.span
                                variants={{
                                    rest: { x: '-110%', skewX: -15 },
                                    hover: { x: '210%', skewX: -15 }
                                }}
                                transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                                className="absolute inset-0 w-1/2 bg-[#2EFFA1]/50 blur-sm pointer-events-none"
                            />

                            <span className="relative z-10">Book a Call</span>

                            {/* Arrow that slides in on hover */}
                            <motion.svg
                                variants={{
                                    rest: { x: -6, opacity: 0 },
                                    hover: { x: 0, opacity: 1 }
                                }}
                                transition={{ duration: 0.25 }}
                                className="relative z-10 w-4 h-4"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </motion.svg>
                        </motion.button>
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
};

export default FloatingNavbar;

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SECTIONS = [
    { id: 'use-of-the-site', title: 'Use of the Site' },
    { id: 'services', title: 'Services' },
    { id: 'disclaimer', title: 'Disclaimer' },
    { id: 'limitation-of-liability', title: 'Limitation of Liability' },
    { id: 'accuracy-of-materials', title: 'Accuracy of Materials' },
    { id: 'links-to-other-websites', title: 'Links to Other Websites' },
    { id: 'cancellation-and-refunds', title: 'Cancellation and Refunds' },
    { id: 'governing-law', title: 'Governing Law' },
    { id: 'changes-to-these-terms', title: 'Changes to These Terms' },
    { id: 'contact-information', title: 'Contact Information' },
];

const TermsConditions = () => {
    const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            for (const section of SECTIONS) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="bg-[#efefef] min-h-screen font-inter pt-[80px]">
            {/* Hero Section */}
            <section className="relative h-[589px] mx-4 mt-4 bg-black rounded-[20px] overflow-hidden flex items-center justify-center">
                {/* Background Grid */}
                <div
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '88px 88px'
                    }}
                />

                {/* Glow Effect */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-[#36d78e]/10 blur-[120px] rounded-full opacity-40" />
                </div>

                <div className="relative z-10 text-center uppercase tracking-[-3px]">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        className="font-cabinet font-bold text-[64px] md:text-[80px] text-white"
                    >
                        Terms <span className="text-[#36d78e]">& Conditions</span>
                    </motion.h1>
                </div>
            </section>
            {/* Two-Column Layout: Left TOC | Right Content */}
            <div className="max-w-[1411px] mx-auto px-6 lg:px-20 py-24 flex flex-col lg:flex-row gap-16 items-start">

                {/* LEFT: Table of Contents */}
                <div className="lg:w-[260px] shrink-0">
                    <div className="bg-white rounded-[20px] p-8 shadow-sm border border-black/5">
                        <p className="text-[11px] font-inter font-bold text-[#111827]/40 uppercase tracking-[0.2em] mb-6">Contents</p>
                        <nav className="space-y-3">
                            {SECTIONS.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`block w-full text-left font-inter text-[14px] transition-all duration-200 py-1.5 px-3 rounded-lg ${activeSection === section.id
                                        ? 'bg-[#36d78e]/10 text-[#111827] font-bold'
                                        : 'text-[#111827]/50 hover:text-[#111827] hover:bg-black/5'
                                        }`}
                                >
                                    {section.title}
                                </button>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* RIGHT: Legal Text Content */}
                <div className="flex-1 flex flex-col gap-16 text-[#111827] min-w-0">
                    <div className="text-[17px] leading-relaxed opacity-80 space-y-4 font-inter">
                        <p>
                            By accessing or using this website <a href="https://after5.digital" className="underline font-medium">https://after5.digital</a> (the "Site"), you agree to be bound by these Terms and Conditions, all applicable laws, and regulations. If you do not agree with any part of these terms, you must not use this Site.
                        </p>
                        <p>The materials contained on this Site are protected by applicable copyright and trademark laws.</p>
                    </div>

                    <div id="use-of-the-site" className="space-y-6 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">Use of the Site</h2>
                        <div className="space-y-4 text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                            <p>You are granted permission to access and use the Site for personal and business informational purposes only. This permission does not constitute a transfer of ownership of any materials on the Site. You must not:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li className="font-semibold">copy, reproduce, or modify any materials without prior written consent</li>
                                <li className="font-semibold">use the Site or its materials for any unlawful purpose</li>
                                <li className="font-semibold">attempt to gain unauthorised access to any systems or data</li>
                                <li className="font-semibold">interfere with the operation or security of the Site</li>
                            </ul>
                        </div>
                    </div>

                    <div id="services" className="space-y-6 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">Services</h2>
                        <p className="text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                            After5 provides managed enquiry handling and conversion services. Information provided on this Site is for general informational purposes only and does not constitute a binding offer. Any services provided are subject to separate written agreements outlining scope, pricing, and commercial terms.
                        </p>
                    </div>

                    <div id="disclaimer" className="space-y-6 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">Disclaimer</h2>
                        <p className="text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                            The materials on this Site are provided "as is". After5 makes no warranties, expressed or implied, and disclaims all other warranties including, without limitation, implied warranties of merchantability, fitness for a particular purpose, or non-infringement. After5 does not warrant that the Site will be error-free, uninterrupted, or that defects will be corrected.
                        </p>
                    </div>

                    <div id="limitation-of-liability" className="space-y-6 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">Limitation of Liability</h2>
                        <div className="space-y-4 text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                            <p>To the fullest extent permitted by law, After5 shall not be liable for any damages arising out of or related to the use or inability to use this Site, including but not limited to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li className="font-semibold">loss of data</li>
                                <li className="font-semibold">loss of revenue or profit</li>
                                <li className="font-semibold">business interruption</li>
                            </ul>
                            <p>This applies even if After5 has been advised of the possibility of such damages.</p>
                        </div>
                    </div>

                    <div id="accuracy-of-materials" className="space-y-6 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">Accuracy of Materials</h2>
                        <p className="text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                            The materials appearing on this Site may include technical, typographical, or factual errors. After5 does not warrant that any materials on the Site are accurate, complete, or current. Content may be updated or changed at any time without notice.
                        </p>
                    </div>

                    <div id="links-to-other-websites" className="space-y-6 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">Links to Other Websites</h2>
                        <p className="text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                            This Site may contain links to third-party websites. After5 has not reviewed all such sites and is not responsible for their content or practices. The inclusion of any link does not imply endorsement. Use of any linked site is at your own risk.
                        </p>
                    </div>

                    <div id="cancellation-and-refunds" className="space-y-6 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">Cancellation and Refunds</h2>
                        <div className="space-y-4 text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                            <p>Cancellation terms and any applicable refunds are governed by the specific written agreement entered into between After5 and the client.</p>
                            <p>Unless otherwise stated in writing, services are non-refundable once delivery or setup has commenced.</p>
                        </div>
                    </div>

                    <div id="governing-law" className="space-y-6 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">Governing Law</h2>
                        <p className="text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                            These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising in connection with these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                        </p>
                    </div>

                    <div id="changes-to-these-terms" className="space-y-6 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">Changes to These Terms</h2>
                        <p className="text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                            After5 reserves the right to revise these Terms and Conditions at any time without notice. Continued use of the Site following any changes constitutes acceptance of the updated terms. Users are encouraged to review this page periodically.
                        </p>
                    </div>

                    <div id="contact-information" className="space-y-6 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">Contact Information</h2>
                        <div className="space-y-4 text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                            <p>If you have any questions about these Terms and Conditions, contact us at:</p>
                            <div className="space-y-1">
                                <p className="font-semibold">After5 Digital LTD</p>
                                <p>71 - 75 Shelton Street</p>
                                <p>Covent Garden, London, WC2H 9JQ</p>
                                <p className="font-bold mt-2">info@after5.digital</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-[#111827]/10">
                        <p className="text-[15px] font-inter text-[#111827]/40">
                            This terms and conditions page was last updated on January 25th 2026
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsConditions;



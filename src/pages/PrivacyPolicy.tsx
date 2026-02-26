import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SECTIONS = [
    { id: 'information-we-collect', title: 'Information We Collect' },
    { id: 'cookies', title: 'Cookies' },
    { id: 'how-we-use-information', title: 'How We Use Information' },
    { id: 'how-we-protect-information', title: 'How We Protect Information' },
    { id: 'sharing-of-information', title: 'Sharing of Information' },
    { id: 'data-retention', title: 'Data Retention' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'changes-to-this-policy', title: 'Changes to This Policy' },
    { id: 'contact-us', title: 'Contact Us' },
];

const PrivacyPolicy = () => {
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
                        Privacy <span className="text-[#36d78e]">Policy</span>
                    </motion.h1>
                </div>
            </section>

            {/* Two-Column Layout: Left TOC | Right Content */}
            <div className="max-w-[1411px] mx-auto px-6 lg:px-20 py-24 flex flex-col lg:flex-row gap-16 items-start">

                {/* LEFT: Table of Contents */}
                <div className="lg:w-[260px] shrink-0 lg:sticky lg:top-28 h-fit">
                    <div className="bg-white rounded-[20px] p-8 shadow-sm border border-black/5">
                        <p className="text-[11px] font-inter font-bold text-[#111827]/40 uppercase tracking-[0.2em] mb-6">Contents</p>
                        <nav className="space-y-3">
                            {SECTIONS.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => scrollToSection(section.id)}
                                    className={`block w-full text-left font-inter text-[14px] transition-all duration-200 py-1.5 px-3 rounded-lg ${activeSection === section.id
                                        ? 'bg-[#36d78e]/10 text-[#111827] font-bold'
                                        : 'text-[#111827]/50 hover:text-[#111827] hover:bg-black/4'
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
                    <div className="text-lg leading-relaxed opacity-80">
                        <p>
                            After5 digital ("we", "us", "our") operates the website <a href="https://after5.digital" className="underline font-medium">https://after5.digital</a> (the "Site"). This Privacy Policy explains how we collect, use, and protect information when you use our Site or contact us. By using this Site, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use the Site.
                        </p>
                    </div>

                    <div id="information-we-collect" className="space-y-8 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">Information We Collect</h2>
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h3 className="font-inter font-semibold text-[22px]">Personal Information</h3>
                                <div className="space-y-4 text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                                    <p>We may collect personal information when you:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li className="font-semibold">submit a contact or demo form</li>
                                        <li className="font-semibold">request information about our services</li>
                                        <li className="font-semibold">communicate with us via email or other channels</li>
                                    </ul>
                                    <p>This may include:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li className="font-semibold">name</li>
                                        <li className="font-semibold">email address</li>
                                        <li className="font-semibold">phone number</li>
                                        <li className="font-semibold">company name</li>
                                        <li className="font-semibold">information you choose to include in messages or forms</li>
                                    </ul>
                                    <p>Providing personal information is voluntary. If you choose not to provide it, certain services or responses may not be available.</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-inter font-semibold text-[22px]">Non-Personal Information</h3>
                                <div className="space-y-4 text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                                    <p>We may also collect non-personal information when you interact with the Site, including:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li className="font-semibold">browser type</li>
                                        <li className="font-semibold">device and operating system</li>
                                        <li className="font-semibold">IP address</li>
                                        <li className="font-semibold">referral source</li>
                                        <li className="font-semibold">pages visited and usage data</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="cookies" className="space-y-6 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">Cookies</h2>
                        <p className="text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                            Our Site uses cookies to improve functionality and understand how the Site is used. Cookies are small data files stored on your device. You can configure your browser to refuse cookies or notify you when cookies are being used. If cookies are disabled, parts of the Site may not function as intended.
                        </p>
                    </div>

                    <div id="how-we-use-information" className="space-y-6 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">How We Use Information</h2>
                        <div className="space-y-4 text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                            <p>We use collected information to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li className="font-semibold">respond to enquiries and demo requests</li>
                                <li className="font-semibold">communicate with you about our services</li>
                                <li className="font-semibold">improve our systems, messaging, and website experience</li>
                                <li className="font-semibold">operate and secure the Site</li>
                            </ul>
                            <p>We do not sell, rent, or trade personal information.</p>
                        </div>
                    </div>

                    <div id="how-we-protect-information" className="space-y-6 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">How We Protect Information</h2>
                        <p className="text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                            We use appropriate technical and organisational measures to protect personal information against unauthorised access, alteration, disclosure, or destruction. No method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
                        </p>
                    </div>

                    <div id="sharing-of-information" className="space-y-6 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">Sharing of Information</h2>
                        <div className="space-y-4 text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                            <p>We do not sell or rent personal information. We may share information with trusted service providers who support our operations, such as:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li className="font-semibold">hosting and infrastructure providers</li>
                                <li className="font-semibold">analytics services</li>
                                <li className="font-semibold">CRM and communication platforms</li>
                            </ul>
                            <p>These providers are permitted to process information only as necessary to provide their services to us. Information may also be disclosed where required by law or to protect our legal rights.</p>
                        </div>
                    </div>

                    <div id="data-retention" className="space-y-6 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">Data Retention</h2>
                        <div className="space-y-4 text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                            <p>We retain personal information only for as long as necessary to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li className="font-semibold">respond to enquiries</li>
                                <li className="font-semibold">provide our services</li>
                                <li className="font-semibold">comply with legal or regulatory obligations</li>
                            </ul>
                            <p>When information is no longer required, it is securely deleted or anonymised.</p>
                        </div>
                    </div>

                    <div id="your-rights" className="space-y-6 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">Your Rights</h2>
                        <div className="space-y-4 text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                            <p>Depending on applicable data protection laws, you may have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li className="font-semibold">access personal data we hold about you</li>
                                <li className="font-semibold">request correction of inaccurate data</li>
                                <li className="font-semibold">request deletion of personal data</li>
                                <li className="font-semibold">object to or restrict processing</li>
                                <li className="font-semibold">withdraw consent where applicable</li>
                            </ul>
                            <p>Requests can be made using the contact details below.</p>
                        </div>
                    </div>

                    <div id="changes-to-this-policy" className="space-y-6 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">Changes to This Policy</h2>
                        <p className="text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                            We may update this Privacy Policy from time to time. The "Last updated" date will be revised when changes are made. Continued use of the Site after updates are posted constitutes acceptance of the revised policy.
                        </p>
                    </div>

                    <div id="contact-us" className="space-y-6 scroll-mt-28">
                        <h2 className="font-cabinet font-bold text-[36px] md:text-[48px] tracking-[-1.5px] leading-tight">Contact Us</h2>
                        <div className="space-y-4 text-[17px] leading-relaxed text-[#111827]/80 font-inter">
                            <p>If you have any questions about this Privacy Policy or our data practices, contact us at:</p>
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
                            This privacy policy page was last updated on January 25th 2026
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;



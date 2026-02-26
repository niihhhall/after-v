import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="footer" className="bg-[#EFEFEF] px-4 pt-4 pb-4">
            <div className="bg-[#0A0A0A] text-white rounded-[20px] overflow-hidden">

                <div className="max-w-[1411px] mx-auto px-10 py-20">
                    <div className="flex flex-col lg:flex-row justify-between gap-20 mb-24">
                        {/* Brand Column */}
                        <div className="lg:max-w-[280px] space-y-8">
                            <img
                                src="/assets/footer-logo.svg"
                                alt="After5 Logo"
                                className="h-12 w-auto object-contain opacity-90"
                            />
                            <p className="font-inter text-[15px] text-white/50 leading-relaxed">
                                Revolutionizing sales processes through intelligent AI agents.
                                Built for the next era of business.
                            </p>
                        </div>

                        {/* Links Grid */}
                        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">
                            {/* Product */}
                            <div className="space-y-6">
                                <h4 className="font-inter font-bold text-[13px] text-accent-green uppercase tracking-widest">Product</h4>
                                <ul className="space-y-4">
                                    <li><a href="#how-it-works" className="font-inter text-[15px] text-white/60 hover:text-white transition-all">How It Works</a></li>
                                    <li><Link to="/demo" className="font-inter text-[15px] text-white/60 hover:text-white transition-all">Test the Demo</Link></li>
                                </ul>
                            </div>

                            {/* Company */}
                            <div className="space-y-6">
                                <h4 className="font-inter font-bold text-[13px] text-accent-green uppercase tracking-widest">Company</h4>
                                <ul className="space-y-4">
                                    <li><a href="#" className="font-inter text-[15px] text-white/60 hover:text-white transition-all">About</a></li>
                                    <li><Link to="/contact" className="font-inter text-[15px] text-white/60 hover:text-white transition-all">Contact</Link></li>
                                </ul>
                            </div>

                            {/* Legal */}
                            <div className="space-y-6">
                                <h4 className="font-inter font-bold text-[13px] text-accent-green uppercase tracking-widest">Legal</h4>
                                <ul className="space-y-4">
                                    <li><Link to="/privacy-policy" className="font-inter text-[15px] text-white/60 hover:text-white transition-all">Privacy Policy</Link></li>
                                    <li><Link to="/terms-and-conditions" className="font-inter text-[15px] text-white/60 hover:text-white transition-all">Terms & Conditions</Link></li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div className="space-y-6">
                                <h4 className="font-inter font-bold text-[13px] text-accent-green uppercase tracking-widest">Contact us</h4>
                                <ul className="space-y-4">
                                    <li>
                                        <a href="mailto:info@after5.digital" className="font-inter text-[15px] text-white hover:text-accent-green transition-colors">
                                            info@after5.digital
                                        </a>
                                    </li>
                                    <li className="font-inter text-[14px] text-white/40 leading-[1.8] mt-2">
                                        71–75 Shelton Street<br />
                                        Covent Garden, London<br />
                                        WC2H 9JQ, United Kingdom
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Follow Column */}
                        <div className="lg:w-auto">
                            <div className="space-y-6">
                                <h4 className="font-inter font-bold text-[13px] text-accent-green uppercase tracking-[0.1em] text-left lg:text-right">Follow us</h4>
                                <div className="flex gap-3 lg:justify-end">
                                    <SocialButton Icon={Linkedin} href="https://www.linkedin.com/company/after5-digital" />
                                    <SocialButton Icon={Instagram} href="https://www.instagram.com/after5.digital/" />
                                    <SocialButton Icon={Facebook} href="https://www.facebook.com/profile.php?id=61586523421302" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="font-inter text-[14px] text-white/30">
                            © 2026 — AFTER5 DIGITAL LTD. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialButton = ({ Icon, href }: { Icon: any; href: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[50px] h-[50px] rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all text-white"
    >
        <Icon size={20} />
    </a>
);

export default Footer;

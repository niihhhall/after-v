import { motion } from "framer-motion";

const MobileFrame = () => {
    return (
        <section id="mobile-frame" className="pt-12 pb-24 overflow-hidden flex flex-col items-center">
            <div className="max-w-[1411px] mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    className="relative z-10 w-full flex justify-center"
                >
                    {/* Desktop View SVG */}
                    <img
                        src="/assets/mobile-frame.svg"
                        alt="After5 Experience Desktop"
                        className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.05)] hidden lg:block"
                    />
                    
                    {/* Mobile/Tablet View SVG */}
                    <div className="block lg:hidden w-full">
                        {/* Phone + Stats Card Container */}
                        <div className="relative mx-auto max-w-[400px]">
                            <img
                                src="/assets/frame-mobile.svg"
                                alt="After5 Experience Mobile"
                                className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.05)]"
                            />
                            
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                                whileInView={{ 
                                    opacity: 1, 
                                    scale: 1, 
                                    x: 0,
                                    y: [0, -10, 0]
                                }}
                                viewport={{ once: true }}
                                transition={{ 
                                    opacity: { delay: 0.5, duration: 0.6 },
                                    scale: { delay: 0.5, duration: 0.6 },
                                    x: { delay: 0.5, duration: 0.6 },
                                    y: { 
                                        repeat: Infinity, 
                                        duration: 4, 
                                        ease: "easeInOut",
                                        delay: 1.1 
                                    }
                                }}
                                className="absolute bottom-2 -right-4 md:-right-8 bg-[#36d78e] p-6 md:p-10 rounded-[20px] shadow-2xl text-[#111827] border border-white/10 z-20"
                            >
                                <div className="flex flex-col gap-1 md:gap-2">
                                    <h4 className="font-cabinet font-bold text-[40px] md:text-[72px] leading-[0.9] tracking-tight">
                                        +98%
                                    </h4>
                                    <div className="mt-2 space-y-0.5">
                                        <p className="font-inter font-bold text-[11px] md:text-[16px] leading-tight text-[#111827]">
                                            open rate for WhatsApp messages
                                        </p>
                                        <p className="font-inter font-medium text-[10px] md:text-[15px] leading-tight text-[#111827]/80">
                                            and <span className="font-bold text-[#111827]">80%</span> of users check the app daily
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Mobile Feature List */}
                        <div className="mt-24 flex flex-col items-center w-full px-4 text-center">
                            {/* Multi-Channel Badge */}
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 shadow-lg flex items-center justify-center w-max mb-10"
                            >
                                <span className="text-white font-inter font-medium text-[13px] md:text-[15px] tracking-tight whitespace-nowrap">
                                    MULTI-CHANNEL
                                </span>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-white font-cabinet font-bold text-[36px] md:text-[54px] leading-tight tracking-tight mb-8"
                            >
                                Why WhatsApp, <br className="hidden" /> Email, and SMS?
                            </motion.h2>

                            {/* Intro Text */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="max-w-[340px] md:max-w-[600px] mb-16"
                            >
                                <p className="text-[#9CA3AF] font-inter text-[15px] md:text-[18px] leading-relaxed">
                                    <span className="text-white">Trust. Relevance. Practicality.</span> <br />
                                    The channel is dictated by who is the <span className="text-white font-bold">ICP</span>, which <span className="text-white font-bold">channel</span> did they enquire on and what <span className="text-white font-bold">country</span> are they in. <br />
                                    <span className="text-white font-bold mt-4 inline-block">Introductions become relevant, rather than random.</span>
                                </p>
                            </motion.div>

                            {/* Channel List */}
                            <div className="flex flex-col gap-10 w-full max-w-[400px] md:max-w-[600px] text-left">
                                {[
                                    {
                                        title: "WHATSAPP",
                                        desc: (
                                            <>
                                                High trust. High open rates. Ideal for genuine conversations and <span className="text-white font-bold">trust worthy qualification</span>.
                                            </>
                                        )
                                    },
                                    {
                                        title: "EMAIL",
                                        desc: (
                                            <>
                                                Best for <span className="text-white font-bold">detailed communication</span>. We make sure SEO-driven email leads are handled properly.
                                            </>
                                        )
                                    },
                                    {
                                        title: "SMS",
                                        desc: (
                                            <>
                                                Fast, direct, and hard to ignore. Perfect secondary channel or primary for the <span className="text-white font-bold">US / AUS markets</span>.
                                            </>
                                        )
                                    }
                                ].map((item, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.6 + (idx * 0.2) }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className="mt-1 shrink-0">
                                            <div className="w-8 h-8 rounded-full bg-[#36d78e] flex items-center justify-center">
                                                <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 5.5L4.66667 9.5L13 1.5" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-white font-inter font-bold text-[18px] md:text-[22px] tracking-wide">
                                                {item.title}
                                            </h3>
                                            <p className="text-[#9CA3AF] font-inter text-[14px] md:text-[16px] leading-[1.6]">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MobileFrame;

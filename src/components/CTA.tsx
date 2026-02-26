import { motion } from "framer-motion";

const CTA = () => {
    return (
        <div id="cta" className="bg-[#EFEFEF] px-4 pt-4 pb-0">
            <section className="bg-primary relative overflow-hidden rounded-[20px]">

                {/* Background Glow */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-0 overflow-hidden">
                    <img
                        src="/assets/cta-glow.svg"
                        alt=""
                        className="w-full h-full object-cover lg:scale-125 transform -translate-x-1/4 -translate-y-1/4"
                    />
                </div>

                {/* Background decorative dots */}
                <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: '48px 48px'
                    }}
                />

                <div className="max-w-[1411px] mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
                        {/* Left: Content Area */}
                        <div className="flex flex-col gap-[30px] items-start lg:w-1/2">
                            {/* Title & Descriptions */}
                            <div className="space-y-[24px]">
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="font-cabinet font-bold text-[52px] text-white tracking-[-1.56px] leading-[1.1] md:leading-[62px] capitalize"
                                >
                                    Ready to Turn More leads into revenue?
                                </motion.h2>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="font-inter text-[20px] text-white/80 tracking-[-0.4px] leading-[1.5] space-y-1"
                                >
                                    <p>Less leads missed. Less time spent chasing and follow ups always guaranteed!</p>
                                    <p>No brainer right?</p>
                                    <p>
                                        <span className="font-bold text-white">Test It Out</span> and <span className="font-bold text-white">See How It Performs</span>.
                                    </p>
                                </motion.div>
                            </div>

                            {/* Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col sm:flex-row gap-[24px] items-center pt-4"
                            >
                                <button
                                    className="h-[72.66px] px-[20.76px] py-[23.35px] rounded-[90px] flex items-center gap-[10.38px] transition-all hover:scale-105"
                                    style={{
                                        backgroundImage: "linear-gradient(99.06deg, rgba(255, 255, 255, 0.13) 6%, rgba(255, 255, 255, 0.24) 90.8%)",
                                        border: "1px solid rgba(255, 255, 255, 0.1)"
                                    }}
                                >
                                    <span className="font-inter font-bold text-[19.46px] text-white capitalize leading-none pt-0.5">
                                        Test the Demo
                                    </span>
                                    <div className="w-[51.9px] h-[51.9px] bg-accent-green rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-accent-green/20">
                                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                                            <path d="M18 10L0 20V0L18 10Z" fill="#000000" />
                                        </svg>
                                    </div>
                                </button>

                                <button className="bg-white h-[72.66px] px-[20.76px] py-[23.35px] rounded-[90px] font-inter font-bold text-[19.46px] text-primary flex items-center justify-center hover:scale-105 transition-transform">
                                    Book A Call With Us
                                </button>
                            </motion.div>
                        </div>

                        {/* Right: Mockups Area — natural flex layout, no clipping */}
                        <div className="lg:w-1/2 flex items-end justify-center lg:justify-end gap-4 pt-8">
                            {/* Mobile 1 (Main, Taller) */}
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                                className="w-[48%] max-w-[240px] shrink-0"
                            >
                                <img
                                    src="/assets/mobile-1.svg"
                                    alt="Dashboard View 1"
                                    className="w-full h-auto drop-shadow-2xl"
                                />
                            </motion.div>

                            {/* Mobile 2 (Secondary, offset upward for stagger) */}
                            <motion.div
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
                                className="w-[42%] max-w-[200px] shrink-0 opacity-90"
                            >
                                <img
                                    src="/assets/mobile-2.svg"
                                    alt="Dashboard View 2"
                                    className="w-full h-auto drop-shadow-xl"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CTA;

import { motion } from "framer-motion";
import { AppWindow, MousePointer2 } from "lucide-react";

const CustomIcon = () => (
    <div className="relative w-8 h-8">
        <AppWindow size={28} className="text-primary absolute top-0 left-0" strokeWidth={1.5} />
        <MousePointer2 size={18} className="text-primary absolute bottom-[-4px] right-[4px] fill-primary" strokeWidth={2} />
    </div>
);

const WhatWeDo = () => {
    return (
        <section className="py-24 max-w-[1411px] mx-auto px-6 lg:px-20 bg-background flex flex-col items-center overflow-hidden">

            {/* Top Centered Headline */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center gap-6 mb-16 md:mb-24 text-center max-w-[900px]"
            >
                {/* Badge */}
                <div className="inline-flex px-[18px] py-[10px] bg-[#2EFFA1]/15 text-primary rounded-[100px] font-inter font-medium text-[16px] tracking-[-0.3px]">
                    What We Do
                </div>

                {/* Headline */}
                <h2 className="font-cabinet font-bold text-[48px] md:text-[56px] lg:text-[68px] text-primary leading-[1.05] tracking-[-1.5px]">
                    We are the seamless layer that guarantees consistency
                </h2>
            </motion.div>

            {/* Bottom Row: UI Visual & Cards */}
            <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* Left Side Custom Component UI */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full lg:w-1/2 flex justify-start"
                >
                    <div className="w-full max-w-[580px] bg-[#2EFFA1]/30 rounded-[28px] p-10 md:p-14 flex flex-col items-center gap-14 border border-[#2EFFA1]/20">

                        {/* Top Chat Bubble */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="w-full max-w-[340px] bg-[#1e2029] rounded-[8px] p-[16px] flex justify-between items-start shadow-[0_20px_40px_rgba(0,0,0,0.12)] cursor-default"
                        >
                            <div className="flex items-center gap-[14px]">
                                <img
                                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
                                    alt="Thomas A."
                                    className="w-[38px] h-[38px] rounded-full object-cover border border-[#303340]"
                                />
                                <div className="flex flex-col">
                                    <span className="text-white font-inter font-bold text-[14px] tracking-tight">Thomas A.</span>
                                    <div className="flex items-center gap-[8px] mt-0.5">
                                        <span className="text-white/50 font-inter text-[12px] tracking-[-0.1px]">Says hi to you</span>
                                        <div className="w-[18px] h-[18px] rounded-full bg-[#2EFFA1] flex items-center justify-center">
                                            <span className="text-[#1a1c29] font-bold text-[10px]">1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-white/30 font-inter font-medium text-[11px] mt-0.5">
                                18:23
                            </div>
                        </motion.div>

                        {/* Conversation Flow Chart Card */}
                        <motion.div
                            whileHover={{ scale: 1.01 }}
                            className="w-full bg-background rounded-[6px] p-7 md:p-9 shadow-[0_25px_50px_rgba(0,0,0,0.08)] relative border border-black/5"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="font-inter font-bold text-[20px] text-[#111] tracking-[-0.4px]">Conversation Flow</h3>
                                <div className="flex gap-[16px] text-[14px] font-inter font-bold text-black/20">
                                    <span className="hover:text-black cursor-pointer transition-colors">D</span>
                                    <span className="hover:text-black cursor-pointer transition-colors">W</span>
                                    <span className="hover:text-black cursor-pointer transition-colors">M</span>
                                    <span className="hover:text-black cursor-pointer transition-colors">Y</span>
                                    <span className="text-black cursor-pointer">All</span>
                                </div>
                            </div>

                            {/* Graph Area */}
                            <div className="relative w-full h-[160px] mt-2 border-b border-black-[0.03]">

                                {/* SVG Chart Background Area */}
                                <svg viewBox="0 0 500 180" className="w-full h-full" preserveAspectRatio="none">
                                    {/* Light green base area */}
                                    <path d="M0 180 L0 80 L30 140 L70 120 L80 120 L110 170 L140 130 L180 160 L220 140 L230 150 L250 110 L280 115 L300 160 L320 120 L350 100 L370 110 L390 100 L420 50 L450 50 L480 10 L500 5 L500 180 Z" fill="#2EFFA1" fillOpacity="0.2" />

                                    {/* Slightly darker highlighted overlay from 'Aug' onwards */}
                                    <path d="M280 180 L280 115 L300 160 L320 120 L350 100 L370 110 L390 100 L420 50 L450 50 L480 10 L500 5 L500 180 Z" fill="#2EFFA1" fillOpacity="0.4" />

                                    {/* Line path overlay (approximate match to your graph shape) */}
                                    <path d="M0 80 L30 140 L70 120 L80 120 L110 170 L140 130 L180 160 L220 140 L230 150 L250 110 L280 115 L300 160 L320 120 L350 100 L370 110 L390 100 L420 50 L450 50 L480 10 L500 5" fill="none" stroke="#e0e0e0" strokeWidth="2.5" strokeLinejoin="round" />
                                </svg>

                                {/* Line connecting graph to tooltip */}
                                <div className="absolute top-[38%] right-[32%] w-px h-[45px] bg-[#d0d0d0]"></div>
                                {/* Point on the graph line */}
                                <div className="absolute top-[61%] right-[31.4%] w-[8px] h-[8px] bg-[#e6e6e6] rounded-full border-2 border-white z-10 shadow-sm"></div>

                                {/* Tooltip Overlay */}
                                <div className="absolute top-[2%] right-[15%] min-w-[145px] bg-[#2EFFA1]/10 border-l-[3px] border-[#2EFFA1] py-[10px] px-[14px]">
                                    <div className="font-inter font-bold text-[12px] text-black tracking-[-0.2px]">2:45 PM</div>
                                    <div className="font-inter font-semibold text-[12px] text-black leading-[1.3] tracking-[-0.2px] mt-1">
                                        13 conversations<br />qualified
                                    </div>
                                </div>

                            </div>

                            {/* X Axis Labels */}
                            <div className="flex justify-between items-center text-[10px] font-inter font-bold text-black/30 mt-5 px-1 tracking-wider uppercase">
                                <span>Feb</span>
                                <span>Mar</span>
                                <span>Apr</span>
                                <span>May</span>
                                <span>Jun</span>
                                <span>Jul</span>
                                <span>Aug</span>
                                <span>Sep</span>
                                <span>Oct</span>
                                <span>Nov</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
                {/* Right Side: Cards */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-col gap-6 w-full lg:w-1/2 lg:max-w-[540px]"
                >
                    {/* Card 1 */}
                    <div className="bg-background rounded-[20px] p-10 flex flex-col gap-10 shadow-[0_8px_40px_rgba(0,0,0,0.03)] border border-black/5">
                        <CustomIcon />
                        <p className="font-inter text-[18px] md:text-[20px] text-primary tracking-[-0.2px]">
                            We <span className="font-extrabold text-primary">Do NOT</span> generate leads.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-background rounded-[20px] p-10 flex flex-col gap-10 shadow-[0_8px_40px_rgba(0,0,0,0.03)] border border-black/5">
                        <CustomIcon />
                        <p className="font-inter text-[18px] md:text-[20px] text-primary tracking-[-0.2px]">
                            We <span className="font-extrabold text-primary">DO NOT</span> replace sales teams.
                        </p>
                    </div>

                    {/* Card 3 (Green) */}
                    <div className="bg-[#2EFFA1] rounded-[20px] p-10 flex flex-col gap-8 shadow-[0_20px_50px_rgba(46,255,161,0.3)]">
                        {/* Custom Dark Icon for Green Card */}
                        <div className="relative w-8 h-8">
                            <AppWindow size={28} className="text-primary absolute top-0 left-0" strokeWidth={1.5} />
                            <MousePointer2 size={18} className="text-primary absolute bottom-[-4px] right-[4px] fill-primary" strokeWidth={2} />
                        </div>
                        <p className="font-inter text-[18px] md:text-[20px] text-primary leading-[1.4] tracking-[-0.2px]">
                            We make sure the leads you already have <span className="font-extrabold text-primary">stay warm, get qualified</span> and <span className="font-extrabold text-primary">turn into revenue.</span>
                        </p>
                    </div>
                </motion.div>

            </div>
        </section >
    );
};

export default WhatWeDo;

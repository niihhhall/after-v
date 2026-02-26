import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, MousePointer2, Clock, Zap } from "lucide-react";
import { CountUp } from "./CountUp";

const SpeedToLead = () => {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    const stats = [
        {
            number: 391,
            suffix: "%",
            label: <>Conversions increase with <span className="font-bold">responses under one minute</span>.</>,
            icon: TrendingUp,
        },
        {
            number: 21,
            suffix: "x",
            label: <>Advantage for the <span className="font-bold">first responder</span> in competitive markets</>,
            icon: MousePointer2,
        },
        {
            number: 14,
            suffix: "h",
            label: <>Average <span className="font-bold">follow up time</span> tested across 114 b2b enterprises</>,
            icon: Clock,
        },
        {
            number: 24,
            suffix: "/7",
            label: <>When <span className="font-bold">buyers</span> actually <span className="font-bold">enquire</span></>,
            icon: Zap,
        }
    ];

    return (
        <section id="speed-to-lead" className="py-32 bg-primary overflow-hidden relative">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '48px 48px'
                }}
            />

            <div className="max-w-[1411px] mx-auto px-6 relative z-10 w-full space-y-[80px]">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center gap-[28px]">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-[rgba(46,255,161,0.11)] px-[11px] py-[9px] rounded-[100px] inline-flex items-center justify-center font-inter font-medium text-[16px] text-white tracking-[-0.4px]"
                    >
                        Why Speed-to-Lead Wins
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-cabinet font-bold text-[54px] text-white leading-[1.1] tracking-[-1.5px] max-w-[1033px]"
                    >
                        Speed is the difference between a lead and a lost opportunity.
                    </motion.h2>
                </div>

                {/* Statistics Accordion Grid */}
                <div className="flex flex-col lg:flex-row gap-[21px] h-auto lg:h-[477px] w-full">
                    {stats.map((stat, i) => {
                        const isHovered = hoveredIndex === i;
                        
                        return (
                            <motion.div
                                key={i}
                                onMouseEnter={() => setHoveredIndex(i)}
                                animate={{ 
                                    flex: isHovered ? 1.5 : 0.8,
                                    backgroundColor: isHovered ? "#2EFFA1" : "rgba(255, 255, 255, 0.03)"
                                }}
                                transition={{ 
                                    flex: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
                                    backgroundColor: { duration: 0.4 }
                                }}
                                className={`
                                    relative rounded-[30px] p-[40px] overflow-hidden flex flex-col justify-between 
                                    border transition-colors duration-500
                                    ${isHovered ? "border-transparent text-primary" : "border-white/10 text-white"}
                                `}
                            >
                                {/* Grid for expanded card */}
                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div 
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 0.15 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 z-0 pointer-events-none"
                                            style={{
                                                backgroundImage: `linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)`,
                                                backgroundSize: '40px 40px'
                                            }}
                                        />
                                    )}
                                </AnimatePresence>

                                <div className="relative z-10 space-y-[48px]">
                                    <div className={`
                                        w-[56px] h-[56px] rounded-full flex items-center justify-center transition-all duration-500
                                        ${isHovered ? "bg-white/20 text-primary shadow-lg border border-white/30" : "bg-accent-green text-primary shadow-[0_0_20px_rgba(46,255,161,0.3)]"}
                                    `}>
                                        <stat.icon size={32} strokeWidth={1.5} />
                                    </div>

                                    <motion.span 
                                        animate={{ fontSize: isHovered ? "118px" : "64px" }}
                                        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                                        className="block font-cabinet font-bold leading-none tracking-tighter transition-colors duration-500"
                                    >
                                        <CountUp to={stat.number} suffix={stat.suffix} />
                                    </motion.span>
                                </div>

                                <motion.p 
                                    animate={{ 
                                        fontSize: isHovered ? "24px" : "17px",
                                        opacity: isHovered ? 1 : 0.8
                                    }}
                                    className="relative z-10 font-inter font-medium leading-snug transition-colors duration-500"
                                >
                                    {stat.label}
                                </motion.p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SpeedToLead;

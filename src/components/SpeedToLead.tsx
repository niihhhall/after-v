import { motion } from "framer-motion";
import { TrendingUp, MousePointer2, Clock, Zap } from "lucide-react";
import { CountUp } from "./CountUp";

const SpeedToLead = () => {
    const stats = [
        {
            number: 21,
            suffix: "x",
            label: <>Advantage for the first responder in <span className="font-normal opacity-70">competitive markets</span></>,
            icon: MousePointer2,
            gradient: "linear-gradient(135deg, rgba(46, 255, 161, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)"
        },
        {
            number: 14,
            suffix: "h",
            label: <>Average follow up time tested across <span className="font-normal opacity-70">114 b2b enterprises</span></>,
            icon: Clock,
            gradient: "linear-gradient(135deg, rgba(46, 255, 161, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)"
        },
        {
            number: 24,
            suffix: "/7",
            label: <>When <span className="font-bold">buyers</span> actually <span className="font-bold">enquire</span></>,
            icon: Zap,
            gradient: "linear-gradient(135deg, rgba(46, 255, 161, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)"
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

                {/* Statistics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-[21px]">
                    {/* Primary Highlight Card: 391% */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        className="bg-accent-green h-[477px] rounded-[30px] p-[40px] relative overflow-hidden group flex flex-col justify-between"
                    >
                        {/* Corner Gradient */}
                        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-linear-to-bl from-white/20 to-transparent rounded-full -mr-20 -mt-20 blur-3xl opacity-50" />

                        {/* Visual Grid for Highlight Card */}
                        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                            style={{
                                backgroundImage: `linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)`,
                                backgroundSize: '40px 40px'
                            }}
                        />

                        <div className="relative z-10 space-y-[48px]">
                            <div className="w-[56px] h-[56px] rounded-full bg-white/20 flex items-center justify-center text-primary shadow-lg border border-white/30">
                                <TrendingUp size={32} strokeWidth={1.5} />
                            </div>
                            <span className="block font-cabinet font-bold text-[118px] text-primary leading-none tracking-tighter">
                                <CountUp to={391} suffix="%" />
                            </span>
                        </div>

                        <p className="relative z-10 font-inter font-medium text-[24px] text-primary leading-snug max-w-[421px]">
                            <span className="font-bold">Conversions increase</span> with responses under one <span className="font-normal opacity-70">minute</span>.
                        </p>
                    </motion.div>

                    {/* Secondary Stat Cards */}
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="h-[477px] rounded-[30px] p-[40px] relative overflow-hidden border border-white/10 flex flex-col justify-between group hover:border-accent-green/50 transition-all duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"
                            style={{ background: stat.gradient }}
                        >
                            {/* Corner Gradient Hover Effect */}
                            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-accent-green/10 blur-[60px] rounded-full -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="space-y-[48px] relative z-10">
                                <div className="w-[56px] h-[56px] rounded-full bg-accent-green border border-white/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(46,255,161,0.3)] group-hover:scale-110 transition-transform duration-500">
                                    <stat.icon size={32} strokeWidth={1.5} />
                                </div>
                                <span className="block font-cabinet font-bold text-[64px] text-white leading-none tracking-tighter group-hover:text-accent-green transition-colors duration-500">
                                    <CountUp to={stat.number} suffix={stat.suffix} delay={0.2} />
                                </span>
                            </div>

                            <p className="font-inter font-medium text-[17px] text-white/90 leading-tight relative z-10">
                                <span className="font-bold">{stat.label}</span>
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpeedToLead;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Filter, CalendarCheck, MousePointer2, Zap } from "lucide-react";

const steps = [
    {
        title: "Catch",
        description: "Our AI immediately identifies new leads across all channels, capturing metadata and intent.",
        icon: Search,
        color: "bg-[#3B82F6]",
        shadow: "shadow-[0_0_40px_rgba(59,130,246,0.4)]",
        accent: "text-[#3B82F6]",
    },
    {
        title: "Qualify",
        description: "Automated, human-like conversations determine if a lead meets your specific success criteria.",
        icon: Filter,
        color: "bg-[#A855F7]",
        shadow: "shadow-[0_0_40px_rgba(168,85,247,0.4)]",
        accent: "text-[#A855F7]",
    },
    {
        title: "Handoff",
        description: "Qualified leads are booked directly into your sales team's calendar or CRM.",
        icon: CalendarCheck,
        color: "bg-[#22C55E]",
        shadow: "shadow-[0_0_40px_rgba(34,197,94,0.4)]",
        accent: "text-[#22C55E]",
    },
];

const metrics = [
    { label: "Availability", human: "9-5 Mon-Fri", ai: "24/7/365", icon: CalendarCheck },
    { label: "Response Time", human: "15-30 Minutes", ai: "< 30 Seconds", icon: Zap },
    { label: "Capacity", human: "50 Leads/Day", ai: "Unlimited", icon: Filter },
    { label: "Cost", human: "$5,000+/Month", ai: "80% Lower", icon: MousePointer2 },
];

const ProcessFlow = () => {
    const lineRef = useRef<HTMLDivElement>(null);
    const lineInView = useInView(lineRef, { once: true, amount: 0.3 });

    return (
        <section id="process-flow" className="py-24 bg-background overflow-hidden">
            <div className="max-w-[1411px] mx-auto px-6">

                {/* ── Header ── */}
                <div className="flex flex-col items-center text-center mb-24 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        className="font-cabinet font-bold text-5xl md:text-7xl text-primary tracking-tighter"
                    >
                        Efficiency from day one.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15, duration: 0.8 }}
                        className="font-inter text-xl text-primary/60 max-w-2xl"
                    >
                        We've distilled complex sales processes into three simple, automated steps.
                    </motion.p>
                </div>

                {/* ── Flow Cards ── */}
                <div className="relative mb-40" ref={lineRef}>
                    {/* Connecting line background */}
                    <div className="hidden lg:block absolute top-[64px] left-[15%] right-[15%] h-[2px] bg-black/5 z-0 rounded-full" />
                    {/* Animated draw line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={lineInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1], delay: 0.4 }}
                        style={{ originX: 0 }}
                        className="hidden lg:block absolute top-[64px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#3B82F6] via-[#A855F7] to-[#22C55E] z-0 rounded-full"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: i * 0.18,
                                    duration: 0.9,
                                    ease: [0.23, 1, 0.32, 1],
                                }}
                                className="flex flex-col items-center text-center space-y-8 group"
                            >
                                {/* Icon with 3D tilt + pulse ring */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -15 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: i * 0.18 + 0.3,
                                        duration: 0.7,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 14,
                                    }}
                                    whileHover={{ scale: 1.12, rotate: 4, y: -6 }}
                                    className={`relative w-[128px] h-[128px] ${step.color} ${step.shadow} rounded-[40px] flex items-center justify-center text-white shadow-2xl transition-shadow duration-500 cursor-pointer`}
                                >
                                    {/* Pulse ring */}
                                    <motion.div
                                        className={`absolute inset-0 rounded-[40px] ${step.color} opacity-30`}
                                        animate={{ scale: [1, 1.22, 1], opacity: [0.3, 0, 0.3] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                                    />
                                    <step.icon size={48} strokeWidth={1.5} />
                                </motion.div>

                                <div className="space-y-4">
                                    <motion.h3
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.18 + 0.5 }}
                                        className={`font-cabinet font-bold text-3xl ${step.accent} tracking-tight`}
                                    >
                                        {step.title}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.18 + 0.65 }}
                                        className="font-inter text-[18px] text-primary/70 leading-relaxed max-w-[320px]"
                                    >
                                        {step.description}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── Comparison Dashboard ── */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
                    className="relative group lg:px-12"
                >
                    <div className="bg-[#111827] rounded-[48px] overflow-hidden p-12 md:p-20 flex flex-col lg:flex-row gap-20 items-center border border-white/5 shadow-2xl">
                        {/* Title */}
                        <div className="flex-1 space-y-8">
                            <motion.h3
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
                                className="font-cabinet font-bold text-4xl md:text-5xl text-white leading-[1.1] tracking-tight"
                            >
                                Traditional SDR vs <br />
                                <span className="text-accent-green">After5 AI Agent</span>
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15, duration: 0.9 }}
                                className="font-inter text-white/50 text-[18px] leading-relaxed max-w-md"
                            >
                                See how After5 outperforms traditional human-led lead qualification in every key metric.
                            </motion.p>
                        </div>

                        {/* Metrics Grid */}
                        <div className="flex-[1.4] w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {metrics.map((m, i) => (
                                <ComparisonMetric key={m.label} {...m} index={i} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const ComparisonMetric = ({
    label, human, ai, icon: Icon, index,
}: {
    label: string; human: string; ai: string; icon: any; index: number;
}) => (
    <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12, duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        whileHover={{ y: -4, scale: 1.02 }}
        className="bg-white/[0.03] p-8 rounded-[32px] border border-white/5 flex flex-col gap-6 group/metric hover:bg-white/[0.06] hover:border-accent-green/20 transition-all duration-300 cursor-default"
    >
        <div className="flex justify-between items-center">
            <span className="text-sm font-inter font-bold text-white/30 uppercase tracking-[0.1em]">{label}</span>
            <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <Icon size={18} className="text-white/20 group-hover/metric:text-accent-green transition-colors duration-300" />
            </motion.div>
        </div>

        <div className="flex justify-between items-end">
            <div className="flex flex-col gap-1">
                <span className="text-[11px] font-inter font-bold text-white/20 uppercase">Traditional</span>
                <span className="text-white/60 font-medium text-lg line-through decoration-white/20">{human}</span>
            </div>
            <div className="flex flex-col text-right gap-1">
                <span className="text-[11px] font-inter font-bold text-accent-green/40 uppercase">After5 AI</span>
                <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.12 + 0.4, type: "spring", stiffness: 200 }}
                    className="text-accent-green font-bold text-2xl tracking-tight drop-shadow-[0_0_8px_rgba(46,255,161,0.5)]"
                >
                    {ai}
                </motion.span>
            </div>
        </div>
    </motion.div>
);

export default ProcessFlow;

import { motion } from "framer-motion";
import { History, Rocket, Users, MessageCircle } from "lucide-react";

const Problem = () => {
    const painPoints = [
        {
            icon: History,
            title: "After-Hours Enquiries Sit Untouched",
            description: <>Leads can arrive on evenings and weekends. They wait. By morning, they’ve <span className="font-bold text-primary">moved on or are untraceable.</span></>,
            iconBg: "bg-accent-green",
            iconColor: "text-primary"
        },
        {
            icon: Rocket,
            title: "Speed Decides Who Wins The Deal",
            description: <>In many industries, <span className="font-bold text-primary">the first response can often win,</span> regardless of brand or price. Convenience is king.</>,
            iconBg: "bg-primary",
            iconColor: "text-white"
        },
        {
            icon: Users,
            title: "Sales Teams Waste Time On The Unqualified Leads",
            description: <>Manual follow-up means <span className="font-bold text-primary">chasing people</span> who were never serious, while <span className="font-bold text-primary">real buyers slip away.</span></>,
            iconBg: "bg-primary",
            iconColor: "text-white"
        },
        {
            icon: MessageCircle,
            title: "Follow-Up Breaks Down After The First Reply",
            description: <>One response isn’t enough. Most <span className="font-bold text-primary">leads go cold</span> because nobody follows up consistently.</>,
            iconBg: "bg-primary",
            iconColor: "text-white"
        },
    ];

    return (
        <section id="problem" className="py-24 pb-32 bg-background overflow-hidden relative flex flex-col items-center">
            <div className="max-w-[1411px] mx-auto px-6 w-full relative z-10 text-center">
                <div className="flex flex-col gap-20 items-center">
                    {/* Header Stack */}
                    <div className="space-y-[28px] max-w-4xl mx-auto">
                        {/* Section Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex px-[11px] py-[9px] bg-[rgba(46,255,161,0.11)] text-primary rounded-[100px] font-inter font-medium text-[16px] tracking-[-0.4px] capitalize"
                        >
                            Without After5
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="font-cabinet font-bold text-[54px] text-primary leading-[1.05] tracking-[-1.5px]"
                        >
                            Leads are slipping away before sales even see them.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="font-inter text-[18px] text-primary/80 leading-[1.4] max-w-[530px] mx-auto"
                        >
                            Not because <span className="font-bold text-primary">your marketing is weak</span>. But because response rates, qualification, and follow ups aren't <span className="font-bold text-primary text-tight">consistent or fast enough</span>, especially after 5.
                        </motion.p>
                    </div>

                    {/* Middle: Official SVG (Phones) with Grid Background */}
                    <div className="relative group max-w-4xl w-full">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                            className="relative z-10 w-full"
                        >
                            <img
                                src="/assets/mobile-problem.svg"
                                alt="The Cost of Inaction"
                                className="w-full h-auto object-contain drop-shadow-2xl"
                            />
                        </motion.div>
                    </div>

                    {/* Bottom: Pain Points Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[84px] gap-y-[100px] content-start">
                        {painPoints.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    delay: i * 0.15,
                                    duration: 0.8,
                                    ease: [0.23, 1, 0.32, 1]
                                }}
                                className="flex flex-col items-center text-center group cursor-default"
                            >
                                <div className="relative mb-[32px]">
                                    {/* Sexy Floating Animation Wrapper */}
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: i * 0.5
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: i % 2 === 0 ? 8 : -8,
                                            transition: { type: "spring", stiffness: 400, damping: 10 }
                                        }}
                                        className="relative z-10"
                                    >
                                        {/* Icon Container with Glassmorphism and Premium Border */}
                                        <div className={`${point.iconBg} ${point.iconColor} w-[100px] h-[100px] rounded-[24px] flex items-center justify-center p-[20px] 
                                            shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] 
                                            border border-white/20 
                                            backdrop-blur-[10px] 
                                            group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] 
                                            transition-shadow duration-500`}
                                        >
                                            <point.icon size={56} strokeWidth={1.2} className="relative z-10" />

                                            {/* Inner Sheen Effect */}
                                            <div className="absolute inset-0 rounded-[24px] bg-linear-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>

                                        {/* Dynamic Glow Background */}
                                        <div className={`absolute inset-0 blur-[35px] rounded-full scale-90 opacity-40 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700 pointer-events-none ${point.iconBg === "bg-accent-green" ? "bg-accent-green/40" : "bg-primary/40"
                                            }`} />
                                    </motion.div>

                                    {/* Orbiting glow orbs */}
                                    {[0, 120, 240].map((deg, orbitIdx) => (
                                        <motion.div
                                            key={orbitIdx}
                                            animate={{ rotate: 360 }}
                                            transition={{
                                                duration: 5 + orbitIdx,
                                                repeat: Infinity,
                                                ease: "linear",
                                                delay: i * 0.4 + orbitIdx * 0.3,
                                            }}
                                            style={{ position: 'absolute', inset: 0, transformOrigin: 'center' }}
                                        >
                                            <motion.div
                                                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: orbitIdx * 0.5 }}
                                                style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: `rotate(${deg}deg) translateY(-62px) translateX(-4px)`,
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: '50%',
                                                    filter: 'blur(1px)',
                                                }}
                                                className={point.iconBg === "bg-accent-green" ? "bg-accent-green" : orbitIdx === 0 ? "bg-white" : "bg-accent-green/70"}
                                            />
                                        </motion.div>
                                    ))}

                                    {/* Soft pulse ring */}
                                    <motion.div
                                        animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: i * 0.6 }}
                                        className={`absolute inset-0 rounded-[30px] ${point.iconBg === "bg-accent-green" ? "border-2 border-accent-green/60" : "border-2 border-primary/40"}`}
                                    />
                                </div>

                                <motion.div
                                    className="space-y-[18px] max-w-sm"
                                    whileHover={{ y: -2 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <h3 className="font-cabinet font-bold text-[28px] text-primary leading-tight tracking-[-0.5px] group-hover:text-primary/90 transition-colors">
                                        {point.title}
                                    </h3>
                                    <p className="font-inter text-[18px] text-primary/60 leading-relaxed group-hover:text-primary/70 transition-colors">
                                        {point.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Problem;

import { motion } from "framer-motion";
import { Compass, TrendingUp, Handshake } from "lucide-react";

const CoreValues = () => {
    const values = [
        {
            title: "CONSULTANCY FIRST",
            description: "Every system is designed around your process, your market, and your processes so we can assure you will see ROI and a seamless integration for your team.",
            icon: Compass,
            bg: "bg-white",
            iconColor: "text-primary",
            glowColor: "bg-primary/20"
        },
        {
            title: "ROI FOCUSED",
            description: "Everything is planned and measured by increase in conversations and revenue.",
            icon: TrendingUp,
            bg: "bg-[#dcede5]",
            iconColor: "text-[#10b981]",
            glowColor: "bg-[#10b981]/30"
        },
        {
            title: "PARTNER LED",
            description: "We work alongside your team as an AI partner, not on a one time solution provider.",
            icon: Handshake,
            bg: "bg-white",
            iconColor: "text-primary",
            glowColor: "bg-primary/20"
        }
    ];

    return (
        <section className="py-24 max-w-[1411px] mx-auto px-6 lg:px-20 bg-background overflow-hidden">
            <div className="flex flex-col items-center gap-12 text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-[rgba(46,255,161,0.11)] px-[11px] py-[9px] rounded-[100px] border border-accent-green/20"
                >
                    <span className="font-inter font-medium text-primary text-[16px] tracking-[-0.4px]">
                        What We Stand For
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-cabinet font-bold text-[54px] md:text-[64px] tracking-[-1.5px] text-primary leading-[1.1]"
                >
                    Our Core Values
                </motion.h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {values.map((value, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`${value.bg} p-10 lg:p-14 rounded-[30px] flex flex-col items-center text-center gap-10 border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default`}
                    >
                        <div className="relative">
                            {/* Floating Animation Wrapper */}
                            <motion.div
                                animate={{ y: [0, -8, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.5
                                }}
                                whileHover={{
                                    scale: 1.15,
                                    rotate: index % 2 === 0 ? 10 : -10,
                                    transition: { type: "spring", stiffness: 400, damping: 10 }
                                }}
                                className="relative z-10 w-[80px] h-[80px] rounded-[20px] bg-white flex items-center justify-center shadow-lg border border-primary/5 group-hover:shadow-2xl transition-all duration-300"
                            >
                                <value.icon size={38} strokeWidth={1.5} className={`${value.iconColor} relative z-10`} />

                                {/* Inner Sheen */}
                                <div className="absolute inset-0 rounded-[20px] bg-linear-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </motion.div>

                            {/* Dynamic Glow */}
                            <div className={`absolute inset-0 ${value.glowColor} blur-[30px] rounded-full scale-110 opacity-40 group-hover:opacity-100 group-hover:scale-130 transition-all duration-700 pointer-events-none`} />
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-cabinet font-bold text-[24px] uppercase tracking-tight text-primary leading-tight group-hover:text-primary transition-colors">
                                {value.title}
                            </h3>
                            <p className="font-inter text-lg text-primary/70 leading-relaxed group-hover:text-primary/90 transition-colors">
                                {value.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CoreValues;

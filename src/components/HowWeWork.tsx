import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const workSteps = [
    {
        step: "one",
        title: "Discovery",
        description: (
            <>
                We <span className="font-bold">map</span> your lead generation <span className="font-bold">channels</span>, sales <span className="font-bold">processes</span>, and conversion <span className="font-bold">bottlenecks</span>.
            </>
        ),
    },
    {
        step: "two",
        title: "Design",
        description: (
            <>
                Choosing the <span className="font-bold">ideal channel</span>, mapping your <span className="font-bold">tone</span> and preparing for <span className="font-bold">integrations</span> and architecture.
            </>
        ),
    },
    {
        step: "three",
        title: "Build and integrate",
        description: (
            <>
                Building the system and <span className="font-bold">integrating</span> into operations and your CRM
            </>
        ),
    },
    {
        step: "four",
        title: "Test and fine-tune",
        description: (
            <>
                Fine tuning the tone, the nuances, and the <span className="font-bold">performance</span>.
            </>
        ),
    }
];

const HowWeWork = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section id="how-we-work" className="py-24 bg-[#FAFAFA] overflow-hidden px-8">
            <div className="max-w-[1411px] mx-auto">
                {/* Header */}
                <div className="flex flex-col items-center justify-center mb-20 gap-6">
                    <div className="bg-[#2EFFA1]/11 px-[11px] py-[9px] rounded-[100px]">
                        <span className="font-inter font-medium text-[16px] text-primary tracking-[-0.02em] uppercase">
                            HOW WE SET IT UP
                        </span>
                    </div>
                    <h2 className="font-cabinet font-bold text-[54px] text-primary leading-tight tracking-[-0.03em] text-center">
                        How we work with you
                    </h2>
                </div>

                {/* Grid of Uniform Boxes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {workSteps.map((item, i) => (
                        <motion.div
                            key={i}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                            className={`${hoveredIndex === i ? "bg-[#dcede5] border-accent-green/30" : "bg-white border-black/5"} h-[420px] p-10 rounded-[32px] shadow-[0_4px_24px_rgba(0,0,0,0.03)] border flex flex-col items-start gap-8 transition-all duration-500 group cursor-default`}
                        >
                            <div className="space-y-3">
                                <span className="font-inter font-normal text-[14px] text-primary/50 block uppercase tracking-wider">
                                    Step {item.step}
                                </span>
                                <h3 className="font-inter font-bold text-[20px] text-primary uppercase leading-tight tracking-tight">
                                    {item.title}
                                </h3>
                            </div>
                            <p className="font-inter text-[16px] text-primary/60 leading-relaxed font-medium max-w-[220px]">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}

                    {/* Final CTA Card - Identical Fixed Size */}
                    <motion.div
                        onMouseEnter={() => setHoveredIndex(4)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="bg-[#111827] h-[420px] p-10 rounded-[32px] flex flex-col justify-between relative group shadow-lg"
                    >
                        <h3 className="font-cabinet font-bold text-[32px] text-white uppercase leading-[1.1] tracking-tight">
                            YOUR JOURNEY, <br /> OUR PROCESS
                        </h3>

                        <Link to="/how-we-work">
                            <button className="bg-white group h-[56px] pl-8 pr-2 rounded-full flex items-center gap-4 mx-auto hover:scale-[1.05] transition-transform shadow-lg">
                                <span className="font-inter font-bold text-[14px] text-primary whitespace-nowrap uppercase tracking-wide">
                                    How It Works
                                </span>
                                <div className="w-10 h-10 flex items-center justify-center bg-accent-green rounded-full group-hover:-rotate-45 transition-transform duration-300 shrink-0 border border-black/5">
                                    <ArrowRight size={18} className="text-[#111827]" strokeWidth={3} />
                                </div>
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;

import { motion } from 'framer-motion';


const GapHighlight = () => {
    return (
        <section className="py-12 bg-background">
            <div className="max-w-[1411px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#36D78E] rounded-[20px] p-10 md:p-14 lg:p-16 flex items-center justify-center relative overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col items-center max-w-[1100px] mx-auto">
                        <h2 className="font-cabinet font-bold text-[28px] md:text-[34px] text-[#000000] text-center leading-[1.3] md:leading-[1.1] tracking-[-0.5px] md:tracking-[-1.5px] uppercase">
                            <span className="flex flex-wrap items-center justify-center gap-x-3">
                                <span className="flex items-center">
                                    <span className="text-[#000000]">after</span>
                                    <span className="text-[#000000]">5</span>
                                </span>
                                <span>sits between marketing and sales, closing the gap where revenue is being missed.</span>
                            </span>
                        </h2>
                    </div>

                    {/* Subtle texture/gradient if needed - staying close to Figma which is solid */}
                </motion.div>
            </div>
        </section>
    );
};

export default GapHighlight;

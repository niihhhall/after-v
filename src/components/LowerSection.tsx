import { motion } from "framer-motion";

const LowerSection = () => {
    return (
        <section id="lower-section" className="py-24 bg-primary overflow-hidden flex flex-col items-center">
            <div className="max-w-[1411px] mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    className="relative w-full rounded-[40px] overflow-hidden"
                >
                    <img
                        src="/assets/lower-section.svg"
                        alt="Process Overview"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default LowerSection;

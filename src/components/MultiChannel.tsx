import { motion } from "framer-motion";

const MultiChannel = () => {
    return (
        <section id="multi-channel" className="pt-24 pb-12 bg-primary overflow-hidden">
            <div className="max-w-[1411px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    className="w-full"
                >
                    <img
                        src="/assets/mobile-section.svg"
                        alt="After5 Multi-Channel Capabilities"
                        className="w-full h-auto object-contain shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[40px]"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default MultiChannel;

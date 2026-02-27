import { motion } from "framer-motion";

const MobileFrame = () => {
    return (
        <section id="mobile-frame" className="pt-12 pb-24 overflow-hidden flex flex-col items-center">
            <div className="max-w-[1411px] mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    className="relative z-10 w-full flex justify-center"
                >
                    <img
                        src="/assets/mobile-frame.svg"
                        alt="After5 Mobile Experience"
                        className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.05)]"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default MobileFrame;

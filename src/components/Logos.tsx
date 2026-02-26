import { motion } from "framer-motion";

const Logos = () => {
    return (
        <section className="relative -mt-24 pb-16 z-20">
            {/* Full width background bar */}
            <div className="absolute inset-0 top-24 bg-[#f8f9fa] z-0" />

            <div className="max-w-[1411px] mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center pt-32">
                    <p className="font-inter font-medium text-primary/40 text-[12px] tracking-[0.3em] uppercase mb-10">
                        20+ CRM’S WE INTEGRATE WITH
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                        className="w-full"
                    >
                        <img
                            src="/assets/crm-integrations.svg"
                            alt="CRM Integrations"
                            className="w-full h-auto object-contain scale-110 md:scale-100"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Logos;

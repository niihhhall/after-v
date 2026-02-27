import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQ = () => {
    const faqs = [
        {
            question: "How long does it take to set up?",
            answer: "Most of our clients go live in less than 7 days. This includes consultation, agent training on your specific business data, and full integration with your existing channels and CRM.",
        },
        {
            question: "Which languages does the AI support?",
            answer: "Our AI agents are multilingual and can handle conversations in over 50 languages including English, Spanish, French, German, Arabic, and more, maintaining your brand voice across all of them.",
        },
        {
            question: "Can it book meetings directly into my calendar?",
            answer: "Yes! Your AI agent can check your availability in real-time through integrations with Google Calendar, Outlook, or Calendly and book qualified leads directly into your schedule.",
        },
        {
            question: "How do I know the AI isn't saying the wrong things?",
            answer: "We use 'Guardrails' and train each agent on your specific knowledge base. You can review all conversations in real-time through your dashboard and step in whenever you feel like it.",
        },
        {
            question: "What channels can I connect?",
            answer: "We support WhatsApp, Email, SMS, and website live chat. We're also rolling out voice support for phone calls very soon.",
        },
    ];

    return (
        <section id="faq" className="py-24 bg-background overflow-hidden">
            <div className="max-w-[1411px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="flex-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#EEFFF7] text-primary rounded-full font-inter font-bold text-sm"
                        >
                            <HelpCircle size={16} />
                            COMMON QUESTIONS
                        </motion.div>
                        <h2 className="font-cabinet font-bold text-6xl text-primary tracking-tighter leading-tight">
                            Everything you <br />
                            need to know.
                        </h2>
                        <p className="font-inter text-xl text-primary/60 max-w-lg leading-relaxed">
                            Find answers to the most common questions about After5 and how our AI agents can transform your sales process.
                        </p>
                        <div className="pt-8">
                            <Link to="/contact">
                                <button className="bg-[#111827] text-white font-inter font-bold px-8 py-5 rounded-full hover:scale-105 transition-transform text-lg shadow-lg">
                                    Ask us anything else
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex-[1.5] space-y-4">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} question={faq.question} answer={faq.answer} delay={i * 0.1} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQItem = ({ question, answer, delay }: { question: string; answer: string; delay: number }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className={`border border-gray-100 rounded-[32px] overflow-hidden transition-all ${isOpen ? 'bg-background shadow-xl shadow-primary/5' : 'bg-background/50 hover:bg-background'}`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-8 text-left"
            >
                <span className="font-cabinet font-bold text-2xl text-primary">{question}</span>
                <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-accent-green text-primary' : 'bg-[#EEFFF7] text-primary'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-8 pb-8">
                            <p className="font-inter text-primary/60 text-lg leading-relaxed border-t border-gray-100 pt-6">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default FAQ;

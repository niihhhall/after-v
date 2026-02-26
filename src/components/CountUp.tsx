import { useEffect } from "react";
import { useSpring, useTransform, motion, useInView } from "framer-motion";
import { useRef } from "react";

interface CountUpProps {
    to: number;
    from?: number;
    delay?: number;
    suffix?: string;
    className?: string;
}

export const CountUp = ({
    to,
    from = 0,
    delay = 0,
    suffix = "",
    className = "",
}: CountUpProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const count = useSpring(from, {
        stiffness: 40,
        damping: 20,
        restDelta: 0.001,
    });

    const display = useTransform(count, (latest) =>
        Math.round(latest).toLocaleString() + suffix
    );

    useEffect(() => {
        if (isInView) {
            const timeout = setTimeout(() => {
                count.set(to);
            }, delay * 1000);
            return () => clearTimeout(timeout);
        }
    }, [isInView, to, count, delay]);

    return (
        <motion.span ref={ref} className={className}>
            {display}
        </motion.span>
    );
};

import { useEffect, useRef, useState } from "react";

const ScrollReveal = ({ children, delay = 200 }) => {
    const ref = useRef(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const element = ref.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setShown(true), delay);
                    observer.unobserve(element);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={ref}
            style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;

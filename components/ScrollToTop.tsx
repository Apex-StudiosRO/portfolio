"use client";

import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 p-3 sm:p-4 bg-blue-400/20 hover:bg-blue-400/30 border-2 border-blue-400/50 hover:border-blue-400/80 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(147,197,253,0.4)] group"
                    aria-label="Scroll to top"
                >
                    <FiArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300 group-hover:text-blue-200 transition-colors" />
                </button>
            )}
        </>
    );
}

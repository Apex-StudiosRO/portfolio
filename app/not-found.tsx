"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { FiHome, FiArrowLeft } from "react-icons/fi";

export default function NotFound() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [glitchActive, setGlitchActive] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 20 - 10,
                y: (e.clientY / window.innerHeight) * 20 - 10,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);

        const glitchInterval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 200);
        }, 3000);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            clearInterval(glitchInterval);
        };
    }, []);

    return (
        <div className="relative min-h-screen w-screen bg-background text-foreground overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-300/40 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`,
                        }}
                    ></div>
                ))}
            </div>

            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>

            <div className="relative z-10 flex flex-col items-center justify-center px-8 text-center max-w-4xl">
                <div
                    className="relative mb-8"
                    style={{
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                >
                    <h1
                        className={`text-[200px] md:text-[300px] font-bold leading-none select-none ${
                            glitchActive ? "animate-glitch" : ""
                        }`}
                        style={{
                            background: "linear-gradient(135deg, rgba(147, 197, 253, 0.8) 0%, rgba(147, 197, 253, 0.4) 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textShadow: glitchActive
                                ? "0 0 30px rgba(147, 197, 253, 0.8), 0 0 60px rgba(147, 197, 253, 0.5)"
                                : "0 0 40px rgba(147, 197, 253, 0.3)",
                        }}
                    >
                        404
                    </h1>
                    {glitchActive && (
                        <>
                            <h1
                                className="absolute inset-0 text-[200px] md:text-[300px] font-bold leading-none select-none opacity-70"
                                style={{
                                    background: "linear-gradient(135deg, rgba(255, 0, 0, 0.5) 0%, rgba(255, 0, 0, 0.2) 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    transform: "translate(-5px, -2px)",
                                }}
                            >
                                404
                            </h1>
                            <h1
                                className="absolute inset-0 text-[200px] md:text-[300px] font-bold leading-none select-none opacity-70"
                                style={{
                                    background: "linear-gradient(135deg, rgba(0, 255, 255, 0.5) 0%, rgba(0, 255, 255, 0.2) 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    transform: "translate(5px, 2px)",
                                }}
                            >
                                404
                            </h1>
                        </>
                    )}
                </div>

                <div className="flex flex-col gap-4 mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-white/90">
                        Page Not Found
                    </h2>
                    <p className="text-xl text-white/60 max-w-2xl">
                        Oops! The page you're looking for seems to have vanished into the digital void. 
                        Let's get you back on track.
                    </p>
                </div>

                <div className="w-full max-w-md h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent mb-12 animate-pulse"></div>

                <div className="flex flex-wrap gap-6 justify-center">
                    <Link href="/">
                        <Button variant="corners">
                            <span className="flex items-center gap-2">
                                <FiHome /> Go Home
                            </span>
                        </Button>
                    </Link>
                    <button onClick={() => window.history.back()}>
                        <Button variant="secondary">
                            <span className="flex items-center gap-2">
                                <FiArrowLeft /> Go Back
                            </span>
                        </Button>
                    </button>
                </div>
            </div>

            <div
                className="absolute w-20 h-20 border-2 border-blue-300/20 rounded-lg animate-spin-slow"
                style={{
                    top: "15%",
                    right: "10%",
                    animationDuration: "20s",
                }}
            ></div>
            <div
                className="absolute w-16 h-16 border-2 border-blue-300/30 rounded-full animate-spin-slow"
                style={{
                    bottom: "20%",
                    left: "15%",
                    animationDuration: "15s",
                }}
            ></div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                        opacity: 0;
                    }
                    50% {
                        transform: translateY(-100vh) translateX(20px);
                        opacity: 1;
                    }
                }
                .animate-float {
                    animation: float linear infinite;
                }
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                .animate-spin-slow {
                    animation: spin-slow linear infinite;
                }
                @keyframes glitch {
                    0% {
                        transform: translate(0);
                    }
                    20% {
                        transform: translate(-2px, 2px);
                    }
                    40% {
                        transform: translate(-2px, -2px);
                    }
                    60% {
                        transform: translate(2px, 2px);
                    }
                    80% {
                        transform: translate(2px, -2px);
                    }
                    100% {
                        transform: translate(0);
                    }
                }
                .animate-glitch {
                    animation: glitch 0.2s ease-in-out;
                }
            `}</style>
        </div>
    );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const titles = ["Web Developer", "Networking Learner", "Full Stack Developer", "Tech Enthusiast", "Problem Solver"];

export default function Home() {
    const [titleIndex, setTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const currentTitle = titles[titleIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                if (displayText.length < currentTitle.length) {
                    setDisplayText(currentTitle.slice(0, displayText.length + 1));
                    setTypingSpeed(150);
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentTitle.slice(0, displayText.length - 1));
                    setTypingSpeed(100);
                } else {
                    setIsDeleting(false);
                    setTitleIndex((prev) => (prev + 1) % titles.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, titleIndex, typingSpeed]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <>
            <div
                className="fixed w-24 h-24 bg-blue-300/30 rounded-full blur-3xl pointer-events-none transition-all duration-0 ease-out z-50"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: "translate(-50%, -50%)",
                }}
            ></div>
            <section id="main" className="relative flex w-screen h-screen items-center justify-between  flex-col pt-25">
                <div className="absolute -top-50 -left-50 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-50 -right-50 w-[32rem] h-[32rem] bg-blue-300/15 rounded-full blur-3xl"></div>

                <div className="flex flex-col items-center justify-center z-10">
                    <span className="text-3xl font-bold transition-colors  cursor-default">
                        {" "}
                        Hi, I'm Matei <span className="text-md text-white/20 ">aka Panda</span>
                    </span>
                    <span className="text-2xl font-bold transition-colors  cursor-default">
                        I'm a{" "}
                        <span className="text-blue-300 min-w-[200px]">
                            {displayText}
                            <span className="animate-pulse">|</span>
                        </span>
                    </span>
                </div>
            </section>
            <section id="about" className="flex relative w-screen h-screen">
                <h1 className="m-auto text-4xl font-bold">About Me</h1>
            </section>
        </>
    );
}

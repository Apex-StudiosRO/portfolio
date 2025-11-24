"use client";
import { useState, useEffect } from "react";

const Mouse = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    return (
        <div
            className="fixed w-24 h-24 bg-blue-300/30 rounded-full blur-3xl pointer-events-none transition-all duration-0 ease-out z-50"
            style={{
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
                transform: "translate(-50%, -50%)",
            }}
        ></div>
    );
};

export default Mouse;

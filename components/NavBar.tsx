"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const NavBar = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed p-2 top-1 w-screen flex items-center justify-center z-50">
            <div className="flex py-2 px-6 bg-blue-300/15 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm border-2 border-blue-300/80 gap-6 items-center">
                <button onClick={() => scrollToSection('main')} className="cursor-pointer">
                    <Image src="/logo.png" alt="Logo" width={30} height={30} className="rounded-full" />
                </button>
                <div className="flex gap-4 items-center justify-center">
                    <button onClick={() => scrollToSection('main')}>
                        <Button variant="underline">Home</Button>
                    </button>
                    <button onClick={() => scrollToSection('about')}>
                        <Button variant="underline">About</Button>
                    </button>
                    <button onClick={() => scrollToSection('projects')}>
                        <Button variant="underline">Projects</Button>
                    </button>
                    <button onClick={() => scrollToSection('contact')}>
                        <Button variant="underline">Contact</Button>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

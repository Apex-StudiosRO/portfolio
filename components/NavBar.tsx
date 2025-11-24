"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-4 left-0 right-0 flex items-center justify-center z-50 px-2 sm:px-4">
                <div className="flex py-2 px-3 sm:px-6 bg-slate-800/15 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm border-2 border-slate-700/80 gap-2 sm:gap-6 items-center w-[80%] max-w-4xl justify-between md:justify-center">
                    <Link href="/">
                        <Image src="/logo.png" alt="Logo" width={30} height={30} className="rounded-full" />
                    </Link>
                    
                    <div className="hidden md:flex gap-4 items-center justify-center">
                        <Link href="/">
                            <Button variant="underline">Home</Button>
                        </Link>
                        <Link href="/#about">
                            <Button variant="underline">About</Button>
                        </Link>
                        <Link href="/#projects">
                            <Button variant="underline">Projects</Button>
                        </Link>
                        <Link href="/#contact">
                            <Button variant="underline">Contact</Button>
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-500-500 hover:text-blue-200 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </nav>

            {isMenuOpen && (
                <div className="fixed top-16 left-4 right-4 z-40 md:hidden max-w-md mx-auto">
                    <div className="bg-blue-300/15 backdrop-blur-sm border-2 border-blue-500/80 rounded-2xl p-6 flex flex-col gap-4">
                        <Link href="/" onClick={() => setIsMenuOpen(false)}>
                            <Button variant="underline">Home</Button>
                        </Link>
                        <Link href="/#about" onClick={() => setIsMenuOpen(false)}>
                            <Button variant="underline">About</Button>
                        </Link>
                        <Link href="/#projects" onClick={() => setIsMenuOpen(false)}>
                            <Button variant="underline">Projects</Button>
                        </Link>
                        <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>
                            <Button variant="underline">Contact</Button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;

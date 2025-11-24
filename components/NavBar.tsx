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
            <nav className="fixed p-2 top-1 w-screen flex items-center justify-center z-50 px-4">
                <div className="flex py-2 px-6 bg-blue-300/15 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm border-2 border-blue-300/80 gap-6 items-center w-full max-w-7xl justify-between md:justify-center">
                    <Link href="/">
                        <Image src="/logo.png" alt="Logo" width={30} height={30} className="rounded-full" />
                    </Link>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-4 items-center justify-center">
                        <Link href="/">
                            <Button variant="underline">Home</Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="underline">About</Button>
                        </Link>
                        <Link href="/projects">
                            <Button variant="underline">Projects</Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="underline">Contact</Button>
                        </Link>
                    </div>

                    {/* Mobile Burger Menu */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-blue-300 hover:text-blue-200 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="fixed top-16 left-0 right-0 z-40 md:hidden px-4">
                    <div className="bg-blue-300/15 backdrop-blur-sm border-2 border-blue-300/80 rounded-2xl p-6 flex flex-col gap-4">
                        <Link href="/" onClick={() => setIsMenuOpen(false)}>
                            <Button variant="underline">Home</Button>
                        </Link>
                        <Link href="/about" onClick={() => setIsMenuOpen(false)}>
                            <Button variant="underline">About</Button>
                        </Link>
                        <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
                            <Button variant="underline">Projects</Button>
                        </Link>
                        <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                            <Button variant="underline">Contact</Button>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default NavBar;

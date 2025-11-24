"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const NavBar = () => {
    return (
        <nav className="fixed p-2 top-1 w-screen flex items-center justify-center z-50">
            <div className="flex py-2 px-6 bg-blue-300/15 rounded-full bg-clip-padding backdrop-filter backdrop-blur-sm border-2 border-blue-300/80 gap-6 items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={30} height={30} className="rounded-full" />
                </Link>
                <div className="flex gap-4 items-center justify-center">
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
            </div>
        </nav>
    );
};

export default NavBar;

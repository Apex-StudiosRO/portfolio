"use client";

import Image from "next/image";
import Link from "next/link";
import { FiInstagram, FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "Email",
            icon: FiMail,
            url: "mailto:panda@clinky.dev",
        },
        {
            name: "Instagram",
            icon: FiInstagram,
            url: "https://instagram.com/mateicc.09",
        },
        {
            name: "LinkedIn",
            icon: FiLinkedin,
            url: "https://linkedin.com/in/matei-cucu",
        },
        {
            name: "GitHub",
            icon: FiGithub,
            url: "https://github.com/iampandaro",
        },
        {
            name: "Discord",
            icon: SiDiscord,
            url: "https://discord.com/users/1067055282586394664",
        },
    ];

    return (
        <footer
            id="contact"
            className="relative w-full border-t border-blue-400/20 bg-blue-300/5 backdrop-blur-sm"
        >
            <div className="flex flex-col justify-center max-w-7xl mx-auto items-center">
                <div className="w-full mx-auto px-12 py-8 flex items-center justify-center flex-col gap-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full">
                        <div className="flex items-center gap-2">
                            <Link href="/">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                            </Link>
                        </div>

                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-blue-400/10 hover:bg-blue-400/20 border border-blue-400/20 hover:border-blue-400/40 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(147,197,253,0.3)] group"
                                    aria-label={link.name}
                                >
                                    <link.icon className="w-5 h-5 text-blue-300 group-hover:text-blue-200 transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="text-white/50 text-sm">
                        © {currentYear} Panda. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}

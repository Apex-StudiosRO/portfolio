import type { Metadata } from "next";
import { Montserrat, Monda } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar"
import Mouse from "@/components/Mouse";
import Footer from "@/components/Footer";


const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

const monda = Monda({
    variable: "--font-monda",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Matei Cucu - Web Developer Portfolio",
    description: "Modern web developer specializing in Next.js, React, and TypeScript. Creating stunning, interactive web experiences with cutting-edge technologies and beautiful design.",
    openGraph: {
        title: "Matei  - Web Developer Portfolio",
        description: "Modern web developer specializing in Next.js, React, and TypeScript. Creating stunning, interactive web experiences with cutting-edge technologies and beautiful design.",
        url: "https://itzz-panda.vercel.app",
        siteName: "Panda's Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: "/logo.png",
                width: 1200,
                height: 630,
                alt: "Matei Cucu - Web Developer Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Matei Cucu - Web Developer Portfolio",
        description: "Modern web developer specializing in Next.js, React, and TypeScript. Creating stunning, interactive web experiences with cutting-edge technologies and beautiful design.",
        images: ["/about.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${montserrat.variable} ${monda.variable} antialiased overflow-x-hidden`}>
                <NavBar />
                <Mouse />
                {children}
                <Footer />
            </body>
        </html>
    );
}

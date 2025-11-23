import type { Metadata } from "next";
import { Montserrat, Monda } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const monda = Monda({
  variable: "--font-monda",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pandalio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${monda.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

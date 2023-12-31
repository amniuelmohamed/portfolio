import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Momo | Portfolio",
    description:
        "Fueling digital innovation with React and Next.js! As a front-end developer, I specialize in leveraging these cutting-edge technologies to create dynamic, high-performance web experiences. Explore my portfolio to see how I harness the power of React and Next.js to craft intuitive interfaces and immersive user journeys.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-gray-50 text-gray-950 relative overflow-hidden`}
            >
                <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[-11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:right-[-33rem] lg:right-[-28rem] xl:right-[-15rem] 2xl:right-[-5rem]"></div>
                <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
                {children}
            </body>
        </html>
    );
}

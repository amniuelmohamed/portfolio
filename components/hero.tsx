"use client";

import Image from "next/image";
import React from "react";
import portraitImg from "@/public/portrait.jpg";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSection } from "@/context/active-section-context-provider";

export default function Hero() {
    const ref = useSectionInView("Home");
    const { setActiveSection, setTimeout } = useActiveSection();

    return (
        <section ref={ref} className="sm:mb-24 scroll-mt-36" id="home">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                        }}
                    >
                        <Image
                            src={portraitImg}
                            alt="Mohamed Portrait"
                            className="w-28 h-28 rounded-full border-4 border-white object-cover"
                            quality={100}
                        />
                    </motion.div>
                    <motion.span
                        className="absolute bottom-0 right-0 text-3xl"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            delay: 0.2,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.h1
                className="text-2xl sm:text-4xl !leading-[1.5] text-center font-medium mt-5"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'm Mohamed.</span> I'm a{" "}
                <span className="font-bold">front-end developer</span> with{" "}
                <span className="font-bold">too much</span> passion. I enjoy
                building <span className="italic">sites & apps</span>. My focus
                is <span className="underline">React (Next.js)</span>.
            </motion.h1>
            <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10 font-medium text-lg"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2,
                }}
            >
                <Link
                    href={"#contact"}
                    className="group bg-gray-950 text-white px-6 py-3 flex items-center gap-2 w-fit rounded-full hover:scale-[1.07] transition active:scale-[1.07]
                    borderBlack"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeout(Date.now());
                    }}
                >
                    Contact me here{" "}
                    <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
                </Link>
                <a
                    href="/CV.pdf"
                    className="group bg-white text-gray-950 px-6 py-3 flex items-center gap-2 w-fit rounded-full borderBlack hover:scale-[1.07] 
                    transition active:scale-[1.07] dark:bg-white/10 dark:text-white"
                    download
                >
                    Download CV{" "}
                    <HiDownload className="opacity-80 group-hover:translate-y-[2px] transition" />
                </a>
                <div className="flex gap-2 text-xl">
                    <a
                        href="https://www.linkedin.com/in/amniuel-mohamed/"
                        target="_blank"
                        className="bg-white text-gray-700 rounded-full borderBlack w-[54px] h-[54px] flex items-center justify-center 
                        hover:text-gray-950 hover:scale-110 transition active:scale-110 dark:bg-white/10 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://github.com/amniuelmohamed"
                        target="_blank"
                        className="bg-white text-gray-700 rounded-full borderBlack w-[54px] h-[54px] flex items-center justify-center 
                        hover:text-gray-950 hover:scale-110 transition active:scale-110 dark:bg-white/10 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                        <FaGithubSquare />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}

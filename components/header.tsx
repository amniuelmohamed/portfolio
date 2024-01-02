"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
    return (
        <header className="z-[999] relative">
            <motion.div
                className="fixed top-0 left-1/2 w-full h-[4.5rem] rounded-none sm:top-6 sm:w-[36rem] sm:h-[3.25rem] sm:rounded-full
                        bg-white bg-opacity-80 backdrop-blur shadow-lg shadow-black/[0.03] border border-white border-opacity-40"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>
            <nav className="flex items-center justify-center fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-4/5 py-3 sm:top-6 sm:w-[36rem] sm:h-[3.25rem]">
                <ul className="flex items-center justify-center flex-wrap gap-y-1 sm:flex-nowrap sm:gap-4">
                    {links.map((link) => (
                        <motion.li
                            key={link.name}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                href={link.hash}
                                className="p-2 text-gray-500 hover:text-gray-950 transition-colors"
                            >
                                {link.name}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

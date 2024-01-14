"use client";

import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.3 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            className="group"
        >
            <article
                className="group relative bg-gray-100 rounded-lg overflow-hidden borderBlack sm:h-[20rem] flex group-even:flex-row-reverse
                            hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
            >
                <div className="w-1/2 pt-6 pb-4 pl-4 pr-1 sm:pt-10 sm:pb-7 sm:px-8 flex flex-col h-full">
                    <h3 className="font-semibold text-xl sm:text-2xl">
                        {title}
                    </h3>
                    <p className="mt-2 text-gray-700 leading-relaxed dark:text-white/70">
                        {description}
                    </p>
                    <ul className="flex flex-wrap gap-1 sm:gap-2 mt-4 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li
                                key={index}
                                className="bg-black/[0.7] text-white rounded-full px-3 py-2 text-[0.7rem] uppercase tracking-wider dark:text-white/70"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <Image
                    src={imageUrl}
                    alt={`${title} image preview`}
                    quality={90}
                    className="absolute top-14 -right-56 sm:-right-40 md:-right-32 w-[30rem] rounded-lg shadow-2xl
                        transition
                        group-hover:-translate-x-3
                        group-hover:translate-y-3
                        group-hover:-rotate-2
                        group-hover:scale-105

                        group-even:right-[initial]
                        group-even:-left-56
                        group-even:sm:-left-40
                        group-even:md:-left-32

                        group-even:group-hover:translate-x-3
                        group-even:group-hover:translate-y-3
                        group-even:group-hover:rotate-2
                        group-even:group-hover:scale-105
                        "
                />
            </article>
        </motion.div>
    );
}

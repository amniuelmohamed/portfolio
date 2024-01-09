"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const skillsAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.05,
        },
    }),
};

export default function Skills() {
    const ref = useSectionInView("Skills");

    return (
        <section ref={ref} id="skills" className="py-20 sm:py-24 scroll-mt-6">
            <SectionHeading>My skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg">
                {skillsData.map((skill, index) => (
                    <motion.li
                        key={index}
                        className="bg-white rounded-lg borderBlack py-3 px-5 capitalize"
                        variants={skillsAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        custom={index}
                        viewport={{
                            once: true,
                        }}
                    >
                        {skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}

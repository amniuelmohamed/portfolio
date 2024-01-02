"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="text-center py-20 sm:py-0">
            <SectionHeading>About me</SectionHeading>
            <motion.div
                className="space-y-5 leading-[1.75]"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
            >
                <p>
                    I'm Mohamed, a{" "}
                    <span className="font-bold">determined individual</span>{" "}
                    with a passion for{" "}
                    <span className="font-bold">web development</span> and a
                    knack for{" "}
                    <span className="italic">
                        adapting to life's twists and turns
                    </span>
                    .
                </p>
                <p>
                    Originally hailing from Morocco, I embarked on a journey to
                    Belgium in 2020 to pursue a master's degree. However, the
                    pandemic threw{" "}
                    <span className="italic">unexpected challenges</span> my
                    way, nudging me to take on a job at a supermarket to sustain
                    myself.
                </p>
                <p>
                    <span className="underline">
                        While balancing work and life,
                    </span>{" "}
                    <span className="font-bold">
                        I didn't let go of my passion for technology.
                    </span>{" "}
                    Evenings and weekends became my playground for
                    <span className="font-bold">self-improvement</span>. I dived
                    into self-training, honing my skills in web development,
                    constantly seeking to learn more and stay up-to-date with
                    the <span className="font-bold">latest trends</span>.
                </p>
                <p>
                    In the aisles of the supermarket, I found not just a job but
                    a platform for{" "}
                    <span className="italic">personal growth</span>. Through
                    dedication and persistence, I've expanded my skill set and
                    evolved as a web developer.
                </p>
                <p>
                    Now, armed with a solid foundation in technologies like
                    <span className="font-bold">
                        NextJS, React, JavaScript, HTML, CSS, and more
                    </span>
                    , I'm poised to transition into the realm of professional
                    web development. I'm excited to bring my unique journey,
                    adaptability, and a fervor for learning to a{" "}
                    <span className="font-bold">dynamic team</span>,
                    contributing my best to creating outstanding digital
                    experiences.
                </p>
                <p>
                    Join me as I continue this exciting journey, leveraging{" "}
                    <span className="font-bold">every challenge</span> as a
                    stepping stone{" "}
                    <span className="italic">
                        towards growth and innovation
                    </span>
                    .
                </p>
            </motion.div>
        </section>
    );
}

"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
    const ref = useSectionInView("Projects", 0.5);

    return (
        <section ref={ref} className="py-20 sm:py-24 scroll-mt-6" id="projects">
            <SectionHeading>My projects</SectionHeading>
            <div className="space-y-5">
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}

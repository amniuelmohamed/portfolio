import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
    return (
        <section className="py-20 sm:py-24 scroll-mt-6" id="projects">
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

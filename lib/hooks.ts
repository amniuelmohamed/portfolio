import { useActiveSection } from "@/context/active-section-context-provider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { ActiveSectionType } from "./types";

export function useSectionInView(
    sectionName: ActiveSectionType,
    threshold = 0.75
) {
    const { setActiveSection, timeout } = useActiveSection();
    const { ref, inView } = useInView({
        threshold: threshold,
    });

    useEffect(() => {
        if (inView && Date.now() - timeout > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, sectionName, timeout]);

    return ref;
}

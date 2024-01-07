"use client";

import type { ActiveSectionType } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
};

type ActiveSectionContextType = {
    activeSection: ActiveSectionType;
    setActiveSection: React.Dispatch<React.SetStateAction<ActiveSectionType>>;
    timeout: number;
    setTimeout: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
    createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
    children,
}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] =
        useState<ActiveSectionType>("Home");

    const [timeout, setTimeout] = useState(0);

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeout,
                setTimeout,
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSection() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error(
            "Cannot use ActiveSectionContext outside the ActiveSectionContextProvider"
        );
    }

    return context;
}

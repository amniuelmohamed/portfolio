"use client";

import React, { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";

type Theme = "light" | "dark";

export default function ThemeSwitch() {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else if (theme === "dark") {
            setTheme("light");
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    useEffect(() => {
        if (
            localStorage.getItem("theme") === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
        }
    }, []);

    return (
        <button
            className="fixed z-40 bottom-2 right-2 sm:bottom-5 sm:right-5 h-14 w-14 flex justify-center items-center 
        rounded-full bg-white border border-white border-opacity-40 text-xl bg-opacity-80 backdrop-blur
        shadow-lg dark:bg-gray-950 dark:bg-opacity-65 hover:scale-110 transition-all"
            onClick={toggleTheme}
        >
            {theme === "light" ? <BsSun /> : <BsMoon />}
        </button>
    );
}

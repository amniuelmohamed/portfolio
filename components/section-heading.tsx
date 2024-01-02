"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionHeading({ children }: { children: string }) {
    return (
        <motion.h2
            className="text-2xl sm:text-4xl font-bold mb-8 capitalize text-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        >
            {children}
        </motion.h2>
    );
}

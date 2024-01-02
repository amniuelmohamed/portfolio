"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
    return (
        <motion.div
            className="w-1 h-16 bg-gray-200 rounded-full my-24 hidden sm:block mx-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
        ></motion.div>
    );
}

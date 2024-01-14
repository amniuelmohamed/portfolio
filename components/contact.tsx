"use client";

import { useSectionInView } from "@/lib/hooks";
import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import sendEmail from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
    const ref = useSectionInView("Contact");
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    return (
        <motion.section
            ref={ref}
            id="contact"
            className="py-20 sm:py-24 scroll-mt-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 0.75,
            }}
            viewport={{
                once: true,
            }}
        >
            <SectionHeading>Contact me</SectionHeading>
            <p className="-mt-5">
                Please contact me directly at{" "}
                <a href="mailto:dev.amniuel@gmail.com" className="underline">
                    dev.amniuel@gmail.com
                </a>
                , or through this form.
            </p>
            <form
                className="flex flex-col gap-3 mt-16 w-full max-w-2xl mx-auto"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);
                    if (error) {
                        toast.error(error);
                        return;
                    }
                    toast.success("Email sent successfully");

                    emailRef.current ? (emailRef.current.value = "") : null;
                    messageRef.current ? (messageRef.current.value = "") : null;
                }}
            >
                <input
                    ref={emailRef}
                    type="email"
                    name="senderEmail"
                    placeholder="Your Email"
                    required
                    maxLength={200}
                    className="p-4 rounded-lg borderBlack focus:border-[2px] focus:border-black focus:outline-none transition-all dark:focus:border
                    dark:text-black/80 dark:bg-white/10 dark:focus:bg-white dark:placeholder:text-white/80 dark:focus:placeholder:text-black/40"
                />
                <textarea
                    ref={messageRef}
                    name="senderMessage"
                    placeholder="Your Message"
                    required
                    maxLength={5000}
                    className="h-52 resize-none p-4 rounded-lg borderBlack focus:border-[2px] focus:border-black focus:outline-none transition-all dark:focus:border
                    dark:text-black/80 dark:bg-white/10 dark:focus:bg-white dark:placeholder:text-white/80 dark:focus:placeholder:text-black/40"
                />
                <SubmitBtn />
            </form>
        </motion.section>
    );
}

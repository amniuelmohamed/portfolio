"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(formData: FormData) {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("senderMessage");

    if (!validateString(senderEmail)) {
        return {
            error: "Invalid sender email",
        };
    }

    if (!validateString(message)) {
        return {
            error: "Invalid message",
        };
    }

    let data;
    try {
        data = resend.emails.send({
            from: "Portfolio Contact Form <onboarding@resend.dev>",
            to: "dev.amniuel@gmail.com",
            reply_to: senderEmail as string,
            subject: "New Message From Portfolio Contact Form",
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string,
            }),
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return { data };
}

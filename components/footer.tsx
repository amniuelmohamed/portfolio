import React from "react";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="text-center py-6 px-4">
            <p>
                <small>&copy; {year} Mohamed. All rights reserved.</small>
            </p>
            <p className="text-sm mt-1">
                <strong>Made with </strong>❤️ using React & Next.js (App Router
                and Server Actions), Typescript, Tailwind CSS, Framer Motion,
                React Email & Resend, Vercel hosting.
            </p>
        </footer>
    );
}

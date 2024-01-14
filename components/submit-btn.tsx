import React from "react";
import { useFormStatus } from "react-dom";
import { BsSend } from "react-icons/bs";

export default function SubmitBtn() {
    const { pending } = useFormStatus();
    return (
        <button
            className="group bg-gray-950 text-white font-medium px-6 py-3 flex items-center gap-2 w-fit rounded-full hover:scale-[1.07] transition active:scale-[1.07]
                        disabled:bg-opacity-65 dark:bg-white dark:text-gray-950"
            disabled={pending}
        >
            {pending ? (
                <div className="h-5 w-5 rounded-full border-b-2 border-white animate-spin"></div>
            ) : (
                <>
                    Submit{" "}
                    <BsSend className="opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </>
            )}
        </button>
    );
}

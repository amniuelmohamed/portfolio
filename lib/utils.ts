export function validateString(value: unknown): boolean {
    if (!value || typeof value !== "string") {
        return false;
    }
    return true;
}

export function getErrorMessage(error: unknown): string {
    let errorMessage: string = "";
    if (error instanceof Error) {
        errorMessage = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        errorMessage = String(error.message);
    } else if (error && typeof error === "string") {
        errorMessage = error;
    } else {
        errorMessage = "Unknown error";
    }

    return errorMessage;
}

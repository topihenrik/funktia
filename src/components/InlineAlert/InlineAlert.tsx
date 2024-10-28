import { tv } from "tailwind-variants";
import { getIcon } from "../../utils/getIcon";

const inlineAlertStyle = tv({
    base: ["flex gap-4 p-2 rounded"],
    variants: {
        color: {
            info: ["bg-blue-600 text-white"],
            success: ["bg-green-600 text-white"],
            warning: ["bg-yellow-600 text-white"],
            error: ["bg-red-600 text-white"]
        }
    }
});

interface InlineAlertProps {
    color: "info" | "success" | "warning" | "error";
    message: string;
}

export function InlineAlert({ color = "info", message }: InlineAlertProps) {
    return (
        <div className={inlineAlertStyle({ color })}>
            {getIcon(color)}
            {message}
        </div>
    );
}

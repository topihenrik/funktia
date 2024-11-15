import { tv } from "tailwind-variants";
import { getIcon } from "../../utils/getIcon";
import { Severity } from "../../constants";

const inlineAlertStyle = tv({
    base: ["flex gap-4 p-2 rounded"],
    variants: {
        severity: {
            info: ["bg-blue-600 text-white"],
            success: ["bg-green-600 text-white"],
            warning: ["bg-yellow-600 text-white"],
            danger: ["bg-red-600 text-white"]
        }
    }
});

interface InlineAlertProps {
    /**
     * Severity of the alert
     */
    severity: Severity;
    /**
     * Message to be showcased inside the component
     */
    message: string;
}

export function InlineAlert({ severity, message }: InlineAlertProps) {
    return (
        <div className={inlineAlertStyle({ severity })}>
            {getIcon(severity)}
            {message}
        </div>
    );
}

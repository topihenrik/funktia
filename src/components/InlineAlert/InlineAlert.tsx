import { tv } from "tailwind-variants";
import { Icon } from "../Icon";

const style = tv({
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

function getIcon(color: "info" | "success" | "warning" | "error") {
    switch (color) {
        case "info":
            return <Icon name="Info" />;
        case "success":
            return <Icon name="CircleCheck" />;
        case "warning":
            return <Icon name="TriangleAlert" />;
        case "error":
            return <Icon name="CircleAlert" />;
        default:
            return null;
    }
}

interface InlineAlertProps {
    color: "info" | "success" | "warning" | "error";
    message: string;
}

export function InlineAlert({ color = "info", message }: InlineAlertProps) {
    return (
        <div className={style({ color })}>
            {getIcon(color)}
            {message}
        </div>
    );
}

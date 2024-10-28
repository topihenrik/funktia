import { ReactNode } from "react";
import { icons } from "lucide-react";
import { Button as ReactAriaButton } from "react-aria-components";
import { tv } from "tailwind-variants";
import { Icon } from "../Icon";

const clickElementStyle = tv({
    base: ["flex gap-4 p-2"]
});

interface ClickElementProps {
    type: "a" | "button";
    className?: string;
    children: ReactNode | string;
    icon: keyof typeof icons;
    href?: string;
}

export function ClickElement({ children, className, icon, type, href = "" }: ClickElementProps) {
    if (type === "a") {
        return (
            <a href={href} className={`${className} ${clickElementStyle()}`}>
                {icon && <Icon name={icon} />}
                {children}
            </a>
        );
    }

    return (
        <ReactAriaButton className={`${className} ${clickElementStyle()}`}>
            {icon && <Icon name={icon} />}
            {children}
        </ReactAriaButton>
    );
}

import { ReactNode } from "react";
import { icons } from "lucide-react";
import {
    Button as ReactAriaButton,
    ButtonProps as ReactAriaButtonProps,
    Link as ReactAriaLink,
    LinkProps as ReactAriaLinkProps
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { Icon } from "../Icon";

const clickElementStyle = tv({
    base: ["flex gap-4 p-2"]
});

// interface ClickElementProps {
//     variant?: "a" | "button";
//     className?: string;
//     children?: ReactNode | string;
//     icon?: keyof typeof icons;
//     href?: string;
// }

interface ClickElementBaseProps {
    className?: string;
    children?: ReactNode | string;
    icon?: keyof typeof icons;
}

interface ClickElementLinkProps
    extends ClickElementBaseProps,
        Omit<ReactAriaLinkProps, "children" | "className" | "style"> {
    variant: "link";
}

interface ClickElementButtonProps
    extends ClickElementBaseProps,
        Omit<ReactAriaButtonProps, "children" | "className" | "style"> {
    variant: "button";
}

type ClickElementProps = ClickElementButtonProps | ClickElementLinkProps;

export function ClickElement({ children, className, icon, variant = "button", ...props }: ClickElementProps) {
    if (variant === "link") {
        return (
            <ReactAriaLink {...props} className={`${className} ${clickElementStyle()}`}>
                {icon && <Icon name={icon} />}
                {children}
            </ReactAriaLink>
        );
    } else if (variant === "button") {
        return (
            <ReactAriaButton {...props} className={`${className} ${clickElementStyle()}`}>
                {icon && <Icon name={icon} />}
                {children}
            </ReactAriaButton>
        );
    }
}

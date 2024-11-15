import { ReactNode } from "react";
import { Button as ReactAriaButton, ButtonProps as ReactAriaButtonProps } from "react-aria-components";
import { tv } from "tailwind-variants";
import { Spinner } from "../Spinner";
import { icons } from "lucide-react";
import { Icon } from "../Icon";
import { Color } from "../../constants";

const buttonStyle = tv({
    base: [
        "flex justify-center gap-3 items-center font-bold capitalize py-2 px-4 rounded subpixel-antialiased select-none",
        "hover:shadow-md active:opacity-90 pressed:scale-[1.01] transition-transform"
    ],
    variants: {
        color: {
            primary: ["bg-blue-600 text-white", "hover:bg-blue-800 focus:outline-blue-900"],
            secondary: [
                "bg-white text-blue-800 border-solid border-2 border-blue-800 py-1.5",
                "hover:bg-gray-50 focus:outline-blue-900 active:bg-blue-50"
            ],
            success: ["bg-green-600 text-white", "hover:bg-green-800 focus:outline-green-900"],
            warning: ["bg-yellow-600 text-white", "hover:bg-yellow-700 focus:outline-yellow-800"],
            danger: ["bg-red-600 text-white", "hover:bg-red-800 focus:outline-red-900"]
        },
        isDisabled: {
            true: [
                "bg-gray-100 text-gray-500 opacity-50 border-solid border-2 border-gray-400",
                "hover:bg-gray-100 hover:shadow-none focus:outline-0 active:opacity-50"
            ]
        },
        isPending: {
            true: "opacity-50 hover:bg-current pointer-events-none"
        }
    }
});

interface ButtonProps extends ReactAriaButtonProps {
    /**
     * Dictates the color scheme of the element
     */
    color?: Color;
    /**
     * Text children of the component.
     */
    children: ReactNode | string;
    /**
     * Additional tailwind styles for the element.
     */
    className?: string;
    /**
     * Icon at the start of the button container
     */
    startIcon?: keyof typeof icons;
    /**
     * Icon at the end of the button container
     */
    endIcon?: keyof typeof icons;
}

export function Button({ children, className, color = Color.Primary, startIcon, endIcon, ...props }: ButtonProps) {
    return (
        <ReactAriaButton
            {...props}
            className={buttonStyle({
                color,
                class: className,
                isDisabled: props.isDisabled,
                isPending: props.isPending
            })}
        >
            {startIcon && !props.isPending && <Icon name={startIcon} />}
            {props.isPending && <Spinner color={color} />}
            {children}
            {endIcon && <Icon name={endIcon} />}
        </ReactAriaButton>
    );
}

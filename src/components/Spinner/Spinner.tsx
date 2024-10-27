import { tv } from "tailwind-variants";
import SpinnerIcon from "../../icons/spinner.svg";

const wrapperStyle = tv({
    base: ["h-6 w-6"]
});

const svgStyle = tv({
    variants: {
        color: {
            primary: "stroke-white",
            secondary: "stroke-blue-800",
            success: "stroke-white",
            warning: "stroke-white",
            error: "stroke-white"
        }
    }
});

interface SpinnerProps {
    /**
     * Additional tailwind styles for the element.
     */
    className?: string;
    /**
     * Dictates the color scheme of the element.
     */
    color?: "primary" | "secondary" | "success" | "warning" | "error";
}

export function Spinner({ color }: SpinnerProps) {
    return (
        <div className={wrapperStyle()}>
            <SpinnerIcon className={svgStyle({ color })} width="100%" height="100%" />
        </div>
    );
}

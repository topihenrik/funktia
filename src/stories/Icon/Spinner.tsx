import { tv } from "tailwind-variants";
import SpinnerIcon from "../../icons/spinner.svg";

const style = tv({
    slots: {
        wrapper: "h-6 w-6",
        svg: ""
    },
    variants: {
        color: {
            primary: {
                svg: "stroke-white"
            },
            secondary: {
                svg: "stroke-blue-800"
            },
            success: {
                svg: "stroke-white"
            },
            warning: {
                svg: "stroke-white"
            },
            error: {
                svg: "stroke-white"
            }
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

export default function Spinner({ className, color }: SpinnerProps) {
    const { wrapper, svg } = style({ color });
    return (
        <div className={wrapper({ class: className })}>
            <SpinnerIcon className={svg()} width="100%" height="100%" />
        </div>
    );
}

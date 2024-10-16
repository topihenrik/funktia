import { tv } from "tailwind-variants";

const style = tv({
    base: "text-blue-600 hover:underline focus:outline-blue-600"
});

interface LinkProps {
    /**
     * Text children of the component.
     */
    children: string;
    /**
     * Additional tailwind styles for the element.
     */
    className?: string;
    /**
     * Specifies the link's destination
     */
    href?: string;
}

export function Link({ children, className, ...props }: LinkProps) {
    return (
        <a {...props} className={style({ class: className })}>
            {children}
        </a>
    );
}

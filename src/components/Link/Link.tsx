import { tv } from "tailwind-variants";

const linkStyle = tv({
    base: ["text-blue-600 hover:underline focus:outline-blue-600"]
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
        <a {...props} className={linkStyle({ class: className })}>
            {children}
        </a>
    );
}

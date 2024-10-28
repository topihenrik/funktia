import { tv } from "tailwind-variants";
import { LinkProps as ReactAriaLinkProps, Link as ReactAriaLink } from "react-aria-components";

const linkStyle = tv({
    base: ["text-blue-600 hover:underline focus:outline-blue-600"]
});

export function Link({ children, ...props }: ReactAriaLinkProps) {
    return (
        <ReactAriaLink {...props} className={`${linkStyle()} ${props.className}`}>
            {children}
        </ReactAriaLink>
    );
}

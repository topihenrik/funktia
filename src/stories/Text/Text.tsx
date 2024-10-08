import { ReactNode } from "react";

interface TextProps {
    /**
     * The children of the component.
     */
    children: ReactNode | string;
    /**
     * Additional tailwind styles for the element.
     */
    className?: string;
}

export default function Text({ children, className, ...props }: TextProps) {
    return (
        <span {...props} className={className}>
            {children}
        </span>
    );
}

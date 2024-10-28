import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const wrapperStyle = tv({
    base: ["flex justify-around flex-1"]
});

const dividerStyle = tv({
    base: ["border-t border-gray-950 w-1 my-8 w-auto flex-1"]
});

const contentStyle = tv({
    base: ["flex items-center justify-center px-4"]
});

interface DividerProps {
    /**
     * Content inside the divider
     */
    children?: ReactNode;
}

export function Divider({ children }: DividerProps) {
    if (children) {
        return (
            <div className={wrapperStyle()}>
                <div className={dividerStyle()} />
                <div className={contentStyle()}>{children}</div>
                <div className={dividerStyle()} />
            </div>
        );
    }

    return <div className={dividerStyle()} />;
}

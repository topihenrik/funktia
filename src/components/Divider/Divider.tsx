import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const style = tv({
    slots: {
        wrapper: "flex justify-around flex-1",
        divider: "border-t border-gray-950 w-1 my-8 w-auto flex-1",
        content: "flex items-center justify-center px-4"
    }
});

interface DividerProps {
    /**
     * Content inside the divider
     */
    children?: ReactNode;
}

export function Divider({ children }: DividerProps) {
    const { wrapper, divider, content } = style();
    if (children) {
        return (
            <div className={wrapper()}>
                <div className={divider()} />
                <div className={content()}>{children}</div>
                <div className={divider()} />
            </div>
        );
    }

    return <div className={divider()} />;
}

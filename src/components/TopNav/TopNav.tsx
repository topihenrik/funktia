import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const defaultItems = [<div key={Math.random()} />];

const navStyle = tv({
    base: ["flex justify-between border-b-2 p-2"]
});

const ulStyle = tv({
    base: ["flex items-center gap-2"]
});

interface TopNavProps {
    rightItems?: ReactNode[];
    leftItems?: ReactNode[];
}

export function TopNav({ rightItems = defaultItems, leftItems = defaultItems }: TopNavProps) {
    return (
        <nav className={navStyle()}>
            <ul className={ulStyle()}>
                {rightItems.map((item, i) => (
                    <li key={`ri${i}`}>{item}</li>
                ))}
            </ul>
            <ul className={ulStyle()}>
                {leftItems.map((item, i) => (
                    <li key={`li${i}`}>{item}</li>
                ))}
            </ul>
        </nav>
    );
}

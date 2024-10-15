import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const defaultItems = [<div key={Math.random()} />];

const style = tv({
    slots: {
        nav: "flex justify-between border-b-2 p-2",
        ul: "flex items-center gap-2",
        li: ""
    }
});

interface TopNavProps {
    rightItems?: ReactNode[];
    leftItems?: ReactNode[];
}

export function TopNav({ rightItems = defaultItems, leftItems = defaultItems }: TopNavProps) {
    const { nav, ul, li } = style();
    return (
        <nav className={nav()}>
            <ul className={ul()}>
                {rightItems.map((item, i) => (
                    <li className={li()} key={`ri${i}`}>
                        {item}
                    </li>
                ))}
            </ul>
            <ul className={ul()}>
                {leftItems.map((item, i) => (
                    <li className={li()} key={`li${i}`}>
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

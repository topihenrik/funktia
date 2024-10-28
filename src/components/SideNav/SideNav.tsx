import { icons } from "lucide-react";
import { Heading } from "../Heading";
import { ClickElement } from "../ClickElement";
import { tv } from "tailwind-variants";

const containerStyle = tv({
    base: ["flex flex-col gap-8 border-r-2 w-64 p-4"]
});

const ulStyle = tv({
    base: ["flex flex-col gap-2"]
});

const clickElementStyle = tv({
    base: ["rounded", "hover:bg-blue-100 focus:outline-blue-900"],
    variants: {
        active: {
            true: {
                clickElement: ["bg-blue-100 text-blue-600"]
            }
        }
    }
});

export interface SideNavItem {
    text: string;
    icon: keyof typeof icons;
    route: string;
    isActive?: boolean;
}

interface SideNavProps {
    title: string;
    items: SideNavItem[];
}

export function SideNav({ title, items }: SideNavProps) {
    return (
        <div className={containerStyle()}>
            <Heading level={2}>{title}</Heading>
            <nav>
                <ul className={ulStyle()}>
                    {items.map((item, i) => (
                        <li key={`sn${i}`}>
                            <ClickElement
                                className={`${clickElementStyle({ active: item.isActive })}`}
                                variant="a"
                                icon={item.icon}
                                href={item.route}
                            >
                                {item.text}
                            </ClickElement>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

import { icons } from "lucide-react";
import { Heading } from "../Heading";
import { ClickElement } from "../ClickElement";
import { tv } from "tailwind-variants";

const style = tv({
    slots: {
        container: "flex flex-col gap-8 border-r-2 w-64 p-4",
        ul: "flex flex-col gap-2",
        clickElement: ["rounded", "hover:bg-blue-100 focus:outline-blue-900"]
    },
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
    const { clickElement, container, ul } = style();
    return (
        <div className={container()}>
            <Heading level={2}>{title}</Heading>
            <nav>
                <ul className={ul()}>
                    {items.map((item, i) => (
                        <li key={`sn${i}`}>
                            <ClickElement
                                className={`${clickElement({ active: item.isActive })}`}
                                type="a"
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

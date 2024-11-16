import { icons } from "lucide-react";
import { Heading } from "../Heading";
import { ClickElement } from "../ClickElement";
import { tv } from "tailwind-variants";
import { useMemo } from "react";

const containerStyle = tv({
    base: ["flex flex-col gap-8 border-r-2 w-64 p-4"]
});

const ulStyle = tv({
    base: ["flex flex-col gap-2"]
});

const clickElementStyle = tv({
    base: ["rounded", "hover:bg-blue-100 focus:outline-blue-900"],
    variants: {
        isActive: {
            true: "bg-blue-100 text-blue-600"
        }
    }
});

interface BaseSideNavItem {
    text: string;
    icon: keyof typeof icons;
    route: string;
    isActive: boolean;
}

export type SideNavItem = Omit<BaseSideNavItem, "isActive">;

interface SideNavProps {
    /**
     * Title of the component
     */
    title: string;
    /**
     * Side navigation items
     */
    items: SideNavItem[];
    /**
     * Callback for navigation
     */
    navigationCallback: (to: string) => void;
}

export function SideNav({ title, navigationCallback, items }: SideNavProps) {
    const sidNavItems: BaseSideNavItem[] = useMemo(
        () =>
            items.map((item) => ({
                ...item,
                isActive: window.location.pathname.includes(item.route)
            })),
        [items, window.location.pathname]
    );

    return (
        <div className={containerStyle()}>
            <Heading level={2}>{title}</Heading>
            <nav>
                <ul className={ulStyle()}>
                    {sidNavItems.map((item, i) => (
                        <li key={`sn${i}`}>
                            <ClickElement
                                className={clickElementStyle({ isActive: item.isActive })}
                                variant="link"
                                onPress={() => navigationCallback(item.route)}
                                icon={item.icon}
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

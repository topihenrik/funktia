import {
    Tabs as ReactAriaTabs,
    TabList as ReactAriaTabList,
    Tab as ReactAriaTab,
    TabPanel as ReactAriaTabPanel
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { ReactNode } from "react";

const tabsStyle = tv({
    base: ""
});

const tabListStyle = tv({
    base: "flex border-b border-gray-400"
});

const tabStyle = tv({
    base: "cursor-pointer py-2 px-4 relative outline-none",
    variants: {
        isSelected: {
            true: "border-b-2 border-blue-600"
        },
        isFocusVisible: {
            true: [
                "after:content-[''] after:absolute after:border-2 after:rounded",
                "after:border-gray-900 after:inset-0 after:p-4"
            ]
        }
    }
});

const tabPanelStyle = tv({
    base: "mt-2"
});

interface TabItem {
    id: string;
    title: string;
    panel: ReactNode;
}

interface TabsProps {
    items: TabItem[];
    ["aria-label"]?: string;
}

export function Tabs({ items, ...props }: TabsProps) {
    return (
        <ReactAriaTabs className={tabsStyle}>
            <ReactAriaTabList className={tabListStyle} aria-label={props["aria-label"]}>
                {items.map(({ id, title }) => (
                    <ReactAriaTab className={tabStyle} id={id}>
                        {title}
                    </ReactAriaTab>
                ))}
            </ReactAriaTabList>
            {items.map(({ id, panel }) => (
                <ReactAriaTabPanel className={tabPanelStyle} id={id}>
                    {panel}
                </ReactAriaTabPanel>
            ))}
        </ReactAriaTabs>
    );
}

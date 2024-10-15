import { Meta, StoryObj } from "@storybook/react";
import { SideNav } from "./SideNav";

const meta: Meta<typeof SideNav> = {
    component: SideNav,
    title: "SideNav",
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof SideNav>;

export const Default: Story = {
    args: {
        title: "Tasks",
        items: [
            {
                text: "Dashboard",
                icon: "LayoutDashboard",
                route: "dashboard"
            },
            {
                text: "Tasks List",
                icon: "Notebook",
                route: "tasks/list"
            },
            {
                text: "Tasks Kanban",
                icon: "Kanban",
                route: "tasks/kanban"
            }
        ]
    }
};

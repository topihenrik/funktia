import { StoryObj, Meta } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
    component: Link,
    title: "Link",
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
    args: {
        children: "Link 1",
        href: "/path/1"
    }
};

export const Variants: Story = {
    render: () => {
        return (
            <div className="flex gap-4">
                <Link href="/path/1">Link 1: href</Link>
                <Link onPress={() => alert("mock navigate")}>Link 2: OnPress</Link>
            </div>
        );
    }
};

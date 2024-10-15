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
                <Link href="/path/1">Link 1</Link>
                <Link href="/path/2">Link 2</Link>
                <Link href="/path/3">Link 3</Link>
            </div>
        );
    }
};

import { StoryObj, Meta } from "@storybook/react";
import { TopNav } from "./TopNav";
import { Button } from "../Button";

const meta: Meta<typeof TopNav> = {
    component: TopNav,
    title: "TopNav",
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof TopNav>;

export const Default: Story = {
    args: {
        rightItems: [<div />],
        leftItems: [<Button color="primary">Account</Button>, <Button color="secondary">Logout</Button>]
    },
    render: (args) => (
        <div className="w-full">
            <TopNav {...args} />
        </div>
    )
};

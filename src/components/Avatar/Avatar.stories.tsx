import { StoryObj, Meta } from "@storybook/react";
import { Avatar } from "./Avatar";
// @ts-expect-error Example avatar
import exampleAvatar from "../../media/cat.webp";

const meta: Meta<typeof Avatar> = {
    component: Avatar,
    title: "Avatar",
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        src: exampleAvatar
    }
};

export const Variants: Story = {
    render: () => {
        return (
            <div className="flex gap-8 items-center">
                <div>
                    Undefined
                    <Avatar />
                </div>
                <div>
                    Defined
                    <Avatar src={exampleAvatar} />
                </div>
            </div>
        );
    }
};

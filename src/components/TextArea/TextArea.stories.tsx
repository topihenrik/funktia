import { StoryObj, Meta } from "@storybook/react";
import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
    component: TextArea,
    title: "TextArea",
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
    args: {
        label: "Label"
    }
};

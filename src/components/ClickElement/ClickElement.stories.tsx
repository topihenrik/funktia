import { Meta, StoryObj } from "@storybook/react";
import { ClickElement } from "./ClickElement";

const meta: Meta<typeof ClickElement> = {
    component: ClickElement,
    title: "ClickElement",
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof ClickElement>;

export const Types: Story = {
    render: () => (
        <div className="flex gap-4">
            <ClickElement type="button" icon="House">
                Button
            </ClickElement>
            <ClickElement href="#" type="a" icon="House">
                Anchor
            </ClickElement>
        </div>
    )
};

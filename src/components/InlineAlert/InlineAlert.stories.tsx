import { StoryObj, Meta } from "@storybook/react";
import { InlineAlert } from "./InlineAlert";

const meta: Meta<typeof InlineAlert> = {
    component: InlineAlert,
    title: "InlineAlert",
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof InlineAlert>;

export const Default: Story = {
    args: {
        message: "Hello"
    },
    render: () => {
        return (
            <div className="w-64">
                <InlineAlert severity="info" message="Informative message" />
            </div>
        );
    }
};

export const Colors: Story = {
    render: () => {
        return (
            <div className="flex flex-col gap-4 w-64">
                <InlineAlert severity="info" message="Informative message" />
                <InlineAlert severity="success" message="Success message" />
                <InlineAlert severity="warning" message="Warning message" />
                <InlineAlert severity="danger" message="Danger message" />
            </div>
        );
    }
};
